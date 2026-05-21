"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Star,
  Shield,
  Award,
  ChevronDown,
  Activity,
  Users,
  Clock,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";

const stats = [
  { label: "Patients Treated", value: 10000, suffix: "+" },
  { label: "Years Experience", value: 15, suffix: "+" },
  { label: "Success Rate", value: 98, suffix: "%" },
  { label: "Awards Won", value: 25, suffix: "+" },
];

const trustBadges = [
  { icon: Shield, text: "NABH Accredited" },
  { icon: Award, text: "Best Endocrinologist 2024" },
  { icon: Star, text: "4.9★ Patient Rating" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 2000;
          const step = (target / duration) * 16;
          const timer = setInterval(() => {
            start += step;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-3xl font-black" style={{
      fontFamily: "'Outfit', sans-serif",
      background: "linear-gradient(135deg, #22d3ee, #2dd4bf)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    }}>
      {count.toLocaleString()}{suffix}
    </div>
  );
}

const floatingCards = [
  {
    icon: Activity,
    title: "Live Monitoring",
    subtitle: "Real-time health tracking",
    color: "#22d3ee",
    position: { top: "10%", right: "-5%" },
  },
  {
    icon: CheckCircle,
    title: "98% Success Rate",
    subtitle: "Evidence-based outcomes",
    color: "#2dd4bf",
    position: { bottom: "25%", right: "-8%" },
  },
  {
    icon: Users,
    title: "10,000+ Patients",
    subtitle: "Trusted by families",
    color: "#a78bfa",
    position: { bottom: "10%", left: "5%" },
  },
  {
    icon: Clock,
    title: "Same-Day Results",
    subtitle: "Advanced diagnostics",
    color: "#f472b6",
    position: { top: "30%", left: "-8%" },
  },
];

export function HeroSection() {
  const handleScrollDown = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #020818 0%, #060f2a 50%, #0a1a3e 100%)",
      }}
    >
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(34,211,238,0.12) 0%, transparent 70%)",
          }}
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-40 -right-40 w-[700px] h-[700px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(45,212,191,0.1) 0%, transparent 70%)",
          }}
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], y: [0, -40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(167,139,250,0.05) 0%, transparent 70%)",
          }}
        />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(34,211,238,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 3 === 0 ? "#22d3ee" : i % 3 === 1 ? "#2dd4bf" : "#a78bfa",
              opacity: 0.4,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)]">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 w-fit mb-8 px-4 py-2 rounded-full text-sm font-medium"
              style={{
                background: "rgba(34, 211, 238, 0.1)",
                border: "1px solid rgba(34, 211, 238, 0.25)",
                color: "#22d3ee",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              India&apos;s Most Trusted Endocrinology Clinic
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl lg:text-7xl font-black leading-tight mb-6"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Redefining{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #22d3ee, #2dd4bf, #a78bfa)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Hormone
              </span>
              <br />
              Health{" "}
              <span className="relative inline-block">
                <span style={{ color: "white" }}>Care</span>
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-1 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  style={{
                    background: "linear-gradient(90deg, #22d3ee, #2dd4bf)",
                  }}
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-white/60 leading-relaxed mb-8 max-w-xl"
            >
              Expert care for diabetes, thyroid disorders, PCOD, osteoporosis,
              and all hormonal conditions. Personalized treatment plans backed by
              cutting-edge diagnostics and 15+ years of specialized expertise.
            </motion.p>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              {trustBadges.map((badge, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "rgba(255,255,255,0.7)",
                  }}
                >
                  <badge.icon className="w-3.5 h-3.5 text-cyan-400" />
                  {badge.text}
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                onClick={() =>
                  document
                    .getElementById("appointment")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn-gradient flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-bold shadow-lg"
                style={{ boxShadow: "0 20px 40px rgba(34, 211, 238, 0.3)" }}
              >
                <span className="relative z-10">Book Appointment</span>
                <ArrowRight className="w-5 h-5 relative z-10" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() =>
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn-outline-cyan flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-bold"
              >
                Meet Dr. Navya
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6"
            >
              {stats.map((stat, i) => (
                <div key={i} className="text-center sm:text-left">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  <div className="text-xs text-white/50 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Doctor Image with floating cards */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative hidden lg:flex justify-center items-center"
          >
            {/* Glow ring */}
            <div
              className="absolute inset-0 rounded-full opacity-20"
              style={{
                background:
                  "radial-gradient(circle, rgba(34,211,238,0.5) 0%, transparent 65%)",
              }}
            />

            {/* Rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-[520px] h-[520px] rounded-full"
              style={{
                border: "1px solid rgba(34,211,238,0.15)",
                borderStyle: "dashed",
              }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute w-[600px] h-[600px] rounded-full"
              style={{
                border: "1px solid rgba(45,212,191,0.1)",
                borderStyle: "dashed",
              }}
            />

            {/* Doctor image container */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-[420px] h-[520px] rounded-3xl overflow-hidden"
              style={{
                background: "linear-gradient(180deg, rgba(34,211,238,0.1), rgba(45,212,191,0.05))",
                border: "1px solid rgba(34,211,238,0.2)",
                boxShadow: "0 40px 80px rgba(0,0,0,0.6), 0 0 60px rgba(34,211,238,0.15)",
              }}
            >
              <Image
                src="/doctor-hero.png"
                alt="Dr. Navya — Expert Endocrinologist"
                fill
                className="object-cover object-top"
                priority
              />
              {/* Gradient overlay at bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 h-32"
                style={{
                  background:
                    "linear-gradient(to top, rgba(2,8,24,0.9), transparent)",
                }}
              />
              <div className="absolute bottom-6 left-6">
                <div className="text-white font-bold text-lg" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  Dr. Navya
                </div>
                <div className="text-cyan-400 text-sm">MBBS, MD, DM Endocrinology</div>
              </div>
            </motion.div>

            {/* Floating cards */}
            {floatingCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.15 }}
                style={{
                  position: "absolute",
                  ...card.position,
                }}
                className="animate-float"
                // offset each card's animation
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.5,
                  }}
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl min-w-[160px]"
                  style={{
                    background: "rgba(6,15,42,0.8)",
                    border: `1px solid ${card.color}30`,
                    backdropFilter: "blur(20px)",
                    boxShadow: `0 10px 30px rgba(0,0,0,0.4), 0 0 20px ${card.color}20`,
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${card.color}20`, border: `1px solid ${card.color}40` }}
                  >
                    <card.icon className="w-5 h-5" style={{ color: card.color }} />
                  </div>
                  <div>
                    <div className="text-white text-xs font-bold">{card.title}</div>
                    <div className="text-white/50 text-xs">{card.subtitle}</div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors"
      >
        <span className="text-xs tracking-widest uppercase">Explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </section>
  );
}
