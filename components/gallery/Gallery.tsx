"use client";

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

export function Gallery() {
  return (
    <section
      id="gallery-section"
      className="relative w-full py-12 sm:py-24 bg-transparent text-charcoal select-none overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-12 mb-6 sm:mb-10">
        <span className="section-kicker mb-2.5 sm:mb-3">Gallery</span>
        <h2 className="font-display text-2xl sm:text-5xl font-normal text-deep-navy tracking-tight">
          The grounds, in motion
        </h2>
      </div>
      <div className="relative w-full overflow-hidden">
        <TiltedGridHero
          images={ALL_GALLERY_IMAGES}
          speed={3.5}
          tileHeight={32}
          aspectRatio={16 / 9}
          gap={5}
          axis={54}
          curve={75}
          fade={0}
          className="h-[380px] sm:h-[620px] lg:h-[700px] w-full"
        />
      </div>
    </section>
  );
}

export default Gallery;
