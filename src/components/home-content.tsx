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

export function HomeContent() {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 lg:order-1">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 lg:text-4xl">
            {t.home.welcomeTitle}
          </h2>
          <p className="mb-8 leading-relaxed text-gray-600">
            {t.home.welcomeText}
          </p>
          <Button
            asChild
            className="bg-samara-orange text-white hover:bg-samara-orange/90"
          >
            <Link href="/rooms" className="inline-flex items-center gap-2">
              {t.home.readMore}
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
        <div className="order-1 lg:order-2">
          <div className="room-image-frame relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/images/marketing-page/1.jpg"
              alt="View of Balchik and the sea"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

      {/* Rooms - bento-style asymmetric grid */}
      <section className="mt-24">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-900 lg:text-3xl">
          {t.rooms.title}
        </h2>
        <p className="mb-12 text-center text-gray-600">
          {t.rooms.subtitle}
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 lg:gap-5">
          {/* Featured: Double room - spans 2 rows */}
          <Link
            href="/rooms/double"
            className="group relative overflow-hidden rounded-2xl lg:col-span-2 lg:row-span-2"
          >
            <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[480px]">
              <Image
                src={roomConfig[0].image}
                alt={t.rooms.double}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-samara-navy/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold lg:text-2xl">{t.rooms.double}</h3>
                <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium opacity-90">
                  {t.rooms.readMore}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>
          {/* Studio - compact card, doesn't stretch in grid */}
          <div className="flex min-h-0 self-start">
            <RoomMarketingCard
              href="/rooms/studio"
              image={roomConfig[1].image}
              title={t.rooms.studio}
              readMoreText={t.rooms.readMore}
            />
          </div>
          {/* Apartment 1 - compact card, doesn't stretch in grid */}
          <div className="flex min-h-0 self-start">
            <RoomMarketingCard
              href="/rooms/apartment-1"
              image={roomConfig[2].image}
              title={t.rooms.apartment1}
              readMoreText={t.rooms.readMore}
            />
          </div>
          {/* Apartment 2 - spans bottom row on desktop */}
          <Link
            href="/rooms/apartment-2"
            className="group relative col-span-1 overflow-hidden rounded-2xl sm:col-span-2 lg:col-span-2 lg:col-start-3"
          >
            <div className="relative aspect-[21/9]">
              <Image
                src={roomConfig[3].image}
                alt={t.rooms.apartment2}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-samara-navy/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-6 text-white">
                <h3 className="text-xl font-bold">{t.rooms.apartment2}</h3>
                <span className="hidden items-center gap-1 text-sm font-medium sm:inline-flex">
                  {t.rooms.readMore}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>
        </div>
        <div className="mt-8 text-center">
          <Button
            asChild
            variant="outline"
            className="border-samara-navy text-samara-navy hover:bg-samara-navy hover:text-white"
          >
            <Link href="/rooms" className="inline-flex items-center gap-2">
              {t.rooms.title}
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

function RoomMarketingCard({
  href,
  title,
  image,
  readMoreText,
}: {
  href: string;
  title: string;
  image: string;
  readMoreText: string;
}) {
  return (
    <Link
      href={href}
      className="group relative block w-full overflow-hidden rounded-2xl"
    >
      <div className="relative w-full overflow-hidden rounded-2xl" style={{ aspectRatio: "4/3" }}>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="rounded-full border-2 border-white px-4 py-2 text-sm font-semibold uppercase tracking-wider">
            {readMoreText}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="font-bold text-white drop-shadow-lg">{title}</h3>
        </div>
      </div>
    </Link>
  );
}
