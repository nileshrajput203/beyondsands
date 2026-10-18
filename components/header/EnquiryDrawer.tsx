"use client";

import React, { useState, useEffect } from "react";
import { CloseIcon, WhatsAppIcon } from "../icons";
import { ROOMS_DATA } from "@/lib/rooms-data";

interface EnquiryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  defaultRoom?: string;
}

export function EnquiryDrawer({ isOpen, onClose, defaultRoom }: EnquiryDrawerProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "2",
    roomType: defaultRoom || "Garden View Room",
    message: "",
  });

  useEffect(() => {
    if (defaultRoom) {
      setFormData((prev) => ({ ...prev, roomType: defaultRoom }));
    }
  }, [defaultRoom]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `*New Reservation Enquiry — Beyond Sands*\n` +
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Room Category: ${formData.roomType}\n` +
      `Check-in: ${formData.checkIn || "Flexible"}\n` +
      `Check-out: ${formData.checkOut || "Flexible"}\n` +
      `Guests: ${formData.guests}\n` +
      `Notes: ${formData.message || "Please share rate & availability."}`
    );

    window.open(`https://wa.me/919923895055?text=${text}`, "_blank");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Reservation Enquiry"
      className="fixed inset-0 z-[80] overflow-hidden"
    >
      {/* Dimmed backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-deep-navy/60 backdrop-blur-sm transition-opacity"
      />

      {/* Slide-over panel from right */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-deep-navy text-warm-ivory shadow-2xl p-8 sm:p-10 flex flex-col justify-between overflow-y-auto hairline-l border-champagne-gold/20">
          <div>
            {/* Header */}
            <div className="flex items-center justify-between pb-6 hairline-b border-champagne-gold/20 mb-8">
              <div>
                <span className="text-champagne-gold text-[11px] uppercase tracking-widest font-sans font-medium block mb-1">
                  Direct Concierge
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-normal text-warm-ivory tracking-wide">
                  Enquiry Now
                </h2>
              </div>
              <button
                onClick={onClose}
                aria-label="Close panel"
                className="p-2 text-warm-ivory/70 hover:text-champagne-gold transition-colors"
              >
                <CloseIcon size={22} strokeWidth={1.25} />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5 font-sans">
              <div>
                <label htmlFor="enquiry-name" className="block text-xs uppercase tracking-wider text-warm-ivory/70 mb-2">
                  Full Name *
                </label>
                <input
                  id="enquiry-name"
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full bg-navy-blue/40 border border-champagne-gold/30 rounded-[2px] px-4 py-3 text-sm text-warm-ivory placeholder-warm-ivory/30 focus:border-champagne-gold focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="enquiry-phone" className="block text-xs uppercase tracking-wider text-warm-ivory/70 mb-2">
                  Phone / WhatsApp Number *
                </label>
                <input
                  id="enquiry-phone"
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full bg-navy-blue/40 border border-champagne-gold/30 rounded-[2px] px-4 py-3 text-sm text-warm-ivory placeholder-warm-ivory/30 focus:border-champagne-gold focus:outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="enquiry-checkin" className="block text-xs uppercase tracking-wider text-warm-ivory/70 mb-2">
                    Check-in
                  </label>
                  <input
                    id="enquiry-checkin"
                    type="date"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleChange}
                    className="w-full bg-navy-blue/40 border border-champagne-gold/30 rounded-[2px] px-3 py-3 text-xs text-warm-ivory focus:border-champagne-gold focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="enquiry-checkout" className="block text-xs uppercase tracking-wider text-warm-ivory/70 mb-2">
                    Check-out
                  </label>
                  <input
                    id="enquiry-checkout"
                    type="date"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleChange}
                    className="w-full bg-navy-blue/40 border border-champagne-gold/30 rounded-[2px] px-3 py-3 text-xs text-warm-ivory focus:border-champagne-gold focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="enquiry-guests" className="block text-xs uppercase tracking-wider text-warm-ivory/70 mb-2">
                    Guests
                  </label>
                  <select
                    id="enquiry-guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full bg-navy-blue/40 border border-champagne-gold/30 rounded-[2px] px-3 py-3 text-xs text-warm-ivory focus:border-champagne-gold focus:outline-none transition-colors"
                  >
                    {[1, 2, 3, 4, 5, 6, 8, 10, 15].map((g) => (
                      <option key={g} value={g} className="bg-deep-navy text-warm-ivory">
                        {g} {g === 1 ? "Guest" : "Guests"}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="enquiry-room" className="block text-xs uppercase tracking-wider text-warm-ivory/70 mb-2">
                    Room Suite
                  </label>
                  <select
                    id="enquiry-room"
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleChange}
                    className="w-full bg-navy-blue/40 border border-champagne-gold/30 rounded-[2px] px-3 py-3 text-xs text-warm-ivory focus:border-champagne-gold focus:outline-none transition-colors"
                  >
                    {ROOMS_DATA.map((r) => (
                      <option key={r.id} value={r.name} className="bg-deep-navy text-warm-ivory">
                        {r.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="enquiry-message" className="block text-xs uppercase tracking-wider text-warm-ivory/70 mb-2">
                  Special Requests / Notes
                </label>
                <textarea
                  id="enquiry-message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about special occasions, meal preferences, or questions..."
                  className="w-full bg-navy-blue/40 border border-champagne-gold/30 rounded-[2px] px-4 py-3 text-sm text-warm-ivory placeholder-warm-ivory/30 focus:border-champagne-gold focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-champagne-gold hover:bg-champagne-gold/90 text-deep-navy font-sans text-xs uppercase tracking-widest font-semibold py-4 rounded-[2px] transition-all flex items-center justify-center gap-2 mt-4 cursor-pointer"
              >
                <WhatsAppIcon size={16} />
                <span>Submit via WhatsApp Concierge</span>
              </button>
            </form>
          </div>

          <div className="pt-6 hairline-t border-champagne-gold/15 text-center text-[11px] text-warm-ivory/50">
            Official reservations desk response within minutes.
          </div>
        </div>
      </div>
    </div>
  );
}
