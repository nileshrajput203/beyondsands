"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Utensils, MapPin, ShieldCheck, Waves } from "lucide-react";

export function IntroTrustSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const desktop = window.innerWidth >= 768;
      setIsDesktop(desktop);
      if (desktop && videoRef.current) {
        videoRef.current.defaultMuted = true;
        videoRef.current.muted = true;
        videoRef.current.play().catch(() => {
          // Autoplay policy fallback
        });
      }
    }
  }, []);

  const whatsappUrl =
    "https://wa.me/919923895055?text=" +
    encodeURIComponent("Hi Beyond Sands! I'm planning a trip to Palghar and want to check room and picnic availability.");

  return (
    <section
      id="intro-overview-section"
      className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden text-[#1E2D3D] max-md:p-0 pt-16 sm:pt-20 lg:pt-20 pb-4 sm:pb-6 px-4 sm:px-6 lg:px-8 select-none border-b border-[#E3D7C2]/70 bg-[#F5EFE3]"
    >
      {/* ======================================================== */}
      {/* MOBILE-ONLY SECOND SECTION: ONLY POSTER IMAGE (< 768px)  */}
      {/* ======================================================== */}
      <div className="block md:hidden absolute inset-0 w-full h-full z-10 overflow-hidden bg-[#E7DCCB]">
        <Image
          src="/assets/intro/beyond-sands-poster.png"
          alt="Beyond Sands Resort — Pure Veg Beachside Escape, Kelva Beach, Palghar"
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 1px"
          quality={75}
          className="object-cover object-center"
        />
      </div>

      {/* ======================================================== */}
      {/* DESKTOP-ONLY BACKGROUND VIDEO (>= 768px strictly)        */}
      {/* ======================================================== */}
      {isDesktop && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="/assets/intro/intro-video-poster.jpg"
          className="hidden md:block absolute inset-0 w-full h-full object-cover pointer-events-none select-none z-0"
        >
          <source src="/assets/intro/intro-section-fast.mp4" type="video/mp4" />
          <source src="/assets/intro/intro-section-video.mp4" type="video/mp4" />
        </video>
      )}

      {/* Subtle protective overlay for text contrast (Desktop only) */}
      <div
        className="hidden md:block absolute inset-0 bg-[#FAF6EE]/15 pointer-events-none z-10"
        aria-hidden="true"
      />

      {/* ======================================================== */}
      {/* DESKTOP-ONLY CENTRAL CONTENT CONTAINER (>= 768px)        */}
      {/* ======================================================== */}
      <div className="hidden md:flex relative z-20 w-full max-w-6xl mx-auto flex-col items-center text-center">

        {/* 1. TOP PILL STRIP (5 TRUST BADGES IN A ROW) */}
        <div className="w-full max-w-full flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar pb-1 mb-2.5 sm:mb-5">
          <div className="flex items-center gap-1.5 sm:gap-2.5 lg:gap-3 flex-nowrap shrink-0 px-1">
            {/* Pill 1: Google Rating */}
            <div className="flex items-center gap-1 sm:gap-2 px-2.5 py-1 sm:px-4 sm:py-2 rounded-full bg-[#FAF6EE]/90 backdrop-blur-md border border-[#D8C7A8] shadow-[0_2px_8px_rgba(0,0,0,0.03)] text-[10px] sm:text-[12.5px] font-sans text-[#1B2E3E] shrink-0">
              <span className="text-[#E5A11A] text-xs">★</span>
              <span className="font-medium whitespace-nowrap">4.3+ Google Rating</span>
            </div>

            {/* Pill 2: Pure Veg & Jain */}
            <div className="flex items-center gap-1 sm:gap-2 px-2.5 py-1 sm:px-4 sm:py-2 rounded-full bg-[#FAF6EE]/90 backdrop-blur-md border border-[#D8C7A8] shadow-[0_2px_8px_rgba(0,0,0,0.03)] text-[10px] sm:text-[12.5px] font-sans text-[#1B2E3E] shrink-0">
              <Utensils className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#9B723B]" />
              <span className="font-medium whitespace-nowrap">100% Pure Veg &amp; Jain</span>
            </div>

            {/* Pill 3: 2-Min Walk to Beach */}
            <div className="flex items-center gap-1 sm:gap-2 px-2.5 py-1 sm:px-4 sm:py-2 rounded-full bg-[#FAF6EE]/90 backdrop-blur-md border border-[#D8C7A8] shadow-[0_2px_8px_rgba(0,0,0,0.03)] text-[10px] sm:text-[12.5px] font-sans text-[#1B2E3E] shrink-0">
              <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#9B723B]" />
              <span className="font-medium whitespace-nowrap">2-Min Walk to Beach</span>
            </div>

            {/* Pill 4: Opposite Shitladevi Temple */}
            <div className="flex items-center gap-1 sm:gap-2 px-2.5 py-1 sm:px-4 sm:py-2 rounded-full bg-[#FAF6EE]/90 backdrop-blur-md border border-[#D8C7A8] shadow-[0_2px_8px_rgba(0,0,0,0.03)] text-[10px] sm:text-[12.5px] font-sans text-[#1B2E3E] shrink-0">
              <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#9B723B]" />
              <span className="font-medium whitespace-nowrap">Opposite Sheetla Devi Temple</span>
            </div>

            {/* Pill 5: 40ft Pool with Lifeguard */}
            <div className="flex items-center gap-1 sm:gap-2 px-2.5 py-1 sm:px-4 sm:py-2 rounded-full bg-[#FAF6EE]/90 backdrop-blur-md border border-[#D8C7A8] shadow-[0_2px_8px_rgba(0,0,0,0.03)] text-[10px] sm:text-[12.5px] font-sans text-[#1B2E3E] shrink-0">
              <Waves className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#9B723B]" />
              <span className="font-medium whitespace-nowrap">40ft Pool &amp; Rain Dance</span>
            </div>
          </div>
        </div>

        {/* 2. EYEBROW WITH GOLD ACCENT LINES */}
        <div className="flex items-center justify-center gap-2.5 sm:gap-4 mb-1.5 sm:mb-3">
          <div className="h-[1px] w-6 sm:w-12 bg-[#B89058]/80" />
          <span className="font-sans text-[9.5px] sm:text-[12px] uppercase tracking-[0.2em] sm:tracking-[0.24em] text-[#9E733E] font-medium whitespace-nowrap">
            Kelva Beach · Kelve Road · Palghar
          </span>
          <div className="h-[1px] w-6 sm:w-12 bg-[#B89058]/80" />
        </div>

        {/* 3. MAIN HEADING (H1) */}
        <h1 className="font-display text-lg sm:text-3xl md:text-4xl lg:text-[42px] font-normal text-[#102B3F] tracking-[-0.015em] leading-[1.16] max-w-4xl mx-auto mb-2.5 sm:mb-4">
          Beyond Sands Resort: The Best Pure Veg Beach<br className="hidden sm:inline" /> Resort in Kelva (Kelve), Palghar
        </h1>

        {/* 4. INTRO EDITORIAL PARAGRAPH */}
        <p className="font-sans text-[11.5px] sm:text-[13.5px] lg:text-[14px] text-[#334155] leading-[1.65] sm:leading-[1.76] max-w-3xl mx-auto font-normal mb-3.5 sm:mb-5 px-2 sm:px-4">
          <span className="sm:hidden">
            Welcome to Beyond Sands — Palghar&apos;s premier 100% pure veg coastal retreat, opposite the historic Shri Sheetla Devi Temple and a 2-minute stroll to Kelva Beach. Enjoy luxury pool-view rooms, a 40ft pool with rain dance, and authentic vegetarian dining.
          </span>
          <span className="hidden sm:inline">
            Welcome to Beyond Sands Pure Veg Resort, widely loved by families and groups as the best resort in Palghar for a peaceful coastal getaway. Whether you search for us as a Kelve resort, Kelva beach resort, or Kelwa resort, our property sits right opposite the historic Shri Shitladevi Temple and just a 2-minute walk from the coconut groves of Kelva Beach. Just 1.5 to 2 hours from Mumbai, Virar, Vasai, and Thane, we combine modern AC Pool-View rooms, a massive swimming pool with a lifeguard, rain dance, and an authentic 100% pure vegetarian buffet.
          </span>
        </p>

        {/* 5. ACTION BUTTONS */}
        <div className="flex items-center justify-center gap-2.5 sm:gap-4 mb-3 sm:mb-5">
          {/* Button 1: Solid Dark Navy */}
          <Link
            href="/rooms-tariff"
            className="group inline-flex items-center gap-1.5 sm:gap-2.5 px-4 py-2 sm:px-7 sm:py-3.5 rounded-full bg-[#183348] hover:bg-[#0E202D] text-white font-sans text-[10px] sm:text-[12px] uppercase tracking-[0.14em] sm:tracking-[0.16em] font-medium shadow-md transition-all duration-300 hover:scale-102"
          >
            <span>Explore Rooms</span>
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </Link>

          {/* Button 2: Warm Golden Tan Filled */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 sm:gap-2.5 px-4 py-2 sm:px-7 sm:py-3.5 rounded-full bg-[#EBD2A6] hover:bg-[#F3DCB4] text-[#183348] border border-[#C8A46B]/80 font-sans text-[10px] sm:text-[12px] uppercase tracking-[0.14em] sm:tracking-[0.16em] font-medium shadow-xs transition-all duration-300 hover:scale-102"
          >
            <span>WhatsApp Concierge</span>
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
        </div>

        {/* 6. BOTTOM LOTUS / FLORAL ORNAMENT */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 w-full max-w-xs sm:max-w-sm mx-auto">
          <div className="h-[1px] flex-1 bg-[#B89058]/60" />
          <div className="relative w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0">
            <Image
              src="/assets/intro/lotus-emblem-v2.png"
              alt=""
              aria-hidden="true"
              fill
              className="object-contain"
            />
          </div>
          <div className="h-[1px] flex-1 bg-[#B89058]/60" />
        </div>

      </div>
    </section>
  );
}
