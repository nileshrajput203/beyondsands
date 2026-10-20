"use client";

import { type MouseEvent } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { scrollToSection, scrollToY, setPendingHash } from "@/lib/scroll-nav";
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  WhatsAppIcon,
  InstagramIcon,
  FacebookIcon,
} from "../icons";
import HalftoneWordmarkFooter from "@/components/ui/halftone-wordmark-footer";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const router = useRouter();

  const handleSectionClick = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (pathname === "/") {
      scrollToSection(id);
    } else {
      setPendingHash(id);
      router.push("/");
    }
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      "Hi! I'm interested in booking a stay at Beyond Sands Pure Veg Resort. Could you help me with room availability and packages?"
    );
    window.open(`https://wa.me/919923895055?text=${text}`, "_blank");
  };

  return (
    <footer
      id="site-footer"
      className="relative w-full bg-[#061423] text-warm-ivory overflow-hidden select-none border-t border-champagne-gold/20"
    >
      {/* Upper 4-Column Architectural Grid with Precise Typographic Hierarchy */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-12 sm:pt-20 pb-10 sm:pb-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-x-6 gap-y-10 md:gap-10 xl:gap-14 items-start">
          
          {/* Column 1: Brand & Concierge (Cols 1-4) */}
          <div className="col-span-2 md:col-span-1 lg:col-span-4 flex flex-col justify-start space-y-5 sm:space-y-6">
            <Link href="/" className="relative block w-44 h-12 transition-opacity hover:opacity-90">
              <Image
                src="/assets/brand/beyond-sands-logo-dark.png"
                alt="Beyond Sands Hotels & Resorts"
                fill
                sizes="176px"
                className="object-contain object-left"
              />
            </Link>

            <p className="font-sans text-xs sm:text-[13px] text-warm-ivory/70 font-light leading-relaxed max-w-sm">
              Where palms meet the blue hour. A secluded coastal sanctuary at Kelva Beach crafted for tranquil escapes, pure vegetarian culinary excellence, and cherished family gatherings.
            </p>

            {/* Premium WhatsApp Concierge Button */}
            <div>
              <button
                type="button"
                onClick={handleWhatsApp}
                className="group relative inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-full border border-champagne-gold/50 bg-champagne-gold/10 hover:bg-champagne-gold text-champagne-gold hover:text-[#061423] font-sans text-xs uppercase tracking-[0.14em] font-semibold transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(196,154,101,0.25)] cursor-pointer w-full sm:w-auto"
              >
                <WhatsAppIcon size={16} className="transition-transform group-hover:scale-110" />
                <span>WhatsApp Concierge</span>
              </button>
            </div>

            {/* Direct Contact Channels */}
            <div className="space-y-2.5 pt-1 font-sans text-xs text-warm-ivory/75">
              <a
                href="tel:+919923895055"
                className="flex items-center gap-3 text-warm-ivory/80 hover:text-champagne-gold transition-colors duration-200 group"
              >
                <span className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-champagne-gold shrink-0 group-hover:border-champagne-gold/40 transition-colors">
                  <PhoneIcon size={12} />
                </span>
                <span className="font-medium tracking-wide">+91 99238 95055</span>
              </a>

              <a
                href="mailto:beyondsandsresort@gmail.com"
                className="flex items-center gap-3 text-warm-ivory/80 hover:text-champagne-gold transition-colors duration-200 group"
              >
                <span className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-champagne-gold shrink-0 group-hover:border-champagne-gold/40 transition-colors">
                  <MailIcon size={12} />
                </span>
                <span className="font-light tracking-wide truncate">beyondsandsresort@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Column 2: Explore Sanctuary (Cols 5-7) */}
          <div className="col-span-1 lg:col-span-3 space-y-3.5 sm:space-y-4">
            <h3 className="font-sans text-[11px] uppercase tracking-[0.18em] text-champagne-gold font-semibold pb-2 border-b border-champagne-gold/25 whitespace-nowrap">
              Explore Sanctuary
            </h3>
            <ul className="space-y-2 sm:space-y-2.5 font-sans text-xs text-warm-ivory/75 font-light pt-1">
              <li>
                <Link
                  href="/"
                  className="hover:text-champagne-gold transition-colors duration-200 block py-0.5 hover:translate-x-1 transform transition-transform"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-champagne-gold transition-colors duration-200 block py-0.5 hover:translate-x-1 transform transition-transform"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/rooms"
                  className="hover:text-champagne-gold transition-colors duration-200 block py-0.5 hover:translate-x-1 transform transition-transform"
                >
                  Rooms &amp; Suites
                </Link>
              </li>
              <li>
                <Link
                  href="/dining"
                  className="hover:text-champagne-gold transition-colors duration-200 block py-0.5 hover:translate-x-1 transform transition-transform"
                >
                  Pure Veg Dining
                </Link>
              </li>
              <li>
                <Link
                  href="/events-gallery"
                  className="hover:text-champagne-gold transition-colors duration-200 block py-0.5 hover:translate-x-1 transform transition-transform"
                >
                  Events &amp; Weddings
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-champagne-gold transition-colors duration-200 block py-0.5 hover:translate-x-1 transform transition-transform"
                >
                  Resort Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-champagne-gold transition-colors duration-200 block py-0.5 hover:translate-x-1 transform transition-transform"
                >
                  Blog &amp; Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Guest Services (Cols 8-9) */}
          <div className="col-span-1 lg:col-span-2 space-y-3.5 sm:space-y-4">
            <h3 className="font-sans text-[11px] uppercase tracking-[0.18em] text-champagne-gold font-semibold pb-2 border-b border-champagne-gold/25 whitespace-nowrap">
              Guest Services
            </h3>
            <ul className="space-y-2 sm:space-y-2.5 font-sans text-xs text-warm-ivory/75 font-light pt-1">
              <li>
                <Link
                  href="/location"
                  className="hover:text-champagne-gold transition-colors duration-200 block py-0.5 hover:translate-x-1 transform transition-transform"
                >
                  Location &amp; Beach
                </Link>
              </li>
              <li>
                <Link
                  href="/reviews"
                  className="hover:text-champagne-gold transition-colors duration-200 block py-0.5 hover:translate-x-1 transform transition-transform"
                >
                  Guest Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-champagne-gold transition-colors duration-200 block py-0.5 hover:translate-x-1 transform transition-transform font-medium text-warm-ivory"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/booking"
                  className="hover:text-warm-ivory text-champagne-gold font-medium transition-colors duration-200 inline-flex items-center gap-1.5 py-0.5 hover:translate-x-1 transform transition-transform"
                >
                  <span>Book Now</span>
                  <span className="text-[10px] font-sans">↗</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/house-rules"
                  className="hover:text-champagne-gold text-warm-ivory/65 transition-colors duration-200 block py-0.5 hover:translate-x-1 transform transition-transform"
                >
                  House Rules
                </Link>
              </li>
              <li>
                <Link
                  href="/cancellation"
                  className="hover:text-champagne-gold text-warm-ivory/65 transition-colors duration-200 block py-0.5 hover:translate-x-1 transform transition-transform"
                >
                  Cancellation Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Sanctuary Location & Details (Cols 10-12) */}
          <div className="col-span-2 md:col-span-1 lg:col-span-3 space-y-5 pt-2 sm:pt-0">
            <div>
              <h3 className="font-sans text-[11px] uppercase tracking-[0.18em] text-champagne-gold font-semibold pb-2 border-b border-champagne-gold/25 mb-3 whitespace-nowrap">
                Find Sanctuary
              </h3>
              <div className="flex items-start gap-2.5 font-sans text-xs text-warm-ivory/75 leading-relaxed">
                <MapPinIcon size={16} className="text-champagne-gold shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-warm-ivory/90">Opposite Shitladevi Temple, Kelve Road</p>
                  <p className="text-warm-ivory/65 text-[11px] mt-0.5">Kelve, Palghar 401404, Maharashtra</p>
                  <a
                    href="https://maps.google.com/?q=Beyond+Sands+Resort+Palghar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-champagne-gold hover:text-warm-ivory font-medium mt-1.5 transition-colors"
                  >
                    <span>Open in Google Maps</span>
                    <span className="text-[10px]">↗</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div>
              <h4 className="font-sans text-[10px] uppercase tracking-[0.16em] text-warm-ivory/60 mb-2.5 font-medium">
                Follow Our Journey
              </h4>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://www.instagram.com/beyondsands/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Beyond Sands on Instagram"
                  className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:border-champagne-gold/50 flex items-center justify-center text-warm-ivory/70 hover:text-champagne-gold transition-all duration-200 hover:scale-105"
                >
                  <InstagramIcon size={15} />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61581822041563"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Beyond Sands on Facebook"
                  className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:border-champagne-gold/50 flex items-center justify-center text-warm-ivory/70 hover:text-champagne-gold transition-all duration-200 hover:scale-105"
                >
                  <FacebookIcon size={15} />
                </a>
              </div>
            </div>

            {/* Timings & Sanctuary Badge Card */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 font-sans text-xs space-y-1.5">
              <div className="flex items-center justify-between text-[11px] text-warm-ivory/85">
                <span className="font-medium">Check-in: 01:00 PM</span>
                <span className="text-champagne-gold/40">·</span>
                <span className="font-medium">Check-out: 11:00 AM</span>
              </div>
              <p className="text-[11px] text-champagne-gold font-light tracking-wide flex items-center gap-1.5 pt-1 border-t border-white/5">
                <span>✦</span>
                <span>100% Pure Vegetarian Sanctuary · Family Friendly</span>
              </p>
            </div>
          </div>
        </div>

        {/* Legal & Policy Row: Perfectly Aligned */}
        <div className="pt-6 sm:pt-8 mt-10 sm:mt-14 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans text-warm-ivory/60">
          {/* Clean Policy Links with Separator Dots */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-3 sm:gap-x-4 gap-y-2 text-[11px] text-warm-ivory/70 order-1 md:order-2">
            <Link href="/privacy" className="hover:text-champagne-gold transition-colors duration-150">
              Privacy Policy
            </Link>
            <span className="text-warm-ivory/25" aria-hidden="true">·</span>
            <Link href="/terms" className="hover:text-champagne-gold transition-colors duration-150">
              Terms &amp; Conditions
            </Link>
            <span className="text-warm-ivory/25" aria-hidden="true">·</span>
            <Link href="/cancellation" className="hover:text-champagne-gold transition-colors duration-150">
              Cancellation &amp; Refund
            </Link>
            <span className="text-warm-ivory/25" aria-hidden="true">·</span>
            <Link href="/house-rules" className="hover:text-champagne-gold transition-colors duration-150">
              House Rules
            </Link>
            <span className="text-warm-ivory/25" aria-hidden="true">·</span>
            <Link href="/contact" className="hover:text-champagne-gold transition-colors duration-150">
              Contact &amp; Grievance
            </Link>
          </div>

          <div className="text-center md:text-left text-[11px] sm:text-xs text-warm-ivory/70 flex items-center justify-center gap-3 order-2 md:order-1">
            <span>© {currentYear} Beyond Sands Resort. All rights reserved.</span>
            <span className="text-warm-ivory/20 hidden sm:inline">|</span>
            <button
              onClick={() => scrollToY(0, 1.2)}
              className="text-champagne-gold hover:text-warm-ivory transition-colors cursor-pointer hidden sm:inline-flex items-center gap-1 group font-medium"
              aria-label="Scroll back to top of page"
            >
              <span>Back to top</span>
              <span className="group-hover:-translate-y-0.5 transition-transform duration-200">↑</span>
            </button>
          </div>
        </div>
      </div>

      {/* SIGNATURE MONUMENTAL HALFTONE WORDMARK: BEYOND SANDS */}
      <div className="w-full relative overflow-hidden -mt-4">
        <HalftoneWordmarkFooter
          as="div"
          wordmark="beyond sands"
          crop={0}
          height="220px"
          columns={[]}
          label=""
          meta=""
          backToTop={false}
          interactive={true}
          dotGap={5}
          radius={85}
          fontWeight={900}
          palette={{
            background: "#061423",
            ink: "rgba(248, 246, 241, 0.45)",
            warm: "#e4a853",
          }}
        />
      </div>
    </footer>
  );
}
