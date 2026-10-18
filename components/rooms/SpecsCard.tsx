"use client";

import React, { useState } from "react";
import { MagnifierIcon, CloseIcon } from "../icons";
import { RoomItem } from "@/lib/rooms-data";
import { SpecsDialog } from "./SpecsDialog";

interface SpecsCardProps {
  room: RoomItem;
}

export function SpecsCard({ room }: SpecsCardProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <div className="w-full bg-white/70 backdrop-blur-sm border border-charcoal/20 rounded-[2px] transition-all duration-300 shadow-sm overflow-hidden mb-6">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 hairline-b border-charcoal/15 bg-warm-ivory/50">
          <div
            onClick={() => isCollapsed && setIsCollapsed(false)}
            className={`flex items-center gap-2 ${isCollapsed ? "cursor-pointer" : ""}`}
          >
            <span className="font-sans text-[11px] uppercase tracking-wider text-charcoal/80 font-medium">
              About / specifications
            </span>
          </div>

          <div className="flex items-center gap-1">
            {/* Magnifier opens the full specs dialog */}
            <button
              onClick={() => setIsDialogOpen(true)}
              aria-label="Open full room specifications dialog"
              className="p-1.5 text-charcoal/60 hover:text-champagne-gold transition-colors cursor-pointer"
            >
              <MagnifierIcon size={16} strokeWidth={1.5} />
            </button>

            {/* Close collapses card to a slim bar */}
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              aria-label={isCollapsed ? "Expand specifications" : "Collapse specifications"}
              className="p-1.5 text-charcoal/60 hover:text-charcoal transition-colors cursor-pointer"
            >
              <CloseIcon size={16} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Card Body (Visible by default) */}
        {!isCollapsed ? (
          <div className="p-5 sm:p-6 text-charcoal space-y-4">
            <p className="font-sans text-xs sm:text-sm leading-relaxed text-charcoal/85">
              {room.shortDescription}
            </p>

            {/* Key Specs Pill Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2 text-[11px] font-sans">
              <div className="p-2 bg-warm-ivory/60 border border-charcoal/10 rounded-[2px]">
                <span className="text-charcoal/50 block text-[10px] uppercase">Space</span>
                <span className="font-medium text-deep-navy">{room.size}</span>
              </div>
              <div className="p-2 bg-warm-ivory/60 border border-charcoal/10 rounded-[2px]">
                <span className="text-charcoal/50 block text-[10px] uppercase">Bed</span>
                <span className="font-medium text-deep-navy">{room.bedType}</span>
              </div>
              <div className="p-2 bg-warm-ivory/60 border border-charcoal/10 rounded-[2px] col-span-2 sm:col-span-1">
                <span className="text-charcoal/50 block text-[10px] uppercase">Guests</span>
                <span className="font-medium text-deep-navy">Up to {room.guests}</span>
              </div>
            </div>

            {/* View full specs trigger */}
            <button
              onClick={() => setIsDialogOpen(true)}
              className="text-[11px] font-sans font-medium text-champagne-gold hover:text-deep-navy flex items-center gap-1 pt-1 tracking-wide transition-colors cursor-pointer"
            >
              <span>View full suite details & amenities</span>
              <span>→</span>
            </button>
          </div>
        ) : (
          <div
            onClick={() => setIsCollapsed(false)}
            className="px-5 py-2 text-[11px] text-charcoal/50 font-sans cursor-pointer hover:bg-warm-ivory/40 transition-colors"
          >
            Click to expand room specifications...
          </div>
        )}
      </div>

      {/* Full Specifications Dialog Modal */}
      <SpecsDialog
        room={room}
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </>
  );
}
