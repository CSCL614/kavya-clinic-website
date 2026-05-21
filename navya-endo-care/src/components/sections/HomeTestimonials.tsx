"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { FadeIn } from "@/components/Animations";

const testimonials = [
  {
    name: "Priya Sharma",  age: 34, city: "Hyderabad",   cond: "Type 2 Diabetes",
    rating: 5, init: "PS", color: "#0ea5e9", bg: "#dbeafe",
    text: "Dr. Navya completely transformed my life. My HbA1c went from 11.2% to 6.4% in just 3 months! Her personalised approach gave me confidence about managing diabetes. I'm now off 2 of my 3 medications.",
  },
  {
    name: "Kavitha Reddy", age: 28, city: "Vijayawada",  cond: "PCOD & Infertility",
    rating: 5, init: "KR", color: "#ec4899", bg: "#fce7f3",
    text: "After 3 years of struggle with PCOD and failed fertility treatments, Dr. Navya's holistic approach made all the difference. I'm now a happy mother of twins! Her expertise is truly unmatched.",
  },
  {
    name: "Ramesh Babu",   age: 52, city: "Secunderabad",cond: "Thyroid Cancer",
    rating: 5, init: "RB", color: "#14b8a6", bg: "#ccfbf1",
    text: "Dr. Navya guided me through my thyroid cancer journey with such care and expertise. Two years later, I'm cancer-free. I cannot thank her and her team enough for their dedication.",
  },
  {
    name: "Sunita Mehta",  age: 45, city: "Warangal",    cond: "Hypothyroidism",
    rating: 5, init: "SM", color: "#8b5cf6", bg: "#ede9fe",
    text: "I had been on thyroid medication for 10 years with persistent symptoms nobody could explain. Dr. Navya did a complete hormonal workup and within 6 weeks I felt like an entirely new person.",
  },
  {
    name: "Arjun Nair",    age: 39, city: "Hyderabad",   cond: "Obesity — 34 kg lost",
    rating: 5, init: "AN", color: "#10b981", bg: "#d1fae5",
    text: "Lost 34 kg in 6 months under Dr. Navya's medical weight management program. I've reversed my pre-diabetes and my blood pressure is completely normal now. Truly life-changing!",
  },
];

/* ─── Individual card ─────────────────────────────── */
function TestimonialCard({
  t, featured = false,
}: { t: typeof testimonials[0]; featured?: boolean }) {
  return (
    <div
      className="card flex flex-col h-full"
      style={{
        padding: "1.75rem",
        border: featured ? `1.5px solid rgba(14,165,233,0.4)` : undefined,
        boxShadow: featured ? "0 20px 50px rgba(14,165,233,0.15)" : undefined,
        zIndex: featured ? 2 : 1,
      }}
    >
      {/* Quote icon */}
      <Quote className="w-7 h-7 mb-4" style={{ color: t.color, opacity: 0.25 }} />

      {/* Stars */}
      <div style={{ display: "flex", gap: "0.25rem", marginBottom: "0.875rem" }}>
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4" style={{ fill: "#fbbf24", color: "#fbbf24" }} />
        ))}
      </div>

      {/* Condition tag */}
      <span
        style={{
          display: "inline-block",
          fontSize: "0.75rem",
          fontWeight: 700,
          padding: "0.25rem 0.75rem",
          borderRadius: "9999px",
          background: t.bg,
          color: t.color,
          border: `1px solid ${t.color}28`,
          marginBottom: "1rem",
          width: "fit-content",
        }}
      >
        {t.cond}
      </span>

      {/* Testimonial text */}
      <p
        style={{
          fontSize: "0.9rem",
          color: "#475569",
          lineHeight: 1.7,
          flex: 1,
          marginBottom: "1.25rem",
        }}
      >
        &ldquo;{t.text}&rdquo;
      </p>

      {/* Author */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginTop: "auto" }}>
        <div
          style={{
            width: "40px", height: "40px",
            borderRadius: "50%",
            background: t.bg,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "0.8125rem", fontWeight: 700, color: t.color,
            flexShrink: 0,
          }}
        >
          {t.init}
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: "0.9375rem", color: "#0f172a" }}>{t.name}</div>
          <div style={{ fontSize: "0.8125rem", color: "#94a3b8" }}>Age {t.age} · {t.city}</div>
        </div>
      </div>
    </div>
  );
}

/* ─── Main section ────────────────────────────────── */
export function HomeTestimonials() {
  const [current, setCurrent] = useState(0);
  const [dir,     setDir]     = useState(1);
  const timer                 = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  const go   = (n: number, d: number) => { setDir(d); setCurrent(n); };
  const next = () => go((current + 1) % testimonials.length, 1);
  const prev = () => go((current - 1 + testimonials.length) % testimonials.length, -1);

  useEffect(() => {
    timer.current = setInterval(next, 5500);
    return () => clearInterval(timer.current);
  }, [current]);

  const visible = [0, 1, 2].map(o => testimonials[(current + o) % testimonials.length]);

  return (
    <section className="section" style={{ background: "#f8fafc", position: "relative", overflow: "hidden" }}>
      <div className="blob-violet pointer-events-none" style={{ width: "600px", height: "600px", bottom: "-5%", right: "20%", opacity: 0.5 }} />
      <div className="container relative z-10">

        {/* Section header */}
        <FadeIn>
          <div className="section-header">
            <span className="section-label"><Star className="w-4 h-4" /> Patient Stories</span>
            <h2 className="heading h2">What Our <span className="grad-text">Patients</span> Say</h2>
            <p className="lead" style={{ textAlign: "center" }}>
              Over 10,000 patients have transformed their lives under Dr. Navya&apos;s expert care.
            </p>
          </div>
        </FadeIn>

        {/* Desktop 3-column */}
        <div className="hidden md:grid md:grid-cols-3 gap-5 mb-10" style={{ alignItems: "stretch" }}>
          <AnimatePresence mode="popLayout">
            {visible.map((t, i) => (
              <motion.div key={`${current}-${i}`}
                initial={{ opacity: 0, x: dir * 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -dir * 50 }}
                transition={{ duration: 0.42, delay: i * 0.07 }}
                style={{ height: "100%" }}
              >
                <TestimonialCard t={t} featured={i === 1} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Mobile single card */}
        <div className="md:hidden mb-10">
          <AnimatePresence mode="wait">
            <motion.div key={current}
              initial={{ opacity: 0, x: dir * 55 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -dir * 55 }}
              transition={{ duration: 0.38 }}
            >
              <TestimonialCard t={testimonials[current]} featured />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <motion.button
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
            onClick={() => { clearInterval(timer.current); prev(); }}
            style={{
              width: "44px", height: "44px",
              borderRadius: "50%",
              background: "#e0f2fe",
              border: "1px solid rgba(14,165,233,0.22)",
              color: "#0ea5e9",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>

          {/* Dot indicators */}
          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { clearInterval(timer.current); setDir(i > current ? 1 : -1); setCurrent(i); }}
                style={{
                  height: "8px",
                  width: current === i ? "24px" : "8px",
                  borderRadius: "9999px",
                  background: current === i
                    ? "linear-gradient(90deg,#0ea5e9,#14b8a6)"
                    : "rgba(14,165,233,0.2)",
                  transition: "all 0.3s ease",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                }}
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
            onClick={() => { clearInterval(timer.current); next(); }}
            style={{
              width: "44px", height: "44px",
              borderRadius: "50%",
              background: "#e0f2fe",
              border: "1px solid rgba(14,165,233,0.22)",
              color: "#0ea5e9",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
