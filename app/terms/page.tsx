import React from "react";
import Link from "next/link";
import { Footer } from "@/components/footer/Footer";

export const metadata = {
  title: "Terms & Conditions · Beyond Sands Resort",
};

export default function TermsPage() {
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
          Terms & Conditions
        </h1>

        <div className="space-y-6 text-sm text-charcoal/80 leading-relaxed font-light mb-20">
          <p>
            Welcome to Beyond Sands Resort. By making a reservation or staying at our property, you agree to comply with our resort terms and regulations.
          </p>
          <h2 className="font-display text-xl text-deep-navy font-medium pt-4">
            1. Booking & Identification
          </h2>
          <p>
            All adult guests must present valid government-issued photo identification (Aadhaar Card, Passport, Voter ID, or Driving License) upon check-in. PAN cards are not accepted as valid proof of identity under regional hospitality regulations.
          </p>
          <h2 className="font-display text-xl text-deep-navy font-medium pt-4">
            2. Payment & Confirmation
          </h2>
          <p>
            Bookings are confirmed upon receipt of advance deposit as specified by our reservations desk. Full balance is payable prior to or upon check-in.
          </p>
          <h2 className="font-display text-xl text-deep-navy font-medium pt-4">
            3. Property Care
          </h2>
          <p>
            Guests are kindly requested to treat the property, furnishings, swimming pool, and gardens with care. Any intentional damage or loss will be charged accordingly.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
