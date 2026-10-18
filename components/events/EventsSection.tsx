"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Utensils, Users, Building2 } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons";

export function EventsSection() {
  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      "Hi Beyond Sands! I'm interested in organizing a wedding / event at your resort. Could you please share availability, packages, and lawn details?"
    );
    window.open(`https://wa.me/919923895055?text=${text}`, "_blank");
  };

  return (
    <section
      id="events-section"
      className="relative w-full py-16 sm:py-24 px-6 sm:px-12 max-w-7xl mx-auto select-none bg-transparent"
      aria-label="Events and Wedding Organisation"
    >
      {/* Refined Luxury Header Bar - Perfectly Aligned */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-12 sm:mb-16 hairline-b border-charcoal/15 pb-8">
        <div className="max-w-2xl">
          {/* Top Pill Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-champagne-gold/15 border border-champagne-gold/30 mb-3">
            <span className="font-sans text-[11px] font-semibold uppercase tracking-wider text-deep-navy">
              Palghar&apos;s #1 Wedding &amp; Event Venue · Kelva Beach
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-deep-navy tracking-tight leading-[1.15]">
            EVENTS &amp; WEDDING CELEBRATIONS
          </h2>

          <p className="font-sans text-sm sm:text-base text-charcoal/70 font-light mt-3 leading-relaxed">
            From sunset mandap vows under whispering palms to family milestone celebrations and corporate retreats — Beyond Sands provides a tranquil beachfront sanctuary directly opposite Sheetla Devi Temple with 100% pure veg &amp; Jain catering.
          </p>
        </div>

        {/* Action Buttons - Vertically Centered & Proportionate */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
          <Link
            href="/events-gallery"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-champagne-gold hover:bg-[#b08752] text-deep-navy font-sans text-xs uppercase tracking-widest font-bold shadow-md hover:shadow-lg transition-all active:scale-95 group"
          >
            <span>View Event Gallery</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <button
            onClick={handleWhatsAppInquiry}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-charcoal/20 hover:border-deep-navy bg-white/90 hover:bg-white text-deep-navy font-sans text-xs uppercase tracking-wider font-semibold shadow-sm hover:shadow-md transition-all active:scale-95 cursor-pointer"
          >
            <WhatsAppIcon size={16} />
            <span>Inquire for Events</span>
          </button>
        </div>
      </div>

      {/* Visual Showcase Bento Grid - Real Authentic Images from beyondsands.in with NO overlay text */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch mb-12">
        {/* Large Featured Card (Official Wedding Stage from beyondsands.in) - Clean image, no text overlay */}
        <Link
          href="/events-gallery"
          aria-label="View Grand Wedding Stage in Event Gallery"
          className="lg:col-span-7 group relative rounded-[20px] sm:rounded-[24px] overflow-hidden border border-charcoal/15 shadow-md aspect-[16/10] min-h-[360px] bg-black block cursor-pointer"
        >
          <Image
            src="/assets/events/wedding-banner.webp"
            alt="Real Wedding & Celebration Stage at Beyond Sands Resort Palghar"
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700 luxury-grade"
          />
        </Link>

        {/* Right 2 Stacked Cards (Real Banquet Hall & Evening Pool from beyondsands.in) - Clean images, no text overlay */}
        <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
          {/* Card 1: Real AC Banquet & Conference Hall */}
          <Link
            href="/events-gallery"
            aria-label="View AC Banquet Hall in Event Gallery"
            className="group relative rounded-[20px] overflow-hidden border border-charcoal/15 shadow-md flex-1 min-h-[175px] bg-black block cursor-pointer"
          >
            <Image
              src="/assets/events/banquet-hall.jpg"
              alt="Air-Conditioned Banquet & Event Hall at Beyond Sands Resort"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 luxury-grade"
            />
          </Link>

          {/* Card 2: Real Evening Poolside Celebration */}
          <Link
            href="/events-gallery"
            aria-label="View Evening Poolside Celebrations in Event Gallery"
            className="group relative rounded-[20px] overflow-hidden border border-charcoal/15 shadow-md flex-1 min-h-[175px] bg-black block cursor-pointer"
          >
            <Image
              src="/assets/events/pool-evening.jpg"
              alt="Evening Poolside Celebration Lawn at Beyond Sands Resort"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 luxury-grade"
            />
          </Link>
        </div>
      </div>

      {/* Key Event Capabilities Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 bg-white/80 backdrop-blur-md border border-charcoal/15 rounded-[20px] p-6 shadow-sm">
        <div className="border-l-2 border-champagne-gold pl-4">
          <div className="flex items-center gap-1.5 text-charcoal/50 text-[10px] uppercase tracking-wider font-semibold">
            <Users className="w-3 h-3 text-champagne-gold" />
            <span>Guest Capacity</span>
          </div>
          <span className="font-display text-xl sm:text-2xl text-deep-navy font-normal block mt-1">
            Up to 250
          </span>
          <p className="font-sans text-xs text-charcoal/70 mt-1">Lawn, pool deck &amp; banquet</p>
        </div>

        <div className="border-l-2 border-champagne-gold pl-4">
          <div className="flex items-center gap-1.5 text-charcoal/50 text-[10px] uppercase tracking-wider font-semibold">
            <Utensils className="w-3 h-3 text-emerald-600" />
            <span>Culinary Feasts</span>
          </div>
          <span className="font-display text-xl sm:text-2xl text-deep-navy font-normal block mt-1">
            100% Pure Veg
          </span>
          <p className="font-sans text-xs text-charcoal/70 mt-1">Sattvic, Jain &amp; Gujarati menus</p>
        </div>

        <div className="border-l-2 border-champagne-gold pl-4">
          <div className="flex items-center gap-1.5 text-charcoal/50 text-[10px] uppercase tracking-wider font-semibold">
            <Building2 className="w-3 h-3 text-champagne-gold" />
            <span>Accommodation</span>
          </div>
          <span className="font-display text-xl sm:text-2xl text-deep-navy font-normal block mt-1">
            Full Buyout
          </span>
          <p className="font-sans text-xs text-charcoal/70 mt-1">Exclusive resort stay for guests</p>
        </div>

        <div className="border-l-2 border-champagne-gold pl-4">
          <div className="flex items-center gap-1.5 text-charcoal/50 text-[10px] uppercase tracking-wider font-semibold">
            <MapPin className="w-3 h-3 text-champagne-gold" />
            <span>Prime Setting</span>
          </div>
          <span className="font-display text-xl sm:text-2xl text-deep-navy font-normal block mt-1">
            Beach &amp; Temple
          </span>
          <p className="font-sans text-xs text-charcoal/70 mt-1">Opposite Sheetla Devi Temple</p>
        </div>
      </div>
    </section>
  );
}
