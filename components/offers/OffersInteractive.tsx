"use client";

import { useState } from "react";
import { WhatsAppIcon } from "@/components/icons";

type OfferFilter = "all" | "groups" | "couple" | "classic";

interface OfferItem {
  id: string;
  badge: string;
  badgeHighlight?: boolean;
  category: "all" | "groups" | "couple" | "classic";
  title: string;
  subtitle: string;
  ratePerNight: number;
  rateFormatted: string;
  suffix: string;
  mealsIncluded: boolean;
  mealsList: string[] | null;
  checkin: string;
  checkout: string;
  description: string;
  features: string[];
}

const OFFERS: OfferItem[] = [
  {
    id: "groups-package",
    badge: "MOST POPULAR FOR GROUPS",
    badgeHighlight: true,
    category: "groups",
    title: "Per Person Package",
    subtitle: "4 Person Minimum (All Meals Included)",
    ratePerNight: 2800,
    rateFormatted: "₹2,800",
    suffix: "/ Person / Night",
    mealsIncluded: true,
    mealsList: ["Lunch", "Hi-Tea", "Dinner", "Breakfast"],
    checkin: "12:00 PM",
    checkout: "11:00 AM",
    description: "Our signature all-inclusive experience for cohorts, family reunions, and celebrations. Full suite accommodation with 4 wholesome pure-veg coastal meals.",
    features: [
      "4 Wholesome Meals Included",
      "Direct Azure Pool Access",
      "Complimentary Verandah Seating",
      "Free High-Speed Wi-Fi & Parking",
    ],
  },
  {
    id: "couple-package",
    badge: "ROMANTIC BLUE-HOUR GETAWAY",
    badgeHighlight: false,
    category: "couple",
    title: "Couple Package",
    subtitle: "For 2 Persons (All Meals Included)",
    ratePerNight: 7000,
    rateFormatted: "₹7,000",
    suffix: "/ Night (2 Guests)",
    mealsIncluded: true,
    mealsList: ["Lunch", "Hi-Tea", "Dinner", "Breakfast"],
    checkin: "12:00 PM",
    checkout: "11:00 AM",
    description: "An intimate escape crafted for two. Wake to swaying palms, step out onto your private balcony, and enjoy complete dining hospitality from noon to morning.",
    features: [
      "Floral Room & Bed Styling",
      "Private Balcony with Sunset View",
      "All 4 Meals for 2 Guests Included",
      "Evening Poolside Relaxation",
    ],
  },
  {
    id: "classic-accommodation",
    badge: "ROOM ONLY / FLEXIBLE",
    badgeHighlight: false,
    category: "classic",
    title: "Classic Accommodation",
    subtitle: "Room Only (No Food Included)",
    ratePerNight: 5000,
    rateFormatted: "₹5,000",
    suffix: "/ Night",
    mealsIncluded: false,
    mealsList: null,
    checkin: "12:00 PM",
    checkout: "10:00 AM",
    description: "Ideal for travelers desiring pure tranquility and resort amenities while retaining total freedom to dine à la carte or explore local coastal eateries.",
    features: [
      "Spacious 380-400 sq ft Suite",
      "King Size Bed & Rain Shower",
      "Swimming Pool Access",
      "Tea & Coffee Maker in Room",
    ],
  },
];

