import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScroll";
import { SkySystem } from "@/components/sky/SkySystem";
import { Header } from "@/components/header/Header";
import { WhatsAppFab } from "@/components/hero/WhatsAppFab";
import { Preloader } from "@/components/preloader/Preloader";
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";
import { LuxuryCursor } from "@/components/ui/LuxuryCursor";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Beyond Sands - Coastal calm at the blue hour",
  description:
    "Wake to palms, wind, and the sea's quiet hush. Premium coastal resort with private verandahs and curated local experiences.",
  authors: [{ name: "Beyond Sands Resort" }],
  metadataBase: new URL("https://www.beyondsands.in"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/assets/brand/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Beyond Sands - Coastal calm at the blue hour",
    description:
      "Wake to palms, wind, and the sea's quiet hush. Premium coastal resort with private verandahs and curated local experiences.",
    url: "https://www.beyondsands.in",
    siteName: "Beyond Sands Resort",
    images: [
      {
        url: "/assets/hero/hero-canopy-poster.jpg",
        width: 1600,
        height: 1200,
        alt: "Beyond Sands Resort Canopy Overview",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beyond Sands - Coastal calm at the blue hour",
    description:
      "Wake to palms, wind, and the sea's quiet hush. Premium coastal resort with private verandahs and curated local experiences.",
    images: ["/assets/hero/hero-canopy-poster.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Resort",
  "name": "Beyond Sands Resort",
  "image": [
    "https://www.beyondsands.in/assets/hero/hero-canopy-poster.jpg",
    "https://www.beyondsands.in/assets/rooms/garden-view-main.jpg",
    "https://www.beyondsands.in/assets/location/location-drone-shitlamata.jpg"
  ],
  "description": "Wake to palms, wind, and the sea's quiet hush. Premium coastal resort with private verandahs and curated local experiences.",
  "telephone": "+91-99238-95055",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Opposite Shitladevi temple Kelve Road",
    "addressLocality": "Kelva, Palghar",
    "postalCode": "401404",
    "addressRegion": "Maharashtra",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 19.612193,
    "longitude": 72.729605
  },
  "url": "https://www.beyondsands.in",
  "priceRange": "₹4,500 - ₹7,000",
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
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased relative min-h-screen text-charcoal bg-transparent selection:bg-champagne-gold selection:text-deep-navy">
        <SmoothScrollProvider>
          {/* Awwwards Subtle Top Scroll Progress Line */}
          <ScrollProgressBar />

          {/* Luxury Custom Trailing Cursor */}
          <LuxuryCursor />

          {/* Global Scroll-Linked Sky Background */}
          <SkySystem />

          {/* Interactive Ocean Wave Preloader */}
          <Preloader />

          {/* Transparent Adaptive Header */}
          <Header />

          {/* Main Website Flow */}
          <main role="main" className="relative z-10 w-full overflow-hidden">
            {children}
          </main>

          {/* Floating WhatsApp Concierge */}
          <WhatsAppFab />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
