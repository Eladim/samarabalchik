import Image from "next/image";

import { RoomsContent } from "@/components/rooms-content";

export const metadata = {
  title: "Rooms | Samara Balchik",
  description:
    "Choose your stay at Samara - double rooms, studios, one and two-bedroom apartments in Balchik. Sea view, pool, WiFi, and full amenities.",
};

export default function RoomsPage() {
  return (
    <>
      {/* Hero image - pool */}
      <section className="relative h-[40vh] min-h-[250px] w-full overflow-hidden">
        <Image
          src="/images/hero/2.jpg"
          alt="Samara pool area"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-samara-navy/30" />
      </section>

      <RoomsContent />
    </>
  );
}
