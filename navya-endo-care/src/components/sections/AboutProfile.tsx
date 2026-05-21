"use client";
import { motion } from "framer-motion";
import { GraduationCap, Award, Star, BookOpen, MapPin } from "lucide-react";
import Image from "next/image";
import { FadeIn } from "@/components/Animations";

const creds = [
  { icon: GraduationCap, label: "MBBS — AIIMS Delhi (Gold Medalist)",    color: "#0ea5e9", bg: "rgba(14,165,233,0.1)" },
  { icon: BookOpen,      label: "MD Internal Medicine — JIPMER",          color: "#14b8a6", bg: "rgba(20,184,166,0.1)" },
  { icon: Award,         label: "DM Endocrinology — PGI Chandigarh",      color: "#8b5cf6", bg: "rgba(139,92,246,0.1)" },
  { icon: Star,          label: "Fellowship — Mayo Clinic, USA",           color: "#f59e0b", bg: "rgba(245,158,11,0.1)" },
  { icon: MapPin,        label: "Banjara Hills, Hyderabad",               color: "#f43f5e", bg: "rgba(244,63,94,0.1)" },
];

const skills = [
  { name: "Diabetes Management",   level: 99 },
  { name: "Thyroid Care",          level: 98 },
  { name: "PCOD & Women's Health", level: 97 },
  { name: "Pituitary Disorders",   level: 95 },
  { name: "Bone & Adrenal Health", level: 94 },
];

export function AboutProfile() {
  return (
    <section className="section bg-white" style={{ position: "relative", overflow: "hidden" }}>
      <div className="blob-sky w-[600px] h-[600px] -left-32 top-20 opacity-50 pointer-events-none absolute" />
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Image */}
          <FadeIn direction="left">
            <div className="relative flex justify-center w-full max-w-[420px] mx-auto">
              {/* Offset Frame */}
              <div className="absolute -inset-4 md:-inset-6 rounded-3xl border border-sky-200/50 bg-sky-50/50 -rotate-3 transition-transform duration-500 hover:rotate-0" />
              
              <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden"
                style={{
                  border: "4px solid white",
                  boxShadow: "0 25px 50px -12px rgba(14,165,233,0.25)",
                  background: "var(--bg-secondary)",
                }}>
                <Image src="/doctor-hero.png" alt="Dr. Navya" fill sizes="(max-width: 768px) 100vw, 420px" className="object-cover object-top" />
                <div className="absolute bottom-0 left-0 right-0 h-32"
                  style={{ background: "linear-gradient(to top, rgba(15,23,42,0.9), transparent)" }} />
                <div className="absolute bottom-6 left-6">
                  <p className="font-black text-2xl text-white mb-1" style={{ fontFamily:"'Outfit',sans-serif" }}>Dr. Navya</p>
                  <p className="text-sm font-bold text-sky-300">MBBS, MD, DM Endocrinology</p>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div animate={{ y:[0,-12,0] }} transition={{ duration:6, repeat:Infinity, ease:"easeInOut" }}
                className="absolute -top-6 -right-6 px-6 py-5 rounded-2xl backdrop-blur-md"
                style={{ background:"rgba(255,255,255,0.9)", border:"1.5px solid rgba(14,165,233,0.3)", boxShadow:"0 15px 35px rgba(14,165,233,0.15)" }}>
                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-teal-400" style={{ fontFamily:"'Outfit',sans-serif" }}>15+</div>
                <div className="text-sm font-bold mt-1 text-slate-500 uppercase tracking-wide">Years Exp</div>
              </motion.div>

              <motion.div animate={{ y:[0,-10,0] }} transition={{ duration:5.5, repeat:Infinity, ease:"easeInOut", delay:1 }}
                className="absolute -bottom-6 -left-6 px-6 py-5 rounded-2xl backdrop-blur-md"
                style={{ background:"rgba(255,255,255,0.9)", border:"1.5px solid rgba(20,184,166,0.3)", boxShadow:"0 15px 35px rgba(20,184,166,0.15)" }}>
                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-400" style={{ fontFamily:"'Outfit',sans-serif" }}>30+</div>
                <div className="text-sm font-bold mt-1 text-slate-500 uppercase tracking-wide">Publications</div>
              </motion.div>
            </div>
          </FadeIn>

          {/* Content */}
          <FadeIn direction="right" delay={0.1}>
            <span className="section-label"><Award className="w-4 h-4" /> Doctor Profile</span>
            <h2 className="heading h3 mb-5">
              Dr. Navya — <span className="grad-text">Senior Consultant Endocrinologist</span>
            </h2>
            <p className="lead mb-7">
              Dr. Navya is a nationally recognized endocrinologist with over 15 years of experience treating
              complex hormonal disorders. A gold medalist from AIIMS Delhi and fellowship-trained at Mayo
              Clinic, USA, she combines cutting-edge science with compassionate, personalized care.
            </p>

            {/* Credentials */}
            <div className="space-y-2.5 mb-8">
              {creds.map((c, i) => (
                <motion.div key={i}
                  initial={{ opacity:0, x:18 }} whileInView={{ opacity:1, x:0 }}
                  viewport={{ once:true }} transition={{ delay:i*0.07 }}
                  className="flex items-center gap-3 p-3.5 rounded-xl transition-colors"
                  style={{ background: c.bg, border:`1px solid ${c.color}22` }}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background:"var(--bg-primary)", boxShadow:`0 2px 8px ${c.color}25` }}>
                    <c.icon className="w-4 h-4" style={{ color:c.color }} />
                  </div>
                  <span className="text-sm font-semibold" style={{ color:"var(--text-primary)" }}>{c.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Skill bars */}
            <h4 className="font-black text-sm mb-4" style={{ fontFamily:"'Outfit',sans-serif", color:"var(--text-primary)" }}>
              Specialization Expertise
            </h4>
            <div className="space-y-4">
              {skills.map((s, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span style={{ color:"var(--text-muted)" }}>{s.name}</span>
                    <span className="font-bold" style={{ color:"#0ea5e9" }}>{s.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div className="skill-fill"
                      initial={{ width:0 }} whileInView={{ width:`${s.level}%` }}
                      viewport={{ once:true }} transition={{ duration:1.2, delay:i*0.1, ease:"easeOut" }} />
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
