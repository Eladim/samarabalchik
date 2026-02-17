import { HeroCarousel } from "@/components/hero-carousel";
import { HomeContent } from "@/components/home-content";

export default function Home() {
  return (
    <>
      {/* Hero section - full viewport with swipe */}
      <HeroCarousel />

      {/* Welcome section */}
      <section className="bg-white py-16">
        <HomeContent />
      </section>
    </>
  );
}
