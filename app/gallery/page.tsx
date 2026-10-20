"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/footer/Footer";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
  MapPin,
  Utensils,
  Camera,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons";

interface GalleryPhoto {
  id: string;
  src: string;
  title: string;
  category: "Celebrations" | "Dining";
  locationTag: string;
}

const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "g-1",
    src: "/assets/gallery/gallery-wedding-mandap.webp",
    title: "Grand Wedding Mandap & Floral Stage Setup",
    category: "Celebrations",
    locationTag: "Celebration Stage",
  },
  {
    id: "g-2",
    src: "/assets/gallery/gallery-wedding-couple.webp",
    title: "Bride & Groom Ceremony on Decorated Stage",
    category: "Celebrations",
    locationTag: "Wedding Ceremony",
  },
  {
    id: "g-3",
    src: "/assets/gallery/gallery-banquet-hall.webp",
    title: "Air-Conditioned Banquet Hall & Event Seating",
    category: "Celebrations",
    locationTag: "AC Banquet Hall",
  },
  {
    id: "g-4",
    src: "/assets/gallery/gallery-buffet-dining.webp",
    title: "Covered Outdoor Buffet Feast Dining Area",
    category: "Dining",
    locationTag: "Dining Pavilion",
  },
];

type CategoryFilter = "All" | "Celebrations" | "Dining";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredPhotos =
    activeCategory === "All"
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((p) => p.category === activeCategory);

  const handlePrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev - 1 + filteredPhotos.length) % filteredPhotos.length
    );
  }, [filteredPhotos.length]);

  const handleNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % filteredPhotos.length
    );
  }, [filteredPhotos.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, handlePrev, handleNext]);

  return (
    <>
      <div className="min-h-[100dvh] bg-transparent text-charcoal pt-32 sm:pt-36 pb-20 select-none">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-champagne-gold mb-8">
            <Link href="/" className="hover:text-deep-navy transition-colors">Home</Link>
            <span>/</span>
            <span className="text-charcoal/60">Resort Gallery</span>
          </nav>

          {/* Hero Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 hairline-b border-charcoal/15 pb-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-champagne-gold/15 border border-champagne-gold/30 text-champagne-gold font-sans text-xs font-semibold tracking-wider uppercase mb-4">
                <Camera className="w-3.5 h-3.5" />
                <span>Visual Walkthrough · Palghar's #1 Resort</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal text-deep-navy tracking-tight leading-[1.1]">
                RESORT PHOTO GALLERY
              </h1>
              <p className="font-sans text-base sm:text-lg text-charcoal/75 font-light mt-4 leading-relaxed">
                Immerse yourself in authentic photography of Beyond Sands. Located <strong>directly opposite Sheetla Devi Temple</strong> and <strong>1 minute from Kelva Beach</strong>, explore our luxury suites, sparkling swimming pool, 15,000 sq ft celebration lawns, and pure vegetarian dining sanctuaries.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2 shrink-0">
              {(["All", "Celebrations", "Dining"] as CategoryFilter[]).map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setLightboxIndex(null);
                  }}
                  className={`px-4 py-2 rounded-full font-sans text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                    activeCategory === cat
                      ? "bg-deep-navy text-warm-ivory shadow-md"
                      : "bg-white/80 hover:bg-white text-charcoal/70 border border-charcoal/10"
                  }`}
                >
                  {cat === "All" ? `All Photos (${GALLERY_PHOTOS.length})` : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Photo Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-24">
            {filteredPhotos.map((photo, idx) => (
              <div
                key={photo.id}
                onClick={() => setLightboxIndex(idx)}
                className="group relative aspect-[16/11] rounded-3xl overflow-hidden bg-white/80 border border-charcoal/15 shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-[0_16px_36px_rgb(0,0,0,0.12)] transition-all duration-500 cursor-pointer"
              >
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Floating Tag */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full bg-deep-navy/85 backdrop-blur-md text-champagne-gold font-sans text-[11px] font-semibold uppercase tracking-wider">
                    {photo.locationTag}
                  </span>
                </div>

                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/90 via-deep-navy/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="flex items-center justify-between text-white mb-1">
                    <span className="font-sans text-[11px] uppercase tracking-wider text-champagne-gold">
                      {photo.category}
                    </span>
                    <Maximize2 className="w-4 h-4 text-white/80" />
                  </div>
                  <p className="font-display text-white text-lg font-medium leading-snug">
                    {photo.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox Modal */}
          {lightboxIndex !== null && filteredPhotos[lightboxIndex] && (
            <div
              role="dialog"
              aria-modal="true"
              className="fixed inset-0 z-[120] bg-black/92 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-8 animate-fadeIn"
              onClick={() => setLightboxIndex(null)}
            >
              <div
                className="absolute top-6 left-6 right-6 flex items-center justify-between text-white/80 z-10"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="font-sans text-xs sm:text-sm tracking-widest text-champagne-gold uppercase">
                  {lightboxIndex + 1} / {filteredPhotos.length} · {filteredPhotos[lightboxIndex].locationTag}
                </div>
                <button
                  onClick={() => setLightboxIndex(null)}
                  className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Close photo preview"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>

              <div
                className="relative w-full max-w-5xl h-[65vh] sm:h-[75vh] flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={filteredPhotos[lightboxIndex].src}
                  alt={filteredPhotos[lightboxIndex].title}
                  fill
                  priority
                  sizes="(max-width: 1280px) 90vw, 1200px"
                  className="object-contain"
                />

                <button
                  onClick={handlePrev}
                  className="absolute left-2 sm:-left-12 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 sm:bg-white/10 hover:bg-white/25 text-white transition-all backdrop-blur-sm"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-2 sm:-right-12 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 sm:bg-white/10 hover:bg-white/25 text-white transition-all backdrop-blur-sm"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              <div
                className="mt-4 sm:mt-6 text-center max-w-2xl px-4 z-10"
                onClick={(e) => e.stopPropagation()}
              >
                <p className="font-display text-white text-lg sm:text-xl font-normal tracking-wide">
                  {filteredPhotos[lightboxIndex].title}
                </p>
              </div>
            </div>
          )}

          {/* Bottom Booking CTA Banner */}
          <section className="bg-gradient-to-br from-deep-navy to-[#061423] text-warm-ivory rounded-3xl p-8 sm:p-14 mb-20 relative overflow-hidden">
            <div className="relative z-10 max-w-3xl">
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-champagne-gold font-semibold block mb-2">
                Palghar's #1 Luxury Destination
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight mb-4">
                READY TO VISIT BEYOND SANDS IN PERSON?
              </h2>
              <p className="font-sans text-sm sm:text-base text-warm-ivory/80 font-light leading-relaxed mb-8">
                Reserve your stay directly with our resident hosts to unlock complimentary coastal breakfast, preferred pool-view suites, and pure vegetarian Sattvic feasts.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/919923895055?text=Hi%21%20I%20viewed%20the%20resort%20gallery%20and%20would%20like%20to%20inquire%20about%20booking%20a%20stay%20at%20Beyond%20Sands%20Palghar."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-champagne-gold hover:bg-white text-deep-navy font-sans text-xs uppercase tracking-[0.14em] font-semibold transition-all shadow-lg cursor-pointer"
                >
                  <WhatsAppIcon size={16} />
                  <span>Inquire Availability on WhatsApp</span>
                </a>

                <Link
                  href="/rooms"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-champagne-gold/40 hover:border-champagne-gold text-champagne-gold font-sans text-xs uppercase tracking-[0.14em] font-medium transition-colors"
                >
                  <span>Explore Rooms &amp; Rates</span>
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
