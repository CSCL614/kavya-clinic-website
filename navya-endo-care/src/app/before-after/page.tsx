import type { Metadata } from "next";
import { BeforeAfterHero } from "@/components/sections/BeforeAfterHero";
import { BeforeAfterCases } from "@/components/sections/BeforeAfterCases";
import { BeforeAfterCTA } from "@/components/sections/BeforeAfterCTA";

export const metadata: Metadata = {
  title: "Before & After",
  description:
    "See real patient transformations — diabetes control, thyroid, PCOD outcomes, and more from Dr. Navya's Endo Care clinic.",
};

export default function BeforeAfterPage() {
  return (
    <>
      <BeforeAfterHero />
      <BeforeAfterCases />
      <BeforeAfterCTA />
    </>
  );
}
