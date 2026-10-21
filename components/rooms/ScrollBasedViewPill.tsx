"use client";

import { ArrowRightIcon } from "../icons";

interface ScrollBasedViewPillProps {
  currentIndex: number;
  totalRooms: number;
  onNext: () => void;
}

export function ScrollBasedViewPill({
  currentIndex,
  totalRooms,
  onNext,
}: ScrollBasedViewPillProps) {
  const currentFormatted = String(currentIndex + 1).padStart(2, "0");
  const totalFormatted = String(totalRooms).padStart(2, "0");
  const progressPercent = ((currentIndex + 1) / totalRooms) * 100;
  const isAtEnd = currentIndex >= totalRooms - 1;

  return (
    <button
      onClick={onNext}
      aria-label={isAtEnd ? "Scroll all the way back to first room" : "Scroll all the way through rooms"}
      className="group flex items-center gap-1.5 sm:gap-4 bg-deep-navy/95 hover:bg-deep-navy text-warm-ivory px-2.5 sm:px-5 py-1.5 sm:py-3 rounded-full border border-champagne-gold/30 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-105 cursor-pointer select-none shrink-0"
    >
      {/* Scroll Hint */}
      <span className="font-sans text-[8.5px] sm:text-[10px] uppercase tracking-wider text-champagne-gold font-medium whitespace-nowrap shrink-0">
        <span className="inline sm:hidden">Suite</span>
        <span className="hidden sm:inline">{isAtEnd ? "Scroll to Start" : "Scroll / View"}</span>
      </span>

      {/* Progress Line */}
      <div className="w-6 sm:w-12 h-[2px] bg-warm-ivory/20 rounded-full overflow-hidden relative shrink-0">
        <div
          className="h-full bg-champagne-gold transition-all duration-500 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Counter */}
      <span className="font-sans text-[10px] sm:text-xs tracking-wider text-warm-ivory/90 font-mono whitespace-nowrap shrink-0">
        {currentFormatted} / {totalFormatted}
      </span>

      {/* Advance Arrow */}
      <div
        className={`text-champagne-gold transition-transform duration-300 shrink-0 ${
          isAtEnd ? "rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1"
        }`}
      >
        <ArrowRightIcon size={13} strokeWidth={1.5} />
      </div>
    </button>
  );
}
