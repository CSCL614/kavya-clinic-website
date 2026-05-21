import type { Metadata } from "next";
import { ServicesHero } from "@/components/sections/ServicesHero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ServicesCTA } from "@/components/sections/ServicesCTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive endocrinology services: diabetes, thyroid, PCOD, obesity, adrenal, pituitary disorders, bone health, and hormone therapy.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ServicesCTA />
    </>
  );
}
