"use client";

import React, { useEffect } from "react";
import { CloseIcon, WhatsAppIcon } from "../icons";
import { RESORT_MENU } from "@/lib/dining-data";

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MenuDrawer({ isOpen, onClose }: MenuDrawerProps) {
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
      aria-label="Resort Dining Menu"
      className="fixed inset-0 z-[85] overflow-hidden"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-deep-navy/70 backdrop-blur-sm transition-opacity"
      />

      {/* Slide-over Panel from right */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-lg bg-deep-navy text-warm-ivory shadow-2xl p-8 sm:p-10 flex flex-col justify-between overflow-y-auto hairline-l border-champagne-gold/20">
          <div>
            {/* Header */}
            <div className="flex items-center justify-between pb-6 hairline-b border-champagne-gold/20 mb-8">
              <div>
                <span className="text-champagne-gold text-[11px] uppercase tracking-widest font-sans font-medium block mb-1">
                  Culinary Heritage · Pure Veg
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-normal text-warm-ivory tracking-wide">
                  Dining Menu
                </h2>
              </div>
              <button
                onClick={onClose}
                aria-label="Close menu drawer"
                className="p-2 text-warm-ivory/70 hover:text-champagne-gold transition-colors cursor-pointer"
              >
                <CloseIcon size={24} strokeWidth={1.25} />
              </button>
            </div>

            {/* Menu Sections */}
            <div className="space-y-10 font-sans">
              {RESORT_MENU.map((section, sIdx) => (
                <div key={sIdx} className="space-y-4">
                  <div className="flex items-baseline justify-between hairline-b border-champagne-gold/15 pb-2">
                    <h3 className="font-display text-xl sm:text-2xl font-normal text-champagne-gold">
                      {section.title}
                    </h3>
                    <span className="text-[10px] uppercase tracking-wider text-warm-ivory/50">
                      {section.timing}
                    </span>
                  </div>

                  <p className="text-xs text-warm-ivory/70 italic font-light">
                    {section.description}
                  </p>

                  <div className="space-y-3 pt-2">
                    {section.items.map((item, iIdx) => (
                      <div key={iIdx} className="flex justify-between items-baseline gap-4 py-1.5 hairline-b border-warm-ivory/5">
                        <div>
                          <p className="text-sm font-medium text-warm-ivory">
                            {item.name}
                          </p>
                          <p className="text-xs text-warm-ivory/60 font-light mt-0.5">
                            {item.description}
                          </p>
                        </div>
                        <span className="text-[10px] uppercase tracking-wider text-champagne-gold/80 font-medium shrink-0">
                          {item.dietary}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Call-to-action */}
          <div className="pt-8 mt-8 hairline-t border-champagne-gold/20 flex flex-col gap-3 text-center">
            <p className="text-xs text-warm-ivory/70">
              Customised group catering and celebration dining available on request.
            </p>
            <a
              href={`https://wa.me/919923895055?text=${encodeURIComponent(
                "Hi Beyond Sands! I'm inquiring about dining and meal packages during my stay."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-champagne-gold hover:bg-champagne-gold/90 text-deep-navy font-sans text-xs uppercase tracking-widest font-semibold py-3.5 rounded-[2px] transition-all flex items-center justify-center gap-2"
            >
              <WhatsAppIcon size={16} />
              <span>Inquire With Kitchen Team</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
