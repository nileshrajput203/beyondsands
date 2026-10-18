"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/footer/Footer";
import { SparklesIcon, CalendarIcon, ArrowRightIcon } from "@/components/icons";

interface Post {
  slug: string;
  title: string;
  date: string;
  category: "Philosophy" | "Exploration" | "Culinary" | "Travel Guides";
  readTime: string;
  excerpt: string;
  image: string;
  featured?: boolean;
}

const POSTS: Post[] = [
  {
    slug: "coastal-calm-at-the-blue-hour",
    title: "Coastal Calm at the Blue Hour: The Art of Slowing Down",
    date: "October 2026",
    category: "Philosophy",
    readTime: "4 min read",
    excerpt:
      "As the sun dips below the Arabian Sea horizon, a magical twilight settles over our coconut groves. Discover why the blue hour is our resort's signature moment, inviting deep breath and restorative pause.",
    image: "/assets/hero/hero-twilight.jpg",
    featured: true,
  },
  {
    slug: "guide-to-kelva-beach-casuarina",
    title: "A Quiet Guide to Kelva Beach & The Whispering Suru Groves",
    date: "September 2026",
    category: "Exploration",
    readTime: "5 min read",
    excerpt:
      "Just a five-minute stroll from our verandahs lies one of Maharashtra's cleanest shorelines. Tips on tide timings, seaside morning meditation, and the aromatic shade of coastal Casuarina trees.",
    image: "/assets/location/location-surroundings-beach.webp",
  },
  {
    slug: "coastal-maharashtrian-pure-veg-feasts",
    title: "The Flavors of Palghar: Pure Vegetarian Coastal Dining",
    date: "August 2026",
    category: "Culinary",
    readTime: "3 min read",
    excerpt:
      "Fresh coconut, stone-ground regional masalas, and heirloom pulses: how our kitchen crafts wholesome dining that warms the soul without meat or artificial additives.",
    image: "/assets/dining/lunch-plate.png",
  },
  {
    slug: "secret-tide-pools-kelva-fort",
    title: "Historic Tide Pools & Sunset Vistas of Kelva Fort",
    date: "July 2026",
    category: "Travel Guides",
    readTime: "6 min read",
    excerpt:
      "Built in the 16th century, Kelva Fort emerges from the receding tide like a stone sentinel. How to plan your visit during low tide for an unforgettable walk back in time.",
    image: "/assets/gallery/kelvafort-Dfk42c0Z.jpg",
  },
  {
    slug: "restoring-acoustic-silence",
    title: "The Luxury of Acoustic Silence: Why Unhurried Stays Heal Burnout",
    date: "June 2026",
    category: "Philosophy",
    readTime: "4 min read",
    excerpt:
      "In a world filled with notifications and urban hum, true luxury is the quiet whisper of palms in the breeze and waking to indigenous coastal birdsong.",
    image: "/assets/hero/hero-gardens.jpg",
  },
  {
    slug: "morning-shitladevi-temple",
    title: "Sacred Mornings at Shitladevi Temple: A Heritage Walk",
    date: "May 2026",
    category: "Exploration",
    readTime: "3 min read",
    excerpt:
      "Located just across from our resort entrance, this ancient temple is steeped in coastal folklore. The gentle sound of morning temple bells begins the day in serene contemplation.",
    image: "/assets/gallery/shitladevi_-Dj3KqYeD.jpg",
  },
];

