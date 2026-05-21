"use client";
import { motion } from "framer-motion";
import {
  Activity, Brain, Baby, Scale,
  Zap, Shield, Heart, Syringe, ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animations";
import { FloatingOrbs, SectionGlow } from "@/components/BackgroundEffects";

const services = [
  { icon: Activity, title: "Diabetes Management",   sub: "Type 1, 2 & Gestational", color: "#0ea5e9", bg: "#dbeafe", darkBg: "rgba(14,165,233,0.12)" },
  { icon: Brain,    title: "Thyroid Disorders",      sub: "Hypo, Hyper & Nodules",   color: "#14b8a6", bg: "#ccfbf1", darkBg: "rgba(20,184,166,0.12)" },
  { icon: Baby,     title: "PCOD & Women's Health",  sub: "Hormones & Fertility",    color: "#ec4899", bg: "#fce7f3", darkBg: "rgba(236,72,153,0.12)" },
  { icon: Scale,    title: "Obesity & Metabolism",   sub: "Medical Weight Mgmt.",    color: "#8b5cf6", bg: "#ede9fe", darkBg: "rgba(139,92,246,0.12)" },
  { icon: Zap,      title: "Adrenal Disorders",      sub: "Cortisol & Adrenal",      color: "#f59e0b", bg: "#fef3c7", darkBg: "rgba(245,158,11,0.12)" },
  { icon: Shield,   title: "Osteoporosis & Bone",    sub: "DEXA Scan & Treatment",   color: "#10b981", bg: "#d1fae5", darkBg: "rgba(16,185,129,0.12)" },
  { icon: Heart,    title: "Pituitary Disorders",    sub: "GH & Prolactin Care",     color: "#f43f5e", bg: "#ffe4e6", darkBg: "rgba(244,63,94,0.12)" },
  { icon: Syringe,  title: "Hormone Therapy",        sub: "Replacement & Optim.",    color: "#6366f1", bg: "#e0e7ff", darkBg: "rgba(99,102,241,0.12)" },
];

export function HomeServices() {
  return (
    <section id="services" className="section bg-sky" style={{ position: "relative", overflow: "hidden" }}>
      {/* Background effects */}
      <SectionGlow color="rgba(14,165,233,0.04)" size="75%" />
      <FloatingOrbs count={2} />
      <div className="absolute inset-0 bg-dots pointer-events-none" style={{ opacity: 0.4 }} />

      <div className="container relative z-10">
        {/* Section header */}
        <FadeIn>
          <div className="section-header">
            <span className="section-label"><Activity className="w-4 h-4" /> Specialized Care</span>
            <h2 className="heading h2">World-Class <span className="grad-text">Endocrinology</span></h2>
            <p className="lead" style={{ textAlign: "center" }}>
              Comprehensive hormonal healthcare with cutting-edge diagnostics and personalized treatment plans.
            </p>
          </div>
        </FadeIn>

        {/* Card grid */}
        <StaggerContainer
          className="grid gap-6"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}
          staggerDelay={0.07}
        >
          {services.map((s, i) => (
            <StaggerItem key={i}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="glow-card group relative"
                style={{
                  padding: "2rem 1.75rem",
                  height: "100%",
                  minHeight: "180px",
                  display: "flex",
                  flexDirection: "column",
                  border: `1px solid ${s.color}18`,
                  borderRadius: "1.25rem",
                  cursor: "pointer",
                }}
              >
                {/* Top accent line — visible on hover */}
                <div
                  className="absolute top-0 left-0 right-0 opacity-0 group-hover:opacity-100"
                  style={{
                    height: "3px",
                    borderRadius: "1.25rem 1.25rem 0 0",
                    background: `linear-gradient(90deg, ${s.color}, ${s.color}66)`,
                    transition: "opacity 0.35s ease",
                  }}
                />

                {/* Icon */}
                <motion.div
                  className="flex-shrink-0 mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{
                      background: s.bg,
                      boxShadow: `0 4px 16px ${s.color}20`,
                    }}
                  >
                    <s.icon className="w-7 h-7" style={{ color: s.color }} />
                  </div>
                </motion.div>

                {/* Text */}
                <div style={{ flex: 1 }}>
                  <h3
                    className="font-black"
                    style={{
                      fontFamily: "'Outfit',sans-serif",
                      fontSize: "1rem",
                      color: "var(--text-primary)",
                      marginBottom: "0.375rem",
                      lineHeight: 1.25,
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      color: s.color,
                      marginBottom: "0.75rem",
                    }}
                  >
                    {s.sub}
                  </p>

                  {/* Learn more — appears on hover */}
                  <div
                    className="flex items-center gap-1 opacity-0 group-hover:opacity-100 absolute bottom-6 left-7"
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: s.color,
                      transition: "opacity 0.3s ease, transform 0.3s ease",
                      transform: "translateX(-4px)",
                    }}
                  >
                    Learn more
                    <ArrowRight style={{ width: 12, height: 12 }} />
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <FadeIn delay={0.2}>
          <div style={{ textAlign: "center", marginTop: "3.5rem" }}>
            <Link href="/services">
              <motion.span
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="btn btn-outline btn-lg"
                style={{ display: "inline-flex" }}
              >
                View All Services <ArrowRight className="w-5 h-5" />
              </motion.span>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
