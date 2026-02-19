"use client";

/**
 * Embed URL for Samara Hotel – uses place name so the hotel icon appears.
 * Address: 2 Primorska Street, 9600 Balchik, Bulgaria
 * Uses Google Maps embed (iframe) - no API key required.
 */
const EMBED_URL =
  "https://maps.google.com/maps?q=Samara+Hotel+2+Primorska+Street+Balchik+Bulgaria&output=embed";

export function ContactMap() {
  return (
    <div className="h-[400px] w-full overflow-hidden rounded-xl bg-gray-200 lg:h-[500px]">
      <iframe
        src={EMBED_URL}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Map showing Samara location"
        className="h-full w-full"
      />
    </div>
  );
}
