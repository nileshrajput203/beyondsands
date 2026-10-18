import React from "react";
import Link from "next/link";
import { Footer } from "@/components/footer/Footer";
import { WeddingsInteractive } from "@/components/weddings/WeddingsInteractive";

export const metadata = {
  title: "Weddings & Celebrations · Beyond Sands Resort",
  description:
    "Host unforgettable coastal weddings, intimate celebrations, and milestone gatherings under whispering palms in Kelva Beach, Palghar.",
};

export default function WeddingsEventsPage() {
  return (
    <>
      <div className="pt-28 sm:pt-36 pb-24 px-6 sm:px-12 max-w-7xl mx-auto select-none">
        {/* Navigation Breadcrumb */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-champagne-gold hover:text-deep-navy transition-colors mb-10 group"
        >
          <span className="transition-transform group-hover:-translate-x-1">←</span>
          <span>Return to Home</span>
        </Link>

        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-champagne-gold/10 border border-champagne-gold/30 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-champagne-gold animate-pulse" />
            <span className="font-sans text-[11px] uppercase tracking-widest text-deep-navy font-semibold">
              06 · Celebrations & Gatherings
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl text-deep-navy font-normal tracking-wide max-w-4xl leading-[1.08]">
            Where milestone moments meet the whispering sea breeze.
          </h1>
          <p className="font-sans text-base sm:text-lg text-charcoal/80 font-light mt-6 max-w-2xl leading-relaxed">
            From intimate sunset vows under the coconut palms to full resort private buyouts, Beyond Sands provides a picturesque coastal canvas for celebrations that linger in the memory.
          </p>
        </div>

        {/* Interactive Event Formats & Bento Grid */}
        <WeddingsInteractive />
      </div>

      <Footer />
    </>
  );
}

