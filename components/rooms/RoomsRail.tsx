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
        tween.scrollTrigger?.kill(true);
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

    const handleWheel = (e: WheelEvent) => {
      if (!section) return;
      const rect = section.getBoundingClientRect();
      if (rect.top <= 120 && rect.bottom >= window.innerHeight - 120) {
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 15) {
          window.scrollBy({ top: e.deltaX * 1.5 });
        }
      }
    };
    window.addEventListener("wheel", handleWheel, { passive: true });

    // Refresh ScrollTrigger to ensure accurate layout geometry
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 350);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("wheel", handleWheel);
      mm.revert();
    };
  }, []);

  // Navigate smoothly between slides step-by-step
  const goToSlide = (targetIndex: number) => {
    const clampedIndex = Math.max(0, Math.min(ROOMS_DATA.length - 1, targetIndex));
    setCurrentSlide(clampedIndex);

    if (window.innerWidth >= 1024) {
      const st = ScrollTrigger.getById("rooms-rail");
      if (st) {
        const targetProgress = clampedIndex / (ROOMS_DATA.length - 1);
        const targetScroll = st.start + targetProgress * (st.end - st.start);
        scrollToY(targetScroll, 0.85);
        return;
      }
    }

    if (trackRef.current) {
      const panelWidth = trackRef.current.clientWidth;
      trackRef.current.scrollTo({
        left: clampedIndex * panelWidth,
        behavior: "smooth",
      });
    }
  };

  const handleNextSlide = () => {
    goToSlide((currentSlide + 1) % ROOMS_DATA.length);
  };

  const handlePrevSlide = () => {
    goToSlide((currentSlide - 1 + ROOMS_DATA.length) % ROOMS_DATA.length);
  };

  return (
    <div>
      <section
        ref={sectionRef}
        id="rooms-section"
        className="relative w-full min-h-[100dvh] py-6 sm:py-8 lg:py-6 flex flex-col justify-between lg:justify-center overflow-hidden bg-transparent select-none"
      >
        {/* Top Header Block */}
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 md:px-12 pt-2 sm:pt-3 pb-1 sm:pb-1.5 flex items-baseline justify-between z-10 flex-shrink-0">
          <div>
            <span className="section-kicker mb-2 sm:mb-3">Stay</span>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-normal text-deep-navy tracking-tight">
              Rooms & suites
            </h2>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              {ROOMS_DATA.map((room, idx) => (
                <button
                  key={room.id}
                  onClick={() => goToSlide(idx)}
                  aria-label={`Jump to ${room.name}`}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    idx === currentSlide
                      ? "w-7 h-2 bg-champagne-gold"
                      : "w-2 h-2 bg-charcoal/20 hover:bg-charcoal/40"
                  }`}
                />
              ))}
            </div>
            <p className="font-sans text-xs tracking-[0.18em] text-charcoal/55 uppercase">
              Scroll through each suite
            </p>
          </div>
        </div>

        {/* Horizontal Track Container */}
        <div
          ref={trackRef}
          className="w-full flex lg:flex-nowrap overflow-x-auto lg:overflow-x-visible no-scrollbar snap-x snap-mandatory lg:snap-none"
        >
          {ROOMS_DATA.map((room) => (
            <div
              key={room.id}
              className="w-full max-w-full lg:w-screen flex-shrink-0 snap-center flex items-center"
            >
              <RoomPanel room={room} />
            </div>
          ))}
        </div>

        {/* Floating Left / Right Navigation Pill Bar */}
        <div className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center justify-center gap-1.5 sm:gap-2 max-w-[calc(100vw-1.5rem)] pointer-events-auto">
          {/* Previous Room Button */}
          <button
            onClick={handlePrevSlide}
            aria-label="Previous room suite"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-deep-navy/95 hover:bg-deep-navy text-champagne-gold border border-champagne-gold/30 shadow-xl backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer shrink-0"
          >
            <span className="text-xs sm:text-sm font-bold">←</span>
          </button>

          {/* Stepper Pill */}
          <ScrollBasedViewPill
            currentIndex={currentSlide}
            totalRooms={ROOMS_DATA.length}
            onNext={handleNextSlide}
          />

          {/* Next Room Button */}
          <button
            onClick={handleNextSlide}
            aria-label="Next room suite"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-deep-navy/95 hover:bg-deep-navy text-champagne-gold border border-champagne-gold/30 shadow-xl backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer shrink-0"
          >
            <span className="text-xs sm:text-sm font-bold">→</span>
          </button>
        </div>
      </section>
    </div>
  );
}
