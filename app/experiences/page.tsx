import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/footer/Footer";
import { WhatsAppIcon, MapPinIcon } from "@/components/icons";

export const metadata = {
  title: "Experiences & Surroundings · Beyond Sands Resort",
  description: "Explore pristine Kelva Beach, historic Portuguese forts, freshwater dams, and sacred coastal temples.",
};

const EXPERIENCES = [
  {
    title: "Kelva Beach & Casuarina Groves",
    distance: "5 min walk",
    tag: "COASTAL SHORELINE",
    description: "An expansive stretch of untouched golden sands flanked by whispering casuarina and suru trees. Ideal for sunset strolls, barefoot meditation, and peaceful coastal contemplation.",
    image: "/assets/location/location-surroundings-beach.webp",
    featured: true,
  },
  {
    title: "Sheetla Devi Temple",
    distance: "Directly opposite",
    tag: "SACRED HERITAGE",
    description: "A revered sea-facing shrine dedicated to Sheetla Mata, drawing pilgrims and coastal souls seeking quiet blessings amidst swaying palms.",
    image: "/assets/location/location-drone-shitlamata.jpg",
    featured: false,
  },
  {
    title: "Kelva Fort Bastion",
    distance: "10 min by road",
    tag: "PORTUGUESE MARITIME HISTORY",
    description: "A 16th-century coastal fort standing resilient against the Arabian Sea tides, offering panoramic sea views and rich regional heritage.",
    image: "/assets/location/location-kelvafort.jpg",
    featured: false,
  },
  {
    title: "Kelva Dam & Monsoon Reservoir",
    distance: "20 min by road",
    tag: "NATURE & FRESHWATER",
    description: "A tranquil freshwater reservoir nestled against the Sahyadri foothills, surrounded by emerald foliage, freshwater streams, and quiet picnic spots.",
    image: "/assets/location/location-kelvadam.avif",
    featured: false,
  },
];

