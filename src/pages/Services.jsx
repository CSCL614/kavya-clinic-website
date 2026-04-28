import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Activity, Microscope, Heart, Scale,
  Bone, Baby, ChevronRight, ChevronDown, CheckCircle
} from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper.jsx'

const services = [
  {
    id: 'diabetes',
    icon: Activity,
    color: 'from-blue-500 to-cyan-500',
    lightColor: 'from-blue-50 to-cyan-50',
    iconColor: 'text-blue-600',
    title: 'Diabetes Management',
    tagline: 'Comprehensive blood sugar control for lasting health',
    description: 'Our diabetes program provides end-to-end management for Type 1, Type 2, gestational, and pre-diabetes conditions. We combine the latest medications, continuous glucose monitoring, and personalised lifestyle coaching.',
    features: [
      'Type 1 & Type 2 Diabetes',
      'Gestational Diabetes',
      'Pre-diabetes Intervention',
      'Insulin Pump Management',
      'Continuous Glucose Monitoring (CGM)',
      'Diet & Lifestyle Counselling',
    ],
  },
  {
    id: 'thyroid',
    icon: Microscope,
    color: 'from-teal-500 to-emerald-500',
    lightColor: 'from-teal-50 to-emerald-50',
    iconColor: 'text-teal-600',
    title: 'Thyroid Disorders',
    tagline: 'Precise diagnosis and compassionate thyroid care',
    description: 'The thyroid gland controls your metabolism, energy, and mood. We diagnose and treat all thyroid conditions — from common hypothyroidism to complex autoimmune diseases — using evidence-based protocols.',
    features: [
      'Hypothyroidism & Hashimoto\'s',
      'Hyperthyroidism & Graves\' Disease',
      'Thyroid Nodules',
      'Thyroid Cancer Follow-up',
      'Goiter Management',
      'Postpartum Thyroiditis',
    ],
  },
  {
    id: 'hormonal',
    icon: Heart,
    color: 'from-pink-500 to-rose-500',
    lightColor: 'from-pink-50 to-rose-50',
    iconColor: 'text-pink-600',
    title: 'Hormonal Disorders',
    tagline: 'Restoring balance for a better quality of life',
    description: 'Hormonal imbalances can affect every aspect of your physical and emotional wellbeing. We specialise in diagnosing and treating complex conditions of the adrenal glands, pituitary, and reproductive hormones.',
    features: [
      'PCOS (Polycystic Ovary Syndrome)',
      'Adrenal Insufficiency',
      'Cushing\'s Syndrome',
      'Pituitary Tumours',
      'Testosterone Deficiency',
      'Menopause & Andropause',
    ],
  },
  {
    id: 'metabolic',
    icon: Scale,
    color: 'from-orange-500 to-amber-500',
    lightColor: 'from-orange-50 to-amber-50',
    iconColor: 'text-orange-600',
    title: 'Metabolic Syndrome',
    tagline: 'Addressing the root causes of cardiovascular risk',
    description: 'Metabolic syndrome is a cluster of conditions — high blood pressure, high blood sugar, excess body fat, and abnormal cholesterol — that raise your risk of heart disease and stroke. We craft comprehensive management strategies.',
    features: [
      'Insulin Resistance Treatment',
      'Weight Management Programs',
      'Dyslipidaemia (Cholesterol)',
      'Hypertension in Metabolic Syndrome',
      'Non-Alcoholic Fatty Liver',
      'Cardiovascular Risk Reduction',
    ],
  },
  {
    id: 'osteoporosis',
    icon: Bone,
    color: 'from-violet-500 to-purple-500',
    lightColor: 'from-violet-50 to-purple-50',
    iconColor: 'text-violet-600',
    title: 'Osteoporosis',
    tagline: 'Protecting your bone health at every age',
    description: 'Osteoporosis and metabolic bone diseases are often silent until a fracture occurs. We provide comprehensive bone density assessment, fracture risk evaluation, and both preventive and therapeutic interventions.',
    features: [
      'DEXA Bone Density Scan Interpretation',
      'Vitamin D & Calcium Management',
      'Bisphosphonate Therapy',
      'Post-Menopausal Bone Loss',
      'Male Osteoporosis',
      'Fracture Prevention Strategies',
    ],
  },
  {
    id: 'pediatric',
    icon: Baby,
    color: 'from-sky-500 to-indigo-500',
    lightColor: 'from-sky-50 to-indigo-50',
    iconColor: 'text-sky-600',
    title: 'Pediatric Endocrinology',
    tagline: 'Specialized care for growing bodies and hormones',
    description: 'Children have unique hormonal needs. Our pediatric endocrinology service addresses growth disorders, early or delayed puberty, childhood diabetes, and thyroid conditions with child-friendly care protocols.',
    features: [
      'Growth Hormone Deficiency',
      'Precocious & Delayed Puberty',
      'Childhood Type 1 Diabetes',
      'Congenital Hypothyroidism',
      'Short Stature Evaluation',
      'Childhood Obesity & Metabolic Issues',
    ],
  },
]

