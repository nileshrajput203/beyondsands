import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScroll";
import { SkySystem } from "@/components/sky/SkySystem";
import { Header } from "@/components/header/Header";
import { WhatsAppFab } from "@/components/hero/WhatsAppFab";
import { InstagramFab } from "@/components/hero/InstagramFab";
import { BackToTop } from "@/components/ui/BackToTop";
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Beyond Sands Resort | Best Pure Veg & Jain Resort in Kelwa Beach, Palghar",
  description:
    "Looking for the best 100% Pure Veg & Jain resort in Palghar or Kelva Beach? Beyond Sands Pure Veg Resort is located opposite Shitladevi Temple, 2 mins from Kelva Beach (Pin: 401401). Enjoy our 40ft swimming pool, rain dance, family AC rooms & one-day picnic packages.",
  authors: [{ name: "Beyond Sands Pure Veg Resort" }],
  metadataBase: new URL("https://www.beyondsands.in"),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "best resort in palghar",
    "kelve resort",
    "kelva beach resort",
    "kelwa resort",
    "Beyond Sands Resort",
    "Beyond Sands Pure Veg Resort",
    "pure veg resort palghar",
    "pure veg resort kelva beach",
    "kelva beach resort with swimming pool",
    "best resort in kelva",
    "one day picnic resort palghar",
    "resort near shitladevi temple kelva",
    "family resort in palghar near mumbai",
    "jain resort near mumbai",
    "ac dormitory in kelve",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/assets/brand/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Beyond Sands Resort | Best Resort in Palghar & Kelve Beach (Pure Veg)",
    description:
      "Looking for the best resort in Palghar or Kelve Beach? Beyond Sands Pure Veg Resort is 2 mins from Kelva Beach & Shitladevi Temple. Enjoy our 40ft swimming pool, rain dance, AC rooms & one-day picnic packages.",
    url: "https://www.beyondsands.in",
    siteName: "Beyond Sands Pure Veg Resort",
    images: [
      {
        url: "/assets/hero/hero-canopy-poster.jpg",
        width: 1600,
        height: 1200,
        alt: "Beyond Sands Resort Kelva Beach Palghar",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beyond Sands Resort | Best Resort in Palghar & Kelve Beach (Pure Veg)",
    description:
      "Looking for the best resort in Palghar or Kelve Beach? Beyond Sands Pure Veg Resort is 2 mins from Kelva Beach & Shitladevi Temple. Enjoy our 40ft swimming pool, rain dance, AC rooms & one-day picnic packages.",
    images: ["/assets/hero/hero-canopy-poster.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Resort",
  "name": "Beyond Sands Pure Veg Resort",
  "alternateName": ["Beyond Sands Resort", "Beyond Sands Kelva", "Beyond Sands Palghar"],
  "url": "https://www.beyondsands.in/",
  "telephone": "+91-9923895055",
  "priceRange": "₹2200 - ₹5000",
  "servesCuisine": ["Pure Vegetarian", "Jain", "Gujarati", "Maharashtrian"],
  "image": [
    "https://www.beyondsands.in/assets/hero/hero-canopy-poster.jpg",
    "https://www.beyondsands.in/assets/rooms/garden-view-main.jpg",
    "https://www.beyondsands.in/assets/location/location-drone-shitlamata.jpg"
  ],
  "description": "Book direct at Beyond Sands Resort, the top-rated 100% Pure Veg beach resort in Kelva, Palghar. Located opposite Shitladevi Temple (2 mins walk from Kelva Beach) with a 40x25ft swimming pool, rain dance, AC Deluxe rooms & One-Day Picnic packages.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Survey No. 1000, 1709, 1710, Shitladevi Road, Opposite Shitladevi Temple, Near Kelva Beach",
    "addressLocality": "Kelva, Palghar",
    "addressRegion": "MH",
    "postalCode": "401401",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 19.612193,
    "longitude": 72.729605
  },
  "amenityFeature": [
    { "@type": "LocationFeatureSpecification", "name": "Swimming Pool (40ft x 25ft)", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Pure Veg Restaurant", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Rain Dance", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Free WiFi", "value": true }
  ],
  "checkinTime": "12:00:00",
  "checkoutTime": "10:00:00",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "150"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased relative min-h-[100dvh] text-charcoal bg-transparent selection:bg-champagne-gold selection:text-deep-navy">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <SmoothScrollProvider>
          <ScrollProgressBar />
          <SkySystem />
          <Header />
          <main id="main-content" role="main" className="relative z-10 w-full max-w-full overflow-x-clip md:overflow-visible">
            {children}
          </main>
          <div className="noise-overlay" aria-hidden="true" />

          {/* Floating WhatsApp Concierge on Right, Instagram on Left & Back to Top */}
          <InstagramFab />
          <WhatsAppFab />
          <BackToTop />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
