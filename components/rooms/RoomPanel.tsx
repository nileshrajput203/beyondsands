"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { RoomItem } from "@/lib/rooms-data";
import { SpecsCard } from "./SpecsCard";
import { PriceCalculator } from "./PriceCalculator";

interface RoomPanelProps {
  room: RoomItem;
}

export function RoomPanel({ room }: RoomPanelProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  // Take first 5 images for the 5-thumbnail vertical strip
  const displayThumbnails = room.images.slice(0, 5);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        // Swipe left -> next image
        setActiveImageIndex((prev) => (prev + 1) % room.images.length);
      } else {
        // Swipe right -> prev image
        setActiveImageIndex((prev) => (prev - 1 + room.images.length) % room.images.length);
      }
    }
    touchStartX.current = null;
  };

  return (
    <div className="w-full flex-shrink-0 px-4 sm:px-8 md:px-12 py-2 sm:py-3 pb-24 sm:pb-28 lg:pb-3">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* GALLERY (Columns 1 to 7) */}
        <div className="lg:col-span-7 flex flex-col sm:flex-row gap-3 sm:gap-3.5 items-stretch relative">
          {/* Main Room Image with enhanced dimensions */}
          <div
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="relative w-full aspect-[16/10] sm:aspect-auto sm:flex-1 h-auto sm:h-[440px] md:h-[480px] lg:h-[520px] xl:h-[550px] max-h-[62vh] mb-3 sm:mb-0"
          >
            <div className="relative w-full h-full overflow-hidden rounded-2xl sm:rounded-[1.6rem] border border-charcoal/10 bg-charcoal/5 shadow-[0_24px_50px_-32px_rgba(11,34,56,0.45)] group">
              {room.images.map((img, idx) => (
                <div
                  key={img.src}
                  className={`absolute inset-0 transition-all duration-700 ease-out ${
                    idx === activeImageIndex
                      ? "opacity-100 scale-100 z-10"
                      : "opacity-0 scale-105 z-0 pointer-events-none"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 50vw"
                    className="object-cover object-center luxury-grade"
                    priority={idx === 0}
                  />
                </div>
              ))}

              {/* Room Title Overlay Badge on top-left of photo */}
              <div className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 z-20 pointer-events-none">
                <span className="px-2.5 py-1 sm:px-3 sm:py-1.5 bg-deep-navy/70 backdrop-blur-md text-warm-ivory text-[9.5px] sm:text-xs font-sans uppercase tracking-widest font-medium border border-warm-ivory/20 rounded-full max-w-[210px] sm:max-w-none truncate block">
                  {room.name}
                </span>
              </div>

              {/* Photo Counter Badge on mobile (e.g. 1 / 5) */}
              <div className="absolute top-2.5 right-2.5 z-20 sm:hidden pointer-events-none">
                <span className="px-2 py-0.5 bg-black/60 backdrop-blur-md text-white text-[10px] font-sans font-medium rounded-full border border-white/20">
                  {activeImageIndex + 1} / {room.images.length}
                </span>
              </div>
            </div>

            {/* Giant Golden Room Number: half on image and half outside (1., 2., 3., 4., 5.) */}
            <div className="absolute bottom-2 right-3 sm:bottom-0 sm:right-6 sm:translate-y-1/2 z-30 pointer-events-none select-none">
              <span className="font-serif font-black text-4xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-none text-[#D4AF37] block drop-shadow-sm sm:drop-shadow-none">
                {room.numeral}
              </span>
            </div>
          </div>

          {/* 5-Thumbnail Vertical Strip Flush Against Right Edge */}
          <div className="flex flex-row sm:flex-col gap-1.5 sm:gap-2 sm:w-24 lg:w-28 xl:w-32 w-full self-stretch justify-between">
            {displayThumbnails.map((thumb, idx) => {
              const isActive = idx === activeImageIndex;
              return (
                <button
                  key={thumb.src}
                  onClick={() => setActiveImageIndex(idx)}
                  aria-label={`View photo ${idx + 1} of ${room.name}`}
                  className={`relative flex-1 min-h-0 w-full aspect-[4/3] sm:aspect-auto rounded-xl sm:rounded-2xl overflow-hidden border transition-all duration-500 ease-luxury cursor-pointer ${
                    isActive
                      ? "border-champagne-gold ring-2 ring-champagne-gold/50 scale-[1.02]"
                      : "border-charcoal/15 hover:border-champagne-gold/60 opacity-80 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={thumb.src}
                    alt={thumb.alt}
                    fill
                    sizes="120px"
                    className="object-cover object-center luxury-grade"
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* DETAILS (Columns 8 to 12) */}
        <div className="lg:col-span-5 flex flex-col justify-start">
          {/* Top: About / specifications card */}
          <SpecsCard room={room} />

          {/* Below: Pricing / night + Date Selector + Calculator */}
          <PriceCalculator room={room} />
        </div>
      </div>
    </div>
  );
}
