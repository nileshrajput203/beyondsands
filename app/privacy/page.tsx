import Link from "next/link";
import { Footer } from "@/components/footer/Footer";

export const metadata = {
  title: "Privacy Policy · Beyond Sands Resort",
  description: "Privacy policy and data protection practices for Beyond Sands Resort, Kelva Beach, Palghar.",
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

        <h1 className="font-display text-4xl sm:text-5xl text-deep-navy font-normal mb-3">
          Privacy Policy
        </h1>
        <p className="text-xs text-charcoal/60 uppercase tracking-wider mb-8">
          Last Updated: October 2026 · Beyond Sands Resort, Kelva Beach
        </p>

        <div className="space-y-6 text-sm text-charcoal/80 leading-relaxed font-light mb-20">
          <p>
            Beyond Sands Resort (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the boutique resort property situated opposite Shitladevi Temple, Kelve Road, Kelve, Palghar 401404, Maharashtra. We respect your privacy and are committed to safeguarding all personal information collected during inquiries, reservations, and stays.
          </p>

          <h2 className="font-display text-xl text-deep-navy font-medium pt-4">
            1. Information We Collect
          </h2>
          <p>
            In order to facilitate reservations, ensure guest security, and comply with Indian hospitality and local police regulations, we collect:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><strong>Contact Details:</strong> Full name, telephone/mobile number, email address, and billing address.</li>
            <li><strong>Identification Records:</strong> Government-issued photo ID details (Aadhaar Card, Passport, Driving License, or Voter ID) collected at check-in as legally mandated by regional administration.</li>
            <li><strong>Stay &amp; Preference Details:</strong> Dates of arrival and departure, room selection, dietary requirements (Jain/Swaminarayan/sattvic), and special family requests.</li>
            <li><strong>Payment Information:</strong> Transaction identifiers and payment confirmation proofs. We do not store raw credit card numbers or UPI PINs on our servers.</li>
          </ul>

          <h2 className="font-display text-xl text-deep-navy font-medium pt-4">
            2. Purpose &amp; Usage of Personal Data
          </h2>
          <p>
            We process your data strictly for legitimate operational purposes:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Processing, confirming, and managing your resort reservation.</li>
            <li>Direct concierge communications via WhatsApp, telephone, or email regarding directions, arrival times, and fresh meal planning.</li>
            <li>Guest safety, property security, and regulatory compliance with Maharashtra Tourism and local law enforcement guidelines.</li>
          </ul>

          <h2 className="font-display text-xl text-deep-navy font-medium pt-4">
            3. Non-Disclosure &amp; Information Sharing
          </h2>
          <p>
            Beyond Sands maintains a strict policy: we <strong>never</strong> sell, rent, commercialize, or trade your personal information with third-party marketing companies. Data is shared exclusively with:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Authorized payment processing partners and banking gateways for transaction settlement.</li>
            <li>Government or law enforcement authorities only when mandated by applicable statutory laws or official inquiry.</li>
          </ul>

          <h2 className="font-display text-xl text-deep-navy font-medium pt-4">
            4. Data Security &amp; Storage
          </h2>
          <p>
            We implement administrative and physical security measures to safeguard your personal details against unauthorized access, loss, or disclosure. Guest records are archived in secure environments with restricted access.
          </p>

          <h2 className="font-display text-xl text-deep-navy font-medium pt-4">
            5. Cookies &amp; Third-Party Services
          </h2>
          <p>
            Our website uses minimal, standard analytical and session cookies to ensure smooth navigation, load interactive galleries, and maintain performance. We link to external services including WhatsApp for guest concierge and Google Maps for directions; their respective privacy policies govern interactions on their platforms.
          </p>

          <h2 className="font-display text-xl text-deep-navy font-medium pt-4">
            6. Grievance Officer &amp; Contact Details
          </h2>
          <p>
            In accordance with the Information Technology Act, 2000 and consumer protection guidelines, any questions, concerns, or requests regarding your personal information may be addressed to:
          </p>
          <div className="p-4 rounded-xl bg-warm-ivory/80 border border-charcoal/10 text-xs space-y-1 text-deep-navy font-sans">
            <p className="font-semibold">Resort Manager · Grievance Officer</p>
            <p>Beyond Sands Resort, Opposite Shitladevi Temple, Kelwa Beach Road, Kelwa, Palghar - 401401, Maharashtra</p>
            <p>Email: <a href="mailto:beyondsandsresort@gmail.com" className="text-champagne-gold font-medium underline">beyondsandsresort@gmail.com</a></p>
            <p>Telephone: <a href="tel:+919923895055" className="text-champagne-gold font-medium">+91 99238 95055</a></p>
            <p className="text-charcoal/60 pt-1">Response Timeline: Within 48 business hours</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
