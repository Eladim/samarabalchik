import { HeroCarousel } from "@/components/hero-carousel";
import { HomeContent } from "@/components/home-content";

export const metadata = {
  title: "Samara | Hotel in Balchik",
  description:
    "Welcome to Samara - Your accommodation in Balchik, the Pearl of the Northern Black Sea. Double rooms, studios, apartments, restaurant, pool & relax center.",
};

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
