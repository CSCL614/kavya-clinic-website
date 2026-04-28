import React, { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Car, Train } from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper.jsx'

const AppointmentForm = lazy(() => import('../components/AppointmentForm.jsx'))

const contactInfo = [
  {
    icon: MapPin,
    label: 'Address',
    value: '123, Health Street, Medical Colony,\nHyderabad – 500001, Telangana',
    color: 'text-rose-500',
    bg: 'bg-rose-50',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 98765 43210\n+91 40 1234 5678',
    color: 'text-primary-500',
    bg: 'bg-primary-50',
    href: 'tel:+919876543210',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@drkavyaendo.com\nappointments@drkavyaendo.com',
    color: 'text-secondary-600',
    bg: 'bg-secondary-50',
    href: 'mailto:info@drkavyaendo.com',
  },
  {
    icon: Clock,
    label: 'Working Hours',
    value: 'Mon – Sat: 9:00 AM – 7:00 PM\nSunday: By Appointment Only',
    color: 'text-amber-500',
    bg: 'bg-amber-50',
  },
]

const howToReach = [
  { icon: Car,   label: 'By Car',   desc: 'Free parking available in the basement. GPS: Dr. Kavya Clinic, Medical Colony.' },
  { icon: Train, label: 'By Metro', desc: 'Nearest station: Health City Metro (Blue Line) — 5-minute walk.' },
]

export default function Contact() {
  return (
    <>
      {/* ── Header ────────────────────────────────────────── */}
      <section className="relative py-20 bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ background: 'radial-gradient(circle at 80% 30%, #38BDF8, transparent 60%)' }} />
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium
                             text-primary-300 border border-primary-700/40 bg-primary-900/30 mb-4">
              Get in Touch
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
              Book an <span className="gradient-text-light">Appointment</span>
            </h1>
            <p className="text-slate-300 text-lg max-w-xl mx-auto">
              Ready to take the first step towards better hormonal health?
              Our team is here to guide you.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none">
            <path d="M0 40L1440 40L1440 10C1100 40 600 0 300 15C100 25 0 5 0 5Z" fill="#F0F9FF" />
          </svg>
        </div>
      </section>

      {/* ── Contact Info Cards ────────────────────────────── */}
      <SectionWrapper>
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {contactInfo.map(({ icon: Icon, label, value, color, bg, href }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card rounded-2xl p-5 hover:shadow-lg transition-shadow duration-300"
              >
                <div className={`w-11 h-11 rounded-xl ${bg} flex items-center justify-center mb-3`}>
                  <Icon className={`w-5 h-5 ${color}`} />
                </div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1.5">
                  {label}
                </p>
                {href ? (
                  <a href={href} className={`text-sm font-medium ${color} hover:underline whitespace-pre-line`}>
                    {value}
                  </a>
                ) : (
                  <p className="text-sm text-slate-600 whitespace-pre-line leading-relaxed">{value}</p>
                )}
              </motion.div>
            ))}
          </div>

          {/* ── Form + Map layout ─────────────────────────── */}
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Form */}
            <div>
              <Suspense fallback={
                <div className="glass-card rounded-2xl p-10 flex items-center justify-center min-h-[400px]">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-10 h-10 rounded-full border-4 border-primary-200 border-t-primary-500 animate-spin" />
                    <p className="text-sm text-slate-500">Loading form…</p>
                  </div>
                </div>
              }>
                <AppointmentForm />
              </Suspense>
            </div>

            {/* Map + How to reach */}
            <div className="space-y-6">
              {/* Map placeholder */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-card rounded-2xl overflow-hidden"
              >
                {/* Embedded map placeholder */}
                <div className="relative h-64 bg-gradient-to-br from-primary-100 to-secondary-100
                                flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `
                        linear-gradient(rgba(14,165,233,0.3) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(14,165,233,0.3) 1px, transparent 1px)
                      `,
                      backgroundSize: '40px 40px',
                    }}
                  />
                  <div className="relative z-10 text-center">
                    <div className="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center
                                    mx-auto mb-3 shadow-lg animate-pulse-slow">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-sm font-semibold text-slate-700">Dr. Kavya's Clinic</p>
                    <p className="text-xs text-slate-500 mt-1">Medical Colony, Hyderabad</p>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1 text-xs font-medium
                                 text-primary-600 hover:text-secondary-600 transition-colors"
                    >
                      Open in Google Maps ↗
                    </a>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-slate-800 font-display text-sm mb-4">
                    How to Reach Us
                  </h3>
                  <div className="space-y-3">
                    {howToReach.map(({ icon: Icon, label, desc }) => (
                      <div key={label} className="flex gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center
                                        justify-center shrink-0">
                          <Icon className="w-4 h-4 text-primary-500" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-700">{label}</p>
                          <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Emergency note */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-5
                           border border-primary-100"
              >
                <h4 className="font-semibold text-slate-800 text-sm mb-1.5">
                  🩺 Need Urgent Care?
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  For diabetic emergencies or urgent hormonal crises, call us directly at{' '}
                  <a href="tel:+919876543210" className="text-primary-600 font-semibold hover:underline">
                    +91 98765 43210
                  </a>{' '}
                  — we prioritise urgent cases.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
