"use client";

import { useState } from "react";
import Image from "next/image";
import { WhatsAppIcon, HeartHandshakeIcon } from "@/components/icons";

interface EventType {
  id: string;
  name: string;
  tagline: string;
  recommendedGuests: string;
  idealFor: string;
  highlights: string[];
}

const EVENT_TYPES: EventType[] = [
  {
    id: "wedding",
    name: "Coastal Wedding & Vows",
    tagline: "Intimate vows under whispering palms at the golden hour.",
    recommendedGuests: "50 – 200 Guests",
    idealFor: "Mehendi, Haldi, Sunset Pheras & Reception",
    highlights: [
      "Open-air 4,000 sq ft Casuarina lawn with fairy light canopies",
      "Air-conditioned indoor banquet hall for indoor rituals & dining",
      "Multi-course pure vegetarian banquet prepared fresh on-site",
      "Dedicated bride & groom preparation suites with private verandahs",
    ],
  },
  {
    id: "anniversary",
    name: "Milestones & Family Reunions",
    tagline: "Celebrate generations coming together by the sea.",
    recommendedGuests: "25 – 100 Guests",
    idealFor: "Silver/Golden Anniversaries, 50th Birthdays, Family Get-Togethers",
    highlights: [
      "Interconnected family suites ensuring everyone stays close",
      "Private pool deck gatherings with evening high tea & snacks",
      "Customized menus tailored to elders (Jain/Sattvic options)",
      "Zero noise pollution—unhurried conversations under the stars",
    ],
  },
  {
    id: "corporate",
    name: "Leadership Retreats & Offsites",
    tagline: "Strategic clarity where city distractions cannot follow.",
    recommendedGuests: "15 – 50 Guests",
    idealFor: "Executive Strategy, Team Building & Innovation Sprints",
    highlights: [
      "High-speed fiber connectivity & AV-equipped banquet conference space",
      "Breakout zones across garden lawns and quiet verandahs",
      "Energizing nutritious vegetarian meals and herbal beverages",
      "Team beach walk trails to Kelva Fort & tide pools",
    ],
  },
  {
    id: "buyout",
    name: "Full Resort Buyout",
    tagline: "Absolute exclusivity—the entire Beyond Sands sanctuary is yours.",
    recommendedGuests: "Up to 150 Guests",
    idealFor: "Complete Private Destination Celebrations",
    highlights: [
      "100% exclusive access to all suites, lawns, pool, and dining facilities",
      "Total privacy with customized schedule and gate security",
      "Full culinary team exclusively dedicated to your party",
      "Flexible check-in and checkout arrangements",
    ],
  },
];