const CATEGORIES = ["All Stories", "Philosophy", "Exploration", "Culinary", "Travel Guides"] as const;

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Stories");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const filteredPosts =
    selectedCategory === "All Stories"
      ? POSTS
      : POSTS.filter((p) => p.category === selectedCategory);

  const featuredPost = POSTS.find((p) => p.featured) || POSTS[0];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
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
              09 · The Beyond Sands Journal
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl text-deep-navy font-normal tracking-wide max-w-4xl leading-[1.08]">
            Notes on coastal calm, twilight rituals & simple wonders.
          </h1>
          <p className="font-sans text-base sm:text-lg text-charcoal/80 font-light mt-6 max-w-2xl leading-relaxed">
            Reflections from our verandahs, regional lore from Palghar, and quiet field guides to the rhythm of the Arabian Sea.
          </p>
        </div>

        {/* 21st.dev Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-12 hairline-b border-charcoal/15 pb-6">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full font-sans text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-deep-navy text-warm-ivory shadow-xs font-semibold"
                    : "bg-white/70 text-charcoal/70 border border-charcoal/15 hover:border-champagne-gold/60 hover:text-deep-navy"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Featured Hero Article (when "All Stories" or "Philosophy" selected) */}
        {selectedCategory === "All Stories" && (
          <div className="mb-16 bg-white/80 rounded-[3px] border border-charcoal/15 overflow-hidden shadow-sm group">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              <div className="lg:col-span-7 relative min-h-[320px] sm:min-h-[440px] overflow-hidden bg-charcoal/10">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover object-center luxury-grade transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-deep-navy/90 text-warm-ivory text-[10px] font-mono uppercase tracking-widest rounded-full">
                    Featured Editorial
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between font-sans">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-xs text-charcoal/50 font-mono">
                    <span>{featuredPost.date}</span>
                    <span>•</span>
                    <span className="text-champagne-gold uppercase font-semibold">{featuredPost.category}</span>
                    <span>•</span>
                    <span>{featuredPost.readTime}</span>
                  </div>

                  <h2 className="font-display text-2xl sm:text-4xl text-deep-navy font-normal leading-snug group-hover:text-champagne-gold transition-colors">
                    {featuredPost.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-charcoal/75 font-light leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="pt-8">
                  <a
                    href="https://wa.me/919923895055?text=Hello%20Beyond%20Sands%2C%20I%20read%20your%20story%20on%20Coastal%20Calm%20at%20the%20Blue%20Hour%20and%20would%20love%20to%20visit."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-champagne-gold font-semibold group-hover:translate-x-1 transition-transform"
                  >
                    <span>Read Full Reflection & Concierge Notes</span>
                    <ArrowRightIcon size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Articles Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredPosts.map((post, idx) => (
            <article
              key={idx}
              className="group bg-white/70 hover:bg-white border border-charcoal/15 hover:border-champagne-gold/60 rounded-[3px] overflow-hidden shadow-sm transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-charcoal/5">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center luxury-grade transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 bg-deep-navy/85 backdrop-blur-xs text-warm-ivory text-[10px] font-sans uppercase tracking-widest rounded-[2px]">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="px-2 py-0.5 bg-black/60 text-warm-ivory text-[10px] font-mono rounded-[2px]">
                      {post.readTime}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3 font-sans">
                  <span className="text-[10px] text-charcoal/50 uppercase tracking-wider font-mono">
                    {post.date}
                  </span>
                  <h2 className="font-display text-xl text-deep-navy group-hover:text-champagne-gold transition-colors font-normal leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-xs text-charcoal/75 font-light leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 font-sans text-xs text-champagne-gold font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>Read Story</span>
                <span>→</span>
              </div>
            </article>
          ))}
        </div>

        {/* Coastal Dispatches Subscription / Concierge Callout */}
        <div className="bg-deep-navy text-warm-ivory p-8 sm:p-12 rounded-[3px] border border-champagne-gold/30 shadow-md relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-champagne-gold/10 blur-3xl pointer-events-none" />

          <div className="max-w-2xl space-y-4">
            <span className="font-sans text-[11px] uppercase tracking-widest text-champagne-gold font-semibold block">
              Coastal Dispatches
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-warm-ivory font-normal">
              Receive seasonal reflections & private offer invitations.
            </h2>
            <p className="font-sans text-xs sm:text-sm text-warm-ivory/80 font-light leading-relaxed">
              We send occasional letters on quiet beach weekends, seasonal Konkani delicacies, and early availability for festival buyouts. No spam, ever.
            </p>

            {subscribed ? (
              <div className="p-4 bg-champagne-gold/20 border border-champagne-gold/40 rounded-[2px] text-warm-ivory text-xs font-sans">
                ✦ Thank you! You are now subscribed to our Coastal Dispatches.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 pt-2 font-sans text-xs">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="bg-white/10 border border-white/20 rounded-[2px] px-4 py-3 text-warm-ivory placeholder-warm-ivory/50 focus:border-champagne-gold focus:outline-none flex-1"
                />
                <button
                  type="submit"
                  className="bg-champagne-gold hover:bg-champagne-gold/90 text-navy-blue font-semibold uppercase tracking-widest px-6 py-3 rounded-[2px] transition-colors cursor-pointer shrink-0"
                >
                  Join Dispatches
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
