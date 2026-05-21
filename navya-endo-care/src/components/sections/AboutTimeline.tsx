"use client";
import { motion } from "framer-motion";
import { GraduationCap, Award, Star, BookOpen, MapPin, Calendar } from "lucide-react";
import { FadeIn } from "@/components/Animations";

const timeline = [
  { year: "2005", title: "MBBS — AIIMS Delhi",          desc: "Graduated with Gold Medal, top of the batch in all of India.",                        icon: GraduationCap, color: "#0ea5e9", bg: "rgba(14,165,233,0.1)" },
  { year: "2008", title: "MD Internal Medicine",         desc: "JIPMER Puducherry — Specialization with distinction and multiple accolades.",          icon: BookOpen,       color: "#14b8a6", bg: "rgba(20,184,166,0.1)" },
  { year: "2011", title: "DM Endocrinology",             desc: "PGI Chandigarh — Super-specialization in endocrinology & metabolism, top rank.",       icon: Award,          color: "#8b5cf6", bg: "rgba(139,92,246,0.1)" },
  { year: "2013", title: "Mayo Clinic Fellowship, USA",  desc: "Advanced training in diabetes & thyroid disorders at the world-renowned Mayo Clinic.",  icon: Star,           color: "#f59e0b", bg: "rgba(245,158,11,0.1)" },
  { year: "2015", title: "Founded Navya Endo Care",      desc: "Established premier endocrinology clinic in Banjara Hills, Hyderabad.",               icon: MapPin,          color: "#f43f5e", bg: "rgba(244,63,94,0.1)" },
  { year: "2024", title: "Best Endocrinologist Award",   desc: "Recognized as India's Best Endocrinologist by Times Health Awards 2024.",             icon: Award,          color: "#10b981", bg: "rgba(16,185,129,0.1)" },
];

const awards = [
  { title: "Best Endocrinologist", org: "Times Health 2024",   color: "#0ea5e9", bg: "rgba(14,165,233,0.1)" },
  { title: "Excellence in Diabetes",org: "RSSDI Award 2023",  color: "#14b8a6", bg: "rgba(20,184,166,0.1)" },
  { title: "Research Publication",  org: "Endocrine Society",  color: "#8b5cf6", bg: "rgba(139,92,246,0.1)" },
  { title: "Patient Choice Award",  org: "Practo 2023 & 2024",color: "#f43f5e", bg: "rgba(244,63,94,0.1)" },
];

export function AboutTimeline() {
  return (
    <section className="section bg-white" style={{ position: "relative", overflow: "hidden" }}>
      <div className="blob-violet pointer-events-none absolute" style={{ width: "600px", height: "600px", right: "-10%", top: "20%" }} />
      <div className="container relative z-10">

        {/* Section header */}
        <FadeIn>
          <div className="section-header">
            <span className="section-label"><Calendar className="w-4 h-4" /> Career Journey</span>
            <h2 className="heading h2">A Path of <span className="grad-text">Excellence</span></h2>
            <p className="lead" style={{ textAlign: "center" }}>
              Two decades of academic brilliance, clinical expertise, and compassionate care.
            </p>
          </div>
        </FadeIn>

        <div className="feature-row">
          {/* ── Timeline ──────────────────────────── */}
          <FadeIn direction="left">
            <h3
              className="heading h4"
              style={{ marginBottom: "2rem", color: "var(--text-primary)" }}
            >
              Education &amp; Milestones
            </h3>

            {/* Timeline track */}
            <div style={{ position: "relative", paddingLeft: "3rem" }}>
              {/* Vertical line */}
              <div
                style={{
                  position: "absolute",
                  left: "1.25rem",
                  top: "12px",
                  bottom: "12px",
                  width: "2px",
                  background: "linear-gradient(to bottom, #38bdf8, #2dd4bf, transparent)",
                  borderRadius: "9999px",
                }}
              />

              {/* Items */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {timeline.map((item, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.09, duration: 0.5 }}
                    style={{ position: "relative" }}
                  >
                    {/* Dot */}
                    <div
                      style={{
                        position: "absolute",
                        left: "-1.875rem",
                        top: "1rem",
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        background: item.bg,
                        border: `2.5px solid ${item.color}`,
                        boxShadow: `0 0 0 4px ${item.color}18`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: item.color }} />
                    </div>

                    {/* Card */}
                    <motion.div
                      whileHover={{ y: -2 }}
                      className="card"
                      style={{ padding: "1rem 1.25rem" }}
                    >
                      <div
                        style={{
                          fontSize: "0.7rem",
                          fontWeight: 900,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: item.color,
                          marginBottom: "0.25rem",
                        }}
                      >
                        {item.year}
                      </div>
                      <h4
                        style={{
                          fontFamily: "'Outfit',sans-serif",
                          fontWeight: 700,
                          fontSize: "0.9375rem",
                          color: "var(--text-primary)",
                          marginBottom: "0.25rem",
                          lineHeight: 1.3,
                        }}
                      >
                        {item.title}
                      </h4>
                      <p style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                        {item.desc}
                      </p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* ── Awards & Mission ──────────────────── */}
          <FadeIn direction="right" delay={0.1}>
            <h3
              className="heading h4"
              style={{ marginBottom: "2rem", color: "var(--text-primary)" }}
            >
              Awards &amp; Recognition
            </h3>

            {/* Award cards 2×2 grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
                marginBottom: "2rem",
              }}
            >
              {awards.map((a, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, scale: 0.93 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.09 }}
                  whileHover={{ y: -4 }}
                  className="card"
                  style={{ padding: "1.25rem" }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ background: a.bg, marginBottom: "0.75rem" }}
                  >
                    <Award className="w-4 h-4" style={{ color: a.color }} />
                  </div>
                  <div
                    style={{
                      fontFamily: "'Outfit',sans-serif",
                      fontWeight: 700,
                      fontSize: "0.875rem",
                      color: "var(--text-primary)",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {a.title}
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{a.org}</div>
                </motion.div>
              ))}
            </div>

            {/* Mission / Vision cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                {
                  label: "Our Mission",
                  text: "To deliver world-class, evidence-based endocrine care with compassion, making advanced hormonal health accessible to every patient across India.",
                  color: "#0ea5e9", bg: "rgba(14,165,233,0.06)",
                },
                {
                  label: "Our Vision",
                  text: "To be recognized as India's premier endocrinology center, combining cutting-edge research with the highest standards of patient-centered clinical practice.",
                  color: "#14b8a6", bg: "rgba(20,184,166,0.06)",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="card"
                  style={{
                    padding: "1.25rem 1.5rem",
                    background: item.bg,
                    border: `1.5px solid ${item.color}20`,
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 900,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: item.color,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {item.label}
                  </div>
                  <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
