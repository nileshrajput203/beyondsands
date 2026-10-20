import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BedDouble, Users, Check, ArrowRight, ShieldCheck, Waves } from "lucide-react";

export const metadata: Metadata = {
  title: "AC Rooms, Pool View Suites & Group Dormitory Tariff",
  description:
    "Check updated room tariffs and package rates at Beyond Sands Resort Kelva Beach, Palghar. Garden View (₹3,000–₹3,500), Pool View (₹3,500–₹4,000) & 6–15 Bed AC Dormitory.",
  alternates: {
    canonical: "/rooms-tariff",
  },
  keywords: [
    "kelva resort rooms",
    "ac dormitory in kelve",
    "kelva beach resort tariff",
    "pool view resort rooms palghar",
    "dormitory resort in kelva beach",
  ],
};

const hotelSchema = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  "name": "Beyond Sands Resort Accommodations",
  "url": "https://www.beyondsands.in/rooms-tariff",
  "telephone": "+91-9923895055",
  "priceRange": "₹2200 - ₹5000",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Survey No. 1000, 1709, 1710, Shitladevi Road, Opposite Shitladevi Temple, Near Kelva Beach",
    "addressLocality": "Kelva, Palghar",
    "addressRegion": "MH",
    "postalCode": "401401",
    "addressCountry": "IN"
  }
};

