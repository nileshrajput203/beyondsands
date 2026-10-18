"use client";

import { useEffect, useState, type MouseEvent } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { CloseIcon, PhoneIcon, MailIcon, MapPinIcon, WhatsAppIcon, InstagramIcon, FacebookIcon } from "../icons";
import { scrollToSection, setPendingHash } from "@/lib/scroll-nav";
import { ArrowUpRight } from "lucide-react";

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
  category: "stay" | "experience";
}

const NAV_ITEMS: NavItem[] = [
  {
    id: "home",
    index: "01",
    name: "Home",
    subtitle: "Coastal calm at the blue hour",
    href: "/",
    image: "/assets/hero/hero-gardens.jpg",
    category: "stay",
  },
  {
    id: "about",
    index: "02",
    name: "About Us",
    subtitle: "Our heritage & 100% pure veg ethos",
    href: "/about",
    image: "/assets/rooms/garden-courtyard.png",
    category: "stay",
  },
  {
    id: "rooms",
    index: "03",
    name: "Rooms & Suites",
    subtitle: "Private verandas, suites & family dorms",
    href: "/rooms",
    badge: "Palghar #1",
    image: "/assets/rooms/garden-view-main.jpg",
    category: "stay",
  },
  {
    id: "dining",
    index: "04",
    name: "Pure Veg Dining",
    subtitle: "Coastal breakfast, Jain thalis & Gujarati fare",
    href: "/dining",
    badge: "Pure Veg",
    image: "/assets/dining/lunch-plate.jpg",
    category: "stay",
  },
  {
    id: "events",
    index: "05",
    name: "Events & Weddings",
    subtitle: "15,000+ sq ft celebration lawns & banquet",
    href: "/events-gallery",
    badge: "15k sq ft",
    image: "/assets/events/lawn-reception.jpg",
    category: "stay",
  },
  {
    id: "gallery",
    index: "06",
    name: "Resort Gallery",
    subtitle: "Immersive architectural & landscape visuals",
    href: "/gallery",
    image: "/assets/gallery/wedding-banner.webp",
    category: "experience",
  },
  {
    id: "location",
    index: "07",
    name: "Location & Beach",
    subtitle: "Opposite Sheetla Devi Temple & Kelva Beach",
    href: "/location",
    badge: "0 Mins",
    image: "/assets/location/location-drone-shitlamata.jpg",
    category: "experience",
  },
  {
    id: "reviews",
    index: "08",
    name: "Guest Reviews",
    subtitle: "Verified Google reviews & 4.2 rating",
    href: "/reviews",
    badge: "4.2 ★",
    image: "/assets/rooms/pool-view-main.jpg",
    category: "experience",
  },
  {
    id: "contact",
    index: "09",
    name: "Contact Us",
    subtitle: "Concierge desk, custom packages & bookings",
    href: "/contact",
    image: "/assets/hero/hero-twilight.jpg",
    category: "experience",
  },
  {
    id: "booking",
    index: "10",
    name: "Book Directly",
    subtitle: "Best rate guarantee & complimentary breakfast",
    href: "/booking",
    badge: "Best Rate",
    image: "/assets/rooms/pool-view-thumb2.jpg",
    category: "stay",
  },
];

const resolveHref = (href: string, pathname: string) =>
  href.startsWith("#") && pathname !== "/" ? `/${href}` : href;

