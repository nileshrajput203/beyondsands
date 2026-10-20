"use client";

import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  MapPin,
  UtensilsCrossed,
  Waves,
  BedDouble,
  PartyPopper,
  Clock,
  HelpCircle,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

// Real Property Highlights for Beyond Sands Pure Veg Resort
const PROPERTY_DETAILS = [
  {
    id: "prop-1",
    title: "1-Minute Walk to Kelva Beach & Temple Enclave",
    icon: MapPin,
    category: "Prime Coastal Setting",
    image: "/assets/faq/faq-1-beach-location.webp",
    summary:
      "Nestled amidst coconut groves and casuarina trees in Kelva, Palghar — situated directly opposite the revered Sheetla Devi Temple and just a 1-minute peaceful walk from the serene shores of Kelva Beach.",
    specs: ["1 min walk to beach", "Opposite Sheetla Devi Temple", "2.5 hours from Mumbai", "Private parking on-site"],
  },
  {
    id: "prop-2",
    title: "100% Pure Vegetarian & Jain Dining Sanctuary",
    icon: UtensilsCrossed,
    category: "Culinary Heritage",
    image: "/assets/faq/faq-2-pure-veg-dining.png",
    summary:
      "A dedicated pure vegetarian kitchen serving freshly prepared Maharashtrian coastal delicacies, authentic Gujarati thalis, North Indian curries, and breakfast buffets. Strict Jain food (without onion, garlic, or root vegetables) is prepared upon request.",
    specs: ["Strictly pure vegetarian", "Authentic Jain food available", "Breakfast, Lunch & Dinner", "No non-veg or alcohol allowed"],
  },
  {
    id: "prop-3",
    title: "Azure Swimming Pool & Rain Dance Arena",
    icon: Waves,
    category: "Recreation & Wellness",
    image: "/assets/faq/faq-3-swimming-pool.jpg",
    summary:
      "An impeccably filtered swimming pool surrounded by tropical palm greens, complete with a dedicated children's splash pool, shaded poolside recliners, and a lively rain dance setup with music for weekend family enjoyment.",
    specs: ["Operating hours: 07:00 AM – 08:00 PM", "Children's pool section", "Rain dance facility", "Proper swimwear required"],
  },
  {
    id: "prop-4",
    title: "Spacious Suites & Deluxe Family Dormitories",
    icon: BedDouble,
    category: "Accommodations",
    image: "/assets/faq/faq-4-suites-verandah.jpg",
    summary:
      "Thoughtfully designed rooms with private verandahs overlooking the gardens and pool, plus large Deluxe Family Dormitories accommodating up to 8 guests comfortably. Equipped with air conditioning, king-size beds, hot water geysers, and free WiFi.",
    specs: ["Garden & Pool View rooms", "Family Dorms (up to 8 guests)", "High-speed WiFi", "24/7 Hot water & Power backup"],
  },
  {
    id: "prop-5",
    title: "15,000+ sq ft Event Lawns & Banquet Hall",
    icon: PartyPopper,
    category: "Weddings & Celebrations",
    image: "/assets/faq/faq-5-weddings-lawns.webp",
    summary:
      "Host memorable destination weddings, pre-wedding sangeet & mehendi celebrations, milestone birthdays, and corporate retreats. Features manicured natural grass lawns and an air-conditioned banquet hall with stage and audio setups.",
    specs: ["Capacity up to 500+ guests", "Air-conditioned banquet", "Custom pure veg catering", "Full resort buyout options"],
  },
  {
    id: "prop-6",
    title: "Check-in Timings, Safety & Guest Policies",
    icon: Clock,
    category: "Guest Guidelines",
    image: "/assets/faq/faq-6-resort-canopy.jpg",
    summary:
      "Check-in begins at 12:00 PM and check-out is by 10:00 AM (11:00 AM for all-inclusive meal packages). All adult guests must present valid government photo ID upon arrival. Quiet hours are observed from 11:00 PM to 07:00 AM.",
    specs: ["Check-in: 12:00 PM", "Check-out: 10:00 AM", "Govt ID required", "24/7 Security & CCTV"],
  },
];

