import { Hero } from "@/components/hero/Hero";
import { RoomsRail } from "@/components/rooms/RoomsRail";
import { CloudDivider } from "@/components/location/CloudDivider";
import { Location } from "@/components/location/Location";
import { Food } from "@/components/dining/Food";
import { Gallery } from "@/components/gallery/Gallery";
import { Footer } from "@/components/footer/Footer";

export default function HomePage() {
  return (
    <>
      {/* 8.2 Hero Video Section */}
      <Hero />

      {/* 8.3 Rooms & Suites (Pinned Horizontal Scroll Rail) */}
      <RoomsRail />

      {/* 8.4 Multi-Layer Parallax Cloud Divider */}
      <CloudDivider />

      {/* 8.5 Location Bento Grid (Drone opposite Shitla Mata Temple + Map) */}
      <Location />

      {/* 8.6 Food / Dining (Diagonal Staggered Culinary Showcase) */}
      <Food />

      {/* 8.8 Resort Gallery & Lightbox */}
      <Gallery />

      {/* 8.9 Monumental Editorial Footer */}
      <Footer />
    </>
  );
}
