import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS, type BlogPost } from "@/lib/blog-data";
import { Footer } from "@/components/footer/Footer";
import { WhatsAppIcon, PhoneIcon } from "@/components/icons";
import {
  Clock,
  MapPin,
  CheckCircle2,
  Calendar,
  Share2,
  ChevronRight,
  HelpCircle,
  Building2,
  Waves,
  UtensilsCrossed,
  Sparkles,
} from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found · Beyond Sands Resort",
    };
  }

  return {
    title: `${post.metaTitle}`,
    description: post.metaDescription,
    keywords: [
      post.title,
      "Kelwa beach resort",
      "pure veg resort palghar",
      "jain food kelwa",
      ...post.targetLocations.map((loc) => `resort near ${loc}`),
    ],
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://www.beyondsands.in/blog/${post.slug}`,
      siteName: "Beyond Sands Pure Veg Resort",
      type: "article",
      publishedTime: "2026-10-01T00:00:00.000Z",
      authors: [post.author.name],
      images: [
        {
          url: `https://www.beyondsands.in${post.featuredImage}`,
          width: 1200,
          height: 630,
          alt: post.featuredImageAlt,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.metaDescription,
    "image": `https://www.beyondsands.in${post.featuredImage}`,
    "datePublished": "2026-10-01T00:00:00.000Z",
    "dateModified": "2026-10-20T00:00:00.000Z",
    "author": {
      "@type": "Organization",
      "name": post.author.name,
      "url": "https://www.beyondsands.in"
    },
    "publisher": {
      "@type": "LodgingBusiness",
      "name": "Beyond Sands Pure Veg Resort",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.beyondsands.in/assets/brand/beyond-sands-logo-dark.png"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Opposite Shitladevi Temple, Kelwa Beach Road",
        "addressLocality": "Kelwa, Palghar",
        "addressRegion": "Maharashtra",
        "postalCode": "401401",
        "addressCountry": "IN"
      },
      "telephone": "+919923895055"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.beyondsands.in/blog/${post.slug}`
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <div className="min-h-screen bg-[#FDFBF7] text-[#0A1624] selection:bg-[#E4C590] selection:text-[#0A1624]">
        {/* Decorative Top Accent Line */}
        <div className="h-1 bg-gradient-to-r from-[#D4AF37] via-[#C49A65] to-[#B3874B]" />

        {/* Article Container */}
        <div className="pt-28 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          {/* Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-[11px] sm:text-xs text-[#8C7A6B] font-sans mb-6 overflow-x-auto whitespace-nowrap"
          >
            <Link href="/" className="hover:text-[#0A1624] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-[#B88746] shrink-0" />
            <Link href="/blog" className="hover:text-[#0A1624] transition-colors">
              Blog &amp; Guides
            </Link>
            <ChevronRight className="w-3 h-3 text-[#B88746] shrink-0" />
            <span className="text-[#0A1624] font-medium truncate max-w-[200px] sm:max-w-xs">
              {post.categoryLabel}
            </span>
          </nav>

          {/* Header Metadata & Title */}
          <header className="space-y-4 pb-8 border-b border-[#E2D8C7]">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#0A1624] text-[#FAF6F0] font-sans text-[10px] uppercase tracking-widest font-semibold">
                {post.categoryLabel}
              </span>
              {post.badge && (
                <span className="px-2.5 py-0.5 rounded-full bg-[#D6B588] text-[#0A1624] font-sans text-[9px] uppercase tracking-widest font-bold">
                  {post.badge}
                </span>
              )}
              <span className="flex items-center gap-1 font-mono text-[11px] text-[#8C7A6B] ml-auto">
                <Clock className="w-3.5 h-3.5 text-[#B88746]" />
                {post.readTime}
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0A1624] font-normal leading-[1.14] tracking-tight">
              {post.title}
            </h1>

            <p className="font-sans text-base sm:text-lg text-[#5A6878] font-light leading-relaxed">
              {post.subtitle}
            </p>

            {/* Author & Locations Bar */}
            <div className="pt-3 flex flex-wrap items-center justify-between gap-3 text-xs border-t border-[#F0E8DC]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#0A1624] text-[#D6B588] flex items-center justify-center font-serif text-sm font-semibold">
                  BS
                </div>
                <div>
                  <span className="font-semibold text-[#0A1624] block">
                    {post.author.name}
                  </span>
                  <span className="text-[10.5px] text-[#8C7A6B] block">
                    {post.author.role} · {post.publishDate}
                  </span>
                </div>
              </div>

              {/* Target Location Tags */}
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-[10.5px] text-[#8C7A6B] flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#B88746]" />
                  For travelers from:
                </span>
                {post.targetLocations.map((loc) => (
                  <span
                    key={loc}
                    className="px-2 py-0.5 rounded-md bg-[#EFE5D2] text-[#6E5536] text-[10px] font-sans font-medium"
                  >
                    {loc}
                  </span>
                ))}
              </div>
            </div>
          </header>

          {/* Featured Hero Real Image */}
          <div className="my-8 relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden border border-[#E2D8C7] shadow-lg">
            <Image
              src={post.featuredImage}
              alt={post.featuredImageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 896px, 100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 text-xs font-sans text-white/95 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
              📷 {post.featuredImageAlt}
            </div>
          </div>

          {/* Intro Paragraphs */}
          <div className="space-y-4 text-base sm:text-[17px] text-[#2C3848] font-light leading-relaxed">
            {post.introParagraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* The High-Converting 30% Scroll CTA Box */}
          <div className="my-10 p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#0A1624] to-[#14263A] text-white border border-[#D4AF37]/30 shadow-xl space-y-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#E4C590]" />
              <span className="font-sans text-[10.5px] uppercase tracking-widest font-bold text-[#E4C590]">
                Planning Your Trip to Kelwa?
              </span>
            </div>

            <h3 className="font-serif text-xl sm:text-2xl text-white font-normal leading-snug">
              {post.ctaBox.headline}
            </h3>

            <p className="font-sans text-xs sm:text-sm text-white/80 font-light leading-relaxed">
              {post.ctaBox.text}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={post.ctaBox.buttonHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#D6B588] hover:bg-[#E2C399] text-[#061423] font-sans text-xs uppercase tracking-wider font-bold transition-all shadow-md hover:scale-[1.02]"
              >
                <WhatsAppIcon size={15} />
                <span>{post.ctaBox.buttonText}</span>
              </a>

              <a
                href="tel:+919923895055"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-white/25 hover:border-white/50 bg-white/5 hover:bg-white/10 text-white font-sans text-xs uppercase tracking-wider font-semibold transition-all"
              >
                <PhoneIcon size={13} />
                <span>Call +91 99238 95055</span>
              </a>
            </div>
          </div>

          {/* Main Article Sections */}
          <div className="space-y-10 my-8">
            {post.sections.map((section, idx) => (
              <section key={idx} className="space-y-4">
                <div className="space-y-1">
                  <h2 className="font-serif text-2xl sm:text-3xl text-[#0A1624] font-medium leading-tight">
                    {section.heading}
                  </h2>
                  {section.subheading && (
                    <p className="font-sans text-xs sm:text-sm uppercase tracking-wider text-[#A67C47] font-semibold">
                      {section.subheading}
                    </p>
                  )}
                </div>

                <div className="space-y-3 text-base sm:text-[16.5px] text-[#2C3848] font-light leading-relaxed">
                  {section.body.map((bPara, bIdx) => (
                    <p key={bIdx}>{bPara}</p>
                  ))}
                </div>

                {section.bulletPoints && section.bulletPoints.length > 0 && (
                  <ul className="space-y-2.5 my-4 bg-white rounded-xl p-5 border border-[#E2D8C7] shadow-xs">
                    {section.bulletPoints.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-[#2C3848] leading-relaxed"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#B88746] shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Show secondary image after 2nd section */}
                {idx === 1 && post.secondaryImage && (
                  <div className="my-8 relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden border border-[#E2D8C7] shadow-md">
                    <Image
                      src={post.secondaryImage}
                      alt={post.secondaryImageAlt}
                      fill
                      sizes="(min-width: 1024px) 896px, 100vw"
                      className="object-cover object-center"
                    />
                    <div className="absolute bottom-3 left-3 right-3 text-xs font-sans text-white/95 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                      📷 {post.secondaryImageAlt}
                    </div>
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Verdict Box */}
          <div className="my-10 p-6 sm:p-8 rounded-2xl bg-white border-2 border-[#D4AF37]/40 shadow-sm space-y-4">
            <h3 className="font-serif text-xl sm:text-2xl text-[#0A1624] font-medium">
              {post.verdict.heading}
            </h3>

            <p className="font-sans text-sm text-[#4A5568] leading-relaxed">
              {post.verdict.body}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {post.verdict.bulletSummary.map((summaryItem, sIdx) => (
                <div
                  key={sIdx}
                  className="flex items-center gap-2 text-xs font-sans text-[#0A1624] font-medium bg-[#FAF6F0] px-3 py-2 rounded-lg border border-[#E8DEC9]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#B88746] shrink-0" />
                  <span>{summaryItem}</span>
                </div>
              ))}
            </div>

            {/* Direct Booking Actions */}
            <div className="pt-4 border-t border-[#F0E8DC] flex flex-wrap items-center gap-3">
              <a
                href={post.ctaBox.buttonHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#D6B588] hover:bg-[#E2C399] text-[#061423] font-sans text-xs uppercase tracking-wider font-bold transition-all shadow-md hover:scale-[1.02]"
              >
                <WhatsAppIcon size={15} />
                <span>Direct WhatsApp Booking</span>
              </a>

              <Link
                href="/booking"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#0A1624] hover:bg-[#14263A] text-white font-sans text-xs uppercase tracking-wider font-semibold transition-all hover:scale-[1.02]"
              >
                <span>Check Availability Online</span>
              </Link>
            </div>
          </div>

          {/* FAQs Section */}
          {post.faqs && post.faqs.length > 0 && (
            <div className="my-12 space-y-4">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#B88746]" />
                <h3 className="font-serif text-xl sm:text-2xl text-[#0A1624] font-medium">
                  Frequently Asked Questions
                </h3>
              </div>

              <div className="space-y-3">
                {post.faqs.map((faq, fIdx) => (
                  <div
                    key={fIdx}
                    className="p-5 rounded-xl bg-white border border-[#E2D8C7] space-y-1.5 shadow-2xs"
                  >
                    <h4 className="font-serif text-base text-[#0A1624] font-semibold">
                      {faq.question}
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-[#5A6878] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related Articles */}
          <div className="mt-16 pt-10 border-t border-[#E2D8C7] space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-2xl text-[#0A1624] font-medium">
                More Guides for Kelwa Beach
              </h3>
              <Link
                href="/blog"
                className="font-sans text-xs uppercase tracking-wider font-semibold text-[#A67C47] hover:underline"
              >
                View All Guides →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {relatedPosts.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/blog/${rel.slug}`}
                  className="group flex flex-col bg-white rounded-xl overflow-hidden border border-[#E2D8C7] hover:shadow-lg transition-all"
                >
                  <div className="relative w-full h-36 bg-black/10 overflow-hidden">
                    <Image
                      src={rel.featuredImage}
                      alt={rel.featuredImageAlt}
                      fill
                      sizes="(min-width: 640px) 33vw, 100vw"
                      className="object-cover object-center group-hover:scale-106 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-3.5 flex-1 flex flex-col justify-between space-y-2">
                    <span className="font-sans text-[9px] uppercase tracking-wider font-semibold text-[#8C7A6B]">
                      {rel.categoryLabel}
                    </span>
                    <h4 className="font-serif text-sm font-semibold text-[#0A1624] group-hover:text-[#A67C47] line-clamp-2 leading-snug">
                      {rel.title}
                    </h4>
                    <span className="text-[11px] font-sans text-[#A67C47] font-medium pt-1">
                      Read Guide →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Quick WhatsApp Booking Button for Blog Readers */}
        <div className="fixed bottom-6 right-6 z-40">
          <a
            href={`https://wa.me/919923895055?text=${encodeURIComponent(
              post.ctaBox.whatsappMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ask questions on WhatsApp"
            className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-2xl hover:scale-105 transition-all duration-300 font-sans text-xs uppercase tracking-wider font-bold"
          >
            <WhatsAppIcon size={18} />
            <span className="hidden sm:inline">WhatsApp Concierge</span>
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
}
