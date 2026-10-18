"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { EVENT_GALLERY_ITEMS, EventGalleryItem } from "@/lib/events-gallery-data";
import { CloseIcon, WhatsAppIcon } from "@/components/icons";
import { Footer } from "@/components/footer/Footer";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Calendar,
  Users,
  MapPin,
  Utensils,
  CheckCircle2,
} from "lucide-react";

type CategoryFilter = "All" | "Weddings" | "Lawns & Decor" | "Pre-Wedding" | "Banquets & Dining";

export default function EventsGalleryPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const categories: CategoryFilter[] = [
    "All",
    "Weddings",
    "Lawns & Decor",
    "Pre-Wedding",
    "Banquets & Dining",
  ];

  const filteredItems =
    activeCategory === "All"
      ? EVENT_GALLERY_ITEMS
      : EVENT_GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const selectedPhoto = selectedIndex !== null ? filteredItems[selectedIndex] : null;

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => ((prev ?? 0) + 1) % filteredItems.length);
  }, [selectedIndex, filteredItems.length]);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => ((prev ?? 0) - 1 + filteredItems.length) % filteredItems.length);
  }, [selectedIndex, filteredItems.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, handleNext, handlePrev]);

  const handleWhatsAppInquiry = (itemTitle?: string) => {
    const subject = itemTitle ? `about ${itemTitle}` : "about hosting a celebration";
    const text = encodeURIComponent(
      `Hi Beyond Sands! I viewed your Events & Wedding Gallery (${subject}) and would like to inquire about packages, availability, and pure veg catering at the resort.`
    );
    window.open(`https://wa.me/919923895055?text=${text}`, "_blank");
  };

  return (
    <>
      <div className="min-h-[100dvh] bg-transparent text-charcoal pt-32 sm:pt-36 pb-20 select-none">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          {/* Breadcrumb Navigation */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-champagne-gold hover:text-deep-navy transition-colors mb-8 group"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            <span>Return to Home</span>
          </Link>

          {/* Page Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 hairline-b border-charcoal/15 pb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-champagne-gold/15 border border-champagne-gold/30 mb-3">
                <span className="font-sans text-[11px] font-semibold uppercase tracking-wider text-deep-navy">
                  Palghar&apos;s #1 Wedding &amp; Event Destination
                </span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-normal text-deep-navy tracking-tight leading-tight">
                EVENTS &amp; WEDDING GALLERY
              </h1>
              <p className="font-sans text-sm sm:text-base text-charcoal/70 font-light mt-3 max-w-2xl leading-relaxed">
                Explore real photographs from Beyond Sands — featuring our coastal celebration lawn, AC banquet hall, and poolside evening spaces. Directly opposite Sheetla Devi Temple with 100% pure veg &amp; Jain catering.
              </p>
            </div>

            {/* Quick Inquire Button */}
            <button
              onClick={() => handleWhatsAppInquiry()}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-champagne-gold hover:bg-[#b08752] text-deep-navy font-sans text-xs uppercase tracking-widest font-bold shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer shrink-0"
            >
              <WhatsAppIcon size={16} />
              <span>Inquire Dates &amp; Rates</span>
            </button>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setSelectedIndex(null);
                }}
                className={`py-2 px-4 rounded-full font-sans text-xs uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-deep-navy text-warm-ivory font-bold shadow-md"
                    : "bg-white/80 border border-charcoal/20 text-charcoal/80 hover:text-deep-navy hover:border-deep-navy"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid - Pure clean photos with NO overlay text */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setSelectedIndex(idx)}
                className="group relative bg-white/80 border border-charcoal/15 rounded-[20px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col hover:-translate-y-1"
              >
                {/* Pure Clean Image Container - No overlay text obscuring the photo */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-black">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 luxury-grade"
                  />

                  {/* Subtle expand icon badge in bottom-right corner */}
                  <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md text-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Card Meta Content - Below Image */}
                <div className="p-5 flex-1 flex flex-col justify-between bg-white/60">
                  <div>
                    {/* Tags row */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="font-sans text-[10px] uppercase tracking-wider text-champagne-gold font-bold">
                        {item.tag}
                      </span>
                      {item.capacity && (
                        <span className="font-sans text-[10px] text-charcoal/60 bg-charcoal/5 px-2 py-0.5 rounded-full">
                          {item.capacity}
                        </span>
                      )}
                    </div>

                    <h2 className="font-display text-lg sm:text-xl font-normal text-deep-navy mb-2 group-hover:text-champagne-gold transition-colors leading-snug">
                      {item.title}
                    </h2>
                    <p className="font-sans text-xs text-charcoal/70 leading-relaxed font-light line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 mt-4 hairline-t border-charcoal/10 flex items-center justify-between text-[11px] font-sans">
                    <span className="text-charcoal/60 font-medium">{item.category}</span>
                    <span className="text-champagne-gold font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      View Full Photo →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Event Planning Consultation Callout */}
          <div className="bg-gradient-to-r from-deep-navy via-[#0c243a] to-deep-navy text-warm-ivory rounded-[24px] p-8 sm:p-12 border border-champagne-gold/30 shadow-xl mb-12">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-champagne-gold/20 text-champagne-gold text-[10px] uppercase tracking-widest font-bold">
                  <span>Organize With Us</span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-normal text-warm-ivory">
                  Planning a Wedding, Milestone, or Corporate Retreat?
                </h2>
                <p className="font-sans text-sm text-warm-ivory/80 font-light leading-relaxed">
                  Our dedicated event planning concierge assists with sacred ritual setups directly opposite Sheetla Devi Temple, pure vegetarian Sattvic &amp; Jain catering, stage decor, and full resort buyout packages.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <button
                  onClick={() => handleWhatsAppInquiry()}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-sans text-xs uppercase tracking-widest font-bold shadow-md transition-all active:scale-95"
                >
                  <WhatsAppIcon size={16} />
                  <span>WhatsApp Event Team</span>
                </button>
                <Link
                  href="/booking"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-warm-ivory/30 hover:border-warm-ivory bg-white/10 hover:bg-white/20 text-warm-ivory font-sans text-xs uppercase tracking-wider font-semibold transition-all active:scale-95 text-center"
                >
                  <span>Book Resort Rooms</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && selectedIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[999] flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl"
        >
          {/* Backdrop Click to Close */}
          <div
            onClick={() => setSelectedIndex(null)}
            className="absolute inset-0 cursor-pointer"
          />

          {/* Previous Button (Desktop) */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Previous photo"
            className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white items-center justify-center backdrop-blur-md transition-all hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button (Desktop) */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next photo"
            className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white items-center justify-center backdrop-blur-md transition-all hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Content Frame */}
          <div
            className="relative z-10 w-full max-w-5xl max-h-[92vh] flex flex-col bg-deep-navy border border-white/20 rounded-[24px] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/50">
              <div>
                <span className="font-sans text-[10px] uppercase tracking-widest text-champagne-gold font-bold block">
                  {selectedPhoto.category} · {selectedPhoto.tag}
                </span>
                <h3 className="font-display text-xl text-warm-ivory font-normal mt-0.5">
                  {selectedPhoto.title}
                </h3>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs text-white/50 font-mono">
                  {selectedIndex + 1} / {filteredItems.length}
                </span>
                <button
                  onClick={() => setSelectedIndex(null)}
                  aria-label="Close photo preview"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <CloseIcon size={20} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Modal Main Image */}
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] max-h-[64vh] bg-black">
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                fill
                priority
                sizes="100vw"
                className="object-contain object-center"
              />
            </div>

            {/* Modal Footer Description & CTAs */}
            <div className="p-5 sm:p-6 bg-black/70 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="font-sans text-xs sm:text-sm text-warm-ivory/80 font-light max-w-2xl leading-relaxed">
                  {selectedPhoto.description}
                </p>
                {selectedPhoto.capacity && (
                  <span className="font-sans text-xs text-champagne-gold font-semibold mt-1 block">
                    Capacity: {selectedPhoto.capacity}
                  </span>
                )}
              </div>

              <button
                onClick={() => handleWhatsAppInquiry(selectedPhoto.title)}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-sans text-xs uppercase tracking-wider font-bold shadow-md transition-all active:scale-95 shrink-0"
              >
                <WhatsAppIcon size={14} />
                <span>Inquire About This Space</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
