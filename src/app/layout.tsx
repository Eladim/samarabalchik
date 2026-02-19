import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { siteUrl } from "@/lib/seo";
import { HotelJsonLd } from "@/components/hotel-json-ld";
import { LanguageProvider } from "@/contexts/language-context";
import { LoadingScreen } from "@/components/loading-screen";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Samara | Hotel in Balchik",
    template: "%s | Samara",
  },
  description:
    "Welcome to Samara - Your accommodation in Balchik, the Pearl of the Northern Black Sea.",
  openGraph: {
    type: "website",
    locale: "en",
    siteName: "Samara",
    title: "Samara | Hotel in Balchik",
    description:
      "Welcome to Samara - Your accommodation in Balchik, the Pearl of the Northern Black Sea.",
    images: [
      {
        url: "/images/hero/1.jpg",
        width: 1200,
        height: 630,
        alt: "Samara - Hotel in Balchik",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Samara | Hotel in Balchik",
    description:
      "Welcome to Samara - Your accommodation in Balchik, the Pearl of the Northern Black Sea.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HotelJsonLd />
        <LanguageProvider>
          <LoadingScreen>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
              <ScrollToTop />
            </div>
          </LoadingScreen>
        </LanguageProvider>
      </body>
    </html>
  );
}
