"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ROOMS_DATA } from "@/lib/rooms-data";
import { RoomPanel } from "./RoomPanel";
import { ScrollBasedViewPill } from "./ScrollBasedViewPill";
import { scrollToY } from "@/lib/scroll-nav";

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
          id: "rooms-rail",
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

    return () => {
      mm.revert();
    };
  }, []);

  // Scroll all the way through the horizontal section from left to right
  const handleScrollAllTheWay = () => {
    if (window.innerWidth >= 1024) {
      const st = ScrollTrigger.getById("rooms-rail");
      if (st) {
        // If already near the end (progress >= 0.92), scroll all the way back to start; otherwise scroll all the way to the end
        const isAtEnd = st.progress >= 0.92;
        const targetScroll = isAtEnd ? st.start : st.end;
        scrollToY(targetScroll, 2.4);
        return;
      }
    }

    // Fallback or Mobile (native horizontal scroll container)
    if (trackRef.current) {
      const maxScroll = trackRef.current.scrollWidth - trackRef.current.clientWidth;
      const isAtEnd = trackRef.current.scrollLeft >= maxScroll - 40;
      trackRef.current.scrollTo({
        left: isAtEnd ? 0 : maxScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="rooms-section"
      className="relative w-full min-h-screen lg:h-screen lg:min-h-0 py-8 lg:py-2 flex flex-col justify-between lg:justify-center overflow-hidden bg-transparent select-none"
    >
      {/* Top Header Block */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 md:px-12 pt-2 sm:pt-3 pb-1 sm:pb-1.5 flex items-baseline justify-between z-10 flex-shrink-0">
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-normal text-deep-navy tracking-wide">
          ROOMS & SUITES
        </h2>

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

      {/* Floating Scroll Based View Pill (Centered at bottom of pinned Rooms section, avoiding WhatsApp FAB) */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 hidden sm:block pointer-events-auto">
        <ScrollBasedViewPill
          currentIndex={currentSlide}
          totalRooms={ROOMS_DATA.length}
          onNext={handleScrollAllTheWay}
        />
      </div>
    </section>
  );
}
