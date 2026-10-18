"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

type NetworkInformation = {
  saveData?: boolean;
  effectiveType?: string;
};

export function Hero() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState<boolean>(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const connection = (navigator as Navigator & { connection?: NetworkInformation }).connection;
    const saveData = connection?.saveData === true;
    const slowNetwork =
      typeof connection?.effectiveType === "string" &&
      /^(slow-2g|2g|3g)$/.test(connection.effectiveType);
    const smallScreen = Math.min(window.innerWidth, window.innerHeight) < 600;

    if (reducedMotion || saveData || slowNetwork || smallScreen) return;

    setShouldLoadVideo(true);
  }, []);

  return (
    <section
      id="hero-section"
      className="relative w-full min-h-[100dvh] overflow-hidden flex items-end bg-deep-navy text-warm-ivory select-none"
    >
      <Image
        src="/assets/hero/hero-canopy-poster.jpg"
        alt="Beyond Sands coastal canopy overlooking Kelva Beach"
        fill
        priority
        sizes="100vw"
        className={`object-cover object-center luxury-grade transition-opacity duration-1000 ${
          isPlaying ? "opacity-0" : "opacity-100"
        }`}
      />

      {shouldLoadVideo && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <iframe
            src="https://www.youtube-nocookie.com/embed/YBjgWfEOSXY?autoplay=1&mute=1&controls=0&loop=1&playlist=YBjgWfEOSXY&playsinline=1&rel=0&showinfo=0&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0"
            title="Beyond Sands Resort"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            onLoad={() => setIsPlaying(true)}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] min-w-full h-full min-h-[56.25vw] pointer-events-none scale-105 border-0"
          />
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/50 via-transparent to-deep-navy/30 pointer-events-none" />

      {/* Screen-reader and SEO accessible heading */}
      <h1 className="sr-only">Beyond Sands Resort — Kelva Beach, Palghar</h1>

      <div className="absolute bottom-6 right-6 sm:right-12 z-20 hidden sm:flex flex-col items-center gap-3 text-warm-ivory/70">
        <span className="font-sans text-[10px] uppercase tracking-[0.22em]">Scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}