export function OffersInteractive() {
  const [selectedFilter, setSelectedFilter] = useState<OfferFilter>("all");
  const [stayNights, setStayNights] = useState<number>(1);

  const filteredOffers = selectedFilter === "all"
    ? OFFERS
    : OFFERS.filter((o) => o.category === selectedFilter);

  return (
    <div className="w-full space-y-12">
      {/* 21st.dev Control Bar: Category Filter Pills + Nights Duration Toggle */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white/70 backdrop-blur-md p-4 sm:p-5 rounded-[2px] border border-charcoal/15 shadow-sm">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {[
            { id: "all", label: "All Packages" },
            { id: "groups", label: "Group Package (₹2,800/p)" },
            { id: "couple", label: "Couple Retreat (₹7,000)" },
            { id: "classic", label: "Room Only (₹5,000)" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id as OfferFilter)}
              className={`px-4 py-2 text-xs font-sans uppercase tracking-wider rounded-full transition-all duration-300 cursor-pointer ${
                selectedFilter === tab.id
                  ? "bg-deep-navy text-warm-ivory font-medium shadow-sm"
                  : "bg-white/60 text-charcoal/70 hover:text-deep-navy border border-charcoal/10"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Nights Duration Calculator Selector */}
        <div className="flex items-center gap-3 font-sans text-xs shrink-0">
          <span className="text-charcoal/70 uppercase tracking-wider font-medium">Duration:</span>
          <div className="inline-flex rounded-[2px] border border-charcoal/20 overflow-hidden bg-warm-ivory/50">
            {[1, 2, 3, 5].map((n) => (
              <button
                key={n}
                onClick={() => setStayNights(n)}
                className={`px-3.5 py-1.5 transition-colors cursor-pointer ${
                  stayNights === n
                    ? "bg-champagne-gold text-deep-navy font-semibold"
                    : "text-charcoal/70 hover:bg-white"
                }`}
              >
                {n} {n === 1 ? "Night" : "Nights"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 21st.dev Bento Offer Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredOffers.map((offer) => {
          const totalEstimated = offer.ratePerNight * stayNights;
          const totalFormatted = `₹${totalEstimated.toLocaleString("en-IN")}`;
          const whatsappText = encodeURIComponent(
            `Hi Beyond Sands! I'm interested in booking the *${offer.title}* for ${stayNights} ${stayNights === 1 ? "night" : "nights"} (estimated ${totalFormatted}). Could you confirm availability?`
          );

          return (
            <div
              key={offer.id}
              className={`relative bg-white/80 backdrop-blur-md rounded-2xl p-5 sm:p-8 flex flex-col justify-between transition-all duration-300 border ${
                offer.badgeHighlight
                  ? "border-champagne-gold shadow-lg ring-1 ring-champagne-gold/30 -translate-y-1"
                  : "border-charcoal/15 shadow-sm hover:border-champagne-gold/60"
              }`}
            >
              {offer.badgeHighlight && (
                <div className="absolute -top-3.5 left-6">
                  <span className="px-3 py-1 bg-champagne-gold text-deep-navy text-[10px] font-sans font-bold uppercase tracking-widest rounded-full shadow-sm">
                    Recommended
                  </span>
                </div>
              )}

              <div>
                <span className="font-sans text-[10px] uppercase tracking-widest text-champagne-gold font-semibold block mb-1">
                  {offer.badge}
                </span>

                <h3 className="font-display text-2xl sm:text-3xl text-deep-navy font-normal">
                  {offer.title}
                </h3>

                <span className="font-sans text-xs text-charcoal/60 font-light block mt-1">
                  {offer.subtitle}
                </span>

                {/* Tariff Pricing */}
                <div className="my-6 pb-6 border-b border-charcoal/15">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-display text-4xl text-deep-navy font-medium">
                      {offer.rateFormatted}
                    </span>
                    <span className="font-sans text-xs text-charcoal/60">
                      {offer.suffix}
                    </span>
                  </div>

                  {stayNights > 1 && (
                    <div className="mt-2 flex items-center justify-between text-xs font-sans text-deep-navy bg-warm-ivory/80 px-2.5 py-1 rounded-[2px] border border-charcoal/10">
                      <span>Total for {stayNights} Nights:</span>
                      <span className="font-semibold text-champagne-gold">{totalFormatted}</span>
                    </div>
                  )}

                  <span className="font-sans text-[10px] text-charcoal/50 block mt-1.5">
                    Taxes as applicable · Check-in: {offer.checkin} · Check-out: {offer.checkout}
                  </span>
                </div>

                <p className="font-sans text-xs text-charcoal/75 font-light leading-relaxed mb-6">
                  {offer.description}
                </p>

                {/* Dining Inclusion Course Chips */}
                {offer.mealsIncluded && offer.mealsList && (
                  <div className="mb-6 p-3 bg-warm-ivory/80 border border-charcoal/10 rounded-[2px]">
                    <span className="font-sans text-[10px] uppercase tracking-wider text-deep-navy font-semibold block mb-1.5">
                      Included Dining Courses:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {offer.mealsList.map((meal) => (
                        <span
                          key={meal}
                          className="px-2 py-0.5 text-[10px] font-sans bg-champagne-gold/20 text-deep-navy font-medium rounded-[2px]"
                        >
                          ✓ {meal}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Feature Checklist */}
                <ul className="space-y-2 mb-8 font-sans text-xs text-charcoal/80">
                  {offer.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-champagne-gold shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Direct WhatsApp Booking Action */}
              <a
                href={`https://wa.me/919923895055?text=${whatsappText}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3.5 sm:py-4 font-sans text-xs uppercase tracking-widest font-semibold rounded-full transition-all flex items-center justify-center gap-2 text-center cursor-pointer ${
                  offer.badgeHighlight
                    ? "bg-deep-navy hover:bg-navy-blue text-warm-ivory shadow-md hover:scale-[1.02]"
                    : "bg-white border border-deep-navy/30 text-deep-navy hover:bg-deep-navy hover:text-warm-ivory"
                }`}
              >
                <WhatsAppIcon size={16} />
                <span>Book This Package</span>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
