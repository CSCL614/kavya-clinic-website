"use client";
import { motion } from "framer-motion";
import { AnimatedCounter, FadeIn } from "@/components/Animations";

import { Users, Clock, Activity, FileText, Award, Star } from "lucide-react";

const stats = [
  { value:10000, suffix:"+", label:"Patients Treated", icon: Users, color: "#0ea5e9" },
  { value:15,    suffix:"+", label:"Years Experience", icon: Clock, color: "#14b8a6" },
  { value:98,    suffix:"%", label:"Success Rate", icon: Activity, color: "#8b5cf6" },
  { value:30,    suffix:"+", label:"Research Papers", icon: FileText, color: "#f43f5e" },
  { value:25,    suffix:"+", label:"Awards Won", icon: Award, color: "#f59e0b" },
  { value:4.9,   suffix:"/5", label:"Patient Rating", icon: Star, color: "#ec4899", decimals:1 },
];

export function AboutStats() {
  return (
    <section className="section-sm bg-sky">
      <div className="blob-teal w-[500px] h-[400px] top-0 right-0 opacity-40 pointer-events-none" />
      <div className="container relative z-10">
        <FadeIn className="text-center mb-12">
          <h2 className="heading h2 mb-3">Numbers That <span className="grad-text">Speak</span></h2>
          <p className="lead">15 years of transforming lives through expert hormonal care.</p>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((s, i) => (
            <motion.div key={i}
              initial={{ opacity:0, y:22 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }} transition={{ delay:i*0.07 }}
              whileHover={{ y:-5 }}
              className="card p-6 text-center flex flex-col items-center justify-center h-full"
            >
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 relative" style={{ background: `${s.color}15` }}>
                <div className="absolute inset-0 rounded-2xl opacity-50" style={{ boxShadow: `0 0 20px ${s.color}40` }} />
                <s.icon className="w-6 h-6 relative z-10" style={{ color: s.color }} />
              </div>
              <div className="heading h3 grad-text" style={{ fontFamily:"'Outfit',sans-serif" }}>
                <AnimatedCounter target={s.value} suffix={s.suffix} decimals={(s as { decimals?: number }).decimals} />
              </div>
              <div className="text-sm font-semibold mt-1.5" style={{ color:"var(--text-secondary)" }}>{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
