import { galleryCategories } from "./gallery";

const galleryImages = Object.values(galleryCategories).flatMap((cat) => cat.images);

const extraImages = [
  "/images/about-us/restaurant.jpg",
  "/icons/logo.png",
  "/images/google-maps/pin.png",
];

export const PRELOAD_IMAGES = [...new Set([...galleryImages, ...extraImages])];
