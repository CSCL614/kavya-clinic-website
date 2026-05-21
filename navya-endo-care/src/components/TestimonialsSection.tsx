"use client";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    age: 34,
    location: "Hyderabad",
    condition: "Type 2 Diabetes",
    rating: 5,
    text: "Dr. Navya completely transformed my life. My HbA1c went from 11.2% to 6.4% in just 3 months! Her personalized approach and the way she explained everything made me confident about managing my diabetes. I'm off 2 of my 3 medications now.",
    avatar: "PS",
    color: "#22d3ee",
  },
  {
    name: "Kavitha Reddy",
    age: 28,
    location: "Vijayawada",
    condition: "PCOD & Infertility",
    rating: 5,
    text: "After 3 years of struggle with PCOD and failed fertility treatments elsewhere, Dr. Navya's holistic approach made all the difference. I'm now a happy mother of twins! Her expertise in hormonal health is truly unmatched in the region.",
    avatar: "KR",
    color: "#f472b6",
  },
  {
    name: "Ramesh Babu",
    age: 52,
    location: "Secunderabad",
    condition: "Thyroid Cancer",
    rating: 5,
    text: "When I was diagnosed with papillary thyroid cancer, I was devastated. Dr. Navya guided me through the entire journey from surgery to RAI therapy with such care and expertise. It's been 2 years and I'm cancer-free. She's a blessing.",
    avatar: "RB",
    color: "#2dd4bf",
  },
  {
    name: "Sunita Mehta",
    age: 45,
    location: "Warangal",
    condition: "Hypothyroidism",
    rating: 5,
    text: "I had been on thyroid medication for 10 years with persistent symptoms no one could explain. Dr. Navya did a complete hormonal workup, adjusted my treatment, and within 6 weeks I felt like a completely different person. Incredible!",
    avatar: "SM",
    color: "#a78bfa",
  },
  {
    name: "Arjun Nair",
    age: 39,
    location: "Hyderabad",
    condition: "Obesity & Metabolic Syndrome",
    rating: 5,
    text: "Lost 34kg in 6 months under Dr. Navya's medical weight management program. She combined GLP-1 therapy with diet coaching and regular monitoring. I've reversed my pre-diabetes and my blood pressure is now normal. Life-changing!",
    avatar: "AN",
    color: "#34d399",
  },
  {
    name: "Deepa Iyer",
    age: 31,
    location: "Nizamabad",
    condition: "Addison's Disease",
    rating: 5,
    text: "Being diagnosed with Addison's disease was scary. Dr. Navya's thorough evaluation and clear explanation of my condition put me at ease. Her steroid management protocol has kept me stable for 2 years. Best endocrinologist I've ever seen.",
    avatar: "DI",
    color: "#fb923c",
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    autoPlayRef.current = setInterval(next, 5000);
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, []);

  const handleManualNav = (fn: () => void) => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    fn();
    autoPlayRef.current = setInterval(next, 5000);
  };

  const visibleTestimonials = [
    testimonials[current],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ];

  return (
    <section
      id="testimonials"
      className="relative py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #060f2a 0%, #020818 100%)" }}
    >
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 14, repeat: Infinity }}
          className="absolute bottom-0 left-1/4 w-[700px] h-[700px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(34,211,238,0.05) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{
              background: "rgba(34, 211, 238, 0.1)",
              border: "1px solid rgba(34, 211, 238, 0.25)",
              color: "#22d3ee",
            }}
          >
            <Star className="w-4 h-4" />
            Patient Stories
          </div>
          <h2
            className="text-4xl lg:text-6xl font-black mb-6"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            What Our{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #22d3ee, #2dd4bf)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Patients
            </span>{" "}
            Say
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Over 10,000 patients have transformed their lives under Dr. Navya&apos;s expert care.
          </p>
        </motion.div>

        {/* Testimonials carousel */}
        <div className="relative">
          {/* Desktop — 3 visible */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {visibleTestimonials.map((t, i) => (
                <motion.div
                  key={`${current}-${i}`}
                  initial={{ opacity: 0, x: direction * 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -direction * 60 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative p-6 rounded-3xl"
                  style={{
                    background: i === 1
                      ? "rgba(34,211,238,0.08)"
                      : "rgba(6,15,42,0.6)",
                    border: `1px solid ${i === 1 ? "rgba(34,211,238,0.25)" : "rgba(255,255,255,0.08)"}`,
                    backdropFilter: "blur(20px)",
                    transform: i === 1 ? "scale(1.02)" : "scale(1)",
                    boxShadow: i === 1 ? "0 20px 60px rgba(34,211,238,0.1)" : "none",
                  }}
                >
                  {/* Quote icon */}
                  <Quote
                    className="w-8 h-8 mb-4 opacity-30"
                    style={{ color: t.color }}
                  />

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, si) => (
                      <motion.div
                        key={si}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: i * 0.1 + si * 0.05 }}
                      >
                        <Star
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      </motion.div>
                    ))}
                  </div>

                  {/* Condition badge */}
                  <div
                    className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-4"
                    style={{
                      background: `${t.color}15`,
                      border: `1px solid ${t.color}30`,
                      color: t.color,
                    }}
                  >
                    {t.condition}
                  </div>

                  {/* Text */}
                  <p className="text-white/70 text-sm leading-relaxed mb-6">
                    &ldquo;{t.text}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center font-black text-sm"
                      style={{
                        background: `linear-gradient(135deg, ${t.color}40, ${t.color}20)`,
                        border: `1px solid ${t.color}40`,
                        color: t.color,
                      }}
                    >
                      {t.avatar}
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">{t.name}</div>
                      <div className="text-white/40 text-xs">
                        Age {t.age} · {t.location}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Mobile — single */}
          <div className="md:hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 60 }}
                transition={{ duration: 0.5 }}
                className="p-6 rounded-3xl"
                style={{
                  background: "rgba(6,15,42,0.8)",
                  border: "1px solid rgba(34,211,238,0.2)",
                }}
              >
                <Quote className="w-8 h-8 text-cyan-400 opacity-30 mb-4" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonials[current].rating }).map((_, si) => (
                    <Star key={si} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  &ldquo;{testimonials[current].text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-black text-sm"
                    style={{ background: "rgba(34,211,238,0.2)", color: "#22d3ee" }}
                  >
                    {testimonials[current].avatar}
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">{testimonials[current].name}</div>
                    <div className="text-white/40 text-xs">
                      {testimonials[current].condition} · {testimonials[current].location}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Nav buttons */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleManualNav(prev)}
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all"
              style={{
                background: "rgba(34,211,238,0.1)",
                border: "1px solid rgba(34,211,238,0.25)",
              }}
            >
              <ChevronLeft className="w-5 h-5 text-cyan-400" />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: current === i ? "24px" : "8px",
                    height: "8px",
                    background: current === i
                      ? "linear-gradient(90deg, #22d3ee, #2dd4bf)"
                      : "rgba(255,255,255,0.2)",
                  }}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleManualNav(next)}
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{
                background: "rgba(34,211,238,0.1)",
                border: "1px solid rgba(34,211,238,0.25)",
              }}
            >
              <ChevronRight className="w-5 h-5 text-cyan-400" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
