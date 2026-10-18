"use client";

import React, { useEffect } from "react";
import { CloseIcon, WhatsAppIcon } from "../icons";
import { RoomItem } from "@/lib/rooms-data";

interface SpecsDialogProps {
  room: RoomItem;
  isOpen: boolean;
  onClose: () => void;
}

export function SpecsDialog({ room, isOpen, onClose }: SpecsDialogProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${room.name} Full Specifications`}
      className="fixed inset-0 z-[90] flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-deep-navy/70 backdrop-blur-sm transition-opacity"
      />

      {/* Dialog Body */}
      <div className="relative w-full max-w-2xl bg-warm-ivory text-charcoal shadow-2xl p-6 sm:p-10 hairline-all border-champagne-gold/30 rounded-[2px] z-10 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-start justify-between pb-6 hairline-b border-charcoal/15 mb-6">
          <div>
            <span className="font-sans text-xs uppercase tracking-widest text-champagne-gold font-semibold">
              Suite Specifications · {room.index}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-normal text-deep-navy mt-1">
              {room.name}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close specifications dialog"
            className="p-2 text-charcoal/60 hover:text-charcoal transition-colors cursor-pointer"
          >
            <CloseIcon size={22} strokeWidth={1.25} />
          </button>
        </div>

        {/* Narrative Description */}
        <div className="mb-8">
          <h3 className="font-sans text-xs uppercase tracking-wider text-deep-navy/60 font-semibold mb-2">
            The Living Space
          </h3>
          <p className="font-sans text-sm sm:text-base leading-relaxed text-charcoal/85">
            {room.longDescription}
          </p>
        </div>

        {/* Two-Column Hairline Specs Grid */}
        <div className="mb-8 hairline-t border-charcoal/15 pt-6">
          <h3 className="font-sans text-xs uppercase tracking-wider text-deep-navy/60 font-semibold mb-4">
            Key Architecture & Comforts
          </h3>
          <div className="grid grid-cols-2 gap-y-3 gap-x-6 text-sm font-sans">
            <div className="flex justify-between py-1 hairline-b border-charcoal/10">
              <span className="text-charcoal/60">Floor Area</span>
              <span className="font-medium text-deep-navy">{room.size}</span>
            </div>
            <div className="flex justify-between py-1 hairline-b border-charcoal/10">
              <span className="text-charcoal/60">Bedding</span>
              <span className="font-medium text-deep-navy">{room.bedType}</span>
            </div>
            <div className="flex justify-between py-1 hairline-b border-charcoal/10">
              <span className="text-charcoal/60">Max Occupancy</span>
              <span className="font-medium text-deep-navy">Up to {room.guests} Guests</span>
            </div>
            <div className="flex justify-between py-1 hairline-b border-charcoal/10">
              <span className="text-charcoal/60">Aspect / View</span>
              <span className="font-medium text-deep-navy">{room.view}</span>
            </div>
            {room.units && (
              <div className="flex justify-between py-1 hairline-b border-charcoal/10">
                <span className="text-charcoal/60">Total Keys</span>
                <span className="font-medium text-deep-navy">{room.units} Units</span>
              </div>
            )}
            <div className="flex justify-between py-1 hairline-b border-charcoal/10">
              <span className="text-charcoal/60">Check-in / Out</span>
              <span className="font-medium text-deep-navy">12:00 PM / 11:00 AM</span>
            </div>
          </div>
        </div>

        {/* Curated Amenities List */}
        <div className="mb-8">
          <h3 className="font-sans text-xs uppercase tracking-wider text-deep-navy/60 font-semibold mb-3">
            In-Room Appointments
          </h3>
          <div className="flex flex-wrap gap-2">
            {room.amenities.concat(room.features).map((amenity, idx) => (
              <span
                key={idx}
                className="text-xs font-sans tracking-wide px-3 py-1.5 bg-champagne-gold/10 text-deep-navy border border-champagne-gold/30 rounded-[2px]"
              >
                {amenity}
              </span>
            ))}
          </div>
        </div>

        {/* Direct Booking CTA */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 hairline-t border-charcoal/15">
          <div>
            <span className="text-xs text-charcoal/60 font-sans block">Starting Rate</span>
            <span className="font-display text-2xl text-deep-navy font-medium">
              {room.priceFormatted}
            </span>
            <span className="text-xs text-charcoal/60 font-sans"> / night + taxes</span>
          </div>

          <a
            href={`https://wa.me/919923895055?text=${encodeURIComponent(
              `Hi Beyond Sands! I'm interested in booking the ${room.name} at ${room.priceFormatted}/night. Please share availability and reservation details.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 bg-deep-navy text-warm-ivory hover:bg-navy-blue transition-colors rounded-[2px] font-sans text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 cursor-pointer"
          >
            <WhatsAppIcon size={16} />
            <span>Inquire Availability</span>
          </a>
        </div>
      </div>
    </div>
  );
}
