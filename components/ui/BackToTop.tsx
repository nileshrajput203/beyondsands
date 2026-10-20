"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowUp } from "lucide-react";
import { scrollToY } from "@/lib/scroll-nav";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const circleRef = useRef<SVGCircleElement>(null);

  // SVG circle calculations for 44px container (r = 18)
  const radius = 18;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        ticking = false;
        const currentScrollY = window.scrollY;
        const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;

        // Reveal button after scrolling past 350px (only set state when boolean changes)
        const visible = currentScrollY > 350;
        setIsVisible((prev) => (prev !== visible ? visible : prev));

        // Directly update SVG circle stroke without triggering React component re-renders
        if (circleRef.current && totalScrollHeight > 0) {
          const progress = Math.min(100, Math.max(0, (currentScrollY / totalScrollHeight) * 100));
          const offset = circumference - (progress / 100) * circumference;
          circleRef.current.style.strokeDashoffset = `${offset}`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [circumference]);

  const handleClick = () => {
    scrollToY(0, 1.2);
  };

  return (
    <div
      className={`fixed bottom-[72px] right-3 sm:bottom-[92px] sm:right-6 z-[60] transition-all duration-400 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <button
        type="button"
        onClick={handleClick}
        aria-label="Back to top"
        className="relative group w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-deep-navy/90 hover:bg-deep-navy text-warm-ivory backdrop-blur-md border border-champagne-gold/30 shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer hover:border-champagne-gold"
      >
        {/* Circular SVG Scroll Progress Ring */}
        <svg
          className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-0.5"
          viewBox="0 0 44 44"
          aria-hidden="true"
        >
          {/* Subtle background track */}
          <circle
            cx="22"
            cy="22"
            r={radius}
            fill="none"
            stroke="rgba(248, 246, 241, 0.12)"
            strokeWidth="2"
          />
          {/* Active gold progress stroke */}
          <circle
            ref={circleRef}
            cx="22"
            cy="22"
            r={radius}
            fill="none"
            stroke="#C49A65"
            strokeWidth="2.2"
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            strokeLinecap="round"
            className="transition-all duration-150"
          />
        </svg>

        {/* Upward Arrow Icon */}
        <ArrowUp className="w-4 h-4 text-champagne-gold group-hover:-translate-y-0.5 transition-transform duration-300 z-10" />

        {/* Floating Tooltip */}
        <span className="absolute right-full mr-3 px-2.5 py-1 rounded bg-[#0B2238] text-warm-ivory text-[10px] uppercase tracking-wider font-sans whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md border border-champagne-gold/20">
          Back to top
        </span>
      </button>
    </div>
  );
}

export default BackToTop;
