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
  const [isVisible, setIsVisible] = useState(true);
  const [isDarkTheme, setIsDarkTheme] = useState(isHomePage);
  const [lastScrollY, setLastScrollY] = useState(0);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    setIsDarkTheme(isHomePage);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 120) {
        if (currentScrollY > lastScrollYRef.current && !isMenuOpen && !isEnquiryOpen) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }
      lastScrollYRef.current = currentScrollY;
      setLastScrollY(currentScrollY);

      if (!isHomePage) {
        setIsDarkTheme(false);
        return;
      }

      setIsDarkTheme(true);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen, isEnquiryOpen, isHomePage]);

  const textColorClass = isDarkTheme ? "text-warm-ivory" : "text-deep-navy";
  const logoSrc = isDarkTheme
    ? "/assets/brand/beyond-sands-logo-dark.png"
    : "/assets/brand/beyond-sands-logo-light.png";
  const islandTone = isHomePage
    ? lastScrollY > 40
      ? "is-scrolled-dark"
      : ""
    : "is-light";

  const navLink =
    `hidden md:inline-flex font-sans text-[11px] uppercase tracking-[0.16em] font-medium relative group py-1 ${textColorClass} transition-colors duration-500`;

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-50 px-3 sm:px-5 pt-3 sm:pt-4 transition-transform duration-700 ease-luxury ${
          isVisible ? "translate-y-0" : "-translate-y-[140%]"
        }`}
      >
        <header
          role="banner"
          className={`island-nav ${islandTone} max-w-6xl mx-auto h-[4.25rem] sm:h-[4.5rem] px-6 sm:px-8 md:px-10 flex items-center justify-between`}
        >
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

          <div className="flex-1 md:flex-initial flex items-center justify-center shrink-0">
            <Link
              href="/"
              className="relative block w-28 sm:w-36 h-10 transition-transform duration-500 ease-luxury hover:scale-[1.03]"
            >
              <Image
                src={logoSrc}
                alt="Beyond Sands Hotels & Resorts"
                fill
                priority
                sizes="(min-width: 640px) 144px, 112px"
                className="object-contain"
              />
            </Link>
          </div>

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
              className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-current/20 hover:border-champagne-gold hover:text-champagne-gold flex items-center justify-center shrink-0 ${textColorClass} transition-all duration-500 ease-luxury cursor-pointer ml-1 sm:ml-2`}
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
