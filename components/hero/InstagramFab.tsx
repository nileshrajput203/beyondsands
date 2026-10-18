"use client";

import { useState, useEffect } from "react";
import { InstagramIcon } from "../icons";

export function InstagramFab() {
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const footerElem = document.getElementById("site-footer");
    if (footerElem) observer.observe(footerElem);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed bottom-6 left-6 z-[60] flex items-center gap-3 transition-opacity duration-500 ${
        isFooterVisible ? "opacity-30 hover:opacity-100" : "opacity-100"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <a
        href="https://www.instagram.com/beyondsands/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Beyond Sands on Instagram"
        title="Follow @beyondsands on Instagram"
        className="relative group w-14 h-14 rounded-full bg-gradient-to-tr from-[#f58529] via-[#dd2a7b] to-[#8134af] text-white flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 cursor-pointer animate-float-left"
      >
        <InstagramIcon size={26} strokeWidth={1.75} />
        {/* Subtle pulsing beacon */}
        <span className="absolute inset-0 rounded-full bg-[#dd2a7b]/40 animate-ping pointer-events-none" />
      </a>

      <style jsx>{`
        @keyframes floatSlowLeft {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        .animate-float-left {
          animation: floatSlowLeft 4.5s ease-in-out infinite;
          animation-delay: 0.75s;
        }
      `}</style>
    </div>
  );
}

export default InstagramFab;
