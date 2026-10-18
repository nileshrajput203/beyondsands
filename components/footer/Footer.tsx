"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  WhatsAppIcon,
  InstagramIcon,
  FacebookIcon,
  TwitterIcon,
} from "../icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      "Hi! I'm interested in Beyond Sands resort. Could you help me with more information?"
    );
    window.open(`https://wa.me/919923895055?text=${text}`, "_blank");
  };

  return (
    <footer
      id="site-footer"
      className="relative w-full bg-deep-navy text-warm-ivory overflow-hidden select-none hairline-t border-champagne-gold/20"
    >
      {/* Upper 4-Column Architectural Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 pt-20 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 items-start">
          {/* Column 1: Brand & Identity (Cols 1-4) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="relative block w-44 h-14">
              <Image
                src="/assets/brand/beyond-sands-logo-dark.png"
                alt="Beyond Sands Hotels & Resorts"
                fill
                className="object-contain"
              />
            </Link>

            <p className="font-sans text-xs sm:text-sm text-warm-ivory/75 font-light leading-relaxed max-w-sm">
              Where palms meet the blue hour. Your coastal sanctuary for tranquil escapes and authentic experiences.
            </p>

            {/* Direct WhatsApp Callout */}
            <button
              onClick={handleWhatsApp}
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-[2px] bg-champagne-gold text-deep-navy font-sans text-xs uppercase tracking-widest font-semibold hover:bg-champagne-gold/90 transition-colors cursor-pointer"
            >
              <WhatsAppIcon size={16} />
              <span>WhatsApp Concierge</span>
            </button>

            {/* Live Contact Line */}
            <div className="space-y-2 pt-2 font-sans text-xs text-warm-ivory/70">
              <div className="flex items-center gap-2.5">
                <PhoneIcon size={14} className="text-champagne-gold" />
                <a href="tel:+919923895055" className="hover:text-warm-ivory transition-colors">
                  +91 99238 95055
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MailIcon size={14} className="text-champagne-gold" />
                <a href="mailto:beyondsandsresort@gmail.com" className="hover:text-warm-ivory transition-colors">
                  beyondsandsresort@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: 12-Page Sitemap Part 1 (Cols 5-7) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-sans text-xs uppercase tracking-widest text-champagne-gold font-semibold hairline-b border-champagne-gold/20 pb-2">
              Sitemap · 01–06
            </h3>
            <ul className="space-y-2.5 font-sans text-xs text-warm-ivory/75 font-light">
              <li>
                <Link href="/" className="hover:text-champagne-gold transition-colors flex items-center gap-2">
                  <span className="text-[10px] text-champagne-gold/60 font-mono">01</span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-champagne-gold transition-colors flex items-center gap-2">
                  <span className="text-[10px] text-champagne-gold/60 font-mono">02</span>
                  <span>About</span>
                </Link>
              </li>
              <li>
                <Link href="#rooms-section" className="hover:text-champagne-gold transition-colors flex items-center gap-2">
                  <span className="text-[10px] text-champagne-gold/60 font-mono">03</span>
                  <span>Rooms & Suites</span>
                </Link>
              </li>
              <li>
                <Link href="/experiences" className="hover:text-champagne-gold transition-colors flex items-center gap-2">
                  <span className="text-[10px] text-champagne-gold/60 font-mono">04</span>
                  <span>Experiences</span>
                </Link>
              </li>
              <li>
                <Link href="#food-section" className="hover:text-champagne-gold transition-colors flex items-center gap-2">
                  <span className="text-[10px] text-champagne-gold/60 font-mono">05</span>
                  <span>Dining</span>
                </Link>
              </li>
              <li>
                <Link href="/weddings-events" className="hover:text-champagne-gold transition-colors flex items-center gap-2">
                  <span className="text-[10px] text-champagne-gold/60 font-mono">06</span>
                  <span>Weddings & Events</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: 12-Page Sitemap Part 2 & Policies (Cols 8-9) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-sans text-xs uppercase tracking-widest text-champagne-gold font-semibold hairline-b border-champagne-gold/20 pb-2">
              Sitemap · 07–12
            </h3>
            <ul className="space-y-2.5 font-sans text-xs text-warm-ivory/75 font-light">
              <li>
                <Link href="/offers" className="hover:text-champagne-gold transition-colors flex items-center gap-2">
                  <span className="text-[10px] text-champagne-gold/60 font-mono">07</span>
                  <span>Offers</span>
                </Link>
              </li>
              <li>
                <Link href="#gallery-section" className="hover:text-champagne-gold transition-colors flex items-center gap-2">
                  <span className="text-[10px] text-champagne-gold/60 font-mono">08</span>
                  <span>Gallery</span>
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-champagne-gold transition-colors flex items-center gap-2">
                  <span className="text-[10px] text-champagne-gold/60 font-mono">09</span>
                  <span>Blog / Journal</span>
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-champagne-gold transition-colors flex items-center gap-2">
                  <span className="text-[10px] text-champagne-gold/60 font-mono">10</span>
                  <span>FAQ</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-champagne-gold transition-colors flex items-center gap-2">
                  <span className="text-[10px] text-champagne-gold/60 font-mono">11</span>
                  <span>Contact</span>
                </Link>
              </li>
              <li>
                <a
                  href="https://wa.me/919923895055?text=Hi!%20I'd%20like%20to%20book%20a%20stay%20at%20Beyond%20Sands."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-champagne-gold transition-colors flex items-center gap-2 font-medium text-champagne-gold"
                >
                  <span className="text-[10px] text-champagne-gold/60 font-mono">12</span>
                  <span>Book Now</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Address, Socials & Policies (Cols 10-12) */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <h3 className="font-sans text-xs uppercase tracking-widest text-champagne-gold font-semibold hairline-b border-champagne-gold/20 pb-2 mb-3">
                Find Sanctuary
              </h3>
              <div className="flex items-start gap-2.5 font-sans text-xs text-warm-ivory/70 leading-relaxed">
                <MapPinIcon size={16} className="text-champagne-gold shrink-0 mt-0.5" />
                <div>
                  <p>Opposite Shitladevi temple Kelve Road</p>
                  <p>Kelve, Palghar 401404, Maharashtra</p>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div>
              <h4 className="font-sans text-[11px] uppercase tracking-wider text-warm-ivory/60 mb-3">
                Follow Our Journey
              </h4>
              <div className="flex items-center gap-4 text-warm-ivory/70">
                <a
                  href="https://www.instagram.com/beyondsands/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Beyond Sands on Instagram"
                  className="hover:text-champagne-gold transition-colors"
                >
                  <InstagramIcon size={18} />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61581822041563"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Beyond Sands on Facebook"
                  className="hover:text-champagne-gold transition-colors"
                >
                  <FacebookIcon size={18} />
                </a>
                <a
                  href="#"
                  aria-label="Beyond Sands on Twitter"
                  className="hover:text-champagne-gold transition-colors"
                >
                  <TwitterIcon size={18} />
                </a>
              </div>
            </div>

            {/* Policies */}
            <div className="flex flex-wrap gap-x-4 gap-y-1 font-sans text-[11px] text-warm-ivory/50 pt-2 hairline-t border-warm-ivory/10">
              <Link href="/privacy" className="hover:text-warm-ivory transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-warm-ivory transition-colors">
                Terms
              </Link>
              <Link href="/cancellation" className="hover:text-warm-ivory transition-colors">
                Cancellation
              </Link>
              <Link href="/house-rules" className="hover:text-warm-ivory transition-colors">
                House Rules
              </Link>
            </div>
          </div>
        </div>

        {/* Legal Row */}
        <div className="pt-12 mt-12 hairline-t border-warm-ivory/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans text-warm-ivory/60">
          <div>
            © {currentYear} Beyond Sands Resort. All rights reserved.
          </div>
        </div>
      </div>

      {/* SIGNATURE MONUMENTAL BOTTOM WORDMARK: BEYOND SANDS */}
      {/* Edge-to-edge, full-viewport-width, cropped by bottom edge */}
      <div className="w-full overflow-hidden select-none pointer-events-none -mb-3 sm:-mb-6 md:-mb-10 lg:-mb-14">
        <svg
          viewBox="0 0 1440 180"
          className="w-full h-auto overflow-hidden block"
          preserveAspectRatio="none"
        >
          <text
            x="50%"
            y="170"
            textAnchor="middle"
            textLength="1420"
            lengthAdjust="spacingAndGlyphs"
            className="font-sans font-black uppercase tracking-[0.06em]"
            style={{
              fill: "rgba(248, 246, 241, 0.22)",
              fontSize: "172px",
              fontFamily: "var(--font-sans), Montserrat, sans-serif",
            }}
          >
            BEYOND SANDS
          </text>
        </svg>
      </div>
    </footer>
  );
}
