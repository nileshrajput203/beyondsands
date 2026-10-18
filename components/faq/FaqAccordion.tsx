"use client";

import { useState } from "react";

interface FaqItem {
  q: string;
  a: string;
  category: string;
}

const FAQS: FaqItem[] = [
  {
    category: "Arrival & Stay",
    q: "What are the resort check-in and check-out times?",
    a: "Standard check-in is from 12:00 PM onwards, and check-out is by 10:00 AM (or 11:00 AM for guests on all-inclusive packages). Early arrival or late departure requests are accommodated whenever room availability permits—simply notify our concierge prior to arrival.",
  },
  {
    category: "Arrival & Stay",
    q: "How close is Beyond Sands to Kelva Beach?",
    a: "We are situated in a tranquil coconut palm enclave directly opposite Sheetla Devi Temple. A peaceful, shaded 5-minute stroll through the casuarina groves brings you directly to the quietest stretch of Kelva Beach.",
  },
  {
    category: "Dining & Cuisine",
    q: "What kind of cuisine does the resort serve?",
    a: "Beyond Sands is proudly a 100% Pure Vegetarian resort. Our culinary team serves authentic Maharashtrian coastal specialties, traditional thalis, North Indian curries, and warm breakfast spreads prepared fresh every morning with regional produce and pure ingredients.",
  },
  {
    category: "Dining & Cuisine",
    q: "Can special dietary requests or Jain meals be arranged?",
    a: "Yes, absolutely. We regularly prepare pure Jain meals (no onion, garlic, or root vegetables) and cater to specific dietary preferences upon request with prior advance notice.",
  },
  {
    category: "Facilities & Leisure",
    q: "What are the swimming pool timings and guidelines?",
    a: "Our azure swimming pool is open daily from 07:00 AM to 08:00 PM. Clean swimwear is required for all guests entering the pool. Children must be accompanied by an adult guardian at all times.",
  },
  {
    category: "Facilities & Leisure",
    q: "Is there secure on-site parking at the property?",
    a: "Yes, we provide complimentary private on-site parking with 24/7 security monitoring for all residing guests.",
  },
  {
    category: "Travel & Directions",
    q: "How do I reach Beyond Sands from Mumbai or Surat?",
    a: "By Train: Kelve Road Railway Station (Western Railway) is just 15 minutes away by auto-rickshaw or taxi. By Road: We are conveniently accessed via NH 48 (Mumbai-Ahmedabad Highway) via Manor or Palghar, approximately 2.5 to 3 hours drive from Mumbai International Airport.",
  },
  {
    category: "Events & Buyouts",
    q: "Can I host weddings, family reunions, or private celebrations?",
    a: "Yes! We specialize in intimate coastal weddings, milestone family reunions, and executive retreats. Our open-air garden lawns and air-conditioned banquet hall can be booked along with full-property private buyouts.",
  },
];

const CATEGORIES = ["All Questions", "Arrival & Stay", "Dining & Cuisine", "Facilities & Leisure", "Travel & Directions", "Events & Buyouts"];

export function FaqAccordion() {
  const [activeCategory, setActiveCategory] = useState("All Questions");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = activeCategory === "All Questions"
    ? FAQS
    : FAQS.filter((f) => f.category === activeCategory);

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="w-full space-y-10">
      {/* 21st.dev Filterable Category Pills with slide transition */}
      <div className="flex flex-wrap items-center justify-start gap-2 sm:gap-3 border-b border-charcoal/15 pb-4">
        {CATEGORIES.map((cat) => {
          const isActive = cat === activeCategory;
          return (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setOpenIndex(null);
              }}
              className={`px-4 py-2 rounded-full text-xs font-sans uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                isActive
                  ? "bg-deep-navy text-warm-ivory shadow-sm font-medium"
                  : "bg-white/60 text-charcoal/70 hover:text-deep-navy hover:bg-white border border-charcoal/15"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* 21st.dev Luxury Accordion Cards */}
      <div className="space-y-4 font-sans">
        {filteredFaqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={faq.q}
              className={`border transition-all duration-300 rounded-[2px] overflow-hidden ${
                isOpen
                  ? "bg-white/90 border-champagne-gold/70 shadow-md ring-1 ring-champagne-gold/20"
                  : "bg-white/50 border-charcoal/15 hover:border-champagne-gold/40 hover:bg-white/70"
              }`}
            >
              <button
                onClick={() => toggleFaq(idx)}
                aria-expanded={isOpen}
                className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer select-none"
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-champagne-gold font-semibold">
                    0{idx + 1}
                  </span>
                  <h3 className="font-display text-lg sm:text-xl text-deep-navy font-normal">
                    {faq.q}
                  </h3>
                </div>

                <div
                  className={`w-7 h-7 rounded-full border border-champagne-gold/40 flex items-center justify-center text-champagne-gold transition-transform duration-300 shrink-0 ${
                    isOpen ? "rotate-45 bg-champagne-gold text-deep-navy" : ""
                  }`}
                >
                  <span className="text-base leading-none font-light">+</span>
                </div>
              </button>

              <div
                className={`transition-all duration-300 ease-out overflow-hidden px-6 sm:px-7 ${
                  isOpen ? "max-h-96 pb-6 sm:pb-7 opacity-100" : "max-h-0 pb-0 opacity-0"
                }`}
              >
                <div className="pt-2 border-t border-charcoal/10">
                  <p className="text-xs sm:text-sm text-charcoal/80 font-light leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
