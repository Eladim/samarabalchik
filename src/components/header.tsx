"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, ChevronDown } from "lucide-react";

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
  { href: "/", key: "home" as const },
  { href: "/about", key: "about" as const },
  { href: "/rooms", key: "rooms" as const },
  { href: "/relax", key: "relax" as const },
  { href: "/gallery", key: "gallery" as const },
  { href: "/contact", key: "contact" as const },
] as const;

export function Header() {
  const pathname = usePathname();
  const { locale, setLocale, t } = useLanguage();

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
            alt="Samara Complex"
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
                className="text-white hover:bg-white/10 hover:text-white"
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
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10 hover:text-white lg:hidden"
              >
                <Menu className="size-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] border-samara-navy bg-samara-navy [&_button]:text-white [&_button]:hover:bg-white/10"
            >
              <nav className="flex flex-col gap-2 pt-8">
                <NavLinks />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
