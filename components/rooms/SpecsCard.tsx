"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { RoomItem } from "@/lib/rooms-data";

const SpecsDialog = dynamic(
  () => import("./SpecsDialog").then((m) => m.SpecsDialog),
  { ssr: false }
);

interface SpecsCardProps {
  room: RoomItem;
}

export function SpecsCard({ room }: SpecsCardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <div className="w-full bg-white/70 border border-charcoal/10 rounded-[1.6rem] transition-all duration-500 shadow-[0_18px_40px_-30px_rgba(11,34,56,0.35)] overflow-hidden mb-3 lg:mb-3.5">
        {/* Card Body */}
        <div className="p-3.5 sm:p-4 text-charcoal space-y-2.5">
          <p className="font-sans text-xs leading-relaxed text-charcoal/85 line-clamp-2 sm:line-clamp-none">
            {room.shortDescription}
          </p>

          {/* Key Specs Pill Bar */}
          <div className="grid grid-cols-3 gap-2 pt-0.5 text-[10px] sm:text-[11px] font-sans">
            <div className="px-2 py-1.5 bg-warm-ivory/60 border border-charcoal/10 rounded-xl">
              <span className="text-charcoal/50 block text-[9px] uppercase tracking-wider">Space</span>
              <span className="font-medium text-deep-navy truncate block">{room.size}</span>
            </div>
            <div className="px-2 py-1.5 bg-warm-ivory/60 border border-charcoal/10 rounded-xl">
              <span className="text-charcoal/50 block text-[9px] uppercase tracking-wider">Bed</span>
              <span className="font-medium text-deep-navy truncate block">{room.bedType}</span>
            </div>
            <div className="px-2 py-1.5 bg-warm-ivory/60 border border-charcoal/10 rounded-xl">
              <span className="text-charcoal/50 block text-[9px] uppercase tracking-wider">Guests</span>
              <span className="font-medium text-deep-navy truncate block">Up to {room.guests}</span>
            </div>
          </div>

          {/* View full specs trigger */}
          <button
            onClick={() => setIsDialogOpen(true)}
            className="text-[10px] sm:text-[11px] font-sans font-medium text-champagne-gold hover:text-deep-navy flex items-center gap-1 pt-0.5 tracking-wide transition-colors cursor-pointer"
          >
            <span>View full suite details & amenities</span>
            <span>→</span>
          </button>
        </div>
      </div>

      {/* Full Specifications Dialog Modal (lazy chunk on first open) */}
      {isDialogOpen && (
        <SpecsDialog
          room={room}
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
        />
      )}
    </>
  );
}
