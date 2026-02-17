import Image from "next/image";

import { RelaxContent } from "@/components/relax-content";

export const metadata = {
  title: "Relax Center | Samara Complex",
  description:
    "Discover our Relax Center - sauna, steam bath, jacuzzi, and a wide variety of massages and therapies at Samara Complex in Balchik.",
};

export default function RelaxPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[250px] w-full overflow-hidden">
        <Image
          src="/images/hero/3.jpg"
          alt="Samara Complex - Relax Center"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-samara-navy/30" />
      </section>

      <RelaxContent />
    </>
  );
}
