import Image from "next/image";

import { GalleryContent } from "@/components/gallery-content";

export const metadata = {
  title: "Gallery | Samara",
  description:
    "Browse our gallery - hotel views, relax center, and room photos at Samara in Balchik.",
};

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[250px] w-full overflow-hidden">
        <Image
          src="/images/hero/1.jpg"
          alt="Samara - Gallery"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-samara-navy/30" />
      </section>

      <GalleryContent />
    </>
  );
}
