"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { CloseIcon, ChevronLeftIcon, ChevronRightIcon } from "../icons";
import { GalleryItem } from "@/lib/gallery-data";

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function Lightbox({
  items,
  currentIndex,
  onClose,
  onNavigate,
}: LightboxProps) {
  const isOpen = currentIndex !== null;

  const handlePrev = useCallback(() => {
    if (currentIndex === null) return;
    const prev = (currentIndex - 1 + items.length) % items.length;
    onNavigate(prev);
  }, [currentIndex, items.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex === null) return;
    const next = (currentIndex + 1) % items.length;
    onNavigate(next);
  }, [currentIndex, items.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") handlePrev();
      else if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || currentIndex === null) return null;

  const currentItem = items[currentIndex];
  const counterStr = `${String(currentIndex + 1).padStart(2, "0")} / ${String(
    items.length
  ).padStart(2, "0")}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Gallery Lightbox Inspection"
      className="fixed inset-0 z-[95] bg-deep-navy/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8 select-none"
    >
      {/* Top Bar: Counter & Close */}
      <div className="flex items-center justify-between z-20">
        <span className="font-sans text-xs tracking-widest text-champagne-gold font-mono">
          {counterStr} · {currentItem.category}
        </span>

        <button
          onClick={onClose}
          aria-label="Close lightbox"
          className="p-2.5 text-warm-ivory/70 hover:text-champagne-gold transition-colors cursor-pointer"
        >
          <CloseIcon size={24} strokeWidth={1.25} />
        </button>
      </div>

      {/* Main Image Stage */}
      <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          aria-label="Previous photograph"
          className="absolute left-2 sm:left-6 z-20 p-3 rounded-full bg-deep-navy/40 hover:bg-deep-navy border border-warm-ivory/20 hover:border-champagne-gold text-warm-ivory transition-all cursor-pointer"
        >
          <ChevronLeftIcon size={22} strokeWidth={1.5} />
        </button>

        <div className="relative w-full max-w-5xl h-[65vh] sm:h-[75vh] p-2 flex items-center justify-center">
          <div className="relative w-full h-full rounded-[2px] overflow-hidden border border-warm-ivory/20 shadow-2xl">
            <Image
              src={currentItem.src}
              alt={currentItem.title}
              fill
              sizes="(max-width: 1024px) 100vw, 80vw"
              className="object-contain object-center luxury-grade"
              priority
            />
          </div>
        </div>

        <button
          onClick={handleNext}
          aria-label="Next photograph"
          className="absolute right-2 sm:right-6 z-20 p-3 rounded-full bg-deep-navy/40 hover:bg-deep-navy border border-warm-ivory/20 hover:border-champagne-gold text-warm-ivory transition-all cursor-pointer"
        >
          <ChevronRightIcon size={22} strokeWidth={1.5} />
        </button>
      </div>

      {/* Bottom Bar: Title & Caption */}
      <div className="max-w-3xl mx-auto text-center pb-2 z-20 space-y-1">
        <h3 className="font-display text-xl sm:text-2xl font-normal text-warm-ivory">
          {currentItem.title}
        </h3>
        <p className="font-sans text-xs sm:text-sm text-warm-ivory/70 font-light">
          {currentItem.description}
        </p>
      </div>
    </div>
  );
}
