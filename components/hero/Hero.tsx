"use client";

import { useRef, useState, useEffect, type MouseEvent } from "react";
import Image from "next/image";
import { scrollToSection } from "@/lib/scroll-nav";

type NetworkInformation = {
  saveData?: boolean;
  effectiveType?: string;
};

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
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

    // Mount the video right after hydration so it replaces the poster quickly.
    setShouldLoadVideo(true);
  }, []);

  useEffect(() => {
    if (!shouldLoadVideo) return;
    const video = videoRef.current;
    if (!video) return;
    video
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => setIsPlaying(false));
  }, [shouldLoadVideo]);

  const handleDiscoverClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToSection("rooms-section");
  };

  return (
    <section
      id="hero-section"
      className="relative w-full h-[100svh] overflow-hidden flex items-center justify-center bg-deep-navy text-warm-ivory select-none"
    >
      {/* Background Poster for instant paint & reduced motion */}
      <Image
        src="/assets/hero/hero-canopy-poster.jpg"
        alt="Beyond Sands Coastal Canopy Overview"
        fill
        priority
        sizes="100vw"
        className={`object-cover object-center luxury-grade transition-opacity duration-1000 ${
          isPlaying ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Autoplaying Hero Looping Video (skipped on small screens, save-data, slow networks) */}
      {shouldLoadVideo && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/assets/hero/hero-canopy-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover object-center luxury-grade"
        >
          <source src="/assets/hero/hero-video.mp4" type="video/mp4" />
          <source src="/assets/hero/hero-video.webm" type="video/webm" />
        </video>
      )}

      {/* Cinematic Overlays (Subtle top & bottom fades for header & controls legibility) */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-navy/50 via-transparent to-deep-navy/60 pointer-events-none" />

      {/* Accessible h1 for SEO and screen readers without visual overlay */}
      <h1 className="sr-only">
        Beyond Sands Resort · Coastal Calm at Kelva Beach, Palghar
      </h1>

      {/* Bottom Minimalist Scroll Indicator */}
      <div className="absolute bottom-8 left-6 sm:left-12 right-6 sm:right-12 z-20 flex items-end justify-center pointer-events-none">
        <div className="pointer-events-auto">
          <a
            href="#rooms-section"
            aria-label="Scroll to Rooms & Suites"
            onClick={handleDiscoverClick}
            className="flex flex-col items-center gap-2 text-warm-ivory/80 hover:text-champagne-gold transition-colors duration-300 group cursor-pointer"
          >
            <div className="w-[1px] h-10 bg-gradient-to-b from-champagne-gold via-champagne-gold/60 to-transparent group-hover:h-12 transition-all duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}
