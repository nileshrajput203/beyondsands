"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { TiltedGridHero, type TiltedGridImage } from "@/components/ui/tilted-grid-hero";

const ALL_GALLERY_IMAGES: TiltedGridImage[] = [
  // 100% Authentic Photos from bbsands
  { src: "/assets/gallery/resort/dsc-04238.webp", alt: "Beyond Sands Resort Architecture & Sunlit Front Facade" },
  { src: "/assets/gallery/resort/dsc-04239.webp", alt: "Lush Coastal Palms & Luxury Resort Suites" },
  { src: "/assets/gallery/resort/dsc-04243.webp", alt: "Tropical Garden Pathway & Coconut Grove Grounds" },
  { src: "/assets/gallery/resort/dsc-04247.webp", alt: "Shaded Dining Verandah & Open-Air Seating" },
  { src: "/assets/gallery/resort/dsc-04248.webp", alt: "Pure Vegetarian Dining Pavilion & Banquet Deck" },
  { src: "/assets/gallery/resort/dsc-04249.webp", alt: "15,000 sq ft Manicured Celebration Lawns" },
  { src: "/assets/gallery/resort/dsc-04250.webp", alt: "Resort Walkways Flanked by Tall Coconut Canopies" },
  { src: "/assets/gallery/resort/dsc-04251.webp", alt: "Contemporary Coastal Architecture & Suite Verandahs" },
  { src: "/assets/gallery/resort/dsc-04253.webp", alt: "Expansive Green Lawns for Family Gatherings" },
  { src: "/assets/gallery/resort/dsc-04254.webp", alt: "Tropical Flora & Serene Garden Spaces" },
  { src: "/assets/gallery/resort/dsc-04255.webp", alt: "Sunny Courtyard & Scenic Resort Grounds" },
  { src: "/assets/gallery/resort/dsc-04256.webp", alt: "Sunlit Resort Estate & Deluxe Suite Terraces" },
  { src: "/assets/gallery/resort/dsc-04257.webp", alt: "Breezy Coastal Balconies & Garden Vistas" },
  { src: "/assets/gallery/resort/dsc-04298.webp", alt: "Crystal Clear Swimming Pool with Azure Waters" },
  { src: "/assets/gallery/resort/dsc-04322.webp", alt: "Deluxe Suite Warm Ambient Interiors & Comfort" },
  { src: "/assets/gallery/resort/dsc-04323.webp", alt: "Spacious Room Amenities & Coastal Hospitality" },
  { src: "/assets/gallery/resort/dsc-04330.webp", alt: "Relaxing Guest Suite Layout & Natural Lighting" },
  { src: "/assets/gallery/resort/dsc-04332.webp", alt: "Banquet Hall & Event Celebration Spaces" },
  { src: "/assets/gallery/resort/dsc-04333.webp", alt: "Covered Pavilion for Weddings & Receptions" },
  { src: "/assets/gallery/resort/dsc-04336.webp", alt: "Twilight Evening Ambiance Across Resort Lawns" },
  { src: "/assets/gallery/resort/dsc-04338.webp", alt: "Illuminated Night-time Courtyard & Palm Canopy" },
  { src: "/assets/gallery/resort/dsc-03041.webp", alt: "Beyond Sands Peaceful Kelva Beach Coastal Retreat" },
];

const MOBILE_GALLERY_HIGHLIGHTS = [
  { src: "/assets/gallery/resort/dsc-04298.webp", alt: "Crystal Clear Swimming Pool" },
  { src: "/assets/gallery/resort/dsc-04238.webp", alt: "Beyond Sands Resort Architecture" },
  { src: "/assets/gallery/resort/dsc-04249.webp", alt: "15,000 sq ft Celebration Lawns" },
  { src: "/assets/gallery/resort/dsc-04251.webp", alt: "Luxury Suite Verandahs" },
  { src: "/assets/gallery/resort/dsc-04330.webp", alt: "Deluxe Suite Interiors" },
  { src: "/assets/gallery/resort/dsc-04336.webp", alt: "Twilight Evening Grounds" },
];

export function Gallery() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="gallery-section"
      className="relative w-full py-12 sm:py-24 bg-transparent text-charcoal select-none overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-12 mb-5 sm:mb-10 flex items-end justify-between">
        <div>
          <span className="section-kicker mb-2.5 sm:mb-3">Gallery</span>
          <h2 className="font-display text-2xl sm:text-5xl font-normal text-deep-navy tracking-tight">
            The grounds, in motion
          </h2>
        </div>
        <span className="block md:hidden text-[10px] uppercase font-sans tracking-widest text-charcoal/50">
          Swipe photos →
        </span>
      </div>

      {/* Mobile-Only Lightweight Optimized Photo Stream (< 768px) */}
      <div className="block md:hidden w-full overflow-x-auto no-scrollbar px-4 pb-2">
        <div className="flex gap-3 snap-x snap-mandatory">
          {MOBILE_GALLERY_HIGHLIGHTS.map((item, idx) => (
            <div
              key={idx}
              className="relative w-[78vw] max-w-[310px] aspect-[16/10] shrink-0 rounded-2xl overflow-hidden border border-charcoal/10 shadow-sm snap-center bg-neutral-100"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 78vw, 310px"
                quality={75}
                className="object-cover object-center"
              />

            </div>
          ))}
        </div>
      </div>

      {/* Desktop-Only 3D Tilted Grid Cylinder (>= 768px) */}
      {isDesktop && (
        <div className="hidden md:block relative w-full overflow-hidden">
          <TiltedGridHero
            images={ALL_GALLERY_IMAGES}
            speed={3.5}
            tileHeight={32}
            aspectRatio={16 / 9}
            gap={5}
            axis={54}
            curve={75}
            fade={0}
            className="h-[620px] lg:h-[700px] w-full"
          />
        </div>
      )}
    </section>
  );
}

export default Gallery;
