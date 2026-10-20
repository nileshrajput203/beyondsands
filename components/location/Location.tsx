"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPinIcon, PhoneIcon } from "../icons";

export function Location() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const droneImageRef = useRef<HTMLDivElement>(null);
  const mapWrapperRef = useRef<HTMLDivElement>(null);
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

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
      className="relative w-full py-24 sm:py-32 px-5 sm:px-12 max-w-7xl mx-auto bg-transparent text-charcoal select-none"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 pb-6 border-b border-charcoal/10">
        <div>
          <span className="section-kicker mb-4">Place</span>
          <h2 className="font-display text-3xl sm:text-5xl font-normal text-deep-navy tracking-tight">
            Location &amp; surroundings
          </h2>
        </div>
        <span className="font-sans text-xs uppercase tracking-[0.18em] text-charcoal/55">
          Kelva Beach · Palghar
        </span>
      </div>

      {/* 2-Column Asymmetric Grid matching full height */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        {/* LEFT COLUMN: Large Upper Drone View Frame - Full Height of Both Right Cards */}
        <div className="lg:col-span-7 flex flex-col h-full">
          <div className="relative w-full h-full min-h-[420px] sm:min-h-[520px] lg:min-h-0 flex-1 overflow-hidden rounded-[1.8rem] border border-charcoal/10 shadow-[0_24px_50px_-32px_rgba(11,34,56,0.4)] group bg-charcoal/5">
            <div
              ref={droneImageRef}
              className="absolute inset-0 -top-10 w-full h-[120%] transition-transform will-change-transform"
            >
              <Image
                src="/assets/location/location-resort-exterior.jpg"
                alt="Beyond Sands Beach Resort - Entrance and modern property exterior"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center luxury-grade"
              />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Stacked Second Image + Google Maps Embed */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Top Card: Second Image (Coastal Shoreline Perspective) */}
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[1.6rem] border border-charcoal/10 shadow-[0_18px_40px_-30px_rgba(11,34,56,0.35)] group bg-charcoal/5">
            <Image
              src="/assets/location/location-surroundings-beach.webp"
              alt="Kelva Beach Casuarina Grove and Arabian Sea Shoreline"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center luxury-grade transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Bottom Card: Live Google Maps Embed Pinned to Beyond Sands */}
          <div className="flex flex-col bg-white/70 border border-charcoal/10 rounded-[1.6rem] p-4 shadow-[0_18px_40px_-30px_rgba(11,34,56,0.28)]">
            <div
              ref={mapWrapperRef}
              className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-champagne-gold/25"
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
            <div className="pt-4 space-y-1 font-sans text-xs">
              <div className="flex items-start gap-2 text-deep-navy font-medium">
                <MapPinIcon size={16} className="text-champagne-gold shrink-0 mt-0.5" />
                <span>Survey No. 1000, 1709, 1710, Shitladevi Road, Opposite Shitladevi Temple, Near Kelva Beach, Kelva, Palghar - 401401</span>
              </div>
              <div className="flex items-center gap-2 text-charcoal/70 pl-6">
                <PhoneIcon size={14} className="text-champagne-gold shrink-0" />
                <a href="tel:+919923895055" className="hover:text-deep-navy transition-colors">
                  +91 99238 95055
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Nearby Attractions & Distance Block (Local Geo-Relevance) */}
      <div className="mt-12 bg-white/70 border border-charcoal/10 rounded-[1.8rem] p-6 sm:p-8 shadow-[0_18px_40px_-30px_rgba(11,34,56,0.3)]">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-3.5 rounded-xl bg-warm-ivory/50 border border-charcoal/10">
            <span className="text-[10px] uppercase tracking-wider text-charcoal/50 block">Directly Opposite</span>
            <span className="font-semibold text-deep-navy text-sm block mt-0.5">Shri Shitladevi Temple, Kelve</span>
            <span className="text-xs text-champagne-gold font-medium">1-minute walk</span>
          </div>

          <div className="p-3.5 rounded-xl bg-warm-ivory/50 border border-charcoal/10">
            <span className="text-[10px] uppercase tracking-wider text-charcoal/50 block">Arabian Sea Shoreline</span>
            <span className="font-semibold text-deep-navy text-sm block mt-0.5">Kelva Beach (Kelve Beach)</span>
            <span className="text-xs text-champagne-gold font-medium">2-minute walk (290 meters)</span>
          </div>

          <div className="p-3.5 rounded-xl bg-warm-ivory/50 border border-charcoal/10">
            <span className="text-[10px] uppercase tracking-wider text-charcoal/50 block">Historic Sea Fortress</span>
            <span className="font-semibold text-deep-navy text-sm block mt-0.5">Kelve Fort (Pankot Fort)</span>
            <span className="text-xs text-champagne-gold font-medium">5-minute drive</span>
          </div>

          <div className="p-3.5 rounded-xl bg-warm-ivory/50 border border-charcoal/10">
            <span className="text-[10px] uppercase tracking-wider text-charcoal/50 block">Scenic Estuary &amp; Views</span>
            <span className="font-semibold text-deep-navy text-sm block mt-0.5">Kelve Dam &amp; Dandakhadi Bridge</span>
            <span className="text-xs text-champagne-gold font-medium">7-minute drive</span>
          </div>

          <div className="p-3.5 rounded-xl bg-warm-ivory/50 border border-charcoal/10">
            <span className="text-[10px] uppercase tracking-wider text-charcoal/50 block">Western Railway Railhead</span>
            <span className="font-semibold text-deep-navy text-sm block mt-0.5">Kelve Road Railway Station</span>
            <span className="text-xs text-champagne-gold font-medium">10-minute auto / car ride</span>
          </div>

          <div className="p-3.5 rounded-xl bg-warm-ivory/50 border border-charcoal/10">
            <span className="text-[10px] uppercase tracking-wider text-charcoal/50 block">District Headquarters</span>
            <span className="font-semibold text-deep-navy text-sm block mt-0.5">Palghar Railway Station</span>
            <span className="text-xs text-champagne-gold font-medium">20-minute drive</span>
          </div>
        </div>
      </div>
    </section>
  );
}
