"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MenuDrawer } from "./MenuDrawer";

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
    description: "Breakfast (08:00 AM – 10:30 AM) · Steamed Idli & Medu Vada, Coastal Poha with Crispy Peanuts, Upma & Sheera with Fresh Masala Chai.",
    src: "/assets/dining/breakfast-plate.png",
    alt: "Vegetarian breakfast spread at Beyond Sands",
  },
  {
    id: "lunch",
    name: "Lunch",
    timing: "12:30 PM – 03:00 PM",
    description: "Lunch (12:30 PM – 03:00 PM) · Hearty Maharashtrian Coastal Thali, Paneer Coastal Masala, Dal Tadka, Steamed Basmati & Chilled Solkadhi.",
    src: "/assets/dining/lunch-plate.png",
    alt: "Vegetarian lunch thali at Beyond Sands",
  },
  {
    id: "dinner",
    name: "Dinner",
    timing: "08:00 PM – 10:30 PM",
    description: "Dinner (08:00 PM – 10:30 PM) · Pure Vegetarian Blue-Hour Feast, Palak Corn Delight, Artisanal Tandoori Rotis, Jeera Pulao & Warm Gulab Jamun.",
    src: "/assets/dining/dinner-plate.png",
    alt: "Vegetarian dinner feast at Beyond Sands",
  },
];

