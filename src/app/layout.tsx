import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  title: "Samara Complex | Hotel in Balchik",
  description:
    "Welcome to Samara Complex - Your accommodation in Balchik, the Pearl of the Northern Black Sea.",
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
