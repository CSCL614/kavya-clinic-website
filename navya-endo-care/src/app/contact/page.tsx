import type { Metadata } from "next";
import { ContactHero } from "@/components/sections/ContactHero";
import { ContactContent } from "@/components/sections/ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book an appointment with Dr. Navya or reach us at our clinic in Banjara Hills, Hyderabad. Call, WhatsApp, or fill out the form.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactContent />
    </>
  );
}
