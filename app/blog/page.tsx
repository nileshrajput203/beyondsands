import type { Metadata } from "next";
import { BlogHubClient } from "@/components/blog/BlogHubClient";
import { Footer } from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Kelwa Beach Travel Journal & Blog | Beyond Sands Pure Veg Resort",
  description:
    "Expert travel guides, 100% Pure Veg & Jain dining tips, one-day picnic package itineraries, and Shitladevi temple darshan schedules for Kelwa Beach & Palghar (Pin: 401401).",
  keywords: [
    "Kelwa beach blog",
    "pure veg resort kelwa beach",
    "jain resort kelwa",
    "one day picnic kelwa beach",
    "shitladevi temple kelwa timings",
    "best resort in palghar for family",
    "mumbai to kelwa beach itinerary",
    "kelve beach resorts",
    "kelwa beach packages",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Kelwa Beach Travel Journal & Blog | Beyond Sands Pure Veg Resort",
    description:
      "Insider guides for weekend trips to Kelwa Beach: pure veg dining, one-day picnic packages, sea fort walks & Shri Shitladevi Temple darshan.",
    url: "https://www.beyondsands.in/blog",
    siteName: "Beyond Sands Pure Veg Resort",
    type: "website",
    images: [
      {
        url: "https://www.beyondsands.in/assets/dining/lunch.png",
        width: 1200,
        height: 630,
        alt: "Beyond Sands Pure Veg & Jain Resort Kelwa Beach",
      },
    ],
  },
};

export default function BlogPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Beyond Sands Kelwa Beach Travel Journal",
    "description":
      "High-intent travel guides, pure veg culinary dispatches, and weekend trip itineraries for Kelwa Beach and Palghar.",
    "url": "https://www.beyondsands.in/blog",
    "publisher": {
      "@type": "LodgingBusiness",
      "name": "Beyond Sands Pure Veg Resort",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Opposite Shitladevi Temple, Kelwa Beach Road",
        "addressLocality": "Kelwa, Palghar",
        "addressRegion": "Maharashtra",
        "postalCode": "401401",
        "addressCountry": "IN"
      },
      "telephone": "+919923895055"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogHubClient />
      <Footer />
    </>
  );
}
