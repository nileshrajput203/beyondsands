import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/components/footer/Footer";
import {
  Clock,
  Users,
  UtensilsCrossed,
  Waves,
  Music,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  MapPin,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "One Day Picnic Resort in Palghar & Kelva Beach | ₹2,200 Pure Veg Day Package",
  description:
    "Palghar's #1 One Day Picnic Resort at Kelva Beach (10 AM – 5 PM). ₹2,200 package includes Pure Veg breakfast, buffet lunch, hi-tea, 40x25ft swimming pool, rain dance & 150-guest capacity. Ideal for families & corporate groups.",
  keywords: [
    "one day picnic resort palghar",
    "one day picnic resort kelva beach",
    "palghar one day picnic packages",
    "pure veg picnic resort virar vasai borivali thane",
    "kelva beach day picnic resort with pool",
    "best one day picnic resort near mumbai",
    "palghar resort picnic with rain dance",
    "corporate picnic resort palghar",
  ],
  alternates: {
    canonical: "/one-day-picnic-resort-palghar",
  },
  openGraph: {
    title: "One Day Picnic Resort in Palghar & Kelva Beach | ₹2,200 Pure Veg Package",
    description:
      "Full day pure veg picnic package (10 AM - 5 PM) with swimming pool, rain dance, breakfast, unlimited lunch thali & hi-tea. Located 2 mins from Kelva Beach.",
    url: "https://www.beyondsands.in/one-day-picnic-resort-palghar",
    images: [{ url: "/assets/hero/hero-canopy-poster.jpg" }],
  },
};

const TIMELINE = [
  {
    time: "10:00 AM",
    title: "Arrival & Welcome Refreshment",
    desc: "Chilled Kokum Sherbet / Fresh Tender Coconut water to welcome your group into our peaceful coconut palm canopy.",
    icon: Sparkles,
  },
  {
    time: "10:15 AM – 11:15 AM",
    title: "Coastal Pure Veg Breakfast",
    desc: "Steamed fluffy Idlis with freshly ground Coconut Chutney & piping hot Sambar, Coastal Poha with peanuts, Upma, and fragrant Masala Chai / Filter Coffee.",
    icon: UtensilsCrossed,
  },
  {
    time: "11:15 AM – 01:00 PM",
    title: "Swimming Pool & Rain Dance Arena",
    desc: "Unlimited access to our crystal-clear 40ft x 25ft swimming pool, children's splash pool, and high-energy music rain dance arena.",
    icon: Waves,
  },
  {
    time: "01:00 PM – 02:30 PM",
    title: "Grand Pure Veg & Jain Buffet Lunch",
    desc: "Deluxe unlimited buffet spread: 2 Seasonal Sabzis, Paneer Lababdar, Maharashtrian Coastal Kadhi, Dal Tadka, Steamed Basmati Rice, Hot Phulkas / Puris, Farsan, Salad, Papad, and Warm Gulab Jamun.",
    icon: UtensilsCrossed,
  },
  {
    time: "02:30 PM – 04:30 PM",
    title: "Lawn Games, Hammocks & Beach Stroll",
    desc: "Unwind on shady garden lawns, play box cricket or badminton, or take an unhurried 2-minute stroll to the serene Kelva Beach and ancient Sheetla Devi Temple directly opposite our gate.",
    icon: Users,
  },
  {
    time: "04:30 PM – 05:00 PM",
    title: "Evening Hi-Tea & Crispy Pakodas",
    desc: "Freshly fried Kanda & Mirchi Bhajiyas / Vegetable Cutlets served with mint chutney and evening tea or coffee before happy departures.",
    icon: Clock,
  },
];

const HIGHLIGHTS = [
  "Strictly 100% Pure Vegetarian & Jain Kitchen (Zero alcohol, zero non-veg on premises)",
  "40ft x 25ft filtered swimming pool with separate kids' wading area",
  "High-energy open-air Rain Dance arena with surround music sound system",
  "15,000+ sq ft manicured green lawns and shady coconut groves",
  "Dedicated banquet hall and changing rooms for day guests",
  "Direct 2-minute peaceful walk to Kelva Beach shoreline",
  "Located directly opposite the historic Sheetla Devi Temple enclave",
  "Ample private secured bus & car parking inside the property",
];