export function NavigationDrawer({ isOpen, onClose }: NavigationDrawerProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [activeImage, setActiveImage] = useState<string>("/assets/hero/hero-gardens.jpg");
  const [activeTitle, setActiveTitle] = useState<string>("Beyond Sands Resort");

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) {
      onClose();
      return;
    }
    e.preventDefault();
    onClose();
    const id = href.slice(1);
    if (pathname === "/") {
      scrollToSection(id);
    } else {
      setPendingHash(id);
      router.push("/");
    }
  };

  useEffect(() => {
    if (!isOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
      className="fixed inset-0 z-[120] bg-[#030912] text-[#F8F6F1] flex flex-col justify-between overflow-y-auto animate-in fade-in duration-300 select-none"
    >
      {/* Subtle deep ambient vignetting (away from text) */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-[#C49A65]/10 rounded-full blur-[160px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -left-32 w-[600px] h-[600px] bg-[#0A2540]/30 rounded-full blur-[160px] pointer-events-none"
      />

      {/* Top Header Bar */}
      <header className="flex items-center justify-between px-6 sm:px-10 lg:px-14 py-4 sm:py-5 border-b border-white/15 bg-[#030912]/95 backdrop-blur-md sticky top-0 z-20 shrink-0">
        <div className="flex items-center gap-6">
          <Link href="/" onClick={onClose} className="relative block w-36 sm:w-44 h-10 sm:h-11">
            <Image
              src="/assets/brand/beyond-sands-logo-dark.png"
              alt="Beyond Sands Hotels & Resorts"
              fill
              sizes="176px"
              className="object-contain object-left"
            />
          </Link>

          <div className="hidden md:flex items-center gap-2 pl-6 border-l border-white/20 text-xs text-[#E5E0D5] font-sans tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] shadow-[0_0_8px_#D4AF37] animate-pulse" />
            <span className="font-medium">Kelva Beach, Palghar · 100% Pure Veg Sanctuary</span>
          </div>
        </div>

        {/* Close Button with Keyboard Shortcut */}
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-block text-[11px] uppercase tracking-widest text-[#D4AF37] font-mono px-2.5 py-1 rounded border border-[#D4AF37]/30 bg-[#D4AF37]/10 font-medium">
            ESC
          </span>
          <button
            onClick={onClose}
            aria-label="Close navigation menu"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/20 hover:border-[#D4AF37] bg-white/10 hover:bg-[#D4AF37]/20 flex items-center justify-center text-white hover:text-[#D4AF37] transition-all duration-200 cursor-pointer shadow-md group"
          >
            <CloseIcon size={20} className="transition-transform group-hover:rotate-90 duration-300" />
          </button>
        </div>
      </header>

      {/* Main Split Section: 7-Col Navigation + 5-Col Interactive Visual Card */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-4 sm:py-6 lg:py-8 flex items-center z-10">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Menu Links (Cols 1-7) */}
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between pb-2.5 mb-3.5 border-b border-[#D4AF37]/40">
              <span className="text-xs uppercase tracking-[0.22em] text-[#E2C37A] font-bold">
                SANCTUARY NAVIGATION
              </span>
              <span className="text-xs text-[#E5E0D5] tracking-widest font-mono font-semibold">
                {String(NAV_ITEMS.length).padStart(2, "0")} DESTINATIONS
              </span>
            </div>

            {/* 2-Column Staggered Grid of Nav Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 lg:gap-x-8 gap-y-1 sm:gap-y-1.5">
              {NAV_ITEMS.map((item) => (
                <div
                  key={item.id}
                  className="group relative"
                  onMouseEnter={() => {
                    setActiveImage(item.image);
                    setActiveTitle(item.name);
                  }}
                >
                  <Link
                    href={resolveHref(item.href, pathname)}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="flex flex-col py-2 sm:py-2.5 px-3 rounded-lg hover:bg-white/[0.08] border border-transparent hover:border-white/15 transition-all duration-200"
                  >
                    <div className="flex items-baseline justify-between gap-2">
                      <div className="flex items-baseline gap-2.5">
                        <span className="text-[11px] sm:text-xs font-mono font-bold text-[#D4AF37] group-hover:text-white transition-colors">
                          {item.index}
                        </span>
                        <span className="font-display text-lg sm:text-xl lg:text-[21px] font-normal text-white group-hover:text-[#F3D382] group-hover:translate-x-1 transition-all duration-200 tracking-wide">
                          {item.name}
                        </span>
                      </div>

                      {item.badge ? (
                        <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#D4AF37]/20 text-[#F5DEB3] border border-[#D4AF37]/50 font-sans font-bold shadow-xs">
                          {item.badge}
                        </span>
                      ) : (
                        <ArrowUpRight className="w-3.5 h-3.5 text-white/40 group-hover:text-[#D4AF37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all opacity-0 group-hover:opacity-100" />
                      )}
                    </div>

                    <span className="text-[11px] sm:text-xs text-[#CBD5E1] font-light pl-5 sm:pl-6 group-hover:text-white transition-colors truncate mt-0.5">
                      {item.subtitle}
                    </span>
                  </Link>

                  {/* Micro divider */}
                  <div className="h-[1px] w-full bg-white/10 group-hover:bg-[#D4AF37]/40 transition-colors" />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 21st.dev Dynamic Interactive Visual Card & Direct Concierge (Cols 8-12) */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl h-[420px] flex flex-col justify-between p-5 bg-gradient-to-t from-[#061423] via-transparent to-black/40">
              {/* Dynamic Background Image on Hover */}
              <div className="absolute inset-0 -z-10 transition-all duration-700">
                <Image
                  src={activeImage}
                  alt={activeTitle}
                  fill
                  sizes="480px"
                  className="object-cover object-center scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05111D] via-[#05111D]/35 to-black/40" />
              </div>

              {/* Top Tag on Photo Card */}
              <div className="flex items-center justify-between z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] uppercase tracking-wider text-warm-ivory">
                  <span>{activeTitle}</span>
                </span>

                <span className="text-[11px] text-warm-ivory/90 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/15 font-mono">
                  100% Pure Veg
                </span>
              </div>

              {/* Bottom Reservation Card (21st.dev Luxury Card) */}
              <div className="relative z-10 p-4 sm:p-4.5 rounded-xl bg-[#061423]/95 backdrop-blur-xl border border-[#D4AF37]/50 shadow-2xl space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[#E2C37A] font-bold">
                    DIRECT BOOKING PRIVILEGES
                  </span>
                  <span className="text-xs text-emerald-300 font-semibold">Best Rate Guarantee</span>
                </div>

                <div>
                  <h4 className="font-display text-lg sm:text-xl text-white font-normal leading-snug">
                    Ready for a coastal getaway?
                  </h4>
                  <p className="text-[11px] sm:text-xs text-[#E5E0D5] font-normal mt-0.5 leading-relaxed">
                    Connect directly with our resort concierge for instant room confirmation and tailored pure veg dining.
                  </p>
                </div>

                <div className="flex items-center gap-2.5 pt-1">
                  <a
                    href="https://wa.me/919923895055?text=Hi!%20I'd%20like%20to%20book%20a%20stay%20at%20Beyond%20Sands."
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#D4AF37] hover:bg-[#F3D382] text-[#030912] font-sans text-xs uppercase tracking-wider font-bold transition-all shadow-lg hover:scale-102 cursor-pointer"
                  >
                    <WhatsAppIcon size={15} />
                    <span>WhatsApp Book</span>
                  </a>

                  <a
                    href="tel:+919923895055"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full border border-white/30 hover:border-[#D4AF37] bg-white/10 hover:bg-[#D4AF37]/20 text-white hover:text-[#D4AF37] font-sans text-xs uppercase tracking-wider font-semibold transition-all"
                  >
                    <PhoneIcon size={13} />
                    <span>Call</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Architectural Contact Strip */}
      <footer className="border-t border-white/15 px-6 sm:px-10 lg:px-14 py-3.5 sm:py-4 bg-[#02060c] sticky bottom-0 z-20 shrink-0">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans text-[#E5E0D5]">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6">
            <a
              href="tel:+919923895055"
              className="flex items-center gap-2 hover:text-[#D4AF37] text-white transition-colors font-medium"
            >
              <PhoneIcon size={14} className="text-[#D4AF37]" />
              <span>+91 99238 95055</span>
            </a>

            <span className="text-white/30 hidden sm:inline">|</span>

            <a
              href="mailto:beyondsandsresort@gmail.com"
              className="flex items-center gap-2 hover:text-[#D4AF37] text-white transition-colors font-medium"
            >
              <MailIcon size={14} className="text-[#D4AF37]" />
              <span>beyondsandsresort@gmail.com</span>
            </a>

            <span className="text-white/30 hidden sm:inline">|</span>

            <div className="flex items-center gap-2 text-[#CBD5E1]">
              <MapPinIcon size={14} className="text-[#D4AF37] shrink-0" />
              <span>Opposite Shitladevi Temple, Kelve Road, Palghar 401404</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-warm-ivory/60">
            <a
              href="https://www.instagram.com/beyondsands/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-champagne-gold transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon size={16} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61581822041563"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-champagne-gold transition-colors"
              aria-label="Facebook"
            >
              <FacebookIcon size={16} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default NavigationDrawer;
