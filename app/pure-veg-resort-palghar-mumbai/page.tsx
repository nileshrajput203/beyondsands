import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Utensils, ShieldCheck, Heart, Sparkles, MapPin, CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "100% Pure Veg Resort in Kelva, Palghar Near Mumbai",
  description:
    "Beyond Sands is the premier 100% Pure Veg & Jain resort in Kelva, Palghar near Mumbai. Zero meat, poultry, or alcohol permitted. Dedicated satvik cookware, 40ft pool & 2 mins to Kelva Beach.",
  alternates: {
    canonical: "/pure-veg-resort-palghar-mumbai",
  },
  keywords: [
    "pure veg resort in palghar",
    "jain resort near mumbai",
    "pure veg resort kelva beach",
    "pure vegetarian beach resort near mumbai",
    "satvik food resort maharashtra",
  ],
};

const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Beyond Sands Pure Veg Dining",
  "servesCuisine": ["Pure Vegetarian", "Jain", "Gujarati", "Maharashtrian"],
  "priceRange": "₹₹",
  "telephone": "+91-9923895055",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Survey No. 1000, 1709, 1710, Shitladevi Road, Opposite Shitladevi Temple, Near Kelva Beach",
    "addressLocality": "Kelva, Palghar",
    "addressRegion": "MH",
    "postalCode": "401401",
    "addressCountry": "IN"
  }
};

