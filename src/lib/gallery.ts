import { roomConfig } from "./rooms";

const allRoomImages = Object.values(roomConfig).flatMap((config) => config.images);

export const galleryCategories = {
  hotel: {
    images: [
      "/images/hero/1.jpg",
      "/images/marketing-page/1.jpg",
      "/images/about-us/1.jpg",
      "/images/about-us/background.jpg",
    ],
  },
  relaxCenter: {
    images: [
      "/images/relax-center/1.jpg",
      "/images/relax-center/2.jpg",
      "/images/relax-center/3.jpg",
      "/images/relax-center/4.jpg",
    ],
  },
  roomTypes: {
    images: allRoomImages,
  },
} as const;

export type GalleryCategoryId = keyof typeof galleryCategories;