export function Food() {
  const [activeMeal, setActiveMeal] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
  const isDarkRef = useRef(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    const stage = stageRef.current;
    if (!section || !stage) return;

    const plates = Array.from(stage.querySelectorAll<HTMLDivElement>(".plate-item"));
    if (plates.length === 0) return;

    const updatePhysics = (p: number) => {
      // p goes from 0.0 to 1.0
      // 0.0 => Breakfast (meal 0)
      // 0.5 => Lunch (meal 1)
      // 1.0 => Dinner (meal 2)
      const currentPos = p * 2; // 0 to 2
      const activeIdx = Math.min(2, Math.max(0, Math.round(currentPos)));
      setActiveMeal(activeIdx);

      // Interpolate background color: #fffaf2 -> #f6debE -> #102242
      let bg = "#fffaf2";
      if (p <= 0.5) {
        bg = lerpColor("#fffaf2", "#f6debE", p * 2);
      } else {
        bg = lerpColor("#f6debE", "#102242", (p - 0.5) * 2);
      }
      section.style.backgroundColor = bg;

      // Dark mode flag for Dinner
      const isDark = p > 0.62;
      isDarkRef.current = isDark;
      section.style.color = isDark ? "#FFFFFF" : "#17365d";

      // Calculate viewport responsive spacing
      const panelWidth = stage.parentElement?.offsetWidth || 1000;
      const baseSpacing = Math.min(panelWidth * 0.42, 380);

      // Animate dishes: moving right to left and rotating as user scrolls!
      plates.forEach((plate, i) => {
        // distance from active position:
        // i = 0: at p=0 dist=0; at p=1 dist=-2 (moved far left)
        // i = 1: at p=0 dist=+1 (on right); at p=0.5 dist=0 (center); at p=1 dist=-1 (on left)
        // i = 2: at p=0 dist=+2 (far right); at p=0.5 dist=+1; at p=1 dist=0 (center)
        const dist = i - currentPos;
        const absDist = Math.abs(dist);

        // Movement: right to left
        const x = dist * baseSpacing;

        // Scale: center is 1.0, sides shrink to ~0.62
        const scale = Math.max(0.55, 1 - absDist * 0.38);

        // Rotation: rotates continuously as it moves right to left!
        // At the same time, tilted based on distance
        const continuousRotation = p * -220; // Spins counter-clockwise as scrolling down
        const tiltRotation = dist * -18;
        const totalRotation = continuousRotation + tiltRotation;

        // Opacity
        const opacity = Math.max(0, 1 - Math.pow(absDist, 1.4) * 0.65);

        // Z-Index
        const zIndex = Math.round(10 - absDist * 4);

        plate.style.transform = `translate(-50%, -50%) translateX(${x}px) scale(${scale}) rotate(${totalRotation}deg)`;
        plate.style.opacity = String(opacity);
        plate.style.zIndex = String(zIndex);
      });
    };

    // Initialize initial frame
    updatePhysics(0);

    // Scroll-based pinned animation with scrub
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
      st.kill();
    };
  }, []);

  const handleTabClick = (index: number) => {
    setActiveMeal(index);
    const st = scrollTriggerRef.current;
    if (st) {
      const targetP = index / 2;
      const targetScroll = st.start + targetP * (st.end - st.start);
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
    }
  };

  const isDark = activeMeal === 2;

  return (
    <>
      {/* Text-free spacer between Location and Food */}
      <div
        id="location-food-spacer"
        aria-hidden="true"
        className="w-full h-[20vh] min-h-[120px] pointer-events-none"
      />

      <section
        ref={sectionRef}
        id="food-section"
        data-id="dining"
        aria-labelledby="dining-heading"
        className="relative w-full min-h-screen py-16 sm:py-24 px-4 sm:px-8 lg:px-12 overflow-hidden select-none"
        style={{
          backgroundColor: "#fffaf2",
          color: "#17365d",
        }}
      >
        <div className="w-full max-w-[1500px] mx-auto text-center flex flex-col items-center">
          {/* Top Bar: Section Index + View Menu CTA */}
          <div className="w-full flex items-center justify-between mb-6 sm:mb-8 border-b border-current/15 pb-4">
            <div className="flex items-baseline gap-4">
              <span className="font-sans text-xs uppercase tracking-widest text-champagne-gold font-semibold">
                03
              </span>
              <span className="font-display text-2xl sm:text-3xl font-normal tracking-wide">
                PURE VEGETARIAN DINING
              </span>
            </div>

            <button
              onClick={() => setIsMenuOpen(true)}
              aria-label="View resort dining menu"
              className="group flex items-center gap-2 text-xs sm:text-sm font-sans uppercase tracking-widest text-champagne-gold hover:opacity-80 transition-opacity cursor-pointer font-medium"
            >
              <span>view menu</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>

          {/* Heading */}
          <h2
            id="dining-heading"
            className="m-0 font-normal text-[clamp(36px,5vw,76px)] leading-[1.15] tracking-[-2px]"
            style={{
              fontFamily: "var(--font-display), 'Playfair Display', serif",
            }}
          >
            100% pure vegetarian.
          </h2>

          {/* Pure Vegetarian FSSAI Quality Badge */}
          <div
            className="inline-flex items-center justify-center gap-3.5 sm:gap-4 my-4 sm:my-5 px-5 sm:px-6 py-2.5 sm:py-3 border border-[#d6a05c] rounded-full shadow-sm text-[10px] sm:text-xs font-semibold tracking-[3px] sm:tracking-[4px] uppercase leading-none transition-colors duration-500"
            style={{
              backgroundColor: isDark ? "#0E243E" : "#FFFFFF",
              color: isDark ? "#F8F6F1" : "#17365d",
            }}
          >
            {/* Green Veg Square & Dot Mark */}
            <span
              className="relative w-[22px] sm:w-[26px] h-[22px] sm:h-[26px] flex-shrink-0 border-2 border-[#159b4d] flex items-center justify-center rounded-[2px]"
              aria-hidden="true"
            >
              <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#159b4d]" />
            </span>
            <span>
              Fully vegetarian resort &nbsp;·&nbsp; every meal, every day
            </span>
          </div>

          {/* Wooden Food Display Panel */}
          <div className="relative w-full h-[clamp(280px,44vh,460px)] my-3 sm:my-4 mx-auto overflow-hidden rounded-[20px] sm:rounded-[28px] bg-[#493022] shadow-[0_40px_70px_-35px_rgba(60,30,10,0.55)] border border-black/10">
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

            {/* Small Decorative Side Plates */}
            <div
              className="absolute z-[1] right-[4%] sm:right-[7%] top-1/2 w-[clamp(90px,14vw,215px)] aspect-square opacity-25 -translate-y-1/2 pointer-events-none filter saturate-75 drop-shadow-[0_15px_15px_rgba(20,10,5,0.4)]"
              aria-hidden="true"
            >
              <Image
                src="/assets/dining/dinner-plate.png"
                alt=""
                fill
                sizes="220px"
                className="object-contain"
              />
            </div>

            <div
              className="absolute z-[1] left-[3%] sm:left-[6%] top-1/2 w-[clamp(80px,12vw,180px)] aspect-square opacity-20 -translate-y-1/2 pointer-events-none filter saturate-75 drop-shadow-[0_15px_15px_rgba(20,10,5,0.4)] hidden sm:block"
              aria-hidden="true"
            >
              <Image
                src="/assets/dining/breakfast-plate.png"
                alt=""
                fill
                sizes="180px"
                className="object-contain"
              />
            </div>

            {/* Food Plates Stage — Animated right to left with scroll rotation */}
            <div
              ref={stageRef}
              id="plateStage"
              className="absolute left-1/2 top-1/2 w-0 h-0 z-[2]"
            >
              {MEALS.map((meal, i) => (
                <div
                  key={meal.id}
                  data-meal={i}
                  onClick={() => handleTabClick(i)}
                  className="plate-item absolute left-0 top-0 w-[min(65vw,340px)] sm:w-[min(30vw,390px)] cursor-pointer drop-shadow-[0_20px_25px_rgba(25,10,2,0.45)] select-none will-change-transform"
                >
                  <Image
                    src={meal.src}
                    alt={meal.alt}
                    width={420}
                    height={420}
                    priority={i === 0}
                    className="w-full h-auto object-contain filter drop-shadow-md hover:scale-103 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Meal Navigation Tabs */}
          <nav
            className="flex items-center justify-center gap-6 sm:gap-12 lg:gap-16 mt-5 sm:mt-7"
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
                  className="relative pb-2.5 sm:pb-3 border-b-[3px] bg-transparent text-[clamp(16px,2.2vw,28px)] font-normal tracking-[3px] sm:tracking-[5px] uppercase cursor-pointer transition-all duration-300 hover:opacity-100 focus-visible:outline-2 focus-visible:outline-[#c49a63] focus-visible:outline-offset-4"
                >
                  {meal.name}
                </button>
              );
            })}
          </nav>

          {/* Dining Note / Description */}
          <p
            id="diningNote"
            aria-live="polite"
            className="min-h-[28px] mt-4 max-w-2xl text-xs sm:text-sm font-sans font-light leading-relaxed transition-colors duration-500"
            style={{
              color: isDark ? "#d2deec" : "#526b87",
            }}
          >
            {MEALS[activeMeal].description}
          </p>
        </div>
      </section>

      {/* Luxury Menu Modal Drawer */}
      <MenuDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}
