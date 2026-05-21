"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, Plus, Minus } from "lucide-react";

const faqs = [
  { q: "What conditions does Dr. Navya specialize in?",
    a: "Dr. Navya specializes in all endocrine and metabolic disorders including Type 1 & Type 2 Diabetes, Thyroid disorders, PCOD/PCOS, obesity, adrenal disorders, pituitary disorders, osteoporosis, and hormonal imbalances in men and women." },
  { q: "How do I book an appointment?",
    a: "You can book by calling +91 98765 43210, messaging on WhatsApp, or clicking 'Book Appointment'. We offer in-clinic and teleconsultation options. Same-day appointments are often available." },
  { q: "Do you offer teleconsultations?",
    a: "Yes! We offer secure video consultations for patients outside Hyderabad or who prefer remote care. Tele-consults cover follow-ups, medication adjustments, report reviews, and second opinions." },
  { q: "What should I bring to my first appointment?",
    a: "Please bring all previous medical reports, blood test results, imaging studies, a current medication list with dosages, and any referral letters. If you have a glucometer, bring 2 weeks of readings." },
  { q: "How long does a consultation take?",
    a: "First consultations typically take 45–60 minutes for a thorough history, examination, report review, and treatment plan. Follow-up visits are usually 20–30 minutes." },
  { q: "Does the clinic accept insurance?",
    a: "Yes, we accept major insurance plans including CGHS, Medi-Assist, Star Health, United India, and many others. Please contact our team to confirm coverage before your visit." },
];

export function HomeFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section bg-white" style={{ position: "relative", overflow: "hidden" }}>
      <div className="blob-sky w-[500px] h-[400px] right-0 top-0 opacity-50 pointer-events-none absolute" />
      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-16 lg:mb-20 flex flex-col items-center">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="section-label"><HelpCircle className="w-4 h-4" /> FAQ</span>
            <h2 className="heading h2 mt-2 mb-4">Got <span className="grad-text">Questions?</span></h2>
            <p className="lead">Everything you need to know about our clinic and services.</p>
          </motion.div>
        </div>

        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.06 }}
              className="rounded-2xl overflow-hidden transition-all duration-300 card"
              style={{
                background: open === i ? "var(--bg-secondary)" : "var(--bg-primary)",
                border: `1.5px solid ${open === i ? "rgba(14,165,233,0.3)" : "var(--border-light)"}`,
                boxShadow: open === i ? "0 10px 40px rgba(14,165,233,0.15)" : "var(--shadow-xs)",
              }}
            >
              <button onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 cursor-pointer focus:outline-none">
                <span className="font-semibold text-[0.9375rem] transition-colors"
                  style={{ color: open === i ? "#0284c7" : "var(--text-primary)" }}>
                  {faq.q}
                </span>
                <motion.div animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.25 }}
                  className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    background: open === i ? "rgba(14,165,233,0.1)" : "var(--bg-accent)",
                    border: `1px solid ${open === i ? "rgba(14,165,233,0.25)" : "var(--border-light)"}`,
                  }}>
                  {open === i
                    ? <Minus className="w-3.5 h-3.5" style={{ color: "#0ea5e9" }} />
                    : <Plus  className="w-3.5 h-3.5" style={{ color: "var(--text-subtle)" }} />
                  }
                </motion.div>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                    style={{ overflow: "hidden" }}
                  >
                    <div className="px-6 pb-5 text-sm leading-relaxed"
                      style={{
                        color: "var(--text-secondary)",
                        borderTop: "1px solid var(--border-light)",
                        paddingTop: "1rem",
                      }}>
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
