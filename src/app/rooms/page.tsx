import Image from "next/image";

import { RoomsContent } from "@/components/rooms-content";

export default function RoomsPage() {
  return (
    <>
      {/* Hero image - pool */}
      <section className="relative h-[40vh] min-h-[250px] w-full overflow-hidden">
        <Image
          src="/images/hero/2.jpg"
          alt="Samara Complex pool area"
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
