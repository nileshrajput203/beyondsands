"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Helper to interpolate between two hex colors cleanly
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

export function SkySystem() {
  const pathname = usePathname();
  const skyRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sky = skyRef.current;
    if (!sky) return;

    if (pathname !== "/") {
      sky.style.background = "linear-gradient(180deg, #F8F6F1 0%, #F0E9DC 100%)";
      if (starsRef.current) {
        starsRef.current.style.opacity = "0";
      }
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    // S0 Morning: #F8F6F1 -> #F0E9DC
    // S1 Day: #E6EFF5 -> #D8E5EE
    // S2 Dusk: #14395A -> #0B2238
    // S3 Night: #0B2238 -> #061320

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;


    const updateSkyGradient = () => {
      let topColor = "#F8F6F1";
      let bottomColor = "#F0E9DC";

      if (p1 > 0) {
        topColor = lerpColor("#F8F6F1", "#E6EFF5", p1);
        bottomColor = lerpColor("#F0E9DC", "#D8E5EE", p1);
      }
      if (p2 > 0) {
        topColor = lerpColor(topColor, "#14395A", p2);
        bottomColor = lerpColor(bottomColor, "#0B2238", p2);
      }
      if (p3 > 0) {
        topColor = lerpColor(topColor, "#0B2238", p3);
        bottomColor = lerpColor(bottomColor, "#061320", p3);
      }

      sky.style.background = `linear-gradient(180deg, ${topColor} 0%, ${bottomColor} 100%)`;
    };

    // Initialize initial state
    updateSkyGradient();

    // Segment 1: Rooms -> Location (S0 Morning -> S1 Day)
    const st1 = ScrollTrigger.create({
      trigger: "#rooms-section",
      start: "bottom center",
      endTrigger: "#location-section",
      end: "top center",
      scrub: 1,
      onUpdate: (self) => {
        p1 = self.progress;
        updateSkyGradient();
      },
    });

    // Segment 2: Location Spacer -> Food (S1 Day -> S2 Dusk)
    const st2 = ScrollTrigger.create({
      trigger: "#location-food-spacer",
      start: "top center",
      endTrigger: "#food-section",
      end: "top center",
      scrub: 1,
      onUpdate: (self) => {
        p2 = self.progress;
        updateSkyGradient();
      },
    });

    // Segment 3: Food -> Gallery & Footer (S2 Dusk -> S3 Night)
    const st3 = ScrollTrigger.create({
      trigger: "#food-section",
      start: "center center",
      endTrigger: "#gallery-section",
      end: "top center",
      scrub: 1,
      onUpdate: (self) => {
        p3 = self.progress;
        updateSkyGradient();
        if (starsRef.current) {
          starsRef.current.style.opacity = (p3 * 0.06).toFixed(4);
        }
      },
    });

    return () => {
      st1.kill();
      st2.kill();
      st3.kill();
    };
  }, []);

  return (
    <div
      ref={skyRef}
      id="global-sky-background"
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #F8F6F1 0%, #F0E9DC 100%)",
      }}
    >
      {/* Subtle Static Starfield Canvas/SVG (under 6% opacity) for deep night */}
      <div
        ref={starsRef}
        className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-700"
        style={{
          backgroundImage: `radial-gradient(1px 1px at 20px 30px, #ffffff, rgba(0,0,0,0)),
                            radial-gradient(1.2px 1.2px at 40px 70px, #ffffff, rgba(0,0,0,0)),
                            radial-gradient(1px 1px at 90px 40px, #ffffff, rgba(0,0,0,0)),
                            radial-gradient(1.5px 1.5px at 160px 120px, #ffffff, rgba(0,0,0,0)),
                            radial-gradient(1px 1px at 230px 190px, #ffffff, rgba(0,0,0,0)),
                            radial-gradient(1.2px 1.2px at 310px 80px, #ffffff, rgba(0,0,0,0)),
                            radial-gradient(1px 1px at 380px 220px, #ffffff, rgba(0,0,0,0))`,
          backgroundSize: "400px 300px",
        }}
      />
    </div>
  );
}
