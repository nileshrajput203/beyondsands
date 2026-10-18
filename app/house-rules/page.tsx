import React from "react";
import Link from "next/link";
import { Footer } from "@/components/footer/Footer";

export const metadata = {
  title: "House Rules · Beyond Sands Resort",
};

export default function HouseRulesPage() {
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
          House Rules
        </h1>

        <div className="space-y-6 text-sm text-charcoal/80 leading-relaxed font-light mb-20">
          <p>
            To preserve tranquility, hygiene, and harmony for all guests at Beyond Sands, we kindly ask you to observe the following rules:
          </p>
          <ul className="list-disc pl-5 space-y-3">
            <li><strong>Pure Vegetarian Sanctuary</strong>: Out of respect for our property heritage, cooking or bringing non-vegetarian food onto the resort premises is strictly prohibited.</li>
            <li><strong>Quiet Blue Hours</strong>: We celebrate coastal calm. Loud music and speaker amplification on lawns and balconies are not permitted after 10:00 PM.</li>
            <li><strong>Swimming Pool Protocol</strong>: Swimming pool hours are from 07:00 AM to 08:00 PM. Glassware is strictly prohibited around the pool deck. Proper swim attire is required.</li>
            <li><strong>Smoking Policy</strong>: Smoking is strictly prohibited inside all guest rooms and enclosed suites. Designated outdoor smoking zones are provided in garden areas.</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}
