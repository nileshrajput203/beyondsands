"use client";

import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ROOMS_DATA } from "@/lib/rooms-data";
import { RoomPanel } from "./RoomPanel";
import { ScrollBasedViewPill } from "./ScrollBasedViewPill";

export function RoomsRail() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const mm = gsap.matchMedia();

    // Desktop: Pin and drive horizontal scroll (>=1024px)
    mm.add("(min-width: 1024px)", () => {
      const totalPanels = ROOMS_DATA.length;
      const getScrollAmount = () => -(track.scrollWidth - window.innerWidth);

      const tween = gsap.to(track, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          end: () => `+=${track.scrollWidth - window.innerWidth}`,
          onUpdate: (self) => {
            const index = Math.min(
              totalPanels - 1,
              Math.floor(self.progress * totalPanels + 0.1)
            );
            setCurrentSlide(index);
          },
        },
      });

      return () => {
        tween.kill();
      };
    });

    // Mobile: Listen to native scroll-snap container
    mm.add("(max-width: 1023px)", () => {
      const handleMobileScroll = () => {
        if (!track) return;
        const width = track.clientWidth;
        const index = Math.round(track.scrollLeft / width);
        setCurrentSlide(Math.min(ROOMS_DATA.length - 1, Math.max(0, index)));
      };

      track.addEventListener("scroll", handleMobileScroll, { passive: true });
      return () => {
        track.removeEventListener("scroll", handleMobileScroll);
      };
    });

    // Refresh ScrollTrigger after layout settles
    ScrollTrigger.refresh();

    return () => {
      mm.revert();
    };
  }, []);

  const handleNextSlide = () => {
    const nextIdx = (currentSlide + 1) % ROOMS_DATA.length;
    if (window.innerWidth >= 1024 && sectionRef.current) {
      // Scroll smoothly down by one panel width
      const totalWidth = trackRef.current ? trackRef.current.scrollWidth - window.innerWidth : 0;
      const panelStep = totalWidth / (ROOMS_DATA.length - 1);
      const targetScroll = sectionRef.current.offsetTop + nextIdx * panelStep;
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    } else if (trackRef.current) {
      const panelWidth = trackRef.current.clientWidth;
      trackRef.current.scrollTo({
        left: nextIdx * panelWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="rooms-section"
      className="relative w-full min-h-screen py-16 lg:py-0 flex flex-col justify-center overflow-hidden bg-transparent select-none"
    >
      {/* Top Header Block */}
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-12 pt-6 pb-2 flex items-baseline justify-between z-10">
        <div className="flex items-baseline gap-4">
          <span className="font-sans text-xs uppercase tracking-widest text-champagne-gold font-semibold">
            01
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal text-deep-navy tracking-wide">
            ROOMS & SUITES
          </h2>
        </div>

        <p className="hidden md:block font-sans text-xs tracking-wider text-charcoal/60 uppercase">
          Horizontal Rail · Pinned Suite Showcase
        </p>
      </div>

      {/* Horizontal Track Container */}
      <div
        ref={trackRef}
        className="w-full flex lg:flex-nowrap overflow-x-auto lg:overflow-x-visible no-scrollbar snap-x snap-mandatory lg:snap-none"
      >
        {ROOMS_DATA.map((room) => (
          <div
            key={room.id}
            className="w-screen flex-shrink-0 snap-center flex items-center"
          >
            <RoomPanel room={room} />
          </div>
        ))}
      </div>

      {/* Floating Scroll Based View Pill (Bottom-Right of pinned Rooms section) */}
      <div className="absolute bottom-6 right-8 lg:right-16 z-30 hidden sm:block pointer-events-auto">
        <ScrollBasedViewPill
          currentIndex={currentSlide}
          totalRooms={ROOMS_DATA.length}
          onNext={handleNextSlide}
        />
      </div>
    </section>
  );
}
