"use client";

import { useEffect, useState, type MouseEvent } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { WhatsAppIcon, PhoneIcon } from "../icons";
import { scrollToSection, setPendingHash } from "@/lib/scroll-nav";
import { ArrowRight, Leaf, Waves, Sparkles, Calendar, X } from "lucide-react";

interface NavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

interface NavItem {
  id: string;
  index: string;
  name: string;
  subtitle: string;
  href: string;
  badge?: string;
  image: string;
}

const NAV_ITEMS: NavItem[] = [
  {
    id: "home",
    index: "01",
    name: "Home",
    subtitle: "Coastal calm at the blue hour.",
    href: "/",
    image: "/assets/location/location-surroundings-beach.webp",
  },
  {
    id: "about",
    index: "02",
    name: "About Us",
    subtitle: "Our heritage & 100% pure veg ethos.",
    href: "/about",
    image: "/assets/rooms/garden-courtyard.png",
  },
  {
    id: "rooms",
    index: "03",
    name: "Rooms & Suites",
    subtitle: "Garden view, pool view & 6–15 bed AC dorms.",
    href: "/rooms-tariff",
    badge: "SUITES",
    image: "/assets/rooms/garden-view-main.jpg",
  },
  {
    id: "dining",
    index: "04",
    name: "Pure Veg Dining",
    subtitle: "Coastal breakfast, Jain thalis & Gujarati fare.",
    href: "/pure-veg-resort-palghar-mumbai",
    badge: "PURE VEG",
    image: "/assets/dining/lunch.png",
  },
  {
    id: "events",
    index: "05",
    name: "Events & Weddings",
    subtitle: "15,000+ sq ft celebration lawns & banquet.",
    href: "/weddings-events",
    badge: "15K SQ FT",
    image: "/assets/gallery/gallery-wedding-mandap.webp",
  },
  {
    id: "gallery",
    index: "06",
    name: "Resort Gallery",
    subtitle: "Immersive architectural & landscape visuals.",
    href: "/gallery",
    image: "/assets/location/location-resort-exterior.jpg",
  },
  {
    id: "location",
    index: "07",
    name: "Location & Beach",
    subtitle: "Opposite Sheetla Devi Temple & Kelva Beach.",
    href: "/location",
    badge: "0 MINS",
    image: "/assets/gallery/location-surroundings-beach.webp",
  },
  {
    id: "reviews",
    index: "08",
    name: "Guest Reviews",
    subtitle: "Verified Google reviews & 4.2 rating.",
    href: "/reviews",
    badge: "4.2 ★",
    image: "/assets/gallery/pool-evening.jpg",
  },
  {
    id: "contact",
    index: "09",
    name: "Contact Us",
    subtitle: "Concierge desk, custom packages & bookings.",
    href: "/contact",
    image: "/assets/hero/hero-twilight.jpg",
  },
  {
    id: "blog",
    index: "10",
    name: "Blog & Stories",
    subtitle: "Coastal stories, field notes & travel guides.",
    href: "/blog",
    image: "/assets/events/golden-hour.jpg",
  },
  {
    id: "booking",
    index: "11",
    name: "Book Directly",
    subtitle: "Best rate guarantee & complimentary breakfast.",
    href: "/booking",
    badge: "BEST RATE",
    image: "/assets/gallery/pool-evening.jpg",
  },
];

const resolveHref = (href: string, pathname: string) =>
  href.startsWith("#") && pathname !== "/" ? `/${href}` : href;

