"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const heroImages = [
  { src: "/images/hero/1.jpg", alt: "Samara - Hotel exterior and pool" },
  { src: "/images/hero/2.jpg", alt: "Samara - Pool area" },
  { src: "/images/hero/3.jpg", alt: "Samara - Resort view" },
];

export function HeroCarousel() {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());

    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section className="relative h-[100vh] w-full overflow-hidden">
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
          align: "start",
          duration: 25,
          containScroll: "trimSnaps",
        }}
        className="h-full w-full"
      >
        <CarouselContent className="ml-0 h-full">
          {heroImages.map((img, index) => (
            <CarouselItem key={img.src} className="ml-0 basis-full pl-0">
              <div className="relative h-[100vh] w-full">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  priority
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-samara-navy/20" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation arrows */}
        <Button
          variant="outline"
          size="icon"
          onClick={() => api?.scrollPrev()}
          className="absolute left-4 top-1/2 z-10 size-12 -translate-y-1/2 rounded-full border-white/50 bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 hover:text-white"
          aria-label="Previous photo"
        >
          <ChevronLeft className="size-6" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => api?.scrollNext()}
          className="absolute right-4 top-1/2 z-10 size-12 -translate-y-1/2 rounded-full border-white/50 bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 hover:text-white"
          aria-label="Next photo"
        >
          <ChevronRight className="size-6" />
        </Button>

        {/* Dots indicator */}
        <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`size-2.5 rounded-full transition-all ${
                index === current
                  ? "bg-samara-orange w-6"
                  : "bg-white/60 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
}
