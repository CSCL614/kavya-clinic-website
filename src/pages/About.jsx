import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  GraduationCap, Award, Stethoscope,
  BookOpen, Heart, ChevronRight, BadgeCheck,
  Clock, Users
} from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper.jsx'

const credentials = [
  { icon: GraduationCap, label: 'MBBS', sub: 'Osmania Medical College, Hyderabad' },
  { icon: GraduationCap, label: 'MD (Internal Medicine)', sub: 'AIIMS New Delhi' },
  { icon: Award,         label: 'DM (Endocrinology)',    sub: 'PGIMER Chandigarh' },
  { icon: BadgeCheck,    label: 'FRCP (Fellow)',         sub: 'Royal College of Physicians, London' },
]

const timeline = [
  { year: '2008–2013', role: 'MBBS + MD Training',    place: 'Osmania Medical College & AIIMS' },
  { year: '2013–2016', role: 'DM Endocrinology',       place: 'PGIMER, Chandigarh' },
  { year: '2016–2019', role: 'Senior Endocrinologist', place: 'Apollo Hospitals, Hyderabad' },
  { year: '2019–Now',  role: 'Founder & Director',     place: 'Dr. Kavya\'s Endocrinology & Diabetes Clinic' },
]

const philosophy = [
  { icon: Heart,       title: 'Holistic Approach',    desc: 'Treating the whole person, not just symptoms — integrating lifestyle, nutrition, and medicine.' },
  { icon: BookOpen,    title: 'Evidence-Based Care',  desc: 'Every decision is grounded in the latest peer-reviewed research and clinical guidelines.' },
  { icon: Users,       title: 'Patient Partnership',  desc: 'Collaborating closely with you and your family to build sustainable health strategies.' },
  { icon: Clock,       title: 'Long-Term Commitment', desc: 'Building lasting relationships to guide your health journey over years, not just appointments.' },
]

export default function About() {
  return (
    <>
      {/* ── Page Header ──────────────────────────────────────── */}
      <section className="relative py-20 bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ background: 'radial-gradient(circle at 70% 50%, #38BDF8, transparent 60%)' }} />
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium
                             text-primary-300 border border-primary-700/40 bg-primary-900/30 mb-4">
              Meet Your Doctor
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
              About <span className="gradient-text-light">Dr. Kavya</span>
            </h1>
            <p className="text-slate-300 text-lg max-w-xl mx-auto">
              A passionate endocrinologist dedicated to transforming hormonal health through
              personalized, evidence-based care.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none">
            <path d="M0 40L1440 40L1440 10C1100 40 600 0 300 15C100 25 0 5 0 5Z" fill="#F0F9FF" />
          </svg>
        </div>
      </section>

      {/* ── Doctor Profile ───────────────────────────────────── */}
      <SectionWrapper>
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary-100 to-secondary-100 blur-2xl opacity-60" />
              <img
                src="/src/assets/doctor_kavya.png"
                alt="Dr. Kavya — Endocrinologist"
                className="relative rounded-3xl w-full max-w-sm mx-auto shadow-2xl object-cover aspect-[3/4]"
                onError={(e) => {
                  e.target.onerror = null
                  e.target.src = 'data:image/svg+xml,' + encodeURIComponent(`
                    <svg xmlns="http://www.w3.org/2000/svg" width="400" height="500" viewBox="0 0 400 500">
                      <rect width="400" height="500" fill="#EFF6FF"/>
                      <circle cx="200" cy="180" r="80" fill="#BAE6FD"/>
                      <rect x="80" y="300" width="240" height="200" rx="20" fill="#DBEAFE"/>
                      <text x="200" y="460" text-anchor="middle" font-family="Inter" font-size="16" fill="#0EA5E9">Dr. Kavya</text>
                    </svg>
                  `)
                }}
              />
              {/* Badge */}
              <div className="absolute -bottom-4 -right-4 glass-card rounded-2xl px-4 py-3 shadow-lg">
                <p className="text-xs text-slate-500 font-medium">Experience</p>
                <p className="text-2xl font-bold gradient-text font-display">15+ Years</p>
              </div>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-semibold text-primary-500 uppercase tracking-widest mb-2 block">
                Your Doctor
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-800 mb-2">
                Dr. Kavya Reddy, DM
              </h2>
              <p className="text-primary-600 font-medium mb-4">
                Senior Consultant Endocrinologist &amp; Diabetologist
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                With over 15 years of dedicated practice in endocrinology, Dr. Kavya brings
                a wealth of experience managing complex hormonal conditions. Trained at India's
                premier medical institutions and fellowship-trained in the UK, she is committed
                to delivering world-class care to every patient.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Her research on insulin resistance and metabolic syndrome has been published
                in peer-reviewed journals, and she regularly presents at national and
                international conferences.
              </p>

              <Link to="/contact" className="btn-primary text-sm">
                Book a Consultation <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* ── Credentials ─────────────────────────────────────── */}
      <SectionWrapper className="bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-slate-800">
              Academic <span className="gradient-text">Credentials</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {credentials.map(({ icon: Icon, label, sub }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card rounded-2xl p-5 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-100 to-secondary-100
                                flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-semibold text-slate-800 text-sm font-display">{label}</h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">{sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ── Career Timeline ──────────────────────────────────── */}
      <SectionWrapper>
        <div className="container-custom max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-slate-800">
              Career <span className="gradient-text">Journey</span>
            </h2>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-300 to-secondary-300" />
            <div className="space-y-8">
              {timeline.map(({ year, role, place }, i) => (
                <motion.div
                  key={year}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-600
                                    flex items-center justify-center shadow-lg shrink-0">
                      <Stethoscope className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="pt-2">
                    <span className="text-xs font-semibold text-primary-500 uppercase tracking-widest">{year}</span>
                    <h3 className="font-semibold text-slate-800 font-display mt-0.5">{role}</h3>
                    <p className="text-sm text-slate-500 mt-0.5">{place}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ── Philosophy ───────────────────────────────────────── */}
      <SectionWrapper className="bg-gradient-to-br from-primary-900 to-secondary-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-white">
              Our Care <span className="gradient-text-light">Philosophy</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {philosophy.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center
                           hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary-500/20 flex items-center
                                justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-primary-300" />
                </div>
                <h3 className="font-semibold text-white font-display mb-2">{title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
