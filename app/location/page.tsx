import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/footer/Footer";
import {
  MapPin,
  Navigation,
  Compass,
  Train,
  Car,
  Clock,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Location & Kelva Beach | Beyond Sands — Nearest Resort to Shitla Devi Temple",
  description:
    "Beyond Sands is Palghar's #1 resort located directly opposite the revered Sheetla Devi Temple and just 1 min from Kelva Beach. Easy 90–120 min drive from Mumbai & 5 km from Kelve Road Station. Complete route & sightseeing guide.",
  keywords: [
    "resort nearest to shitla devi temple",
    "resort opposite shitla devi temple kelva",
    "best resort in palghar location",
    "kelva beach resort palghar",
    "resort in palghar near beach",
    "hotels near shitla mata mandir kelva",
    "how to reach beyond sands palghar",
    "beyond sands location",
  ],
  openGraph: {
    title: "Location & Kelva Beach · Beyond Sands Resort Palghar",
    description:
      "Nearest resort to Sheetla Devi Temple (0 mins) and Kelva Beach (1 min). Discover Palghar's top coastal sanctuary.",
    images: [{ url: "/assets/location/location-drone-shitlamata.jpg" }],
  },
};

const DISTANCE_METRICS = [
  {
    spot: "Sheetla Devi Temple",
    distance: "Directly Opposite (0 mins)",
    detail: "Located right across the entrance road. Walk across for morning aarti and sacred darshan in under 30 seconds.",
    badge: "0 Mins · Nearest in Palghar",
  },
  {
    spot: "Kelva Beach Shoreline",
    distance: "1-Minute Peaceful Walk",
    detail: "150 meters from our gate. Walk through casuarina groves onto pristine golden sand and calm Arabian Sea waves.",
    badge: "150 Meters",
  },
  {
    spot: "Kelve Road Station",
    distance: "5 km (10-12 mins)",
    detail: "Direct Western Railway suburban local trains from Churchgate, Borivali, Virar, and Dahanu Road.",
    badge: "Western Railway",
  },
  {
    spot: "Palghar Junction Station",
    distance: "12 km (20 mins)",
    detail: "Major Western Railway junction with frequent express trains from Mumbai, Surat, Ahmedabad, and Delhi.",
    badge: "Express Hub",
  },
  {
    spot: "Mumbai (Borivali / Dahisar)",
    distance: "Approx. 85–95 km (90–120 mins)",
    detail: "Scenic smooth drive along NH48 (Western Express Highway) via Manor or Boisar bypass.",
    badge: "Weekend Getaway",
  },
  {
    spot: "Surat / South Gujarat",
    distance: "Approx. 180 km (3.5 hours)",
    detail: "Direct scenic southbound route on NH48. Perfect pilgrimage and weekend holiday stop.",
    badge: "Smooth Highway",
  },
];

const LOCAL_ATTRACTIONS = [
  {
    name: "Historic Kelva Fort (Kelve Killa)",
    tag: "Portuguese Heritage · 16th Century",
    image: "/assets/location/location-kelvafort.jpg",
    desc: "A coastal sea fort built by the Portuguese, accessible on foot during low tide. Offers sweeping panoramic views of the Arabian coastline.",
    dist: "1.2 km from resort (15 min walk or 3 min drive)",
  },
  {
    name: "Shitla Devi Temple (Mata Mandir)",
    tag: "Sacred Enclave · Ancient Deity",
    image: "/assets/location/location-drone-shitlamata.jpg",
    desc: "One of the most revered ancient temples in Palghar district, visited by devotees across Maharashtra and Gujarat for blessing and serenity.",
    dist: "0 mins (Directly opposite Beyond Sands)",
  },
  {
    name: "Kelva Dam & Lake Nature Reserve",
    tag: "Lush Greenery · Picnic Oasis",
    image: "/assets/location/location-kelvadam.avif",
    desc: "Surrounded by lush Sahyadri foothills, Kelva Dam is a scenic freshwater reservoir ideal for peaceful afternoon walks and birdwatching.",
    dist: "10 km (18 mins drive)",
  },
  {
    name: "Casuarina (Suru) Forest Sunset Trails",
    tag: "Coastal Flora · Photography Haven",
    image: "/assets/location/location-surroundings-beach.webp",
    desc: "Kilometers of tall evergreen casuarina trees hugging the beach coastline, creating shaded trails and amber golden-hour sunbeams.",
    dist: "150 meters (1 min walk from gate)",
  },
];

