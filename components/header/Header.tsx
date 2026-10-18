"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { HamburgerIcon } from "../icons";
import { NavigationDrawer } from "./NavigationDrawer";
import { EnquiryDrawer } from "./EnquiryDrawer";

export function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isDarkTheme, setIsDarkTheme] = useState(isHomePage); // true = Warm Ivory text (over hero/dark), false = Deep Navy text
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (!isHomePage) {
      setIsDarkTheme(false);
    } else {
      setIsDarkTheme(true);
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Header hide on scroll down, reveal on scroll up
      if (currentScrollY > 120) {
        if (currentScrollY > lastScrollY && !isMenuOpen && !isEnquiryOpen) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);

      // On subpages, keep dark text
      if (!isHomePage) {
        setIsDarkTheme(false);
        return;
      }

      // On home page, detect theme adaptation per section:
      // Hero (0 - ~90vh): Dark media -> Warm Ivory text
      // Rooms (light surface): Deep Navy text
      // Cloud Divider / Location (light surface): Deep Navy text
      // Food (dusk) & Gallery (night) & Footer: Warm Ivory text
      const foodElem = document.getElementById("food-section");
      const roomsElem = document.getElementById("rooms-section");

      if (foodElem && window.scrollY >= foodElem.offsetTop - 80) {
        setIsDarkTheme(true);
      } else if (roomsElem && window.scrollY >= roomsElem.offsetTop - 80) {
        setIsDarkTheme(false);
      } else {
        setIsDarkTheme(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isMenuOpen, isEnquiryOpen, isHomePage]);

  const textColorClass = isDarkTheme ? "text-warm-ivory" : "text-deep-navy";
  const logoSrc = isDarkTheme ? "/assets/brand/beyond-sands-logo-dark.png" : "/assets/brand/beyond-sands-logo-light.png";
  const headerBgClass = isHomePage
    ? lastScrollY > 40
      ? "bg-deep-navy/70 backdrop-blur-md border-b border-warm-ivory/10 shadow-sm"
      : "bg-transparent"
    : lastScrollY > 40
    ? "bg-warm-ivory/90 backdrop-blur-md border-b border-charcoal/10 shadow-xs"
    : "bg-transparent";

  return (
    <>
      {/* Top Scrim Gradient ONLY over Hero on Home Page for legibility */}
      {isHomePage && (
        <div className="fixed top-0 left-0 right-0 h-28 bg-gradient-to-b from-deep-navy/40 to-transparent pointer-events-none z-40 transition-opacity duration-500" />
      )}

      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 transform ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } ${headerBgClass}`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 h-24 flex items-center justify-between">
          {/* LEFT GROUP: BOOK DIRECTLY, ENQUIRY NOW */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="https://wa.me/919923895055?text=Hi!%20I'd%20like%20to%20book%20directly%20with%20Beyond%20Sands.%20Could%20you%20share%20best%20available%20rates%20and%20dates?"
              target="_blank"
              rel="noopener noreferrer"
              className={`font-sans text-[11px] uppercase tracking-wider font-medium relative group py-1 ${textColorClass} transition-colors duration-300`}
            >
              <span>Book Directly</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-champagne-gold transition-all duration-300 group-hover:w-full" />
            </a>

            <button
              onClick={() => setIsEnquiryOpen(true)}
              className={`font-sans text-[11px] uppercase tracking-wider font-medium relative group py-1 ${textColorClass} transition-colors duration-300 cursor-pointer`}
            >
              <span>Enquiry Now</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-champagne-gold transition-all duration-300 group-hover:w-full" />
            </button>
          </div>

          {/* CENTRE: BEYOND SANDS LOGO */}
          <div className="flex-1 md:flex-initial flex justify-center">
            <Link href="/" className="relative block w-32 sm:w-36 h-12 transition-transform duration-300 hover:scale-105">
              <Image
                src={logoSrc}
                alt="Beyond Sands Hotels & Resorts"
                fill
                priority
                className="object-contain transition-opacity duration-300"
              />
            </Link>
          </div>

          {/* RIGHT GROUP: ROOMS & SUITES, BLOG, HAMBURGER */}
          <div className="flex items-center gap-6 sm:gap-8">
            <Link
              href="#rooms-section"
              className={`hidden md:inline-block font-sans text-[11px] uppercase tracking-wider font-medium relative group py-1 ${textColorClass} transition-colors duration-300`}
            >
              <span>Rooms & Suites</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-champagne-gold transition-all duration-300 group-hover:w-full" />
            </Link>

            <Link
              href="/blog"
              className={`hidden md:inline-block font-sans text-[11px] uppercase tracking-wider font-medium relative group py-1 ${textColorClass} transition-colors duration-300`}
            >
              <span>Blog</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-champagne-gold transition-all duration-300 group-hover:w-full" />
            </Link>

            {/* Architectural 3-Line Hamburger */}
            <button
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open full site menu"
              className={`p-2 ${textColorClass} hover:text-champagne-gold transition-colors duration-300 cursor-pointer`}
            >
              <HamburgerIcon size={26} strokeWidth={1.25} />
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen 12-Page Navigation Drawer */}
      <NavigationDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />

      {/* Refined Enquiry Slide-over */}
      <EnquiryDrawer
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
      />
    </>
  );
}
