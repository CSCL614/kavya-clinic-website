"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  GraduationCap,
  Award,
  Star,
  Users,
  BookOpen,
  MapPin,
  Calendar,
} from "lucide-react";
import Image from "next/image";

const timeline = [
  {
    year: "2005",
    title: "MBBS — AIIMS Delhi",
    description: "Graduated with Gold Medal, top of the batch",
    icon: GraduationCap,
    color: "#22d3ee",
  },
  {
    year: "2008",
    title: "MD Internal Medicine — JIPMER",
    description: "Specialization in internal medicine with distinction",
    icon: BookOpen,
    color: "#2dd4bf",
  },
  {
    year: "2011",
    title: "DM Endocrinology — PGI Chandigarh",
    description: "Super-specialization in endocrinology & metabolism",
    icon: Award,
    color: "#a78bfa",
  },
  {
    year: "2013",
    title: "Fellowship — Mayo Clinic, USA",
    description: "Advanced fellowship in diabetes & thyroid disorders",
    icon: Star,
    color: "#f472b6",
  },
  {
    year: "2015",
    title: "Founded Navya Endo Care",
    description: "Established premier endocrinology clinic",
    icon: MapPin,
    color: "#34d399",
  },
];

const awards = [
  { title: "Best Endocrinologist", org: "Times Health Awards 2024", icon: Award },
  { title: "Excellence in Diabetes Care", org: "RSSDI Award 2023", icon: Star },
  { title: "Research Publication Award", org: "Endocrine Society 2022", icon: BookOpen },
  { title: "Patient Choice Award", org: "Practo 2023 & 2024", icon: Users },
];

const skills = [
  { name: "Diabetes Management", level: 99 },
  { name: "Thyroid Care", level: 98 },
  { name: "PCOD Treatment", level: 97 },
  { name: "Pituitary Disorders", level: 95 },
  { name: "Bone Health", level: 94 },
];

export function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="relative py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #060f2a 0%, #020818 100%)" }}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.3, 1], x: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute -left-40 top-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(45,212,191,0.07) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{
              background: "rgba(45, 212, 191, 0.1)",
              border: "1px solid rgba(45, 212, 191, 0.25)",
              color: "#2dd4bf",
            }}
          >
            <Users className="w-4 h-4" />
            About The Doctor
          </div>
          <h2
            className="text-4xl lg:text-6xl font-black mb-6"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Meet{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #22d3ee, #2dd4bf)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Dr. Navya
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Profile */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Doctor card */}
            <div
              className="relative rounded-3xl p-8 mb-8"
              style={{
                background: "rgba(6,15,42,0.8)",
                border: "1px solid rgba(34,211,238,0.15)",
                backdropFilter: "blur(20px)",
              }}
            >
              <div className="flex items-start gap-6">
                {/* Photo */}
                <div
                  className="relative w-28 h-28 rounded-2xl overflow-hidden flex-shrink-0"
                  style={{
                    border: "2px solid rgba(34,211,238,0.3)",
                    boxShadow: "0 0 30px rgba(34,211,238,0.2)",
                  }}
                >
                  <Image
                    src="/doctor-hero.png"
                    alt="Dr. Navya"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                {/* Info */}
                <div>
                  <h3
                    className="text-2xl font-black text-white"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    Dr. Navya
                  </h3>
                  <p className="text-cyan-400 font-medium text-sm mb-2">
                    MBBS, MD, DM Endocrinology
                  </p>
                  <p className="text-white/50 text-sm mb-4">
                    Senior Consultant Endocrinologist
                  </p>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-teal-400" />
                    <span className="text-white/60 text-sm">
                      Hyderabad, Telangana
                    </span>
                  </div>
                </div>
              </div>

              <div
                className="mt-6 pt-6"
                style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
              >
                <p className="text-white/60 leading-relaxed text-sm">
                  Dr. Navya is a nationally recognized endocrinologist with over 15 years of
                  experience treating complex hormonal disorders. A gold medalist from AIIMS Delhi
                  and fellowship-trained at Mayo Clinic, she combines cutting-edge science with
                  compassionate, personalized care to help patients achieve optimal hormonal health.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div
              className="rounded-3xl p-8"
              style={{
                background: "rgba(6,15,42,0.6)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <h4
                className="text-lg font-bold text-white mb-6"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Specialization Expertise
              </h4>
              <div className="space-y-5">
                {skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                  >
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-white/70">{skill.name}</span>
                      <span className="text-cyan-400 font-bold">{skill.level}%</span>
                    </div>
                    <div
                      className="h-1.5 rounded-full overflow-hidden"
                      style={{ background: "rgba(255,255,255,0.08)" }}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: i * 0.1, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{
                          background: "linear-gradient(90deg, #22d3ee, #2dd4bf)",
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Timeline & Awards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Timeline */}
            <div className="mb-10">
              <h4
                className="text-xl font-black text-white mb-8 flex items-center gap-3"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                <Calendar className="w-5 h-5 text-cyan-400" />
                Career Journey
              </h4>
              <div className="relative">
                {/* Timeline line */}
                <div
                  className="absolute left-5 top-0 bottom-0 w-px"
                  style={{ background: "rgba(34,211,238,0.2)" }}
                />
                <div className="space-y-8">
                  {timeline.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.12, duration: 0.6 }}
                      className="flex items-start gap-6 pl-3"
                    >
                      {/* Dot */}
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 z-10 mt-1"
                        style={{
                          background: `${item.color}20`,
                          border: `2px solid ${item.color}`,
                          boxShadow: `0 0 10px ${item.color}40`,
                        }}
                      >
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{ background: item.color }}
                        />
                      </div>
                      <div className="flex-1">
                        <div
                          className="text-xs font-bold mb-1"
                          style={{ color: item.color }}
                        >
                          {item.year}
                        </div>
                        <h5 className="text-white font-bold text-sm mb-1">
                          {item.title}
                        </h5>
                        <p className="text-white/50 text-xs">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Awards */}
            <div>
              <h4
                className="text-xl font-black text-white mb-6 flex items-center gap-3"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                <Award className="w-5 h-5 text-cyan-400" />
                Awards & Recognition
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {awards.map((award, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    whileHover={{ y: -4 }}
                    className="p-4 rounded-2xl"
                    style={{
                      background: "rgba(34,211,238,0.05)",
                      border: "1px solid rgba(34,211,238,0.15)",
                    }}
                  >
                    <award.icon className="w-6 h-6 text-cyan-400 mb-3" />
                    <div className="text-white font-bold text-sm">{award.title}</div>
                    <div className="text-white/40 text-xs mt-1">{award.org}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
