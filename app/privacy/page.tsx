import React from "react";
import Link from "next/link";
import { Footer } from "@/components/footer/Footer";

export const metadata = {
  title: "Privacy Policy · Beyond Sands Resort",
};

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>

        <div className="space-y-6 text-sm text-charcoal/80 leading-relaxed font-light mb-20">
          <p>
            Beyond Sands Resort respects your privacy and is dedicated to safeguarding any personal information you share with us during inquiries, reservations, or stays at our property in Kelva Beach, Palghar.
          </p>
          <h2 className="font-display text-xl text-deep-navy font-medium pt-4">
            1. Information Collection
          </h2>
          <p>
            When you contact us, book a room, or submit an inquiry, we collect your name, phone number, email address, dates of travel, and any specific preferences necessary to process your reservation.
          </p>
          <h2 className="font-display text-xl text-deep-navy font-medium pt-4">
            2. Use of Information
          </h2>
          <p>
            Your information is used solely to confirm bookings, provide customer support, and communicate relevant reservation details. We do not sell, rent, or trade your personal details with third-party marketers.
          </p>
          <h2 className="font-display text-xl text-deep-navy font-medium pt-4">
            3. Contacting Us
          </h2>
          <p>
            If you have questions regarding our privacy practices, please contact us at beyondsandsresort@gmail.com or via telephone at +91 99238 95055.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
