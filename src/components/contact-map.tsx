"use client";

import { useEffect, useRef } from "react";

const HOTEL_LAT = 43.40665816445431;
const HOTEL_LNG = 28.15860917177271;
const PIN_ICON = "/images/google-maps/pin.png";

declare global {
  interface Window {
    initContactMap?: () => void;
    google?: {
      maps: {
        Map: new (
          el: HTMLElement,
          opts: Record<string, unknown>
        ) => { setCenter: (c: { lat: number; lng: number }) => void };
        Marker: new (opts: Record<string, unknown>) => void;
        Size: new (w: number, h: number) => { width: number; height: number };
        Point: new (x: number, y: number) => { x: number; y: number };
      };
    };
  }
}

export function ContactMap() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
    if (!apiKey) {
      console.warn("NEXT_PUBLIC_GOOGLE_API_KEY is not set. Map will not load.");
      return;
    }

    if (!mapRef.current) return;

    const initMap = () => {
      const g = window.google;
      if (!g?.maps || !mapRef.current) return;

      const map = new g.maps.Map(mapRef.current, {
        center: { lat: HOTEL_LAT, lng: HOTEL_LNG },
        zoom: 18,
        mapTypeControl: true,
        streetViewControl: false,
        fullscreenControl: true,
        zoomControl: true,
      });

      new g.maps.Marker({
        position: { lat: HOTEL_LAT, lng: HOTEL_LNG },
        map,
        title: "Samara Complex",
        icon: {
          url: PIN_ICON,
          scaledSize: new g.maps.Size(48, 48),
          anchor: new g.maps.Point(24, 48),
        },
      });
    };

    if (window.google?.maps) {
      initMap();
      return;
    }

    window.initContactMap = initMap;
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initContactMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      delete window.initContactMap;
    };
  }, []);

  return (
    <div
      ref={mapRef}
      className="h-[400px] w-full overflow-hidden rounded-xl bg-gray-200 lg:h-[500px]"
      aria-label="Map showing Samara Complex location"
    />
  );
}
