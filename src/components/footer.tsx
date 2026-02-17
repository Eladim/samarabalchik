"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { useLanguage } from "@/contexts/language-context";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-samara-navy text-white">
      {/* Company info and contact columns */}
      <div className="container mx-auto px-4 py-12">
        

        

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div className="rounded-lg border border-white/20 bg-samara-navy p-6 transition-all duration-300 hover:scale-105 hover:border-yellow-400/50 hover:bg-yellow-400 hover:text-samara-navy group">
            <h4 className="mb-3 flex items-center gap-2 font-bold">
              <Mail className="size-5 text-samara-orange group-hover:text-samara-navy" />
              {t.contact.writeUs}
            </h4>
            <a
              href={`mailto:${t.contact.email}`}
              className="block text-white/90 transition-colors group-hover:text-samara-navy group-hover:underline"
            >
              {t.contact.email}
            </a>
          </div>

          <div className="rounded-lg border border-white/20 bg-samara-navy p-6 transition-all duration-300 hover:scale-105 hover:border-yellow-400/50 hover:bg-yellow-400 hover:text-samara-navy group">
            <h4 className="mb-3 flex items-center gap-2 font-bold">
              <MapPin className="size-5 text-samara-orange group-hover:text-samara-navy" />
              {t.contact.visitUs}
            </h4>
            <p className="whitespace-pre-line text-white/90 transition-colors group-hover:text-samara-navy">
              {t.contact.fullAddress}
            </p>
          </div>

          <div className="rounded-lg border border-white/20 bg-samara-navy p-6 transition-all duration-300 hover:scale-105 hover:border-yellow-400/50 hover:bg-yellow-400 hover:text-samara-navy group">
            <h4 className="mb-3 flex items-center gap-2 font-bold">
              <Phone className="size-5 text-samara-orange group-hover:text-samara-navy" />
              {t.contact.callUs}
            </h4>
            <a
              href={`tel:${t.contact.phone.replace(/\s/g, "")}`}
              className="block text-white/90 transition-colors group-hover:text-samara-navy group-hover:underline"
            >
              {t.contact.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-samara-orange/30">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-4 sm:flex-row">
          <Link
            href="/contact"
            className="text-sm text-white/90 hover:text-samara-orange hover:underline"
          >
            {t.contact.terms}
          </Link>
          <p className="text-sm text-white/70">
            COPYRIGHT © {new Date().getFullYear()} - BY PARSING LTD
          </p>
        </div>
      </div>
    </footer>
  );
}