export function WeddingsInteractive() {
  const [selectedType, setSelectedType] = useState<EventType>(EVENT_TYPES[0]);
  const [guestCount, setGuestCount] = useState<number>(100);
  const [duration, setDuration] = useState<string>("2 Days / 1 Night");

  const buildWhatsappUrl = () => {
    const text = encodeURIComponent(
      `*Beyond Sands — Event & Celebration Inquiry*\n` +
      `Event Type: ${selectedType.name}\n` +
      `Estimated Guests: ${guestCount} Guests\n` +
      `Duration: ${duration}\n` +
      `Please share availability, customized banquet packages, and brochure.`
    );
    return `https://wa.me/919923895055?text=${text}`;
  };

  return (
    <div className="space-y-16">
      {/* 21st.dev Style Interactive Event Selector */}
      <div className="bg-white/80 backdrop-blur-sm border border-charcoal/15 rounded-[3px] p-6 sm:p-10 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 hairline-b border-charcoal/15 pb-6">
          <div>
            <span className="font-sans text-[11px] uppercase tracking-widest text-champagne-gold font-semibold block mb-1">
              Step 01 · Select Celebration Vision
            </span>
            <h2 className="font-display text-2xl sm:text-3xl text-deep-navy font-normal">
              Tailored Event Formats
            </h2>
          </div>
          <span className="font-sans text-xs text-charcoal/60">
            Click any format to explore layout & inclusions
          </span>
        </div>

        {/* Filter Pills */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {EVENT_TYPES.map((type) => {
            const isActive = selectedType.id === type.id;
            return (
              <button
                key={type.id}
                onClick={() => setSelectedType(type)}
                className={`p-4 text-left rounded-[2px] transition-all duration-200 border cursor-pointer ${
                  isActive
                    ? "bg-deep-navy text-warm-ivory border-deep-navy shadow-sm"
                    : "bg-warm-ivory/60 text-deep-navy border-charcoal/15 hover:border-champagne-gold/60"
                }`}
              >
                <span
                  className={`text-[10px] uppercase font-mono block mb-1 ${
                    isActive ? "text-champagne-gold" : "text-charcoal/50"
                  }`}
                >
                  {type.recommendedGuests}
                </span>
                <span className="font-display text-base sm:text-lg font-normal block leading-snug">
                  {type.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Type Detail Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-warm-ivory/40 p-6 sm:p-8 rounded-[2px] border border-charcoal/10">
          <div className="lg:col-span-7 space-y-4 font-sans">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-champagne-gold/15 text-deep-navy text-[10px] font-mono uppercase tracking-widest rounded-full">
              <span>Ideal for: {selectedType.idealFor}</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl text-deep-navy font-normal">
              {selectedType.tagline}
            </h3>
            <div className="space-y-2 pt-2">
              {selectedType.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal/80">
                  <span className="text-champagne-gold text-sm leading-none mt-0.5">✦</span>
                  <span className="font-light">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Quick Parameters */}
          <div className="lg:col-span-5 bg-white p-6 rounded-[2px] border border-charcoal/15 space-y-5 shadow-xs">
            <h4 className="font-display text-lg text-deep-navy font-normal hairline-b border-charcoal/15 pb-2">
              Plan Your Gathering
            </h4>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-charcoal/70 mb-2 font-sans">
                Estimated Guests: <span className="font-semibold text-deep-navy">{guestCount} Guests</span>
              </label>
              <input
                type="range"
                min="20"
                max="200"
                step="10"
                value={guestCount}
                onChange={(e) => setGuestCount(Number(e.target.value))}
                className="w-full accent-champagne-gold cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-charcoal/50 mt-1">
                <span>20 Guests</span>
                <span>100 Guests</span>
                <span>200+ Guests</span>
              </div>
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-charcoal/70 mb-2 font-sans">
                Celebration Duration
              </label>
              <div className="grid grid-cols-3 gap-2 text-xs font-sans">
                {["1 Day Event", "2 Days / 1 Night", "3 Days / 2 Nights"].map((dur) => (
                  <button
                    key={dur}
                    type="button"
                    onClick={() => setDuration(dur)}
                    className={`py-2 px-1 text-center rounded-[2px] border text-[11px] transition-colors cursor-pointer ${
                      duration === dur
                        ? "bg-deep-navy text-warm-ivory border-deep-navy"
                        : "bg-warm-ivory/60 text-charcoal/80 border-charcoal/15 hover:border-champagne-gold"
                    }`}
                  >
                    {dur}
                  </button>
                ))}
              </div>
            </div>

            <a
              href={buildWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-deep-navy hover:bg-navy-blue text-warm-ivory py-3.5 rounded-[2px] font-sans text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 transition-colors shadow-sm"
            >
              <WhatsAppIcon size={16} />
              <span>Inquire This Setup</span>
            </a>
          </div>
        </div>
      </div>

      {/* 21st.dev Style Bento Grid for Event Venues */}
      <div>
        <div className="mb-8">
          <span className="font-sans text-[11px] uppercase tracking-widest text-champagne-gold font-semibold block mb-1">
            Venues & Facilities
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-deep-navy font-normal">
            Bespoke Coastal Spaces
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Hero Venue: Casuarina Lawns (8 cols) */}
          <div className="lg:col-span-8 relative min-h-[380px] rounded-[3px] overflow-hidden border border-charcoal/15 shadow-sm group">
            <Image
              src="/assets/gallery/wedding-banner.webp"
              alt="Open-air wedding lawn setup at Beyond Sands"
              fill
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-cover object-center luxury-grade transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/90 via-deep-navy/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-warm-ivory">
              <span className="px-2.5 py-0.5 bg-champagne-gold text-deep-navy text-[10px] font-mono uppercase tracking-widest font-semibold rounded-[2px] inline-block mb-2">
                4,000 SQ FT OPEN LAWN
              </span>
              <h3 className="font-display text-2xl sm:text-3xl text-warm-ivory font-normal mb-2">
                The Whispering Casuarina Lawns
              </h3>
              <p className="font-sans text-xs text-warm-ivory/80 font-light max-w-xl leading-relaxed">
                Surrounded by mature coconut trees and tall casuarinas, this expansive manicured lawn allows natural sea breeze flow, fairy light canopies, and customizable stage setups.
              </p>
            </div>
          </div>

          {/* Venue 2: Banquet Hall (4 cols) */}
          <div className="lg:col-span-4 relative min-h-[380px] rounded-[3px] overflow-hidden border border-charcoal/15 shadow-sm group">
            <Image
              src="/assets/gallery/banquet-hall.jpg"
              alt="Climate-Controlled AC Banquet Hall at Beyond Sands"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover object-center luxury-grade transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/90 via-deep-navy/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-warm-ivory">
              <span className="px-2.5 py-0.5 bg-white/20 backdrop-blur-md text-warm-ivory text-[10px] font-mono uppercase tracking-widest rounded-[2px] inline-block mb-2">
                INDOOR AC COMFORT
              </span>
              <h3 className="font-display text-2xl text-warm-ivory font-normal mb-2">
                The Blue Hour Banquet Hall
              </h3>
              <p className="font-sans text-xs text-warm-ivory/80 font-light leading-relaxed">
                Full air-conditioning, state-of-the-art acoustic design, projector screens, and seamless flow into the dining area.
              </p>
            </div>
          </div>

          {/* Venue 3: Pure Veg Banqueting (6 cols) */}
          <div className="lg:col-span-6 bg-white/80 p-8 rounded-[3px] border border-charcoal/15 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
                <span className="w-3 h-3 rounded-full bg-emerald-600 inline-block" />
              </div>
              <span className="font-sans text-[11px] uppercase tracking-widest text-champagne-gold font-semibold block">
                100% Pure Vegetarian Feasts
              </span>
              <h3 className="font-display text-2xl text-deep-navy font-normal">
                Authentic Ceremonial Catering
              </h3>
              <p className="font-sans text-xs sm:text-sm text-charcoal/75 font-light leading-relaxed">
                Our master chefs curate multi-course royal feasts with dedicated Jain and Swaminarayan kitchen protocols. Fresh coastal coconut curries, stone-ground Konkani gravies, hand-rolled puris, and traditional sweets made without artificial additives.
              </p>
            </div>
            <div className="pt-6 font-mono text-[11px] text-charcoal/60">
              Live Counters · High Tea Stations · Breakfast Buffets
            </div>
          </div>

          {/* Venue 4: Guest Stay & Exclusivity (6 cols) */}
          <div className="lg:col-span-6 bg-white/80 p-8 rounded-[3px] border border-charcoal/15 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-deep-navy/5 border border-deep-navy/10 flex items-center justify-center text-deep-navy">
                <HeartHandshakeIcon size={20} className="text-champagne-gold" />
              </div>
              <span className="font-sans text-[11px] uppercase tracking-widest text-champagne-gold font-semibold block">
                Stay In Coastal Comfort
              </span>
              <h3 className="font-display text-2xl text-deep-navy font-normal">
                Accommodations For Wedding Parties
              </h3>
              <p className="font-sans text-xs sm:text-sm text-charcoal/75 font-light leading-relaxed">
                Spacious air-conditioned garden verandah rooms and executive family dorms allow your wedding entourage to stay together on-site. Ample parking, 24/7 power backup, and dedicated housekeeping hosts ensure smooth comfort.
              </p>
            </div>
            <div className="pt-6 font-mono text-[11px] text-charcoal/60">
              Private Verandahs · Secure Parking · Swimming Pool Access
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
