import React from "react";
import Link from "next/link";
import { Footer } from "@/components/footer/Footer";

export const metadata = {
  title: "Cancellation Policy · Beyond Sands Resort",
};

export default function CancellationPage() {
  return (
    <>
      <div className="pt-32 pb-20 px-6 sm:px-12 max-w-4xl mx-auto select-none font-sans">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-champagne-gold hover:text-deep-navy transition-colors mb-8"
        >
          <span>←</span>
          <span>Back to Home</span>
        </Link>

        <h1 className="font-display text-4xl sm:text-5xl text-deep-navy font-normal mb-8">
          Cancellation Policy
        </h1>

        <div className="space-y-6 text-sm text-charcoal/80 leading-relaxed font-light mb-20">
          <p>
            We understand plans can change. Our cancellation rules balance flexibility for travelers with the operational demands of our boutique coastal resort:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>7+ Days Prior to Check-in</strong>: Full refund minus a minimal processing charge, or 100% credit for a rescheduled future stay within 6 months.</li>
            <li><strong>3 to 6 Days Prior to Check-in</strong>: 50% refund of advance deposit or reschedule credit subject to seasonal availability.</li>
            <li><strong>Within 48 Hours or No-Show</strong>: Advance deposit is non-refundable.</li>
          </ul>
          <p className="pt-4">
            For modifications, please reach out directly to our reservations team on WhatsApp (+91 99238 95055).
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
