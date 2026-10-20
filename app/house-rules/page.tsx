import Link from "next/link";
import { Footer } from "@/components/footer/Footer";

export const metadata = {
  title: "House Rules & Guidelines · Beyond Sands Resort",
  description: "Guest guidelines, pure vegetarian ethos, and pool protocols at Beyond Sands Resort, Kelva Beach.",
};

export default function HouseRulesPage() {
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
          House Rules &amp; Guidelines
        </h1>
        <p className="text-xs text-charcoal/60 uppercase tracking-wider mb-8">
          Beyond Sands Pure Vegetarian Sanctuary · Kelva Beach, Palghar
        </p>

        <div className="space-y-6 text-sm text-charcoal/80 leading-relaxed font-light mb-20">
          <p>
            To preserve peace, serenity, family comfort, and hygiene for all guests at Beyond Sands, we kindly ask all visitors and residents to adhere to the following house rules:
          </p>

          <h2 className="font-display text-xl text-deep-navy font-medium pt-4">
            1. 100% Pure Vegetarian Sanctuary
          </h2>
          <p>
            Beyond Sands operates strictly as a pure vegetarian haven. Out of respect for our property heritage and other resident families:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Bringing, cooking, ordering from outside, or consuming non-vegetarian food, fish, seafood, or eggs anywhere on resort grounds or inside guest rooms is <strong>strictly prohibited</strong>.</li>
            <li>We cater wholesome fresh Jain, Swaminarayan, and vegan meals with prior notice to our kitchen team.</li>
          </ul>

          <h2 className="font-display text-xl text-deep-navy font-medium pt-4">
            2. Quiet Hours &amp; Coastal Atmosphere
          </h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Quiet hours are observed between <strong>10:00 PM and 07:00 AM</strong>.</li>
            <li>In compliance with local environmental and police regulations, amplified Bluetooth speakers, party sound bars, and loud music are strictly prohibited in outdoor lawn and poolside areas after 10:00 PM.</li>
          </ul>

          <h2 className="font-display text-xl text-deep-navy font-medium pt-4">
            3. Swimming Pool Hygiene &amp; Protocols
          </h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Pool operating hours are <strong>07:00 AM to 08:00 PM</strong> daily. Maintenance and chemical balancing occur outside these hours.</li>
            <li>Proper nylon, lycra, or polyester swimwear is mandatory. Undergarments, cotton T-shirts, sarees, and denim are strictly prohibited.</li>
            <li>Glass bottles, glasses, and food items are forbidden in the pool or along the pool deck to prevent hazardous breakage.</li>
            <li>Children under 12 years must be accompanied in the water by a swimming adult at all times. Guests swim at their own risk.</li>
          </ul>

          <h2 className="font-display text-xl text-deep-navy font-medium pt-4">
            4. Smoke-Free Suites &amp; Substance Ban
          </h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>All guest bedrooms, bathrooms, and enclosed indoor halls are <strong>100% smoke-free</strong>. Deep cleaning charges of ₹2,500 will apply if smoke odors or burns are detected inside rooms.</li>
            <li>Designated smoking zones are available in open-air garden corners.</li>
            <li>Possession or use of illicit narcotic substances is strictly barred and will be reported to local authorities immediately.</li>
          </ul>

          <h2 className="font-display text-xl text-deep-navy font-medium pt-4">
            5. Visitors &amp; Safety
          </h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>For guest privacy and safety, only registered guests are permitted inside room corridors after 08:00 PM. Non-resident visitors must register at the reception.</li>
            <li>Complimentary guest parking is provided on premises. The management does not accept liability for loss or damage to vehicles or personal belongings left unattended.</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}
