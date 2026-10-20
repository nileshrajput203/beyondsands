"use client";

import { WhatsAppIcon } from "../icons";
import { usePastHero } from "@/lib/use-past-hero";

export function WhatsAppFab() {
  const { isPastHero, isFooterVisible } = usePastHero();

  const handleClick = () => {
    const text = encodeURIComponent(
      "Hi! I'd like to inquire about booking a stay at Beyond Sands. Could you help me with availability and rates?"
    );
    window.open(`https://wa.me/919923895055?text=${text}`, "_blank");
  };

  return (
    <div
      className={`fixed bottom-4 right-3 sm:bottom-6 sm:right-6 z-[60] transition-all duration-700 ease-luxury ${
        isPastHero ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-3 pointer-events-none"
      } ${isFooterVisible ? "opacity-30 hover:opacity-100" : ""}`}
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <button
        onClick={handleClick}
        aria-label="Chat with Beyond Sands on WhatsApp"
        className="relative group w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_18px_40px_-16px_rgba(37,211,102,0.7)] transition-transform duration-500 ease-luxury hover:scale-105 cursor-pointer"
      >
        <span className="sm:hidden flex items-center justify-center">
          <WhatsAppIcon size={20} />
        </span>
        <span className="hidden sm:flex items-center justify-center">
          <WhatsAppIcon size={24} />
        </span>
      </button>
    </div>
  );
}