export default function Services() {
  const [expanded, setExpanded] = useState(null)

  const toggle = (id) => setExpanded(expanded === id ? null : id)

  return (
    <>
      {/* ── Header ────────────────────────────────────────── */}
      <section className="relative py-20 bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ background: 'radial-gradient(circle at 30% 60%, #2DD4BF, transparent 60%)' }} />
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium
                             text-primary-300 border border-primary-700/40 bg-primary-900/30 mb-4">
              What We Treat
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
              Our <span className="gradient-text-light">Specialised Services</span>
            </h1>
            <p className="text-slate-300 text-lg max-w-xl mx-auto">
              Comprehensive endocrinology care spanning the full spectrum of hormonal
              and metabolic conditions.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none">
            <path d="M0 40L1440 40L1440 10C1100 40 600 0 300 15C100 25 0 5 0 5Z" fill="#F0F9FF" />
          </svg>
        </div>
      </section>

      {/* ── Services Grid ─────────────────────────────────── */}
      <SectionWrapper>
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.map(({ id, icon: Icon, color, lightColor, iconColor, title, tagline }, i) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`bg-gradient-to-br ${lightColor} border border-white/60
                            rounded-2xl p-6 cursor-pointer group
                            hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
                onClick={() => toggle(id)}
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${color}
                                 flex items-center justify-center mb-4 shadow-md
                                 group-hover:scale-105 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display font-bold text-slate-800 mb-1">{title}</h3>
                <p className="text-sm text-slate-500">{tagline}</p>
                <div className="mt-4 flex items-center gap-1 text-xs font-medium text-primary-600">
                  View details <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── Expandable Details ─────────────────────────── */}
          <div className="space-y-4 max-w-4xl mx-auto">
            <h2 className="font-display text-2xl font-bold text-slate-800 mb-6">
              Service <span className="gradient-text">Details</span>
            </h2>
            {services.map(({ id, icon: Icon, color, title, description, features }) => (
              <div
                key={id}
                className="glass-card rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggle(id)}
                  className="w-full flex items-center justify-between p-5 text-left"
                  aria-expanded={expanded === id}
                  id={`service-toggle-${id}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color}
                                     flex items-center justify-center shrink-0 shadow-md`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-semibold text-slate-800 font-display">{title}</span>
                  </div>
                  <motion.div
                    animate={{ rotate: expanded === id ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <ChevronDown className="w-5 h-5 text-slate-500" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {expanded === id && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 border-t border-slate-100">
                        <p className="text-slate-600 text-sm leading-relaxed my-4">
                          {description}
                        </p>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {features.map((f) => (
                            <div key={f} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-primary-500 shrink-0" />
                              <span className="text-sm text-slate-600">{f}</span>
                            </div>
                          ))}
                        </div>
                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-2 mt-5 btn-primary text-sm py-2.5"
                        >
                          Book for {title} <ChevronRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ── CTA ───────────────────────────────────────────── */}
      <SectionWrapper className="bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container-custom text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
            Don't See Your Condition Listed?
          </h2>
          <p className="text-primary-100 max-w-xl mx-auto mb-8">
            We treat a wide spectrum of endocrine disorders. Contact us for a
            personalised consultation.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl
                                         font-semibold text-primary-700 bg-white hover:bg-primary-50
                                         shadow-xl hover:shadow-2xl transition-all duration-300
                                         hover:-translate-y-1">
            Book a Consultation <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </SectionWrapper>
    </>
  )
}
