import { Hero } from "@/components/hero/Hero";
import { RoomsRail } from "@/components/rooms/RoomsRail";
import { Location } from "@/components/location/Location";
import { EventsSection } from "@/components/events/EventsSection";
import { ReelsCarousel } from "@/components/reels/ReelsCarousel";
import { Food } from "@/components/dining/Food";
import { Gallery } from "@/components/gallery/Gallery";
import { PropertyFaqSection } from "@/components/faq/PropertyFaqSection";
import { GoogleReviews } from "@/components/reviews/GoogleReviews";
import { Footer } from "@/components/footer/Footer";

export default function HomePage() {
  return (
    <>
      {/* 8.2 Hero Video Section */}
      <Hero />

      {/* 8.3 Rooms & Suites (Pinned Horizontal Scroll Rail) */}
      <RoomsRail />

      {/* 8.5 Location Bento Grid (Drone opposite Shitla Mata Temple + Map) */}
      <Location />

      {/* Events & Wedding Organisation Section */}
      <EventsSection />

      {/* Reel Format Carousel Travelling Right-to-Left */}
      <ReelsCarousel />

      {/* 8.6 Food / Dining (Diagonal Staggered Culinary Showcase) */}
      <Food />

      {/* 8.8 Resort Gallery & Lightbox */}
      <Gallery />

      {/* Property Details & FAQ Section */}
      <PropertyFaqSection />

      {/* Verified Google Reviews & Rating */}
      <GoogleReviews />

      {/* 8.9 Monumental Editorial Footer */}
      <Footer />
    </>
  );
}
