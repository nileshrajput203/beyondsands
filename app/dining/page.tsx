import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/footer/Footer";
import {
  UtensilsCrossed,
  Clock,
  ShieldCheck,
  Leaf,
  Heart,
  Coffee,
  CheckCircle2,
  MapPin,
  ChevronRight,
  Soup,
  Sun,
  Moon,
  Flame,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "100% Pure Veg & Jain Dining | Beyond Sands — Palghar's #1 Best Resort",
  description:
    "Beyond Sands is Palghar's top-ranked 100% Pure Vegetarian Resort. Located opposite Sheetla Devi Temple at Kelva Beach, our kitchen serves authentic coastal Maharashtrian thalis, Gujarati dishes, and dedicated Jain & Swaminarayan feasts.",
  keywords: [
    "best pure veg resort in palghar",
    "pure veg resort palghar",
    "jain food resort palghar",
    "top 1 resort in palghar",
    "resort near shitla devi temple kelva",
    "kelva beach pure veg restaurant",
    "swaminarayan food resort mumbai",
    "beyond sands dining",
  ],
  openGraph: {
    title: "100% Pure Veg Dining · Beyond Sands Resort Palghar",
    description:
      "Palghar's #1 Pure Vegetarian culinary retreat. Authentic Konkani thalis, Gujarati cuisine, and strict Jain preparations opposite Sheetla Devi Temple.",
    images: [{ url: "/assets/dining/lunch.png" }],
  },
};

const MEALS_MENU = [
  {
    id: "breakfast",
    name: "Coastal Sunrise Breakfast",
    timing: "08:00 AM – 10:30 AM",
    subtitle: "Steamed morning warmth with garden breeze",
    image: "/assets/dining/breakfast.png",
    description:
      "Begin your day with freshly steamed delicacies, coastal spices, and fragrant tea, set against the peaceful rustling of coconut palms.",
    highlights: [
      "Steamed fluffy Idlis & crispy Medu Vadas with coastal coconut chutney & piping hot Sambar",
      "Traditional Coastal Kanda Poha garnished with crunchy roasted peanuts & fresh grated coconut",
      "Rava Upma & rich warm Sooji Halwa / Sheera crafted with pure ghee",
      "Freshly prepared Masala Chai infused with lemongrass & ginger, or south Indian filter coffee",
      "Assorted seasonal fruits & fresh warm bread toast with organic preserves",
    ],
    dietBadge: "100% Pure Veg · Jain Options",
  },
  {
    id: "lunch",
    name: "Royal Maharashtrian & Gujarati Thali",
    timing: "12:30 PM – 03:00 PM",
    subtitle: "Hearty afternoon feast celebrating Konkani heritage",
    image: "/assets/dining/lunch.png",
    description:
      "Our signature midday thali is an elaborate spread of hand-ground coastal masalas, slow-cooked gravies, and comforting staple breads.",
    highlights: [
      "Paneer Coastal Masala simmered in rich coconut-cashew gravy with aromatic spices",
      "Special dry seasonal vegetable preparation (Bhindi Kurkuri / Aloo Methi / Sukhi Bhaji)",
      "Traditional slow-simmered Dal Tadka tempered with cumin, mustard seeds, and fresh coriander",
      "Steamed aromatic Basmati Rice served with pure cow ghee",
      "Artisanal hot Phulkas & fluffy Puris made fresh to order",
      "Chilled refreshing Solkadhi / spiced Masala Buttermilk (Chaas) with roasted jeera",
      "Crispy Papad, home-style mango pickle, and regional sweet (Gulab Jamun / Shrikhand)",
    ],
    dietBadge: "Strict Jain & Swaminarayan Prep Available",
  },
  {
    id: "dinner",
    name: "Pure Veg Blue-Hour Dinner Feast",
    timing: "08:00 PM – 10:30 PM",
    subtitle: "Starlight dining under open skies & amber lanterns",
    image: "/assets/dining/dinner.png",
    description:
      "As twilight falls across the pool and celebration lawns, relish our evening feast designed for slow, joyful family conversations.",
    highlights: [
      "Palak Corn Delight / Paneer Tikka Butter Masala prepared with rich creamy texture",
      "Mixed Seasonal Vegetable Handi cooked in authentic clay pots with North Indian spices",
      "Comforting Dal Fry / Gujarati Sweet Kadhi with aromatic tempered tadka",
      "Fragrant Jeera Pulao or Veg Hyderabadi Dum Biryani with chilled cucumber-mint Raita",
      "Fresh artisanal Tandoori Rotis, Naans & Butter Phulkas directly from the hearth",
      "Decadent dessert course featuring warm Gulab Jamun, Moong Dal Halwa, or Ice Cream",
    ],
    dietBadge: "100% Pure Veg · Candlelit Poolside Setup",
  },
];