const DRIVING_DIRECTIONS = [
  {
    from: "From Mumbai & Thane",
    route: "Western Express Highway (NH48) → Manor → Palghar → Kelva Beach",
    time: "Approx. 90 to 120 minutes (85 km from Dahisar Toll)",
    steps: [
      "Drive north on the Western Express Highway (NH48) past Dahisar and Vasai-Virar.",
      "At Mastan Naka (Manor), take the left exit onto Manor-Palghar Road.",
      "Cross Palghar town towards Kelva Beach Road.",
      "Reach Beyond Sands resort located directly opposite the Sheetla Devi Temple entrance.",
    ],
  },
  {
    from: "From Gujarat (Surat / Vapi)",
    route: "NH48 Southbound → Charoti / Manor → Palghar → Kelva Beach",
    time: "Approx. 3 to 3.5 hours from Surat (180 km)",
    steps: [
      "Take NH48 South towards Mumbai past Vapi and Talasari.",
      "Take the exit towards Palghar-Kelve coastal bypass.",
      "Follow the scenic countryside coastal road directly to Kelva Beach.",
      "Beyond Sands has secure gated private parking inside the premises.",
    ],
  },
  {
    from: "By Western Railway Train",
    route: "Local / Express Trains to Kelve Road or Palghar Station",
    time: "Regular trains every 20–30 minutes",
    steps: [
      "Board any Dahanu-bound Western Railway local train and disembark at Kelve Road Station (5 km away).",
      "Alternatively, take any Western Railway Express train (e.g., Saurashtra Express, Gujarat SF) to Palghar Station (12 km away).",
      "Auto-rickshaws and resort pick-up taxis are continuously available at both stations.",
    ],
  },
];

