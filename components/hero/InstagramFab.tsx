"use client";

import { InstagramIcon } from "../icons";
import { usePastHero } from "@/lib/use-past-hero";

export function InstagramFab() {
  const { isPastHero, isFooterVisible } = usePastHero();

  return (
    <div
      className={`fixed bottom-5 left-4 sm:bottom-6 sm:left-6 z-[60] transition-all duration-700 ease-luxury ${
        isPastHero ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-3 pointer-events-none"
      } ${isFooterVisible ? "opacity-30 hover:opacity-100" : ""}`}
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <a
        href="https://www.instagram.com/beyondsands/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Beyond Sands on Instagram"
        title="Follow @beyondsands on Instagram"
        className="relative group w-12 h-12 sm:w-14 sm:h-14 rounded-full text-white border border-white/20 flex items-center justify-center shadow-[0_18px_40px_-14px_rgba(225,48,108,0.75)] transition-all duration-500 ease-luxury hover:scale-110 active:scale-95 cursor-pointer"
        style={{
          background:
            "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
        }}
      >
        <InstagramIcon size={24} strokeWidth={1.8} />
      </a>
    </div>
  );
}

export default InstagramFab;
