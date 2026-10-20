"use client";

import { useState } from "react";
import { RoomItem } from "@/lib/rooms-data";
import { WhatsAppIcon } from "../icons";

interface PriceCalculatorProps {
  room: RoomItem;
}

export function PriceCalculator({ room }: PriceCalculatorProps) {
  // Today's date in YYYY-MM-DD
  const today = new Date().toISOString().split("T")[0];
  const tomorrowDate = new Date(Date.now() + 86400000).toISOString().split("T")[0];
  const nextDayDate = new Date(Date.now() + 2 * 86400000).toISOString().split("T")[0];

  const [checkIn, setCheckIn] = useState<string>(tomorrowDate);
  const [checkOut, setCheckOut] = useState<string>(nextDayDate);
  const [guests, setGuests] = useState<number>(2);

  // Calculate nights (always at least 1)
  const diffTime = new Date(checkOut).getTime() - new Date(checkIn).getTime();
  const nights = Math.max(1, Math.round(diffTime / (1000 * 60 * 60 * 24)) || 1);

  const totalEstimate = nights * room.price;

  const handleBooking = () => {
    const text = encodeURIComponent(
      `Hi Beyond Sands! I'd like to book the ${room.name} (${room.priceFormatted}/night).\n` +
      `Check-in: ${checkIn}\n` +
      `Check-out: ${checkOut}\n` +
      `Duration: ${nights} ${nights === 1 ? "night" : "nights"}\n` +
      `Guests: ${guests}\n` +
      `Estimated Total: ₹${totalEstimate.toLocaleString()} (taxes as applicable)\n` +
      `Can you confirm availability and payment details?`
    );

    window.open(`https://wa.me/919923895055?text=${text}`, "_blank");
  };

  return (
    <div className="w-full bg-white/70 border border-charcoal/10 rounded-2xl sm:rounded-[1.6rem] p-3 sm:p-5 shadow-[0_18px_40px_-30px_rgba(11,34,56,0.35)] font-sans">
      {/* Pricing Header */}
      <div className="flex items-baseline justify-between hairline-b border-charcoal/15 pb-2 mb-2 sm:mb-3">
        <div>
          <span className="text-[9.5px] sm:text-[11px] uppercase tracking-wider text-charcoal/60 font-medium block">
            Pricing / night
          </span>
          <div className="flex items-baseline gap-2 mt-0.5">
            <span className="font-display text-xl sm:text-3xl font-normal text-deep-navy">
              {room.priceFormatted}
            </span>
            <span className="text-[11px] sm:text-xs text-charcoal/50 line-through">
              {room.originalPrice}
            </span>
          </div>
        </div>

        <span className="text-[9.5px] sm:text-[11px] font-sans font-semibold tracking-wider px-2 py-0.5 sm:px-2.5 sm:py-1 bg-champagne-gold/20 text-deep-navy border border-champagne-gold/30 rounded-lg sm:rounded-xl">
          {room.discountPercent}% OFF
        </span>
      </div>

      {/* Date Selector & Guest Selector */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 sm:gap-2 mb-2 sm:mb-3">
        <div>
          <label htmlFor={`checkin-${room.id}`} className="block text-[8.5px] sm:text-[10px] uppercase tracking-wider text-charcoal/60 mb-0.5">
            Check-in Date
          </label>
          <input
            id={`checkin-${room.id}`}
            type="date"
            min={today}
            value={checkIn}
            onChange={(e) => {
              setCheckIn(e.target.value);
              if (new Date(e.target.value) >= new Date(checkOut)) {
                const next = new Date(new Date(e.target.value).getTime() + 86400000)
                  .toISOString()
                  .split("T")[0];
                setCheckOut(next);
              }
            }}
            className="w-full bg-warm-ivory/60 border border-charcoal/15 rounded-lg sm:rounded-xl px-2 py-1 sm:py-1.5 text-[11px] sm:text-xs text-deep-navy focus:border-champagne-gold focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label htmlFor={`checkout-${room.id}`} className="block text-[8.5px] sm:text-[10px] uppercase tracking-wider text-charcoal/60 mb-0.5">
            Check-out Date
          </label>
          <input
            id={`checkout-${room.id}`}
            type="date"
            min={checkIn || today}
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full bg-warm-ivory/60 border border-charcoal/15 rounded-lg sm:rounded-xl px-2 py-1 sm:py-1.5 text-[11px] sm:text-xs text-deep-navy focus:border-champagne-gold focus:outline-none transition-colors"
          />
        </div>

        <div className="col-span-2 sm:col-span-1">
          <label htmlFor={`guests-${room.id}`} className="block text-[8.5px] sm:text-[10px] uppercase tracking-wider text-charcoal/60 mb-0.5">
            Guests
          </label>
          <select
            id={`guests-${room.id}`}
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className="w-full bg-warm-ivory/60 border border-charcoal/15 rounded-lg sm:rounded-xl px-2 py-1 sm:py-1.5 text-[11px] sm:text-xs text-deep-navy focus:border-champagne-gold focus:outline-none transition-colors"
          >
            {Array.from({ length: room.guests }, (_, i) => i + 1).map((g) => (
              <option key={g} value={g}>
                {g} {g === 1 ? "Guest" : "Guests"}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Real-time Calculation Breakdown */}
      <div className="bg-warm-ivory/50 rounded-lg sm:rounded-xl p-2 sm:p-3 hairline-all border-charcoal/10 space-y-1 mb-2 sm:mb-3 text-[11px] sm:text-xs">
        <div className="flex justify-between text-charcoal/70">
          <span>
            {room.priceFormatted} × {nights} {nights === 1 ? "night" : "nights"}
          </span>
          <span className="font-medium text-deep-navy">
            ₹{(nights * room.price).toLocaleString()}
          </span>
        </div>
        <div className="flex justify-between text-[9.5px] sm:text-[11px] text-charcoal/50">
          <span>Taxes & Fees</span>
          <span>Taxes as applicable</span>
        </div>
        <div className="hairline-t border-charcoal/10 pt-1 flex justify-between font-semibold text-deep-navy text-[11px] sm:text-sm">
          <span>Estimated Total</span>
          <span className="font-display text-xs sm:text-base">₹{totalEstimate.toLocaleString()}</span>
        </div>
      </div>

      {/* Booking Action */}
      <button
        onClick={handleBooking}
        className="w-full bg-deep-navy hover:bg-navy-blue text-warm-ivory py-2 sm:py-3 rounded-full font-sans text-[11px] sm:text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-1.5 sm:gap-2 transition-all duration-500 ease-luxury cursor-pointer"
      >
        <WhatsAppIcon size={14} />
        <span>Book Suite Directly</span>
      </button>

      <p className="text-[8.5px] sm:text-[10px] text-center text-charcoal/50 mt-1 sm:mt-1.5 font-light">
        Instant reservation confirmation via official resort desk.
      </p>
    </div>
  );
}
