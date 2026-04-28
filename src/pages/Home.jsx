import React, { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Activity, Award, Users, Calendar,
  ChevronRight, Star, ShieldCheck,
  Microscope, Heart, BadgeCheck
} from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper.jsx'
import ServiceCard from '../components/ServiceCard.jsx'

// Lazy-load heavy form
const AppointmentForm = lazy(() => import('../components/AppointmentForm.jsx'))

// ── Data ─────────────────────────────────────────────────────────────────────
const heroStats = [
  { value: '15+', label: 'Years Experience', icon: Award },
  { value: '8K+', label: 'Patients Treated',  icon: Users },
  { value: '98%', label: 'Success Rate',       icon: ShieldCheck },
  { value: '50+', label: 'Awards Won',         icon: Star },
]

const previewServices = [
  {
    icon: <Activity className="w-5 h-5" />,
    title: 'Diabetes Management',
    description: 'Comprehensive care plans for Type 1, Type 2 and gestational diabetes with lifestyle coaching.',
  },
  {
    icon: <Microscope className="w-5 h-5" />,
    title: 'Thyroid Disorders',
    description: 'Diagnosis and treatment of hypothyroidism, hyperthyroidism, Hashimoto\'s, and goiter.',
  },
  {
    icon: <Heart className="w-5 h-5" />,
    title: 'Hormonal Disorders',
    description: 'Expert evaluation of hormonal imbalances including PCOS, adrenal and pituitary conditions.',
  },
]

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Diabetes Patient',
    text: 'Dr. Kavya transformed my life. After years of struggling with Type 2 diabetes, her personalized approach helped me achieve stable glucose levels naturally.',
    rating: 5,
  },
  {
    name: 'Rahul Mehta',
    role: 'Thyroid Patient',
    text: 'Finally a doctor who truly listens. My thyroid condition is now well-managed, and I feel more energetic than I have in years.',
    rating: 5,
  },
  {
    name: 'Ananya Reddy',
    role: 'PCOS Patient',
    text: 'The care and attention I received at Dr. Kavya\'s clinic is unmatched. My hormonal health has improved dramatically.',
    rating: 5,
  },
]

// ── Component ─────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      {/* ══════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════ */}
      <section className="relative min-h-[calc(100vh-64px)] flex items-center
                          bg-hero-gradient overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10
                        bg-primary-400 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-10
                        bg-secondary-400 pointer-events-none" />

        <div className="container-custom relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left — text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                               text-xs font-medium text-primary-300 border border-primary-700/40
                               bg-primary-900/30 mb-6">
                <BadgeCheck className="w-3.5 h-3.5" />
                Board-Certified Endocrinologist
              </span>

              <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-white
                             leading-tight mb-6">
                Expert Care for Your{' '}
                <span className="gradient-text-light">Hormonal Health</span>
              </h1>

              <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-lg">
                Dr. Kavya brings 15+ years of endocrinology expertise to provide
                compassionate, evidence-based care for diabetes, thyroid disorders,
                and all hormonal conditions.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                <Link to="/contact" className="btn-primary text-sm justify-center">
                  Book Appointment <ChevronRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm
                             font-semibold text-white border border-white/20 hover:bg-white/10
                             transition-all duration-300"
                >
                  View Services
                </Link>
              </div>
            </motion.div>

            {/* Right — stats grid */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
              className="grid grid-cols-2 gap-3 sm:gap-4 mt-8 lg:mt-0"
            >
              {heroStats.map(({ value, label, icon: Icon }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="glass-card rounded-2xl p-4 sm:p-5 text-center
                             bg-white/5 border-white/10 backdrop-blur-md"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-primary-500/20 flex items-center
                                  justify-center mx-auto mb-2 sm:mb-3">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary-300" />
                  </div>
                  <p className="text-2xl sm:text-3xl font-bold text-white font-display">{value}</p>
                  <p className="text-[10px] sm:text-xs text-slate-400 mt-1">{label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L1440 60L1440 20C1200 60 800 0 480 20C240 35 0 0 0 0L0 60Z"
                  fill="#F0F9FF" />
          </svg>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SERVICES PREVIEW
      ══════════════════════════════════════════════════ */}
      <SectionWrapper>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="text-sm font-semibold text-primary-500 uppercase tracking-widest mb-2 block">
              Our Specialties
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Comprehensive <span className="gradient-text">Endocrine Care</span>
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              From diabetes management to complex hormonal disorders, we provide
              personalized treatment plans backed by the latest medical research.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {previewServices.map((svc, i) => (
              <ServiceCard key={svc.title} {...svc} delay={i * 0.12} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/services" className="btn-outline text-sm">
              View All Services <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* ══════════════════════════════════════════════════
          WHY CHOOSE US
      ══════════════════════════════════════════════════ */}
      <SectionWrapper className="bg-gradient-to-br from-primary-900 to-secondary-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose{' '}
              <span className="gradient-text-light">Dr. Kavya's Clinic?</span>
            </h2>
            <p className="text-slate-300 max-w-xl mx-auto">
              We combine cutting-edge medical expertise with compassionate care
              to deliver the best outcomes for our patients.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🏥', title: 'State-of-the-Art Facility', desc: 'Advanced diagnostic equipment for precise endocrine testing and monitoring.' },
              { icon: '👩‍⚕️', title: 'Expert Specialist', desc: '15+ years of focused endocrinology experience with continuous education.' },
              { icon: '📋', title: 'Personalised Plans', desc: 'Every treatment plan is uniquely tailored to your body and lifestyle.' },
              { icon: '🤝', title: 'Compassionate Care', desc: 'We see you as a whole person, not just a diagnosis.' },
            ].map(({ icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-6 rounded-2xl bg-white/5 border border-white/10
                           hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="font-display font-semibold text-white mb-2">{title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ══════════════════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════════════════ */}
      <SectionWrapper>
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-primary-500 uppercase tracking-widest mb-2 block">
              Patient Stories
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-800">
              What Our <span className="gradient-text">Patients Say</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="glass-card rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-5 italic">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary-400 to-secondary-500
                                  flex items-center justify-center text-white text-sm font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ══════════════════════════════════════════════════
          CTA BANNER
      ══════════════════════════════════════════════════ */}
      <SectionWrapper className="bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Calendar className="w-12 h-12 text-white/60 mx-auto mb-4" />
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Take Control of Your Health?
            </h2>
            <p className="text-primary-100 text-lg max-w-xl mx-auto mb-8">
              Schedule your personalised endocrinology consultation today.
              Expert care, compassionate approach.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl
                                           font-semibold text-primary-700 bg-white hover:bg-primary-50
                                           shadow-xl hover:shadow-2xl transition-all duration-300
                                           hover:-translate-y-1">
              Book Your Appointment <ChevronRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* ══════════════════════════════════════════════════
          QUICK APPOINTMENT (lazy)
      ══════════════════════════════════════════════════ */}
      <SectionWrapper id="appointment">
        <div className="container-custom max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-800">
              Quick <span className="gradient-text">Appointment</span>
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Or visit our <Link to="/contact" className="text-primary-500 hover:underline">Contact page</Link> for more details.
            </p>
          </div>
          <Suspense fallback={
            <div className="glass-card rounded-2xl p-10 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full border-4 border-primary-200 border-t-primary-500 animate-spin" />
            </div>
          }>
            <AppointmentForm />
          </Suspense>
        </div>
      </SectionWrapper>
    </>
  )
}
