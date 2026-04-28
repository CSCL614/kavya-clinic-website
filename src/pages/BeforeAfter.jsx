import React, { useState, useRef, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronRight, MoveHorizontal, Calendar, Tag, Quote } from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper.jsx'

// ── Category filter tabs ─────────────────────────────────────────────────────
const CATEGORIES = ['All', 'Diabetes', 'Thyroid', 'Hormonal', 'Weight & Metabolic']

// ── Colour maps per condition ────────────────────────────────────────────────
// Used for the rich visual placeholder panels when no real photo is available.
// Each panel renders a styled card with label + key metric + detail text.

const cases = [
  {
    id: 1,
    category: 'Diabetes',
    tag: 'TYPE 2 DIABETES',
    badge: '6 Month Result',
    title: 'HbA1c Normalized – From 11.2% to 5.9%',
    description:
      'A 48-year-old patient with poorly controlled Type 2 Diabetes achieved remarkable improvement through personalised insulin therapy, dietary counselling, and continuous glucose monitoring.',
    before: {
      label: 'HbA1c: 11.2%',
      detail: 'Fatigue · Frequent urination · Blurred vision',
      metric: '11.2%',
      metricLabel: 'HbA1c',
      img: '/src/assets/ba_diabetes2_before.png',
    },
    after: {
      label: 'HbA1c: 5.9%',
      detail: 'Full energy restored · Off two medications',
      metric: '5.9%',
      metricLabel: 'HbA1c',
      img: '/src/assets/ba_diabetes2_after.png',
    },
    stats: [
      { value: '11.2% → 5.9%', label: 'HbA1c' },
      { value: '6 months',     label: 'Duration' },
      { value: '-18 kg',       label: 'Weight Lost' },
    ],
    patient: { age: 48, gender: 'Male', duration: '6 Months' },
    colorFrom: 'from-blue-500', colorTo: 'to-cyan-500',
    colorLight: 'from-blue-50 to-cyan-50',
    beforeBg: 'from-red-400 to-orange-500',
    afterBg:  'from-blue-500 to-cyan-500',
    testimonial: "I had given up hope. Dr. Kavya changed my life completely within 6 months.",
  },
  {
    id: 2,
    category: 'Thyroid',
    tag: 'HYPOTHYROIDISM',
    badge: 'Case Study',
    title: "TSH Levels Corrected – Energy & Weight Restored",
    description:
      "A 35-year-old woman with severe Hypothyroidism and Hashimoto's Thyroiditis achieved complete symptom resolution and normalised TSH levels through optimised levothyroxine therapy.",
    before: {
      label: 'TSH: 42 mIU/L',
      detail: 'Extreme fatigue · Weight gain · Hair loss · Depression',
      metric: '42',
      metricLabel: 'TSH mIU/L',
      img: null,
    },
    after: {
      label: 'TSH: 2.1 mIU/L',
      detail: 'Normal energy · 12 kg lost · Hair regrowth',
      metric: '2.1',
      metricLabel: 'TSH mIU/L',
      img: null,
    },
    stats: [
      { value: '42 → 2.1', label: 'TSH (mIU/L)' },
      { value: '4 months', label: 'Duration' },
      { value: '-12 kg',   label: 'Weight Lost' },
    ],
    patient: { age: 35, gender: 'Female', duration: '4 Months' },
    colorFrom: 'from-teal-500', colorTo: 'to-emerald-500',
    colorLight: 'from-teal-50 to-emerald-50',
    beforeBg: 'from-slate-500 to-slate-700',
    afterBg:  'from-teal-500 to-emerald-500',
    testimonial: "My hair stopped falling and I finally feel like myself again. Truly grateful.",
  },
  {
    id: 3,
    category: 'Hormonal',
    tag: 'PCOS',
    badge: '8 Month Result',
    title: 'PCOS Managed – Cycles Regularised & Fertility Improved',
    description:
      'A 28-year-old with severe PCOS, irregular periods, and infertility achieved regular cycles and successful conception through targeted hormonal therapy and metabolic management.',
    before: {
      label: 'AMH: 8.9 ng/mL',
      detail: 'Irregular cycles · Acne · Excess hair · Infertility',
      metric: '8.9',
      metricLabel: 'AMH ng/mL',
      img: null,
    },
    after: {
      label: 'Regular Cycles',
      detail: 'Acne cleared · Normal hormones · Conceived naturally',
      metric: '28 days',
      metricLabel: 'Cycle Length',
      img: null,
    },
    stats: [
      { value: '8→28 days', label: 'Cycle Length' },
      { value: '8 months',  label: 'Duration' },
      { value: 'Yes',       label: 'Natural Conception' },
    ],
    patient: { age: 28, gender: 'Female', duration: '8 Months' },
    colorFrom: 'from-pink-500', colorTo: 'to-rose-500',
    colorLight: 'from-pink-50 to-rose-50',
    beforeBg: 'from-red-500 to-pink-600',
    afterBg:  'from-pink-400 to-rose-500',
    testimonial: "I was told I may never conceive. Dr. Kavya made it possible. Words cannot express my gratitude.",
  },
  {
    id: 4,
    category: 'Weight & Metabolic',
    tag: 'METABOLIC SYNDROME',
    badge: '1 Year Result',
    title: 'Metabolic Syndrome Reversed – Off 3 Medications',
    description:
      'A 52-year-old patient with Metabolic Syndrome, hypertension, and insulin resistance achieved full metabolic reversal through intensive lifestyle and hormonal treatment.',
    before: {
      label: 'BMI: 38 · BP: 160/100',
      detail: 'On 5 medications · Pre-diabetic · Fatty liver',
      metric: 'BMI 38',
      metricLabel: 'Before Treatment',
      img: null,
    },
    after: {
      label: 'BMI: 27 · BP: 118/76',
      detail: 'Off 3 medications · Liver normal · Great energy',
      metric: 'BMI 27',
      metricLabel: 'After Treatment',
      img: null,
    },
    stats: [
      { value: '38 → 27', label: 'BMI' },
      { value: '1 year',  label: 'Duration' },
      { value: '-3 meds', label: 'Medications Stopped' },
    ],
    patient: { age: 52, gender: 'Male', duration: '12 Months' },
    colorFrom: 'from-orange-500', colorTo: 'to-amber-500',
    colorLight: 'from-orange-50 to-amber-50',
    beforeBg: 'from-red-600 to-orange-600',
    afterBg:  'from-orange-400 to-amber-400',
    testimonial: "I came in on 5 tablets. I'm now on 2. My blood pressure is normal for the first time in 10 years.",
  },
  {
    id: 5,
    category: 'Diabetes',
    tag: 'TYPE 1 DIABETES',
    badge: 'CGM Programme',
    title: 'CGM & Insulin Pump – Time-in-Range 42% to 88%',
    description:
      'A 19-year-old with brittle Type 1 Diabetes transitioned to CGM and insulin pump therapy, dramatically improving glycaemic control and quality of life.',
    before: {
      label: 'TIR: 42%',
      detail: 'Frequent hypos · HbA1c: 9.8% · Poor quality of life',
      metric: '42%',
      metricLabel: 'Time in Range',
      img: null,
    },
    after: {
      label: 'TIR: 88%',
      detail: 'Hypos reduced 80% · HbA1c: 6.8% · Normal college life',
      metric: '88%',
      metricLabel: 'Time in Range',
      img: null,
    },
    stats: [
      { value: '42% → 88%', label: 'Time-in-Range' },
      { value: '3 months',  label: 'Duration' },
      { value: '-80%',      label: 'Hypo Episodes' },
    ],
    patient: { age: 19, gender: 'Male', duration: '3 Months' },
    colorFrom: 'from-violet-500', colorTo: 'to-purple-500',
    colorLight: 'from-violet-50 to-purple-50',
    beforeBg: 'from-violet-700 to-purple-800',
    afterBg:  'from-violet-400 to-purple-500',
    testimonial: "I can finally sleep through the night without worrying about my sugar levels.",
  },
  {
    id: 6,
    category: 'Thyroid',
    tag: 'HYPERTHYROIDISM',
    badge: "Graves' Disease",
    title: "Graves' Disease in Remission – Thyroid Stabilised",
    description:
      "A 40-year-old with Graves' Disease, palpitations, tremors, and exophthalmos achieved complete remission through precisely monitored anti-thyroid medication.",
    before: {
      label: 'FT4: 42 pmol/L',
      detail: 'Palpitations · Tremors · Bulging eyes · 14 kg weight loss',
      metric: '42',
      metricLabel: 'FT4 pmol/L',
      img: null,
    },
    after: {
      label: 'FT4: 16 pmol/L',
      detail: 'Remission achieved · Weight regained · Symptoms resolved',
      metric: '16',
      metricLabel: 'FT4 pmol/L',
      img: null,
    },
    stats: [
      { value: '42 → 16', label: 'FT4 (pmol/L)' },
      { value: '9 months', label: 'Duration' },
      { value: '+14 kg',   label: 'Weight Regained' },
    ],
    patient: { age: 40, gender: 'Female', duration: '9 Months' },
    colorFrom: 'from-sky-500', colorTo: 'to-indigo-500',
    colorLight: 'from-sky-50 to-indigo-50',
    beforeBg: 'from-sky-700 to-indigo-800',
    afterBg:  'from-sky-400 to-indigo-500',
    testimonial: "My heart no longer races. I feel calm and in control for the first time in years.",
  },
]

