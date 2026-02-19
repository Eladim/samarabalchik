"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, ChevronDown, Home, Info, BedDouble, Sparkles, Images, Mail } from "lucide-react";

import { useLanguage } from "@/contexts/language-context";
import { locales } from "@/lib/translations";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { href: "/", key: "home" as const, icon: Home },
  { href: "/about", key: "about" as const, icon: Info },
  { href: "/rooms", key: "rooms" as const, icon: BedDouble },
  { href: "/relax", key: "relax" as const, icon: Sparkles },
  { href: "/gallery", key: "gallery" as const, icon: Images },
  { href: "/contact", key: "contact" as const, icon: Mail },
] as const;

export function Header() {
  const pathname = usePathname();
  const { locale, setLocale, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinkClass = (isActive: boolean) =>
    `block py-2 text-sm font-medium uppercase tracking-wide transition-colors hover:text-samara-orange ${
      isActive
        ? "text-samara-orange border-b-2 border-samara-orange w-fit"
        : "text-white"
    }`;

  const NavLinks = () => (
    <>
      {navItems.map(({ href, key }) => (
        <Link
          key={href}
          href={href}
          className={navLinkClass(pathname === href)}
        >
          {t.nav[key]}
        </Link>
      ))}
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-samara-navy">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/icons/logo.png"
            alt="Samara"
            width={180}
            height={60}
            className="h-14 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          <NavLinks />
        </nav>

        {/* Language selector */}
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="hidden text-white hover:bg-white/10 hover:text-white sm:flex"
              >
                {locales.find((l) => l.code === locale)?.label ?? "English"}
                <ChevronDown className="ml-1 size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white">
              {locales.map(({ code, label }) => (
                <DropdownMenuItem
                  key={code}
                  onClick={() => setLocale(code)}
                  className={locale === code ? "bg-samara-orange/10" : ""}
                >
                  {label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="size-10 text-white hover:bg-white/10 hover:text-white lg:hidden"
              >
                <Menu className="size-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="flex w-[85vw] max-w-[320px] flex-col border-l-samara-navy/50 bg-samara-navy px-0 pb-8 pt-6 [&>button]:right-4 [&>button]:top-6 [&>button]:size-10 [&>button]:text-white [&>button]:opacity-90 [&>button]:transition hover:[&>button]:opacity-100"
            >
              <nav className="flex flex-1 flex-col px-6">
                <div className="divide-y divide-white/10">
                  {navItems.map(({ href, key, icon: Icon }) => (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex min-h-[52px] items-center gap-4 px-2 py-1 transition-colors active:bg-white/5 ${
                        pathname === href
                          ? "text-samara-orange"
                          : "text-white hover:text-samara-orange/90"
                      }`}
                    >
                      <Icon className="size-5 shrink-0 text-samara-orange/70" />
                      <span className="text-base font-medium tracking-wide">
                        {t.nav[key]}
                      </span>
                    </Link>
                  ))}
                </div>
              </nav>

              {/* Language selector - mobile */}
              <div className="mt-auto border-t border-white/10 px-6 pt-6">
                <p className="mb-3 text-xs font-medium uppercase tracking-wider text-white/60">
                  Language
                </p>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-between border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white"
                    >
                      {locales.find((l) => l.code === locale)?.label ?? "English"}
                      <ChevronDown className="size-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="z-[60] w-[--radix-dropdown-menu-trigger-width] bg-white">
                    {locales.map(({ code, label }) => (
                      <DropdownMenuItem
                        key={code}
                        onClick={() => setLocale(code)}
                        className={locale === code ? "bg-samara-orange/10" : ""}
                      >
                        {label}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
