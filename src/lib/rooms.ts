export const roomSlugs = ["double", "studio", "apartment-1", "apartment-2"] as const;
export type RoomSlug = (typeof roomSlugs)[number];

export const roomConfig: Record<
  RoomSlug,
  {
    titleKey: "double" | "studio" | "apartment1" | "apartment2";
    welcomeKey: "doubleWelcome" | "studioWelcome" | "apartment1Welcome" | "apartment2Welcome";
    featuresKey: "doubleFeatures" | "studioFeatures" | "apartment1Features" | "apartment2Features";
    images: string[];
  }
> = {
  double: {
    titleKey: "double",
    welcomeKey: "doubleWelcome",
    featuresKey: "doubleFeatures",
    images: [
      "/images/rooms/Double/1.jpg",
      "/images/rooms/Double/2.jpg",
      "/images/rooms/Double/3.jpg",
      "/images/rooms/Double/4.jpg",
    ],
  },
  studio: {
    titleKey: "studio",
    welcomeKey: "studioWelcome",
    featuresKey: "studioFeatures",
    images: [
      "/images/rooms/Studio/1.jpg",
      "/images/rooms/Studio/2.jpg",
      "/images/rooms/Studio/3.jpg",
      "/images/rooms/Studio/4.jpg",
    ],
  },
  "apartment-1": {
    titleKey: "apartment1",
    welcomeKey: "apartment1Welcome",
    featuresKey: "apartment1Features",
    images: [
      "/images/rooms/Apartment 1 Bedroom/1.jpg",
      "/images/rooms/Apartment 1 Bedroom/2.jpg",
      "/images/rooms/Apartment 1 Bedroom/3.jpg",
      "/images/rooms/Apartment 1 Bedroom/4.jpg",
    ],
  },
  "apartment-2": {
    titleKey: "apartment2",
    welcomeKey: "apartment2Welcome",
    featuresKey: "apartment2Features",
    images: [
      "/images/rooms/Apartment 2 Bedroom/1.jpg",
      "/images/rooms/Apartment 2 Bedroom/2.jpg",
      "/images/rooms/Apartment 2 Bedroom/3.jpg",
      "/images/rooms/Apartment 2 Bedroom/4.jpg",
      "/images/rooms/Apartment 2 Bedroom/5.jpg",
      "/images/rooms/Apartment 2 Bedroom/6.jpg",
    ],
  },
};

export function isRoomSlug(slug: string): slug is RoomSlug {
  return roomSlugs.includes(slug as RoomSlug);
}
