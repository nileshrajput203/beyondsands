"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Utensils, Users, Building2 } from "lucide-react";
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
      className="relative w-full py-24 sm:py-32 px-5 sm:px-12 max-w-7xl mx-auto select-none bg-transparent"
      aria-label="Events and Wedding Organisation"
    >
      {/* Refined Luxury Header Bar - Perfectly Aligned */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-12 sm:mb-16 hairline-b border-charcoal/15 pb-8">
        <div className="max-w-2xl">
          {/* Top Pill Eyebrow */}
          <span className="section-kicker mb-4">Picnics · Weddings · Packages</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-deep-navy tracking-tight leading-[1.15]">
            One-Day Picnic &amp; Overnight Staycation Packages at Kelwa Beach
          </h2>

          <p className="font-sans text-sm sm:text-base text-charcoal/70 font-light mt-3 leading-relaxed">
            From ₹2,200/person one-day picnic packages (10 AM – 5 PM with pool &amp; rain dance) to grand weddings on 15,000+ sq ft lawns and family staycations — Beyond Sands provides a tranquil beachfront sanctuary directly opposite Sheetla Devi Temple with 100% pure veg &amp; Jain catering.
          </p>
        </div>

        {/* Action Buttons - Vertically Centered & Proportionate */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
          <Link
            href="/weddings-events"
            className="cta-island"
          >
            <span>Weddings &amp; Events</span>
            <span className="cta-icon" aria-hidden="true">↗</span>
          </Link>

          <button
            type="button"
            onClick={handleWhatsAppInquiry}
            className="cta-ghost text-deep-navy cursor-pointer"
          >
            <WhatsAppIcon size={16} />
            <span>Inquire for Events</span>
          </button>
        </div>
      </div>

      {/* Visual Showcase Bento Grid - Real Authentic Images from beyondsands.in with NO overlay text */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch mb-12">
        {/* Featured Card 1: Official Wedding Stage */}
        <Link
          href="/weddings-events"
          aria-label="View Grand Wedding Stage in Weddings & Events"
          className="group relative rounded-[1.8rem] overflow-hidden border border-charcoal/10 shadow-[0_24px_50px_-32px_rgba(11,34,56,0.4)] aspect-[16/10] min-h-[300px] sm:min-h-[360px] bg-deep-navy block cursor-pointer"
        >
          <Image
            src="/assets/events/wedding-banner.webp"
            alt="Real Wedding & Celebration Stage at Beyond Sands Resort Palghar"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700 luxury-grade"
          />
        </Link>

        {/* Featured Card 2: Real AC Banquet & Conference Hall */}
        <Link
          href="/weddings-events"
          aria-label="View AC Banquet Hall in Weddings & Events"
          className="group relative rounded-[1.8rem] overflow-hidden border border-charcoal/10 shadow-[0_24px_50px_-32px_rgba(11,34,56,0.4)] aspect-[16/10] min-h-[300px] sm:min-h-[360px] bg-deep-navy block cursor-pointer"
        >
          <Image
            src="/assets/events/banquet-hall.jpg"
            alt="Air-Conditioned Banquet & Event Hall at Beyond Sands Resort"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700 luxury-grade"
          />
        </Link>
      </div>

      {/* Key Event Capabilities Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 bg-white/70 border border-charcoal/10 rounded-[1.8rem] p-6 sm:p-8 shadow-[0_18px_40px_-30px_rgba(11,34,56,0.28)]">
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
