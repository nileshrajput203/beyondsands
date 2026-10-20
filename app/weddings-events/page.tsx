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
      <div className="pt-24 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto select-none">
        {/* Navigation Breadcrumb */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-champagne-gold hover:text-deep-navy transition-colors mb-6 sm:mb-10 group"
        >
          <span className="transition-transform group-hover:-translate-x-1">←</span>
          <span>Return to Home</span>
        </Link>

        {/* Section Header */}
        <div className="mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-champagne-gold/10 border border-champagne-gold/30 rounded-full mb-3 sm:mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-champagne-gold animate-pulse" />
            <span className="font-sans text-[10px] sm:text-[11px] uppercase tracking-widest text-deep-navy font-semibold whitespace-nowrap">
              Celebrations &amp; Gatherings
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-4xl">
              <h1 className="font-display text-2xl min-[360px]:text-[1.85rem] sm:text-5xl lg:text-6xl text-deep-navy font-normal tracking-wide leading-[1.18] sm:leading-[1.08]">
                Where milestone moments meet the whispering sea breeze.
              </h1>
              <p className="font-sans text-sm sm:text-lg text-charcoal/80 font-light mt-3 sm:mt-6 max-w-2xl leading-relaxed">
                From intimate sunset vows under the coconut palms to full resort private buyouts, Beyond Sands provides a picturesque coastal canvas for celebrations that linger in the memory.
              </p>
            </div>

            <Link
              href="/gallery"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-champagne-gold hover:bg-[#E2C399] text-deep-navy font-sans text-xs uppercase tracking-widest font-semibold rounded-full transition-all shadow-sm hover:shadow-md cursor-pointer shrink-0 w-full sm:w-auto"
            >
              <span>View Event Photo Gallery</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* Interactive Event Formats & Bento Grid */}
        <WeddingsInteractive />
      </div>

      <Footer />
    </>
  );
}

