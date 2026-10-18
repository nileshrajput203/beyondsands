"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPinIcon, PhoneIcon } from "../icons";

export function Location() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const droneImageRef = useRef<HTMLDivElement>(null);

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

  return (
    <section
      ref={sectionRef}
      id="location-section"
      className="relative w-full py-20 px-6 sm:px-12 max-w-7xl mx-auto bg-transparent text-charcoal select-none"
    >
      {/* Section Header */}
      <div className="flex items-baseline justify-between mb-12 hairline-b border-charcoal/15 pb-4">
        <div className="flex items-baseline gap-4">
          <span className="font-sans text-xs uppercase tracking-widest text-champagne-gold font-semibold">
            02
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal text-deep-navy tracking-wide">
            LOCATION &amp; SURROUNDINGS
          </h2>
        </div>

        <span className="font-sans text-xs uppercase tracking-widest text-charcoal/60 hidden sm:block">
          Kelva Beach · Palghar District
        </span>
      </div>

      {/* 2-Column Asymmetric Grid matching 1.png */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* LEFT COLUMN: Large Upper Drone View Frame Opposite Shitla Mata Temple */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden rounded-[2px] border border-charcoal/15 shadow-sm group bg-charcoal/5">
            <div
              ref={droneImageRef}
              className="absolute inset-0 -top-10 w-full h-[120%] transition-transform will-change-transform"
            >
              <Image
                src="/assets/location/location-drone-shitlamata.jpg"
                alt="Upper drone view showing Beyond Sands situated directly in front of Shitla Mata Temple"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center luxury-grade"
              />
            </div>

            {/* Subtle Gradient Scrim on Image */}
            <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 via-transparent to-transparent pointer-events-none" />

            {/* Caption on Photo */}
            <div className="absolute bottom-6 left-6 right-6 z-10 text-warm-ivory">
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-champagne-gold font-medium block mb-1">
                Upper Drone Perspective
              </span>
              <p className="font-display text-xl sm:text-2xl font-normal text-warm-ivory">
                Directly opposite Shitla Mata Temple, Kelva
              </p>
            </div>
          </div>

          {/* Under-Photo Hairline Spec & Direction Highlights */}
          <div className="hairline-b border-charcoal/15 py-4 flex flex-wrap justify-between items-center text-xs font-sans text-charcoal/80 gap-4 mt-2">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-champagne-gold" />
              <span>5 min walk to Kelva Beach shoreline</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-champagne-gold" />
              <span>15 min from Kelve Rd Railway Station</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-champagne-gold" />
              <span>Check-in: 12:00 PM · Check-out: 10:00 AM</span>
            </span>
          </div>
        </div>

        {/* RIGHT COLUMN: Stacked Second Image + Google Maps Embed */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Top Card: Second Image (Offset Higher Coastal Shoreline Perspective) */}
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[2px] border border-charcoal/15 shadow-sm group bg-charcoal/5">
            <Image
              src="/assets/location/location-surroundings-beach.webp"
              alt="Kelva Beach Casuarina Grove and Arabian Sea Shoreline"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center luxury-grade transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/70 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 z-10 text-warm-ivory">
              <span className="font-sans text-[10px] uppercase tracking-wider text-champagne-gold block">
                Coastal Surroundings
              </span>
              <p className="font-sans text-xs text-warm-ivory/90 font-medium">
                Pristine sands and casuarina forest
              </p>
            </div>
          </div>

          {/* Bottom Card: Live Google Maps Embed Pinned to Beyond Sands */}
          <div className="flex flex-col bg-white/70 backdrop-blur-sm border border-charcoal/20 rounded-[2px] p-4 shadow-sm">
            <div className="relative w-full aspect-[4/3] rounded-[2px] overflow-hidden border border-champagne-gold/30">
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
            </div>

            {/* Address Line beneath Map */}
            <div className="pt-4 space-y-1 font-sans text-xs">
              <div className="flex items-start gap-2 text-deep-navy font-medium">
                <MapPinIcon size={16} className="text-champagne-gold shrink-0 mt-0.5" />
                <span>Opposite Shitladevi temple Kelve Road, Kelve, Palghar 401404</span>
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
    </section>
  );
}
