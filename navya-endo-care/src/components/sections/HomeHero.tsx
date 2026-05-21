"use client";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight, Shield, Award, Star, Activity,
  Users, CheckCircle, Heart, Clock,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnimatedCounter } from "@/components/Animations";
import { LightRays, FloatingOrbs } from "@/components/BackgroundEffects";

/* ─── Static data (defined outside component to prevent re-creation) ── */
const STATS = [
  { label: "Patients Treated", value: 10000, suffix: "+" },
  { label: "Years Experience",  value: 15,    suffix: "+" },
  { label: "Success Rate",      value: 98,    suffix: "%" },
  { label: "Awards Won",        value: 25,    suffix: "+" },
];

const TRUST_BADGES = [
  { icon: Shield, text: "NABH Accredited" },
  { icon: Award,  text: "Best Endo 2024"  },
  { icon: Star,   text: "4.9★ Rating"     },
  { icon: Clock,  text: "Same-Day Appt."  },
];

const FLOAT_CARDS = [
  { icon: Activity,     title: "Real-time Monitoring", sub: "CGM & smart tracking",   color: "#0ea5e9", bg: "#dbeafe", top: "8%",  right: "-4%", left: undefined, bottom: undefined, dur: 3.8 },
  { icon: CheckCircle,  title: "98% Success Rate",      sub: "Evidence-based care",   color: "#14b8a6", bg: "#ccfbf1", bottom: "30%", right: "-6%",left: undefined, top: undefined,  dur: 4.2 },
  { icon: Users,        title: "10,000+ Patients",      sub: "Trusted by families",   color: "#8b5cf6", bg: "#ede9fe", bottom: "6%",  left: "2%",  right: undefined, top: undefined,  dur: 5.0 },
  { icon: Heart,        title: "Compassionate Care",    sub: "Personalised approach", color: "#f43f5e", bg: "#ffe4e6", top: "32%",    left: "-4%", right: undefined, bottom: undefined, dur: 4.6 },
];



