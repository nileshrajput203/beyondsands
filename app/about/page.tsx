import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/footer/Footer";
import { WhatsAppIcon, LeafIcon, ShieldCheckIcon, HeartHandshakeIcon } from "@/components/icons";

export const metadata = {
  title: "About Us | Beyond Sands — Palghar's #1 Best Resort & Pure Veg Sanctuary",
  description:
    "Discover the story of Beyond Sands, Palghar's top-ranked luxury resort located directly opposite Sheetla Devi Temple and 1 min from Kelva Beach. 100% pure veg hospitality, serene coastal groves, and family tranquility.",
  keywords: [
    "best resort in palghar",
    "palghar best resort",
    "top 1 resort in palghar",
    "resort nearest to shitla devi temple",
    "kelva beach pure veg resort",
    "about beyond sands palghar",
  ],
};

const VALUES = [
  {
    num: "01",
    title: "Heartful Hospitality",
    subtitle: "Atithi Devo Bhava",
    description:
      "Every guest is welcomed as cherished family. From a chilled tender coconut on arrival to unhurried checkouts, our hosts anticipate every need.",
    icon: HeartHandshakeIcon,
  },
  {
    num: "02",
    title: "Coastal Conservation",
    subtitle: "Sustainable Living",
    description:
      "We safeguard our surrounding coconut and casuarina groves. Solar water heating, minimal single-use plastics, and native landscaping preserve Kelva's ecosystem.",
    icon: LeafIcon,
  },
  {
    num: "03",
    title: "100% Pure Vegetarian",
    subtitle: "Sattvic Culinary Art",
    description:
      "A kitchen built on purity and reverence. Distinct cookware and strict Jain/Swaminarayan preparation options celebrate regional Konkani flavors.",
    icon: ShieldCheckIcon,
  },
  {
    num: "04",
    title: "Quiet Acoustic Luxury",
    subtitle: "Peace Uninterrupted",
    description:
      "No blaring DJ music, no highway traffic. Just the rustle of coastal palms, birdsong at dawn, and the rhythmic murmur of the Arabian Sea.",
    icon: ShieldCheckIcon,
  },
];

const STATS = [
  { number: "4.8 ★", label: "Google Guest Rating", sub: "Based on 280+ verified reviews" },
  { number: "150+", label: "Happy Family Gatherings", sub: "Weddings, reunions & celebrations" },
  { number: "3 Years", label: "Of Coastal Calm", sub: "Serving travelers from Mumbai & Pune" },
  { number: "95%", label: "Repeat & Referral Guests", sub: "A testament to heartfelt warmth" },
];

