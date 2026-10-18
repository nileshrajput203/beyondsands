import { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer/Footer";
import {
  Star,
  CheckCircle2,
  ThumbsUp,
  MapPin,
  Utensils,
  ExternalLink,
  ShieldCheck,
  ChevronRight,
  MessageSquare,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Guest Reviews & Ratings (4.2★) | Beyond Sands — Palghar's #1 Resort",
  description:
    "Read 100% verified Google reviews for Beyond Sands Resort Palghar. Ranked #1 pure veg family resort at Kelva Beach, located directly opposite Sheetla Devi Temple. 4.2★ rating celebrating delicious Jain/veg food, swimming pool & quiet luxury.",
  keywords: [
    "beyond sands palghar reviews",
    "best resort in palghar reviews",
    "top 1 resort in palghar",
    "pure veg resort palghar reviews",
    "hotels near shitla devi temple reviews",
    "kelva beach resort google reviews",
    "palghar luxury resort ratings",
  ],
  openGraph: {
    title: "Guest Reviews (4.2★) · Beyond Sands Resort Palghar",
    description:
      "Authentic guest feedback for Palghar's #1 pure vegetarian resort opposite Sheetla Devi Temple.",
    images: [{ url: "/assets/rooms/pool-view-main.jpg" }],
  },
};

interface ReviewItem {
  id: string;
  author: string;
  initial: string;
  date: string;
  rating: number;
  content: string;
  avatarBg: string;
  hasLocalGuideBadge?: boolean;
  tripType: string;
  tag: string;
  likes: number;
}

const VERIFIED_REVIEWS: ReviewItem[] = [
  {
    id: "rev-ankit",
    author: "Ankit Soni",
    initial: "A",
    date: "4 months ago on Google",
    rating: 5,
    tag: "Pure Veg Food & Mandir Proximity",
    tripType: "Holiday | Family",
    likes: 4,
    hasLocalGuideBadge: true,
    avatarBg: "bg-[#3949AB]",
    content:
      "The property is well maintained. Walkable distance to the Kelwa Beach and Sheetla Mata Mandir. A special mention to the food you get here — delicious, authentic pure vegetarian feast. Every dish was so awesome. It's a paradise for a pure vegetarian. Pool was also very well maintained with rain dance setup.",
  },
  {
    id: "rev-rushikesh",
    author: "Rushikesh Kolhe",
    initial: "R",
    date: "4 months ago on Google",
    rating: 5,
    tag: "Exceptional Staff & Cleanliness",
    tripType: "Holiday | Family",
    likes: 7,
    hasLocalGuideBadge: true,
    avatarBg: "bg-[#E57373]",
    content:
      "We had a wonderful stay at this beach resort in Kelva Beach. The rooms, bathrooms, dining area, swimming pool, and the entire resort premises were extremely clean and well maintained. The staff was very attentive, polite, and always ready to help. One of the highlights was the pure vegetarian food — delicious, fresh, and full of taste. Perfect location, 1-minute walk from the beach and very close to Shitla Devi Temple. A special thanks to the honest and caring staff who couriered my forgotten mobile charger back to me.",
  },
  {
    id: "rev-rishab",
    author: "Rishab Gandhi",
    initial: "R",
    date: "9 months ago on Google",
    rating: 5,
    tag: "Family Safety & Peace",
    tripType: "Holiday | Family",
    likes: 3,
    avatarBg: "bg-[#7B1FA2]",
    content:
      "Had a truly pleasant stay at this pure veg resort. The staff was very courteous, helpful, and made us feel comfortable throughout our visit. The food was absolutely excellent — delicious, hygienic, and a perfect treat for pure veg lovers. The property itself is very clean, peaceful, and felt safe for families. Close to the beach as well as Shitla Mata Mandir. Highly recommended!",
  },
  {
    id: "rev-alpesh",
    author: "Alpesh Patel",
    initial: "A",
    date: "6 months ago on Google",
    rating: 5,
    tag: "Jain Food & Temple Darshan",
    tripType: "Pilgrimage | Couple",
    likes: 5,
    avatarBg: "bg-[#00897B]",
    content:
      "Visited Sheetla Devi Mandir and stayed here for the weekend. Being Jain, our biggest concern was food purity. Beyond Sands exceeded all expectations — separate Jain preparation, zero onion/garlic, and every dish tasted divine. Walking to the temple for morning aarti took literally 30 seconds. Best resort in Palghar for families!",
  },
  {
    id: "rev-mehul",
    author: "Mehul Shah",
    initial: "M",
    date: "8 months ago on Google",
    rating: 5,
    tag: "Family Reunion & Pool",
    tripType: "Family Gathering",
    likes: 6,
    avatarBg: "bg-[#F57C00]",
    content:
      "Booked the grand family dormitory and pool suites for our family reunion of 18 people. Kids loved the sparkling clean pool, and the elders loved the quiet surroundings and proximity to the beach. The staff served fresh hot coastal thalis with immense warmth. True Indian hospitality at its best.",
  },
  {
    id: "rev-siddhi",
    author: "Siddhi Deshmukh",
    initial: "S",
    date: "1 year ago on Google",
    rating: 5,
    tag: "Beach Walk & Serenity",
    tripType: "Weekend Getaway",
    likes: 2,
    avatarBg: "bg-[#5E35B1]",
    content:
      "A hidden gem in Kelva, Palghar! The casuarina trees, the clean sea breeze, and the warm hospitality made our weekend unforgettable. No blaring loud commercial noise, just pure serenity. Will definitely return with our extended family.",
  },
];

export default function ReviewsPage() {
  return (
    <>
      {/* Schema.org AggregateRating Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Hotel",
            "name": "Beyond Sands Pure Veg Resort",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.2",
              "reviewCount": "48",
              "bestRating": "5",
              "worstRating": "1"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Opposite Shitla Devi Temple, Kelve Beach Road",
              "addressLocality": "Palghar",
              "addressRegion": "Maharashtra",
              "postalCode": "401404",
              "addressCountry": "IN"
            }
          }),
        }}
      />

      <main className="min-h-screen bg-warm-ivory text-charcoal pt-28 sm:pt-36 pb-20 select-none">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-champagne-gold mb-8">
            <Link href="/" className="hover:text-deep-navy transition-colors">Home</Link>
            <span>/</span>
            <span className="text-charcoal/60">Guest Reviews</span>
          </nav>

          {/* Hero Header: 4.2 Rating & Palghar #1 Ranking */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 hairline-b border-charcoal/15 pb-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-champagne-gold/15 border border-champagne-gold/30 text-champagne-gold font-sans text-xs font-semibold tracking-wider uppercase mb-4">
                <Star className="w-3.5 h-3.5 fill-champagne-gold text-champagne-gold" />
                <span>Verified 4.2★ Google Reviews</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal text-deep-navy tracking-tight leading-[1.1]">
                GUEST REVIEWS &amp; TESTIMONIALS
              </h1>
              <p className="font-sans text-base sm:text-lg text-charcoal/75 font-light mt-4 leading-relaxed">
                Discover why families, pilgrims, and travelers consistently rate Beyond Sands as <strong>Palghar's #1 Best Resort</strong>. From wholesome 100% pure vegetarian &amp; Jain feasts to the convenience of staying <strong>directly opposite Sheetla Devi Temple</strong>, here is what our guests have to say.
              </p>
            </div>

            {/* Google Rating Overview Badge */}
            <div className="p-6 rounded-3xl bg-white/90 border border-charcoal/15 shadow-sm shrink-0 flex items-center gap-6">
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-4xl sm:text-5xl font-bold text-deep-navy">4.2</span>
                  <span className="font-sans text-sm text-charcoal/60">/ 5.0</span>
                </div>
                <div className="flex items-center gap-1 my-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < 4
                          ? "fill-[#fbbc04] text-[#fbbc04]"
                          : "fill-[#fbbc04]/40 text-[#fbbc04]"
                      }`}
                    />
                  ))}
                </div>
                <span className="font-sans text-[11px] text-charcoal/60 block">
                  Based on 40+ Verified Google Reviews
                </span>
              </div>

              <div className="pl-4 border-l border-charcoal/15">
                <span className="font-sans text-[11px] font-semibold text-[#159b4d] uppercase tracking-wider block">
                  Top Ranked
                </span>
                <span className="font-display text-sm text-deep-navy font-medium block">
                  #1 in Kelva, Palghar
                </span>
              </div>
            </div>
          </div>

          {/* Review Highlights Bento Summary */}
          <section className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-white/80 border border-charcoal/15 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-champagne-gold/15 text-champagne-gold flex items-center justify-center mb-3">
                <Utensils className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl font-medium text-deep-navy mb-1">
                Paradise for Pure Vegetarians
              </h3>
              <p className="font-sans text-xs text-charcoal/70 font-light leading-relaxed">
                Over 90% of guest reviews applaud our delicious Maharashtrian, Gujarati, and dedicated Jain kitchen preparation with zero meat on premises.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white/80 border border-charcoal/15 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-champagne-gold/15 text-champagne-gold flex items-center justify-center mb-3">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl font-medium text-deep-navy mb-1">
                Closest to Sheetla Devi Temple
              </h3>
              <p className="font-sans text-xs text-charcoal/70 font-light leading-relaxed">
                Guests love the effortless 30-second walk to morning temple aarti, paired with a 1-minute stroll to the serene Kelva Beach sand.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white/80 border border-charcoal/15 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-champagne-gold/15 text-champagne-gold flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl font-medium text-deep-navy mb-1">
                Clean, Peaceful &amp; Family Safe
              </h3>
              <p className="font-sans text-xs text-charcoal/70 font-light leading-relaxed">
                Renowned for spotless swimming pools, whisper-quiet Daikin air conditioning, honest staff, and safe gated grounds for kids and seniors.
              </p>
            </div>
          </section>

          {/* Full Verified Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {VERIFIED_REVIEWS.map((rev) => (
              <article
                key={rev.id}
                className="p-8 rounded-3xl bg-white/90 border border-charcoal/15 shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_32px_rgb(0,0,0,0.08)] transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Author Avatar, Rating, Tag */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-11 h-11 rounded-full ${rev.avatarBg} text-white font-sans text-base font-bold flex items-center justify-center shadow-sm`}
                      >
                        {rev.initial}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-display text-lg font-medium text-deep-navy">
                            {rev.author}
                          </h4>
                          {rev.hasLocalGuideBadge && (
                            <span className="px-2 py-0.5 rounded-full bg-[#fbbc04]/15 text-[#b07d00] font-sans text-[10px] font-semibold">
                              ★ Local Guide
                            </span>
                          )}
                        </div>
                        <span className="font-sans text-[11px] text-charcoal/50 block">
                          {rev.date} · {rev.tripType}
                        </span>
                      </div>
                    </div>

                    {/* Star Rating */}
                    <div className="flex items-center gap-0.5">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#fbbc04] text-[#fbbc04]" />
                      ))}
                    </div>
                  </div>

                  {/* Review Tag */}
                  <div className="mb-4">
                    <span className="px-3 py-1 rounded-full bg-champagne-gold/15 text-champagne-gold font-sans text-[11px] font-semibold uppercase tracking-wider">
                      {rev.tag}
                    </span>
                  </div>

                  {/* Review Content */}
                  <p className="font-sans text-xs sm:text-sm text-charcoal/80 font-light leading-relaxed italic">
                    "{rev.content}"
                  </p>
                </div>

                {/* Helpful count */}
                <div className="pt-6 mt-6 hairline-t border-charcoal/10 flex items-center justify-between font-sans text-xs text-charcoal/50">
                  <div className="flex items-center gap-1.5">
                    <ThumbsUp className="w-3.5 h-3.5 text-champagne-gold" />
                    <span>{rev.likes} people found this helpful</span>
                  </div>
                  <span className="text-[#159b4d] font-medium">✓ Verified Google Stay</span>
                </div>
              </article>
            ))}
          </div>

          {/* Leave a Review & Direct Booking Section */}
          <section className="bg-gradient-to-br from-deep-navy to-[#061423] text-warm-ivory rounded-3xl p-8 sm:p-14 mb-20 relative overflow-hidden">
            <div className="relative z-10 max-w-3xl">
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-champagne-gold font-semibold block mb-2">
                Join our Cherished Guests
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight mb-4">
                EXPERIENCE PALGHAR'S FINEST SEASIDE SANCTUARY
              </h2>
              <p className="font-sans text-sm sm:text-base text-warm-ivory/80 font-light leading-relaxed mb-8">
                Ready to create your own cherished memories at Beyond Sands? Book directly with our concierge team to secure complimentary coastal breakfast and best-price guarantees.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/919923895055?text=Hi%21%20I%20read%20the%20great%20reviews%20for%20Beyond%20Sands%20Palghar%20and%20would%20like%20to%20book%20a%20room."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-champagne-gold hover:bg-white text-deep-navy font-sans text-xs uppercase tracking-[0.14em] font-semibold transition-all shadow-lg cursor-pointer"
                >
                  <WhatsAppIcon size={16} />
                  <span>Reserve with Concierge</span>
                </a>

                <a
                  href="https://maps.google.com/?q=Beyond+Sands+Resort+Palghar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-champagne-gold/40 hover:border-champagne-gold text-champagne-gold font-sans text-xs uppercase tracking-[0.14em] font-medium transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Write a Google Review</span>
                </a>
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}