/* ─── FloatingCard ──────────────────────────────────────── */
function FloatingCard({
  icon: Icon, title, sub, color, bg, top, right, bottom, left, dur, delay,
}: {
  icon: React.ElementType; title: string; sub: string;
  color: string; bg: string;
  top?: string; right?: string; bottom?: string; left?: string;
  dur: number; delay: number;
}) {
  return (
    <motion.div
      className="absolute z-20"
      style={{ top, right, bottom, left, pointerEvents: "none" }}
      initial={{ opacity: 0, scale: 0.82, y: 8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1 + delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: dur, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          borderRadius: "1rem",
          background: "var(--bg-secondary)",
          border: "1px solid var(--border-light)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          boxShadow: "var(--shadow-md)",
          padding: "0.75rem 1rem",
          minWidth: "160px",
          willChange: "transform",
        }}
      >
        <div style={{
          width: "36px", height: "36px",
          borderRadius: "10px",
          background: bg,
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0,
        }}>
          <Icon style={{ width: 17, height: 17, color }} />
        </div>
        <div>
          <div style={{ fontSize: "0.8125rem", fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.2 }}>{title}</div>
          <div style={{ fontSize: "0.75rem", color: "var(--text-subtle)", marginTop: "2px" }}>{sub}</div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── HomeHero ──────────────────────────────────────────── */
export function HomeHero() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "var(--grad-hero)",
      }}
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid" style={{ opacity: 0.55, pointerEvents: "none" }} />

      {/* Light rays */}
      {!prefersReduced && <LightRays count={2} />}

      {/* Floating soft orbs */}
      {!prefersReduced && <FloatingOrbs count={2} />}

      {/* Ambient blobs */}
      <div className="blob-sky"  style={{ position:"absolute", width:600, height:600, top:"-10%",  left:"-8%",   opacity:0.7, pointerEvents:"none" }} />
      <div className="blob-teal" style={{ position:"absolute", width:500, height:500, bottom:"-8%", right:"-6%",  opacity:0.55,pointerEvents:"none" }} />
      <div className="blob-violet" style={{ position:"absolute", width:700, height:700, top:"50%", left:"50%", transform:"translate(-50%,-50%)", opacity:0.35, pointerEvents:"none" }} />

      {/* ── Main content grid ─────────────────────── */}
      <div className="container" style={{ position:"relative", zIndex:10, paddingTop:"2rem", paddingBottom:"4rem" }}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* ── LEFT ─────────────────────────────── */}
            <div style={{ display:"flex", flexDirection:"column", justifyContent:"center" }}>

              {/* Badge */}
              <motion.div
                initial={prefersReduced ? false : { opacity:0, y:14 }}
                animate={{ opacity:1, y:0 }}
                transition={{ duration:0.55 }}
                style={{ marginBottom:"1.25rem" }}
              >
                <span className="section-label" style={{ marginBottom:0, display:"inline-flex", alignItems:"center", gap:"0.5rem" }}>
                  <span style={{ width:8, height:8, borderRadius:"50%", background:"#0ea5e9", flexShrink:0, animation:"pulseRing 2.5s infinite" }} />
                  India&apos;s Most Trusted Endocrinology Clinic
                </span>
              </motion.div>

              {/* H1 */}
              <motion.h1
                className="heading h1"
                initial={prefersReduced ? false : { opacity:0, y:22 }}
                animate={{ opacity:1, y:0 }}
                transition={{ duration:0.7, delay:0.1 }}
                style={{ marginBottom:"1.25rem", lineHeight:1.06 }}
              >
                Advanced{" "}
                <span className="grad-text">Hormonal</span>
                <br />
                Health Care
                <motion.span
                  initial={prefersReduced ? false : { scaleX:0 }}
                  animate={{ scaleX:1 }}
                  transition={{ duration:0.85, delay:0.95, ease:[0.22,1,0.36,1] }}
                  style={{
                    display:"block", height:4, width:110, marginTop:"0.6rem",
                    borderRadius:9999, background:"linear-gradient(90deg,#0ea5e9,#14b8a6)",
                    transformOrigin:"left",
                  }}
                />
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                className="lead"
                initial={prefersReduced ? false : { opacity:0, y:16 }}
                animate={{ opacity:1, y:0 }}
                transition={{ duration:0.65, delay:0.2 }}
                style={{ marginBottom:"1.75rem", maxWidth:"46ch" }}
              >
                Expert care for diabetes, thyroid disorders, PCOD, osteoporosis, and all hormonal conditions —
                backed by 15+ years of specialized expertise and cutting-edge diagnostics.
              </motion.p>

              {/* Trust badges */}
              <motion.div
                initial={prefersReduced ? false : { opacity:0, y:12 }}
                animate={{ opacity:1, y:0 }}
                transition={{ duration:0.6, delay:0.3 }}
                style={{ display:"flex", flexWrap:"wrap", gap:"0.5rem", marginBottom:"1.75rem" }}
              >
                {TRUST_BADGES.map((b, i) => (
                  <span key={i} style={{
                    display:"inline-flex", alignItems:"center", gap:"0.375rem",
                    padding:"0.35rem 0.875rem", borderRadius:9999,
                    fontSize:"0.8125rem", fontWeight:600,
                    background:"rgba(14,165,233,0.07)",
                    border:"1px solid rgba(14,165,233,0.16)",
                    color:"#0284c7",
                  }}>
                    <b.icon style={{ width:14, height:14 }} />
                    {b.text}
                  </span>
                ))}
              </motion.div>

              {/* CTA buttons */}
              <motion.div
                initial={prefersReduced ? false : { opacity:0, y:12 }}
                animate={{ opacity:1, y:0 }}
                transition={{ duration:0.6, delay:0.38 }}
                style={{ display:"flex", flexWrap:"wrap", gap:"0.875rem", marginBottom:"3rem" }}
              >
                <Link href="/contact">
                  <motion.span
                    whileHover={prefersReduced ? {} : { scale:1.04, y:-2 }}
                    whileTap={prefersReduced ? {} : { scale:0.97 }}
                    className="btn btn-primary btn-lg"
                    style={{ display:"inline-flex" }}
                  >
                    Book Appointment <ArrowRight style={{ width:18, height:18 }} />
                  </motion.span>
                </Link>
                <Link href="/about">
                  <motion.span
                    whileHover={prefersReduced ? {} : { scale:1.03 }}
                    whileTap={prefersReduced ? {} : { scale:0.97 }}
                    className="btn btn-outline btn-lg"
                    style={{ display:"inline-flex" }}
                  >
                    Meet Dr. Navya
                  </motion.span>
                </Link>
              </motion.div>

              {/* Stats row */}
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t pt-6"
                initial={prefersReduced ? false : { opacity:0, y:16 }}
                animate={{ opacity:1, y:0 }}
                transition={{ duration:0.65, delay:0.52 }}
                style={{
                  borderColor: "rgba(14,165,233,0.12)",
                }}
              >
                {STATS.map((s, i) => (
                  <div key={i} style={{ minWidth:0 }}>
                    <div className="heading h3 grad-text" style={{ fontFamily:"'Outfit',sans-serif", lineHeight:1.05 }}>
                      <AnimatedCounter target={s.value} suffix={s.suffix} />
                    </div>
                    <div style={{ fontSize:"0.73rem", color:"#94a3b8", marginTop:"0.3rem", fontWeight:500, lineHeight:1.3 }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* ── RIGHT — Doctor image ──────────────── */}
            <motion.div
              initial={prefersReduced ? false : { opacity:0, x:40 }}
              animate={{ opacity:1, x:0 }}
              transition={{ duration:0.85, delay:0.28 }}
              className="hidden lg:flex relative justify-center items-center min-h-[540px]"
            >
              {/* Rotating rings */}
              {!prefersReduced && (
                <>
                  <motion.div
                    animate={{ rotate:360 }}
                    transition={{ duration:24, repeat:Infinity, ease:"linear" }}
                    style={{
                      position:"absolute", width:490, height:490, borderRadius:"50%",
                      border:"1.5px dashed rgba(14,165,233,0.18)", pointerEvents:"none",
                      willChange:"transform",
                    }}
                  />
                  <motion.div
                    animate={{ rotate:-360 }}
                    transition={{ duration:36, repeat:Infinity, ease:"linear" }}
                    style={{
                      position:"absolute", width:590, height:590, borderRadius:"50%",
                      border:"1px dashed rgba(20,184,166,0.12)", pointerEvents:"none",
                      willChange:"transform",
                    }}
                  />
                </>
              )}

              {/* Doctor card */}
              <motion.div
                animate={prefersReduced ? {} : { y:[0,-12,0] }}
                transition={{ duration:6, repeat:Infinity, ease:"easeInOut", repeatType:"mirror" }}
                style={{
                  position:"relative",
                  width:350, height:450,
                  borderRadius:26,
                  overflow:"hidden",
                  background: "var(--bg-secondary)",
                  border: "2px solid var(--border-light)",
                  boxShadow: "var(--shadow-lg)",
                  flexShrink:0,
                  willChange:"transform",
                }}
              >
                <Image
                  src="/doctor-hero.png"
                  alt="Dr. Navya — Senior Consultant Endocrinologist"
                  fill
                  sizes="(max-width: 768px) 100vw, 350px"
                  className="object-cover object-top"
                  priority
                />
                <div style={{
                  position:"absolute", bottom:0, left:0, right:0,
                  height:"6rem",
                  background: "linear-gradient(to top, var(--bg-primary), transparent)",
                }} />
                <div style={{ position:"absolute", bottom:"1.25rem", left:"1.25rem" }}>
                  <div style={{ fontFamily:"'Outfit',sans-serif", fontWeight:900, fontSize:"1.0625rem", color:"var(--text-primary)" }}>
                    Dr. Navya
                  </div>
                  <div style={{ fontSize:"0.8125rem", fontWeight:600, color:"#0ea5e9" }}>
                    MBBS · MD · DM Endocrinology
                  </div>
                </div>
              </motion.div>

              {/* Floating cards */}
              {FLOAT_CARDS.map((card, i) => (
                <FloatingCard key={i} {...card} delay={i * 0.22} />
              ))}
            </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      {!prefersReduced && (
        <motion.div
          initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:2 }}
          style={{
            position:"absolute", bottom:"1.75rem",
            left:"50%", transform:"translateX(-50%)",
            display:"flex", flexDirection:"column", alignItems:"center", gap:"0.5rem",
            color:"#cbd5e1",
          }}
        >
          <span style={{ fontSize:"0.6rem", letterSpacing:"0.2em", textTransform:"uppercase", fontWeight:700 }}>
            Scroll
          </span>
          <motion.div
            animate={{ y:[0,7,0] }}
            transition={{ duration:1.4, repeat:Infinity, ease:"easeInOut" }}
            style={{
              width:18, height:30, borderRadius:9999,
              border:"2px solid #bae6fd",
              display:"flex", alignItems:"flex-start", justifyContent:"center",
              paddingTop:5,
              willChange:"transform",
            }}
          >
            <div style={{ width:4, height:7, borderRadius:9999, background:"#38bdf8" }} />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
