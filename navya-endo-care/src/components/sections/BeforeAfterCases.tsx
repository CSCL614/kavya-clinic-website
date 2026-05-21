"use client";
import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { MoveHorizontal, ArrowRight } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/Animations";
import Link from "next/link";

const cases = [
  { id:1, cat:"Diabetes", label:"HbA1c Control",
    beforeLabel:"HbA1c: 11.2%", afterLabel:"HbA1c: 6.4%",
    desc:"Dramatic HbA1c improvement from 11.2% to 6.4% within 3 months of personalised care. Patient went off 2 medications.",
    metric:"3 Months", result:"42% reduction", color:"#0ea5e9",
    beforeBg:"linear-gradient(135deg,#fef2f2,#fff5f5,#ffffff)",
    afterBg:"linear-gradient(135deg,#f0fdf4,#ecfdf5,#ffffff)" },
  { id:2, cat:"Thyroid", label:"Thyroid Goiter",
    beforeLabel:"Large Goiter", afterLabel:"6 Months Later",
    desc:"Significant reduction in thyroid size after targeted medical therapy. Patient avoided surgery through timely intervention.",
    metric:"6 Months", result:"Avoided surgery", color:"#14b8a6",
    beforeBg:"linear-gradient(135deg,#fff7ed,#fffbeb,#ffffff)",
    afterBg:"linear-gradient(135deg,#f0fdfa,#f0fdf4,#ffffff)" },
  { id:3, cat:"PCOD", label:"Hormonal Balance",
    beforeLabel:"Irregular Cycles", afterLabel:"4 Months Later",
    desc:"Hormonal regularisation and 12kg weight loss achieved through holistic PCOD protocol with bioidentical hormones.",
    metric:"4 Months", result:"Regular cycles", color:"#ec4899",
    beforeBg:"linear-gradient(135deg,#fdf2f8,#fce7f3,#ffffff)",
    afterBg:"linear-gradient(135deg,#f5f3ff,#ede9fe,#ffffff)" },
  { id:4, cat:"Obesity", label:"Weight Management",
    beforeLabel:"BMI: 38", afterLabel:"BMI: 26",
    desc:"34kg weight loss over 6 months using GLP-1 therapy combined with structured lifestyle coaching and metabolic support.",
    metric:"6 Months", result:"34kg lost", color:"#8b5cf6",
    beforeBg:"linear-gradient(135deg,#fef9c3,#fefce8,#ffffff)",
    afterBg:"linear-gradient(135deg,#f0f9ff,#e0f2fe,#ffffff)" },
];

function Slider({ c }: { c: typeof cases[0] }) {
  const [pos, setPos] = useState(50);
  const ref           = useRef<HTMLDivElement>(null);
  const dragging      = useRef(false);

  const update = useCallback((clientX: number) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos(Math.min(95, Math.max(5, ((clientX - rect.left) / rect.width) * 100)));
  }, []);

  return (
    <div ref={ref}
      className="comparison-slider relative w-full h-60 rounded-2xl overflow-hidden"
      style={{ border:"1.5px solid rgba(14,165,233,0.15)", boxShadow:"var(--shadow-sm)" }}
      onMouseDown={() => { dragging.current = true; }}
      onMouseUp={() => { dragging.current = false; }}
      onMouseLeave={() => { dragging.current = false; }}
      onMouseMove={e => { if (dragging.current) update(e.clientX); }}
      onTouchMove={e => update(e.touches[0].clientX)}
    >
      {/* Before */}
      <div className="absolute inset-0 flex items-end p-4" style={{ background:c.beforeBg }}>
        <span className="text-xs font-bold px-3 py-1.5 rounded-full" style={{ background:"rgba(239,68,68,0.1)", border:"1px solid rgba(239,68,68,0.25)", color:"#ef4444" }}>
          {c.beforeLabel}
        </span>
        <span className="absolute top-3 left-3 text-[10px] font-black uppercase tracking-wider" style={{ color:"rgba(239,68,68,0.7)" }}>Before</span>
      </div>
      {/* After */}
      <div className="absolute inset-0 flex items-end p-4"
        style={{ background:c.afterBg, clipPath:`inset(0 ${100-pos}% 0 0)` }}>
        <span className="text-xs font-bold px-3 py-1.5 rounded-full" style={{ background:"rgba(14,165,233,0.1)", border:"1px solid rgba(14,165,233,0.25)", color:"#0ea5e9" }}>
          {c.afterLabel}
        </span>
        <span className="absolute top-3 right-3 text-[10px] font-black uppercase tracking-wider" style={{ color:"rgba(14,165,233,0.7)" }}>After</span>
      </div>
      {/* Divider */}
      <div className="absolute top-0 bottom-0 w-0.5 pointer-events-none"
        style={{ left:`${pos}%`, background:"linear-gradient(to bottom,#0ea5e9,#14b8a6)", boxShadow:"0 0 8px rgba(14,165,233,0.5)" }} />
      {/* Handle */}
      <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center z-10"
        style={{ left:`${pos}%`, background:"linear-gradient(135deg,#0ea5e9,#14b8a6)", boxShadow:"0 4px 16px rgba(14,165,233,0.4)" }}>
        <MoveHorizontal className="w-5 h-5 text-white" />
      </div>
    </div>
  );
}

