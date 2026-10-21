"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface HeroTideTransitionProps {
  hero: ReactNode;
  intro: ReactNode;
}

export function HeroTideTransition({ hero, intro }: HeroTideTransitionProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const heroLayerRef = useRef<HTMLDivElement>(null);
  const dimRef = useRef<HTMLDivElement>(null);
  const washRef = useRef<HTMLDivElement>(null);
  const introLayerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const f1Ref = useRef<SVGPathElement>(null);
  const f2Ref = useRef<SVGPathElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const heroLayer = heroLayerRef.current;
    const dim = dimRef.current;
    const wash = washRef.current;
    const introLayer = introLayerRef.current;
    const svg = svgRef.current;
    const f1 = f1Ref.current;
    const f2 = f2Ref.current;

    if (!track || !heroLayer || !dim || !wash || !introLayer || !svg || !f1 || !f2) {
      return;
    }

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let W = window.innerWidth;
    let H = window.innerHeight;
    let isMobile = W < 768;
    let trackTop = 0;
    let trackHeight = 0;

    const measure = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      isMobile = W < 768;
      svg.setAttribute("viewBox", `0 0 ${W} ${H}`);

      // Apply double drop-shadow glow only on desktop; disable on mobile to prevent GPU fill-rate pipeline stall
      if (isMobile) {
        svg.style.filter = "none";
      } else {
        svg.style.filter =
          "drop-shadow(0 0 8px rgba(255, 255, 255, 0.95)) drop-shadow(0 0 16px rgba(233, 251, 246, 0.6))";
      }

      const rect = track.getBoundingClientRect();
      const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
      trackTop = rect.top + scrollY;
      trackHeight = track.offsetHeight;
    };

    measure();
    window.addEventListener("resize", measure, { passive: true });

    const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));

    const edge = (base: number, ph: number, A: number, nPoints: number) => {
      const s: string[] = [];
      let d = "";
      for (let i = 0; i <= nPoints; i++) {
        const x = (W * i) / nPoints;
        const u = (i / nPoints) * 6.2831853; // 2 * PI
        const y = base + A * Math.sin(u * 1.4 + ph) + A * 0.45 * Math.sin(u * 3.3 - ph * 1.6);
        s.push(`${x.toFixed(1)}px ${y.toFixed(1)}px`);
        d += (i ? "L" : "M") + `${x.toFixed(1)} ${y.toFixed(1)}`;
      }
      return {
        poly: `polygon(${s.join(",")},${W}px ${H + 40}px,0px ${H + 40}px)`,
        d,
      };
    };

    let rafId: number | null = null;
    let isVisible = true;
    let lastState: "start" | "end" | "animating" | null = null;
    let frameSkip = 0; // Mobile throttle: skip every other frame to halve CPU load

    const frame = (ts: number) => {
      if (!isVisible) {
        rafId = null;
        return;
      }

      // On mobile, halve the frame rate to 30fps — clip-path polygon recalculation
      // per frame is expensive and 30fps is visually sufficient for a scroll transition.
      if (isMobile) {
        frameSkip++;
        if (frameSkip % 2 !== 0) {
          rafId = requestAnimationFrame(frame);
          return;
        }
      }

      const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
      const max = trackHeight - H;
      const p = max > 0 ? clamp((scrollY - trackTop) / max) : 0;

      // When scrolled far past the hero track, bypass calculations
      if (scrollY > trackTop + trackHeight + 100) {
        if (lastState !== "end") {
          lastState = "end";
          introLayer.style.clipPath = "none";
          wash.style.clipPath = "none";
          wash.style.opacity = "0";
          svg.style.opacity = "0";
          introLayer.style.pointerEvents = "auto";
          dim.style.opacity = "0.45";
          heroLayer.style.transform = "translate3d(0, -60px, 0)";
        }
        rafId = requestAnimationFrame(frame);
        return;
      }

      const sp = p;

      // Progress mapping
      let q: number;
      let e: number;
      if (isMobile) {
        // Mobile: immediate 1:1 responsive reveal without sluggish easing dead zones
        q = clamp(sp / 0.92);
        e = q;
      } else {
        // Desktop: unchanged cinematic ease
        q = clamp((sp - 0.02) / (0.90 - 0.02));
        e = 0.5 - Math.cos(Math.PI * q) / 2;
      }

      const N = isMobile ? 12 : 32;
      const A = reduce ? 0 : isMobile ? Math.min(26, H * 0.038) : Math.min(44, H * 0.055);
      const ph = isMobile ? sp * 8 : ts / 1400 + sp * 9;

      // Clip second section and translucent wash layer
      if (q >= 0.99) {
        if (lastState !== "end") {
          lastState = "end";
          introLayer.style.clipPath = "none";
          wash.style.clipPath = "none";
          wash.style.opacity = "0";
          svg.style.opacity = "0";
          introLayer.style.pointerEvents = "auto";
          dim.style.opacity = "0.45";
          heroLayer.style.transform = "translate3d(0, -60px, 0)";
        }
      } else if (q <= 0.01) {
        if (lastState !== "start") {
          lastState = "start";
          introLayer.style.clipPath = `polygon(0px ${H + 100}px, ${W}px ${H + 100}px, ${W}px ${H + 100}px, 0px ${H + 100}px)`;
          wash.style.clipPath = `polygon(0px ${H + 100}px, ${W}px ${H + 100}px, ${W}px ${H + 100}px, 0px ${H + 100}px)`;
          wash.style.opacity = "0";
          svg.style.opacity = "0";
          introLayer.style.pointerEvents = "none";
          dim.style.opacity = "0";
          heroLayer.style.transform = "none";
        }
      } else {
        lastState = "animating";
        const startY = H + A * 1.5 + (isMobile ? 30 : 80);
        const endY = -A * 1.5 - (isMobile ? 30 : 80);
        const base = startY + (endY - startY) * e;

        const a = edge(base, ph, A, N);
        const b = edge(base - (isMobile ? 40 : 65), ph + 1.3, A * 1.2, N);

        introLayer.style.clipPath = a.poly;
        wash.style.clipPath = b.poly;
        wash.style.opacity = "1";
        f1.setAttribute("d", a.d);
        f2.setAttribute("d", b.d);
        svg.style.opacity = String(Math.min(q * 10, (1 - q) * 10, 1));
        dim.style.opacity = String(e * 0.45);
        heroLayer.style.transform = `translate3d(0, ${-e * 60}px, 0)`;
        introLayer.style.pointerEvents = q > 0.7 ? "auto" : "none";
      }

      rafId = requestAnimationFrame(frame);
    };

    const startAnimation = () => {
      if (rafId === null) {
        rafId = requestAnimationFrame(frame);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          startAnimation();
        } else if (rafId !== null) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
      },
      { rootMargin: "150px 0px" }
    );

    observer.observe(track);
    startAnimation();

    return () => {
      observer.disconnect();
      if (rafId !== null) cancelAnimationFrame(rafId);
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <div ref={trackRef} className="relative w-full h-[145vh] md:h-[200vh] select-none">
      {/* Sticky Stage Container */}
      <div className="sticky top-0 h-[100dvh] w-full overflow-hidden">
        {/* Layer 1: Section 1 (Hero) */}
        <div ref={heroLayerRef} className="absolute inset-0 w-full h-full will-change-transform z-0">
          {hero}
        </div>

        {/* Hero Dimming Filter during wave rise */}
        <div
          ref={dimRef}
          className="absolute inset-0 bg-[#06323a] pointer-events-none z-10 opacity-0"
          aria-hidden="true"
        />

        {/* Layer 2: Translucent Cyan/Teal Tidal Wash */}
        <div
          ref={washRef}
          className="absolute inset-0 pointer-events-none z-10 will-change-[clip-path] transform-gpu"
          style={{
            background:
              "linear-gradient(to top, rgba(14, 124, 134, 0.72) 0%, rgba(20, 160, 172, 0.45) 50%, rgba(233, 251, 246, 0.6) 100%)",
          }}
          aria-hidden="true"
        />

        {/* Layer 3: Section 2 (IntroTrustSection with background video) */}
        <div
          ref={introLayerRef}
          className="absolute inset-0 w-full h-full z-20 will-change-[clip-path] transform-gpu"
          style={{ pointerEvents: "none", overflow: "hidden" }}
        >
          {intro}
        </div>

        {/* Layer 4: Shimmering Foam Crest SVG Line */}
        <svg
          ref={svgRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-30 opacity-0"
          aria-hidden="true"
        >
          {/* Main front wave foam line */}
          <path ref={f1Ref} stroke="#e9fbf6" strokeWidth={3} fill="none" strokeLinejoin="round" />
          {/* Secondary trailing wash wave line */}
          <path ref={f2Ref} stroke="#e9fbf6" strokeWidth={1.5} opacity={0.65} fill="none" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}
