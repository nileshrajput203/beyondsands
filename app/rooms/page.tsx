import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/footer/Footer";
import {
  Bed,
  Users,
  Maximize,
  Tv,
  Wifi,
  Wind,
  Bath,
  Coffee,
  CheckCircle2,
  Calendar,
  Eye,
  MapPin,
  Utensils,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Rooms & Luxury Suites | Beyond Sands — Palghar's #1 Best Resort",
  description:
    "Experience Palghar's #1 top-rated luxury suites at Beyond Sands. 100% Pure Veg sanctuary situated directly opposite Shitla Devi Temple & 1 min from Kelva Beach. Private balconies, garden verandas, and family dorms.",
  keywords: [
    "best resort in palghar",
    "palghar best resort rooms",
    "top 1 resort in palghar",
    "resort nearest to shitla devi temple",
    "kelva beach resort rooms",
    "pure veg resort palghar",
    "family resort palghar with swimming pool",
    "beyond sands suites",
  ],
  openGraph: {
    title: "Luxury Rooms & Suites · Beyond Sands Resort Palghar",
    description:
      "Palghar's premier pure vegetarian resort rooms. Opposite Shitla Devi Temple, 1 min walk to Kelva Beach.",
    images: [{ url: "/assets/rooms/pool-view-main.jpg" }],
  },
};

const ROOMS_DATA = [
  {
    id: "garden-view",
    name: "Garden View Deluxe Verandah",
    tagline: "Waking up to tropical coconut canopies & coastal morning dew",
    badge: "Most Popular",
    price: "₹3,499",
    period: "per night (Sun–Thu)",
    weekendPrice: "₹4,499 / night (Fri–Sat)",
    capacity: "2 Adults + 1 Child",
    size: "320 sq. ft.",
    bed: "King Size Plush Mattress",
    view: "Manicured Coconut Groves & Garden Courtyard",
    image: "/assets/rooms/garden-view-main.jpg",
    gallery: [
      "/assets/rooms/garden-view-main.jpg",
      "/assets/rooms/garden-view-thumb3.jpg",
      "/assets/rooms/garden-courtyard.png",
      "/assets/rooms/garden-view-thumb2.jpg",
    ],
    features: [
      "Private breezy garden verandah with artisanal teak seating",
      "Daikin Whisper-Quiet Split AC & Ceiling Fan",
      "43\" Smart HD LED TV with Netflix & Hotstar",
      "Designer en-suite bathroom with 24/7 hot solar shower",
      "Complimentary high-speed fiber Wi-Fi",
      "Morning pure vegetarian coastal breakfast included",
    ],
    whatsappMsg: "Hi! I would like to book the Garden View Deluxe Verandah at Beyond Sands Palghar.",
  },
  {
    id: "pool-view",
    name: "Pool View Executive Suite",
    tagline: "Azure pool water reflections & twilight golden hour breezes",
    badge: "Premier Choice",
    price: "₹3,999",
    period: "per night (Sun–Thu)",
    weekendPrice: "₹5,199 / night (Fri–Sat)",
    capacity: "2–3 Adults (with sofa-cum-bed)",
    size: "380 sq. ft.",
    bed: "California King + Convertible Sofa Bed",
    view: "Infinity Swimming Pool & Blue Hour Deck",
    image: "/assets/rooms/pool-view-main.jpg",
    gallery: [
      "/assets/rooms/pool-view-main.jpg",
      "/assets/rooms/pool-view-thumb2.jpg",
      "/assets/rooms/pool-view-thumb4.png",
      "/assets/rooms/pool-view-thumb3.jpg",
    ],
    features: [
      "Direct private balcony overlooking the shimmering pool",
      "Plush sofa-bed lounge corner for reading and afternoon tea",
      "Premium Daikin Climate Control Inverter AC",
      "Tea & artisanal coffee maker with daily replenishments",
      "En-suite luxury bath with premium toiletries & fluffy linens",
      "Direct 10-step access to the pool deck and sun loungers",
    ],
    whatsappMsg: "Hi! I would like to book the Pool View Executive Suite at Beyond Sands Palghar.",
  },
  {
    id: "couple-room",
    name: "Couple's Intimate Coastal Nook",
    tagline: "Warm ambient moods, private sanctuary & romantic quietude",
    badge: "Romantic Getaway",
    price: "₹3,299",
    period: "per night (Sun–Thu)",
    weekendPrice: "₹4,199 / night (Fri–Sat)",
    capacity: "2 Adults",
    size: "280 sq. ft.",
    bed: "Bespoke King Bed with Luxury Linens",
    view: "Secluded Palm Canopy & Starry Night Sky",
    image: "/assets/rooms/couple-room-main.webp",
    gallery: [
      "/assets/rooms/couple-room-main.webp",
      "/assets/rooms/couple-room-thumb1.webp",
      "/assets/rooms/couple-room-thumb2.webp",
      "/assets/rooms/couple-room-thumb3.webp",
    ],
    features: [
      "Intimate warm lighting with dimmable amber mood lamps",
      "Private sunlit balcony with pool and palm canopy views",
      "Silent Split Air Conditioning & rapid cooling",
      "Complimentary celebration floral welcome setup on request",
      "Sound-dampened acoustic doors for undisturbed tranquility",
      "Pure veg candlelit dinner setup available on lawn",
    ],
    whatsappMsg: "Hi! I would like to book the Couple Room Romantic Retreat at Beyond Sands Palghar.",
  },
  {
    id: "family-dorm",
    name: "Grand Family Heritage Dormitory",
    tagline: "Spacious multi-bed haven designed for cherished reunions",
    badge: "Best for Groups & Families",
    price: "₹6,999",
    period: "for up to 6 guests",
    weekendPrice: "₹8,499 / night (Fri–Sat)",
    capacity: "6 to 8 Guests",
    size: "620 sq. ft.",
    bed: "3 King Beds + Extra Comfort Mattresses",
    view: "Open Coconut Groves & Celebration Lawn Horizon",
    image: "/assets/rooms/family-dorm-main.jpg",
    gallery: [
      "/assets/rooms/family-dorm-main.jpg",
      "/assets/rooms/family-dorm-thumb4.jpg",
      "/assets/rooms/family-dorm-thumb3.jpg",
      "/assets/rooms/family-dorm-thumb5.jpg",
    ],
    features: [
      "Ultra-spacious layout with 3 double beds in one airy suite",
      "Multiple dual-split inverter ACs for rapid room-wide cooling",
      "Expansive vanity mirrors and luggage storage racks",
      "Perfect for extended families, pilgrim groups & wedding guests",
      "Direct proximity to pure vegetarian dining hall & banquet",
      "Generous seating lounge for late-night family board games & chai",
    ],
    whatsappMsg: "Hi! I would like to book the Grand Family Dormitory at Beyond Sands Palghar.",
  },
];

