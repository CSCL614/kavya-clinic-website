"use client";
import { motion } from "framer-motion";
import {
  Activity, Brain, Baby, Scale,
  Zap, Shield, Heart, Syringe,
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animations";
import { MeshBackground, SectionGlow } from "@/components/BackgroundEffects";

const services = [
  {
    icon: Activity, title: "Diabetes Management",  sub: "Type 1, Type 2 & Gestational", color: "#0ea5e9", bg: "#dbeafe",
    desc: "Comprehensive diabetes care with CGM monitoring, insulin optimization, and lifestyle programs tailored to your unique metabolic profile.",
    features: ["CGM Integration", "Insulin Pump Therapy", "Dietary Counselling", "HbA1c Optimization"],
  },
  {
    icon: Brain, title: "Thyroid Disorders", sub: "Hypo, Hyper & Nodules", color: "#14b8a6", bg: "#ccfbf1",
    desc: "Advanced thyroid diagnostics and management including ultrasound-guided biopsies and radioiodine therapy for optimal thyroid health.",
    features: ["Thyroid Ultrasound", "Fine Needle Biopsy", "Radioiodine Therapy", "TSH Optimization"],
  },
  {
    icon: Baby, title: "PCOD & Women's Health", sub: "Hormonal Balance & Fertility", color: "#ec4899", bg: "#fce7f3",
    desc: "Expert PCOD management combining hormonal therapy, fertility support, and evidence-based lifestyle interventions.",
    features: ["Hormonal Profiling", "Ovulation Induction", "Anti-androgen Therapy", "Fertility Support"],
  },
  {
    icon: Scale, title: "Obesity & Metabolism", sub: "Medical Weight Management", color: "#8b5cf6", bg: "#ede9fe",
    desc: "Science-backed obesity treatment addressing underlying metabolic causes with pharmaceutical and behavioral interventions.",
    features: ["Body Composition Analysis", "GLP-1 Therapy", "Metabolic Panel", "Weight Loss Programs"],
  },
  {
    icon: Zap, title: "Adrenal Disorders", sub: "Cortisol & Adrenal Health", color: "#f59e0b", bg: "#fef3c7",
    desc: "Specialized evaluation and treatment of adrenal conditions including Cushing's syndrome, Addison's disease, and adrenal masses.",
    features: ["24hr Urine Cortisol", "Salivary Cortisol Test", "ACTH Stimulation", "MRI Guided Care"],
  },
  {
    icon: Shield, title: "Osteoporosis & Bone", sub: "DEXA Scan & Treatment", color: "#10b981", bg: "#d1fae5",
    desc: "Comprehensive bone health evaluation with DEXA densitometry, fracture risk assessment, and evidence-based treatment plans.",
    features: ["DEXA Scan", "Fracture Risk Score", "Vitamin D Protocols", "Bisphosphonate Therapy"],
  },
  {
    icon: Heart, title: "Pituitary Disorders", sub: "Growth Hormone & Prolactin", color: "#f43f5e", bg: "#ffe4e6",
    desc: "Expert management of pituitary tumors, growth hormone deficiency, prolactinomas, and acromegaly with MRI-guided care.",
    features: ["GH Testing", "Prolactin Management", "MRI Protocol", "Dopamine Agonists"],
  },
  {
    icon: Syringe, title: "Hormone Therapy", sub: "Replacement & Optimization", color: "#6366f1", bg: "#e0e7ff",
    desc: "Personalized bioidentical hormone replacement therapy for menopause, andropause, and hormonal deficiency states.",
    features: ["Hormone Profiling", "Bioidentical HRT", "Testosterone Therapy", "Menopause Care"],
  },
];

export function ServicesGrid() {
  return (
    <section className="section bg-white" style={{ position:"relative", overflow:"hidden" }}>
      <MeshBackground variant="default" />
      <SectionGlow color="rgba(20,184,166,0.05)" size="60%" />
      <div className="blob-sky pointer-events-none" style={{ width: "600px", height: "600px", top: "-10%", right: "-8%" }} />
      <div className="container relative z-10">

        {/* Section header */}
        <FadeIn>
          <div className="section-header">
            <span className="section-label"><Activity className="w-4 h-4" /> Our Specializations</span>
            <h2 className="heading h2">Comprehensive <span className="grad-text">Care Areas</span></h2>
            <p className="lead" style={{ textAlign: "center" }}>
              Each service is delivered with precision diagnostics, evidence-based medicine, and deeply personalized care.
            </p>
          </div>
        </FadeIn>

        {/* 2-column equal-height card grid */}
        <StaggerContainer
          className="card-grid card-grid-2"
          staggerDelay={0.07}
          style={{ gap: "1.5rem" } as React.CSSProperties}
        >
          {services.map((s, i) => (
            <StaggerItem key={i}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="card group relative overflow-hidden"
                style={{
                  padding: "2rem",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                }}
              >
                {/* Top accent on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{ background: `linear-gradient(90deg,${s.color},${s.color}44)` }}
                />

                {/* Header row */}
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1.25rem" }}>
                  <div
                    className="flex-shrink-0 rounded-2xl flex items-center justify-center"
                    style={{ width: "56px", height: "56px", background: s.bg }}
                  >
                    <s.icon className="w-7 h-7" style={{ color: s.color }} />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: "'Outfit',sans-serif",
                        fontWeight: 800,
                        fontSize: "1.0625rem",
                        color: "var(--text-primary)",
                        lineHeight: 1.25,
                        marginBottom: "0.25rem",
                      }}
                    >
                      {s.title}
                    </h3>
                    <p style={{ fontSize: "0.8125rem", fontWeight: 700, color: s.color }}>
                      {s.sub}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.7, flex: 1 }}>
                  {s.desc}
                </p>

                {/* Feature list */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "0.5rem 1rem",
                  }}
                >
                  {s.features.map((f, fi) => (
                    <div key={fi} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <div
                        style={{
                          width: "6px", height: "6px",
                          borderRadius: "50%",
                          flexShrink: 0,
                          background: s.color,
                        }}
                      />
                      <span style={{ fontSize: "0.8125rem", color: "var(--text-secondary)" }}>{f}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
