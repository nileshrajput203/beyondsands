"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/footer/Footer";
import {
  Calendar,
  Users,
  Bed,
  Leaf,
  CheckCircle2,
  ShieldCheck,
  MapPin,
  Clock,
  Phone,
  HelpCircle,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons";

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    roomType: "Garden View Deluxe Verandah (₹3,499/night)",
    checkIn: "",
    checkOut: "",
    adults: "2",
    children: "0",
    diet: "Pure Vegetarian (Standard)",
    specialRequests: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg =
      `*Beyond Sands — Direct Reservation Request*\n\n` +
      `👤 *Guest Name:* ${formData.name}\n` +
      `📞 *Phone:* ${formData.phone}\n` +
      `✉️ *Email:* ${formData.email || "Not specified"}\n\n` +
      `🏨 *Room Selected:* ${formData.roomType}\n` +
      `📅 *Check-in Date:* ${formData.checkIn || "To be confirmed"}\n` +
      `📅 *Check-out Date:* ${formData.checkOut || "To be confirmed"}\n` +
      `👥 *Guests:* ${formData.adults} Adults, ${formData.children} Children\n` +
      `🥗 *Dietary Ethos:* ${formData.diet}\n` +
      (formData.specialRequests ? `📝 *Special Notes:* ${formData.specialRequests}\n\n` : "\n") +
      `_Inquiring for direct booking discount at Beyond Sands Palghar (Opposite Sheetla Devi Temple)._`;

    window.open(`https://wa.me/919923895055?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <>
      <main className="min-h-screen bg-warm-ivory text-charcoal pt-28 sm:pt-36 pb-20 select-none">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-champagne-gold mb-8">
            <Link href="/" className="hover:text-deep-navy transition-colors">Home</Link>
            <span>/</span>
            <span className="text-charcoal/60">Direct Booking Concierge</span>
          </nav>

          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 hairline-b border-charcoal/15 pb-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-champagne-gold/15 border border-champagne-gold/30 text-champagne-gold font-sans text-xs font-semibold tracking-wider uppercase mb-4">
                <span>Best Rate Guarantee · Direct Perks</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal text-deep-navy tracking-tight leading-[1.1]">
                BOOK YOUR SANCTUARY STAY
              </h1>
              <p className="font-sans text-base sm:text-lg text-charcoal/75 font-light mt-4 leading-relaxed">
                Reserve directly with Beyond Sands, <strong>Palghar's #1 Best Resort</strong> located <strong>directly opposite Sheetla Devi Temple</strong> and <strong>1 minute from Kelva Beach</strong>. Direct bookings include complimentary coastal breakfast, preferred room allocations, and flexible date adjustments.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/70 border border-charcoal/10 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-[#159b4d]" />
                <span className="font-sans text-xs font-medium text-deep-navy">100% Pure Veg &amp; Jain Meals</span>
              </div>
              <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/70 border border-charcoal/10 shadow-sm">
                <MapPin className="w-4 h-4 text-champagne-gold" />
                <span className="font-sans text-xs font-medium text-deep-navy">0 Mins Opposite Temple</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-24">
            
            {/* Left 7 Columns: Direct Booking Form */}
            <div className="lg:col-span-7 bg-white/90 rounded-3xl p-6 sm:p-10 border border-charcoal/15 shadow-[0_8px_30px_rgb(0,0,0,0.05)]">
              <div className="mb-8">
                <h2 className="font-display text-2xl sm:text-3xl font-medium text-deep-navy">
                  Instant Reservation Request
                </h2>
                <p className="font-sans text-xs sm:text-sm text-charcoal/70 font-light mt-1">
                  Fill in your details to instantly connect with our WhatsApp reservation desk with best rates applied.
                </p>
              </div>

              <form onSubmit={handleBookingSubmit} className="space-y-6">
                
                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-sans text-xs uppercase tracking-wider text-charcoal/80 font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Priya Shah"
                      className="w-full px-4 py-3 rounded-xl bg-warm-ivory/60 border border-charcoal/20 text-charcoal placeholder:text-charcoal/40 font-sans text-sm focus:outline-none focus:border-champagne-gold transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-sans text-xs uppercase tracking-wider text-charcoal/80 font-medium mb-2">
                      Mobile Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-warm-ivory/60 border border-charcoal/20 text-charcoal placeholder:text-charcoal/40 font-sans text-sm focus:outline-none focus:border-champagne-gold transition-colors"
                    />
                  </div>
                </div>

                {/* Email & Room Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-sans text-xs uppercase tracking-wider text-charcoal/80 font-medium mb-2">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@domain.com"
                      className="w-full px-4 py-3 rounded-xl bg-warm-ivory/60 border border-charcoal/20 text-charcoal placeholder:text-charcoal/40 font-sans text-sm focus:outline-none focus:border-champagne-gold transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-sans text-xs uppercase tracking-wider text-charcoal/80 font-medium mb-2">
                      Preferred Room / Suite *
                    </label>
                    <select
                      name="roomType"
                      value={formData.roomType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-warm-ivory/60 border border-charcoal/20 text-charcoal font-sans text-sm focus:outline-none focus:border-champagne-gold transition-colors"
                    >
                      <option value="Garden View Deluxe Verandah (₹3,499/night)">Garden View Deluxe Verandah (₹3,499/night)</option>
                      <option value="Pool View Executive Suite (₹3,999/night)">Pool View Executive Suite (₹3,999/night)</option>
                      <option value="Couple Romantic Coastal Nook (₹3,299/night)">Couple Romantic Coastal Nook (₹3,299/night)</option>
                      <option value="Grand Family Dormitory (₹6,999/night for up to 6)">Grand Family Dormitory (₹6,999/night for up to 6)</option>
                    </select>
                  </div>
                </div>

                {/* Check In & Check Out Dates */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-sans text-xs uppercase tracking-wider text-charcoal/80 font-medium mb-2">
                      Check-In Date *
                    </label>
                    <input
                      type="date"
                      name="checkIn"
                      required
                      value={formData.checkIn}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-warm-ivory/60 border border-charcoal/20 text-charcoal font-sans text-sm focus:outline-none focus:border-champagne-gold transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-sans text-xs uppercase tracking-wider text-charcoal/80 font-medium mb-2">
                      Check-Out Date *
                    </label>
                    <input
                      type="date"
                      name="checkOut"
                      required
                      value={formData.checkOut}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-warm-ivory/60 border border-charcoal/20 text-charcoal font-sans text-sm focus:outline-none focus:border-champagne-gold transition-colors"
                    />
                  </div>
                </div>

                {/* Guests & Diet */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block font-sans text-xs uppercase tracking-wider text-charcoal/80 font-medium mb-2">
                      Adults (12+ yrs)
                    </label>
                    <select
                      name="adults"
                      value={formData.adults}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-warm-ivory/60 border border-charcoal/20 text-charcoal font-sans text-sm focus:outline-none focus:border-champagne-gold"
                    >
                      {[1, 2, 3, 4, 5, 6, 8, 10, 15, "20+"].map((n) => (
                        <option key={n} value={n}>{n} Guest{n !== 1 ? "s" : ""}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-sans text-xs uppercase tracking-wider text-charcoal/80 font-medium mb-2">
                      Children (Below 12)
                    </label>
                    <select
                      name="children"
                      value={formData.children}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-warm-ivory/60 border border-charcoal/20 text-charcoal font-sans text-sm focus:outline-none focus:border-champagne-gold"
                    >
                      {[0, 1, 2, 3, 4, "5+"].map((n) => (
                        <option key={n} value={n}>{n} Child{n !== 1 ? "ren" : ""}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-sans text-xs uppercase tracking-wider text-charcoal/80 font-medium mb-2">
                      Dietary Ethos
                    </label>
                    <select
                      name="diet"
                      value={formData.diet}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-warm-ivory/60 border border-charcoal/20 text-charcoal font-sans text-sm focus:outline-none focus:border-champagne-gold"
                    >
                      <option value="Pure Vegetarian (Standard)">Pure Vegetarian (Standard)</option>
                      <option value="Strict Jain (No Onion/Garlic/Root Veg)">Strict Jain (No Onion/Garlic/Root Veg)</option>
                      <option value="Swaminarayan">Swaminarayan</option>
                      <option value="Vegan">Vegan</option>
                    </select>
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label className="block font-sans text-xs uppercase tracking-wider text-charcoal/80 font-medium mb-2">
                    Special Requests / Pilgrimage / Occasion (Optional)
                  </label>
                  <textarea
                    name="specialRequests"
                    rows={3}
                    value={formData.specialRequests}
                    onChange={handleChange}
                    placeholder="e.g. Visiting Sheetla Devi Temple for morning puja, requesting early check-in, pool-side room preference..."
                    className="w-full px-4 py-3 rounded-xl bg-warm-ivory/60 border border-charcoal/20 text-charcoal placeholder:text-charcoal/40 font-sans text-sm focus:outline-none focus:border-champagne-gold transition-colors"
                  />
                </div>

                {/* Submit Action */}
                <div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2.5 py-4 rounded-full bg-champagne-gold hover:bg-deep-navy text-deep-navy hover:text-warm-ivory font-sans text-xs uppercase tracking-[0.16em] font-semibold transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
                  >
                    <WhatsAppIcon size={18} />
                    <span>Confirm &amp; Dispatch via WhatsApp Concierge</span>
                  </button>
                  <span className="block text-center font-sans text-[11px] text-charcoal/50 mt-2">
                    Instant confirmation · No upfront payment required to inquire
                  </span>
                </div>

              </form>
            </div>

            {/* Right 5 Columns: Direct Booking Benefits */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="p-8 rounded-3xl bg-deep-navy text-warm-ivory shadow-lg">
                <span className="font-sans text-xs uppercase tracking-[0.2em] text-champagne-gold font-semibold block mb-2">
                  Direct Guest Privileges
                </span>
                <h3 className="font-display text-2xl font-medium mb-4">
                  WHY BOOK DIRECT WITH BEYOND SANDS?
                </h3>
                
                <ul className="space-y-4 font-sans text-xs sm:text-sm text-warm-ivory/85 font-light">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-champagne-gold shrink-0 mt-0.5" />
                    <span><strong>Best Rate Guarantee:</strong> We match and beat any online travel portal pricing for direct inquiries.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-champagne-gold shrink-0 mt-0.5" />
                    <span><strong>Complimentary Breakfast:</strong> Fresh coastal Maharashtrian or Jain breakfast served daily.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-champagne-gold shrink-0 mt-0.5" />
                    <span><strong>Flexible Rescheduling:</strong> Free date changes up to 7 days prior with 100% credit validity.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-champagne-gold shrink-0 mt-0.5" />
                    <span><strong>Priority Temple Assistance:</strong> Guidance on Sheetla Devi Mandir aarti timings right across our gate.</span>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-white/15">
                  <span className="font-sans text-xs uppercase tracking-wider text-champagne-gold block mb-1">
                    Direct Phone Concierge:
                  </span>
                  <a
                    href="tel:+919923895055"
                    className="flex items-center gap-2 font-display text-2xl text-white hover:text-champagne-gold transition-colors"
                  >
                    <Phone className="w-5 h-5 text-champagne-gold" />
                    <span>+91 99238 95055</span>
                  </a>
                  <span className="font-sans text-[11px] text-warm-ivory/60 block mt-1">
                    Available 08:00 AM – 10:00 PM daily for instant assistance
                  </span>
                </div>
              </div>

              {/* Timing Card */}
              <div className="p-6 rounded-3xl bg-white/80 border border-charcoal/15 shadow-sm space-y-3 font-sans text-xs text-charcoal/80">
                <div className="flex items-center gap-2 font-semibold text-deep-navy uppercase tracking-wider text-[11px]">
                  <Clock className="w-4 h-4 text-champagne-gold" />
                  <span>Property Check-In &amp; Check-Out</span>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-1">
                  <div>
                    <span className="text-charcoal/60 block">Check-In:</span>
                    <span className="font-medium text-deep-navy text-sm">01:00 PM onwards</span>
                  </div>
                  <div>
                    <span className="text-charcoal/60 block">Check-Out:</span>
                    <span className="font-medium text-deep-navy text-sm">11:00 AM</span>
                  </div>
                </div>
                <p className="text-[11px] text-charcoal/60 font-light pt-2 hairline-t border-charcoal/10">
                  Early check-in and late checkout are subject to availability upon request to the host desk.
                </p>
              </div>

            </div>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
