"use client";

import Image from "next/image";
import Link from "next/link";

import { useLanguage } from "@/contexts/language-context";

const ABOUT_US_IMAGE = "/images/about-us/1.jpg";
const RESTAURANT_IMAGE = "/images/about-us/restaurant.jpg";
const FIXED_BG_IMAGE = "/images/about-us/background.jpg";

export function AboutContent() {
  const { t } = useLanguage();

  return (
    <>
      {/* Breadcrumb */}
      <div className="border-b border-samara-navy/10 bg-white py-3">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-samara-orange hover:underline">
              {t.about.breadcrumbHome}
            </Link>
            <span aria-hidden>/</span>
            <span className="text-gray-700">{t.about.breadcrumbAbout}</span>
          </nav>
        </div>
      </div>

      {/* About Us section - white background, two columns */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid items-start gap-8 lg:grid-cols-[1.5fr_1fr] lg:gap-12">
            <div>
              <h1 className="mb-6 text-3xl font-bold text-gray-900 lg:text-4xl">
                {t.about.title}
              </h1>
              <p className="whitespace-pre-line leading-relaxed text-gray-600">
                {t.about.aboutUsText}
              </p>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg">
              <Image
                src={ABOUT_US_IMAGE}
                alt="Samara - Hotel exterior and pool"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fixed background section with Restaurant card overlay */}
      <section className="relative min-h-[70vh] overflow-hidden">
        {/* Fixed background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ backgroundImage: `url(${FIXED_BG_IMAGE})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-samara-navy/40" />

        {/* Restaurant card - centered overlay */}
        <div className="relative z-10 flex min-h-[70vh] items-center justify-center py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl">
              <div className="grid gap-0 lg:grid-cols-2">
                <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[400px]">
                  <Image
                    src={RESTAURANT_IMAGE}
                    alt="Samara Restaurant interior"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="flex flex-col justify-center p-8 lg:p-10">
                  <h2 className="mb-4 text-2xl font-bold text-gray-900 lg:text-3xl">
                    {t.about.restaurantTitle}
                  </h2>
                  <p className="leading-relaxed text-gray-600">
                    {t.about.restaurantText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