export function NavigationDrawer({ isOpen, onClose }: NavigationDrawerProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) {
      onClose();
      return;
    }
    e.preventDefault();
    const hash = href.slice(1);
    if (pathname === "/") {
      scrollToSection(hash);
      onClose();
    } else {
      setPendingHash(hash);
      router.push("/");
      onClose();
    }
  };

  // Lock body scroll on open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Escape key listener
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
    }
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Site Navigation Menu"
      className="fixed inset-0 z-[100] bg-[#060C14] text-[#FAF6F0] flex flex-col h-[100dvh] max-h-[100dvh] overflow-hidden"
    >
      {/* Decorative luxury script watermark on top-right */}
      <div
        aria-hidden="true"
        className="absolute top-4 sm:top-5 right-16 sm:right-24 pointer-events-none select-none z-0 hidden sm:block"
      >
        <span className="font-serif italic text-xl sm:text-2xl lg:text-3xl text-[#E8DEC9]/15 tracking-wide">
          More Than Just a Stay...
        </span>
      </div>

      {/* Top Header Bar */}
      <header className="relative z-20 flex items-center justify-between px-4 sm:px-8 lg:px-12 py-2.5 sm:py-3 border-b border-white/10 bg-[#060C14]/95 backdrop-blur-md shrink-0 select-none">
        <div className="flex items-center gap-3 sm:gap-5">
          <Link
            href="/"
            onClick={onClose}
            className="flex items-center gap-2.5 sm:gap-3 outline-none focus:outline-none focus-visible:outline-none ring-0 group"
          >
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 shrink-0">
              <Image
                src="/assets/brand/beyond-sands-emblem-gold.png"
                alt="Beyond Sands Emblem"
                fill
                sizes="36px"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-sm sm:text-base tracking-[0.16em] uppercase text-white font-medium leading-none">
                BEYOND SANDS
              </span>
              <span className="text-[9px] uppercase tracking-[0.28em] text-[#C49A65] font-sans font-light mt-0.5">
                KELVA
              </span>
            </div>
          </Link>

          <span className="h-4 sm:h-5 w-px bg-white/20 hidden sm:inline-block" />

          <span className="hidden sm:inline-block text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#C49A65] font-sans font-medium">
            RESORT &amp; BEACH DESTINATIONS
          </span>
        </div>

        {/* Close Button */}
        <div className="flex items-center">
          <button
            onClick={onClose}
            aria-label="Close navigation menu"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/20 hover:border-[#D4AF37] bg-white/5 hover:bg-[#D4AF37]/20 flex items-center justify-center text-white hover:text-[#D4AF37] transition-all duration-200 cursor-pointer shadow-md group"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:rotate-90 duration-300" />
          </button>
        </div>
      </header>

      {/* Scrollable Drawer Body with Native Momentum Touch Scrolling */}
      <div
        className="flex-1 w-full overflow-y-auto overscroll-contain touch-pan-y"
        style={{
          WebkitOverflowScrolling: "touch",
          overscrollBehaviorY: "contain",
        }}
      >
        {/* Main Grid: Left 11 Cards + Right Featured Destination */}
        <main className="relative z-10 flex-1 max-w-[1400px] w-full mx-auto px-3 sm:px-6 lg:px-10 py-3 sm:py-4 flex flex-col sm:justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 lg:gap-5 items-stretch">
          
          {/* Left Column (Cols 1-7 on desktop): All Destinations */}
          <div className="lg:col-span-7 flex flex-col justify-start lg:justify-between">
            {/* Mobile Quick Action Concierge Strip */}
            <div className="sm:hidden grid grid-cols-2 gap-2 mb-2.5">
              <a
                href="https://wa.me/919923895055?text=Hi!%20I'd%20like%20to%20book%20a%20stay%20at%20Beyond%20Sands%20Kelva."
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex items-center justify-center gap-1.5 h-10 px-2 min-[360px]:px-3 rounded-full bg-[#D6B588] text-[#061423] font-sans text-[10px] min-[360px]:text-[11px] uppercase tracking-[0.05em] font-bold shadow-xs active:scale-98 transition-transform whitespace-nowrap"
              >
                <WhatsAppIcon size={14} className="shrink-0" />
                <span className="truncate">WhatsApp Book</span>
              </a>
              <a
                href="tel:+919923895055"
                className="flex items-center justify-center gap-1.5 h-10 px-2 min-[360px]:px-3 rounded-full border border-white/20 bg-white/5 text-white font-sans text-[10px] min-[360px]:text-[11px] uppercase tracking-[0.05em] font-semibold active:scale-98 transition-transform whitespace-nowrap"
              >
                <PhoneIcon size={13} className="shrink-0" />
                <span className="truncate">Call Concierge</span>
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 pb-6 sm:pb-0 touch-pan-y">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.id}
                  href={resolveHref(item.href, pathname)}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="group relative flex flex-row items-stretch h-[68px] sm:h-[72px] lg:h-[74px] xl:h-[78px] bg-[#FAF5EE] hover:bg-[#FFFFFF] rounded-xl sm:rounded-2xl overflow-hidden border border-black/5 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.015] cursor-pointer touch-pan-y"
                >
                  {/* Left Thumbnail Photo */}
                  <div className="relative w-[32%] sm:w-[34%] shrink-0 h-full overflow-hidden bg-black/10 pointer-events-none select-none">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      draggable={false}
                      sizes="180px"
                      className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out pointer-events-none select-none"
                    />
                  </div>

                  {/* Mobile Layout (sm:hidden): Pristine Un-messy 2-Row Layout */}
                  <div className="flex sm:hidden flex-1 p-2.5 flex-col justify-center gap-1 min-w-0 text-[#0A1624]">
                    <div className="flex items-center justify-between gap-1.5">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <span className="font-mono text-[9.5px] font-bold text-[#8C7A6B] shrink-0">
                          {item.index}
                        </span>
                        <h3 className="font-serif text-[13.5px] font-semibold text-[#0A1624] truncate">
                          {item.name}
                        </h3>
                      </div>
                      <div className="flex items-center gap-1.5 shrink-0">
                        {item.badge && (
                          <span className="font-sans text-[7.5px] uppercase tracking-wider font-semibold px-1.5 py-0.5 rounded-full bg-[#E8DEC9] text-[#6E5536] border border-[#CBBBA0]/40">
                            {item.badge}
                          </span>
                        )}
                        <ArrowRight className="w-3 h-3 text-[#8C7A6B] shrink-0" />
                      </div>
                    </div>
                    <p className="font-sans text-[10px] text-[#4A5568] leading-tight line-clamp-1 font-light">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Desktop Layout (hidden sm:flex): Strictly 100% Unchanged */}
                  <div className="hidden sm:flex flex-1 p-2 sm:p-2.5 flex-col justify-between min-w-0 text-[#0A1624]">
                    <div>
                      <div className="flex items-center justify-between gap-1 mb-0.5">
                        <span className="font-mono text-[9px] sm:text-[10px] font-bold text-[#8C7A6B]">
                          {item.index}
                        </span>
                        {item.badge && (
                          <span className="font-sans text-[7.5px] sm:text-[8px] uppercase tracking-wider font-semibold px-1.5 py-0.5 rounded-full bg-[#E8DEC9] text-[#6E5536] border border-[#CBBBA0]/40">
                            {item.badge}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between gap-1">
                        <h3 className="font-serif text-[13.5px] sm:text-[13.5px] lg:text-[14px] font-semibold text-[#0A1624] group-hover:text-[#A67C47] transition-colors leading-tight truncate">
                          {item.name}
                        </h3>
                        <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#8C7A6B] group-hover:text-[#A67C47] group-hover:translate-x-0.5 transition-all duration-300 shrink-0" />
                      </div>
                      <p className="font-sans text-[9.5px] sm:text-[9.5px] text-[#4A5568] leading-tight line-clamp-1 mt-0.5 font-light">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Column (Cols 8-12 on desktop): Grand Featured Showcase Card */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-b from-[#091522] via-[#07111C] to-[#040A12] p-4 sm:p-5 flex flex-col justify-between h-full">
              
              {/* Background Subtle Ambience */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#132A44]/40 via-transparent to-transparent pointer-events-none"
              />

              {/* Top Brand & Headline */}
              <div className="relative z-10 text-center">
                <div className="flex items-center justify-center gap-2 mb-1.5">
                  <div className="relative w-5 h-5 sm:w-6 sm:h-6 shrink-0">
                    <Image
                      src="/assets/brand/beyond-sands-emblem-gold.png"
                      alt="Beyond Sands Emblem"
                      fill
                      sizes="24px"
                      className="object-contain"
                    />
                  </div>
                  <span className="font-serif text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#C49A65]">
                    BEYOND SANDS KELVA
                  </span>
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal leading-[1.12] tracking-tight mt-0.5">
                  Your Perfect<br />Coastal Escape
                </h2>

                <p className="text-[10px] sm:text-[10.5px] uppercase tracking-[0.25em] text-[#FAF6F0]/70 font-sans mt-1.5 font-light">
                  Stay &nbsp;|&nbsp; Dine &nbsp;|&nbsp; Celebrate &nbsp;|&nbsp; Explore
                </p>
              </div>

              {/* Center Photo: The Beyond Sands Kelva Resort Signboard Exterior */}
              <div className="relative z-10 my-2.5 sm:my-3 w-full h-32 sm:h-36 lg:h-40 rounded-xl sm:rounded-2xl overflow-hidden border border-white/15 shadow-xl">
                <Image
                  src="/assets/location/location-resort-exterior.jpg"
                  alt="Beyond Sands Kelva Resort Exterior"
                  fill
                  sizes="480px"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Bottom Concierge Frame */}
              <div className="relative z-10 rounded-xl sm:rounded-2xl border border-white/10 bg-[#06121E]/95 backdrop-blur-md p-3 sm:p-4 space-y-2.5 shadow-inner">
                <div>
                  <h4 className="font-serif text-sm sm:text-base text-white font-medium leading-snug">
                    Ready for a coastal getaway?
                  </h4>
                  <p className="font-sans text-[10.5px] sm:text-[11px] text-white/70 font-light mt-0.5 leading-relaxed">
                    Connect directly with our resort concierge for instant room confirmation and tailored pure veg dining.
                  </p>
                </div>

                {/* Call-To-Action Button Row */}
                <div className="grid grid-cols-2 gap-2 pt-0.5">
                  <a
                    href="https://wa.me/919923895055?text=Hi!%20I'd%20like%20to%20book%20a%20stay%20at%20Beyond%20Sands%20Kelva."
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-full bg-[#D6B588] hover:bg-[#E2C399] text-[#061423] font-sans text-[11px] sm:text-xs uppercase tracking-wider font-bold transition-all shadow-md hover:scale-[1.02] cursor-pointer"
                  >
                    <WhatsAppIcon size={14} />
                    <span className="truncate">WhatsApp Book</span>
                  </a>

                  <a
                    href="tel:+919923895055"
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-full border border-white/25 hover:border-white/50 bg-white/5 hover:bg-white/10 text-white font-sans text-[11px] sm:text-xs uppercase tracking-wider font-semibold transition-all hover:scale-[1.02]"
                  >
                    <PhoneIcon size={13} />
                    <span>Call</span>
                  </a>
                </div>

                {/* 4 Brand Pillars at the Bottom */}
                <div className="pt-2 border-t border-white/10 grid grid-cols-4 gap-1 text-center">
                  <div className="flex flex-col items-center gap-0.5">
                    <Leaf className="w-3 h-3 text-[#C49A65]" />
                    <span className="text-[8px] uppercase tracking-wider text-white/60 font-sans">
                      Pure Veg
                    </span>
                  </div>

                  <div className="flex flex-col items-center gap-0.5">
                    <Waves className="w-3 h-3 text-[#C49A65]" />
                    <span className="text-[8px] uppercase tracking-wider text-white/60 font-sans">
                      Beach
                    </span>
                  </div>

                  <div className="flex flex-col items-center gap-0.5">
                    <Sparkles className="w-3 h-3 text-[#C49A65]" />
                    <span className="text-[8px] uppercase tracking-wider text-white/60 font-sans">
                      Luxury
                    </span>
                  </div>

                  <div className="flex flex-col items-center gap-0.5">
                    <Calendar className="w-3 h-3 text-[#C49A65]" />
                    <span className="text-[8px] uppercase tracking-wider text-white/60 font-sans">
                      Events
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

        {/* Bottom Footer Ambience Line */}
        <footer className="relative z-20 py-2.5 sm:py-3 border-t border-white/10 bg-[#040910] text-center shrink-0">
          <span className="text-[9.5px] uppercase tracking-[0.35em] text-[#FAF6F0]/40 font-sans">
            SAND &nbsp;·&nbsp; SEA &nbsp;·&nbsp; SERENITY
          </span>
        </footer>
      </div>
    </div>
  );
}

export default NavigationDrawer;
