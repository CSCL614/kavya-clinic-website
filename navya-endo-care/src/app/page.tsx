import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { HomeHero } from "@/components/sections/HomeHero";

// Lazy load below-the-fold sections for faster initial page load
const HomeServices = dynamic(() => import("@/components/sections/HomeServices").then((mod) => mod.HomeServices));
const HomeAbout = dynamic(() => import("@/components/sections/HomeAbout").then((mod) => mod.HomeAbout));
const HomeTestimonials = dynamic(() => import("@/components/sections/HomeTestimonials").then((mod) => mod.HomeTestimonials));
const HomeAppointmentCTA = dynamic(() => import("@/components/sections/HomeAppointmentCTA").then((mod) => mod.HomeAppointmentCTA));
const HomeFAQ = dynamic(() => import("@/components/sections/HomeFAQ").then((mod) => mod.HomeFAQ));

export const metadata: Metadata = {
  title: "Dr. Navya's Endo Care | Premium Endocrinology Clinic",
  description:
    "World-class endocrinology care by Dr. Navya — diabetes, thyroid, PCOD, hormones. Book your consultation today.",
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeServices />
      <HomeAbout />
      <HomeTestimonials />
      <HomeAppointmentCTA />
      <HomeFAQ />
    </>
  );
}