export default function ExperiencesPage() {
  const whatsappMsg = encodeURIComponent(
    "Hi Beyond Sands! I'm planning my visit and would love recommendations for exploring Kelva Beach, the Fort, and local temple sightseeing during my stay."
  );

  return (
    <>
      <div className="pt-32 pb-24 px-6 sm:px-12 max-w-6xl mx-auto select-none">
        {/* Breadcrumb */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-wider text-champagne-gold hover:text-deep-navy transition-colors mb-8"
        >
          <span>←</span>
          <span>Back to Home</span>
        </Link>

        {/* Header */}
        <div className="mb-14">
          <span className="font-sans text-xs uppercase tracking-widest text-champagne-gold font-semibold block mb-2">
            04 · Curated Local Excursions
          </span>
          <h1 className="font-display text-4xl sm:text-6xl text-deep-navy font-normal tracking-wide max-w-3xl">
            Pristine coastlines, historic bastions, and coastal calm.
          </h1>
          <p className="font-sans text-sm sm:text-base text-charcoal/80 font-light mt-4 max-w-2xl leading-relaxed">
            From ancient maritime forts to whispering suru groves, immerse yourself in the authentic character of Palghar&apos;s coastline.
          </p>
        </div>

        {/* 21st.dev Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          {/* Main Featured Bento Card (Spans 12 columns on mobile, 8 on desktop) */}
          <div className="lg:col-span-8 group relative rounded-[2px] overflow-hidden border border-charcoal/15 bg-white/70 shadow-sm hover:border-champagne-gold/60 transition-all duration-500 flex flex-col justify-between">
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <Image
                src={EXPERIENCES[0].image}
                alt={EXPERIENCES[0].title}
                fill
                sizes="(max-width: 1024px) 100vw, 65vw"
                className="object-cover object-center luxury-grade transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/85 via-deep-navy/20 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-deep-navy/80 backdrop-blur-md text-warm-ivory text-[10px] font-sans uppercase tracking-widest border border-warm-ivory/20 rounded-[2px] font-medium">
                  {EXPERIENCES[0].distance}
                </span>
              </div>
              <div className="absolute bottom-6 left-6 right-6 text-warm-ivory">
                <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-champagne-gold font-semibold block mb-1">
                  {EXPERIENCES[0].tag}
                </span>
                <h2 className="font-display text-2xl sm:text-3xl text-warm-ivory font-normal">
                  {EXPERIENCES[0].title}
                </h2>
              </div>
            </div>
            <div className="p-6 sm:p-8 font-sans">
              <p className="text-xs sm:text-sm text-charcoal/80 font-light leading-relaxed">
                {EXPERIENCES[0].description}
              </p>
            </div>
          </div>

          {/* Side Bento Card: Sheetla Devi Temple (Spans 4 columns) */}
          <div className="lg:col-span-4 group relative rounded-[2px] overflow-hidden border border-charcoal/15 bg-white/70 shadow-sm hover:border-champagne-gold/60 transition-all duration-500 flex flex-col">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={EXPERIENCES[1].image}
                alt={EXPERIENCES[1].title}
                fill
                sizes="(max-width: 1024px) 100vw, 35vw"
                className="object-cover object-center luxury-grade transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-deep-navy/80 backdrop-blur-md text-warm-ivory text-[10px] font-sans uppercase tracking-widest border border-warm-ivory/20 rounded-[2px] font-medium">
                  {EXPERIENCES[1].distance}
                </span>
              </div>
            </div>
            <div className="p-6 font-sans space-y-2 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-champagne-gold font-semibold block">
                  {EXPERIENCES[1].tag}
                </span>
                <h3 className="font-display text-xl text-deep-navy font-normal mt-1">
                  {EXPERIENCES[1].title}
                </h3>
                <p className="text-xs text-charcoal/75 font-light leading-relaxed mt-2">
                  {EXPERIENCES[1].description}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Card 1: Kelva Fort (Spans 6 columns) */}
          <div className="lg:col-span-6 group relative rounded-[2px] overflow-hidden border border-charcoal/15 bg-white/70 shadow-sm hover:border-champagne-gold/60 transition-all duration-500 flex flex-col">
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <Image
                src={EXPERIENCES[2].image}
                alt={EXPERIENCES[2].title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center luxury-grade transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-deep-navy/80 backdrop-blur-md text-warm-ivory text-[10px] font-sans uppercase tracking-widest border border-warm-ivory/20 rounded-[2px] font-medium">
                  {EXPERIENCES[2].distance}
                </span>
              </div>
            </div>
            <div className="p-6 font-sans space-y-2">
              <span className="text-[10px] uppercase tracking-wider text-champagne-gold font-semibold block">
                {EXPERIENCES[2].tag}
              </span>
              <h3 className="font-display text-2xl text-deep-navy font-normal">
                {EXPERIENCES[2].title}
              </h3>
              <p className="text-xs text-charcoal/75 font-light leading-relaxed">
                {EXPERIENCES[2].description}
              </p>
            </div>
          </div>

          {/* Bottom Card 2: Kelva Dam (Spans 6 columns) */}
          <div className="lg:col-span-6 group relative rounded-[2px] overflow-hidden border border-charcoal/15 bg-white/70 shadow-sm hover:border-champagne-gold/60 transition-all duration-500 flex flex-col">
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <Image
                src={EXPERIENCES[3].image}
                alt={EXPERIENCES[3].title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center luxury-grade transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-deep-navy/80 backdrop-blur-md text-warm-ivory text-[10px] font-sans uppercase tracking-widest border border-warm-ivory/20 rounded-[2px] font-medium">
                  {EXPERIENCES[3].distance}
                </span>
              </div>
            </div>
            <div className="p-6 font-sans space-y-2">
              <span className="text-[10px] uppercase tracking-wider text-champagne-gold font-semibold block">
                {EXPERIENCES[3].tag}
              </span>
              <h3 className="font-display text-2xl text-deep-navy font-normal">
                {EXPERIENCES[3].title}
              </h3>
              <p className="text-xs text-charcoal/75 font-light leading-relaxed">
                {EXPERIENCES[3].description}
              </p>
            </div>
          </div>
        </div>

        {/* 21st.dev Concierge Itinerary Planning Banner */}
        <div className="bg-white/80 backdrop-blur-md rounded-[2px] p-8 sm:p-12 border border-champagne-gold/40 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-[10px] uppercase tracking-widest text-champagne-gold font-semibold block">
              Custom Day Itineraries
            </span>
            <h2 className="font-display text-2xl sm:text-3xl text-deep-navy font-normal">
              Need assistance planning your local excursions?
            </h2>
            <p className="font-sans text-xs sm:text-sm text-charcoal/75 font-light max-w-md leading-relaxed">
              Our front desk arranges local taxi connections, tide timing recommendations, and temple visit guidance.
            </p>
          </div>

          <a
            href={`https://wa.me/919923895055?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-deep-navy text-warm-ivory hover:bg-navy-blue transition-colors font-sans text-xs uppercase tracking-widest font-semibold rounded-[2px] flex items-center gap-2 shrink-0 shadow-md"
          >
            <WhatsAppIcon size={16} />
            <span>Plan Sightseeing with Concierge</span>
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
}