// Authentic Frequently Asked Questions for Beyond Sands
const RESORT_FAQS = [
  {
    id: "faq-best-resort",
    question: "Which is the best resort in Palghar for vegetarian families?",
    answer:
      "Beyond Sands Pure Veg Resort is rated the #1 pure vegetarian beach resort in Palghar and Kelva Beach. Located directly opposite Sheetla Devi Temple and 2 minutes walk from Kelva Beach, our resort features a strictly 100% pure veg and Jain kitchen (zero meat or alcohol permitted on premises), a 40x25ft swimming pool with lifeguard supervision, rain dance, landscaped lawns, and spacious AC rooms & group dormitories.",
  },
  {
    id: "faq-distance",
    question: "How far is Beyond Sands Resort from Kelve Beach and Palghar Station?",
    answer:
      "Beyond Sands is located directly opposite Shri Shitladevi Temple and just a 2-minute walk (290 meters) from Kelva Beach (Kelve Beach). Kelve Road Railway Station is 10 minutes away (~7 km), and Palghar Railway Station is approximately 20 minutes (~14 km) by car or auto-rickshaw.",
  },
  {
    id: "faq-picnic-price",
    question: "What is the price of a One-Day Picnic at Beyond Sands Kelva Resort?",
    answer:
      "Our popular One-Day Picnic package is priced at ₹2,200 per person (10:00 AM to 5:00 PM). It includes welcome drinks, hot breakfast, a lavish 100% pure vegetarian lunch buffet, evening hi-tea with snacks, full access to our 40x25ft swimming pool, rain dance with music, and clean changing room facilities for up to 150 guests.",
  },
  {
    id: "faq-pool-lifeguard",
    question: "Does the resort have a swimming pool with a lifeguard and rain dance?",
    answer:
      "Yes! Beyond Sands features an impeccably maintained 40ft x 25ft swimming pool with dedicated lifeguard protection, a separate shallow kids' splash zone, shaded pool recliners, and a lively rain dance arena with sound system for families, corporate teams, and group picnics.",
  },
  {
    id: "faq-pureveg-jain",
    question: "Is outside food allowed, and do you serve strict Jain meals without onion and garlic?",
    answer:
      "Outside food, non-veg, and alcohol are strictly not permitted to maintain our sacred pure-vegetarian sanctity. Our in-house kitchen prepares authentic Jain food (cooked in separate utensils without onion, garlic, or root vegetables) fresh upon request for breakfast, lunch, and dinner.",
  },
  {
    id: "faq-checkin-timings",
    question: "What are the resort check-in and check-out timings?",
    answer:
      "Standard check-in time is from 12:00 PM onwards, and check-out is by 10:00 AM (or 11:00 AM for guests booked on all-inclusive meal packages). Early check-in or late check-out is subject to room availability upon request with our front desk (+91 99238 95055).",
  },
];

