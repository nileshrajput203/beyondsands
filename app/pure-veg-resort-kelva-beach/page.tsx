import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/components/footer/Footer";
import {
  ShieldCheck,
  UtensilsCrossed,
  Sparkles,
  MapPin,
  HeartHandshake,
  CheckCircle2,
  Waves,
  Phone,
  ArrowRight,
  Sun,
  Award,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "100% Pure Veg Resort in Kelva Beach, Palghar | Strict Jain & Swaminarayan Food",
  description:
    "Palghar's premier 100% Pure Vegetarian family sanctuary at Kelva Beach. Strictly no alcohol, no non-veg on premises, separate Jain kitchen cookware, opposite Sheetla Devi Temple. Pure sattvic dining & peaceful family stay.",
  keywords: [
    "pure veg resort kelva beach",
    "pure veg resort palghar",
    "jain resort kelva beach",
    "pure veg resort near mumbai",
    "swaminarayan food resort palghar",
    "pure veg beach resort with swimming pool",
    "resort opposite shitla devi temple kelva",
    "gujarati family resort palghar",
    "jain food resort near virar thane",
  ],
  alternates: {
    canonical: "/pure-veg-resort-kelva-beach",
  },
  openGraph: {
    title: "100% Pure Veg Resort in Kelva Beach, Palghar | Strict Jain Sanctuary",
    description:
      "A trusted 100% Pure Vegetarian & Jain sanctuary. Distinct cookware, zero non-veg, zero alcohol, located opposite Sheetla Devi Temple and 1 min from Kelva Beach.",
    url: "https://www.beyondsands.in/pure-veg-resort-kelva-beach",
    images: [{ url: "/assets/dining/lunch.png" }],
  },
};

const PILLARS = [
  {
    title: "100% Pure Vegetarian Premises",
    desc: "We strictly forbid non-vegetarian food, eggs, and alcohol anywhere on our property. From raw groceries to dining tables, our entire facility is kept pure.",
    badge: "Zero Non-Veg / Zero Alcohol",
  },
  {
    title: "Dedicated Jain & Swaminarayan Prep",
    desc: "Strictly prepared upon request without onion, garlic, potatoes, or underground root vegetables. Handled with exclusive pots and pristine ladles.",
    badge: "Separate Cookware",
  },
  {
    title: "Directly Opposite Sheetla Devi Temple",
    desc: "A revered holy pilgrimage point for families across Maharashtra and Gujarat. Step out of our gate directly into the temple courtyard (0 mins).",
    badge: "Sacred Enclave",
  },
  {
    title: "Fresh Regional Coastal Cuisine",
    desc: "Wholesome Maharashtrian Konkani specialties, rich Gujarati rasoi, and authentic North Indian delicacies prepared fresh daily with cold-pressed oils and pure desi ghee.",
    badge: "Fresh & Sattvic",
  },
];

const MEALS_MENU = [
  {
    meal: "Breakfast Buffet",
    timing: "08:00 AM – 10:30 AM",
    items: [
      "Steamed Soft Idlis & Crispy Medu Vadas",
      "Traditional Coastal Kanda Poha (Jain Poha available)",
      "Upma with Roasted Cashews & Curry Leaves",
      "Fresh Sheera / Halwa",
      "Fresh Masala Chai & South Indian Filter Coffee",
    ],
  },
  {
    meal: "Grand Lunch Thali",
    timing: "01:00 PM – 03:00 PM",
    items: [
      "Paneer Makhani / Paneer Lababdar",
      "Regional Seasonal Vegetable Preparation",
      "Traditional Gujarati Kadhi / Maharashtrian Aamti",
      "Dal Tadka & Steamed Jeera Basmati Rice",
      "Hot Ghee Phulkas / Puri",
      "Special Farsan (Khaman Dhokla / Samosa / Veg Cutlet)",
      "Warm Gulab Jamun or Shrikhand",
    ],
  },
  {
    meal: "Evening Hi-Tea & Dinner Feast",
    timing: "Hi-Tea: 04:30 PM | Dinner: 08:30 PM",
    items: [
      "Hot Chai with Crispy Bhajiyas / Pakodas",
      "Light Coastal Khichdi & Kadhi for Dinner",
      "Fresh Paneer / Veg Handi with Naan / Roti",
      "Fresh Green Salads, Roasted Papad & Pickle",
      "Special Ice Cream or Moong Dal Halwa",
    ],
  },
];

