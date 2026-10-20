"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const NavigationDrawer = dynamic(
  () => import("./NavigationDrawer").then((m) => m.NavigationDrawer),
  { ssr: false }
);
const EnquiryDrawer = dynamic(
  () => import("./EnquiryDrawer").then((m) => m.EnquiryDrawer),
  { ssr: false }
);

export function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDarkTheme = isHomePage;
  const textColorClass = isDarkTheme ? "text-warm-ivory" : "text-deep-navy";
  const logoSrc = isDarkTheme
    ? "/assets/header/beyond-sands-logo-dark.png"
    : "/assets/header/beyond-sands-logo-light.png";
  const islandTone = isHomePage
    ? isScrolled
      ? "is-scrolled-dark shadow-2xl"
      : ""
    : "is-light shadow-md";

  const navLink =
    `hidden md:inline-flex font-sans text-[11px] uppercase tracking-[0.16em] font-medium relative group py-1 ${textColorClass} transition-colors duration-500`;

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-50 px-3 sm:px-5 transition-all duration-300 ease-luxury ${
          isScrolled ? "pt-2 sm:pt-2.5" : "pt-3 sm:pt-4"
        }`}
      >
        <header
          role="banner"
          className={`island-nav ${islandTone} max-w-6xl mx-auto h-[3.75rem] sm:h-[4.5rem] px-4 sm:px-8 md:px-10 flex items-center justify-between transition-all duration-300`}
        >
          {/* Desktop Left Primary Nav */}
          <nav className="hidden md:flex flex-1 items-center justify-start gap-8 lg:gap-10" aria-label="Primary">
            <Link href="/about" className={navLink}>
              <span>About</span>
              <span className="absolute bottom-0 left-0 w-0 h-px bg-champagne-gold transition-all duration-500 group-hover:w-full" />
            </Link>
            <Link href="/booking" className={navLink}>
              <span>Book</span>
              <span className="absolute bottom-0 left-0 w-0 h-px bg-champagne-gold transition-all duration-500 group-hover:w-full" />
            </Link>
          </nav>

          {/* Mobile Left Quick Action: Balances header symmetry & gives instant room access */}
          <div className="flex-1 flex md:hidden items-center justify-start">
            <Link
              href="/rooms-tariff"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/50 text-[#F5DEB3] hover:text-white font-sans text-[9.5px] uppercase tracking-[0.16em] font-medium shadow-xs active:scale-95 transition-all"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
              <span>Book</span>
            </Link>
          </div>

          {/* Center Brand Logo: Perfectly centered on mobile and desktop */}
          <div className="flex-initial flex items-center justify-center shrink-0 py-1">
            <Link
              href="/"
              className="relative block w-32 sm:w-44 md:w-52 h-11 sm:h-14 md:h-[3.85rem] transition-transform duration-500 ease-luxury hover:scale-[1.03] outline-none focus:outline-none focus-visible:outline-none ring-0 focus:ring-0"
            >
              <Image
                src={logoSrc}
                alt="Beyond Sands Hotels & Resorts"
                fill
                priority
                sizes="(min-width: 768px) 208px, (min-width: 640px) 176px, 128px"
                className="object-contain object-center outline-none"
              />
            </Link>
          </div>

          {/* Right Links & Menu Trigger */}
          <div className="flex-1 flex items-center justify-end gap-6 sm:gap-8">
            <Link href="/rooms" className={navLink}>
              <span>Rooms</span>
              <span className="absolute bottom-0 left-0 w-0 h-px bg-champagne-gold transition-all duration-500 group-hover:w-full" />
            </Link>
            <Link href="/contact" className={navLink}>
              <span>Contact</span>
              <span className="absolute bottom-0 left-0 w-0 h-px bg-champagne-gold transition-all duration-500 group-hover:w-full" />
            </Link>

            <button
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open full site menu"
              className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-current/20 hover:border-champagne-gold hover:text-champagne-gold flex items-center justify-center shrink-0 ${textColorClass} transition-all duration-500 ease-luxury cursor-pointer ml-1 sm:ml-2`}
            >
              <span className="menu-lines" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
            </button>
          </div>
        </header>
      </div>

      {isMenuOpen && (
        <NavigationDrawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      )}

      {isEnquiryOpen && (
        <EnquiryDrawer isOpen={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} />
      )}
    </>
  );
}
