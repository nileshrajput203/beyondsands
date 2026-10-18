"use client";

import React, { useEffect, useState } from "react";

export function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll <= 0) return;
      const current = window.scrollY;
      setProgress(Math.min(100, Math.max(0, (current / totalScroll) * 100)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[2px] z-[100] pointer-events-none"
    >
      <div
        className="h-full bg-gradient-to-r from-champagne-gold/60 via-champagne-gold to-warm-ivory transition-all duration-150 ease-out shadow-[0_0_8px_rgba(196,154,101,0.6)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
