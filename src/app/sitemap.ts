import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/seo";

const routes = [
  "",
  "/about",
  "/rooms",
  "/rooms/double",
  "/rooms/studio",
  "/rooms/apartment-1",
  "/rooms/apartment-2",
  "/relax",
  "/gallery",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `${siteUrl}${path || "/"}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : ("monthly" as const),
    priority: path === "" ? 1 : 0.8,
  }));
}
