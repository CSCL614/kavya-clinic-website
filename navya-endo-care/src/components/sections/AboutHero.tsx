"use client";
import { PageHero } from "@/components/PageHero";
export function AboutHero() {
  return (
    <PageHero
      badge="About Dr. Navya"
      title={<>Meet the <span className="grad-text">Expert</span> Behind<br />Your Transformation</>}
      subtitle="A nationally recognized endocrinologist with 15+ years of experience, AIIMS gold medalist, and Mayo Clinic fellowship-trained specialist dedicated to transforming hormonal health."
    />
  );
}
