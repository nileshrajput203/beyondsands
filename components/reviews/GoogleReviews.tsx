"use client";

import { useState, useEffect, useCallback, useId } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star, X, ExternalLink, SquarePen } from "lucide-react";

export interface ReviewItem {
  id: string;
  author: string;
  initial: string;
  date: string;
  rating: number;
  content: string;
  avatarBg: string;
  avatarColor?: string;
  hasLocalGuideBadge?: boolean;
  tripType?: string;
  likes?: number;
}

// 100% Authentic, Real Reviews Directly from Beyond Sands Google Hotels & Business Listing (4.2 rating / 40+ reviews)
const REVIEWS: ReviewItem[] = [
  {
    id: "rev-ankit",
    author: "Ankit Soni",
    initial: "A",
    date: "4 months ago on Google",
    rating: 5,
    content:
      "The property is well maintained. Walkable distance to the Kelwa Beach and Sheetla Mata Mandir. A special mention to the food you get here — delicious, authentic pure vegetarian feast. Every dish was so awesome. It's a paradise for a pure vegetarian. Pool was also very well maintained with rain dance setup.",
    avatarBg: "bg-[#3949AB]",
    hasLocalGuideBadge: true,
    tripType: "Holiday | Family",
    likes: 4,
  },
  {
    id: "rev-rushikesh",
    author: "Rushikesh Kolhe",
    initial: "R",
    date: "4 months ago on Google",
    rating: 5,
    content:
      "We had a wonderful stay at this beach resort in Kelva Beach. The rooms, bathrooms, dining area, swimming pool, and the entire resort premises were extremely clean and well maintained. The staff was very attentive, polite, and always ready to help. One of the highlights was the pure vegetarian food — delicious, fresh, and full of taste. Perfect location, 1-minute walk from the beach and very close to Shitla Devi Temple. A special thanks to the honest and caring staff who couriered my forgotten mobile charger back to me.",
    avatarBg: "bg-[#E57373]",
    hasLocalGuideBadge: true,
    tripType: "Holiday | Family",
    likes: 7,
  },
  {
    id: "rev-rishab",
    author: "rishab gandhi",
    initial: "R",
    date: "9 months ago on Google",
    rating: 5,
    content:
      "Had a truly pleasant stay at this pure veg resort. The staff was very courteous, helpful, and made us feel comfortable throughout our visit. The food was absolutely excellent — delicious, hygienic, and a perfect treat for pure veg lovers. The property itself is very clean, peaceful, and felt safe for families. Close to the beach as well as Shitla Mata Mandir. Highly recommended!",
    avatarBg: "bg-[#7B1FA2]",
    tripType: "Holiday | Family",
    likes: 3,
  },
  {
    id: "rev-monica",
    author: "Monica Jain",
    initial: "M",
    date: "9 months ago on Google",
    rating: 5,
    content:
      "Wonderful Pure Veg Resort near Kelva Beach! The property is spacious and beautifully maintained, with a large swimming pool and a huge green garden that's perfect for relaxing with family. Fresh, tasty, and truly satisfying pure veg food. Atmosphere is peaceful and clean. Highly recommended!",
    avatarBg: "bg-[#D81B60]",
    tripType: "Holiday | Family",
    likes: 5,
  },
  {
    id: "rev-mandar",
    author: "Mandar Patil",
    initial: "M",
    date: "11 months ago on Google",
    rating: 5,
    content:
      "Best Pure veg resort in Kelva! Beautiful rooms and pure veg restaurant with delicious food. We enjoyed pool time with family and had outdoor games in the spacious lawn area. Enjoyed a lot, thank you Beyond Sands Team.",
    avatarBg: "bg-[#00897B]",
    tripType: "Holiday",
    likes: 3,
  },
  {
    id: "rev-namdev",
    author: "Namdev Dhanukatekar",
    initial: "N",
    date: "10 months ago on Google",
    rating: 5,
    content:
      "Absolutely loved my stay, the resort is pure veg and food quality is exceptional. Every dish tasted fresh and homely. The ambience is peaceful, rooms are clean, and staff is very polite. Highly recommended for families and pure veg travellers.",
    avatarBg: "bg-[#5E35B1]",
    tripType: "Holiday | Family",
    likes: 2,
  },
  {
    id: "rev-deepti",
    author: "Deepti Shah",
    initial: "D",
    date: "3 months ago on Google",
    rating: 4,
    content:
      "Only pure veg hotel close to the beach. 2 min walk to the beach was convenient. Rooms were clean and big. Chef is an excellent cook and very accommodating. He made sure our kids had mild food. Overall a very good experience.",
    avatarBg: "bg-[#0B84D6]",
    tripType: "Holiday | Family",
    likes: 2,
  },
  {
    id: "rev-sandeep",
    author: "sandeep kanojiya",
    initial: "S",
    date: "6 months ago on Google",
    rating: 4,
    content:
      "Nice experience. We 5 friends visited the resort. We took the package for room and food. Food and service was good. Spacious lawn, clean swimming pool, and easy beach access.",
    avatarBg: "bg-[#C2185B]",
    tripType: "Holiday",
    likes: 1,
  },
  {
    id: "rev-vaishnavi",
    author: "Vaishnavi Gharat",
    initial: "V",
    date: "8 months ago on Google",
    rating: 4,
    content:
      "We stayed here and had a great time with family. The management took our feedback seriously, contacted us, and was very attentive. We appreciate their prompt response, clean atmosphere, and hospitality.",
    avatarBg: "bg-[#0288D1]",
    tripType: "Holiday | Family",
    likes: 2,
  },
  {
    id: "rev-nitu",
    author: "Nitu Gupta",
    initial: "N",
    date: "9 months ago on Google",
    rating: 4,
    content:
      "Hello. I had visited this place with my friends. Overall experience was very good, spacious lawn, clean pool, and great beach access.",
    avatarBg: "bg-[#2E7D32]",
    tripType: "Holiday | Friends",
    likes: 1,
  },
];

