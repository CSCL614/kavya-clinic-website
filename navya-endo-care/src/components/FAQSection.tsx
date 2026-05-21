"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What conditions does Dr. Navya specialize in?",
    answer:
      "Dr. Navya specializes in all endocrine and metabolic disorders including Type 1 & Type 2 Diabetes, Thyroid disorders (hypothyroidism, hyperthyroidism, thyroid nodules, thyroid cancer), PCOD/PCOS, obesity, adrenal disorders (Cushing's syndrome, Addison's disease), pituitary disorders, osteoporosis, male and female hormonal issues, growth disorders, and more.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "You can book an appointment by calling us at +91 98765 43210, messaging us on WhatsApp, or clicking the 'Book Appointment' button on this website. We offer both in-clinic and teleconsultation options. Same-day appointments are often available.",
  },
  {
    question: "Do you offer teleconsultations?",
    answer:
      "Yes! We offer secure video consultations for patients who prefer remote care or are located outside Hyderabad. Tele-consults are available for follow-ups, medication adjustments, report reviews, and second opinions. All you need is a stable internet connection.",
  },
  {
    question: "What should I bring to my first appointment?",
    answer:
      "Please bring all previous medical reports, blood test results, imaging studies (ultrasound, MRI, CT scans), a list of all current medications (with dosages), and any referral letters from your physician. If you have a glucometer, bring 2 weeks of readings.",
  },
  {
    question: "How long does a consultation take?",
    answer:
      "A first consultation typically takes 45–60 minutes to allow Dr. Navya to take a thorough history, examine you, review reports, explain your condition, and outline your treatment plan. Follow-up visits are usually 20–30 minutes.",
  },
  {
    question: "Does the clinic accept insurance?",
    answer:
      "Yes, we accept major insurance plans including CGHS, Medi-Assist, Star Health, United India, and many others. Please contact our team to confirm coverage for your specific plan before your visit.",
  },
  {
    question: "What advanced diagnostic tests do you offer in-house?",
    answer:
      "Our clinic has a state-of-the-art diagnostic facility offering thyroid ultrasound, Fine Needle Aspiration Cytology (FNAC), DEXA bone density scans, Continuous Glucose Monitoring setup, insulin pump training, and same-day blood tests with results in 2–4 hours.",
  },
  {
    question: "Is the treatment evidence-based?",
    answer:
      "Absolutely. All our treatment protocols follow the latest guidelines from the American Diabetes Association (ADA), American Thyroid Association (ATA), Endocrine Society, and the Research Society for the Study of Diabetes in India (RSSDI). Dr. Navya is an active researcher with 30+ published papers.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #020818 0%, #060f2a 100%)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute -top-20 left-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <HelpCircle className="w-4 h-4" />
            Frequently Asked Questions
          </div>
          <h2
            className="text-4xl lg:text-6xl font-black mb-6"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Got{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #22d3ee, #2dd4bf)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Questions?
            </span>
          </h2>
          <p className="text-white/50 text-lg">
            Everything you need to know about our clinic and services.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="rounded-2xl overflow-hidden"
              style={{
                background: openIndex === i
                  ? "rgba(34,211,238,0.06)"
                  : "rgba(6,15,42,0.6)",
                border: `1px solid ${openIndex === i ? "rgba(34,211,238,0.25)" : "rgba(255,255,255,0.06)"}`,
                transition: "background 0.3s ease, border-color 0.3s ease",
              }}
            >
              {/* Question */}
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left group"
              >
                <span
                  className="font-semibold text-base pr-4 transition-colors"
                  style={{ color: openIndex === i ? "#22d3ee" : "rgba(255,255,255,0.9)" }}
                >
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    background: openIndex === i
                      ? "rgba(34,211,238,0.15)"
                      : "rgba(255,255,255,0.05)",
                    border: `1px solid ${openIndex === i ? "rgba(34,211,238,0.3)" : "rgba(255,255,255,0.1)"}`,
                  }}
                >
                  {openIndex === i ? (
                    <Minus className="w-4 h-4 text-cyan-400" />
                  ) : (
                    <Plus className="w-4 h-4 text-white/50" />
                  )}
                </motion.div>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    style={{ overflow: "hidden" }}
                  >
                    <div
                      className="px-6 pb-6 text-white/60 text-sm leading-relaxed"
                      style={{ borderTop: "1px solid rgba(34,211,238,0.1)" }}
                    >
                      <div className="pt-4">{faq.answer}</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-white/50 mb-4">Still have questions?</p>
          <motion.a
            href="tel:+919876543210"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="btn-gradient inline-flex items-center gap-2 px-8 py-3 rounded-2xl font-bold"
          >
            Contact Us Directly
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
