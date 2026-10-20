import { Hero } from "@/components/hero/Hero";
import { IntroTrustSection } from "@/components/home/IntroTrustSection";
import { HeroTideTransition } from "@/components/hero/HeroTideTransition";
import { KineticMarquee } from "@/components/ui/KineticMarquee";
import { Reveal } from "@/components/ui/Reveal";
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
      <HeroTideTransition
        hero={<Hero />}
        intro={<IntroTrustSection />}
      />
      <KineticMarquee />
      <RoomsRail />
      <Reveal>
        <Location />
      </Reveal>
      <Reveal>
        <EventsSection />
      </Reveal>
      <Reveal>
        <ReelsCarousel />
      </Reveal>
      <Food />
      <Reveal>
        <Gallery />
      </Reveal>
      <Reveal>
        <PropertyFaqSection />
      </Reveal>
      <Reveal>
        <GoogleReviews />
      </Reveal>
      <Footer />
    </>
  );
}