export default function OneDayPicnicPage() {
  const whatsappUrl =
    "https://wa.me/919923895055?text=" +
    encodeURIComponent(
      "Hi Beyond Sands! I'm inquiring about the One Day Picnic Package (₹2,200) for a group. Please share date availability and group discount details."
    );

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "One Day Picnic Package at Beyond Sands Resort",
    "description":
      "All-inclusive 1-day pure veg resort picnic package in Palghar with swimming pool, rain dance, breakfast, lunch, and hi-tea.",
    "brand": {
      "@type": "Resort",
      "name": "Beyond Sands Resort",
    },
    "offers": {
      "@type": "Offer",
      "price": "2200",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "validFrom": "2026-01-01",
      "url": "https://www.beyondsands.in/one-day-picnic-resort-palghar",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      <div className="pt-28 sm:pt-36 pb-20 px-5 sm:px-10 lg:px-16 max-w-7xl mx-auto select-none">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-sans text-charcoal/60">
          <Link href="/" className="hover:text-deep-navy transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-deep-navy font-medium">One Day Picnic Resort Palghar</span>
        </nav>

        {/* Hero Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-champagne-gold/15 border border-champagne-gold/30 rounded-full mb-4">
            <span className="w-2 h-2 rounded-full bg-champagne-gold animate-pulse" />
            <span className="font-sans text-[11px] uppercase tracking-widest text-deep-navy font-semibold">
              Palghar &amp; Kelva Beach Premier Day Stay
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl text-deep-navy font-normal tracking-tight leading-[1.12] max-w-4xl">
            One Day Picnic Resort in Palghar — Pure Veg Fun, Pool &amp; Rain Dance
          </h1>

          <p className="font-sans text-base sm:text-lg text-charcoal/80 font-light mt-5 max-w-3xl leading-relaxed">
            Escape the city chaos of Mumbai, Thane, Vasai, and Virar for a sunlit day in paradise. Enjoy unlimited pure vegetarian dining, our 40x25ft swimming pool, rain dance with music, and a 2-minute stroll to Kelva Beach — all for an unhurried day rate.
          </p>
        </div>

        {/* Pricing Card & Quick Booking */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-7 bg-white rounded-2xl border border-charcoal/15 p-7 sm:p-9 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-4 mb-4 pb-4 border-b border-charcoal/10">
                <div>
                  <span className="text-xs uppercase tracking-widest text-charcoal/60 font-sans block mb-1">
                    All-Inclusive Day Package
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-4xl sm:text-5xl font-medium text-deep-navy">₹2,200</span>
                    <span className="font-sans text-sm text-charcoal/70">/ adult (10:00 AM – 05:00 PM)</span>
                  </div>
                </div>
                <div className="px-3 py-1 bg-[#25D366]/10 text-[#128C7E] border border-[#25D366]/30 rounded-full text-xs font-semibold font-sans">
                  Special Group Rates for 20+ Guests
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-6">
                {[
                  "Welcome Drink + Breakfast Buffet",
                  "Unlimited Pure Veg / Jain Lunch Thali",
                  "40ft x 25ft Swimming Pool Access",
                  "Music Rain Dance Session",
                  "Evening Hi-Tea & Hot Pakodas",
                  "150-Guest Group Capacity",
                  "Secured Bus & Car Parking",
                  "2-Min Walk to Kelva Beach Shore",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-sans text-charcoal/85">
                    <CheckCircle2 size={16} className="text-champagne-gold shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-charcoal/10 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
              <span className="text-xs font-sans text-charcoal/60">
                Direct booking guarantee · Zero OTA commission
              </span>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#25D366] hover:bg-[#1ebd59] text-white font-sans text-xs uppercase tracking-widest font-semibold rounded-lg transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                <WhatsAppIcon size={18} />
                <span>Book Day Picnic on WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative min-h-[340px] rounded-2xl overflow-hidden border border-charcoal/15 shadow-sm">
            <Image
              src="/assets/rooms/pool-view-main.jpg"
              alt="Beyond Sands Resort Swimming Pool and Rain Dance Setup"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/85 via-deep-navy/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-warm-ivory">
              <span className="px-2.5 py-1 bg-champagne-gold text-deep-navy text-[10px] font-mono uppercase tracking-widest font-semibold rounded inline-block mb-2">
                40x25ft Azure Swimming Pool
              </span>
              <h3 className="font-display text-2xl text-warm-ivory font-normal mb-1">
                Crystal Clear Waters &amp; Rain Dance
              </h3>
              <p className="font-sans text-xs text-warm-ivory/80 font-light leading-relaxed">
                Enjoy shaded loungers, poolside music, and clean changing rooms designed for large picnic groups.
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Timeline Schedule */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-sans text-xs uppercase tracking-widest text-champagne-gold font-semibold block mb-2">
              Your Day, Perfectly Planned
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-deep-navy font-normal">
              1-Day Picnic Itinerary &amp; Food Timeline
            </h2>
            <p className="font-sans text-sm text-charcoal/70 mt-2 font-light">
              Carefully structured from 10:00 AM to 05:00 PM so every family member and colleague has the time of their life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TIMELINE.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-charcoal/15 p-6 shadow-xs hover:border-champagne-gold/60 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 rounded-full bg-champagne-gold/15 text-deep-navy font-mono text-xs font-semibold">
                        {step.time}
                      </span>
                      <IconComp size={20} className="text-champagne-gold" />
                    </div>
                    <h3 className="font-display text-xl text-deep-navy font-normal mb-2">
                      {step.title}
                    </h3>
                    <p className="font-sans text-xs text-charcoal/75 font-light leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Group Capacity & Corporate Info */}
        <div className="bg-[#0b2238] text-warm-ivory rounded-2xl p-8 sm:p-12 mb-20 border border-champagne-gold/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="px-3 py-1 bg-champagne-gold/20 text-champagne-gold text-xs font-mono uppercase tracking-widest font-semibold rounded-full inline-block">
                Group Capacity: Up to 150 Guests
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-normal leading-tight">
                Corporate Outings, School Picnics &amp; Big Family Reunions
              </h2>
              <p className="font-sans text-sm text-warm-ivory/80 font-light leading-relaxed max-w-2xl">
                Just 2 hours from Western Mumbai (Borivali/Vasai/Virar) and Thane via NH48. We accommodate large private groups with dedicated dining seating, customizable sound equipment, separate changing zones, and strict 100% pure vegetarian culinary hygiene.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs font-sans text-warm-ivory/90">
                  <ShieldCheck size={16} className="text-champagne-gold" />
                  <span>Strict Jain Food Options</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-sans text-warm-ivory/90">
                  <MapPin size={16} className="text-champagne-gold" />
                  <span>Opposite Sheetla Devi Temple</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-sans text-warm-ivory/90">
                  <Waves size={16} className="text-champagne-gold" />
                  <span>2 Mins Walk to Kelva Beach</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 bg-champagne-gold hover:bg-champagne-gold/90 text-deep-navy font-sans text-xs uppercase tracking-widest font-semibold rounded-lg text-center transition-all shadow-md"
              >
                Inquire Group Booking
              </a>
              <Link
                href="/rooms-and-tariff"
                className="w-full py-3.5 px-6 border border-white/20 hover:border-champagne-gold text-warm-ivory hover:text-champagne-gold font-sans text-xs uppercase tracking-widest font-semibold rounded-lg text-center transition-all"
              >
                View Overnight Room Tariffs
              </Link>
            </div>
          </div>
        </div>

        {/* Why Choose Beyond Sands Checklist */}
        <div className="mb-16">
          <h2 className="font-display text-2xl sm:text-3xl text-deep-navy font-normal mb-8 text-center">
            Why Beyond Sands is Palghar&apos;s #1 Picnic Resort Choice
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {HIGHLIGHTS.map((item, i) => (
              <div
                key={i}
                className="p-5 bg-white rounded-xl border border-charcoal/15 shadow-xs flex items-start gap-3"
              >
                <span className="w-5 h-5 rounded-full bg-champagne-gold/20 text-deep-navy font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  ✓
                </span>
                <span className="font-sans text-xs text-charcoal/80 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
