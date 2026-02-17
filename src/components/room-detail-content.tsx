"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";

import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import { ImageGallery } from "@/components/image-gallery";
import type { RoomSlug } from "@/lib/rooms";

type Props = {
  slug: RoomSlug;
  titleKey: "double" | "studio" | "apartment1" | "apartment2";
  welcomeKey: "doubleWelcome" | "studioWelcome" | "apartment1Welcome" | "apartment2Welcome";
  featuresKey: "doubleFeatures" | "studioFeatures" | "apartment1Features" | "apartment2Features";
  images: string[];
};

export function RoomDetailContent({
  slug,
  titleKey,
  welcomeKey,
  featuresKey,
  images,
}: Props) {
  const { t } = useLanguage();
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryInitialIndex, setGalleryInitialIndex] = useState(0);

  const openGallery = (index: number) => {
    setGalleryInitialIndex(index);
    setGalleryOpen(true);
  };

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <Button
          asChild
          variant="ghost"
          className="mb-6 -ml-2 text-gray-600 hover:text-gray-900"
        >
          <Link href="/rooms" className="inline-flex items-center gap-2">
            <ArrowLeft className="size-4" />
            {t.rooms.title}
          </Link>
        </Button>

        {/* Room title */}
        <h1 className="mb-6 text-3xl font-bold text-gray-900 lg:text-4xl">
          {t.rooms[titleKey]}
        </h1>

        {/* Description */}
        <div className="mb-10 space-y-4">
          <p className="text-gray-600">{t.rooms[welcomeKey]}</p>
          <p className="whitespace-pre-line text-sm leading-relaxed text-gray-600">
            {t.rooms[featuresKey]}
          </p>
        </div>

        {/* Amenities and Policies */}
        <div className="mb-12 grid gap-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-lg border border-gray-200">
            <div className="bg-samara-orange px-4 py-3">
              <h2 className="font-bold uppercase tracking-wide text-white">
                {t.roomDetail.amenities}
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-2 p-4 lg:grid-cols-3">
              {(
                titleKey === "double"
                  ? t.roomDetail.amenityListDouble
                  : titleKey === "studio"
                    ? t.roomDetail.amenityListStudio
                    : titleKey === "apartment1"
                      ? t.roomDetail.amenityListApartment1
                      : titleKey === "apartment2"
                        ? t.roomDetail.amenityListApartment2
                        : t.roomDetail.amenityList
              ).map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-gray-700"
                >
                  <Check className="size-4 shrink-0 text-samara-orange" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-gray-200">
            <div className="bg-samara-orange px-4 py-3">
              <h2 className="font-bold uppercase tracking-wide text-white">
                {t.roomDetail.policies}
              </h2>
            </div>
            <div className="space-y-2 p-4">
              {t.roomDetail.policyList.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2 text-sm text-gray-700"
                >
                  <Check className="mt-0.5 size-4 shrink-0 text-samara-orange" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image gallery - responsive grid, all images visible */}
        <div>
          <h2 className="mb-4 text-xl font-bold text-gray-900">
            {t.roomDetail.gallery}
          </h2>
          <div
            className={`grid gap-3
              ${images.length === 1 ? "grid-cols-1" : ""}
              ${images.length === 2 ? "grid-cols-2" : ""}
              ${images.length === 3 ? "grid-cols-1 sm:grid-cols-3" : ""}
              ${images.length === 4 ? "grid-cols-2" : ""}
              ${images.length === 5 ? "grid-cols-2" : ""}
              ${images.length === 6 ? "grid-cols-2 sm:grid-cols-3" : ""}
            `}
          >
            {images.map((src, index) => (
              <button
                key={src}
                type="button"
                onClick={() => openGallery(index)}
                className={`relative overflow-hidden rounded-lg transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-samara-orange focus:ring-offset-2
                  ${images.length === 1 ? "aspect-video" : "aspect-[4/3]"}
                  ${images.length === 5 && index === 0 ? "row-span-2" : ""}
                `}
              >
                <Image
                  src={src}
                  alt={`${t.rooms[titleKey]} - ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes={
                    images.length === 1
                      ? "100vw"
                      : images.length <= 3
                        ? "(max-width: 640px) 100vw, 33vw"
                        : "(max-width: 640px) 50vw, 33vw"
                  }
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      <ImageGallery
        images={images}
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
        initialIndex={galleryInitialIndex}
      />
    </section>
  );
}
