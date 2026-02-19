import { ContactContent } from "@/components/contact-content";

export const metadata = {
  title: "Contact | Samara Balchik",
  description:
    "Contact Samara Hotel - 2 Primorska str., 9600 Balchik. Phone: +359 899 351 610. Book your stay in Balchik near the Botanical Garden.",
};

export default function ContactPage() {
  return (
    <section className="min-h-[60vh] bg-white py-16">
      <div className="container mx-auto px-4">
        <ContactContent />
      </div>
    </section>
  );
}
