import Link from "next/link";
import { Footer } from "@/components/footer/Footer";

export const metadata = {
  title: "Blog & Journal · Beyond Sands Resort",
  description: "Reflections, stories, and coastal dispatches from Beyond Sands Resort, Kelva Beach.",
};

export default function BlogPage() {
  return (
    <>
      <main className="min-h-[85vh] pt-28 sm:pt-36 pb-20 px-6 sm:px-12 max-w-7xl mx-auto flex flex-col justify-between select-none">
        <div>
          {/* Navigation Breadcrumb */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-champagne-gold hover:text-deep-navy transition-colors mb-8 sm:mb-10 group"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            <span>Return to Home</span>
          </Link>

          {/* Page Header */}
          <div className="mb-12 sm:mb-16 border-b border-charcoal/15 pb-8 sm:pb-12">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-deep-navy font-normal tracking-wide">
              JOURNAL &amp; STORIES
            </h1>
            <p className="font-sans text-sm sm:text-base text-charcoal/70 font-light mt-3 sm:mt-4 max-w-2xl leading-relaxed">
              Reflections, stories, and coastal dispatches from Beyond Sands.
            </p>
          </div>

          {/* Content Placeholder (No content for now) */}
          <div className="w-full bg-white/60 backdrop-blur-sm border border-charcoal/15 rounded-[2px] p-10 sm:p-16 text-center shadow-xs my-8">
            <div className="max-w-md mx-auto space-y-4">
              <span className="inline-block px-3 py-1 bg-champagne-gold/15 border border-champagne-gold/30 rounded-full font-sans text-[10px] uppercase tracking-widest text-champagne-gold font-semibold">
                Coming Soon
              </span>
              <h2 className="font-display text-2xl sm:text-3xl text-deep-navy font-normal">
                Stories under preparation
              </h2>
              <p className="font-sans text-xs sm:text-sm text-charcoal/65 font-light leading-relaxed">
                Our articles and dispatches will be published here soon. Stay tuned for field notes, coastal guides, and seasonal updates.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