export default function AboutPage() {
  return (
    <>
      <div className="pt-24 sm:pt-36 pb-20 sm:pb-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto select-none">
        {/* Navigation Breadcrumb */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-champagne-gold hover:text-deep-navy transition-colors mb-6 sm:mb-10 group"
        >
          <span className="transition-transform group-hover:-translate-x-1">←</span>
          <span>Return to Home</span>
        </Link>

        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-champagne-gold/10 border border-champagne-gold/30 rounded-full mb-3 sm:mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-champagne-gold animate-pulse" />
            <span className="font-sans text-[10px] sm:text-[11px] uppercase tracking-widest text-deep-navy font-semibold">
              02 · Our Heritage & Sanctuary
            </span>
          </div>

          <h1 className="font-display text-2xl min-[360px]:text-[1.85rem] sm:text-6xl lg:text-7xl text-deep-navy font-normal tracking-wide max-w-4xl leading-[1.18] sm:leading-[1.08]">
            Born from a deep love for coastal serenity & authentic hospitality.
          </h1>
          <p className="font-sans text-xs sm:text-base text-charcoal/80 font-light mt-3 sm:mt-6 max-w-2xl leading-relaxed">
            Beyond Sands is more than a resort—it is a tranquil sanctuary nestled in Kelva&apos;s whispering palm groves, where the noise of the city gives way to the timeless rhythm of the Arabian Sea.
          </p>
        </div>

        {/* 21st.dev Style Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-20">
          {/* Card 1: Main Story Hero Card (8 cols) */}
          <div className="lg:col-span-8 relative min-h-[380px] sm:min-h-[460px] rounded-[1.8rem] overflow-hidden border border-charcoal/10 shadow-[0_24px_50px_-32px_rgba(11,34,56,0.4)] group">
            <Image
              src="/assets/hero/hero-gardens.jpg"
              alt="Lush green coconut palm groves at Beyond Sands Resort"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-cover object-center luxury-grade transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/95 via-deep-navy/40 to-transparent" />

            <div className="absolute top-6 left-6">
              <span className="px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 text-warm-ivory text-[10px] font-mono uppercase tracking-widest rounded-full">
                EST. 2023 · KELVA BEACH, PALGHAR
              </span>
            </div>

            <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 right-6 sm:right-8 text-warm-ivory">
              <span className="font-sans text-xs uppercase tracking-widest text-champagne-gold font-semibold block mb-2">
                The Origin Story
              </span>
              <p className="font-display text-2xl sm:text-3xl font-light text-warm-ivory leading-snug mb-3">
                &ldquo;We wanted to build a place where time slows down, where meals are pure and cooked with reverence, and every sunset brings a quiet renewal.&rdquo;
              </p>
              <p className="font-sans text-xs text-warm-ivory/80 max-w-xl font-light leading-relaxed hidden sm:block">
                Situated just 90 minutes from Mumbai across the picturesque Palghar countryside, Beyond Sands preserves the natural topography of Kelva with private garden verandahs and open coconut orchards.
              </p>
            </div>
          </div>

          {/* Card 2: Luxury Stats Pillar (4 cols) */}
          <div className="lg:col-span-4 bg-deep-navy text-warm-ivory p-8 rounded-[1.8rem] border border-champagne-gold/25 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-44 h-44 rounded-full bg-champagne-gold/10 blur-2xl pointer-events-none" />

            <div>
              <span className="font-sans text-[11px] uppercase tracking-widest text-champagne-gold font-semibold block mb-2">
                The Heritage By The Numbers
              </span>
              <h2 className="font-display text-2xl text-warm-ivory font-light mb-6">
                Quiet luxury, measured in guest contentment.
              </h2>
            </div>

            <div className="space-y-6">
              {STATS.map((stat, idx) => (
                <div key={idx} className="hairline-b border-warm-ivory/10 pb-4 last:border-b-0 last:pb-0">
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="font-display text-3xl sm:text-4xl text-champagne-gold font-normal">
                      {stat.number}
                    </span>
                    <span className="font-sans text-[11px] uppercase tracking-wider text-warm-ivory/70 font-medium">
                      {stat.label}
                    </span>
                  </div>
                  <p className="text-[11px] text-warm-ivory/50 font-light font-sans">
                    {stat.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: The Blue Hour Philosophy (4 cols) */}
          <div className="lg:col-span-4 bg-white/70 p-7 rounded-[1.6rem] border border-charcoal/10 shadow-[0_18px_40px_-30px_rgba(11,34,56,0.25)] space-y-4 hover:border-champagne-gold/50 transition-colors">
            <div className="w-10 h-10 rounded-full bg-deep-navy/5 border border-deep-navy/10 flex items-center justify-center text-deep-navy">
              <span className="text-sm">✦</span>
            </div>
            <span className="text-[10px] uppercase font-mono tracking-widest text-champagne-gold font-semibold block">
              Signature Hour
            </span>
            <h3 className="font-display text-2xl text-deep-navy font-normal">
              The Blue Hour Ritual
            </h3>
            <p className="font-sans text-xs sm:text-sm text-charcoal/75 font-light leading-relaxed">
              At dusk, as the sun dips below the Arabian Sea horizon, a serene indigo hue envelopes our lawns. Brass lanterns flicker to life, creating an atmosphere of restorative contemplation.
            </p>
          </div>

          {/* Card 4: 100% Pure Vegetarian Purity (4 cols) */}
          <div className="lg:col-span-4 bg-white/70 p-7 rounded-[1.6rem] border border-charcoal/10 shadow-[0_18px_40px_-30px_rgba(11,34,56,0.25)] space-y-4 hover:border-champagne-gold/50 transition-colors">
            <div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
              <span className="w-3 h-3 rounded-full bg-emerald-600 inline-block" />
            </div>
            <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-700 font-semibold block">
              100% Pure Veg Sanctuary
            </span>
            <h3 className="font-display text-2xl text-deep-navy font-normal">
              Reverent Culinary Dining
            </h3>
            <p className="font-sans text-xs sm:text-sm text-charcoal/75 font-light leading-relaxed">
              Zero non-vegetarian contamination. Our kitchen prepares authentic Konkani, Gujarati, and North Indian meals using fresh pressed coconut, stone ground spices, and dedicated Jain utensils.
            </p>
          </div>

          {/* Card 5: Sacred Location & Nature (4 cols) */}
          <div className="lg:col-span-4 bg-white/70 p-7 rounded-[1.6rem] border border-charcoal/10 shadow-[0_18px_40px_-30px_rgba(11,34,56,0.25)] space-y-4 hover:border-champagne-gold/50 transition-colors">
            <div className="w-10 h-10 rounded-full bg-deep-navy/5 border border-deep-navy/10 flex items-center justify-center text-deep-navy">
              <span className="text-sm font-display italic">K</span>
            </div>
            <span className="text-[10px] uppercase font-mono tracking-widest text-champagne-gold font-semibold block">
              Historic Palghar Locale
            </span>
            <h3 className="font-display text-2xl text-deep-navy font-normal">
              Shitladevi & Casuarina
            </h3>
            <p className="font-sans text-xs sm:text-sm text-charcoal/75 font-light leading-relaxed">
              Facing the historic Shitladevi Temple, with Kelva Beach just a five-minute walk through whispering Casuarina (Suru) groves, our location provides natural peace and spiritual harmony.
            </p>
          </div>
        </div>

        {/* Brand Values / Four Pillars */}
        <div className="mb-20 hairline-b border-charcoal/15 pb-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-sans text-xs uppercase tracking-widest text-champagne-gold font-semibold block mb-2">
              Our Ethos
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-deep-navy font-normal">
              What Guides Every Experience
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="p-7 bg-white/60 hover:bg-white border border-charcoal/15 hover:border-champagne-gold/60 rounded-[1.6rem] space-y-3 transition-all duration-300 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase font-mono text-champagne-gold font-semibold">
                      {val.num}
                    </span>
                    <Icon size={18} className="text-champagne-gold" />
                  </div>
                  <h3 className="font-display text-xl text-deep-navy font-medium">
                    {val.title}
                  </h3>
                  <span className="text-[11px] uppercase tracking-wider text-charcoal/50 font-sans block">
                    {val.subtitle}
                  </span>
                  <p className="font-sans text-xs text-charcoal/75 leading-relaxed font-light pt-1">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Concierge Callout */}
        <div className="p-6 sm:p-12 bg-deep-navy text-warm-ivory rounded-2xl sm:rounded-[1.6rem] border border-champagne-gold/30 shadow-md relative overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8">
          <div className="absolute top-0 right-0 w-80 h-80 bg-champagne-gold/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-3 max-w-2xl">
            <span className="font-sans text-xs uppercase tracking-widest text-champagne-gold font-semibold block">
              Plan Your Visit
            </span>
            <h2 className="font-display text-2xl sm:text-4xl text-warm-ivory font-normal">
              Experience the Blue Hour in person.
            </h2>
            <p className="font-sans text-xs sm:text-sm text-warm-ivory/80 font-light leading-relaxed">
              Whether you wish to book an intimate family suite, plan a private resort buyout, or inquire about authentic pure vegetarian dining, our concierge is a message away.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 shrink-0 w-full sm:w-auto">
            <a
              href="https://wa.me/919923895055?text=Hello%20Beyond%20Sands%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20resort%20and%20heritage."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto justify-center px-6 py-3.5 bg-champagne-gold hover:bg-champagne-gold/90 text-navy-blue font-sans text-xs uppercase tracking-widest font-semibold rounded-full inline-flex items-center gap-2 transition-all shadow-sm"
            >
              <WhatsAppIcon size={16} />
              <span>Message Concierge</span>
            </a>
            <Link
              href="/offers"
              className="w-full sm:w-auto text-center px-6 py-3.5 bg-white/10 hover:bg-white/20 text-warm-ivory border border-white/20 font-sans text-xs uppercase tracking-widest font-semibold rounded-full transition-colors"
            >
              <span>Explore Offers</span>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