const AMENITIES = [
  { icon: Wind, name: "Split Air Conditioning", desc: "Whisper-quiet Daikin cooling in every room" },
  { icon: Wifi, name: "High-Speed Wi-Fi", desc: "Dedicated high-bandwidth optic fiber network" },
  { icon: Tv, name: "Smart LED TVs", desc: "Equipped with OTT apps and satellite channels" },
  { icon: Bath, name: "Hot Solar Showers", desc: "24/7 continuous high-pressure hot water" },
  { icon: Coffee, name: "In-Room Tea & Coffee", desc: "Electric kettle with daily gourmet supplies" },
  { icon: Utensils, name: "100% Pure Veg Kitchen", desc: "Wholesome Konkani, Jain & Gujarati dishes" },
  { icon: MapPin, name: "0 Mins to Temple", desc: "Directly opposite sacred Sheetla Devi Temple" },
  { icon: ShieldCheck, name: "24/7 Security & Power", desc: "Full CCTV surveillance & auto generator backup" },
];

export default function RoomsPage() {
  return (
    <>
      {/* Schema.org Structured Data for Hotel / Accommodation */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Hotel",
            "name": "Beyond Sands Pure Veg Resort",
            "description": "Ranked #1 Best Resort in Palghar with luxury rooms, pure vegetarian dining, and situated directly opposite Sheetla Devi Temple, Kelva Beach.",
            "url": "https://www.beyondsands.in/rooms",
            "telephone": "+919923895055",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Opposite Shitla Devi Temple, Kelve Beach Road",
              "addressLocality": "Palghar",
              "addressRegion": "Maharashtra",
              "postalCode": "401401",
              "addressCountry": "IN"
            },
            "starRating": {
              "@type": "Rating",
              "ratingValue": "4.2"
            },
            "priceRange": "₹3,299 - ₹8,499",
            "servesCuisine": "100% Pure Vegetarian, Jain, Gujarati, Coastal Maharashtrian"
          }),
        }}
      />

      <div className="min-h-[100dvh] bg-transparent text-charcoal pt-32 sm:pt-36 pb-20 select-none">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-champagne-gold mb-8">
            <Link href="/" className="hover:text-deep-navy transition-colors">Home</Link>
            <span>/</span>
            <span className="text-charcoal/60">Rooms &amp; Suites</span>
          </nav>

          {/* Hero Header: Ranking Palghar Top 1 */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 hairline-b border-charcoal/15 pb-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-champagne-gold/15 border border-champagne-gold/30 text-champagne-gold font-sans text-xs font-semibold tracking-wider uppercase mb-4">
                <span>Palghar's #1 Rated Luxury Sanctuary</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal text-deep-navy tracking-tight leading-[1.1]">
                ROOMS &amp; PRIVATE SUITES
              </h1>
              <p className="font-sans text-base sm:text-lg text-charcoal/75 font-light mt-4 leading-relaxed">
                Step inside Palghar's finest seaside accommodations. Located <strong>directly opposite Sheetla Devi Temple</strong> and a gentle <strong>1-minute stroll from Kelva Beach</strong>, every suite is designed for blissful acoustics, plush bedding, and an authentic 100% pure vegetarian family lifestyle.
              </p>
            </div>

            {/* Quick USP Highlights */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/70 border border-charcoal/10 shadow-sm">
                <MapPin className="w-4 h-4 text-champagne-gold" />
                <span className="font-sans text-xs font-medium text-deep-navy">0 Min Walk to Sheetla Devi Temple</span>
              </div>
              <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/70 border border-charcoal/10 shadow-sm">
                <Utensils className="w-4 h-4 text-champagne-gold" />
                <span className="font-sans text-xs font-medium text-deep-navy">100% Pure Veg &amp; Dedicated Jain Kitchen</span>
              </div>
            </div>
          </div>

          {/* Detailed Room Cards Grid */}
          <div className="space-y-16 sm:space-y-24 mb-24">
            {ROOMS_DATA.map((room, idx) => (
              <article
                key={room.id}
                id={room.id}
                className="group relative bg-white/80 rounded-3xl border border-charcoal/15 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden transition-all duration-500 hover:shadow-[0_16px_40px_rgb(0,0,0,0.08)]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  
                  {/* Left Column: Visual Media Gallery */}
                  <div className="lg:col-span-7 relative min-h-[360px] sm:min-h-[460px] lg:min-h-[520px] overflow-hidden bg-neutral-200">
                    <Image
                      src={room.image}
                      alt={`${room.name} at Beyond Sands Resort Palghar`}
                      fill
                      priority={idx < 2}
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    
                    {/* Floating Badge */}
                    <div className="absolute top-5 left-5 z-10">
                      <span className="px-3.5 py-1.5 rounded-full bg-deep-navy/90 backdrop-blur-md text-champagne-gold font-sans text-xs font-semibold tracking-wider uppercase border border-champagne-gold/30 shadow-md">
                        {room.badge}
                      </span>
                    </div>

                    {/* Subtle Overlay Badge: Proximity */}
                    <div className="absolute bottom-5 left-5 right-5 z-10 flex items-center justify-between text-white text-xs backdrop-blur-md bg-black/50 px-4 py-2 rounded-xl border border-white/20">
                      <span>Kelva Beach &amp; Sheetla Devi Temple Enclave</span>
                      <span className="text-champagne-gold font-semibold">100% Pure Veg</span>
                    </div>
                  </div>

                  {/* Right Column: Room Content & Specs */}
                  <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between">
                    <div>
                      {/* Subtitle / Tagline */}
                      <span className="font-sans text-xs uppercase tracking-[0.16em] text-champagne-gold font-medium block mb-2">
                        Beyond Sands Sanctuary #{idx + 1}
                      </span>
                      <h2 className="font-display text-2xl sm:text-3xl font-medium text-deep-navy leading-tight">
                        {room.name}
                      </h2>
                      <p className="font-sans text-xs sm:text-sm text-charcoal/70 font-light mt-2 italic">
                        "{room.tagline}"
                      </p>

                      {/* Room Specs Pills */}
                      <div className="grid grid-cols-2 gap-2.5 my-6 py-4 hairline-t hairline-b border-charcoal/10 font-sans text-xs text-charcoal/80">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-champagne-gold shrink-0" />
                          <span>{room.capacity}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Maximize className="w-4 h-4 text-champagne-gold shrink-0" />
                          <span>{room.size}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Bed className="w-4 h-4 text-champagne-gold shrink-0" />
                          <span className="truncate">{room.bed}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Eye className="w-4 h-4 text-champagne-gold shrink-0" />
                          <span className="truncate">{room.view}</span>
                        </div>
                      </div>

                      {/* Features List */}
                      <div className="space-y-2 mb-6">
                        <p className="font-sans text-xs uppercase tracking-wider text-deep-navy font-semibold mb-2">
                          Room Inclusions:
                        </p>
                        {room.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2 text-xs sm:text-[13px] text-charcoal/85 font-light">
                            <CheckCircle2 className="w-4 h-4 text-[#159b4d] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Price & Action Section */}
                    <div className="pt-6 hairline-t border-charcoal/15">
                      <div className="flex items-baseline justify-between mb-4">
                        <div>
                          <div className="flex items-baseline gap-1.5">
                            <span className="font-display text-3xl font-semibold text-deep-navy">{room.price}</span>
                            <span className="font-sans text-xs text-charcoal/60">{room.period}</span>
                          </div>
                          <span className="font-sans text-[11px] text-charcoal/50 block mt-0.5">
                            Weekend rate: {room.weekendPrice}
                          </span>
                        </div>
                      </div>

                      {/* WhatsApp Instant Booking CTA */}
                      <div className="flex flex-col sm:flex-row gap-3">
                        <a
                          href={`https://wa.me/919923895055?text=${encodeURIComponent(room.whatsappMsg)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-champagne-gold hover:bg-deep-navy text-deep-navy hover:text-warm-ivory font-sans text-xs uppercase tracking-[0.14em] font-semibold transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer text-center"
                        >
                          <WhatsAppIcon size={16} />
                          <span>Reserve on WhatsApp</span>
                        </a>

                        <Link
                          href="/contact"
                          className="inline-flex items-center justify-center gap-1.5 px-5 py-3.5 rounded-full border border-charcoal/20 hover:border-deep-navy text-deep-navy font-sans text-xs uppercase tracking-[0.12em] font-medium transition-colors"
                        >
                          <span>Inquire</span>
                          <ChevronRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Resort-Wide Amenities Section */}
          <section className="mb-24 bg-white/70 rounded-3xl p-8 sm:p-14 border border-charcoal/10 shadow-sm">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-champagne-gold font-semibold block mb-2">
                Curated Sanctuary Comforts
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-normal text-deep-navy">
                EVERY ROOM INCLUDES COMPLIMENTARY
              </h2>
              <p className="font-sans text-xs sm:text-sm text-charcoal/70 font-light mt-2">
                Thoughtful details designed for complete peace of mind during your stay in Palghar.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {AMENITIES.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-warm-ivory/50 border border-charcoal/5 hover:border-champagne-gold/40 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-champagne-gold/15 text-champagne-gold flex items-center justify-center mb-3">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-lg text-deep-navy font-medium mb-1">
                      {item.name}
                    </h3>
                    <p className="font-sans text-xs text-charcoal/70 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Why Beyond Sands is Palghar's #1 Best Resort */}
          <section className="bg-gradient-to-br from-deep-navy to-[#061423] text-warm-ivory rounded-3xl p-8 sm:p-14 mb-20 relative overflow-hidden">
            <div className="relative z-10 max-w-3xl">
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-champagne-gold font-semibold block mb-2">
                Why Beyond Sands is #1 in Palghar
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight mb-6">
                THE PREMIER PURE VEG RETREAT AT KELVA BEACH
              </h2>
              <p className="font-sans text-sm sm:text-base text-warm-ivory/80 font-light leading-relaxed mb-8">
                Unlike noisy commercial hotels, Beyond Sands is an authentic sanctuary. Nestled in quiet casuarina groves directly across from the historic Sheetla Devi Temple, our property boasts pristine swimming pools, pure vegetarian Sattvic dining, and unmatched family safety.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/919923895055?text=Hi%21%20I%20want%20to%20book%20a%20room%20at%20Palghar%27s%20best%20resort%20Beyond%20Sands."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-champagne-gold hover:bg-white text-deep-navy font-sans text-xs uppercase tracking-[0.14em] font-semibold transition-all duration-300 shadow-lg cursor-pointer"
                >
                  <WhatsAppIcon size={16} />
                  <span>Book with WhatsApp Concierge</span>
                </a>

                <Link
                  href="/dining"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-champagne-gold/40 hover:border-champagne-gold text-champagne-gold font-sans text-xs uppercase tracking-[0.14em] font-medium transition-colors"
                >
                  <span>Explore Pure Veg Dining</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </>
  );
}
