"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS, type BlogPost } from "@/lib/blog-data";
import { WhatsAppIcon, PhoneIcon } from "@/components/icons";
import { ArrowRight, Search, Clock, MapPin, Sparkles, CheckCircle2 } from "lucide-react";

export function BlogHubClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    { id: "all", label: "All Guides & Articles" },
    { id: "pure-veg", label: "Pure Veg & Jain Stay" },
    { id: "day-picnic", label: "Day Picnic Packages" },
    { id: "sightseeing", label: "Shitladevi Temple & Beach" },
    { id: "itinerary", label: "Weekend Itineraries" },
    { id: "groups", label: "Group & Society Picnics" },
    { id: "travel-guide", label: "How to Reach (Road & Train)" },
  ];

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory =
        selectedCategory === "all" || post.category === selectedCategory;
      const matchesQuery =
        searchQuery.trim() === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.snippet.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.targetLocations.some((loc) =>
          loc.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  const featuredPost = BLOG_POSTS[0];

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#0A1624] selection:bg-[#E4C590] selection:text-[#0A1624]">
      {/* Decorative Top Accent Line */}
      <div className="h-1 bg-gradient-to-r from-[#D4AF37] via-[#C49A65] to-[#B3874B]" />

      {/* Hero Section */}
      <section className="relative pt-32 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div
          aria-hidden="true"
          className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#EFE5D2]/60 via-transparent to-transparent pointer-events-none"
        />

        <div className="relative z-10 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EFE5D2] border border-[#DFCBB0] text-[#7A5B32] font-sans text-xs uppercase tracking-widest font-semibold shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B88746]" />
            <span>Kelwa Beach &amp; Palghar Travel Journal</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#0A1624] font-normal leading-[1.12] tracking-tight">
            Insider Guides for Weekend Trips to Kelwa &amp; Palghar
          </h1>

          <p className="font-sans text-sm sm:text-base text-[#4A5568] font-light max-w-2xl mx-auto leading-relaxed">
            Direct booking advice, 100% pure veg &amp; Jain dining dispatches, one-day picnic budgets, temple darshan timings, and scenic itineraries for travelers from Mumbai, Thane, Vasai-Virar, and Gujarat.
          </p>

          {/* Search Box */}
          <div className="pt-2 max-w-lg mx-auto">
            <div className="relative flex items-center">
              <Search className="absolute left-4 w-4 h-4 text-[#8C7A6B]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search topics (e.g., Pure Veg, Day Picnic, Shitladevi Temple, Train)..."
                className="w-full pl-11 pr-4 py-3 rounded-full bg-white border border-[#E2D8C7] text-sm text-[#0A1624] placeholder:text-[#8C7A6B] focus:outline-none focus:ring-2 focus:ring-[#C49A65]/40 shadow-xs transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 text-xs text-[#8C7A6B] hover:text-[#0A1624]"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Category Pills */}
        <div className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full font-sans text-xs uppercase tracking-wider font-semibold transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-[#0A1624] text-[#FAF6F0] shadow-md scale-102"
                  : "bg-white hover:bg-[#EFE5D2] text-[#4A5568] hover:text-[#0A1624] border border-[#E2D8C7]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Editor's Pick (Shown when no search filter is active) */}
      {!searchQuery && selectedCategory === "all" && (
        <section className="px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto pb-12 sm:pb-16">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0A1624] to-[#122234] text-[#FAF6F0] border border-black/10 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center p-6 sm:p-10 lg:p-12">
              <div className="lg:col-span-6 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#E4C590] text-[#0A1624] font-sans text-[10px] uppercase tracking-widest font-bold">
                    Featured Guide · #1 Money Saver
                  </span>
                  <span className="flex items-center gap-1 font-mono text-[11px] text-white/70">
                    <Clock className="w-3.5 h-3.5 text-[#E4C590]" />
                    {featuredPost.readTime}
                  </span>
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-normal leading-tight">
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="hover:text-[#E4C590] transition-colors"
                  >
                    {featuredPost.title}
                  </Link>
                </h2>

                <p className="font-sans text-xs sm:text-sm text-white/75 font-light leading-relaxed">
                  {featuredPost.snippet}
                </p>

                {/* Target Audience Badges */}
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  <span className="text-[11px] text-white/50 font-sans flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#E4C590]" />
                    Popular with:
                  </span>
                  {featuredPost.targetLocations.map((loc) => (
                    <span
                      key={loc}
                      className="px-2 py-0.5 rounded-md bg-white/10 text-white/85 text-[10px] font-sans"
                    >
                      {loc}
                    </span>
                  ))}
                </div>

                <div className="pt-3 flex flex-wrap items-center gap-3">
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#D6B588] hover:bg-[#E2C399] text-[#061423] font-sans text-xs uppercase tracking-wider font-bold transition-all shadow-md hover:scale-[1.02]"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={featuredPost.ctaBox.buttonHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/25 hover:border-white/50 bg-white/5 hover:bg-white/10 text-white font-sans text-xs uppercase tracking-wider font-semibold transition-all"
                  >
                    <WhatsAppIcon size={14} />
                    <span>Inquire Room Availability</span>
                  </a>
                </div>
              </div>

              {/* Photo Showcase */}
              <div className="lg:col-span-6 relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden border border-white/15 shadow-lg group">
                <Image
                  src={featuredPost.featuredImage}
                  alt={featuredPost.featuredImageAlt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-xs font-sans text-white/90 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                  📷 100% Pure Veg Jain Thali served fresh daily at Beyond Sands
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Articles Grid */}
      <section className="px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto pb-16 sm:pb-20">
        <div className="flex items-center justify-between pb-6 border-b border-[#E2D8C7] mb-8">
          <div>
            <h3 className="font-serif text-xl sm:text-2xl text-[#0A1624] font-medium">
              {selectedCategory === "all" ? "All Travel Guides & Itineraries" : "Curated Guides"}
            </h3>
            <p className="font-sans text-xs text-[#8C7A6B] mt-0.5">
              Showing {filteredPosts.length} article{filteredPosts.length === 1 ? "" : "s"}
            </p>
          </div>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="py-16 text-center space-y-3 bg-white rounded-2xl border border-[#E2D8C7] p-8">
            <p className="font-serif text-lg text-[#0A1624]">
              No articles found matching &ldquo;{searchQuery}&rdquo;
            </p>
            <p className="font-sans text-xs text-[#8C7A6B]">
              Try searching for &quot;Pure Veg&quot;, &quot;Day Picnic&quot;, &quot;Temple&quot;, or &quot;Itinerary&quot;.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="mt-2 px-4 py-2 rounded-full bg-[#0A1624] text-white font-sans text-xs uppercase tracking-wider font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-[#E2D8C7] shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Thumbnail Image */}
                <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-black/10">
                  <Image
                    src={post.featuredImage}
                    alt={post.featuredImageAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="px-2.5 py-1 rounded-full bg-[#0A1624]/90 backdrop-blur-md text-[#FAF6F0] font-sans text-[9px] uppercase tracking-wider font-semibold border border-white/10">
                      {post.categoryLabel}
                    </span>
                    {post.badge && (
                      <span className="px-2 py-0.5 rounded-full bg-[#D6B588] text-[#0A1624] font-sans text-[8.5px] uppercase tracking-wider font-bold shadow-xs">
                        {post.badge}
                      </span>
                    )}
                  </div>
                  <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-white/90 text-[10px] font-mono flex items-center gap-1">
                    <Clock className="w-2.5 h-2.5" />
                    {post.readTime}
                  </div>
                </div>

                {/* Content Box */}
                <div className="flex-1 p-5 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-serif text-lg sm:text-[19px] text-[#0A1624] font-semibold group-hover:text-[#A67C47] transition-colors leading-snug">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h4>

                    <p className="font-sans text-xs text-[#5A6878] font-light leading-relaxed line-clamp-3">
                      {post.snippet}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#F0E8DC] flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1 text-[11px] text-[#8C7A6B] font-sans">
                      <MapPin className="w-3 h-3 text-[#B88746]" />
                      <span className="truncate max-w-[150px]">
                        {post.targetLocations.slice(0, 3).join(", ")}
                      </span>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-sans uppercase tracking-wider font-semibold text-[#0A1624] group-hover:text-[#A67C47] group-hover:translate-x-1 transition-all"
                    >
                      <span>Read</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* High-Intent Conversion Banner */}
      <section className="px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto pb-16 sm:pb-20">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#071320] via-[#09182A] to-[#040C16] text-[#FAF6F0] p-6 sm:p-10 lg:p-12 border border-white/10 shadow-2xl">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="px-3 py-1 rounded-full bg-[#E4C590] text-[#0A1624] font-sans text-[10px] uppercase tracking-widest font-bold">
              Direct Booking Guarantee
            </span>

            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-normal leading-tight">
              Planning a Weekend Escape or Day Picnic to Kelwa Beach?
            </h3>

            <p className="font-sans text-xs sm:text-sm text-white/75 font-light leading-relaxed">
              Connect directly with our on-site resort concierge. Get instant room availability, customized pure veg &amp; Jain food menus, and direct package pricing with zero portal commissions.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="https://wa.me/919923895055?text=Hi!%20I'm%20planning%20a%20trip%20to%20Kelwa%20Beach%20and%20would%20like%20to%20know%20package%20details."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#D6B588] hover:bg-[#E2C399] text-[#061423] font-sans text-xs uppercase tracking-wider font-bold transition-all shadow-md hover:scale-[1.02]"
              >
                <WhatsAppIcon size={16} />
                <span>WhatsApp Concierge</span>
              </a>

              <a
                href="tel:+919923895055"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/25 hover:border-white/50 bg-white/5 hover:bg-white/10 text-white font-sans text-xs uppercase tracking-wider font-semibold transition-all hover:scale-[1.02]"
              >
                <PhoneIcon size={14} />
                <span>Call +91 99238 95055</span>
              </a>

              <Link
                href="/booking"
                className="inline-flex items-center gap-1.5 px-4 py-3 text-white/80 hover:text-white font-sans text-xs uppercase tracking-wider underline underline-offset-4 transition-colors"
              >
                <span>View Tariff &amp; Rooms</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="pt-4 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-white/70">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E4C590]" />
                <span>100% Pure Veg &amp; Jain</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E4C590]" />
                <span>2 Mins to Beach</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E4C590]" />
                <span>40ft Clean Pool</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E4C590]" />
                <span>Opposite Temple</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
