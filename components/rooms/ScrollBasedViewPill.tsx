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
      className="group flex items-center gap-4 bg-deep-navy/90 hover:bg-deep-navy text-warm-ivory px-5 py-3 rounded-full border border-champagne-gold/30 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-105 cursor-pointer select-none"
    >
      {/* Scroll Hint */}
      <span className="font-sans text-[10px] uppercase tracking-wider text-champagne-gold font-medium">
        {isAtEnd ? "Scroll to Start" : "Scroll / View"}
      </span>

      {/* Progress Line */}
      <div className="w-12 h-[2px] bg-warm-ivory/20 rounded-full overflow-hidden relative">
        <div
          className="h-full bg-champagne-gold transition-all duration-500 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Counter */}
      <span className="font-sans text-xs tracking-wider text-warm-ivory/90 font-mono">
        {currentFormatted} / {totalFormatted}
      </span>

      {/* Advance Arrow */}
      <div
        className={`text-champagne-gold transition-transform duration-300 ${
          isAtEnd ? "rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1"
        }`}
      >
        <ArrowRightIcon size={14} strokeWidth={1.5} />
      </div>
    </button>
  );
}