export default function RoomsTariffPage() {
  const rooms = [
    {
      name: "Garden-View AC Family Room in Palghar",
      badge: "Palm View",
      capacity: "2–4 Guests",
      tariffRoomOnly: "₹3,000 – ₹3,500 / night",
      tariffAllInclusive: "₹2,800 / person (4 meals incl.)",
      image: "/assets/rooms/garden-view-main.jpg",
      description: "Spacious AC deluxe room with a private sit-out verandah facing lush emerald coconut groves and manicured gardens.",
      amenities: ["King Size Bed", "Private Verandah", "Split AC", "24/7 Hot Water", "Free WiFi", "Garden Access"],
      whatsapp: "https://wa.me/919923895055?text=Hi%20Beyond%20Sands!%20I'm%20inquiring%20about%20the%20Garden-View%20AC%20Room%20tariff.",
    },
    {
      name: "Pool-View AC Deluxe Room in Kelva",
      badge: "Poolside Luxury",
      capacity: "2–4 Guests",
      tariffRoomOnly: "₹3,500 – ₹4,000 / night",
      tariffAllInclusive: "₹2,800 / person (4 meals incl.)",
      image: "/assets/rooms/pool-view-main.jpg",
      description: "Step right out towards our 40ft azure swimming pool. High ceilings, sliding glass doors, and tranquil blue hour views.",
      amenities: ["Direct Pool View", "King Size Bed", "Private Balcony", "Split AC", "LED TV", "Tea/Coffee Maker"],
      whatsapp: "https://wa.me/919923895055?text=Hi%20Beyond%20Sands!%20I'm%20inquiring%20about%20the%20Pool-View%20AC%20Deluxe%20Room%20tariff.",
    },
    {
      name: "AC Group Dormitory in Kelve Beach",
      badge: "Groups & Large Families",
      capacity: "6–15 Guests",
      tariffRoomOnly: "₹4,000 – ₹5,000 / night",
      tariffAllInclusive: "₹2,800 / person (4 meals incl.)",
      image: "/assets/rooms/family-dorm-main.jpg",
      description: "Expansive multi-bed air-conditioned dormitory with premium mattresses, communal lounge, and separate bathrooms.",
      amenities: ["Multiple Single/Double Beds", "Powerful AC", "Spacious Lounge", "Multiple Bathrooms", "Safe & Private"],
      whatsapp: "https://wa.me/919923895055?text=Hi%20Beyond%20Sands!%20I'm%20inquiring%20about%20the%20Group%20Dormitory%20tariff%20for%20my%20family.",
    },
  ];

  return (
    <main className="min-h-screen bg-warm-ivory text-charcoal pt-28 pb-20 selection:bg-champagne-gold selection:text-deep-navy">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelSchema) }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6 text-xs text-charcoal/60 font-sans flex items-center gap-2">
          <Link href="/" className="hover:text-deep-navy transition-colors">Home</Link>
          <span>/</span>
          <span className="text-deep-navy font-medium">Rooms &amp; Tariff</span>
        </nav>

        {/* Hero Header */}
        <header className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-champagne-gold/20 text-deep-navy text-xs uppercase tracking-widest font-semibold border border-champagne-gold/30">
            Transparent Tariff · Direct Booking Rates
          </span>
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-normal text-deep-navy tracking-tight leading-tight">
            AC Rooms, Pool View Suites &amp; Group Dormitory Tariff
          </h1>
          <p className="font-sans text-base sm:text-lg text-charcoal/80 font-light leading-relaxed max-w-2xl mx-auto">
            Compare room types, guest capacities, and transparent pricing. Book directly with our reservations desk on WhatsApp to avoid third-party portal markups.
          </p>
        </header>

        {/* Rooms Matrix Cards */}
        <div className="space-y-12 mb-20">
          {rooms.map((room, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[2rem] border border-charcoal/10 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 grid grid-cols-1 lg:grid-cols-12"
            >
              {/* Photo */}
              <div className="lg:col-span-5 relative min-h-[260px] sm:min-h-[320px]">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover object-center"
                />
                <span className="absolute top-4 left-4 px-3 py-1 bg-deep-navy/70 backdrop-blur-md text-warm-ivory text-xs font-semibold rounded-full border border-warm-ivory/20">
                  {room.badge}
                </span>
              </div>

              {/* Content */}
              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <h2 className="font-display text-2xl sm:text-3xl text-deep-navy font-normal">
                      {room.name}
                    </h2>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-warm-ivory font-medium text-deep-navy border border-charcoal/10 shrink-0">
                      {room.capacity}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-charcoal/75 leading-relaxed font-light">
                    {room.description}
                  </p>

                  {/* Pricing Badges */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-2">
                    <div className="p-3 rounded-xl bg-warm-ivory/60 border border-charcoal/10">
                      <span className="text-[10px] uppercase tracking-wider text-charcoal/50 block">Room Only (EP Plan)</span>
                      <span className="font-semibold text-deep-navy text-sm sm:text-base">{room.tariffRoomOnly}</span>
                    </div>
                    <div className="p-3 rounded-xl bg-champagne-gold/15 border border-champagne-gold/30">
                      <span className="text-[10px] uppercase tracking-wider text-deep-navy/70 font-semibold block">All 4 Meals (AP Plan)</span>
                      <span className="font-bold text-deep-navy text-sm sm:text-base">{room.tariffAllInclusive}</span>
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {room.amenities.map((a, aIdx) => (
                      <span key={aIdx} className="text-[11px] px-2.5 py-1 rounded-lg bg-gray-50 border border-charcoal/10 text-charcoal/70">
                        {a}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6">
                  <a
                    href={room.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-deep-navy text-warm-ivory text-xs uppercase tracking-wider font-semibold hover:bg-champagne-gold hover:text-deep-navy transition-all duration-300 shadow-sm"
                  >
                    <span>Check Availability on WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Meal Plan Guide */}
        <section className="bg-white rounded-[2rem] border border-charcoal/10 p-6 sm:p-10 shadow-sm mb-20">
          <h2 className="font-display text-2xl sm:text-3xl text-deep-navy font-normal mb-6 text-center">
            Transparent Meal Plans Explained
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-sans">
            <div className="p-4 rounded-xl bg-warm-ivory/50 border border-charcoal/10">
              <span className="font-bold text-deep-navy text-sm block mb-1">EP (Room Only)</span>
              <p className="text-charcoal/70">Accommodation only. Guests can order dishes à la carte from our pure veg dining menu.</p>
            </div>
            <div className="p-4 rounded-xl bg-warm-ivory/50 border border-charcoal/10">
              <span className="font-bold text-deep-navy text-sm block mb-1">CP (Bed &amp; Breakfast)</span>
              <p className="text-charcoal/70">Includes room stay and hot morning breakfast with tea, coffee, and fresh juice.</p>
            </div>
            <div className="p-4 rounded-xl bg-warm-ivory/50 border border-charcoal/10">
              <span className="font-bold text-deep-navy text-sm block mb-1">MAP (Half Board)</span>
              <p className="text-charcoal/70">Includes room stay, breakfast, and choice of either buffet lunch or dinner.</p>
            </div>
            <div className="p-4 rounded-xl bg-champagne-gold/20 border border-champagne-gold/40">
              <span className="font-bold text-deep-navy text-sm block mb-1">AP (All-Inclusive - Best Value)</span>
              <p className="text-deep-navy/80">Includes room stay plus all 4 meals: Lunch, Evening Hi-Tea, Dinner &amp; Breakfast.</p>
            </div>
          </div>
        </section>

        {/* CTA Footer Block */}
        <section className="bg-deep-navy text-warm-ivory rounded-[2rem] p-8 sm:p-12 text-center space-y-4 border border-champagne-gold/30 shadow-xl">
          <span className="text-xs uppercase tracking-widest text-champagne-gold font-semibold">
            Direct Booking Guarantee
          </span>
          <h2 className="font-display text-2xl sm:text-4xl text-warm-ivory font-normal">
            Ready to Book Your Room at Kelva Beach?
          </h2>
          <p className="font-sans text-xs sm:text-sm text-warm-ivory/75 max-w-xl mx-auto leading-relaxed">
            WhatsApp us directly at +91 99238 95055 to get immediate room confirmation, payment links, and customized family discounts.
          </p>
          <div className="pt-2">
            <a
              href="https://wa.me/919923895055?text=Hi%20Beyond%20Sands!%20I'd%20like%20to%20check%20availability%20for%20rooms%20in%20Kelva."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-champagne-gold text-deep-navy text-xs uppercase tracking-wider font-bold hover:bg-warm-ivory transition-all duration-300"
            >
              <span>Message Reservations on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
