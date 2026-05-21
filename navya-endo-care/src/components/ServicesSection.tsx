"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Activity,
  Heart,
  Brain,
  Syringe,
  Zap,
  Shield,
  Baby,
  Scale,
  ChevronRight,
} from "lucide-react";

const services = [
  {
    icon: Activity,
    title: "Diabetes Management",
    subtitle: "Type 1, Type 2 & Gestational",
    description:
      "Comprehensive diabetes care with CGM monitoring, insulin optimization, and lifestyle programs tailored to your unique metabolic profile.",
    features: ["CGM Integration", "Insulin Pump Therapy", "Dietary Counselling", "HbA1c Optimization"],
    color: "#22d3ee",
    gradient: "from-cyan-500/20 to-transparent",
  },
  {
    icon: Brain,
    title: "Thyroid Disorders",
    subtitle: "Hypo, Hyper & Nodules",
    description:
      "Advanced thyroid diagnostics and management including ultrasound-guided biopsies and radioiodine therapy for optimal thyroid health.",
    features: ["Thyroid Ultrasound", "Fine Needle Biopsy", "Radioiodine Therapy", "TSH Optimization"],
    color: "#2dd4bf",
    gradient: "from-teal-500/20 to-transparent",
  },
  {
    icon: Baby,
    title: "PCOD & Women's Health",
    subtitle: "Hormonal Balance & Fertility",
    description:
      "Expert PCOD management combining hormonal therapy, fertility support, and evidence-based lifestyle interventions.",
    features: ["Hormonal Profiling", "Ovulation Induction", "Anti-androgen Therapy", "Fertility Support"],
    color: "#f472b6",
    gradient: "from-pink-500/20 to-transparent",
  },
  {
    icon: Scale,
    title: "Obesity & Metabolism",
    subtitle: "Medical Weight Management",
    description:
      "Science-backed obesity treatment addressing underlying metabolic causes with pharmaceutical and behavioral interventions.",
    features: ["Body Composition Analysis", "GLP-1 Therapy", "Metabolic Panel", "Weight Loss Programs"],
    color: "#a78bfa",
    gradient: "from-violet-500/20 to-transparent",
  },
  {
    icon: Zap,
    title: "Adrenal Disorders",
    subtitle: "Cortisol & Adrenal Health",
    description:
      "Specialized evaluation and treatment of adrenal conditions including Cushing's syndrome, Addison's disease, and adrenal masses.",
    features: ["24hr Urine Cortisol", "Salivary Cortisol Test", "ACTH Stimulation", "MRI Guided Care"],
    color: "#fb923c",
    gradient: "from-orange-500/20 to-transparent",
  },
  {
    icon: Shield,
    title: "Osteoporosis & Bone",
    subtitle: "DEXA Scan & Treatment",
    description:
      "Comprehensive bone health evaluation with DEXA densitometry, fracture risk assessment, and evidence-based treatment plans.",
    features: ["DEXA Scan", "Fracture Risk Score", "Vitamin D Protocols", "Bisphosphonate Therapy"],
    color: "#34d399",
    gradient: "from-emerald-500/20 to-transparent",
  },
  {
    icon: Heart,
    title: "Pituitary Disorders",
    subtitle: "Growth Hormone & Prolactin",
    description:
      "Expert management of pituitary tumors, growth hormone deficiency, prolactinomas, and acromegaly with MRI-guided care.",
    features: ["Growth Hormone Testing", "Prolactin Management", "MRI Protocol", "Dopamine Agonists"],
    color: "#f43f5e",
    gradient: "from-rose-500/20 to-transparent",
  },
  {
    icon: Syringe,
    title: "Hormone Therapy",
    subtitle: "Replacement & Optimization",
    description:
      "Personalized bioidentical hormone replacement therapy for menopause, andropause, and hormonal deficiency states.",
    features: ["Hormone Profiling", "Bioidentical HRT", "Testosterone Therapy", "Menopause Care"],
    color: "#818cf8",
    gradient: "from-indigo-500/20 to-transparent",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="services"
      className="relative py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #020818 0%, #060f2a 100%)" }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 opacity-30"
          style={{ background: "linear-gradient(to bottom, transparent, #22d3ee)" }}
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{
              background: "rgba(34, 211, 238, 0.1)",
              border: "1px solid rgba(34, 211, 238, 0.25)",
              color: "#22d3ee",
            }}
          >
            <Activity className="w-4 h-4" />
            Specialized Care
          </div>
          <h2
            className="text-4xl lg:text-6xl font-black mb-6"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            World-Class{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #22d3ee, #2dd4bf)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Endocrinology
            </span>{" "}
            Services
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Comprehensive hormonal healthcare with cutting-edge diagnostics, personalized
            treatment plans, and world-class outcomes.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group rounded-3xl p-6 cursor-pointer overflow-hidden"
              style={{
                background: "rgba(6,15,42,0.6)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(10px)",
              }}
            >
              {/* Hover gradient overlay */}
              <motion.div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${service.color}10, transparent)`,
                }}
              />
              {/* Top gradient line */}
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${service.color}, transparent)` }}
              />

              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{
                    background: `${service.color}15`,
                    border: `1px solid ${service.color}30`,
                    boxShadow: `0 0 20px ${service.color}15`,
                  }}
                >
                  <service.icon className="w-7 h-7" style={{ color: service.color }} />
                </motion.div>

                {/* Title */}
                <h3
                  className="text-lg font-bold text-white mb-1"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {service.title}
                </h3>
                <p className="text-xs font-medium mb-3" style={{ color: service.color }}>
                  {service.subtitle}
                </p>

                {/* Description */}
                <p className="text-white/50 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((f, fi) => (
                    <div key={fi} className="flex items-center gap-2">
                      <div
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: service.color }}
                      />
                      <span className="text-xs text-white/50">{f}</span>
                    </div>
                  ))}
                </div>

                {/* Learn more */}
                <motion.div
                  className="mt-5 flex items-center gap-1 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ color: service.color }}
                >
                  Learn More <ChevronRight className="w-3 h-3" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
