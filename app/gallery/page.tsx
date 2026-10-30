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
  category: "Resort & Lawns" | "Suites & Rooms" | "Dining & Events" | "Pool & Ambiance";
  locationTag: string;
}

// 100% Authentic Photos from C:\Users\USER\Downloads\bbsands
const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "bbs-1",
    src: "/assets/gallery/resort/dsc-04298.webp",
    title: "Crystal Clear Swimming Pool with Azure Waters",
    category: "Pool & Ambiance",
    locationTag: "Swimming Pool",
  },
  {
    id: "bbs-2",
    src: "/assets/gallery/resort/dsc-04238.webp",
    title: "Beyond Sands Resort Architecture & Sunlit Front Facade",
    category: "Resort & Lawns",
    locationTag: "Resort Facade",
  },
  {
    id: "bbs-3",
    src: "/assets/gallery/resort/dsc-04239.webp",
    title: "Lush Coastal Palms & Luxury Resort Suites",
    category: "Resort & Lawns",
    locationTag: "Resort Grounds",
  },
  {
    id: "bbs-4",
    src: "/assets/gallery/resort/dsc-04243.webp",
    title: "Tropical Garden Pathway & Coconut Grove Grounds",
    category: "Resort & Lawns",
    locationTag: "Garden Pathway",
  },
  {
    id: "bbs-5",
    src: "/assets/gallery/resort/dsc-04247.webp",
    title: "Shaded Dining Verandah & Open-Air Seating",
    category: "Dining & Events",
    locationTag: "Dining Verandah",
  },
  {
    id: "bbs-6",
    src: "/assets/gallery/resort/dsc-04248.webp",
    title: "Pure Vegetarian Dining Pavilion & Banquet Deck",
    category: "Dining & Events",
    locationTag: "Dining Pavilion",
  },
  {
    id: "bbs-7",
    src: "/assets/gallery/resort/dsc-04249.webp",
    title: "15,000 sq ft Manicured Celebration Lawns",
    category: "Resort & Lawns",
    locationTag: "Celebration Lawns",
  },
  {
    id: "bbs-8",
    src: "/assets/gallery/resort/dsc-04250.webp",
    title: "Resort Walkways Flanked by Tall Coconut Canopies",
    category: "Resort & Lawns",
    locationTag: "Palm Walkway",
  },
  {
    id: "bbs-9",
    src: "/assets/gallery/resort/dsc-04251.webp",
    title: "Contemporary Coastal Architecture & Suite Verandahs",
    category: "Resort & Lawns",
    locationTag: "Suite Verandahs",
  },
  {
    id: "bbs-10",
    src: "/assets/gallery/resort/dsc-04253.webp",
    title: "Expansive Green Lawns for Family Gatherings",
    category: "Resort & Lawns",
    locationTag: "Family Lawns",
  },
  {
    id: "bbs-11",
    src: "/assets/gallery/resort/dsc-04254.webp",
    title: "Tropical Flora & Serene Garden Spaces",
    category: "Resort & Lawns",
    locationTag: "Serene Gardens",
  },
  {
    id: "bbs-12",
    src: "/assets/gallery/resort/dsc-04255.webp",
    title: "Sunny Courtyard & Scenic Resort Grounds",
    category: "Resort & Lawns",
    locationTag: "Courtyard",
  },
  {
    id: "bbs-13",
    src: "/assets/gallery/resort/dsc-04256.webp",
    title: "Sunlit Resort Estate & Deluxe Suite Terraces",
    category: "Resort & Lawns",
    locationTag: "Resort Estate",
  },
  {
    id: "bbs-14",
    src: "/assets/gallery/resort/dsc-04257.webp",
    title: "Breezy Coastal Balconies & Garden Vistas",
    category: "Resort & Lawns",
    locationTag: "Coastal Balconies",
  },
  {
    id: "bbs-15",
    src: "/assets/gallery/resort/dsc-04322.webp",
    title: "Deluxe Suite Warm Ambient Interiors & Comfort",
    category: "Suites & Rooms",
    locationTag: "Deluxe Suite",
  },
  {
    id: "bbs-16",
    src: "/assets/gallery/resort/dsc-04323.webp",
    title: "Spacious Room Amenities & Coastal Hospitality",
    category: "Suites & Rooms",
    locationTag: "Suite Amenities",
  },
  {
    id: "bbs-17",
    src: "/assets/gallery/resort/dsc-04330.webp",
    title: "Relaxing Guest Suite Layout & Natural Lighting",
    category: "Suites & Rooms",
    locationTag: "Guest Bedroom",
  },
  {
    id: "bbs-18",
    src: "/assets/gallery/resort/dsc-04332.webp",
    title: "Banquet Hall & Event Celebration Spaces",
    category: "Dining & Events",
    locationTag: "Banquet Hall",
  },
  {
    id: "bbs-19",
    src: "/assets/gallery/resort/dsc-04333.webp",
    title: "Covered Pavilion for Weddings & Receptions",
    category: "Dining & Events",
    locationTag: "Wedding Pavilion",
  },
  {
    id: "bbs-20",
    src: "/assets/gallery/resort/dsc-04336.webp",
    title: "Twilight Evening Ambiance Across Resort Lawns",
    category: "Pool & Ambiance",
    locationTag: "Twilight Grounds",
  },
  {
    id: "bbs-21",
    src: "/assets/gallery/resort/dsc-04338.webp",
    title: "Illuminated Night-time Courtyard & Palm Canopy",
    category: "Pool & Ambiance",
    locationTag: "Evening Courtyard",
  },
  {
    id: "bbs-22",
    src: "/assets/gallery/resort/dsc-03041.webp",
    title: "Beyond Sands Peaceful Kelva Beach Coastal Retreat",
    category: "Resort & Lawns",
    locationTag: "Resort Entrance",
  },
];

