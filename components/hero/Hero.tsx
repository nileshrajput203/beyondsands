"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

type NetworkInformation = {
  saveData?: boolean;
  effectiveType?: string;
};

export function Hero() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const connection = (navigator as Navigator & { connection?: NetworkInformation }).connection;
    const saveData = connection?.saveData === true;
    const slowNetwork =
      typeof connection?.effectiveType === "string" &&
      /^(slow-2g|2g)$/.test(connection.effectiveType);

    if (reducedMotion || saveData || slowNetwork) return;

    setShouldLoadVideo(true);
  }, []);

  useEffect(() => {
    if (!shouldLoadVideo) return;
    const video = videoRef.current;
    if (!video) return;

    video
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => {
        // Autoplay policy fallback (browser policy)
      });
  }, [shouldLoadVideo]);

  return (
    <section
      id="hero-section"
      className="relative w-full min-h-[100dvh] overflow-hidden flex items-end bg-deep-navy text-warm-ivory select-none"
    >
      <Image
        src="/assets/hero/hero-canopy-poster.jpg"
        alt="Beyond Sands Resort coastal canopy overlooking Kelva Beach"
        fill
        priority
        sizes="100vw"
        className={`object-cover object-center transition-opacity duration-1000 ${
          isPlaying ? "opacity-0" : "opacity-100"
        }`}
      />

      {shouldLoadVideo && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="/assets/hero/hero-canopy-poster.jpg"
          onPlaying={() => setIsPlaying(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            isPlaying ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src="/assets/hero/hero-video.mp4" type="video/mp4" />
          <source src="/assets/hero/hero-video.webm" type="video/webm" />
        </video>
      )}

      {/* Screen-reader and SEO accessible heading */}
      <h1 className="sr-only">Beyond Sands Resort — Kelva Beach, Palghar</h1>

      <div className="absolute bottom-6 right-6 sm:right-12 z-20 hidden sm:flex flex-col items-center gap-3 text-warm-ivory/70">
        <span className="font-sans text-[10px] uppercase tracking-[0.22em]">Scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}
