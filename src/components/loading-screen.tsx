"use client";

import { useEffect, useState } from "react";

import { PRELOAD_IMAGES } from "@/lib/preload-images";

const MIN_DISPLAY_MS = 1800;
const MAX_WAIT_MS = 6000;

function preloadImages(srcs: string[]): Promise<void> {
  return Promise.all(
    srcs.map(
      (src) =>
        new Promise<void>((resolve) => {
          const img = new Image();
          img.onload = () => resolve();
          img.onerror = () => resolve();
          img.src = src;
        })
    )
  ).then(() => {});
}

/** Next.js Image optimized URLs - preload these so Image components show instantly */
function getNextImagePreloadUrls(paths: string[], width = 1200): string[] {
  if (typeof window === "undefined") return [];
  return paths.map(
    (path) =>
      `/_next/image?url=${encodeURIComponent(path)}&w=${width}&q=75`
  );
}

export function LoadingScreen({ children }: { children: React.ReactNode }) {
  const [isReady, setIsReady] = useState(false);
  const [isExited, setIsExited] = useState(false);

  useEffect(() => {
    const storageKey = "samara-initial-load-done";
    if (typeof window !== "undefined" && sessionStorage.getItem(storageKey)) {
      setIsReady(true);
      setIsExited(true);
      return;
    }

    const startTime = Date.now();

    const finishLoading = () => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, MIN_DISPLAY_MS - elapsed);

      setTimeout(() => {
        setIsReady(true);
        sessionStorage.setItem(storageKey, "1");

        setTimeout(() => setIsExited(true), 400);
      }, remaining);
    };

    const timeout = setTimeout(finishLoading, MAX_WAIT_MS);

    // Preload raw paths (for CSS backgrounds, etc.) + Next.js optimized URLs (for Image components)
    const nextUrls = getNextImagePreloadUrls(PRELOAD_IMAGES);
    const allUrls = [...PRELOAD_IMAGES, ...nextUrls];

    preloadImages(allUrls).then(() => {
      clearTimeout(timeout);
      finishLoading();
    });

    return () => clearTimeout(timeout);
  }, []);

  if (isExited) {
    return <>{children}</>;
  }

  return (
    <>
      <div
        className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-samara-navy transition-opacity duration-300 ${
          isReady ? "opacity-0" : "opacity-100"
        }`}
        aria-hidden={isReady}
      >
        <div className="relative">
          <div
            className="size-16 rounded-full border-4 border-samara-orange/30 border-t-samara-orange"
            style={{
              animation: "loading-spin 0.9s linear infinite",
            }}
          />
          <div
            className="absolute inset-0 size-16 rounded-full border-4 border-transparent border-t-white/40"
            style={{
              animation: "loading-spin-reverse 1.2s linear infinite",
            }}
          />
        </div>
        <p className="mt-8 font-medium tracking-widest text-white/90">
          SAMARA
        </p>
        <p className="mt-1 text-sm tracking-[0.3em] text-samara-orange/90">
          BALCHIK
        </p>
      </div>
      {children}
    </>
  );
}