export default function PureVegResortPalgharMumbaiPage() {
  const whatsappUrl =
    "https://wa.me/919923895055?text=" +
    encodeURIComponent("Hi Beyond Sands! I'm looking for a 100% pure vegetarian resort near Mumbai and want to inquire about room & meal packages.");

  const highlights = [
    {
      title: "Zero Non-Veg & Zero Alcohol Property Policy",
      description:
        "Unlike hotels with mixed kitchens, Beyond Sands does not permit or prepare any meat, fish, eggs, poultry, or alcoholic beverages anywhere across the property. Your family stays in total comfort and sanctity.",
      icon: ShieldCheck,
    },
    {
      title: "Dedicated Jain Kitchen & Specialized Chefs",
      description:
        "We cater extensively to Gujarati, Marwari, Jain, and Swaminarayan families. Strict satvik meals are prepared without onion, garlic, potatoes, or underground root vegetables using separate cookware upon request.",
      icon: Utensils,
    },
    {
      title: "Directly Opposite 400-Yr-Old Shri Shitladevi Temple",
      description:
        "Begin your morning with peaceful temple darshan. The ancient and revered Sheetla Devi Temple sits right across our gates, surrounded by sacred banyan trees and serene coconut groves.",
      icon: Heart,
    },
    {
      title: "Fresh, Local Coastal Ingredients",
      description:
        "Savor authentic regional flavours: fresh ukadiche modak, Gujarati dal-dhokli, creamy paneer curries, fresh rotis right from the tawa, crispy bhajiyas, and solkadhi made with freshly squeezed coconut milk.",
      icon: Sparkles,
    },
  ];

  return (
    <main className="min-h-screen bg-warm-ivory text-charcoal pt-28 pb-20 selection:bg-champagne-gold selection:text-deep-navy">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6 text-xs text-charcoal/60 font-sans flex items-center gap-2">
          <Link href="/" className="hover:text-deep-navy transition-colors">Home</Link>
          <span>/</span>
          <span className="text-deep-navy font-medium">100% Pure Veg Resort</span>
        </nav>

        {/* Hero Header */}
        <header className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-champagne-gold/20 text-deep-navy text-xs uppercase tracking-widest font-semibold border border-champagne-gold/30">
            100% Pure Vegetarian &amp; Jain Sanctuary
          </span>
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-normal text-deep-navy tracking-tight leading-tight">
            100% Pure Veg Resort in Kelva, Palghar Near Mumbai
          </h1>
          <p className="font-sans text-base sm:text-lg text-charcoal/80 font-light leading-relaxed max-w-2xl mx-auto">
            A peaceful coastal haven designed for families who hold their culinary sanctity dear. Just 1.5 to 2 hours from Borivali, Virar, Vasai, and Thane.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full bg-deep-navy text-warm-ivory text-xs uppercase tracking-wider font-semibold hover:bg-champagne-gold hover:text-deep-navy transition-all duration-300 shadow-md"
            >
              Reserve Pure Veg Stay on WhatsApp
            </a>
            <Link
              href="/rooms-tariff"
              className="px-8 py-3.5 rounded-full bg-white border border-charcoal/20 text-deep-navy text-xs uppercase tracking-wider font-medium hover:border-champagne-gold transition-all duration-300"
            >
              View Rooms &amp; Tariff
            </Link>
          </div>
        </header>

        {/* 4 Pillars of Veg Sanctity */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {highlights.map((h, idx) => (
            <div
              key={idx}
              className="bg-white/80 border border-charcoal/10 rounded-2xl p-6 sm:p-8 shadow-sm flex gap-5 items-start"
            >
              <div className="w-12 h-12 rounded-xl bg-champagne-gold/15 flex items-center justify-center text-champagne-gold shrink-0">
                <h.icon className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h2 className="font-display text-xl sm:text-2xl text-deep-navy font-normal">
                  {h.title}
                </h2>
                <p className="font-sans text-xs sm:text-sm text-charcoal/75 leading-relaxed font-light">
                  {h.description}
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* Pure Veg Buffet Menu Preview */}
        <section className="bg-white rounded-[2rem] border border-charcoal/10 p-6 sm:p-10 shadow-sm mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest text-champagne-gold font-semibold block mb-1">
              Satvik &amp; Pure Dining Feast
            </span>
            <h2 className="font-display text-2xl sm:text-3xl text-deep-navy font-normal">
              Sample Pure Vegetarian &amp; Jain Buffet Spread
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl bg-warm-ivory/50 border border-charcoal/10 space-y-2">
              <span className="text-deep-navy font-semibold text-sm uppercase tracking-wider block">Breakfast (8:30 – 10:30 AM)</span>
              <ul className="text-xs text-charcoal/80 space-y-1.5 list-disc pl-4 font-sans">
                <li>Steaming Idli &amp; Medu Vada with Coconut Chutney</li>
                <li>Poha / Upma prepared fresh with groundnuts</li>
                <li>Masala Tea &amp; Filter Coffee</li>
                <li>Fresh fruit platter</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-warm-ivory/50 border border-charcoal/10 space-y-2">
              <span className="text-deep-navy font-semibold text-sm uppercase tracking-wider block">Buffet Lunch (1:00 – 2:30 PM)</span>
              <ul className="text-xs text-charcoal/80 space-y-1.5 list-disc pl-4 font-sans">
                <li>Paneer Butter Masala / Jain Paneer Tikka Gravy</li>
                <li>Seasonal Vegetable (Bhindi / Aloo Gobi / Tindora)</li>
                <li>Dal Tadka &amp; Gujarati sweet dal</li>
                <li>Hot Phulkas &amp; Butter Rotis</li>
                <li>Jeera Rice, Papad, Salad &amp; Gulab Jamun / Jalebi</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-warm-ivory/50 border border-charcoal/10 space-y-2">
              <span className="text-deep-navy font-semibold text-sm uppercase tracking-wider block">Dinner &amp; Hi-Tea</span>
              <ul className="text-xs text-charcoal/80 space-y-1.5 list-disc pl-4 font-sans">
                <li>Evening Hi-Tea: Kanda/Kela Bhajiyas &amp; Farsan</li>
                <li>Night Buffet: Coastal Veg Curry &amp; Biryani</li>
                <li>Creamy Kheer / Seasonal Halwa</li>
                <li>Special Jain dinner menu on request</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Footer Block */}
        <section className="bg-deep-navy text-warm-ivory rounded-[2rem] p-8 sm:p-12 text-center space-y-4 border border-champagne-gold/30 shadow-xl">
          <span className="text-xs uppercase tracking-widest text-champagne-gold font-semibold">
            Zero Non-Veg · Zero Alcohol · 100% Satvik Peace
          </span>
          <h2 className="font-display text-2xl sm:text-4xl text-warm-ivory font-normal">
            Book Your Pure Veg Beach Staycation in Palghar
          </h2>
          <p className="font-sans text-xs sm:text-sm text-warm-ivory/75 max-w-xl mx-auto leading-relaxed">
            Directly opposite Sheetla Devi Temple and 2 minutes walk from Kelva Beach. Speak with our reservations team today.
          </p>
          <div className="pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-champagne-gold text-deep-navy text-xs uppercase tracking-wider font-bold hover:bg-warm-ivory transition-all duration-300"
            >
              <span>WhatsApp Booking (+91 99238 95055)</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
