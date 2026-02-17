import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { roomConfig, isRoomSlug } from "@/lib/rooms";
import { RoomDetailContent } from "@/components/room-detail-content";

const titleMap: Record<string, string> = {
  double: "Double Room",
  studio: "Studio",
  "apartment-1": "Apartment 1 Bedroom",
  "apartment-2": "Apartment 2 Bedrooms",
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!isRoomSlug(slug)) return {};
  return {
    title: `${titleMap[slug]} | Samara Complex`,
    description: `View details and gallery for our ${titleMap[slug]} at Samara Complex in Balchik.`,
  };
}

export async function generateStaticParams() {
  return ["double", "studio", "apartment-1", "apartment-2"].map((slug) => ({
    slug,
  }));
}

export default async function RoomDetailPage({ params }: Props) {
  const { slug } = await params;

  if (!isRoomSlug(slug)) {
    notFound();
  }

  const config = roomConfig[slug];

  return (
    <RoomDetailContent
      slug={slug}
      titleKey={config.titleKey}
      welcomeKey={config.welcomeKey}
      featuresKey={config.featuresKey}
      images={config.images}
    />
  );
}