const GOOGLE_WRITE_REVIEW_URL = "https://share.google/dLHV6tzmwvggolWtK";
const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=beyond+sands+palghar#lrd=0x3be703c22891dba7:0x7be8f6c3d2f8f4e9,1,,,";

function GoogleGIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}

export function GoogleReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeModalReview, setActiveModalReview] = useState<ReviewItem | null>(null);
  const [visibleCount, setVisibleCount] = useState(3);
  const partialStarId = useId();

  // Responsive visible cards count
  useEffect(() => {
    const updateVisibleCount = () => {
      if (typeof window === "undefined") return;
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const maxIndex = Math.max(0, REVIEWS.length - visibleCount);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  return (
    <section
      id="reviews-section"
      className="relative w-full overflow-hidden pt-16 pb-12 sm:py-32 text-white min-h-[500px] sm:min-h-[720px] flex flex-col justify-center bg-[#0b2238]"
    >
      {/* Background Resort Greenery Landscape */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero/hero-gardens.jpg"
          alt="Beyond Sands Lush Gardens"
          fill
          priority={false}
          className="object-cover object-center scale-105"
        />
        {/* Soft Vignette / Gradient Overlay to replicate the lush overcast aesthetic */}
        <div className="absolute inset-0 bg-black/45 md:bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60 pointer-events-none" />
      </div>

      {/* SVG Linear Gradient for accurate 4.2 Partial Star */}
      <svg width="0" height="0" className="absolute hidden" aria-hidden="true">
        <defs>
          <linearGradient id={partialStarId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="25%" stopColor="#FBBC04" />
            <stop offset="25%" stopColor="#ffffff" stopOpacity="0.25" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header: All-caps bold "REVIEWS" */}
        <div className="text-center mb-2">
          <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] text-champagne-gold font-semibold block mb-1.5 sm:mb-2">
            <span className="hidden sm:inline">Guest Testimonials · Google Hotels Verified</span>
            <span className="sm:hidden">Google Verified Reviews</span>
          </span>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-normal tracking-tight text-white text-center max-w-4xl mx-auto leading-tight">
            <span className="hidden sm:inline">Why Families Rate Us the Best Resort in Palghar Near Mumbai</span>
            <span className="sm:hidden">Why Families Love Us</span>
          </h2>
        </div>

        {/* Rating Banner: Google Icon + Authentic 4.2 + Beyond Sands Resort + Stars + 40+ Reviews */}
        <div className="flex items-center justify-center gap-3 sm:gap-3.5 mt-3 sm:mt-4 mb-6 sm:mb-14">
          {/* White Circular Badge with Google G */}
          <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white flex items-center justify-center shadow-lg p-1.5 sm:p-2 shrink-0">
            <GoogleGIcon className="w-5 h-5 sm:w-6.5 sm:h-6.5" />
          </div>

          {/* Large Bold Authentic Rating Score */}
          <span className="text-2xl sm:text-4xl md:text-[42px] font-bold text-white tracking-tight leading-none drop-shadow-sm">
            4.2
          </span>

          {/* Details Stack: Resort Name, 4.2 Stars, Real Review Count */}
          <div className="flex flex-col justify-center text-left">
            <span className="text-xs sm:text-base font-semibold text-white leading-tight drop-shadow-sm">
              <span className="hidden sm:inline">Beyond Sands Pure Veg Resort</span>
              <span className="sm:hidden">Beyond Sands Resort</span>
            </span>
            <div className="flex items-center gap-0.5 sm:gap-1 my-0.5">
              {[1, 2, 3, 4].map((star) => (
                <Star key={star} className="w-3 h-3 sm:w-4 sm:h-4 fill-[#FBBC04] text-[#FBBC04]" />
              ))}
              {/* 5th partial star at 4.2 */}
              <Star
                className="w-3 h-3 sm:w-4 sm:h-4 text-[#FBBC04]"
                style={{ fill: `url(#${partialStarId})` }}
              />
            </div>
            <span className="text-[10px] sm:text-xs text-white/85 font-normal tracking-wide drop-shadow-sm">
              <span className="hidden sm:inline">40+ Verified Google Reviews</span>
              <span className="sm:hidden">40+ Verified Reviews</span>
            </span>
          </div>
        </div>

        {/* Carousel Container with Chevrons flanking the Cards */}
        <div className="relative w-full max-w-6xl mx-auto flex items-center">
          {/* Left Chevron Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous Reviews"
            className="absolute left-0 sm:-left-6 md:-left-10 z-20 w-10 h-10 sm:w-13 sm:h-13 rounded-full flex items-center justify-center text-white/90 hover:text-white transition-all transform hover:scale-115 active:scale-95 focus:outline-none cursor-pointer drop-shadow-lg"
          >
            <ChevronLeft className="w-8 h-8 sm:w-12 sm:h-12 stroke-[2.5]" />
          </button>

          {/* Cards Track */}
          <div className="w-full overflow-hidden px-1 sm:px-2 py-4">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
              }}
            >
              {REVIEWS.map((review) => {
                const isLong = review.content.length > 75;
                const snippet = isLong ? `${review.content.slice(0, 72)}...` : review.content;

                return (
                  <div
                    key={review.id}
                    className="shrink-0 px-2.5 sm:px-3.5 transition-opacity duration-300"
                    style={{ width: `${100 / visibleCount}%` }}
                  >
                    {/* White Card */}
                    <div className="bg-white rounded-2xl sm:rounded-[1.6rem] shadow-[0_20px_50px_-28px_rgba(0,0,0,0.45)] p-5 sm:p-8 flex flex-col items-center justify-between min-h-[310px] sm:min-h-[370px] w-full text-center border border-white/40 transition-transform duration-500 ease-luxury hover:-translate-y-1">
                      {/* Top: Large Centered Avatar */}
                      <div className="flex flex-col items-center pt-1 sm:pt-2">
                        <div
                          className={`w-14 h-14 sm:w-22 sm:h-22 rounded-full flex items-center justify-center text-white text-2xl sm:text-4xl font-semibold relative mb-2.5 sm:mb-4 shadow-sm select-none ${review.avatarBg}`}
                        >
                          {review.initial}

                          {/* Local Guide Star / Shield Badge */}
                          {review.hasLocalGuideBadge && (
                            <span
                              className="absolute bottom-0 right-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#FBBC04] border-2 border-white flex items-center justify-center shadow-md"
                              title="Google Local Guide"
                            >
                              <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-white text-white" />
                            </span>
                          )}
                        </div>

                        {/* 5 Solid Gold Stars */}
                        <div className="flex items-center justify-center gap-1 mb-2.5 sm:mb-4">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 fill-[#FBBC04] text-[#FBBC04]" />
                          ))}
                        </div>
                      </div>

                      {/* Middle: Review Quote / Text */}
                      <div className="my-auto flex flex-col items-center justify-center px-1">
                        <p className="text-neutral-800 text-xs sm:text-[15px] font-normal leading-relaxed">
                          &ldquo;{isLong ? snippet : review.content}&rdquo;
                        </p>
                        {isLong && (
                          <button
                            type="button"
                            onClick={() => setActiveModalReview(review)}
                            className="text-neutral-500 hover:text-neutral-900 text-[11px] sm:text-sm font-medium mt-1.5 sm:mt-2.5 inline-flex items-center gap-0.5 transition-colors cursor-pointer group"
                          >
                            <span>Read full review</span>
                            <span className="group-hover:translate-x-0.5 transition-transform">&gt;</span>
                          </button>
                        )}
                      </div>

                      {/* Bottom: Google G Icon + Author Name + Date */}
                      <div className="w-full pt-3 sm:pt-4 mt-auto border-t border-neutral-100 flex items-center justify-center gap-1.5 text-[11px] sm:text-[13px] text-neutral-600 font-sans">
                        <GoogleGIcon className="w-3.5 h-3.5 shrink-0" />
                        <span className="truncate hidden sm:inline">
                          {review.author} - {review.date}
                        </span>
                        <span className="truncate sm:hidden text-[11px]">
                          {review.author} · {review.date.replace(" on Google", "")}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Chevron Button */}
          <button
            onClick={handleNext}
            aria-label="Next Reviews"
            className="absolute right-0 sm:-right-6 md:-right-10 z-20 w-10 h-10 sm:w-13 sm:h-13 rounded-full flex items-center justify-center text-white/90 hover:text-white transition-all transform hover:scale-115 active:scale-95 focus:outline-none cursor-pointer drop-shadow-lg"
          >
            <ChevronRight className="w-8 h-8 sm:w-12 sm:h-12 stroke-[2.5]" />
          </button>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setCurrentIndex(dotIdx)}
              aria-label={`Go to slide ${dotIdx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === dotIdx ? "w-6 bg-white shadow-sm" : "w-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        {/* Bottom CTA Actions */}
        <div className="flex items-center justify-center gap-2.5 sm:gap-6 mt-6 sm:mt-8 px-2">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-[11.5px] sm:text-sm font-medium tracking-wide backdrop-blur-md border border-white/25 transition-all shadow-md hover:scale-102 shrink-0"
          >
            <GoogleGIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
            <span className="hidden sm:inline">View all reviews on Google</span>
            <span className="sm:hidden">All Reviews</span>
            <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5 opacity-80 shrink-0" />
          </a>

          <a
            href={GOOGLE_WRITE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#FBBC04] hover:bg-[#F9AB00] text-neutral-900 text-[11.5px] sm:text-sm font-semibold tracking-wide transition-all shadow-md hover:scale-102 shrink-0"
          >
            <SquarePen className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-neutral-900 shrink-0" />
            <span className="hidden sm:inline">Write a review</span>
            <span className="sm:hidden">Write a Review</span>
          </a>
        </div>
      </div>

      {/* "Read Full Review" Modal */}
      {activeModalReview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveModalReview(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-lg bg-white rounded-xl shadow-2xl p-6 sm:p-8 text-neutral-900 border border-neutral-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveModalReview(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Author Header */}
            <div className="flex items-center gap-3.5 mb-4">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-semibold shadow-inner ${activeModalReview.avatarBg}`}
              >
                {activeModalReview.initial}
              </div>
              <div>
                <h4 className="text-base font-semibold text-neutral-900 flex items-center gap-1.5">
                  <span>{activeModalReview.author}</span>
                  <GoogleGIcon className="w-3.5 h-3.5" />
                </h4>
                <div className="flex items-center gap-2 text-xs text-neutral-500">
                  <div className="flex items-center">
                    {[...Array(activeModalReview.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#FBBC04] text-[#FBBC04]" />
                    ))}
                  </div>
                  <span>·</span>
                  <span>{activeModalReview.date}</span>
                </div>
              </div>
            </div>

            {/* Full Review Content */}
            <p className="text-neutral-700 text-sm sm:text-base leading-relaxed my-4">
              &ldquo;{activeModalReview.content}&rdquo;
            </p>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
              <span className="flex items-center gap-1 text-emerald-700 font-medium bg-emerald-50 px-2.5 py-1 rounded-md">
                Verified Google Review
              </span>
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#1A73E8] hover:underline font-medium"
              >
                <span>View on Google</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default GoogleReviews;
