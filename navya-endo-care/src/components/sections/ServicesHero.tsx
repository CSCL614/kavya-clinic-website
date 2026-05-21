"use client";
import { PageHero } from "@/components/PageHero";
export function ServicesHero() {
  return (
    <PageHero
      badge="Our Services"
      title={<>Comprehensive <span className="grad-text">Endocrinology</span><br />Services</>}
      subtitle="Eight specialized service areas covering every aspect of hormonal health — from precision diagnosis to personalized treatment and long-term wellness management."
    />
  );
}
