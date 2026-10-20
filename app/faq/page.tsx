import Link from "next/link";
import { Footer } from "@/components/footer/Footer";
import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { WhatsAppIcon } from "@/components/icons";

export const metadata = {
  title: "Frequently Asked Questions · Beyond Sands Resort",
  description: "Find helpful answers regarding check-in timings, pure vegetarian dining, pool access, and directions to Beyond Sands, Kelva Beach.",
};

export default function FAQPage() {
  const whatsappMsg = encodeURIComponent(
    "Hi Beyond Sands! I have a question regarding my stay that wasn't covered in the FAQ. Could you assist me?"
  );

  return (
    <>
      <div className="pt-24 sm:pt-32 pb-20 sm:pb-24 px-4 sm:px-8 lg:px-12 max-w-5xl mx-auto select-none">
        {/* Breadcrumb */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-wider text-champagne-gold hover:text-deep-navy transition-colors mb-6 sm:mb-8"
        >
          <span>←</span>
          <span>Back to Home</span>
        </Link>

        {/* Header */}
        <div className="mb-10 sm:mb-14">
          <span className="font-sans text-[11px] sm:text-xs uppercase tracking-widest text-champagne-gold font-semibold block mb-2">
            10 · Guest Guidance
          </span>
          <h1 className="font-display text-2xl min-[360px]:text-[1.85rem] sm:text-5xl lg:text-6xl text-deep-navy font-normal tracking-wide leading-[1.18] sm:leading-[1.08]">
            Frequently Asked Questions
          </h1>
          <p className="font-sans text-xs sm:text-base text-charcoal/80 font-light mt-3 sm:mt-4 leading-relaxed max-w-2xl">
            Everything you need to know about your coastal sanctuary, from 100% pure vegetarian culinary spreads to azure pool guidelines.
          </p>
        </div>

        {/* 21st.dev Interactive FAQ Accordion */}
        <div className="mb-14 sm:mb-20">
          <FaqAccordion />
        </div>

        {/* 21st.dev Concierge Support Card */}
        <div className="bg-gradient-to-r from-deep-navy to-navy-blue text-warm-ivory rounded-2xl p-6 sm:p-12 border border-champagne-gold/30 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-[10px] uppercase tracking-widest text-champagne-gold font-semibold block">
              Personal Concierge
            </span>
            <h2 className="font-display text-xl sm:text-3xl text-warm-ivory font-normal">
              Have a bespoke request or question?
            </h2>
            <p className="font-sans text-xs sm:text-sm text-warm-ivory/80 font-light max-w-md">
              Our front desk is always available to assist with room selection, dietary requirements, and local sightseeing tips.
            </p>
          </div>

          <a
            href={`https://wa.me/919923895055?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto justify-center px-6 py-3.5 bg-champagne-gold text-deep-navy hover:bg-warm-ivory transition-all duration-300 font-sans text-xs uppercase tracking-widest font-semibold rounded-full flex items-center gap-2 shrink-0 shadow-md hover:scale-105"
          >
            <WhatsAppIcon size={16} />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
}
