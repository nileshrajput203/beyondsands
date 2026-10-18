"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function CloudDivider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cloud1Ref = useRef<HTMLDivElement>(null);
  const cloud2Ref = useRef<HTMLDivElement>(null);
  const cloud3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    if (!container) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.2,
      },
    });

    // Cloud Layer 1: Drifts left and expands
    if (cloud1Ref.current) {
      tl.to(cloud1Ref.current, { x: -80, y: -40, opacity: 0.85, ease: "none" }, 0);
    }

    // Cloud Layer 2: Drifts right and parts
    if (cloud2Ref.current) {
      tl.to(cloud2Ref.current, { x: 90, y: -60, opacity: 0.7, ease: "none" }, 0);
    }

    // Cloud Layer 3: Rises and parts center
    if (cloud3Ref.current) {
      tl.to(cloud3Ref.current, { y: -90, scale: 1.1, opacity: 0.9, ease: "none" }, 0);
    }

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="relative w-full h-[32vh] min-h-[220px] max-h-[380px] overflow-hidden pointer-events-none select-none z-10"
    >
      {/* Cloud Layer 3 (Background Mist) */}
      <div
        ref={cloud3Ref}
        className="absolute inset-0 -top-12 w-full h-[140%] opacity-60 transition-transform will-change-transform"
      >
        <Image
          src="/assets/sky/cloud-layer-3.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Cloud Layer 2 (Midground Drift) */}
      <div
        ref={cloud2Ref}
        className="absolute inset-0 -top-6 w-full h-[130%] opacity-75 transition-transform will-change-transform"
      >
        <Image
          src="/assets/sky/cloud-layer-2.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-bottom"
        />
      </div>

      {/* Cloud Layer 1 (Foreground Cloud Band) */}
      <div
        ref={cloud1Ref}
        className="absolute inset-0 w-full h-[120%] opacity-90 transition-transform will-change-transform"
      >
        <Image
          src="/assets/sky/cloud-layer-1.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-top"
        />
      </div>

      {/* Subtle blend scrim between Rooms Warm Ivory and Day Sky */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-[#E6EFF5]/30 pointer-events-none" />
    </div>
  );
}
