import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/components/footer/Footer";
import {
  BedDouble,
  Users,
  Maximize2,
  CheckCircle2,
  Phone,
  ShieldCheck,
  Sparkles,
  Waves,
  Sun,
  Coffee,
  Utensils,
  ArrowRight,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Rooms & Suites | Beyond Sands Resort Kelva Beach, Palghar (Rates & Packages)",
  description:
    "Official room rates and packages for Beyond Sands Resort, Kelva Beach, Palghar. Garden View AC Deluxe (₹3,000–₹3,500), Pool View AC Deluxe (₹3,500–₹4,000), and 6-Bed AC Family Dormitory (₹4,000–₹5,000). Book direct for 0% commission.",
  keywords: [
    "beyond sands resort room rates",
    "kelva beach resort prices",
    "family dormitory kelva beach rates",
    "ac deluxe room palghar price",
    "cheap and best resort in kelva beach",
    "palghar resort packages with food",
  ],
  alternates: {
    canonical: "/rooms-and-tariff",
  },
  openGraph: {
    title: "Rooms & Suites | Beyond Sands Resort Kelva Beach, Palghar",
    description:
      "Transparent room rates and meal packages. Book direct on WhatsApp for exclusive direct discounts on Garden View, Pool View and Family Dormitories.",
    url: "https://www.beyondsands.in/rooms-and-tariff",
    images: [{ url: "/assets/rooms/garden-view-main.jpg" }],
  },
};

const ROOM_TIERS = [
  {
    id: "garden-view",
    name: "Garden View AC Deluxe",
    tagline: "Waking to tropical coconut canopies & coastal morning dew.",
    weekdayRate: "₹3,000",
    weekendRate: "₹3,500",
    unit: "/ night (Double Occupancy)",
    capacity: "2 Adults + 1 Child",
    size: "320 sq. ft.",
    bed: "King Size Plush Mattress",
    image: "/assets/rooms/garden-view-main.jpg",
    features: [
      "Private furnished verandah opening directly to green lawns",
      "Individually controlled split air conditioning",
      "En-suite bathroom with 24/7 hot water geyser",
      "High-speed fiber WiFi & 43\" Smart HD TV",
      "Complimentary bottled mineral water & tea setup",
      "Direct access to 40x25ft swimming pool",
    ],
    whatsappText: "Hi Beyond Sands! I'm interested in booking the Garden View AC Deluxe room (₹3,000–₹3,500). Please share date availability.",
  },
  {
    id: "pool-view",
    name: "Pool View AC Deluxe Suite",
    tagline: "Overlooking shimmering azure waters with panoramic blue-hour skies.",
    weekdayRate: "₹3,500",
    weekendRate: "₹4,000",
    unit: "/ night (Double Occupancy)",
    capacity: "2 Adults + 1 Child",
    size: "350 sq. ft.",
    bed: "King Size Luxury Spring Mattress",
    image: "/assets/rooms/pool-view-main.jpg",
    popular: true,
    features: [
      "Private first-floor balcony directly facing the swimming pool",
      "Spectacular golden-hour sunset and twilight pool reflections",
      "Silent split AC & premium ambient warm lighting",
      "Designer bathroom with luxury toiletries & hot geyser",
      "High-speed WiFi, work desk & 43\" Smart TV",
      "Poolside rain dance & pool access included",
    ],
    whatsappText: "Hi Beyond Sands! I'm interested in booking the Pool View AC Deluxe Suite (₹3,500–₹4,000). Please share date availability.",
  },
  {
    id: "family-dorm",
    name: "6-Bed AC Family Dormitory",
    tagline: "Large interconnected family sanctuary designed for shared joy.",
    weekdayRate: "₹4,000",
    weekendRate: "₹5,000",
    unit: "/ night (Up to 6 Guests)",
    capacity: "6 to 8 Guests",
    size: "600 sq. ft.",
    bed: "6 Separate Beds / Multi-Bed Setup",
    image: "/assets/rooms/family-dorm-main.jpg",
    features: [
      "Spacious open-plan living designed for big families & friend groups",
      "Dual powerful split air conditioners for complete cooling",
      "Multiple bathrooms and grooming vanities for seamless mornings",
      "Large garden-facing verandah for group tea and card games",
      "Ideal for pilgrimage visits to Sheetla Devi Temple opposite resort",
      "Free high-speed WiFi and pool access for all guests",
    ],
    whatsappText: "Hi Beyond Sands! I'm inquiring about booking the 6-Bed AC Family Dormitory (₹4,000–₹5,000) for our group. Please share availability.",
  },
  {
    id: "couple-room",
    name: "Couple's Intimate Coastal Nook",
    tagline: "Romantic quietude, soft amber lighting & private coastal balcony.",
    weekdayRate: "₹3,299",
    weekendRate: "₹4,199",
    unit: "/ night (Double Occupancy)",
    capacity: "2 Adults",
    size: "280 sq. ft.",
    bed: "Bespoke King Bed with Luxury Linens",
    image: "/assets/rooms/couple-room-main.webp",
    features: [
      "Intimate warm lighting with dimmable amber mood lamps",
      "Private sunlit balcony with pool and palm canopy views",
      "Silent Split AC, rapid cooling & plush bedding",
      "Complimentary floral welcome setup available on request",
      "Sound-dampened acoustic doors for undisturbed tranquility",
      "Direct pool deck access and evening starry sky views",
    ],
    whatsappText: "Hi Beyond Sands! I'm inquiring about booking the Couple's Intimate Coastal Nook (₹3,299–₹4,199). Please share availability.",
  },
  {
    id: "garden-view-family",
    name: "Garden View AC Family Suite",
    tagline: "Expansive green garden sanctuary for larger families and groups.",
    weekdayRate: "₹5,000",
    weekendRate: "₹6,000",
    unit: "/ night (Up to 6 Guests)",
    capacity: "4 to 6 Guests",
    size: "480 sq. ft.",
    bed: "King Bed + Twin Beds",
    image: "/assets/rooms/garden-view-thumb3.jpg",
    features: [
      "Expansive private garden verandah overlooking lush coconut groves",
      "Spacious suite layout featuring King bed plus twin beds",
      "Daikin Inverter Split AC & whisper-quiet ceiling fans",
      "Large family en-suite bathroom with 24/7 hot solar shower",
      "Complimentary high-speed fiber Wi-Fi & electric tea kettle",
      "Direct garden access to children's play area and green lawns",
    ],
    whatsappText: "Hi Beyond Sands! I'm inquiring about booking the Garden View AC Family Suite (₹5,000–₹6,000). Please share availability.",
  },
];