// ── Visual panel (used when no real photo available) ─────────────────────────
function VisualPanel({ side, data, bgGradient }) {
  const isAfter = side === 'after'
  return (
    <div className={`w-full h-full flex flex-col items-center justify-center
                     bg-gradient-to-br ${bgGradient} text-white relative overflow-hidden`}>
      {/* decorative circle */}
      <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-white/10" />
      <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full bg-white/10" />

      <p className="text-[10px] font-bold uppercase tracking-[0.18em] opacity-70 mb-2 relative z-10">
        {isAfter ? 'After' : 'Before'}
      </p>
      <p className="text-3xl font-black font-display relative z-10 drop-shadow-md">
        {data.metric}
      </p>
      <p className="text-[10px] uppercase tracking-widest opacity-70 mb-3 relative z-10">
        {data.metricLabel}
      </p>
      <div className="w-12 h-px bg-white/40 mb-3 relative z-10" />
      <p className="text-[10px] text-center px-4 leading-relaxed opacity-85 relative z-10 max-w-[160px]">
        {data.detail}
      </p>
    </div>
  )
}

// ── Draggable before/after slider card ───────────────────────────────────────
function CaseCard({ c, index }) {
  const [sliderPos, setSliderPos]   = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const [touched, setTouched]       = useState(false)
  const containerRef = useRef(null)

  // Auto-animate slider on first view to hint interactivity
  useEffect(() => {
    if (touched) return
    const t1 = setTimeout(() => setSliderPos(35), 900)
    const t2 = setTimeout(() => setSliderPos(65), 1500)
    const t3 = setTimeout(() => setSliderPos(50), 2100)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [touched])

  const updateSlider = useCallback((clientX) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(2, Math.min(clientX - rect.left, rect.width - 2))
    setSliderPos((x / rect.width) * 100)
  }, [])

  const onMouseMove  = useCallback((e) => { if (!isDragging) return; updateSlider(e.clientX) }, [isDragging, updateSlider])
  const onTouchMove  = useCallback((e) => { e.preventDefault(); updateSlider(e.touches[0].clientX) }, [updateSlider])
  const startDrag    = () => { setIsDragging(true); setTouched(true) }
  const stopDrag     = () => setIsDragging(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: 'easeOut' }}
      className="glass-card rounded-3xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
    >
      {/* ═══════════════════════════════════════════════════
          SLIDER AREA
      ═══════════════════════════════════════════════════ */}
      <div
        ref={containerRef}
        className="relative h-60 cursor-col-resize select-none overflow-hidden"
        onMouseDown={startDrag}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
        onMouseMove={onMouseMove}
        onTouchStart={startDrag}
        onTouchEnd={stopDrag}
        onTouchMove={onTouchMove}
        style={{ touchAction: 'none' }}
      >
        {/* ── LEFT HALF: AFTER image (full width, clipped) ── */}
        {/* We show AFTER on the left side (revealed by dragging right) */}
        <div className="absolute inset-0">
          {c.after.img ? (
            <img
              src={c.after.img}
              alt={`After – ${c.title}`}
              className="w-full h-full object-cover"
              draggable={false}
            />
          ) : (
            <VisualPanel side="after" data={c.after} bgGradient={c.afterBg} />
          )}
        </div>

        {/* ── RIGHT HALF: BEFORE image (clips from right) ── */}
        {/* Positioned full-width but overflow hidden, starting at sliderPos */}
        <div
          className="absolute top-0 right-0 bottom-0 overflow-hidden"
          style={{ width: `${100 - sliderPos}%` }}
        >
          <div
            className="absolute top-0 bottom-0"
            style={{ right: 0, width: containerRef.current?.offsetWidth || '400px' }}
          >
            {c.before.img ? (
              <img
                src={c.before.img}
                alt={`Before – ${c.title}`}
                className="absolute top-0 right-0 h-full object-cover"
                style={{ width: containerRef.current?.offsetWidth || '400px' }}
                draggable={false}
              />
            ) : (
              <div
                className="absolute top-0 right-0 h-full"
                style={{ width: containerRef.current?.offsetWidth || '400px' }}
              >
                <VisualPanel side="before" data={c.before} bgGradient={c.beforeBg} />
              </div>
            )}
          </div>
        </div>

        {/* ── BEFORE/AFTER labels ───────────────────────── */}
        <div className="absolute bottom-3 left-3 z-20 bg-white/90 backdrop-blur-sm text-xs
                        font-bold px-2.5 py-1 rounded-lg text-primary-700 shadow">
          AFTER
        </div>
        <div className="absolute bottom-3 right-3 z-20 bg-black/60 backdrop-blur-sm text-white
                        text-xs font-bold px-2.5 py-1 rounded-lg shadow">
          BEFORE
        </div>

        {/* ── Slider handle ─────────────────────────────── */}
        <div
          className="absolute top-0 bottom-0 z-30 flex items-center justify-center"
          style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
        >
          {/* Vertical line */}
          <div className="absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_8px_rgba(0,0,0,0.4)]" />
          {/* Circle handle */}
          <div className="relative w-9 h-9 rounded-full bg-white shadow-xl
                          flex items-center justify-center z-10 border-2 border-primary-400">
            <MoveHorizontal className="w-4 h-4 text-primary-600" />
          </div>
        </div>

        {/* ── Drag hint (fades after first touch) ──────── */}
        {!touched && (
          <div className="absolute top-3 left-1/2 -translate-x-1/2 z-20
                          bg-black/50 backdrop-blur-sm text-white text-[10px]
                          px-3 py-1 rounded-full pointer-events-none
                          flex items-center gap-1.5">
            <MoveHorizontal className="w-3 h-3" />
            Drag to compare
          </div>
        )}

        {/* ── Top badge tags ───────────────────────────── */}
        <div className="absolute top-3 left-3 z-20 flex gap-1.5">
          <span className={`bg-gradient-to-r ${c.colorFrom} ${c.colorTo} text-white
                            text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shadow`}>
            {c.tag}
          </span>
          <span className="bg-white/85 backdrop-blur-sm text-slate-700
                           text-[10px] font-semibold px-2 py-0.5 rounded-full shadow">
            {c.badge}
          </span>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          CARD CONTENT
      ═══════════════════════════════════════════════════ */}
      <div className="p-5">
        <h3 className="font-display font-bold text-slate-800 text-base mb-2 leading-snug">
          {c.title}
        </h3>
        <p className="text-sm text-slate-500 leading-relaxed mb-4">
          {c.description}
        </p>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {c.stats.map((s) => (
            <div key={s.label}
                 className={`text-center py-2 px-1 rounded-xl bg-gradient-to-br ${c.colorLight}`}>
              <p className={`text-xs font-bold bg-gradient-to-r ${c.colorFrom} ${c.colorTo}
                             bg-clip-text text-transparent leading-tight`}>
                {s.value}
              </p>
              <p className="text-[10px] text-slate-500 mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Patient info */}
        <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3 text-primary-400" />
            {c.patient.duration}
          </span>
          <span className="flex items-center gap-1">
            <Tag className="w-3 h-3 text-secondary-400" />
            Age {c.patient.age}, {c.patient.gender}
          </span>
        </div>

        {/* Testimonial */}
        <div className={`bg-gradient-to-br ${c.colorLight} rounded-xl p-3 mb-4`}>
          <Quote className="w-3.5 h-3.5 text-primary-400 mb-1" />
          <p className="text-xs text-slate-600 italic leading-relaxed">
            "{c.testimonial}"
          </p>
        </div>

        <Link
          to="/contact"
          className="inline-flex items-center gap-1 text-sm font-medium
                     text-primary-600 hover:text-secondary-600 transition-colors group/link"
        >
          Book Similar Consultation
          <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  )
}

// ── Main page component ──────────────────────────────────────────────────────
export default function BeforeAfter() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? cases
    : cases.filter(c => c.category === activeCategory)

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative py-20 bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ background: 'radial-gradient(circle at 40% 60%, #38BDF8, transparent 60%)' }} />
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium
                             text-primary-300 border border-primary-700/40 bg-primary-900/30 mb-4">
              Real Patient Results
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
              Before &amp; <span className="gradient-text-light">After</span>
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Documented clinical outcomes — drag the slider to compare before and after results
              from our endocrinology treatment programmes.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {[
                { label: '8,000+ Patients Treated', icon: '👥' },
                { label: 'Real Clinical Results',   icon: '📋' },
                { label: 'Evidence-Based Care',     icon: '🔬' },
              ].map(({ label, icon }) => (
                <div key={label} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm
                                            border border-white/10 rounded-full px-4 py-2">
                  <span>{icon}</span>
                  <span className="text-xs text-white font-medium">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none">
            <path d="M0 40L1440 40L1440 10C1100 40 600 0 300 15C100 25 0 5 0 5Z" fill="#F0F9FF" />
          </svg>
        </div>
      </section>

      {/* ── Disclaimer ───────────────────────────────────────── */}
      <div className="bg-amber-50 border-b border-amber-200">
        <div className="container-custom py-3 flex items-start gap-2">
          <span className="text-amber-500 mt-0.5">&#9432;</span>
          <p className="text-xs text-amber-800">
            <strong>Disclaimer:</strong> Results vary from patient to patient. These case studies
            represent real clinical outcomes but individual results depend on condition severity,
            compliance, and individual metabolic factors. All patient information is anonymised with consent.
          </p>
        </div>
      </div>

      {/* ── Filter + Grid ─────────────────────────────────────── */}
      <SectionWrapper>
        <div className="container-custom">

          {/* Category filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 mb-10"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                id={`filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200
                  ${activeCategory === cat
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-600 text-white shadow-lg'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-primary-300 hover:text-primary-600'
                  }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          <p className="text-sm text-slate-500 text-center mb-8">
            Showing{' '}
            <span className="font-semibold text-primary-600">{filtered.length}</span>{' '}
            case {filtered.length === 1 ? 'study' : 'studies'}
          </p>

          {/* Cards */}
          <AnimatePresence mode="popLayout">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-7"
            >
              {filtered.map((c, i) => (
                <CaseCard key={c.id} c={c} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </SectionWrapper>

      {/* ── Track Record ───────────────────────────────────────── */}
      <SectionWrapper className="bg-gradient-to-br from-primary-900 to-secondary-900">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold text-white">
              Our Clinical <span className="gradient-text-light">Track Record</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { value: '8,000+', label: 'Patients Treated',       icon: '👥' },
              { value: '94%',    label: 'HbA1c Improvement Rate', icon: '📉' },
              { value: '89%',    label: 'Thyroid Normalisation',  icon: '🦋' },
              { value: '15+',    label: 'Years of Excellence',    icon: '⭐' },
            ].map(({ value, label, icon }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-2xl bg-white/5 border border-white/10"
              >
                <div className="text-3xl mb-2">{icon}</div>
                <p className="text-3xl font-bold text-white font-display">{value}</p>
                <p className="text-xs text-slate-400 mt-1">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <SectionWrapper className="bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container-custom text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to Write Your Own Success Story?
          </h2>
          <p className="text-primary-100 max-w-xl mx-auto mb-8">
            Every transformation starts with a single consultation.
            Let Dr. Kavya create a personalised treatment plan just for you.
          </p>
          <Link to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold
                       text-primary-700 bg-white hover:bg-primary-50 shadow-xl hover:shadow-2xl
                       transition-all duration-300 hover:-translate-y-1">
            Book Your Consultation <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </SectionWrapper>
    </>
  )
}