type CategoryFilter = "All" | "Resort & Lawns" | "Suites & Rooms" | "Dining & Events" | "Pool & Ambiance";

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
          
          {/* Centered Elegant Editorial Header */}
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
            {/* Breadcrumbs */}
            <nav className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-champagne-gold mb-5">
              <Link href="/" className="hover:text-deep-navy transition-colors">Home</Link>
              <span>/</span>
              <span className="text-charcoal/60">Resort Gallery</span>
            </nav>

            <div className="block mb-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-champagne-gold/15 border border-champagne-gold/30 text-champagne-gold font-sans text-xs font-semibold tracking-wider uppercase">
                <Camera className="w-3.5 h-3.5" />
                <span>Visual Walkthrough · Beyond Sands Resort</span>
              </div>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-normal text-deep-navy tracking-tight leading-tight">
              Resort Photo Gallery
            </h1>

            <p className="font-sans text-sm sm:text-base text-charcoal/75 font-light mt-4 max-w-2xl mx-auto leading-relaxed">
              Explore authentic photography across Beyond Sands. Located directly opposite Sheetla Devi Temple and 1 minute from Kelva Beach, discover our swimming pool, luxury suites, 15,000 sq ft celebration lawns, and pure veg dining pavilions.
            </p>

            {/* Category Filter Pills (Centered & Balanced) */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mt-8">
              {(["All", "Resort & Lawns", "Suites & Rooms", "Dining & Events", "Pool & Ambiance"] as CategoryFilter[]).map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setLightboxIndex(null);
                  }}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-sans text-xs sm:text-[13px] uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                    activeCategory === cat
                      ? "bg-deep-navy text-warm-ivory shadow-md scale-105"
                      : "bg-white/80 hover:bg-white text-charcoal/75 border border-charcoal/15 hover:border-champagne-gold/50"
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
                className="group relative aspect-[4/3] rounded-3xl overflow-hidden bg-white/80 border border-charcoal/15 shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-[0_16px_36px_rgb(0,0,0,0.12)] transition-all duration-500 cursor-pointer"
              >
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Clean hover action icon (No badges, no captions) */}
                <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <div className="w-10 h-10 rounded-full bg-deep-navy/70 backdrop-blur-md text-white flex items-center justify-center shadow-lg">
                    <Maximize2 className="w-4 h-4 text-white" />
                  </div>
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
                  {lightboxIndex + 1} / {filteredPhotos.length}
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
