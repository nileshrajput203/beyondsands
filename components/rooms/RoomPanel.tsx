"use client";

import React, { useState } from "react";
import Image from "next/image";
import { RoomItem } from "@/lib/rooms-data";
import { SpecsCard } from "./SpecsCard";
import { PriceCalculator } from "./PriceCalculator";

interface RoomPanelProps {
  room: RoomItem;
}

export function RoomPanel({ room }: RoomPanelProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Take first 5 images for the 5-thumbnail vertical strip
  const displayThumbnails = room.images.slice(0, 5);

  return (
    <div className="w-full flex-shrink-0 px-4 sm:px-8 md:px-12 py-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* GALLERY (Columns 1 to 6) */}
        <div className="lg:col-span-7 flex flex-col sm:flex-row gap-3 items-stretch relative">
          {/* Main 4:5 Portrait Image (80% on desktop) with unclipped overlapping numeral */}
          <div className="relative flex-1 aspect-[4/5] max-h-[min(540px,65vh)]">
            <div className="relative w-full h-full overflow-hidden rounded-[2px] border border-charcoal/15 bg-charcoal/5 shadow-sm group">
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
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center luxury-grade"
                  />
                </div>
              ))}

              {/* Room Title Overlay Badge on top-left of photo */}
              <div className="absolute top-4 left-4 z-20 pointer-events-none">
                <span className="px-3 py-1 bg-deep-navy/80 backdrop-blur-md text-warm-ivory text-xs font-sans uppercase tracking-widest font-medium border border-warm-ivory/20 rounded-[2px] shadow-sm">
                  {room.name}
                </span>
              </div>
            </div>

            {/* Overlapping Large Cormorant Numeral "1.", "2." overlapping bottom-right corner */}
            <div className="absolute -bottom-6 right-2 sm:-right-4 z-20 pointer-events-none select-none">
              <span className="font-display-numeral text-deep-navy font-normal tracking-tighter drop-shadow-[0_2px_10px_rgba(248,246,241,0.9)]">
                {room.numeral}
              </span>
            </div>
          </div>

          {/* 5-Thumbnail Vertical Strip Flush Against Right Edge (1/5th height each on desktop) */}
          <div className="flex flex-row sm:flex-col gap-2 sm:w-24 w-full self-stretch justify-between">
            {displayThumbnails.map((thumb, idx) => {
              const isActive = idx === activeImageIndex;
              return (
                <button
                  key={thumb.src}
                  onClick={() => setActiveImageIndex(idx)}
                  aria-label={`View photo ${idx + 1} of ${room.name}`}
                  className={`relative flex-1 min-h-0 w-full aspect-[4/3] sm:aspect-auto rounded-[2px] overflow-hidden border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "border-champagne-gold ring-2 ring-champagne-gold/50 shadow-sm"
                      : "border-charcoal/20 hover:border-champagne-gold/60 opacity-80 hover:opacity-100"
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
