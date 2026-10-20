import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Star, ShieldCheck, Waves, Utensils, MapPin, CheckCircle, Clock, Calendar, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Why Beyond Sands is the Best Resort in Palghar for Families & Groups",
  description:
    "Discover why Beyond Sands Pure Veg Resort is voted the best resort in Palghar for family staycations, corporate picnics, and group getaways near Mumbai. 40ft pool, pure veg dining & 2 mins from Kelva Beach.",
  alternates: {
    canonical: "/best-resort-in-palghar",
  },
  keywords: [
    "best resort in palghar",
    "family resort in palghar",
    "resort in palghar near mumbai",
    "best resort in kelva beach",
    "palghar beach resort with swimming pool",
  ],
};

const resortSchema = {
  "@context": "https://schema.org",
  "@type": "Resort",
  "name": "Beyond Sands Pure Veg Resort",
  "url": "https://www.beyondsands.in/best-resort-in-palghar",
  "telephone": "+91-9923895055",
  "priceRange": "₹2200 - ₹5000",
  "servesCuisine": "100% Pure Vegetarian & Jain",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Survey No. 1000, 1709, 1710, Shitladevi Road, Opposite Shitladevi Temple, Near Kelva Beach",
    "addressLocality": "Kelva, Palghar",
    "addressRegion": "MH",
    "postalCode": "401401",
    "addressCountry": "IN"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.3",
    "reviewCount": "40"
  }
};

