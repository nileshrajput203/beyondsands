"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { TiltedGridHero, type TiltedGridImage } from "@/components/ui/tilted-grid-hero";

const ALL_GALLERY_IMAGES: TiltedGridImage[] = [
  // Signature Resort Suites & Interiors
  { src: "/assets/rooms/garden-view-main.jpg", alt: "Garden View Room main interior and terrace" },
  { src: "/assets/rooms/pool-view-main.jpg", alt: "Pool View Suite private balcony overlooking azure waters" },
  { src: "/assets/rooms/couple-room-main.webp", alt: "Couple Room intimate retreat with warm ambient lighting" },
  { src: "/assets/rooms/family-dorm-main.jpg", alt: "Family Dorm spacious multi-bed suite for group gatherings" },
  { src: "/assets/rooms/garden-courtyard.png", alt: "Tranquil garden courtyard enveloped by tropical flora" },
  { src: "/assets/rooms/pool-view-thumb4.png", alt: "Signature infinity pool shimmering under coastal sunlight" },
  { src: "/assets/rooms/garden-view-thumb1.jpg", alt: "Garden View sunlit verandah with garden breeze" },
  { src: "/assets/rooms/pool-view-thumb1.jpg", alt: "Pool View deluxe suite layout and bespoke woodwork" },
  { src: "/assets/rooms/couple-room-thumb1.webp", alt: "Couple suite cosy nook and floral detailing" },
  { src: "/assets/rooms/family-dorm-thumb1.jpg", alt: "Family Dorm airy verandah and group lounge" },

  // Resort Grounds, Celebrations & Architecture
  { src: "/assets/gallery/wedding-banner.webp", alt: "Grand 15,000+ sq ft celebration lawns illuminated for wedding" },
  { src: "/assets/gallery/banquet-hall.jpg", alt: "Air-conditioned banquet hall and evening celebration deck" },
  { src: "/assets/hero/hero-gardens.jpg", alt: "Lush tropical manicured lawns and flowering coconut groves" },
  { src: "/assets/rooms/garden-view-thumb5.png", alt: "Pathways lined with tall coastal palms and soft lighting" },
  { src: "/assets/rooms/pool-view-thumb5.jpg", alt: "Poolside twilight view with starry night silhouettes" },
  { src: "/assets/rooms/couple-room-thumb2.webp", alt: "Romantic honeymoon styling with warm mood accents" },
  { src: "/assets/rooms/family-dorm-thumb3.jpg", alt: "High-ceiling family quarters with open coastal breeze" },
  { src: "/assets/rooms/garden-view-thumb2.jpg", alt: "King bed dressed in crisp luxury organic linens" },
  { src: "/assets/rooms/pool-view-thumb3.jpg", alt: "Golden hour sunset reflections across the pool" },

  // Surrounding Kelva Coastal Landmarks & Nature
  { src: "/assets/location/location-surroundings-beach.webp", alt: "Pristine Kelva Beach shoreline lined with Casuarina groves" },
  { src: "/assets/location/location-kelvafort.jpg", alt: "Historic Portuguese Kelva Fort ruins at low tide" },
  { src: "/assets/location/location-kelvadam.avif", alt: "Serene Kelva Dam reservoir and lush green hills" },
  { src: "/assets/location/location-drone-shitlamata.jpg", alt: "Sea-facing Sheetla Devi Temple in Kelva" },
  { src: "/assets/hero/hero-canopy-poster.jpg", alt: "Aerial canopy overview of Beyond Sands resort" },
  { src: "/assets/events/pool-evening.jpg", alt: "Evening poolside celebration at Beyond Sands" },
  { src: "/assets/rooms/garden-view-thumb3.jpg", alt: "Garden verandah seating at dusk" },
  { src: "/assets/dining/lunch.png", alt: "Pure vegetarian lunch thali" },
  { src: "/assets/events/lawn-reception.jpg", alt: "Celebration lawns prepared for a reception" },
];

const MOBILE_GALLERY_HIGHLIGHTS = [
  { src: "/assets/rooms/pool-view-main.jpg", alt: "Pool View Suite Balcony" },
  { src: "/assets/rooms/garden-view-main.jpg", alt: "Garden View Deluxe Room" },
  { src: "/assets/gallery/wedding-banner.webp", alt: "15,000 sq ft Celebration Lawns" },
  { src: "/assets/rooms/couple-room-main.webp", alt: "Romantic Couple Suite" },
  { src: "/assets/location/location-surroundings-beach.webp", alt: "Kelva Beach Shoreline" },
  { src: "/assets/dining/lunch.png", alt: "100% Pure Veg Dining" },
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />
              <span className="absolute bottom-2.5 left-3 right-3 text-[11px] font-sans text-white/95 truncate font-medium">
                {item.alt}
              </span>
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
