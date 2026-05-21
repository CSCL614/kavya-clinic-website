"use client";
import { useState, useRef, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { MoveHorizontal, ImageIcon } from "lucide-react";

const cases = [
  {
    id: 1,
    label: "Thyroid Goiter",
    category: "Thyroid",
    beforeLabel: "Before Treatment",
    afterLabel: "6 Months After",
    description:
      "Significant reduction in thyroid size after targeted medical therapy and lifestyle intervention.",
    beforeGradient: "from-red-900/80 via-orange-900/60 to-navy",
    afterGradient: "from-teal-900/80 via-cyan-900/60 to-navy",
    color: "#22d3ee",
  },
  {
    id: 2,
    label: "Diabetes Control",
    category: "Diabetes",
    beforeLabel: "HbA1c: 11.2%",
    afterLabel: "HbA1c: 6.4%",
    description:
      "Dramatic HbA1c improvement from 11.2% to 6.4% within 3 months of personalized care.",
    beforeGradient: "from-red-900/80 via-rose-900/60 to-navy",
    afterGradient: "from-emerald-900/80 via-teal-900/60 to-navy",
    color: "#2dd4bf",
  },
  {
    id: 3,
    label: "PCOD Management",
    category: "Women's Health",
    beforeLabel: "Before Program",
    afterLabel: "After 4 Months",
    description:
      "Hormonal regularization and weight loss of 12kg achieved through our holistic PCOD protocol.",
    beforeGradient: "from-purple-900/80 via-violet-900/60 to-navy",
    afterGradient: "from-pink-900/80 via-rose-900/60 to-navy",
    color: "#f472b6",
  },
  {
    id: 4,
    label: "Obesity Management",
    category: "Metabolic",
    beforeLabel: "BMI: 38",
    afterLabel: "BMI: 26",
    description:
      "34kg weight loss over 6 months using GLP-1 therapy combined with structured lifestyle coaching.",
    beforeGradient: "from-orange-900/80 via-amber-900/60 to-navy",
    afterGradient: "from-lime-900/80 via-green-900/60 to-navy",
    color: "#a78bfa",
  },
];

function ComparisonSlider({ beforeGradient, afterGradient, beforeLabel, afterLabel }: {
  beforeGradient: string;
  afterGradient: string;
  beforeLabel: string;
  afterLabel: string;
}) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updateSlider = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pos = ((clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(95, Math.max(5, pos)));
  }, []);

  const handleMouseDown = () => { isDragging.current = true; };
  const handleMouseUp = () => { isDragging.current = false; };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) updateSlider(e.clientX);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    updateSlider(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-64 rounded-2xl overflow-hidden cursor-col-resize select-none"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* Before */}
      <div
        className={`absolute inset-0 flex items-end p-4 bg-gradient-to-br ${beforeGradient}`}
        style={{ background: "linear-gradient(135deg, #3d0000, #1a0a00, #020818)" }}
      >
        <span
          className="text-xs font-bold px-3 py-1 rounded-full"
          style={{
            background: "rgba(239,68,68,0.2)",
            border: "1px solid rgba(239,68,68,0.4)",
            color: "#ef4444",
          }}
        >
          {beforeLabel}
        </span>
      </div>
      {/* After */}
      <div
        className="absolute inset-0 flex items-end p-4"
        style={{
          clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
          background: "linear-gradient(135deg, #003d2a, #001a14, #020818)",
        }}
      >
        <span
          className="text-xs font-bold px-3 py-1 rounded-full"
          style={{
            background: "rgba(34,211,238,0.2)",
            border: "1px solid rgba(34,211,238,0.4)",
            color: "#22d3ee",
          }}
        >
          {afterLabel}
        </span>
      </div>

      {/* Labels overlay */}
      <div className="absolute top-3 left-3 text-xs font-bold text-red-400 opacity-80">BEFORE</div>
      <div className="absolute top-3 right-3 text-xs font-bold text-cyan-400 opacity-80">AFTER</div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5"
        style={{
          left: `${sliderPos}%`,
          background: "linear-gradient(to bottom, #22d3ee, #2dd4bf)",
          boxShadow: "0 0 10px rgba(34,211,238,0.8)",
        }}
      />
      {/* Handle */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center z-10"
        style={{
          left: `${sliderPos}%`,
          background: "linear-gradient(135deg, #22d3ee, #2dd4bf)",
          boxShadow: "0 0 20px rgba(34,211,238,0.6)",
        }}
      >
        <MoveHorizontal className="w-5 h-5 text-[#020818]" />
      </div>

      {/* Placeholder visual content */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-20">
        <ImageIcon className="w-16 h-16 text-white" />
      </div>
    </div>
  );
}

export function BeforeAfterSection() {
  const [activeCase, setActiveCase] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      id="results"
      className="relative py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #020818 0%, #060f2a 100%)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(167,139,250,0.07) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
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
              background: "rgba(167, 139, 250, 0.1)",
              border: "1px solid rgba(167, 139, 250, 0.25)",
              color: "#a78bfa",
            }}
          >
            <ImageIcon className="w-4 h-4" />
            Real Results
          </div>
          <h2
            className="text-4xl lg:text-6xl font-black mb-6"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Transformative{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #22d3ee, #2dd4bf)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Patient Outcomes
            </span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Real results from our patients. Drag the slider to see the transformation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Case selector */}
          <div className="space-y-4">
            {cases.map((c, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setActiveCase(i)}
                whileHover={{ x: 4 }}
                className="w-full text-left p-5 rounded-2xl transition-all duration-300"
                style={{
                  background: activeCase === i
                    ? `rgba(${c.color === "#22d3ee" ? "34,211,238" : c.color === "#2dd4bf" ? "45,212,191" : c.color === "#f472b6" ? "244,114,182" : "167,139,250"},0.1)`
                    : "rgba(6,15,42,0.6)",
                  border: `1px solid ${activeCase === i ? c.color + "40" : "rgba(255,255,255,0.06)"}`,
                }}
              >
                <div
                  className="text-xs font-bold mb-1"
                  style={{ color: c.color }}
                >
                  {c.category}
                </div>
                <div className="text-white font-bold">{c.label}</div>
                <div className="text-white/50 text-sm mt-1">{c.description}</div>
              </motion.button>
            ))}
          </div>

          {/* Slider — large */}
          <div className="lg:col-span-2">
            <motion.div
              key={activeCase}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl overflow-hidden"
              style={{
                border: "1px solid rgba(34,211,238,0.15)",
                background: "rgba(6,15,42,0.8)",
              }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3
                      className="text-xl font-black text-white"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      {cases[activeCase].label}
                    </h3>
                    <p className="text-white/50 text-sm mt-1">
                      {cases[activeCase].description}
                    </p>
                  </div>
                  <div
                    className="text-xs font-bold px-3 py-1.5 rounded-full"
                    style={{
                      background: `${cases[activeCase].color}15`,
                      border: `1px solid ${cases[activeCase].color}30`,
                      color: cases[activeCase].color,
                    }}
                  >
                    {cases[activeCase].category}
                  </div>
                </div>

                <ComparisonSlider
                  beforeGradient={cases[activeCase].beforeGradient}
                  afterGradient={cases[activeCase].afterGradient}
                  beforeLabel={cases[activeCase].beforeLabel}
                  afterLabel={cases[activeCase].afterLabel}
                />

                <p className="text-center text-white/30 text-xs mt-4">
                  ← Drag slider to compare →
                </p>
              </div>
            </motion.div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mt-4">
              {[
                { label: "Cases Treated", value: "10,000+" },
                { label: "Avg. Improvement", value: "87%" },
                { label: "Patient Satisfaction", value: "98%" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="text-center p-4 rounded-2xl"
                  style={{
                    background: "rgba(6,15,42,0.6)",
                    border: "1px solid rgba(34,211,238,0.1)",
                  }}
                >
                  <div
                    className="text-2xl font-black"
                    style={{
                      background: "linear-gradient(135deg, #22d3ee, #2dd4bf)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      fontFamily: "'Outfit', sans-serif",
                    }}
                  >
                    {s.value}
                  </div>
                  <div className="text-white/40 text-xs mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
