"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, ImageIcon } from "lucide-react";

import { useLanguage } from "@/contexts/language-context";
import { ImageGallery } from "@/components/image-gallery";
import { relaxImages } from "@/lib/relax";

export function RelaxContent() {
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
        <h1 className="mb-8 text-center text-3xl font-bold text-gray-900 lg:text-4xl">
          {t.relax.title}
        </h1>

        {/* Image grid - 2x2, clickable for gallery */}
        <div className="mb-12">
          <div className="grid grid-cols-2 gap-4">
            {relaxImages.map((src, index) => (
              <button
                key={src}
                type="button"
                onClick={() => openGallery(index)}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl transition-all hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-samara-orange focus:ring-offset-2"
              >
                <Image
                  src={src}
                  alt={`${t.relax.title} - ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/30 group-hover:opacity-100">
                  <span className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-gray-800">
                    <ImageIcon className="size-5" />
                    {t.relax.viewImages}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="mb-12 space-y-4">
          <p className="text-center text-lg leading-relaxed text-gray-600">
            {t.relax.description1}
          </p>
          <p className="text-center text-lg leading-relaxed text-gray-600">
            {t.relax.description2}
          </p>
        </div>

        {/* Massages section */}
        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
          <div className="bg-samara-orange px-6 py-4">
            <h2 className="text-center text-xl font-bold uppercase tracking-wide text-white">
              {t.relax.massagesHeading}
            </h2>
          </div>
          <div className="grid gap-3 p-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.relax.massages.map((massage) => (
              <div
                key={massage}
                className="flex items-center gap-3 rounded-lg border border-gray-100 bg-gray-50/50 px-4 py-3 transition-colors hover:border-samara-orange/30 hover:bg-samara-orange/5"
              >
                <Check className="size-5 shrink-0 text-samara-orange" />
                <span className="text-gray-700">{massage}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ImageGallery
        images={relaxImages}
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
        initialIndex={galleryInitialIndex}
      />
    </section>
  );
}
