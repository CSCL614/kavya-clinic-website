import type { Metadata } from "next";
import { GalleryHero } from "@/components/sections/GalleryHero";
import { GalleryGrid } from "@/components/sections/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore our state-of-the-art clinic facilities, diagnostic equipment, and patient care environment at Dr. Navya's Endo Care.",
};

export default function GalleryPage() {
  return (
    <>
      <GalleryHero />
      <GalleryGrid />
    </>
  );
}
