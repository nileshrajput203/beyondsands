"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { consumePendingHash, registerLenis, scrollToSection } from "@/lib/scroll-nav";

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // Instantiate Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;
    registerLenis(lenis);

    // Drive Lenis from GSAP Ticker exactly as mandated in Section 9
    lenis.on("scroll", ScrollTrigger.update);

    const tickerCb = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCb);
    gsap.ticker.lagSmoothing(0);

    // Consolidated refresh: after initial mount, once webfonts load, and on full window load
    let disposed = false;
    const refresh = () => {
      if (!disposed) ScrollTrigger.refresh();
    };

    refresh();
    document.fonts.ready.then(refresh);
    const handleLoad = () => refresh();
    window.addEventListener("load", handleLoad, { once: true });

    return () => {
      disposed = true;
      window.removeEventListener("load", handleLoad);
      registerLenis(null);
      gsap.ticker.remove(tickerCb);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const pathname = usePathname();

  // After cross-page section navigation (e.g. /about -> /#food-section),
  // wait for the section to mount, then glide to it with Lenis.
  useEffect(() => {
    const id = consumePendingHash();
    if (!id || pathname !== "/") return;

    let attempts = 0;
    let timer: number | undefined;
    const tryScroll = () => {
      if (scrollToSection(id)) return;
      if (attempts++ < 40) {
        timer = window.setTimeout(tryScroll, 50);
      }
    };
    tryScroll();

    return () => {
      if (timer !== undefined) window.clearTimeout(timer);
    };
  }, [pathname]);

  return <>{children}</>;
}
