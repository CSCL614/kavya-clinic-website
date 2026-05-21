"use client";
import { PageHero } from "@/components/PageHero";
export function ContactHero() {
  return (
    <PageHero
      badge="Get In Touch"
      title={<>Book Your <span className="grad-text">Consultation</span></>}
      subtitle="Ready to transform your hormonal health? Reach us by phone, WhatsApp, or fill out the form — Dr. Navya and team are here for you."
    />
  );
}
