"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { CloseIcon, PhoneIcon, MailIcon, MapPinIcon } from "../icons";

interface NavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const NAV_PAGES = [
  { index: "01", name: "Home", href: "/" },
  { index: "02", name: "About", href: "/about" },
  { index: "03", name: "Rooms & Suites", href: "#rooms-section" },
  { index: "04", name: "Experiences", href: "/experiences" },
  { index: "05", name: "Dining", href: "#food-section" },
  { index: "06", name: "Weddings & Events", href: "/weddings-events" },
  { index: "07", name: "Offers", href: "/offers" },
  { index: "08", name: "Gallery", href: "#gallery-section" },
  { index: "09", name: "Blog / Journal", href: "/blog" },
  { index: "10", name: "FAQ", href: "/faq" },
  { index: "11", name: "Contact", href: "/contact" },
  { index: "12", name: "Book Now", href: "https://wa.me/919923895055?text=Hi!%20I'd%20like%20to%20inquire%20about%20booking%20a%20stay%20at%20Beyond%20Sands.", isExternal: true },
];

export function NavigationDrawer({ isOpen, onClose }: NavigationDrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);

  // Esc key closes drawer & Focus trap
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
      ref={drawerRef}
      className="fixed inset-0 z-[80] bg-deep-navy text-warm-ivory flex flex-col justify-between overflow-y-auto animate-fade-in"
    >
      {/* Top Header Row */}
      <div className="flex items-center justify-between px-6 sm:px-12 py-6 hairline-b border-champagne-gold/20">
        <Link href="/" onClick={onClose} className="flex items-center gap-3">
          <div className="relative w-32 h-12">
            <Image
              src="/assets/brand/logo.png"
              alt="Beyond Sands Logo"
              fill
              className="object-contain filter brightness-0 invert"
            />
          </div>
        </Link>

        <button
          onClick={onClose}
          aria-label="Close menu"
          className="p-3 text-warm-ivory hover:text-champagne-gold transition-colors duration-200"
        >
          <CloseIcon size={26} strokeWidth={1.25} />
        </button>
      </div>

      {/* Center Grid: 12 Brand Sheet Pages */}
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-12">
          {NAV_PAGES.map((page) => (
            <div key={page.index} className="group">
              {page.isExternal ? (
                <a
                  href={page.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="flex items-baseline gap-4 py-2 text-warm-ivory/90 hover:text-champagne-gold transition-colors duration-300"
                >
                  <span className="font-sans text-xs tracking-wider text-champagne-gold/70">
                    {page.index}
                  </span>
                  <span className="font-display text-2xl sm:text-3xl font-normal tracking-wide group-hover:translate-x-1 transition-transform duration-300">
                    {page.name}
                  </span>
                </a>
              ) : (
                <Link
                  href={page.href}
                  onClick={onClose}
                  className="flex items-baseline gap-4 py-2 text-warm-ivory/90 hover:text-champagne-gold transition-colors duration-300"
                >
                  <span className="font-sans text-xs tracking-wider text-champagne-gold/70">
                    {page.index}
                  </span>
                  <span className="font-display text-2xl sm:text-3xl font-normal tracking-wide group-hover:translate-x-1 transition-transform duration-300">
                    {page.name}
                  </span>
                </Link>
              )}
              <div className="h-[1px] w-full bg-champagne-gold/10 group-hover:bg-champagne-gold/40 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Live Contact Line */}
      <div className="hairline-t border-champagne-gold/20 px-6 sm:px-12 py-6 bg-deep-navy/80">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-wider font-sans text-warm-ivory/70">
          <div className="flex items-center gap-2">
            <PhoneIcon size={14} />
            <a href="tel:+919923895055" className="hover:text-warm-ivory transition-colors">
              +91 99238 95055
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MailIcon size={14} />
            <a href="mailto:beyondsandsresort@gmail.com" className="hover:text-warm-ivory transition-colors">
              beyondsandsresort@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2 text-center md:text-right">
            <MapPinIcon size={14} />
            <span>Opposite Shitladevi temple, Kelwa Beach, Palghar 401404</span>
          </div>
        </div>
      </div>
    </div>
  );
}