export default function LocationPage() {
  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristDestination",
            "name": "Beyond Sands Resort & Kelva Beach Location",
            "description": "Beyond Sands is the premier resort in Palghar, located directly opposite Sheetla Devi Temple and 1 minute from Kelva Beach.",
            "url": "https://www.beyondsands.in/location",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "19.6190",
              "longitude": "72.7300"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Opposite Shitla Devi Temple, Kelve Beach Road",
              "addressLocality": "Palghar",
              "addressRegion": "Maharashtra",
              "postalCode": "401401",
              "addressCountry": "IN"
            }
          }),
        }}
      />

      <div className="min-h-[100dvh] bg-transparent text-charcoal pt-32 sm:pt-36 pb-20 select-none">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-champagne-gold mb-8">
            <Link href="/" className="hover:text-deep-navy transition-colors">Home</Link>
            <span>/</span>
            <span className="text-charcoal/60">Location &amp; Beach</span>
          </nav>

          {/* Hero Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 hairline-b border-charcoal/15 pb-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-champagne-gold/15 border border-champagne-gold/30 text-champagne-gold font-sans text-xs font-semibold tracking-wider uppercase mb-4">
                <MapPin className="w-3.5 h-3.5" />
                <span>Prime Coastal Location in Palghar</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal text-deep-navy tracking-tight leading-[1.1]">
                LOCATION &amp; KELVA BEACH
              </h1>
              <p className="font-sans text-base sm:text-lg text-charcoal/75 font-light mt-4 leading-relaxed">
                Beyond Sands holds the most enviable location in Palghar district: situated <strong>directly opposite the ancient Sheetla Devi Temple</strong> and just a <strong>1-minute walk (150m) from Kelva Beach</strong>. Enjoy immediate access to sacred morning prayers, fresh sea breeze, and historic coastal landmarks.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <a
                href="https://maps.google.com/?q=Beyond+Sands+Resort+Palghar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-champagne-gold hover:bg-deep-navy text-deep-navy hover:text-warm-ivory font-sans text-xs uppercase tracking-[0.14em] font-semibold transition-all shadow-md cursor-pointer"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>

          {/* Proximity & Distance Cards Bento Grid */}
          <section className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-champagne-gold font-semibold block mb-2">
                Unbeatable Accessibility
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-normal text-deep-navy">
                NEAREST TO EVERY ICONIC LANDMARK
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {DISTANCE_METRICS.map((metric, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-white/80 border border-charcoal/15 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full bg-champagne-gold/15 text-champagne-gold font-sans text-[11px] font-semibold tracking-wider uppercase">
                        {metric.badge}
                      </span>
                      <MapPin className="w-4 h-4 text-champagne-gold" />
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl font-medium text-deep-navy mb-1">
                      {metric.spot}
                    </h3>
                    <p className="font-sans text-xs text-champagne-gold font-semibold uppercase tracking-wider mb-3">
                      {metric.distance}
                    </p>
                    <p className="font-sans text-xs text-charcoal/70 font-light leading-relaxed">
                      {metric.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Google Maps Embed / Visual Landmark Showcase */}
          <section className="mb-24 bg-white/70 rounded-3xl p-6 sm:p-10 border border-charcoal/10 shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-5 space-y-5">
                <span className="font-sans text-xs uppercase tracking-[0.2em] text-champagne-gold font-semibold block">
                  Find Your Way
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-normal text-deep-navy leading-tight">
                  OPPOSITE SHEETLA DEVI TEMPLE, KELVA
                </h2>
                <p className="font-sans text-xs sm:text-sm text-charcoal/75 font-light leading-relaxed">
                  Look for our welcoming stone gates and swaying coconut palms immediately across from the sacred Sheetla Devi Mandir courtyard. Ample private, covered, security-guarded vehicle parking is provided on-site.
                </p>

                <div className="space-y-3 pt-2 font-sans text-xs text-charcoal/80">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#159b4d]" />
                    <span>Free on-site parking for cars, tempo travelers &amp; tourist buses</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#159b4d]" />
                    <span>Station pick-up and drop assistance available upon request</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#159b4d]" />
                    <span>EV charging point guidance and 24/7 concierge support</span>
                  </div>
                </div>

                <div className="pt-4">
                  <a
                    href="https://wa.me/919923895055?text=Hi%21%20I%20am%20travelling%20to%20Beyond%20Sands%20Palghar.%20Please%20share%20the%20live%20location%20and%20directions."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-deep-navy hover:bg-champagne-gold text-warm-ivory hover:text-deep-navy font-sans text-xs uppercase tracking-[0.14em] font-semibold transition-all shadow-md cursor-pointer"
                  >
                    <WhatsAppIcon size={16} />
                    <span>Get Live Location via WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Map Embed Frame */}
              <div className="lg:col-span-7 h-[360px] sm:h-[420px] rounded-2xl overflow-hidden border border-charcoal/15 shadow-inner relative">
                <iframe
                  title="Beyond Sands Resort Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.885834887342!2d72.72752187595467!3d19.61905388170289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be703c22891dba7%3A0x7b233a758e5ff412!2sBeyond%20Sands%20Resort!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

            </div>
          </section>

          {/* Surrounding Attractions in Kelva */}
          <section className="mb-24">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-champagne-gold font-semibold block mb-2">
                Discover the Coast
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-normal text-deep-navy">
                MUST-VISIT SIGHTS NEAR BEYOND SANDS
              </h2>
              <p className="font-sans text-xs sm:text-sm text-charcoal/70 font-light mt-2">
                Palghar's rich history, pristine coastal nature, and sacred shrines right at your doorstep.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {LOCAL_ATTRACTIONS.map((att, idx) => (
                <div
                  key={idx}
                  className="group rounded-3xl bg-white/80 border border-charcoal/15 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="relative h-48 w-full bg-black/10 overflow-hidden">
                    <Image
                      src={att.image}
                      alt={att.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full bg-deep-navy/85 text-champagne-gold font-sans text-[10px] tracking-wider uppercase font-semibold">
                        {att.dist}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="font-sans text-[10px] tracking-wider uppercase text-champagne-gold font-medium block mb-1">
                        {att.tag}
                      </span>
                      <h3 className="font-display text-lg font-medium text-deep-navy mb-2">
                        {att.name}
                      </h3>
                      <p className="font-sans text-xs text-charcoal/70 font-light leading-relaxed">
                        {att.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Driving Directions Guide */}
          <section className="mb-20 bg-white/70 rounded-3xl p-8 sm:p-12 border border-charcoal/10 shadow-sm">
            <div className="max-w-3xl mb-8">
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-champagne-gold font-semibold block mb-2">
                Travel Directions
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-normal text-deep-navy">
                HOW TO REACH BEYOND SANDS RESORT
              </h2>
              <p className="font-sans text-xs sm:text-sm text-charcoal/70 font-light mt-2">
                Detailed step-by-step instructions from Mumbai, Gujarat, and rail networks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {DRIVING_DIRECTIONS.map((dir, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-warm-ivory/50 border border-charcoal/10 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="font-display text-xl font-medium text-deep-navy mb-1">
                      {dir.from}
                    </h3>
                    <p className="font-sans text-xs text-champagne-gold font-semibold uppercase tracking-wider mb-2">
                      {dir.time}
                    </p>
                    <p className="font-sans text-xs text-charcoal/70 font-light italic mb-4">
                      {dir.route}
                    </p>
                    <ul className="space-y-2 font-sans text-xs text-charcoal/80 font-light">
                      {dir.steps.map((st, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2">
                          <span className="text-champagne-gold font-bold">•</span>
                          <span>{st}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </>
  );
}
