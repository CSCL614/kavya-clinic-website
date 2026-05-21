"use client";
import { PageHero } from "@/components/PageHero";
export function GalleryHero() {
  return (
    <PageHero
      badge="Gallery"
      title={<>Our <span className="grad-text">Clinic</span> &amp; Facilities</>}
      subtitle="State-of-the-art clinic facilities, cutting-edge diagnostic equipment, and a warm welcoming environment designed for patient comfort and care."
    />
  );
}
