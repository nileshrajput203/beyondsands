"use client";

import { useEffect } from "react";
import { CloseIcon, WhatsAppIcon } from "../icons";
import { RESORT_MENU } from "@/lib/dining-data";
import { Phone, UtensilsCrossed } from "lucide-react";

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
      aria-label="Resort Dining Menu & Contact"
      className="fixed inset-0 z-[85] overflow-hidden"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-deep-navy/70 backdrop-blur-sm transition-opacity"
      />

      {/* Slide-over Panel from right */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-lg bg-deep-navy text-warm-ivory shadow-2xl p-6 sm:p-10 flex flex-col justify-between overflow-y-auto hairline-l border-champagne-gold/20">
          <div>
            {/* Header */}
            <div className="flex items-center justify-between pb-6 hairline-b border-champagne-gold/20 mb-6">
              <div>
                <span className="text-champagne-gold text-[11px] uppercase tracking-widest font-sans font-medium block mb-1">
                  100% Pure Veg Sanctuary
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-normal text-warm-ivory tracking-wide">
                  Contact for Menu
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

            {/* No Fixed Menu Explanatory Notice */}
            <div className="p-4 rounded-xl bg-champagne-gold/10 border border-champagne-gold/30 mb-8 font-sans">
              <div className="flex items-center gap-2 text-champagne-gold text-xs font-semibold uppercase tracking-wider mb-1.5">
                <UtensilsCrossed className="w-4 h-4" />
                <span>Daily Rotating Fresh Kitchen</span>
              </div>
              <p className="text-xs text-warm-ivory/85 leading-relaxed font-light">
                We do not serve a static fixed menu. Our kitchen prepares wholesome, fresh coastal and North Indian vegetarian meals crafted daily around the morning&apos;s fresh market produce.
              </p>
              <p className="text-xs text-champagne-gold/90 mt-2 font-medium">
                Please contact our kitchen team directly for today&apos;s live menu or custom group / Jain requirements.
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              <a
                href={`https://wa.me/919923895055?text=${encodeURIComponent(
                  "Hi Beyond Sands! I'm inquiring about today's pure veg dining menu and meal options."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#159b4d] hover:bg-[#128341] text-white font-sans text-xs uppercase tracking-wider font-semibold py-3 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <WhatsAppIcon size={16} />
                <span>WhatsApp for Menu</span>
              </a>

              <a
                href="tel:+919923895055"
                className="w-full bg-champagne-gold hover:bg-champagne-gold/90 text-deep-navy font-sans text-xs uppercase tracking-wider font-semibold py-3 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>Call Kitchen</span>
              </a>
            </div>

            {/* Sample Daily Offerings */}
            <div className="space-y-8 font-sans">
              <div className="border-b border-champagne-gold/20 pb-2">
                <span className="font-sans text-[11px] uppercase tracking-wider text-warm-ivory/60">
                  Sample Daily Highlights (Changes Daily)
                </span>
              </div>

              {RESORT_MENU.map((section, sIdx) => (
                <div key={sIdx} className="space-y-3">
                  <div className="flex items-baseline justify-between hairline-b border-champagne-gold/15 pb-2">
                    <h3 className="font-display text-lg sm:text-xl font-normal text-champagne-gold">
                      {section.title}
                    </h3>
                    <span className="text-[10px] uppercase tracking-wider text-warm-ivory/50">
                      {section.timing}
                    </span>
                  </div>

                  <p className="text-xs text-warm-ivory/70 font-light">
                    {section.description}
                  </p>

                  <div className="space-y-2.5 pt-1">
                    {section.items.map((item, iIdx) => (
                      <div key={iIdx} className="flex justify-between items-baseline gap-4 py-1 hairline-b border-warm-ivory/5">
                        <div>
                          <p className="text-xs sm:text-sm font-medium text-warm-ivory">
                            {item.name}
                          </p>
                          <p className="text-[11px] text-warm-ivory/60 font-light mt-0.5">
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
          <div className="pt-6 mt-8 hairline-t border-champagne-gold/20 flex flex-col gap-3 text-center">
            <p className="text-xs text-warm-ivory/70">
              Customized Jain, Swaminarayan, and celebration catering available on prior notice.
            </p>
            <a
              href={`https://wa.me/919923895055?text=${encodeURIComponent(
                "Hi Beyond Sands! Please share today's menu and meal packages for my stay."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-champagne-gold hover:bg-champagne-gold/90 text-deep-navy font-sans text-xs uppercase tracking-widest font-semibold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <WhatsAppIcon size={16} />
              <span>Contact for Today&apos;s Menu</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuDrawer;
