import Link from "next/link";
import { Footer } from "@/components/footer/Footer";
import { OffersInteractive } from "@/components/offers/OffersInteractive";

export const metadata = {
  title: "Packages & Offers · Beyond Sands Resort",
  description: "Curated accommodation and all-inclusive meal packages for couples, families, and group getaways in Kelva.",
};

export default function OffersPage() {
  return (
    <>
      <div className="pt-32 pb-24 px-6 sm:px-12 max-w-6xl mx-auto select-none">
        {/* Breadcrumb */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-wider text-champagne-gold hover:text-deep-navy transition-colors mb-8"
        >
          <span>←</span>
          <span>Back to Home</span>
        </Link>

        {/* Header */}
        <div className="mb-14">
          <span className="font-sans text-xs uppercase tracking-widest text-champagne-gold font-semibold block mb-2">
            07 · Tariff Architecture
          </span>
          <h1 className="font-display text-4xl sm:text-6xl text-deep-navy font-normal tracking-wide max-w-3xl">
            Thoughtfully packaged coastal retreats.
          </h1>
          <p className="font-sans text-sm sm:text-base text-charcoal/80 font-light mt-4 max-w-2xl leading-relaxed">
            Transparent pricing with zero hidden surcharges. Enjoy authentic 100% pure vegetarian hospitality, pristine pool access, and fresh sea air.
          </p>
        </div>

        {/* 21st.dev Interactive Offers Component */}
        <div className="mb-20">
          <OffersInteractive />
        </div>

        {/* Tariff Policies Hairline Spec */}
        <div className="p-8 bg-white/60 border border-charcoal/15 rounded-[2px] grid grid-cols-1 md:grid-cols-3 gap-6 font-sans text-xs text-charcoal/80">
          <div>
            <span className="font-semibold text-deep-navy block mb-1 uppercase tracking-wider text-[11px]">
              Direct Booking Assurance
            </span>
            <p className="font-light leading-relaxed">
              Booking directly via our concierge guarantees our lowest available tariff with zero platform booking commissions.
            </p>
          </div>
          <div>
            <span className="font-semibold text-deep-navy block mb-1 uppercase tracking-wider text-[11px]">
              Transparent Taxes
            </span>
            <p className="font-light leading-relaxed">
              All room and meal packages are subject to standard state goods & service taxes as applicable upon checkout.
            </p>
          </div>
          <div>
            <span className="font-semibold text-deep-navy block mb-1 uppercase tracking-wider text-[11px]">
              Flexible Coordination
            </span>
            <p className="font-light leading-relaxed">
              Special check-in requests, extra beds, or dietary customizations can be coordinated in advance via WhatsApp.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
