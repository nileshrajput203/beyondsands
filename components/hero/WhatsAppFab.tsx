"use client";

import React, { useState, useEffect } from "react";
import { WhatsAppIcon } from "../icons";

export function WhatsAppFab() {
  const [isHovered, setIsHovered] = useState(false);
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

  const handleClick = () => {
    const text = encodeURIComponent(
      "Hi! I'd like to inquire about booking a stay at Beyond Sands. Could you help me with availability and rates?"
    );
    window.open(`https://wa.me/919923895055?text=${text}`, "_blank");
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-[60] flex items-center gap-3 transition-opacity duration-500 ${
        isFooterVisible ? "opacity-30 hover:opacity-100" : "opacity-100"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      {/* Floating Circle Button */}
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Chat with Beyond Sands on WhatsApp"
        className="relative group w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 cursor-pointer animate-float"
      >
        <WhatsAppIcon size={28} />
        {/* Subtle pulsing beacon */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none" />
      </button>

      <style jsx>{`
        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        .animate-float {
          animation: floatSlow 4.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
