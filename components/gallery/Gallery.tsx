"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GALLERY_ITEMS, GalleryItem } from "@/lib/gallery-data";
import { Lightbox } from "./Lightbox";

type CategoryFilter = "All" | "Rooms" | "Nature" | "Amenities" | "Architecture";

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories: CategoryFilter[] = [
    "All",
    "Rooms",
    "Nature",
    "Amenities",
    "Architecture",
  ];

  const filteredItems =
    activeCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <>
      <section
        id="gallery-section"
        className="relative w-full py-24 px-6 sm:px-12 bg-gradient-to-b from-[#091D30] via-[#071727] to-[#05121E] text-warm-ivory border-t border-warm-ivory/10 select-none overflow-hidden"
      >
        {/* Subtle night ambience background glow */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-25 bg-[radial-gradient(ellipse_at_top,rgba(196,154,101,0.18),transparent_65%)]"
        />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-6 mb-12 border-b border-warm-ivory/20 pb-5">
            <div className="flex items-baseline gap-4">
              <span className="font-sans text-xs uppercase tracking-widest text-champagne-gold font-semibold">
                04
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal text-warm-ivory tracking-wide drop-shadow-sm">
                RESORT GALLERY
              </h2>
            </div>

            {/* Live Site Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 font-sans text-xs uppercase tracking-wider">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`py-2 px-4 rounded-[2px] transition-all cursor-pointer font-medium tracking-wider ${
                    activeCategory === cat
                      ? "bg-champagne-gold text-deep-navy font-semibold shadow-md"
                      : "text-warm-ivory/80 hover:text-warm-ivory hover:bg-warm-ivory/10 border border-warm-ivory/25"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

        {/* Editorial Masonry Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => {
            // Asymmetric aspect ratio rhythm
            const isTall = idx % 5 === 0 || idx % 7 === 0;
            const isWide = idx % 4 === 0 && !isTall;

            return (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(idx)}
                className={`relative group overflow-hidden rounded-[2px] border border-warm-ivory/15 hover:border-champagne-gold/60 transition-all duration-500 cursor-pointer bg-deep-navy/40 shadow-sm ${
                  isTall ? "sm:row-span-2 aspect-[3/4]" : isWide ? "aspect-[16/10]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center luxury-grade transition-transform duration-700 group-hover:scale-105"
                />

                {/* Subtle Hover Gradient & Metadata */}
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/85 via-deep-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <span className="font-sans text-[10px] uppercase tracking-widest text-champagne-gold block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-display text-lg sm:text-xl font-normal text-warm-ivory">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs text-warm-ivory/70 font-light line-clamp-1 mt-0.5">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>

      {/* Lightbox Inspection Modal */}
      <Lightbox
        items={filteredItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </>
  );
}
