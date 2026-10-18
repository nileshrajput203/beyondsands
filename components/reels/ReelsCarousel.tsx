"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ReelItem {
  id: string;
  src: string;
  modalSrc: string;
  poster: string;
}

const REELS_DATA: ReelItem[] = [
  {
    id: "reel-1",
    src: "/assets/reels/reel-1-preview.mp4",
    modalSrc: "/assets/reels/reel-1.mp4",
    poster: "/assets/reels/poster-1.jpg",
  },
  {
    id: "reel-2",
    src: "/assets/reels/reel-2-preview.mp4",
    modalSrc: "/assets/reels/reel-2.mp4",
    poster: "/assets/reels/poster-2.jpg",
  },
  {
    id: "reel-3",
    src: "/assets/reels/reel-3-preview.mp4",
    modalSrc: "/assets/reels/reel-3.mp4",
    poster: "/assets/reels/poster-3.jpg",
  },
  {
    id: "reel-4",
    src: "/assets/reels/reel-4-preview.mp4",
    modalSrc: "/assets/reels/reel-4.mp4",
    poster: "/assets/reels/poster-4.jpg",
  },
  // Seamless repeat sequence for continuous infinite marquee
  {
    id: "reel-5",
    src: "/assets/reels/reel-1-preview.mp4",
    modalSrc: "/assets/reels/reel-1.mp4",
    poster: "/assets/reels/poster-1.jpg",
  },
  {
    id: "reel-6",
    src: "/assets/reels/reel-2-preview.mp4",
    modalSrc: "/assets/reels/reel-2.mp4",
    poster: "/assets/reels/poster-2.jpg",
  },
  {
    id: "reel-7",
    src: "/assets/reels/reel-3-preview.mp4",
    modalSrc: "/assets/reels/reel-3.mp4",
    poster: "/assets/reels/poster-3.jpg",
  },
  {
    id: "reel-8",
    src: "/assets/reels/reel-4-preview.mp4",
    modalSrc: "/assets/reels/reel-4.mp4",
    poster: "/assets/reels/poster-4.jpg",
  },
];

export function ReelsCarousel() {
  const [activeReelIndex, setActiveReelIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const modalVideoRef = useRef<HTMLVideoElement | null>(null);

  // Seamless continuous marquee loop (2x data for -50% translateX loop)
  const marqueeItems = [...REELS_DATA, ...REELS_DATA];

  const activeReel = activeReelIndex !== null ? REELS_DATA[activeReelIndex] : null;

  // Open reel modal
  const handleOpenReel = (index: number) => {
    setActiveReelIndex(index % REELS_DATA.length);
    setIsPlaying(true);
  };

  // Close reel modal
  const handleClose = useCallback(() => {
    setActiveReelIndex(null);
    setIsPlaying(true);
  }, []);

  // Next / Prev navigation
  const handleNext = useCallback(() => {
    if (activeReelIndex === null) return;
    setActiveReelIndex((prev) => ((prev ?? 0) + 1) % REELS_DATA.length);
    setIsPlaying(true);
  }, [activeReelIndex]);

  const handlePrev = useCallback(() => {
    if (activeReelIndex === null) return;
    setActiveReelIndex((prev) => ((prev ?? 0) - 1 + REELS_DATA.length) % REELS_DATA.length);
    setIsPlaying(true);
  }, [activeReelIndex]);

  // Video play/pause sync - strictly muted, no sound
  useEffect(() => {
    const video = modalVideoRef.current;
    if (!video) return;

    video.muted = true;

    const handleEnded = () => {
      handleNext();
    };

    video.addEventListener("ended", handleEnded);

    if (isPlaying) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }

    return () => {
      video.removeEventListener("ended", handleEnded);
    };
  }, [activeReelIndex, isPlaying, handleNext]);

  // Escape & arrow key listeners
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    if (activeReelIndex !== null) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeReelIndex, handleClose, handleNext, handlePrev]);

  const togglePlay = () => {
    const video = modalVideoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => {});
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section
      id="reels-section"
      className="relative w-full py-12 sm:py-20 overflow-hidden select-none bg-transparent"
      aria-label="Beyond Sands Resort Reels Carousel"
    >
      {/* Clean Header Bar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 mb-8 sm:mb-12">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-4 hairline-b border-charcoal/15 pb-4">
          <div>
            <span className="section-kicker mb-3">Moments</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-deep-navy tracking-tight">
              Resort reels
            </h2>
            <p className="font-sans text-xs sm:text-sm text-charcoal/70 font-light mt-1">
              Continuous glimpses of coastal calm, suite interiors &amp; sanctuary life at Beyond Sands.
            </p>
          </div>
        </div>
      </div>

      {/* Marquee Carousel Travelling from Right to Left - NO white vignette */}
      <div className="relative w-full overflow-hidden py-3">
        <div className="animate-marquee-left flex gap-4 sm:gap-6 px-4">
          {marqueeItems.map((reel, idx) => (
            <div
              key={`${reel.id}-${idx}`}
              onClick={() => handleOpenReel(idx)}
              style={{ transform: "translateZ(0)" }}
              className="group relative w-[190px] sm:w-[230px] md:w-[255px] aspect-[9/16] shrink-0 rounded-[20px] sm:rounded-[24px] overflow-hidden border border-charcoal/20 bg-black shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-1"
            >
              {/* Pure Clean Video Loop - Optimized lightweight preview, NO overlay text, NO timer, NO sound */}
              <video
                src={reel.src}
                poster={reel.poster}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                style={{ transform: "translateZ(0)" }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Clean Full-Screen Reel Lightbox Modal - Pure video, NO overlay text, NO timer, NO sound */}
      {activeReel && activeReelIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[120] bg-black/90 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6"
          onClick={handleClose}
        >
          {/* Previous Reel Navigation Button (Desktop) */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Previous reel"
            className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white items-center justify-center backdrop-blur-md transition-all hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Reel Navigation Button (Desktop) */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next reel"
            className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white items-center justify-center backdrop-blur-md transition-all hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Frame - Pure clean video */}
          <div
            className="relative w-full max-w-[390px] aspect-[9/16] max-h-[92vh] rounded-[28px] overflow-hidden border border-white/20 shadow-2xl bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button Top Right */}
            <button
              onClick={handleClose}
              aria-label="Close reel viewer"
              className="absolute top-4 right-4 z-40 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white hover:text-champagne-gold flex items-center justify-center border border-white/20 transition-all cursor-pointer backdrop-blur-md"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Video Player - Pure video, strictly muted, click to toggle play/pause */}
            <div
              className="relative w-full h-full cursor-pointer"
              onClick={togglePlay}
            >
              <video
                ref={modalVideoRef}
                src={activeReel.modalSrc || activeReel.src}
                poster={activeReel.poster}
                autoPlay
                playsInline
                loop
                muted
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