export default function BestResortInPalgharPage() {
  const whatsappUrl =
    "https://wa.me/919923895055?text=" +
    encodeURIComponent("Hi Beyond Sands! I'm planning a trip to Palghar and want to book the best family package at your resort.");

  const reasons = [
    {
      title: "100% Pure Vegetarian & Jain Kitchen Sanctity",
      description:
        "Unlike other resorts in Palghar that share common kitchens for meat and alcohol, Beyond Sands operates a strictly pure-vegetarian, satvik culinary facility. Dedicated cookware and trained chefs prepare fresh Jain, Gujarati, and coastal Maharashtrian meals without onion or garlic upon request.",
      icon: Utensils,
    },
    {
      title: "40ft x 25ft Swimming Pool with Lifeguard & Rain Dance",
      description:
        "One of the largest resort pools in Palghar district. Crystal clear water, separate shallow kids' area, shaded sunbeds, and an energetic rain dance system with party audio ensure kids and adults alike have endless fun safely.",
      icon: Waves,
    },
    {
      title: "2-Minute Walk to Kelva Beach & Opposite Shitladevi Temple",
      description:
        "Situated in the most peaceful heritage pocket of Kelva (Kelve), directly across from the historic 400-year-old Shri Shitladevi Temple and just 290 meters from the golden sand shores and casuarina trees of Kelva Beach.",
      icon: MapPin,
    },
    {
      title: "Spacious AC Family Rooms & 6–15 Bed Dormitories",
      description:
        "Whether you're traveling as a couple, an intimate family, or an entire extended group of 15–20 relatives, our private verandah rooms and air-conditioned group dorms offer supreme comfort with 24/7 hot water, power backup, and WiFi.",
      icon: ShieldCheck,
    },
    {
      title: "Transparent Pricing & Value-Packed Packages",
      description:
        "From ₹2,200 per person One-Day Picnics (10 AM to 5 PM with all meals included) to ₹2,800/person overnight packages with 4 full meals, there are zero hidden charges or resort surcharges.",
      icon: Star,
    },
    {
      title: "Quick 1.5–2 Hour Drive from Mumbai, Thane & Virar",
      description:
        "Located just ~100 km from Mumbai via NH 48, or a quick 10-minute auto ride from Kelve Road Western Railway Station. Avoid long highway jams to Lonavala or Alibaug with a smooth coastal drive to Palghar.",
      icon: Clock,
    },
  ];

  return (
    <main className="min-h-screen bg-warm-ivory text-charcoal pt-28 pb-20 selection:bg-champagne-gold selection:text-deep-navy">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(resortSchema) }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6 text-xs text-charcoal/60 font-sans flex items-center gap-2">
          <Link href="/" className="hover:text-deep-navy transition-colors">Home</Link>
          <span>/</span>
          <span className="text-deep-navy font-medium">Best Resort in Palghar</span>
        </nav>

        {/* Hero Header */}
        <header className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-champagne-gold/20 text-deep-navy text-xs uppercase tracking-widest font-semibold border border-champagne-gold/30">
            ★ #1 Rated Pure Veg Retreat in Palghar District
          </span>
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-normal text-deep-navy tracking-tight leading-tight">
            Why Beyond Sands is the Best Resort in Palghar for Families &amp; Groups
          </h1>
          <p className="font-sans text-base sm:text-lg text-charcoal/80 font-light leading-relaxed max-w-2xl mx-auto">
            Escape the city chaos to a lush coastal sanctuary. Nestled between towering coconut groves and the Arabian Sea, discover why over 10,000+ happy guests from Mumbai, Thane, and Gujarat crown us their favourite holiday destination in Palghar.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full bg-deep-navy text-warm-ivory text-xs uppercase tracking-wider font-semibold hover:bg-champagne-gold hover:text-deep-navy transition-all duration-300 shadow-md hover:scale-105"
            >
              Book Direct on WhatsApp
            </a>
            <Link
              href="/rooms-tariff"
              className="px-8 py-3.5 rounded-full bg-white border border-charcoal/20 text-deep-navy text-xs uppercase tracking-wider font-medium hover:border-champagne-gold transition-all duration-300"
            >
              View Rooms &amp; Suites
            </Link>
          </div>
        </header>

        {/* Visual Showcase Card */}
        <div className="relative w-full h-[320px] sm:h-[480px] rounded-[2rem] overflow-hidden border border-charcoal/10 shadow-2xl mb-16">
          <Image
            src="/assets/location/location-drone-shitlamata.jpg"
            alt="Beyond Sands Pure Veg Resort Palghar drone view opposite Shitladevi Temple"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/70 via-transparent to-transparent flex items-end p-6 sm:p-10">
            <div className="text-warm-ivory space-y-1">
              <span className="text-xs uppercase tracking-widest text-champagne-gold font-semibold">
                Survey No. 1000, Shitladevi Road, Kelva, Palghar 401401
              </span>
              <p className="font-display text-2xl sm:text-3xl">
                Opposite Sheetla Devi Temple · 2 Mins Walk to Kelva Beach
              </p>
            </div>
          </div>
        </div>

        {/* 6 Reasons Why We Are #1 */}
        <section className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-champagne-gold font-semibold block mb-2">
              Unmatched Amenities &amp; Hospitality
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-deep-navy font-normal">
              6 Reasons Beyond Sands Outranks Every Other Resort in Palghar
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((r, idx) => (
              <div
                key={idx}
                className="bg-white/80 border border-charcoal/10 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-champagne-gold/15 flex items-center justify-center text-champagne-gold">
                    <r.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl text-deep-navy font-normal leading-snug">
                    {r.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-charcoal/75 leading-relaxed font-light">
                    {r.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison with Competitors */}
        <section className="bg-white rounded-[2rem] border border-charcoal/10 p-6 sm:p-10 shadow-sm mb-20">
          <h2 className="font-display text-2xl sm:text-3xl text-deep-navy font-normal mb-6 text-center">
            How Beyond Sands Compares to Other Resorts in Palghar
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm font-sans">
              <thead>
                <tr className="border-b border-charcoal/15 text-charcoal/60 uppercase tracking-wider text-[11px]">
                  <th className="py-3 px-4">Feature / Amenity</th>
                  <th className="py-3 px-4 text-deep-navy font-bold bg-champagne-gold/10 rounded-t-lg">Beyond Sands Resort</th>
                  <th className="py-3 px-4">Average Palghar Resort</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-charcoal/10 text-charcoal/85">
                <tr>
                  <td className="py-3.5 px-4 font-medium">Kitchen Type</td>
                  <td className="py-3.5 px-4 font-semibold text-deep-navy bg-champagne-gold/10">100% Strictly Pure Veg &amp; Jain</td>
                  <td className="py-3.5 px-4 text-charcoal/60">Mixed Non-Veg &amp; Veg</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium">Distance to Beach</td>
                  <td className="py-3.5 px-4 font-semibold text-deep-navy bg-champagne-gold/10">2 Mins Walk (290 Meters)</td>
                  <td className="py-3.5 px-4 text-charcoal/60">15–20 Mins Drive</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium">Swimming Pool Size</td>
                  <td className="py-3.5 px-4 font-semibold text-deep-navy bg-champagne-gold/10">40ft x 25ft + Lifeguard + Rain Dance</td>
                  <td className="py-3.5 px-4 text-charcoal/60">Small plunge pool (unsupervised)</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium">Opposite Temple</td>
                  <td className="py-3.5 px-4 font-semibold text-deep-navy bg-champagne-gold/10">Directly Opposite Shitladevi Temple</td>
                  <td className="py-3.5 px-4 text-charcoal/60">No proximity</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium">Group Dormitories</td>
                  <td className="py-3.5 px-4 font-semibold text-deep-navy bg-champagne-gold/10">AC Group Dorm (6–15 Guests)</td>
                  <td className="py-3.5 px-4 text-charcoal/60">Separate rooms only</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA Footer Block */}
        <section className="bg-deep-navy text-warm-ivory rounded-[2rem] p-8 sm:p-12 text-center space-y-4 border border-champagne-gold/30 shadow-xl">
          <span className="text-xs uppercase tracking-widest text-champagne-gold font-semibold">
            Ready for your Palghar Coastal Escape?
          </span>
          <h2 className="font-display text-2xl sm:text-4xl text-warm-ivory font-normal">
            Experience the Best Resort in Palghar for Yourself
          </h2>
          <p className="font-sans text-xs sm:text-sm text-warm-ivory/75 max-w-xl mx-auto leading-relaxed">
            Contact our reservations desk directly on WhatsApp for weekend availability, room quotes, or group event pricing.
          </p>
          <div className="pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-champagne-gold text-deep-navy text-xs uppercase tracking-wider font-bold hover:bg-warm-ivory transition-all duration-300"
            >
              <span>Chat with Us on WhatsApp (+91 99238 95055)</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
