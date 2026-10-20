"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scrollToY } from "@/lib/scroll-nav";
import { WhatsAppIcon } from "../icons";

function parseHex(hex: string): [number, number, number] {
  const c = hex.replace("#", "");
  return [
    parseInt(c.substring(0, 2), 16),
    parseInt(c.substring(2, 4), 16),
    parseInt(c.substring(4, 6), 16),
  ];
}

function lerpColor(c1: string, c2: string, t: number): string {
  const clampedT = Math.max(0, Math.min(1, t));
  const [r1, g1, b1] = parseHex(c1);
  const [r2, g2, b2] = parseHex(c2);
  const r = Math.round(r1 + (r2 - r1) * clampedT);
  const g = Math.round(g1 + (g2 - g1) * clampedT);
  const b = Math.round(b1 + (b2 - b1) * clampedT);
  return `rgb(${r}, ${g}, ${b})`;
}

const MEALS = [
  {
    id: "breakfast",
    name: "Breakfast",
    timing: "08:00 AM – 10:30 AM",
    description:
      "Breakfast (08:00 AM – 10:30 AM) · Steamed Idli & Medu Vada, Coastal Poha with Crispy Peanuts, Upma & Sheera with Fresh Masala Chai.",
    src: "/assets/dining/breakfast.png",
    alt: "100% Pure Veg breakfast spread at Beyond Sands Resort, Kelva Beach Palghar",
  },
  {
    id: "lunch",
    name: "Lunch",
    timing: "12:30 PM – 03:00 PM",
    description:
      "Lunch (12:30 PM – 03:00 PM) · Hearty Maharashtrian Coastal Thali, Paneer Coastal Masala, Dal Tadka, Steamed Basmati & Chilled Solkadhi.",
    src: "/assets/dining/lunch.png",
    alt: "Maharashtrian pure veg buffet lunch thali at Beyond Sands Resort Palghar",
  },
  {
    id: "dinner",
    name: "Dinner",
    timing: "08:00 PM – 10:30 PM",
    description:
      "Dinner (08:00 PM – 10:30 PM) · Pure Vegetarian Blue-Hour Feast, Palak Corn Delight, Artisanal Tandoori Rotis, Jeera Pulao & Warm Gulab Jamun.",
    src: "/assets/dining/dinner.png",
    alt: "Satvik pure veg dinner feast at Beyond Sands Pure Veg Resort Kelve Beach",
  },
];

const KITCHEN_PHONE = "919923895055";

