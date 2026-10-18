"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { WaveOverlay } from "./WaveOverlay";

export function Preloader({ onComplete }: { onComplete?: () => void }) {
  const [hasPlayed, setHasPlayed] = useState<boolean>(true); // initially assume true to avoid hydration mismatch
  const [mounted, setMounted] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const waveRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const seen = sessionStorage.getItem("bbs_preloader_seen");
    if (seen === "true") {
      setHasPlayed(true);
      if (onComplete) onComplete();
      return;
    }

    setHasPlayed(false);

    // Lock scroll during preloader
    document.body.style.overflow = "hidden";

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      const timer = setTimeout(() => {
        sessionStorage.setItem("bbs_preloader_seen", "true");
        setHasPlayed(true);
        document.body.style.overflow = "";
        if (onComplete) onComplete();
      }, 400);
      return () => clearTimeout(timer);
    }

    // Timeline setup
    const tl = gsap.timeline({
      onComplete: () => {
        sessionStorage.setItem("bbs_preloader_seen", "true");
        setHasPlayed(true);
        document.body.style.overflow = "";
        window.dispatchEvent(new CustomEvent("preloader-finished"));
        if (onComplete) onComplete();
      },
    });

    // 1. Reveal headline characters with tracking
    if (headlineRef.current) {
      tl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 30, letterSpacing: "0.22em" },
        { opacity: 1, y: 0, letterSpacing: "0.14em", duration: 1.2, ease: "power3.out" }
      );
    }

    // 2. Minimum pause of 2.2s before wave descent
    tl.to({}, { duration: 1.0 });

    // 3. Wave descends from top to bottom (covering screen)
    if (waveRef.current) {
      tl.fromTo(
        waveRef.current,
        { yPercent: -100 },
        {
          yPercent: 0,
          duration: 1.5,
          ease: "power2.inOut",
          onComplete: () => {
            // Hide the ocean stage behind white
            if (stageRef.current) {
              stageRef.current.style.opacity = "0";
            }
          },
        }
      );

      // 4. Wave retreats back upward off the top (revealing hero underneath)
      tl.to(waveRef.current, {
        yPercent: -100,
        duration: 1.6,
        ease: "power2.inOut",
        onStart: () => {
          // Trigger header fade-in at ~60%
          setTimeout(() => {
            window.dispatchEvent(new CustomEvent("hero-intro-start"));
          }, 800);
        },
      });
    }

    return () => {
      tl.kill();
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  if (!mounted || hasPlayed) return null;

  const titleText = "KELVA'S BEST RESORT";

  return (
    <div
      ref={containerRef}
      id="site-preloader"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-deep-navy overflow-hidden"
    >
      {/* Ocean Stage: Full-bleed aerial crashing foam background */}
      <div ref={stageRef} className="absolute inset-0 z-0">
        <Image
          src="/assets/sky/ocean-foam.jpg"
          alt="Crashing coastal ocean waves"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-75 contrast-125"
        />
        {/* Soft coastal blue vignette overlay */}
        <div className="absolute inset-0 bg-navy-blue/30 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 via-transparent to-deep-navy/60" />

        {/* Centered Headline in aesthetic Cormorant Garamond */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center select-none z-10">
          <span className="text-champagne-gold text-xs uppercase tracking-[0.25em] mb-4 font-sans font-medium">
            Coastal Calm at the Blue Hour
          </span>
          <h1
            ref={headlineRef}
            className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-warm-ivory uppercase tracking-[0.14em] font-normal max-w-4xl drop-shadow-md"
          >
            {titleText}
          </h1>
          <div className="w-16 h-[1px] bg-champagne-gold/60 mt-6" />
        </div>
      </div>

      {/* Wave Overlay: Fixed multi-layer undulating wave travelling down then up */}
      <div
        ref={waveRef}
        className="fixed inset-0 z-20 pointer-events-none transform -translate-y-full"
      >
        <div className="absolute inset-0 bg-white" />
        <WaveOverlay />
      </div>
    </div>
  );
}
