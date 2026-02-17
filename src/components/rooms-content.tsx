"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";

const roomConfig = [
  {
    id: "double",
    image: "/images/rooms/Double/1.jpg",
    titleKey: "double" as const,
    welcomeKey: "doubleWelcome" as const,
    featuresKey: "doubleFeatures" as const,
  },
  {
    id: "studio",
    image: "/images/rooms/Studio/1.jpg",
    titleKey: "studio" as const,
    welcomeKey: "studioWelcome" as const,
    featuresKey: "studioFeatures" as const,
  },
  {
    id: "apartment-1",
    image: "/images/rooms/Apartment 1 Bedroom/1.jpg",
    titleKey: "apartment1" as const,
    welcomeKey: "apartment1Welcome" as const,
    featuresKey: "apartment1Features" as const,
  },
  {
    id: "apartment-2",
    image: "/images/rooms/Apartment 2 Bedroom/1.jpg",
    titleKey: "apartment2" as const,
    welcomeKey: "apartment2Welcome" as const,
    featuresKey: "apartment2Features" as const,
  },
] as const;

export function RoomsContent() {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="mb-12 text-center text-3xl font-bold text-gray-900 lg:text-4xl">
          {t.rooms.title}
        </h1>

        {roomConfig.map((room, index) => (
          <div
            key={room.id}
            id={room.id}
            className="mb-24 scroll-mt-24 last:mb-0"
          >
            <div
              className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div
                className={
                  index % 2 === 1 ? "lg:order-2" : "lg:order-1"
                }
              >
                <div className="room-image-frame relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={room.image}
                    alt={t.rooms[room.titleKey]}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div
                className={
                  index % 2 === 1 ? "lg:order-1" : "lg:order-2"
                }
              >
                <h2 className="mb-4 text-2xl font-bold text-gray-900 lg:text-3xl">
                  {t.rooms[room.titleKey]}
                </h2>
                <p className="mb-4 text-gray-600">
                  {t.rooms[room.welcomeKey]}
                </p>
                <p className="mb-6 whitespace-pre-line text-sm leading-relaxed text-gray-600">
                  {t.rooms[room.featuresKey]}
                </p>
                <Button
                  asChild
                  className="bg-samara-orange text-white hover:bg-samara-orange/90"
                >
                  <Link
                    href={`/rooms/${room.id}`}
                    className="inline-flex items-center gap-2"
                  >
                    {t.rooms.readMore}
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
