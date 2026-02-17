"use client";

import { useState } from "react";
import Image from "next/image";
import { ImageIcon } from "lucide-react";

import { useLanguage } from "@/contexts/language-context";
import { ImageGallery } from "@/components/image-gallery";
import {
  galleryCategories,
  type GalleryCategoryId,
} from "@/lib/gallery";

const categoryOrder: GalleryCategoryId[] = [
  "hotel",
  "relaxCenter",
  "roomTypes",
];

const categoryTitleKeys: Record<
  GalleryCategoryId,
  "hotelImages" | "relaxCenterImages" | "roomTypeImages"
> = {
  hotel: "hotelImages",
  relaxCenter: "relaxCenterImages",
  roomTypes: "roomTypeImages",
};

export function GalleryContent() {
  const { t } = useLanguage();
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [galleryInitialIndex, setGalleryInitialIndex] = useState(0);

  const openGallery = (images: string[], index: number) => {
    setGalleryImages(images);
    setGalleryInitialIndex(index);
    setGalleryOpen(true);
  };

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="mb-12 text-center text-3xl font-bold text-gray-900 lg:text-4xl">
          {t.gallery.title}
        </h1>

        {categoryOrder.map((categoryId) => {
          const category = galleryCategories[categoryId];
          const images = category.images;
          const titleKey = categoryTitleKeys[categoryId];

          return (
            <div key={categoryId} className="mb-16">
              <h2 className="mb-6 border-b-2 border-samara-orange pb-2 text-xl font-bold text-gray-900 lg:text-2xl">
                {t.gallery[titleKey]}
              </h2>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {images.map((src, index) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => openGallery([...images], index)}
                    className="group relative aspect-[4/3] overflow-hidden rounded-xl transition-all hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-samara-orange focus:ring-offset-2"
                  >
                    <Image
                      src={src}
                      alt={`${t.gallery[titleKey]} - ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/30 group-hover:opacity-100">
                      <span className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-gray-800">
                        <ImageIcon className="size-5" />
                        {t.gallery.viewImages}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {galleryImages.length > 0 && (
        <ImageGallery
          images={galleryImages}
          isOpen={galleryOpen}
          onClose={() => setGalleryOpen(false)}
          initialIndex={galleryInitialIndex}
        />
      )}
    </section>
  );
}