export function Food() {
  const [activeMeal, setActiveMeal] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    const stage = stageRef.current;
    if (!section || !stage) return;

    const plates = Array.from(stage.querySelectorAll<HTMLDivElement>(".plate-item"));
    if (plates.length === 0) return;

    let panelWidth = stage.parentElement?.offsetWidth || 1000;
    const measurePanelWidth = () => {
      panelWidth = stage.parentElement?.offsetWidth || 1000;
    };
    window.addEventListener("resize", measurePanelWidth, { passive: true });

    const updatePhysics = (p: number) => {
      // p: 0.0 => Breakfast (0) | 0.5 => Lunch (1) | 1.0 => Dinner (2)
      const currentPos = p * 2;
      const activeIdx = Math.min(2, Math.max(0, Math.round(currentPos)));
      setActiveMeal(activeIdx);

      // Revert dynamic background color change: #fffaf2 -> #f6debE -> #102242
      let bg = "#fffaf2";
      if (p <= 0.5) {
        bg = lerpColor("#fffaf2", "#f6debE", p * 2);
      } else {
        bg = lerpColor("#f6debE", "#102242", (p - 0.5) * 2);
      }
      section.style.backgroundColor = bg;

      // Dark mode text color for Dinner
      const isDark = p > 0.62;
      section.style.color = isDark ? "#FFFFFF" : "#17365d";

      // Viewport responsive spacing
      const baseSpacing = Math.min(panelWidth * 0.42, 380);

      // Animate dishes: moving right to left and rotating dynamically on scroll
      plates.forEach((plate, i) => {
        const dist = i - currentPos;
        const absDist = Math.abs(dist);

        const x = dist * baseSpacing;
        const scale = Math.max(0.55, 1 - absDist * 0.38);

        const continuousRotation = p * -220;
        const tiltRotation = dist * -18;
        const totalRotation = continuousRotation + tiltRotation;

        const opacity = Math.max(0, 1 - Math.pow(absDist, 1.4) * 0.65);
        const zIndex = Math.round(10 - absDist * 4);

        plate.style.transform = `translate(-50%, -50%) translateX(${x}px) scale(${scale}) rotate(${totalRotation}deg)`;
        plate.style.opacity = String(opacity);
        plate.style.zIndex = String(zIndex);
      });
    };

    updatePhysics(0);

    const st = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "+=1700",
      pin: true,
      scrub: 0.65,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        updatePhysics(self.progress);
      },
    });

    scrollTriggerRef.current = st;

    return () => {
      window.removeEventListener("resize", measurePanelWidth);
      st.kill(true);
    };
  }, []);

  const handleTabClick = (index: number) => {
    setActiveMeal(index);
    const st = scrollTriggerRef.current;
    if (st) {
      const targetP = index / 2;
      const targetScroll = st.start + targetP * (st.end - st.start);
      scrollToY(targetScroll);
    }
  };

  const isDark = activeMeal === 2;
  const currentMeal = MEALS[activeMeal];
  const mealMessage = encodeURIComponent(
    `Hi Beyond Sands! Please share today's fresh pure vegetarian ${currentMeal.name} menu and dining options.`
  );

  return (
    <>
      {/* Gentle transition spacer before Food */}
      <div
        id="location-food-spacer"
        aria-hidden="true"
        className="w-full h-8 pointer-events-none"
      />

      <div>
        <section
          ref={sectionRef}
          id="food-section"
        data-id="dining"
        aria-labelledby="dining-heading"
        className="relative w-full min-h-[100dvh] py-10 sm:py-14 lg:py-16 px-4 sm:px-8 lg:px-12 overflow-hidden select-none transition-colors duration-500"
        style={{
          backgroundColor: "#fffaf2",
          color: "#17365d",
        }}
      >
        <div className="w-full max-w-[1500px] mx-auto text-center flex flex-col items-center">
          {/* Top Bar: Section Title + Direct Contact for Menu Link */}
          <div className="w-full flex items-center justify-between mb-3 sm:mb-6 border-b border-current/15 pb-2 sm:pb-3">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-champagne-gold animate-pulse" />
              <span className="font-display text-lg sm:text-3xl font-normal tracking-wide">
                PURE VEGETARIAN DINING
              </span>
            </div>

            <a
              href={`https://wa.me/${KITCHEN_PHONE}?text=${mealMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact Beyond Sands on WhatsApp for today's dining menu"
              className="group flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-sm font-sans uppercase tracking-widest text-champagne-gold hover:opacity-80 transition-opacity cursor-pointer font-medium"
            >
              <span className="sm:hidden">Menu</span>
              <span className="hidden sm:inline">Contact for Menu</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

          {/* Heading */}
          <h2
            id="dining-heading"
            className="m-0 font-normal text-2xl sm:text-[clamp(32px,4.5vw,68px)] leading-[1.15] tracking-tight sm:tracking-[-1.5px] font-display"
          >
            100% pure vegetarian.
          </h2>

          {/* Pure Vegetarian FSSAI Quality Badge */}
          <div
            className="inline-flex items-center justify-center gap-2 sm:gap-4 my-2 sm:my-4 px-3 sm:px-6 py-1.5 sm:py-2.5 border border-[#d6a05c] rounded-full shadow-sm text-[8.5px] sm:text-xs font-semibold tracking-[1.5px] sm:tracking-[4px] uppercase leading-none transition-colors duration-500"
            style={{
              backgroundColor: isDark ? "#0E243E" : "#FFFFFF",
              color: isDark ? "#F8F6F1" : "#17365d",
            }}
          >
            {/* Green Veg Square & Dot Mark */}
            <span
              className="relative w-4 sm:w-[26px] h-4 sm:h-[26px] flex-shrink-0 border-2 border-[#159b4d] flex items-center justify-center rounded-[2px]"
              aria-hidden="true"
            >
              <span className="w-1.5 sm:w-3 h-1.5 sm:h-3 rounded-full bg-[#159b4d]" />
            </span>
            <span>
              Fully vegetarian resort &nbsp;·&nbsp; every meal, every day
            </span>
          </div>

          {/* Wooden Food Display Panel */}
          <div className="relative w-full h-[clamp(210px,32vh,420px)] sm:h-[clamp(260px,38vh,420px)] my-2 sm:my-3 mx-auto overflow-hidden rounded-2xl sm:rounded-[28px] bg-[#493022] shadow-[0_40px_70px_-35px_rgba(60,30,10,0.55)] border border-black/10">
            {/* Rustic Wood Table Top Image */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/assets/dining/wood.jpg"
                alt="Rustic wooden dining table surface"
                fill
                sizes="(max-width: 1024px) 100vw, 1500px"
                className="object-cover object-center"
                priority
              />
            </div>

            {/* Radial Vignette Lighting Gradient */}
            <div
              className="absolute inset-0 pointer-events-none z-[1]"
              style={{
                background:
                  "radial-gradient(ellipse at center, transparent 38%, rgba(25, 10, 2, 0.45) 100%)",
              }}
            />

            {/* Food Plates Stage — Animated right to left with scroll rotation */}
            <div
              ref={stageRef}
              id="plateStage"
              className="absolute inset-0 z-[2] pointer-events-none"
            >
              {MEALS.map((meal, i) => (
                <div
                  key={meal.id}
                  data-meal={i}
                  onClick={() => handleTabClick(i)}
                  className="plate-item absolute top-1/2 left-1/2 w-[clamp(190px,24vw,310px)] h-[clamp(190px,24vw,310px)] rounded-full overflow-hidden cursor-pointer drop-shadow-[0_20px_25px_rgba(25,10,2,0.45)] select-none will-change-transform pointer-events-auto border-2 border-[#fffaf2]/20"
                >
                  <Image
                    src={meal.src}
                    alt={meal.alt}
                    fill
                    sizes="320px"
                    className="w-full h-full object-cover object-center filter drop-shadow-md hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Meal Navigation Tabs */}
          <nav
            className="flex items-center justify-center gap-4 sm:gap-12 lg:gap-16 mt-3.5 sm:mt-7"
            aria-label="Select a meal"
          >
            {MEALS.map((meal, index) => {
              const isSelected = index === activeMeal;
              return (
                <button
                  key={meal.id}
                  type="button"
                  data-index={index}
                  aria-pressed={isSelected}
                  onClick={() => handleTabClick(index)}
                  style={{
                    fontFamily: "var(--font-display), 'Playfair Display', serif",
                    borderBottomColor: isSelected ? "#c49a63" : "transparent",
                    opacity: isSelected ? 1 : 0.45,
                  }}
                  className="relative pb-1.5 sm:pb-3 border-b-[2px] sm:border-b-[3px] bg-transparent text-sm sm:text-[clamp(16px,2.2vw,28px)] font-normal tracking-[2px] sm:tracking-[5px] uppercase cursor-pointer transition-all duration-300 hover:opacity-100 focus-visible:outline-2 focus-visible:outline-[#c49a63] focus-visible:outline-offset-4"
                >
                  {meal.name}
                </button>
              );
            })}
          </nav>

          {/* Dining Note / Description & Direct WhatsApp CTA */}
          <div className="mt-4 flex flex-col items-center gap-3.5">
            <p
              id="diningNote"
              aria-live="polite"
              className="max-w-2xl text-xs sm:text-sm font-sans font-light leading-relaxed transition-colors duration-500"
              style={{
                color: isDark ? "#d2deec" : "#526b87",
              }}
            >
              {MEALS[activeMeal].description}
            </p>

            <a
              href={`https://wa.me/${KITCHEN_PHONE}?text=${mealMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Inquire about today's fresh ${currentMeal.name} menu on WhatsApp`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-champagne-gold text-deep-navy font-sans text-xs uppercase tracking-wider font-semibold shadow-md hover:bg-champagne-gold/90 transition-all hover:scale-105"
            >
              <WhatsAppIcon size={15} />
              <span>Contact for {currentMeal.name} Menu</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  </>
  );
}

export default Food;
