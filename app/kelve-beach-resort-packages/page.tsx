import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Waves, Utensils, Clock, CheckCircle2, Users, Star, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Kelve Beach Resort Packages & One-Day Picnic Prices",
  description:
    "Explore transparent Kelve Beach resort packages and one-day picnic prices starting at ₹2,200/person. 40ft swimming pool, rain dance, 100% pure veg buffet lunch & AC rooms.",
  alternates: {
    canonical: "/kelve-beach-resort-packages",
  },
  keywords: [
    "kelve resort",
    "kelva beach resort price",
    "kelve beach resort packages",
    "one day picnic kelva resort price",
    "resort in kelve with swimming pool",
  ],
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Kelve Beach Resort One-Day Picnic & Stay Packages",
  "image": "https://www.beyondsands.in/assets/hero/hero-canopy-poster.jpg",
  "description": "Comprehensive one-day picnic and overnight stay packages at Beyond Sands Pure Veg Resort, Kelve Beach, Palghar.",
  "brand": {
    "@type": "Brand",
    "name": "Beyond Sands Resort"
  },
  "offers": {
    "@type": "AggregateOffer",
    "lowPrice": "2200",
    "highPrice": "5000",
    "priceCurrency": "INR"
  }
};

export default function KelveBeachResortPackagesPage() {
  const whatsappPicnicUrl =
    "https://wa.me/919923895055?text=" +
    encodeURIComponent("Hi Beyond Sands! I'm interested in booking the ₹2,200 One-Day Picnic Package at Kelve Beach. Please check availability.");

  const whatsappStayUrl =
    "https://wa.me/919923895055?text=" +
    encodeURIComponent("Hi Beyond Sands! I'm inquiring about overnight room packages and tariff at your Kelve resort.");

  const packages = [
    {
      title: "One-Day Picnic Package",
      badge: "Most Popular",
      price: "₹2,200",
      per: "per person (all-inclusive)",
      timing: "10:00 AM – 05:00 PM",
      features: [
        "Welcome drink on arrival (fresh kokum / lemon cooler)",
        "Hot breakfast (Pohe, Upma, Idli Sambhar, Tea/Coffee)",
        "Lavish Pure Veg & Jain Lunch Buffet (Paneer, Dal, Veggies, Rice, Roti & Sweet)",
        "Evening Hi-Tea with hot coastal snacks (Bhajiyas / Farsan)",
        "Full access to 40ft x 25ft swimming pool with lifeguard",
        "Rain dance session with music & sound system",
        "Separate men & women clean changing rooms with shower facilities",
        "Group capacity up to 150 guests",
      ],
      ctaText: "Book Picnic on WhatsApp",
      ctaUrl: whatsappPicnicUrl,
      highlight: true,
    },
    {
      title: "Per Person Overnight Stay Package",
      badge: "Best Value for Groups",
      price: "₹2,800",
      per: "per person / night (min 4 guests)",
      timing: "Check-in 12:00 PM · Check-out 11:00 AM",
      features: [
        "All 4 Meals Included: Lunch, Evening Hi-Tea, Dinner & Morning Breakfast",
        "Deluxe AC Room accommodation (Pool View or Garden View)",
        "100% Pure Veg & Jain dining options",
        "Full swimming pool & rain dance access",
        "Free high-speed WiFi across resort",
        "24/7 hot water, power backup & secured parking",
      ],
      ctaText: "Book Stay Package",
      ctaUrl: whatsappStayUrl,
      highlight: false,
    },
    {
      title: "Couple Romantic Overnight Package",
      badge: "Couples Special",
      price: "₹7,000",
      per: "per couple / night (all meals included)",
      timing: "Check-in 12:00 PM · Check-out 11:00 AM",
      features: [
        "Private AC Couple Suite with private balcony overlooking palms",
        "All 4 meals for 2 persons: Lunch, Hi-Tea, Candlelight-feel Dinner & Breakfast",
        "Complimentary welcome beverage & floral room accents",
        "Full pool & resort amenities access",
        "2 minutes romantic walk to Kelva Beach sunset",
      ],
      ctaText: "Book Couple Package",
      ctaUrl: whatsappStayUrl,
      highlight: false,
    },
  ];

  return (
    <main className="min-h-screen bg-warm-ivory text-charcoal pt-28 pb-20 selection:bg-champagne-gold selection:text-deep-navy">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6 text-xs text-charcoal/60 font-sans flex items-center gap-2">
          <Link href="/" className="hover:text-deep-navy transition-colors">Home</Link>
          <span>/</span>
          <span className="text-deep-navy font-medium">Kelve Beach Resort Packages</span>
        </nav>

        {/* Hero Header */}
        <header className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-champagne-gold/20 text-deep-navy text-xs uppercase tracking-widest font-semibold border border-champagne-gold/30">
            Transparent Pricing · Zero Hidden Charges
          </span>
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-normal text-deep-navy tracking-tight leading-tight">
            Kelve Beach Resort Packages &amp; One-Day Picnic Prices
          </h1>
          <p className="font-sans text-base sm:text-lg text-charcoal/80 font-light leading-relaxed max-w-2xl mx-auto">
            Experience the ultimate beachside getaway at Beyond Sands Pure Veg Resort. From ₹2,200 day-picnics with swimming pool and rain dance to comprehensive overnight family staycations.
          </p>
        </header>

        {/* Packages Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 items-stretch">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`rounded-[2rem] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                pkg.highlight
                  ? "bg-white border-2 border-champagne-gold shadow-xl scale-102"
                  : "bg-white/80 border border-charcoal/10 shadow-sm hover:shadow-md"
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-deep-navy/5 text-deep-navy text-[10px] uppercase tracking-wider font-semibold">
                    {pkg.badge}
                  </span>
                  <span className="text-xs text-charcoal/50 font-sans">{pkg.timing}</span>
                </div>

                <h2 className="font-display text-2xl text-deep-navy font-normal leading-snug">
                  {pkg.title}
                </h2>

                <div className="pt-2 pb-4 border-b border-charcoal/10">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-4xl sm:text-5xl text-deep-navy font-normal">
                      {pkg.price}
                    </span>
                  </div>
                  <span className="text-xs text-charcoal/60 font-sans block mt-1">
                    {pkg.per}
                  </span>
                </div>

                <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-charcoal/80 font-sans">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-champagne-gold shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <a
                  href={pkg.ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 rounded-full text-xs uppercase tracking-wider font-semibold text-center block transition-all duration-300 ${
                    pkg.highlight
                      ? "bg-deep-navy text-warm-ivory hover:bg-champagne-gold hover:text-deep-navy shadow-md"
                      : "bg-champagne-gold/20 text-deep-navy border border-champagne-gold/40 hover:bg-champagne-gold"
                  }`}
                >
                  {pkg.ctaText}
                </a>
              </div>
            </div>
          ))}
        </section>

        {/* Picnic Day Schedule Timeline */}
        <section className="bg-white rounded-[2rem] border border-charcoal/10 p-6 sm:p-10 shadow-sm mb-20">
          <h2 className="font-display text-2xl sm:text-3xl text-deep-navy font-normal mb-8 text-center">
            One-Day Picnic Schedule (10:00 AM to 5:00 PM)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-xl bg-warm-ivory/60 border border-charcoal/10">
              <span className="text-champagne-gold font-bold text-xs uppercase tracking-widest block mb-1">10:00 AM</span>
              <h3 className="font-semibold text-deep-navy text-sm">Arrival &amp; Breakfast</h3>
              <p className="text-xs text-charcoal/70 mt-1">Welcome drink, hot coastal snacks, tea &amp; coffee</p>
            </div>

            <div className="p-4 rounded-xl bg-warm-ivory/60 border border-charcoal/10">
              <span className="text-champagne-gold font-bold text-xs uppercase tracking-widest block mb-1">11:00 AM – 01:00 PM</span>
              <h3 className="font-semibold text-deep-navy text-sm">Pool &amp; Rain Dance</h3>
              <p className="text-xs text-charcoal/70 mt-1">40ft pool swim, DJ rain dance session with family</p>
            </div>

            <div className="p-4 rounded-xl bg-warm-ivory/60 border border-charcoal/10">
              <span className="text-champagne-gold font-bold text-xs uppercase tracking-widest block mb-1">01:00 PM – 02:30 PM</span>
              <h3 className="font-semibold text-deep-navy text-sm">Pure Veg Buffet Lunch</h3>
              <p className="text-xs text-charcoal/70 mt-1">Lavish satvik / Jain spread with sweets &amp; savouries</p>
            </div>

            <div className="p-4 rounded-xl bg-warm-ivory/60 border border-charcoal/10">
              <span className="text-champagne-gold font-bold text-xs uppercase tracking-widest block mb-1">04:30 PM – 05:00 PM</span>
              <h3 className="font-semibold text-deep-navy text-sm">Hi-Tea &amp; Beach Walk</h3>
              <p className="text-xs text-charcoal/70 mt-1">Evening tea with hot bhajiyas + sunset beach stroll</p>
            </div>
          </div>
        </section>

        {/* Direct WhatsApp Concierge CTA */}
        <section className="bg-deep-navy text-warm-ivory rounded-[2rem] p-8 sm:p-12 text-center space-y-4 border border-champagne-gold/30 shadow-xl">
          <span className="text-xs uppercase tracking-widest text-champagne-gold font-semibold">
            Corporate Picnics · Family Get-Togethers · Birthdays
          </span>
          <h2 className="font-display text-2xl sm:text-4xl text-warm-ivory font-normal">
            Planning a Group Outing to Kelve Beach?
          </h2>
          <p className="font-sans text-xs sm:text-sm text-warm-ivory/75 max-w-xl mx-auto leading-relaxed">
            We accommodate groups of up to 150 persons with private dining areas, dedicated rain dance slots, and customized Jain meal options.
          </p>
          <div className="pt-2">
            <a
              href={whatsappPicnicUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-champagne-gold text-deep-navy text-xs uppercase tracking-wider font-bold hover:bg-warm-ivory transition-all duration-300"
            >
              <span>Get Instant Group Quote on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
