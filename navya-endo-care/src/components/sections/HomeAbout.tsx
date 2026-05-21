"use client";
import { motion } from "framer-motion";
import { Award, GraduationCap, MapPin, Star, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/Animations";
import { FloatingOrbs, SectionGlow } from "@/components/BackgroundEffects";

const creds = [
  { icon: GraduationCap, label: "MBBS — AIIMS Delhi (Gold Medalist)",  color: "#0ea5e9", bg: "rgba(14,165,233,0.1)" },
  { icon: Award,         label: "DM Endocrinology — PGI Chandigarh",   color: "#14b8a6", bg: "rgba(20,184,166,0.1)" },
  { icon: Star,          label: "Fellowship — Mayo Clinic, USA",        color: "#8b5cf6", bg: "rgba(139,92,246,0.1)" },
  { icon: MapPin,        label: "Banjara Hills, Hyderabad",             color: "#f43f5e", bg: "rgba(244,63,94,0.1)" },
];

export function HomeAbout() {
  return (
    <section className="section bg-white" style={{ position:"relative", overflow:"hidden" }}>
      {/* Premium ambient effects */}
      <SectionGlow color="rgba(14,165,233,0.05)" size="65%" />
      <FloatingOrbs count={2} />
      <div className="blob-sky  w-[500px] h-[500px] -left-32 top-20 opacity-60 pointer-events-none absolute" />
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Image */}
          <FadeIn direction="left">
            <div className="relative flex justify-center">
              {/* Glow backdrop */}
              <div className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(14,165,233,0.12) 0%, transparent 60%)" }} />

              {/* Image */}
              <div className="relative w-full max-w-[400px] aspect-[4/5] rounded-3xl overflow-hidden"
                style={{
                  border: "2px solid var(--border-medium)",
                  boxShadow: "var(--shadow-lg)",
                  background: "var(--bg-secondary)",
                }}
              >
                <Image src="/doctor-hero.png" alt="Dr. Navya" fill sizes="(max-width: 768px) 100vw, 400px" className="object-cover object-top" />
                <div className="absolute bottom-0 left-0 right-0 h-28"
                  style={{ background: "linear-gradient(to top, var(--bg-secondary), transparent)" }} />
                <div className="absolute bottom-5 left-5">
                  <p className="font-black text-lg" style={{ fontFamily: "'Outfit',sans-serif", color: "var(--text-primary)" }}>Dr. Navya</p>
                  <p className="text-sm font-semibold" style={{ color: "#0ea5e9" }}>MBBS, MD, DM Endocrinology</p>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-2 -right-2 px-5 py-4 rounded-2xl"
                style={{
                  background: "var(--bg-primary)",
                  border: "1.5px solid rgba(14,165,233,0.2)",
                  boxShadow: "var(--shadow-md)",
                }}
              >
                <div className="text-2xl font-black grad-text" style={{ fontFamily: "'Outfit',sans-serif" }}>15+</div>
                <div className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>Years Experience</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-2 -left-2 px-5 py-4 rounded-2xl"
                style={{
                  background: "var(--bg-primary)",
                  border: "1.5px solid rgba(20,184,166,0.2)",
                  boxShadow: "var(--shadow-md)",
                }}
              >
                <div className="text-2xl font-black" style={{ fontFamily: "'Outfit',sans-serif", color: "#14b8a6" }}>AIIMS</div>
                <div className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>Gold Medalist</div>
              </motion.div>
            </div>
          </FadeIn>

          {/* Right — Content */}
          <FadeIn direction="right" delay={0.1}>
            <span className="section-label"><Award className="w-4 h-4" /> About the Doctor</span>
            <h2 className="heading h2 mb-5">
              Meet <span className="grad-text">Dr. Navya</span>
            </h2>
            <p className="lead mb-7">
              Dr. Navya is a nationally recognized endocrinologist with over 15 years of experience
              treating complex hormonal disorders. A gold medalist from AIIMS Delhi and fellowship-trained
              at Mayo Clinic, she combines cutting-edge science with compassionate, personalized care.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {creds.map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3.5 rounded-xl transition-colors"
                  style={{
                    background: item.bg,
                    border: `1px solid ${item.color}22`,
                  }}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "var(--bg-primary)", boxShadow: `0 2px 8px ${item.color}25` }}>
                    <item.icon className="w-4 h-4" style={{ color: item.color }} />
                  </div>
                  <span className="text-xs font-semibold" style={{ color: "var(--text-primary)" }}>{item.label}</span>
                </div>
              ))}
            </div>

            <Link href="/about">
              <motion.span
                whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
                className="btn btn-primary"
                style={{ display: "inline-flex" }}
              >
                <span>Learn More About Dr. Navya</span>
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
