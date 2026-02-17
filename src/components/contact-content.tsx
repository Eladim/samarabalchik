"use client";

import Link from "next/link";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";

import { useLanguage } from "@/contexts/language-context";
import { ContactMap } from "@/components/contact-map";

export function ContactContent() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-6xl">
      <h1 className="mb-10 text-center text-3xl font-bold text-gray-900 lg:text-4xl">
        {t.contact.title}
      </h1>

      {/* Map + Contact split layout */}
      <div className="mb-16 grid gap-8 lg:grid-cols-5">
        {/* Map - larger on desktop */}
        <div className="lg:col-span-3">
          <ContactMap />
        </div>

        {/* Contact details - compact, distinct from footer */}
        <div className="flex flex-col justify-center lg:col-span-2">
          <div className="rounded-xl border border-gray-200 bg-gray-50/50 p-6">
            <p className="mb-6 font-semibold text-samara-navy">
              {t.contact.companyName}
            </p>
            <ul className="space-y-5">
              <li>
                <a
                  href={`mailto:${t.contact.email}`}
                  className="group flex items-start gap-3 text-gray-700 transition-colors hover:text-samara-orange"
                >
                  <Mail className="mt-0.5 size-5 shrink-0 text-samara-orange" />
                  <span className="group-hover:underline">{t.contact.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-700">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-samara-orange" />
                  <span className="whitespace-pre-line">
                    {t.contact.fullAddress}
                  </span>
                </div>
              </li>
              <li>
                <a
                  href={`tel:${t.contact.phone.replace(/\s/g, "")}`}
                  className="group flex items-start gap-3 text-gray-700 transition-colors hover:text-samara-orange"
                >
                  <Phone className="mt-0.5 size-5 shrink-0 text-samara-orange" />
                  <span className="group-hover:underline">{t.contact.phone}</span>
                </a>
              </li>
            </ul>
            <Link
              href={`https://www.google.com/maps/dir/?api=1&destination=${43.40665816445431},${28.15860917177271}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-samara-orange hover:underline"
            >
              {t.contact.getDirections}
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}