export default function PureVegResortPage() {
  const whatsappUrl =
    "https://wa.me/919923895055?text=" +
    encodeURIComponent(
      "Hi Beyond Sands! I'm inquiring about booking a stay for a Pure Veg / Jain family. Please share room rates and food package details."
    );

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Beyond Sands 100% Pure Vegetarian & Jain Dining",
    "servesCuisine": ["Pure Vegetarian", "Jain", "Gujarati", "Maharashtrian"],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Opposite Sheetladevi Temple, Near Kelva Beach",
      "addressLocality": "Kelva, Palghar",
      "postalCode": "401401",
      "addressRegion": "MH",
      "addressCountry": "IN",
    },
    "telephone": "+91-9923895055",
    "priceRange": "₹2200 - ₹5000",
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
          <span className="text-deep-navy font-medium">Pure Veg Resort Kelva Beach</span>
        </nav>

        {/* Hero Section */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#128C7E]/10 border border-[#128C7E]/30 rounded-full mb-4">
            <span className="w-2 h-2 rounded-full bg-[#128C7E] animate-pulse" />
            <span className="font-sans text-[11px] uppercase tracking-widest text-[#128C7E] font-semibold">
              100% Pure Vegetarian &amp; Jain Food Sanctuary
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl text-deep-navy font-normal tracking-tight leading-[1.12] max-w-4xl">
            Pure Veg Resort in Kelva Beach, Palghar — Strict Jain Purity &amp; Family Tranquility
          </h1>

          <p className="font-sans text-base sm:text-lg text-charcoal/80 font-light mt-5 max-w-3xl leading-relaxed">
            Finding a true beachside resort where no meat, fish, eggs, or alcohol ever enter the kitchen can be difficult. Beyond Sands was built to give Gujarati, Jain, Swaminarayan, and vegetarian families complete peace of mind, surrounded by coastal coconut groves and sea breezes.
          </p>
        </div>

        {/* Big Assurance Banner */}
        <div className="bg-gradient-to-br from-[#0b2238] to-[#123652] text-warm-ivory rounded-2xl p-8 sm:p-12 mb-20 border border-champagne-gold/30 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="px-3 py-1 bg-champagne-gold/20 text-champagne-gold text-xs font-mono uppercase tracking-widest font-semibold rounded-full inline-block">
                Our Golden Ethos
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-normal leading-snug">
                Outside Non-Veg &amp; Alcohol Are Strictly Prohibited On Resort Grounds
              </h2>
              <p className="font-sans text-sm text-warm-ivory/80 font-light leading-relaxed max-w-2xl">
                We respect your family&apos;s spiritual and dietary values. From our storage pantries and dedicated cookware to our dining hall, every meal is prepared with sattvic care, authentic ingredients, and uncompromised cleanliness.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs font-sans text-warm-ivory/90">
                  <ShieldCheck size={16} className="text-champagne-gold" />
                  <span>Distinct Jain Cookware</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-sans text-warm-ivory/90">
                  <Award size={16} className="text-champagne-gold" />
                  <span>Zero Cross-Contamination</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-sans text-warm-ivory/90">
                  <Sun size={16} className="text-champagne-gold" />
                  <span>100% Pure Desi Ghee &amp; Fresh Spices</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 bg-[#25D366] hover:bg-[#1ebd59] text-white font-sans text-xs uppercase tracking-widest font-semibold rounded-lg text-center transition-all shadow-md flex items-center justify-center gap-2"
              >
                <WhatsAppIcon size={18} />
                <span>Inquire With Kitchen Team</span>
              </a>
              <Link
                href="/rooms-and-tariff"
                className="w-full py-3.5 px-6 border border-white/20 hover:border-champagne-gold text-warm-ivory hover:text-champagne-gold font-sans text-xs uppercase tracking-widest font-semibold rounded-lg text-center transition-all"
              >
                Explore Rooms &amp; Suites
              </Link>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Purity */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-sans text-xs uppercase tracking-widest text-champagne-gold font-semibold block mb-2">
              Uncompromising Standards
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-deep-navy font-normal">
              Why Jain &amp; Vegetarian Families Choose Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PILLARS.map((p, idx) => (
              <div
                key={idx}
                className="p-7 bg-white rounded-2xl border border-charcoal/15 shadow-xs hover:border-champagne-gold/60 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="px-3 py-1 bg-champagne-gold/15 text-deep-navy text-[11px] font-mono uppercase tracking-wider font-semibold rounded-full inline-block mb-3">
                    {p.badge}
                  </span>
                  <h3 className="font-display text-2xl text-deep-navy font-normal mb-2">
                    {p.title}
                  </h3>
                  <p className="font-sans text-sm text-charcoal/75 font-light leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Daily Pure Veg & Jain Menu Spread */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-sans text-xs uppercase tracking-widest text-champagne-gold font-semibold block mb-2">
              Sattvic Gastronomy
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-deep-navy font-normal">
              Fresh Daily Culinary Spread
            </h2>
            <p className="font-sans text-sm text-charcoal/70 mt-2 font-light">
              Every meal is freshly cooked on-site. Strict Jain food (without onion, garlic, or potatoes) is prepared with advance notice.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {MEALS_MENU.map((menu, i) => (
              <div
                key={i}
                className="p-7 bg-white rounded-2xl border border-charcoal/15 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="font-display text-2xl text-deep-navy font-normal">{menu.meal}</h3>
                  </div>
                  <span className="text-xs font-mono text-champagne-gold font-semibold block mb-4">
                    {menu.timing}
                  </span>
                  <ul className="space-y-2.5 font-sans text-xs sm:text-[13px] text-charcoal/80">
                    {menu.items.map((dish, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <span className="text-champagne-gold mt-0.5">•</span>
                        <span>{dish}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Location & Temple Proximity Card */}
        <div className="bg-white rounded-2xl border border-charcoal/15 p-8 sm:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-champagne-gold font-semibold">
              Divine Proximity · 0 Mins Walk
            </span>
            <h3 className="font-display text-2xl sm:text-3xl text-deep-navy font-normal">
              Located Directly Opposite Sheetla Devi Temple
            </h3>
            <p className="font-sans text-sm text-charcoal/75 font-light max-w-2xl leading-relaxed">
              Attend morning and evening aartis without vehicle hassles. After darshan, stroll just 2 minutes to the uncrowded sands of Kelva Beach.
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-deep-navy hover:bg-navy-blue text-warm-ivory font-sans text-xs uppercase tracking-widest font-semibold rounded-lg transition-all shrink-0"
          >
            Reserve Family Stay
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
}
