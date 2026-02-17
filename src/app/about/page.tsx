import Image from "next/image";

import { AboutContent } from "@/components/about-content";

export const metadata = {
  title: "About Us | Samara Complex",
  description:
    "Discover Complex Samara in Balchik - rooms, restaurant, pool, and amenities. Year-round accommodation near the Botanical Garden and Palace.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero - compact like rooms page */}
      <section className="relative h-[40vh] min-h-[250px] w-full overflow-hidden">
        <Image
          src="/images/hero/2.jpg"
          alt="Samara Complex - About us"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-samara-navy/30" />
      </section>

      <AboutContent />
    </>
  );
}
