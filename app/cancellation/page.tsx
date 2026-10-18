import Link from "next/link";
import { Footer } from "@/components/footer/Footer";

export const metadata = {
  title: "Cancellation & Refund Policy · Beyond Sands Resort",
  description: "Cancellation, reschedule, and refund policy for Beyond Sands Resort, Kelva Beach, Palghar.",
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

        <h1 className="font-display text-4xl sm:text-5xl text-deep-navy font-normal mb-3">
          Cancellation &amp; Refund Policy
        </h1>
        <p className="text-xs text-charcoal/60 uppercase tracking-wider mb-8">
          Last Updated: October 2026 · Beyond Sands Resort, Kelva Beach
        </p>

        <div className="space-y-6 text-sm text-charcoal/80 leading-relaxed font-light mb-20">
          <p>
            At Beyond Sands Resort, we strive to maintain fair and transparent cancellation guidelines that accommodate personal travel adjustments while honoring the operational scheduling of our boutique rooms and fresh daily kitchen.
          </p>

          <h2 className="font-display text-xl text-deep-navy font-medium pt-4">
            1. Standard Cancellation Schedule
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border border-charcoal/15 rounded-xl overflow-hidden">
              <thead className="bg-deep-navy text-warm-ivory uppercase tracking-wider font-sans text-[11px]">
                <tr>
                  <th className="p-3.5">Time Prior to Check-in</th>
                  <th className="p-3.5">Refund Option</th>
                  <th className="p-3.5">Reschedule Credit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-charcoal/10 bg-white/70">
                <tr>
                  <td className="p-3.5 font-medium text-deep-navy">7 or more days prior</td>
                  <td className="p-3.5">90% Refund (10% processing fee)</td>
                  <td className="p-3.5 text-[#159b4d] font-semibold">100% Credit Voucher (valid 6 months)</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-medium text-deep-navy">3 to 6 days prior</td>
                  <td className="p-3.5">50% Refund</td>
                  <td className="p-3.5">50% Credit Voucher</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-medium text-deep-navy">Within 48 hours / Same day</td>
                  <td className="p-3.5 text-[#b38547]">No Refund</td>
                  <td className="p-3.5 text-charcoal/60">Not Applicable</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-medium text-deep-navy">No-Show / Early Departure</td>
                  <td className="p-3.5 text-[#b38547]">No Refund</td>
                  <td className="p-3.5 text-charcoal/60">Not Applicable</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="font-display text-xl text-deep-navy font-medium pt-4">
            2. Refund Processing Mode &amp; Timeline
          </h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>All approved refunds are credited back strictly to the <strong>original payment method</strong> (original UPI account, bank account, or credit/debit card) used during booking.</li>
            <li>In compliance with Indian banking standards, processing timelines are typically <strong>5 to 7 business working days</strong> from the date of formal cancellation approval.</li>
            <li>Cash refunds are not issued for online transactions.</li>
          </ul>

          <h2 className="font-display text-xl text-deep-navy font-medium pt-4">
            3. Festive Dates &amp; Long Weekends Policy
          </h2>
          <p>
            Due to peak holiday demand, reservations confirmed for special festive periods (including Diwali week, Christmas through New Year, Holi, and national long holiday weekends) are <strong>strictly non-refundable and non-transferable</strong> within 14 days of check-in.
          </p>

          <h2 className="font-display text-xl text-deep-navy font-medium pt-4">
            4. Force Majeure &amp; Weather Disruptions
          </h2>
          <p>
            In unforeseen events such as official government travel bans, cyclonic weather warnings issued by meteorological authorities, or natural road blockages affecting safe transit to Kelva Beach, guests will be provided a <strong>100% reschedule credit voucher</strong> valid for 12 months with no cancellation penalty.
          </p>

          <h2 className="font-display text-xl text-deep-navy font-medium pt-4">
            5. How to Request Cancellation or Rescheduling
          </h2>
          <p>
            To initiate a modification, please contact our front desk immediately with your Booking Confirmation Name and Dates:
          </p>
          <div className="p-4 rounded-xl bg-warm-ivory/80 border border-charcoal/10 text-xs space-y-1 text-deep-navy font-sans">
            <p className="font-semibold">Front Desk &amp; Reservations</p>
            <p>WhatsApp Concierge: <a href="https://wa.me/919923895055?text=Hi%20Beyond%20Sands!%20I%20would%20like%20to%20inquire%20about%20my%20reservation." target="_blank" rel="noopener noreferrer" className="text-champagne-gold font-medium underline">+91 99238 95055</a></p>
            <p>Email: <a href="mailto:beyondsandsresort@gmail.com" className="text-champagne-gold font-medium underline">beyondsandsresort@gmail.com</a></p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
