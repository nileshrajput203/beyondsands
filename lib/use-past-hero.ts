"use client";

import { useEffect, useState } from "react";

export function usePastHero() {
  const [isPastHero, setIsPastHero] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        const next = window.scrollY > window.innerHeight * 0.72;
        setIsPastHero((prev) => (prev !== next ? next : prev));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const footerElem = document.getElementById("site-footer");
    let observer: IntersectionObserver | undefined;
    if (footerElem) {
      observer = new IntersectionObserver(
        ([entry]) => setIsFooterVisible(entry.isIntersecting),
        { threshold: 0.1 }
      );
      observer.observe(footerElem);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer?.disconnect();
    };
  }, []);

  return { isPastHero, isFooterVisible };
}
