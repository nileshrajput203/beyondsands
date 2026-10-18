"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { PlayIcon, PauseIcon } from "../icons";
import { AudioAtmosphere } from "./AudioAtmosphere";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isReducedMotion, setIsReducedMotion] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);

    if (videoRef.current) {
      if (mediaQuery.matches) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().catch(() => {
          setIsPlaying(false);
        });
      }
    }
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
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

      {/* Autoplaying Hero Looping Video */}
      {!isReducedMotion && (
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

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-deep-navy/40 mix-blend-multiply pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(7,23,39,0.45)_0%,rgba(7,23,39,0.75)_100%)] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/90 via-transparent to-deep-navy/50 pointer-events-none" />

      {/* Hero Atmosphere / Minimal Brand Line */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-champagne-gold/30 bg-deep-navy/40 backdrop-blur-md mb-6 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-champagne-gold animate-pulse" />
          <span className="font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-champagne-gold font-medium">
            Kelva Beach · Palghar
          </span>
        </div>

        <h1 className="font-display font-normal text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wide text-warm-ivory leading-tight [text-shadow:0_4px_32px_rgba(0,0,0,0.7)]">
          Coastal calm at the blue hour
        </h1>

        <p className="font-sans text-xs sm:text-sm tracking-wider text-warm-ivory/85 max-w-xl mt-6 font-light leading-relaxed [text-shadow:0_2px_12px_rgba(0,0,0,0.8)]">
          Wake to palms, wind, and the sea&apos;s quiet hush. Premium coastal resort with private verandahs and curated local experiences.
        </p>
      </div>

      {/* Bottom Controls Bar */}
      <div className="absolute bottom-8 left-6 sm:left-12 right-6 sm:right-12 z-20 flex items-end justify-between pointer-events-none">
        {/* Left: Video Play/Pause & Ocean Audio Controls */}
        <div className="pointer-events-auto flex items-center gap-2.5">
          <button
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause hero background video" : "Play hero background video"}
            className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-deep-navy/60 backdrop-blur-md text-warm-ivory hover:text-champagne-gold border border-warm-ivory/20 hover:border-champagne-gold transition-all duration-300 cursor-pointer shadow-lg group"
          >
            {isPlaying ? <PauseIcon size={14} /> : <PlayIcon size={14} />}
            <span className="font-sans text-[10px] uppercase tracking-widest text-warm-ivory/70 group-hover:text-champagne-gold font-medium hidden sm:inline">
              {isPlaying ? "Pause" : "Play"}
            </span>
          </button>

          <AudioAtmosphere />
        </div>

        {/* Center: Scroll Indicator */}
        <div className="pointer-events-auto absolute left-1/2 -translate-x-1/2 bottom-0">
          <a
            href="#rooms-section"
            aria-label="Scroll to Rooms & Suites"
            className="flex flex-col items-center gap-2 text-warm-ivory/80 hover:text-champagne-gold transition-colors duration-300 group cursor-pointer"
          >
            <span className="font-sans text-[10px] uppercase tracking-[0.25em] font-medium drop-shadow-sm">
              Discover Sanctuary
            </span>
            <div className="w-[1px] h-9 bg-gradient-to-b from-champagne-gold via-champagne-gold/60 to-transparent group-hover:h-12 transition-all duration-300" />
          </a>
        </div>

        {/* Right: Balance spacer (leaves room for WhatsApp concierge FAB) */}
        <div className="w-12 sm:w-28 pointer-events-none" />
      </div>
    </section>
  );
}
