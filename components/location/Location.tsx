"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPinIcon, PhoneIcon } from "../icons";

const NEARBY_ATTRACTIONS = [
  {
    category: "Directly Opposite",
    title: "Shri Shitladevi Temple, Kelve",
    distance: "1-minute walk",
  },
  {
    category: "Arabian Sea Shoreline",
    title: "Kelva Beach (Kelve Beach)",
    distance: "2-minute walk (290 meters)",
  },
  {
    category: "Historic Sea Fortress",
    title: "Kelve Fort (Pankot Fort)",
    distance: "5-minute drive",
  },
  {
    category: "Scenic Estuary & Views",
    title: "Kelve Dam & Dandakhadi Bridge",
    distance: "7-minute drive",
  },
  {
    category: "Western Railway Railhead",
    title: "Kelve Road Railway Station",
    distance: "10-minute auto / car ride",
  },
  {
    category: "District Headquarters",
    title: "Palghar Railway Station",
    distance: "20-minute drive",
  },
];

export function Location() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const droneImageRef = useRef<HTMLDivElement>(null);
  const mapWrapperRef = useRef<HTMLDivElement>(null);
  const [showMap, setShowMap] = useState(false);
  const [attractionIndex, setAttractionIndex] = useState(0);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // Mobile-only auto-swiping carousel every 3 seconds
  useEffect(() => {
    if (isCarouselPaused) return;
    const timer = setInterval(() => {
      setAttractionIndex((prev) => (prev + 1) % NEARBY_ATTRACTIONS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isCarouselPaused]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsCarouselPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current !== null) {
      const diff = e.changedTouches[0].clientX - touchStartX.current;
      if (diff > 35) {
        setAttractionIndex((prev) => (prev - 1 + NEARBY_ATTRACTIONS.length) % NEARBY_ATTRACTIONS.length);
      } else if (diff < -35) {
        setAttractionIndex((prev) => (prev + 1) % NEARBY_ATTRACTIONS.length);
      }
    }
    touchStartX.current = null;
    const resumeTimer = setTimeout(() => setIsCarouselPaused(false), 3500);
    return () => clearTimeout(resumeTimer);
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      if (droneImageRef.current && sectionRef.current) {
        gsap.to(droneImageRef.current, {
          y: -40,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      }
    });

    return () => mm.revert();
  }, []);

  useEffect(() => {
    const el = mapWrapperRef.current;
    if (!el || showMap) return;

    if (typeof IntersectionObserver === "undefined") {
      setShowMap(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShowMap(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [showMap]);

  return (
    <section
      ref={sectionRef}
      id="location-section"
      className="relative w-full py-12 sm:py-32 px-4 sm:px-12 max-w-7xl mx-auto bg-transparent text-charcoal select-none"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2.5 sm:gap-4 mb-8 sm:mb-12 pb-4 sm:pb-6 border-b border-charcoal/10">
        <div>
          <span className="section-kicker mb-2.5 sm:mb-4">Place</span>
          <h2 className="font-display text-2xl sm:text-5xl font-normal text-deep-navy tracking-tight">
            Location &amp; surroundings
          </h2>
        </div>
        <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.16em] sm:tracking-[0.18em] text-charcoal/55">
          Kelva Beach · Palghar
        </span>
      </div>

      {/* 2-Column Asymmetric Grid matching full height */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-10 items-stretch">
        {/* LEFT COLUMN: Large Upper Drone View Frame - Full Height of Both Right Cards */}
        <div className="lg:col-span-7 flex flex-col h-full">
          <div className="relative w-full aspect-[4/5] sm:aspect-auto sm:min-h-[520px] lg:min-h-0 flex-1 overflow-hidden rounded-2xl sm:rounded-[1.8rem] border border-charcoal/10 shadow-[0_24px_50px_-32px_rgba(11,34,56,0.4)] group bg-charcoal/5">
            <div
              ref={droneImageRef}
              className="absolute inset-0 top-0 lg:-top-10 w-full h-full lg:h-[120%] transition-transform will-change-transform"
            >
              <Image
                src="/assets/location/location-resort-exterior.jpg"
                alt="Beyond Sands Beach Resort - Entrance and modern property exterior"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-top lg:object-center luxury-grade"
              />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Stacked Second Image + Google Maps Embed */}
        <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-6">
          {/* Top Card: Second Image (Coastal Shoreline Perspective) */}
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl sm:rounded-[1.6rem] border border-charcoal/10 shadow-[0_18px_40px_-30px_rgba(11,34,56,0.35)] group bg-charcoal/5">
            <Image
              src="/assets/location/location-surroundings-beach.webp"
              alt="Kelva Beach Casuarina Grove and Arabian Sea Shoreline"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center luxury-grade transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Bottom Card: Live Google Maps Embed Pinned to Beyond Sands */}
          <div className="flex flex-col bg-white/70 border border-charcoal/10 rounded-2xl sm:rounded-[1.6rem] p-3 sm:p-4 shadow-[0_18px_40px_-30px_rgba(11,34,56,0.28)]">
            <div
              ref={mapWrapperRef}
              className="relative w-full aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden border border-champagne-gold/25"
            >
              {showMap ? (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.844915862447!2d72.72960557531687!3d19.612193034920868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be703c22891dba7%3A0x7b4e7743d1ccd07a!2sBeyond%20Sands%20Pure%20Veg%20Resort!5e1!3m2!1sen!2sin!4v1779344489056!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Beyond Sands Pure Veg Resort Location Map"
                  className="w-full h-full"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5 bg-charcoal/5 text-charcoal/50">
                  <MapPinIcon size={22} className="text-champagne-gold/80" />
                  <span className="font-sans text-[10px] uppercase tracking-[0.2em]">
                    Loading interactive map…
                  </span>
                </div>
              )}
            </div>

            {/* Address Line beneath Map */}
            <div className="pt-3 sm:pt-4 space-y-1 font-sans text-xs">
              <div className="flex items-start gap-2 text-deep-navy font-medium text-[11px] sm:text-xs">
                <MapPinIcon size={15} className="text-champagne-gold shrink-0 mt-0.5" />
                <span>Survey No. 1000, 1709, 1710, Shitladevi Road, Opposite Shitladevi Temple, Near Kelva Beach, Kelva, Palghar - 401401</span>
              </div>
              <div className="flex items-center gap-2 text-charcoal/70 pl-5 sm:pl-6 text-[11px] sm:text-xs">
                <PhoneIcon size={13} className="text-champagne-gold shrink-0" />
                <a href="tel:+919923895055" className="hover:text-deep-navy transition-colors">
                  +91 99238 95055
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Nearby Attractions & Distance Block (Local Geo-Relevance) */}
      <div className="mt-8 sm:mt-12 bg-white/70 border border-charcoal/10 rounded-2xl sm:rounded-[1.8rem] p-4 sm:p-8 shadow-[0_18px_40px_-30px_rgba(11,34,56,0.3)]">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-6 pb-4 border-b border-charcoal/10">
          <div>
            <span className="font-sans text-[10px] sm:text-[11px] uppercase tracking-widest text-champagne-gold font-semibold block mb-1">
              Geo-Relevance &amp; Accessibility
            </span>
            <h3 className="font-display text-2xl sm:text-3xl text-deep-navy font-normal">
              Explore Palghar &amp; Kelve Beach Around Our Resort
            </h3>
          </div>
          <span className="font-sans text-xs text-charcoal/60">
            Shitladevi Road, Kelva 401401
          </span>
        </div>

        {/* Mobile View: Auto-swiping Carousel every 3 seconds (< 640px) */}
        <div
          className="block sm:hidden relative w-full overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${attractionIndex * 100}%)` }}
          >
            {NEARBY_ATTRACTIONS.map((item, idx) => (
              <div key={idx} className="w-full shrink-0 px-0.5">
                <div className="p-4 rounded-xl bg-warm-ivory/60 border border-charcoal/10 shadow-xs flex flex-col justify-between min-h-[96px]">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[9.5px] uppercase tracking-wider text-charcoal/50 font-medium">
                      {item.category}
                    </span>
                    <span className="font-mono text-[9px] text-charcoal/40 font-bold">
                      {String(idx + 1).padStart(2, "0")} / {String(NEARBY_ATTRACTIONS.length).padStart(2, "0")}
                    </span>
                  </div>
                  <h4 className="font-semibold text-deep-navy text-[14.5px] leading-snug mt-1">
                    {item.title}
                  </h4>
                  <span className="text-xs text-champagne-gold font-medium mt-1 inline-flex items-center gap-1">
                    <span>•</span> {item.distance}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Pagination Dots */}
          <div className="flex items-center justify-center gap-1.5 mt-3">
            {NEARBY_ATTRACTIONS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setAttractionIndex(idx);
                  setIsCarouselPaused(true);
                  setTimeout(() => setIsCarouselPaused(false), 4000);
                }}
                aria-label={`Go to attraction ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === attractionIndex
                    ? "w-6 bg-champagne-gold"
                    : "w-1.5 bg-charcoal/20"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop View: Strictly 100% Unchanged Grid (>= 640px) */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {NEARBY_ATTRACTIONS.map((item, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-warm-ivory/50 border border-charcoal/10">
              <span className="text-[10px] uppercase tracking-wider text-charcoal/50 block">
                {item.category}
              </span>
              <span className="font-semibold text-deep-navy text-sm block mt-0.5">
                {item.title}
              </span>
              <span className="text-xs text-champagne-gold font-medium">
                {item.distance}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