const JAIN_ETHOS = [
  {
    title: "Dedicated Jain Kitchen Prep",
    desc: "Strictly zero onion, garlic, potatoes, carrots, radish, or any root vegetables used upon request.",
    icon: Leaf,
  },
  {
    title: "100% Vegetarian Premises",
    desc: "No meat, fish, eggs, or outside non-veg food is permitted anywhere on resort grounds. Total purity guaranteed.",
    icon: ShieldCheck,
  },
  {
    title: "Chauvihar Compliant Timings",
    desc: "Early sunset dining arrangements available for Jain guests observing Chauvihar or Pachkhan vows.",
    icon: Sun,
  },
  {
    title: "Fresh Daily Ingredients",
    desc: "Locally sourced farm vegetables, cold-pressed oils, pure cow milk, and authentic Konkani stone-ground spices.",
    icon: Heart,
  },
];

export default function DiningPage() {
  return (
    <>
      {/* Schema.org Structured Data for Restaurant */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            "name": "Beyond Sands Pure Veg Dining",
            "description": "Palghar's #1 Pure Vegetarian & Jain Dining Destination. Situated opposite Sheetla Devi Temple, Kelva Beach.",
            "url": "https://www.beyondsands.in/dining",
            "telephone": "+919923895055",
            "servesCuisine": [
              "Pure Vegetarian",
              "Jain",
              "Swaminarayan",
              "Maharashtrian Coastal",
              "Gujarati",
              "North Indian"
            ],
            "priceRange": "₹₹",
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
            <span className="text-charcoal/60">Pure Veg Dining</span>
          </nav>

          {/* Hero Header: Purity & Palghar #1 Ranking */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 hairline-b border-charcoal/15 pb-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-champagne-gold/15 border border-champagne-gold/30 text-champagne-gold font-sans text-xs font-semibold tracking-wider uppercase mb-4">
                <Leaf className="w-3.5 h-3.5" />
                <span>100% Pure Vegetarian &amp; Jain Sanctuary</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal text-deep-navy tracking-tight leading-[1.1]">
                PURE VEG &amp; JAIN DINING
              </h1>
              <p className="font-sans text-base sm:text-lg text-charcoal/75 font-light mt-4 leading-relaxed">
                Beyond Sands is proudly recognized as <strong>Palghar's #1 Best Pure Vegetarian Resort</strong>. Located right across from the sacred <strong>Sheetla Devi Temple</strong>, our kitchen is governed by unwavering standards of culinary purity, fresh seasonal produce, and revered Jain and Swaminarayan culinary traditions.
              </p>
            </div>

            {/* Quick Badges */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/70 border border-charcoal/10 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-[#159b4d]" />
                <span className="font-sans text-xs font-medium text-deep-navy">Zero Outside Non-Veg Permitted</span>
              </div>
              <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/70 border border-charcoal/10 shadow-sm">
                <MapPin className="w-4 h-4 text-champagne-gold" />
                <span className="font-sans text-xs font-medium text-deep-navy">Opposite Sheetla Devi Mandir</span>
              </div>
            </div>
          </div>

          {/* Sattvic Purity & Jain Assurance Grid */}
          <section className="mb-20 bg-white/70 rounded-3xl p-8 sm:p-12 border border-charcoal/10 shadow-sm">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-champagne-gold font-semibold block mb-2">
                Ethos of Sacred Purity
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-normal text-deep-navy">
                OUR SATTVIC DINING PROMISE
              </h2>
              <p className="font-sans text-xs sm:text-sm text-charcoal/70 font-light mt-2">
                Families and pilgrims choosing Beyond Sands enjoy complete peace of mind with our dedicated kitchen practices.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {JAIN_ETHOS.map((ethos, idx) => {
                const IconComp = ethos.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-warm-ivory/50 border border-charcoal/5 hover:border-champagne-gold/40 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-champagne-gold/15 text-champagne-gold flex items-center justify-center mb-4">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-lg text-deep-navy font-medium mb-2">
                      {ethos.title}
                    </h3>
                    <p className="font-sans text-xs text-charcoal/70 font-light leading-relaxed">
                      {ethos.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Meals Showcase */}
          <div className="space-y-16 sm:space-y-24 mb-24">
            {MEALS_MENU.map((meal, idx) => (
              <article
                key={meal.id}
                className="bg-white/80 rounded-3xl border border-charcoal/15 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden transition-all duration-500 hover:shadow-[0_16px_40px_rgb(0,0,0,0.08)]"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-0 ${idx % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                  
                  {/* Photo Column */}
                  <div className={`lg:col-span-6 relative min-h-[360px] sm:min-h-[440px] lg:min-h-[480px] bg-neutral-200 overflow-hidden ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                    <Image
                      src={meal.image}
                      alt={`${meal.name} at Beyond Sands Pure Veg Resort Palghar`}
                      fill
                      priority={true}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Badge */}
                    <div className="absolute top-5 left-5 z-10">
                      <span className="px-3.5 py-1.5 rounded-full bg-deep-navy/90 backdrop-blur-md text-champagne-gold font-sans text-xs font-semibold tracking-wider uppercase border border-champagne-gold/30">
                        {meal.dietBadge}
                      </span>
                    </div>

                    <div className="absolute bottom-5 left-5 right-5 z-10 flex items-center gap-2 text-white text-xs backdrop-blur-md bg-black/50 px-4 py-2 rounded-xl border border-white/20">
                      <Clock className="w-4 h-4 text-champagne-gold" />
                      <span>{meal.timing}</span>
                    </div>
                  </div>

                  {/* Description Column */}
                  <div className={`lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div>
                      <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-champagne-gold font-semibold mb-2">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{meal.timing}</span>
                      </div>
                      <h2 className="font-display text-2xl sm:text-3xl font-medium text-deep-navy">
                        {meal.name}
                      </h2>
                      <p className="font-sans text-xs sm:text-sm text-charcoal/70 font-light mt-1 mb-4 italic">
                        "{meal.subtitle}"
                      </p>
                      <p className="font-sans text-xs sm:text-sm text-charcoal/80 font-light leading-relaxed mb-6">
                        {meal.description}
                      </p>

                      <div className="space-y-2.5 mb-8">
                        <p className="font-sans text-xs uppercase tracking-wider text-deep-navy font-semibold">
                          Sample Delicacies:
                        </p>
                        {meal.highlights.map((dish, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-charcoal/85 font-light">
                            <CheckCircle2 className="w-4 h-4 text-[#159b4d] shrink-0 mt-0.5" />
                            <span>{dish}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 hairline-t border-charcoal/15 flex flex-col sm:flex-row gap-3">
                      <a
                        href={`https://wa.me/919923895055?text=${encodeURIComponent(`Hi Beyond Sands! I would like to inquire about reserving meals / ${meal.name} for our upcoming visit to Palghar.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-champagne-gold hover:bg-deep-navy text-deep-navy hover:text-warm-ivory font-sans text-xs uppercase tracking-[0.14em] font-semibold transition-all shadow-md cursor-pointer"
                      >
                        <WhatsAppIcon size={16} />
                        <span>Reserve Dining via WhatsApp</span>
                      </a>
                    </div>
                  </div>

                </div>
              </article>
            ))}
          </div>

          {/* Group & Family Banquet Inquiries */}
          <section className="bg-gradient-to-br from-deep-navy to-[#061423] text-warm-ivory rounded-3xl p-8 sm:p-14 mb-20 relative overflow-hidden">
            <div className="relative z-10 max-w-3xl">
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-champagne-gold font-semibold block mb-2">
                Celebration Banquets &amp; Pilgrimage Groups
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight mb-4">
                HOSTING A PURE VEG GATHERING IN PALGHAR?
              </h2>
              <p className="font-sans text-sm sm:text-base text-warm-ivory/80 font-light leading-relaxed mb-8">
                Whether organizing a post-darshan lunch for devotees visiting Sheetla Devi Temple, a family reunion, or a wedding celebration with live Jain counters, our culinary team customizes every menu with utmost reverence and hospitality.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/919923895055?text=Hi%21%20I%20would%20like%20to%20inquire%20about%20pure%20veg%20group%20catering%20and%20dining%20at%20Beyond%20Sands%20Palghar."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-champagne-gold hover:bg-white text-deep-navy font-sans text-xs uppercase tracking-[0.14em] font-semibold transition-all shadow-lg cursor-pointer"
                >
                  <WhatsAppIcon size={16} />
                  <span>Inquire for Group Catering</span>
                </a>

                <Link
                  href="/rooms"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-champagne-gold/40 hover:border-champagne-gold text-champagne-gold font-sans text-xs uppercase tracking-[0.14em] font-medium transition-colors"
                >
                  <span>View Room Options</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}