export function PropertyFaqSection() {
  const whatsappInquiryUrl =
    "https://wa.me/919923895055?text=" +
    encodeURIComponent(
      "Hi Beyond Sands! I have a question regarding property details, rooms, or availability. Could you assist me?"
    );

  return (
    <section
      id="property-faq-section"
      className="relative w-full py-24 sm:py-32 bg-transparent text-charcoal select-none overflow-hidden"
      aria-label="Property Details and Frequently Asked Questions"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* ======================================================== */}
        {/* SECTION 1: PROPERTY DETAILS (ACCORDION WITH VISUALS)    */}
        {/* ======================================================== */}
        <div>
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-champagne-gold/15 border border-champagne-gold/30 text-xs font-medium text-[#b38547] uppercase tracking-widest mb-4">
              <span>Resort Architecture &amp; Amenities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-deep-navy font-display tracking-tight">
              Property Details
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed font-sans">
              Discover what makes Beyond Sands a premier pure-vegetarian sanctuary on the Kelva coastline.
            </p>
          </div>

          {/* Property Accordion */}
          <Accordion type="single" collapsible defaultValue="prop-1" className="w-full space-y-3.5">
            {PROPERTY_DETAILS.map((item) => {
              const Icon = item.icon;
              return (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="bg-white/75 border border-charcoal/10 rounded-2xl overflow-hidden data-[state=open]:border-champagne-gold/50"
                >
                  <AccordionTrigger className="px-5 sm:px-7 py-4 sm:py-5 hover:no-underline transition-colors hover:bg-gray-50/60">
                    <div className="flex items-center gap-3.5 text-left pr-4">
                      <div className="w-9 h-9 rounded-lg bg-deep-navy/5 text-deep-navy flex items-center justify-center shrink-0 border border-deep-navy/10">
                        <Icon className="w-4 h-4 text-champagne-gold" />
                      </div>
                      <div>
                        <span className="text-[11px] font-sans uppercase tracking-widest text-[#b38547] font-semibold block">
                          {item.category}
                        </span>
                        <h3 className="text-sm sm:text-base font-medium text-deep-navy font-sans mt-0.5">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="px-5 sm:px-7 pt-2 pb-6 border-t border-gray-100">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-2">
                      {/* Image Banner */}
                      <div className="md:col-span-5 relative h-48 sm:h-56 w-full rounded-lg overflow-hidden shadow-xs">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-105"
                          sizes="(min-width: 768px) 360px, 100vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                      </div>

                      {/* Content & Specs */}
                      <div className="md:col-span-7 space-y-4">
                        <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-sans font-light">
                          {item.summary}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                          {item.specs.map((spec, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-2 text-xs text-deep-navy bg-[#F8F6F1] px-3 py-1.5 rounded-md border border-gray-200/60"
                            >
                              <ShieldCheck className="w-3.5 h-3.5 text-champagne-gold shrink-0" />
                              <span className="truncate font-medium">{spec}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>

        {/* ======================================================== */}
        {/* SECTION 2: FREQUENTLY ASKED QUESTIONS (FAQ3 ACCORDION)  */}
        {/* ======================================================== */}
        <div>
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-deep-navy/5 border border-deep-navy/10 text-xs font-medium text-deep-navy uppercase tracking-widest mb-4">
              <HelpCircle className="w-3.5 h-3.5 text-champagne-gold" />
              <span>Guest Guidance · Kelve Beach Resort</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-deep-navy font-display tracking-tight">
              Frequently Asked Questions About Our Kelve Beach Resort
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed font-sans">
              Find clear answers to common inquiries regarding timings, dining, accessibility, and bookings.
            </p>
          </div>

          {/* FAQPage JSON-LD Schema for Google Rich Snippets */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": RESORT_FAQS.map((faq) => ({
                  "@type": "Question",
                  "name": faq.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer,
                  },
                })),
              }),
            }}
          />

          {/* Faq Accordion using shadcn accordion */}
          <Accordion type="single" collapsible defaultValue="faq-best-resort" className="w-full space-y-3">
            {RESORT_FAQS.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="bg-white/75 border border-charcoal/10 rounded-2xl overflow-hidden data-[state=open]:border-champagne-gold/50"
              >
                <AccordionTrigger className="px-5 sm:px-7 py-4 sm:py-5 hover:no-underline transition-colors hover:bg-gray-50/60 text-left">
                  <span className="font-medium text-sm sm:text-base text-deep-navy pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-5 sm:px-7 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed font-sans font-light border-t border-gray-100">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Concierge Support CTA */}
          <div className="mt-12 bg-deep-navy text-warm-ivory rounded-[1.8rem] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-champagne-gold/20">
            <div className="text-center sm:text-left space-y-1">
              <span className="text-[11px] uppercase tracking-widest text-champagne-gold font-semibold block">
                Direct Guest Support
              </span>
              <h3 className="text-lg sm:text-xl font-normal text-warm-ivory font-display">
                Still have a question or special requirement?
              </h3>
              <p className="text-xs text-warm-ivory/70 font-sans">
                Our front desk concierge is available daily to assist with dates, room setups, and dietary requests.
              </p>
            </div>
            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-champagne-gold hover:bg-warm-ivory text-deep-navy text-xs uppercase tracking-wider font-semibold font-sans transition-all duration-300 shadow-sm shrink-0 hover:scale-105 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-deep-navy" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PropertyFaqSection;
