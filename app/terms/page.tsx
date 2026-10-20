import Link from "next/link";
import { Footer } from "@/components/footer/Footer";

export const metadata = {
  title: "Terms & Conditions · Beyond Sands Resort",
  description: "Terms and conditions of stay and reservations at Beyond Sands Resort, Kelva Beach.",
};

export default function TermsPage() {
  return (
    <>
      <div className="pt-24 sm:pt-32 pb-20 px-4 sm:px-8 max-w-4xl mx-auto select-none font-sans">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-champagne-gold hover:text-deep-navy transition-colors mb-6 sm:mb-8"
        >
          <span>←</span>
          <span>Back to Home</span>
        </Link>

        <h1 className="font-display text-2xl sm:text-5xl text-deep-navy font-normal mb-3">
          Terms &amp; Conditions
        </h1>
        <p className="text-xs text-charcoal/60 uppercase tracking-wider mb-8">
          Last Updated: October 2026 · Beyond Sands Resort, Kelva Beach
        </p>

        <div className="space-y-6 text-sm text-charcoal/80 leading-relaxed font-light mb-20">
          <p>
            Welcome to Beyond Sands Resort. By making an inquiry, placing a booking deposit, or residing on our premises at Kelva Beach, Palghar, you agree to abide by the following terms, conditions, and guidelines.
          </p>

          <h2 className="font-display text-xl text-deep-navy font-medium pt-4">
            1. Check-In &amp; Check-Out Timings
          </h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><strong>Standard Check-In Time:</strong> 01:00 PM</li>
            <li><strong>Standard Check-Out Time:</strong> 11:00 AM</li>
            <li>Early check-in and late check-out requests are strictly subject to room availability on the date and require prior confirmation with our front desk. Additional nominal hourly charges may apply for extended stays.</li>
          </ul>

          <h2 className="font-display text-xl text-deep-navy font-medium pt-4">
            2. Mandatory Government Photo Identification
          </h2>
          <p>
            In compliance with Indian hospitality laws and Maharashtra Police mandates, <strong>every adult guest (18+ years)</strong> must present an original government-issued photo ID with address proof upon arrival.
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><strong>Accepted IDs:</strong> Aadhaar Card, Passport, Voter ID Card, or Driving License.</li>
            <li><strong>Foreign Nationals:</strong> Must furnish a valid original Passport and Indian Tourist/Business Visa or OCI card.</li>
            <li><strong>Important Notice:</strong> PAN Cards are <em>not accepted</em> as valid address proof under regional hospitality statutes. Guests unable to furnish valid proof of identity will be denied check-in without refund.</li>
          </ul>

          <h2 className="font-display text-xl text-deep-navy font-medium pt-4">
            3. 100% Pure Vegetarian Sanctuary Policy
          </h2>
          <p>
            Beyond Sands Resort is dedicated to offering an uncompromised pure vegetarian haven. Bringing, cooking, consuming, or ordering non-vegetarian food, fish, seafood, or eggs anywhere on resort grounds, lawns, dining areas, or inside private guest suites is <strong>strictly prohibited</strong>. Violation will result in immediate termination of stay without refund.
          </p>

          <h2 className="font-display text-xl text-deep-navy font-medium pt-4">
            4. Payment Terms &amp; Confirmation
          </h2>
          <p>
            A reservation is confirmed only upon receipt of the advance booking deposit requested by our reservations desk. The outstanding balance must be settled in full prior to or at the time of check-in via UPI, bank transfer, or cash.
          </p>

          <h2 className="font-display text-xl text-deep-navy font-medium pt-4">
            5. Swimming Pool &amp; Property Amenities
          </h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Swimming pool operates between <strong>07:00 AM and 08:00 PM</strong>.</li>
            <li>Proper nylon/lycra swimwear is mandatory. Cotton clothes, casual wear, or denim are strictly prohibited inside the pool for filtration hygiene.</li>
            <li>Glass bottles, crockery, and food items are prohibited around the pool deck.</li>
            <li>Children below 12 years of age must be accompanied and supervised by a responsible adult at all times. Guests use the pool at their own discretion and risk; there is no full-time lifeguard on duty.</li>
          </ul>

          <h2 className="font-display text-xl text-deep-navy font-medium pt-4">
            6. Quiet Hours &amp; Decorum
          </h2>
          <p>
            To honor the calm coastal atmosphere and local environmental guidelines, outdoor loud music, amplified speakers, and excessive noise are strictly prohibited between <strong>10:00 PM and 07:00 AM</strong>.
          </p>

          <h2 className="font-display text-xl text-deep-navy font-medium pt-4">
            7. Damage to Property &amp; Personal Belongings
          </h2>
          <p>
            Guests are liable for any physical damage, staining of linens, or loss caused to resort fixtures, appliances, or landscaping during their stay. The resort provides complimentary parking and secure premises, but cannot be held liable for loss or damage to personal valuables or vehicles left unattended.
          </p>

          <h2 className="font-display text-xl text-deep-navy font-medium pt-4">
            8. Right of Admission &amp; Governing Law
          </h2>
          <p>
            The management reserves the full right of admission. Any disorderly conduct, illegal substance use, or harassment of other guests or resort staff will lead to immediate eviction without reimbursement. Any legal disputes arising hereunder shall be subject exclusively to the courts of Palghar / Mumbai jurisdiction.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
