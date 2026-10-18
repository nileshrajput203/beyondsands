"use client";

import { useEffect, useState, useRef } from "react";

const GOLD = "196, 154, 101";

const RING_STATES = {
  default: { size: 32, border: `rgba(${GOLD}, 0.5)`, background: "transparent" },
  hover: { size: 44, border: `rgba(${GOLD}, 1)`, background: `rgba(${GOLD}, 0.15)` },
  click: { size: 24, border: `rgba(${GOLD}, 0.9)`, background: `rgba(${GOLD}, 0.2)` },
} as const;

type CursorMode = keyof typeof RING_STATES;

const INTERACTIVE_SELECTOR =
  "a, button, input, select, textarea, [role='button'], .cursor-pointer";

export function LuxuryCursor() {
  const [enabled, setEnabled] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable on desktop with fine pointer
    if (!(window.matchMedia("(pointer: fine)").matches && window.innerWidth >= 1024)) {
      return;
    }
    setEnabled(true);

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let dotScale = 1;
    let hovering = false;
    let pressing = false;
    let mode: CursorMode = "default";
    let animId: number;

    const applyMode = () => {
      const next: CursorMode = hovering ? "hover" : pressing ? "click" : "default";
      if (next === mode) return;
      mode = next;

      const state = RING_STATES[next];
      const ring = ringRef.current;
      if (ring) {
        ring.style.width = `${state.size}px`;
        ring.style.height = `${state.size}px`;
        ring.style.borderColor = state.border;
        ring.style.backgroundColor = state.background;
      }

      dotScale = next === "hover" ? 0.75 : 1;
      if (dotRef.current) {
        dotRef.current.style.opacity = next === "hover" ? "0.3" : "0.9";
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(${dotScale})`;
      }
    };

    const onMouseDown = () => {
      pressing = true;
      applyMode();
    };

    const onMouseUp = () => {
      pressing = false;
      applyMode();
    };

    // Track interactive hovers without re-rendering React
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      hovering = Boolean(target?.closest(INTERACTIVE_SELECTOR));
      applyMode();
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
    document.addEventListener("mouseover", onMouseOver, { passive: true });
    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseover", onMouseOver);
      cancelAnimationFrame(animId);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none">
      {/* Center Micro Gold Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-champagne-gold transition-opacity duration-200"
        style={{ willChange: "transform", opacity: 0.9 }}
      />

      {/* Trailing Luxury Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 rounded-full border transition-[width,height,background-color,border-color] duration-300 ease-out"
        style={{
          willChange: "transform",
          width: 32,
          height: 32,
          borderColor: `rgba(${GOLD}, 0.5)`,
          backgroundColor: "transparent",
        }}
      />
    </div>
  );
}