const MEAL_PLANS = [
  {
    code: "EP (Room Only)",
    name: "European Plan",
    desc: "Accommodation only. Order breakfast, lunch, and dinner à la carte from our pure veg dining hall.",
    included: "Room Stay + Pool Access",
  },
  {
    code: "CP (Bed & Breakfast)",
    name: "Continental Plan",
    desc: "Includes our freshly steamed South Indian and Maharashtrian breakfast buffet with tea & coffee.",
    included: "Room + Full Morning Breakfast",
  },
  {
    code: "MAP (Half Board)",
    name: "Modified American Plan",
    desc: "Includes morning breakfast plus your choice of delicious pure veg lunch thali or dinner feast.",
    included: "Room + Breakfast + Lunch OR Dinner",
  },
  {
    code: "AP (All Inclusive)",
    name: "American Plan — Most Popular",
    desc: "Complete carefree holiday! Includes Welcome Drink, Breakfast, Lunch Thali, Hi-Tea Pakodas, and Grand Dinner.",
    included: "Room + ALL 4 Meals Everyday",
  },
];

export default function RoomsAndTariffPage() {
  const generalWhatsappUrl =
    "https://wa.me/919923895055?text=" +
    encodeURIComponent(
      "Hi Beyond Sands! I'd like to check room availability and get the best direct rates for an upcoming stay."
    );

  const tariffSchema = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "name": "Beyond Sands Resort Rooms & Suites",
    "telephone": "+91-9923895055",
    "priceRange": "₹3000 - ₹5000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Opposite Sheetladevi Temple, Near Kelva Beach",
      "addressLocality": "Kelva, Palghar",
      "postalCode": "401401",
      "addressRegion": "MH",
      "addressCountry": "IN",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tariffSchema) }}
      />

      <div className="pt-28 sm:pt-36 pb-20 px-5 sm:px-10 lg:px-16 max-w-7xl mx-auto select-none">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-sans text-charcoal/60">
          <Link href="/" className="hover:text-deep-navy transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-deep-navy font-medium">Rooms &amp; Suites</span>
        </nav>

        {/* Hero Section */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-champagne-gold/15 border border-champagne-gold/30 rounded-full mb-4">
            <span className="w-2 h-2 rounded-full bg-champagne-gold animate-pulse" />
            <span className="font-sans text-[11px] uppercase tracking-widest text-deep-navy font-semibold">
              Official Direct Rates · 0% OTA Commission
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl text-deep-navy font-normal tracking-tight leading-[1.12] max-w-4xl">
            Beyond Sands Resort Rooms &amp; Suites — Kelva Beach, Palghar
          </h1>

          <p className="font-sans text-base sm:text-lg text-charcoal/80 font-light mt-5 max-w-3xl leading-relaxed">
            Transparent pricing with zero hidden booking charges. Book directly with our resident hosts on WhatsApp for the lowest rates, complimentary early check-in (subject to availability), and personalized pure veg/Jain meal arrangements.
          </p>
        </div>

        {/* Rooms Comparison Cards */}
        <div className="space-y-12 mb-20">
          {ROOM_TIERS.map((tier) => (
            <div
              key={tier.id}
              className={`bg-white rounded-2xl border ${
                tier.popular ? "border-champagne-gold shadow-md ring-1 ring-champagne-gold/30" : "border-charcoal/15 shadow-sm"
              } overflow-hidden`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Image */}
                <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-[380px]">
                  <Image
                    src={tier.image}
                    alt={tier.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover object-center"
                  />
                  {tier.popular && (
                    <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-deep-navy text-warm-ivory text-[10px] font-mono uppercase tracking-widest font-semibold rounded-full border border-champagne-gold/40">
                      Most Popular Choice
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="lg:col-span-7 p-7 sm:p-9 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-baseline justify-between gap-4 mb-3 pb-3 border-b border-charcoal/10">
                      <div>
                        <h2 className="font-display text-2xl sm:text-3xl text-deep-navy font-normal">
                          {tier.name}
                        </h2>
                        <p className="font-sans text-xs text-charcoal/65 font-light italic mt-0.5">
                          {tier.tagline}
                        </p>
                      </div>

                      <div className="text-right">
                        <div className="flex items-baseline gap-1.5 justify-end">
                          <span className="font-display text-3xl sm:text-4xl font-medium text-deep-navy">
                            {tier.weekdayRate}
                          </span>
                          <span className="font-sans text-xs text-charcoal/60">weekday</span>
                        </div>
                        <span className="text-[11px] font-sans text-charcoal/60 block">
                          Weekend: <strong className="text-deep-navy font-semibold">{tier.weekendRate}</strong> {tier.unit}
                        </span>
                      </div>
                    </div>

                    {/* Room Meta Badges */}
                    <div className="flex flex-wrap gap-4 py-2 mb-4 text-xs font-sans text-charcoal/75">
                      <span className="flex items-center gap-1.5">
                        <Users size={15} className="text-champagne-gold" />
                        <span>{tier.capacity}</span>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Maximize2 size={15} className="text-champagne-gold" />
                        <span>{tier.size}</span>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <BedDouble size={15} className="text-champagne-gold" />
                        <span>{tier.bed}</span>
                      </span>
                    </div>

                    {/* Inclusions */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-4">
                      {tier.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs font-sans text-charcoal/80">
                          <CheckCircle2 size={14} className="text-champagne-gold shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Booking CTA */}
                  <div className="pt-5 border-t border-charcoal/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                    <span className="text-[11px] font-sans text-charcoal/60">
                      Check-in: 12:00 PM · Check-out: 10:00 AM (Govt ID required)
                    </span>
                    <a
                      href={`https://wa.me/919923895055?text=${encodeURIComponent(tier.whatsappText)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#1ebd59] text-white font-sans text-xs uppercase tracking-widest font-semibold rounded-lg transition-all shadow-sm hover:shadow-md cursor-pointer shrink-0"
                    >
                      <WhatsAppIcon size={16} />
                      <span>Book on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Meal Package Options */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-sans text-xs uppercase tracking-widest text-champagne-gold font-semibold block mb-2">
              Flexible Meal Plans
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-deep-navy font-normal">
              Pair Your Stay with Pure Veg &amp; Jain Dining
            </h2>
            <p className="font-sans text-sm text-charcoal/70 mt-2 font-light">
              Choose from room-only or all-inclusive packages with fresh Maharashtrian, Gujarati, and North Indian feasts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MEAL_PLANS.map((plan, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-xl border border-charcoal/15 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="px-2.5 py-1 bg-champagne-gold/15 text-deep-navy font-mono text-[11px] font-semibold rounded inline-block mb-3">
                    {plan.code}
                  </span>
                  <h3 className="font-display text-xl text-deep-navy font-normal mb-2">{plan.name}</h3>
                  <p className="font-sans text-xs text-charcoal/70 font-light leading-relaxed mb-4">
                    {plan.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-charcoal/10 text-xs font-sans font-medium text-deep-navy flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-[#128C7E]" />
                  <span>{plan.included}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Day Picnic Cross-Link Banner */}
        <div className="bg-[#0b2238] text-warm-ivory rounded-2xl p-8 sm:p-10 border border-champagne-gold/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="px-3 py-1 bg-champagne-gold/20 text-champagne-gold text-xs font-mono uppercase tracking-widest font-semibold rounded-full inline-block">
              Looking for a Day Trip Instead?
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-normal">
              One Day Picnic Package — ₹2,200 All-Inclusive (10 AM – 5 PM)
            </h3>
            <p className="font-sans text-xs sm:text-sm text-warm-ivory/80 font-light max-w-2xl leading-relaxed">
              Includes Welcome Drink, Breakfast, Pure Veg Lunch Thali, Hi-Tea, Swimming Pool access &amp; Rain Dance. Perfect for groups up to 150.
            </p>
          </div>

          <Link
            href="/one-day-picnic-resort-palghar"
            className="px-6 py-3.5 bg-champagne-gold hover:bg-champagne-gold/90 text-deep-navy font-sans text-xs uppercase tracking-widest font-semibold rounded-lg transition-all shrink-0 flex items-center gap-2"
          >
            <span>View Day Picnic Details</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}
