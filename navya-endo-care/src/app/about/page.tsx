import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/AboutHero";
import { AboutProfile } from "@/components/sections/AboutProfile";
import { AboutTimeline } from "@/components/sections/AboutTimeline";
import { AboutStats } from "@/components/sections/AboutStats";
import { AboutCTA } from "@/components/sections/AboutCTA";

export const metadata: Metadata = {
  title: "About Dr. Navya",
  description:
    "Meet Dr. Navya — nationally recognized endocrinologist with 15+ years of experience, AIIMS gold medalist, and Mayo Clinic fellowship-trained specialist.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutProfile />
      <AboutStats />
      <AboutTimeline />
      <AboutCTA />
    </>
  );
}
