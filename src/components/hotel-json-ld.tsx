import { siteUrl } from "@/lib/seo";

const hotelSchema = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  name: "Samara",
  description:
    "Welcome to Samara - Your accommodation in Balchik, the Pearl of the Northern Black Sea. Double rooms, studios, apartments, restaurant, pool & relax center.",
  url: siteUrl,
  telephone: "+359 899 351 610",
  email: "sales@samarabalchik.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2 Primorska str.",
    addressLocality: "Balchik",
    postalCode: "9600",
    addressRegion: "Dobrich",
    addressCountry: "BG",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.40665816445431,
    longitude: 28.15860917177271,
  },
  image: `${siteUrl}/images/hero/1.jpg`,
};

export function HotelJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelSchema) }}
    />
  );
}
