"use client";

import { useState } from "react";
import Link from "next/link";
import { Footer } from "@/components/footer/Footer";
import { PhoneIcon, MailIcon, MapPinIcon, WhatsAppIcon } from "@/components/icons";

interface RouteInfo {
  mode: string;
  duration: string;
  details: string;
}

const ROUTES: RouteInfo[] = [
  {
    mode: "From Mumbai (Car)",
    duration: "Approx. 90 – 120 mins",
    details: "Drive along the Western Express Highway (NH48) north towards Manor/Palghar. Take the Manor-Palghar road directly to Kelve Beach. Ample secure parking is provided on-site.",
  },
  {
    mode: "From Western Railway (Train)",
    duration: "Local & Express Trains",
    details: "Board any Western Railway local or express train to Kelve Road Station (5 km from resort) or Palghar Station (12 km). Auto-rickshaws and resort transfer taxis are readily available at the station.",
  },
  {
    mode: "From Gujarat / Surat (Car)",
    duration: "Approx. 3.5 – 4 hours",
    details: "Take NH48 South towards Mumbai, exit near Charoti / Manor towards Palghar-Kelve coastal highway. Smooth scenic drive through countryside orchards.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    roomType: "Deluxe Verandah Room",
    diet: "Pure Vegetarian",
    checkIn: "",
    checkOut: "",
    guests: "2",
    message: "",
  });

  const [activeRouteTab, setActiveRouteTab] = useState(0);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `*Beyond Sands — Direct Reservation & Inquiry*\n` +
      `Guest Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Email: ${formData.email || "Not provided"}\n` +
      `Preferred Room: ${formData.roomType}\n` +
      `Dietary Preference: ${formData.diet}\n` +
      `Check-in: ${formData.checkIn || "Flexible"}\n` +
      `Check-out: ${formData.checkOut || "Flexible"}\n` +
      `Number of Guests: ${formData.guests}\n` +
      `Notes/Requests: ${formData.message || "Please share tariff, package inclusions, and availability."}`
    );
    window.open(`https://wa.me/919923895055?text=${text}`, "_blank");
  };

  return (
    <>
      <div className="pt-28 sm:pt-36 pb-24 px-6 sm:px-12 max-w-7xl mx-auto select-none">
        {/* Navigation Breadcrumb */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-champagne-gold hover:text-deep-navy transition-colors mb-10 group"
        >
          <span className="transition-transform group-hover:-translate-x-1">←</span>
          <span>Return to Home</span>
        </Link>

        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-champagne-gold/10 border border-champagne-gold/30 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-champagne-gold animate-pulse" />
            <span className="font-sans text-[11px] uppercase tracking-widest text-deep-navy font-semibold">
              11 · Direct Concierge & Bookings
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl text-deep-navy font-normal tracking-wide max-w-4xl leading-[1.08]">
            Connect with our coastal concierge.
          </h1>
          <p className="font-sans text-base sm:text-lg text-charcoal/80 font-light mt-6 max-w-2xl leading-relaxed">
            Ready to experience the quiet hush of the palms? Get in touch with our resident desk for direct reservations, family packages, celebration buyouts, or dining inquiries.
          </p>
        </div>

        {/* 2-Column Contact & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          {/* Form Column (7 cols) */}
          <div className="lg:col-span-7 bg-white/80 backdrop-blur-sm border border-charcoal/15 rounded-[3px] p-6 sm:p-10 shadow-sm">
            <div className="flex items-center justify-between mb-8 hairline-b border-charcoal/15 pb-4">
              <div>
                <h2 className="font-display text-2xl sm:text-3xl text-deep-navy font-normal">
                  Reserve Your Stay
                </h2>
                <span className="font-sans text-xs text-charcoal/60">
                  Instant concierge response via WhatsApp or Phone
                </span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-mono rounded-full">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
                <span>Concierge Online</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 font-sans text-xs">
              {/* Row 1: Name and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block uppercase tracking-wider text-charcoal/70 mb-1.5 font-medium">
                    Full Name *
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="E.g. Ananya Mehta"
                    className="w-full bg-warm-ivory/50 border border-charcoal/15 rounded-[2px] px-3.5 py-3 text-sm text-deep-navy focus:border-champagne-gold focus:ring-1 focus:ring-champagne-gold/30 focus:outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="block uppercase tracking-wider text-charcoal/70 mb-1.5 font-medium">
                    Phone / WhatsApp *
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 99238 95055"
                    className="w-full bg-warm-ivory/50 border border-charcoal/15 rounded-[2px] px-3.5 py-3 text-sm text-deep-navy focus:border-champagne-gold focus:ring-1 focus:ring-champagne-gold/30 focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* Row 2: Email */}
              <div>
                <label htmlFor="contact-email" className="block uppercase tracking-wider text-charcoal/70 mb-1.5 font-medium">
                  Email Address (Optional)
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ananya@example.com"
                  className="w-full bg-warm-ivory/50 border border-charcoal/15 rounded-[2px] px-3.5 py-3 text-sm text-deep-navy focus:border-champagne-gold focus:ring-1 focus:ring-champagne-gold/30 focus:outline-none transition-all"
                />
              </div>

              {/* Row 3: Room Type & Dietary preference */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-roomType" className="block uppercase tracking-wider text-charcoal/70 mb-1.5 font-medium">
                    Preferred Room Format
                  </label>
                  <select
                    id="contact-roomType"
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleChange}
                    className="w-full bg-warm-ivory/50 border border-charcoal/15 rounded-[2px] px-3.5 py-3 text-xs text-deep-navy focus:border-champagne-gold focus:outline-none cursor-pointer"
                  >
                    <option value="Deluxe Verandah Room">Deluxe Verandah Room (Garden View)</option>
                    <option value="Executive Poolside Suite">Executive Poolside Suite</option>
                    <option value="Family Heritage Dorm">Family Heritage Dorm (4–8 Guests)</option>
                    <option value="Full Resort Buyout">Full Resort Buyout (Exclusive Use)</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="contact-diet" className="block uppercase tracking-wider text-charcoal/70 mb-1.5 font-medium">
                    Dietary Requirements
                  </label>
                  <select
                    id="contact-diet"
                    name="diet"
                    value={formData.diet}
                    onChange={handleChange}
                    className="w-full bg-warm-ivory/50 border border-charcoal/15 rounded-[2px] px-3.5 py-3 text-xs text-deep-navy focus:border-champagne-gold focus:outline-none cursor-pointer"
                  >
                    <option value="Pure Vegetarian">100% Pure Vegetarian (Standard)</option>
                    <option value="Jain (No Root Veg)">Jain Diet (Strictly No Onion/Garlic/Potato)</option>
                    <option value="Swaminarayan">Swaminarayan Diet</option>
                    <option value="Vegan / Dairy-Free">Vegan / Dairy-Free</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Dates & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="contact-checkin" className="block uppercase tracking-wider text-charcoal/70 mb-1.5 font-medium">
                    Check-in Date
                  </label>
                  <input
                    id="contact-checkin"
                    name="checkIn"
                    type="date"
                    value={formData.checkIn}
                    onChange={handleChange}
                    className="w-full bg-warm-ivory/50 border border-charcoal/15 rounded-[2px] px-3 py-2.5 text-xs text-deep-navy focus:border-champagne-gold focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="contact-checkout" className="block uppercase tracking-wider text-charcoal/70 mb-1.5 font-medium">
                    Check-out Date
                  </label>
                  <input
                    id="contact-checkout"
                    name="checkOut"
                    type="date"
                    value={formData.checkOut}
                    onChange={handleChange}
                    className="w-full bg-warm-ivory/50 border border-charcoal/15 rounded-[2px] px-3 py-2.5 text-xs text-deep-navy focus:border-champagne-gold focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="contact-guests" className="block uppercase tracking-wider text-charcoal/70 mb-1.5 font-medium">
                    Number of Guests
                  </label>
                  <select
                    id="contact-guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full bg-warm-ivory/50 border border-charcoal/15 rounded-[2px] px-3 py-2.5 text-xs text-deep-navy focus:border-champagne-gold focus:outline-none cursor-pointer"
                  >
                    {[1, 2, 3, 4, 5, 6, 8, 10, 15, 20].map((g) => (
                      <option key={g} value={g}>
                        {g} {g === 1 ? "Guest" : "Guests"}
                      </option>
                    ))}
                    <option value="20+ (Group Buyout)">20+ Guests (Group/Event)</option>
                  </select>
                </div>
              </div>

              {/* Row 5: Message */}
              <div>
                <label htmlFor="contact-message" className="block uppercase tracking-wider text-charcoal/70 mb-1.5 font-medium">
                  Special Notes / Celebrations
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="E.g. Celebrating an anniversary, requiring ground floor room for elders..."
                  className="w-full bg-warm-ivory/50 border border-charcoal/15 rounded-[2px] px-3.5 py-3 text-sm text-deep-navy focus:border-champagne-gold focus:outline-none resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-deep-navy hover:bg-navy-blue text-warm-ivory font-sans text-xs uppercase tracking-widest font-semibold py-4 rounded-[2px] flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm hover:shadow-md mt-4"
              >
                <WhatsAppIcon size={18} />
                <span>Submit Reservation to Host via WhatsApp</span>
              </button>

              <p className="text-center text-[11px] text-charcoal/60 pt-1 font-light">
                Direct booking guarantee: No middleman commissions · Best rate promise
              </p>
            </form>
          </div>

          {/* Details & Interactive Map Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Contact Card */}
            <div className="bg-white/80 backdrop-blur-sm border border-charcoal/15 rounded-[3px] p-6 sm:p-8 space-y-6 shadow-sm">
              <h3 className="font-display text-2xl text-deep-navy font-normal hairline-b border-charcoal/15 pb-3">
                Resort Direct Details
              </h3>
              <div className="space-y-4 font-sans text-xs">
                <div className="flex items-start gap-3.5">
                  <MapPinIcon size={18} className="text-champagne-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-deep-navy block text-sm">Physical Address</span>
                    <span className="text-charcoal/75 leading-relaxed block mt-0.5">
                      Opposite Shitladevi Temple, Kelve Road, Kelve, Palghar 401404, Maharashtra, India
                    </span>
                    <span className="text-[10px] text-champagne-gold font-mono block mt-1">
                      5 mins walk from Kelva Beach
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <PhoneIcon size={18} className="text-champagne-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-deep-navy block text-sm">Telephone & WhatsApp</span>
                    <a
                      href="tel:+919923895055"
                      className="text-charcoal/80 hover:text-deep-navy transition-colors font-mono text-sm block mt-0.5"
                    >
                      +91 99238 95055
                    </a>
                    <span className="text-[10px] text-charcoal/50 block">Available 8:00 AM – 10:00 PM IST</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <MailIcon size={18} className="text-champagne-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-deep-navy block text-sm">Official Email</span>
                    <a
                      href="mailto:beyondsandsresort@gmail.com"
                      className="text-charcoal/80 hover:text-deep-navy transition-colors text-xs block mt-0.5"
                    >
                      beyondsandsresort@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Timings */}
              <div className="hairline-t border-charcoal/15 pt-4 grid grid-cols-2 gap-4 text-center font-sans text-xs">
                <div className="p-3 bg-warm-ivory/50 rounded-[2px]">
                  <span className="text-[10px] uppercase font-mono text-champagne-gold block mb-1">Check-in</span>
                  <span className="font-semibold text-deep-navy text-sm">12:00 PM</span>
                </div>
                <div className="p-3 bg-warm-ivory/50 rounded-[2px]">
                  <span className="text-[10px] uppercase font-mono text-champagne-gold block mb-1">Check-out</span>
                  <span className="font-semibold text-deep-navy text-sm">10:00 AM</span>
                </div>
              </div>
            </div>

            {/* Interactive Travel Directions Accordion */}
            <div className="bg-white/80 backdrop-blur-sm border border-charcoal/15 rounded-[3px] p-6 shadow-sm space-y-4 font-sans">
              <span className="text-[11px] uppercase tracking-widest text-champagne-gold font-semibold block">
                How to Reach Us
              </span>
              <div className="flex gap-2 hairline-b border-charcoal/15 pb-3">
                {ROUTES.map((route, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveRouteTab(idx)}
                    className={`px-3 py-1.5 text-[11px] rounded-[2px] transition-colors cursor-pointer ${
                      activeRouteTab === idx
                        ? "bg-deep-navy text-warm-ivory font-medium"
                        : "bg-warm-ivory/60 text-charcoal/70 hover:text-deep-navy"
                    }`}
                  >
                    {route.mode.split(" ")[1] || route.mode}
                  </button>
                ))}
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-deep-navy">{ROUTES[activeRouteTab].mode}</span>
                  <span className="text-[10px] font-mono text-champagne-gold">{ROUTES[activeRouteTab].duration}</span>
                </div>
                <p className="text-xs text-charcoal/75 leading-relaxed font-light">
                  {ROUTES[activeRouteTab].details}
                </p>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="w-full aspect-[16/10] rounded-[3px] overflow-hidden border border-champagne-gold/30 shadow-sm relative group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.844915862447!2d72.72960557531687!3d19.612193034920868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be703c22891dba7%3A0x7b4e7743d1ccd07a!2sBeyond%20Sands%20Pure%20Veg%20Resort!5e1!3m2!1sen!2sin!4v1779344489056!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="Beyond Sands Location Map"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
