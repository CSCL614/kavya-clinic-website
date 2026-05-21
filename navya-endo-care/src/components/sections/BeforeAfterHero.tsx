"use client";
import { PageHero } from "@/components/PageHero";
export function BeforeAfterHero() {
  return (
    <PageHero
      badge="Real Results"
      title={<>Transformative <span className="grad-text">Patient</span> Outcomes</>}
      subtitle="Real patient results from our clinic. Drag the slider to compare before and after treatment outcomes."
    />
  );
}
