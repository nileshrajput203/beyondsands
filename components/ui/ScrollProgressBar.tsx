"use client";

import { useEffect, useRef } from "react";

export function ScrollProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      ticking = false;
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll <= 0 || !barRef.current) return;
      const progress = Math.min(100, Math.max(0, (window.scrollY / totalScroll) * 100));
      barRef.current.style.width = `${progress}%`;
    };

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[2px] z-[100] pointer-events-none"
    >
      <div
        ref={barRef}
        className="h-full w-0 bg-gradient-to-r from-champagne-gold/60 via-champagne-gold to-warm-ivory transition-all duration-150 ease-out shadow-[0_0_8px_rgba(196,154,101,0.6)]"
      />
    </div>
  );
}