export function BeforeAfterCases() {
  return (
    <section className="section bg-sky">
      <div className="container relative z-10">
        {/* Stats banner */}
        <div className="grid grid-cols-3 gap-4 mb-14">
          {[{ v:"10,000+", l:"Cases Treated" },{ v:"87%", l:"Avg. Improvement" },{ v:"98%", l:"Patient Satisfaction" }].map((s, i) => (
            <div key={i} className="card p-5 text-center">
              <div className="heading h3 grad-text" style={{ fontFamily:"'Outfit',sans-serif" }}>{s.v}</div>
              <div className="text-xs font-medium mt-1" style={{ color:"var(--text-muted)" }}>{s.l}</div>
            </div>
          ))}
        </div>

        <StaggerContainer className="grid md:grid-cols-2 gap-8" staggerDelay={0.1}>
          {cases.map(c => (
            <StaggerItem key={c.id}>
              <motion.div whileHover={{ y:-4 }} className="card p-6">
                <div className="mb-4">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{ background:`${c.color}15`, border:`1px solid ${c.color}30`, color:c.color }}>
                    {c.cat}
                  </span>
                  <h3 className="font-black text-lg mt-2" style={{ fontFamily:"'Outfit',sans-serif", color:"var(--text-primary)" }}>{c.label}</h3>
                  <p className="text-sm mt-1" style={{ color:"var(--text-secondary)" }}>{c.desc}</p>
                </div>

                <Slider c={c} />
                <p className="text-center text-xs mt-2.5" style={{ color:"#cbd5e1" }}>← Drag to compare →</p>

                <div className="grid grid-cols-2 gap-3 mt-4">
                  {[{ label:"Duration", val:c.metric },{ label:"Key Result", val:c.result }].map((m, i) => (
                    <div key={i} className="p-3 rounded-xl text-center"
                      style={{ background:`${c.color}08`, border:`1px solid ${c.color}18` }}>
                      <div className="font-bold text-sm" style={{ color:c.color }}>{m.val}</div>
                      <div className="text-xs mt-0.5" style={{ color:"var(--text-muted)" }}>{m.label}</div>
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

export function BeforeAfterCTA() {
  return (
    <section className="section relative overflow-hidden" style={{ background: "linear-gradient(135deg, #020617 0%, #0f172a 100%)" }}>
      {/* Cinematic glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 7, repeat: Infinity }}
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[120px]"
          style={{ background: "radial-gradient(circle, rgba(14,165,233,0.4) 0%, transparent 70%)" }} />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-white font-black leading-tight mb-6" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontFamily: "'Outfit',sans-serif" }}>
              Ready for Your Own <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400">Transformation?</span>
            </h2>
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
              Join thousands of patients who have successfully reclaimed their health through our specialized endocrine treatments.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <Link href="/contact" className="w-full sm:w-auto">
                <motion.span whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}
                  className="btn btn-lg w-full justify-center shadow-[0_0_30px_rgba(14,165,233,0.3)]"
                  style={{ display: "inline-flex", background: "linear-gradient(135deg, #0ea5e9, #0284c7)", color: "white", border: "none" }}>
                  <span className="text-lg">Start Your Journey</span><ArrowRight className="w-5 h-5 ml-2" />
                </motion.span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
