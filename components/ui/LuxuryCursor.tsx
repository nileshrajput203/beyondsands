"use client";

import React, { useEffect, useState, useRef } from "react";

export function LuxuryCursor() {
  const [enabled, setEnabled] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable on desktop with fine pointer
    if (window.matchMedia("(pointer: fine)").matches && window.innerWidth >= 1024) {
      setEnabled(true);
    } else {
      return;
    }

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    // Track interactive hovers
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const isInteractive = target.closest("a, button, input, select, textarea, [role='button'], .cursor-pointer");
      setIsHovering(Boolean(isInteractive));
    };

    const render = () => {
      // Smooth lerp trailing ring
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }
      animId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown, { passive: true });
    window.addEventListener("mouseup", onMouseUp, { passive: true });
    document.addEventListener("mouseover", handleMouseOver, { passive: true });
    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animId);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none">
      {/* Center Micro Gold Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-champagne-gold transition-opacity duration-200 ${
          isHovering ? "opacity-30 scale-75" : "opacity-90"
        }`}
        style={{ willChange: "transform" }}
      />

      {/* Trailing Luxury Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full border border-champagne-gold/60 transition-[width,height,background-color,border-color] duration-300 ease-out flex items-center justify-center ${
          isHovering
            ? "w-11 h-11 bg-champagne-gold/15 border-champagne-gold"
            : isClicking
            ? "w-6 h-6 border-champagne-gold/90 bg-champagne-gold/20"
            : "w-8 h-8 bg-transparent border-champagne-gold/50"
        }`}
        style={{ willChange: "transform" }}
      />
    </div>
  );
}
