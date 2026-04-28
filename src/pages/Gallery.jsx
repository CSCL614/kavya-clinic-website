import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import {
  X, ChevronLeft, ChevronRight, ZoomIn,
  Calendar, Tag, ImageOff, Upload
} from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper.jsx'

// ─────────────────────────────────────────────────────────────────────────────
// GALLERY DATA
// To add a real image: set `img: '/src/assets/your-image.png'`
// To use a styled placeholder: leave `img: null`
// ─────────────────────────────────────────────────────────────────────────────
export const galleryItems = [
  // ── Events ────────────────────────────────────────────────────────────────
  {
    id: 1,
    category: 'Events',
    title: 'Free Diabetes Screening Camp',
    date: 'April 2026',
    description: 'Over 200 patients attended our free diabetes screening camp. HbA1c, fasting glucose and BMI checks were provided at zero cost.',
    images: [
      '/src/assets/gallery_diabetes_camp.png',
      '/src/assets/doctor_kavya.png',
      '/src/assets/hero.png'
    ],
    span: 'col-span-2 row-span-2',   // featured large card
    gradient: 'from-blue-500 to-cyan-600',
    icon: '🩺',
    tags: ['Free Camp', 'Diabetes', '200+ Attended'],
  },
  {
    id: 2,
    category: 'Events',
    title: 'World Diabetes Day 2025',
    date: 'November 2025',
    description: 'We celebrated World Diabetes Day with an awareness walk, free consultations and educational pamphlets for the community.',
    img: null,
    span: '',
    gradient: 'from-blue-600 to-indigo-700',
    icon: '🌍',
    tags: ['Awareness', 'World Diabetes Day'],
  },
  {
    id: 3,
    category: 'Health Camps',
    title: 'Thyroid Awareness Camp',
    date: 'March 2026',
    description: 'A dedicated thyroid health camp where TSH tests and consultations were offered free of charge to the public.',
    img: null,
    span: '',
    gradient: 'from-teal-500 to-emerald-600',
    icon: '🦋',
    tags: ['Free Camp', 'Thyroid', 'TSH Screening'],
  },
  {
    id: 4,
    category: 'Awards',
    title: 'Best Endocrinologist Award 2025',
    date: 'December 2025',
    description: "Dr. Kavya was honoured with the 'Best Endocrinologist of the Year 2025' award by the Hyderabad Medical Association.",
    img: null,
    span: '',
    gradient: 'from-amber-500 to-orange-600',
    icon: '🏆',
    tags: ['Award', 'Recognition', '2025'],
  },
  {
    id: 5,
    category: 'Health Camps',
    title: 'PCOS Awareness Programme',
    date: 'February 2026',
    description: 'An interactive programme for women covering PCOS symptoms, lifestyle modification, and hormone health — attended by 150+ women.',
    img: null,
    span: '',
    gradient: 'from-pink-500 to-rose-600',
    icon: '💜',
    tags: ['PCOS', "Women's Health", 'Awareness'],
  },
  {
    id: 6,
    category: 'Clinic',
    title: 'New Clinic Inauguration',
    date: 'January 2026',
    description: 'Grand inauguration of our expanded clinic with state-of-the-art endocrinology equipment and a dedicated diabetes management centre.',
    img: null,
    span: 'col-span-2',
    gradient: 'from-violet-500 to-purple-700',
    icon: '🏥',
    tags: ['Milestone', 'New Clinic', '2026'],
  },
  {
    id: 7,
    category: 'Events',
    title: 'Metabolic Health Seminar',
    date: 'October 2025',
    description: 'A CME seminar on metabolic syndrome management hosted at our clinic for general physicians and endocrinologists.',
    img: null,
    span: '',
    gradient: 'from-sky-500 to-blue-600',
    icon: '🎓',
    tags: ['CME', 'Doctors', 'Seminar'],
  },
  {
    id: 8,
    category: 'Team',
    title: 'Our Medical Team',
    date: 'Ongoing',
    description: 'Our dedicated team of endocrinologists, nurses, and support staff committed to providing the best hormonal healthcare.',
    img: null,
    span: '',
    gradient: 'from-slate-600 to-slate-800',
    icon: '👩‍⚕️',
    tags: ['Team', 'Staff', 'Professionals'],
  },
  {
    id: 9,
    category: 'Health Camps',
    title: 'Bone Health & Osteoporosis Camp',
    date: 'January 2026',
    description: 'Free DEXA scan consultations and calcium/Vitamin D assessments for elderly patients and post-menopausal women.',
    img: null,
    span: '',
    gradient: 'from-stone-400 to-stone-600',
    icon: '🦴',
    tags: ['Osteoporosis', 'Free Camp', 'Elderly'],
  },
  {
    id: 10,
    category: 'Awards',
    title: 'Research Publication Achievement',
    date: 'September 2025',
    description: "Dr. Kavya's research paper on insulin resistance and metabolic syndrome was published in the Indian Journal of Endocrinology.",
    img: null,
    span: '',
    gradient: 'from-emerald-500 to-teal-700',
    icon: '📄',
    tags: ['Research', 'Publication', 'Journal'],
  },
  {
    id: 11,
    category: 'Clinic',
    title: 'CGM Technology Launch',
    date: 'August 2025',
    description: 'Launch of our dedicated Continuous Glucose Monitoring programme for Type 1 and brittle Type 2 diabetics.',
    img: null,
    span: '',
    gradient: 'from-cyan-500 to-blue-700',
    icon: '📡',
    tags: ['Technology', 'CGM', 'Innovation'],
  },
  {
    id: 12,
    category: 'Events',
    title: 'Community Health Walk',
    date: 'July 2025',
    description: 'A 5 KM health awareness walk organised in collaboration with local RWA to promote metabolic fitness and healthy living.',
    img: null,
    span: '',
    gradient: 'from-green-500 to-emerald-600',
    icon: '🚶',
    tags: ['Walk', 'Community', 'Fitness'],
  },
]

const CATEGORIES = ['All', 'Events', 'Health Camps', 'Awards', 'Clinic', 'Team']

// ─────────────────────────────────────────────────────────────────────────────
// PLACEHOLDER CARD (when no real image)
// ─────────────────────────────────────────────────────────────────────────────
function PlaceholderPanel({ item }) {
  return (
    <div className={`w-full h-full flex flex-col items-center justify-center
                     bg-gradient-to-br ${item.gradient} relative overflow-hidden`}>
      <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/10" />
      <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-white/10" />
      <div className="absolute top-4 left-4 flex gap-1.5 flex-wrap z-10">
        {item.tags.slice(0, 2).map(t => (
          <span key={t} className="text-[9px] font-bold uppercase tracking-wider
                                   bg-white/20 text-white px-2 py-0.5 rounded-full">
            {t}
          </span>
        ))}
      </div>
      <span className="text-5xl mb-3 relative z-10 drop-shadow-lg">{item.icon}</span>
      <p className="text-white font-bold text-center px-4 relative z-10 font-display text-sm leading-snug">
        {item.title}
      </p>
      <p className="text-white/70 text-[10px] mt-1 relative z-10">{item.date}</p>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// LIGHTBOX
// ─────────────────────────────────────────────────────────────────────────────
function Lightbox({ items, activeIndex, onClose, onPrev, onNext }) {
  const item = items[activeIndex]
  const images = item.images && item.images.length > 0 ? item.images : (item.img ? [item.img] : [])
  const hasMultiple = images.length > 1
  const [photoIndex, setPhotoIndex] = useState(0)

  // Reset internal photo index when changing cards
  useEffect(() => {
    setPhotoIndex(0)
  }, [activeIndex])

  const nextPhoto = (e) => {
    e.stopPropagation()
    setPhotoIndex(p => (p + 1) % images.length)
  }
  const prevPhoto = (e) => {
    e.stopPropagation()
    setPhotoIndex(p => (p - 1 + images.length) % images.length)
  }

  // Keyboard navigation
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') {
        if (hasMultiple && photoIndex < images.length - 1) setPhotoIndex(p => p + 1)
        else onNext()
      }
      if (e.key === 'ArrowLeft') {
        if (hasMultiple && photoIndex > 0) setPhotoIndex(p => p - 1)
        else onPrev()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose, onPrev, onNext, hasMultiple, photoIndex, images.length])

  return (
    <AnimatePresence>
      <motion.div
        key="lightbox-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-[200] bg-black/92 backdrop-blur-sm
                   flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Modal box */}
        <motion.div
          key={item.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl"
          onClick={e => e.stopPropagation()}
        >
          {/* Image / Placeholder */}
          <div className="relative h-72 sm:h-96 overflow-hidden group/lbimg">
            {images.length > 0 ? (
              <AnimatePresence mode="wait">
                <motion.img
                  key={photoIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  src={images[photoIndex]} 
                  alt={`${item.title} - Photo ${photoIndex + 1}`}
                  className="w-full h-full object-cover" 
                />
              </AnimatePresence>
            ) : (
              <PlaceholderPanel item={item} />
            )}

            {/* Photo controls inside image for multi-image cards */}
            {hasMultiple && (
              <>
                <button onClick={prevPhoto} className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover/lbimg:opacity-100 transition-opacity z-20 hover:bg-primary-600">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button onClick={nextPhoto} className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover/lbimg:opacity-100 transition-opacity z-20 hover:bg-primary-600">
                  <ChevronRight className="w-5 h-5" />
                </button>
                
                {/* Photo dots */}
                <div className="absolute bottom-[3.25rem] left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                  {images.map((_, i) => (
                    <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === photoIndex ? 'bg-white w-4' : 'bg-white/50 w-1.5'}`} />
                  ))}
                </div>
              </>
            )}

            {/* Gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            {/* Close */}
            <button onClick={onClose} id="lightbox-close"
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50
                               backdrop-blur-sm text-white hover:bg-black/70 flex items-center
                               justify-center transition-colors z-10">
              <X className="w-5 h-5" />
            </button>

            {/* Counter */}
            <span className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white
                             text-xs font-semibold px-3 py-1 rounded-full z-10">
              {activeIndex + 1} / {items.length}
            </span>

            {/* Category tag */}
            <span className={`absolute bottom-4 left-4 bg-gradient-to-r ${item.gradient}
                              text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase
                              tracking-widest z-10`}>
              {item.category}
            </span>
          </div>

          {/* Info */}
          <div className="p-6">
            <div className="flex items-start justify-between mb-2 gap-4">
              <h3 className="font-display font-bold text-slate-800 text-xl leading-snug">
                {item.title}
              </h3>
              <span className="flex items-center gap-1 text-xs text-slate-400 shrink-0 mt-1">
                <Calendar className="w-3.5 h-3.5" />
                {item.date}
              </span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed mb-4">{item.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {item.tags.map(t => (
                <span key={t} className="text-xs bg-primary-50 text-primary-700
                                         font-medium px-2.5 py-1 rounded-full border border-primary-100">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Prev / Next navigation */}
          <div className="absolute top-36 left-3 sm:left-4">
            <button onClick={onPrev} id="lightbox-prev"
                    className="w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm text-white
                               hover:bg-primary-600 flex items-center justify-center transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
          <div className="absolute top-36 right-3 sm:right-4">
            <button onClick={onNext} id="lightbox-next"
                    className="w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm text-white
                               hover:bg-primary-600 flex items-center justify-center transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// GALLERY CARD
// ─────────────────────────────────────────────────────────────────────────────
function GalleryCard({ item, index }) {
  const navigate = useNavigate()
  const isLarge = item.span === 'col-span-2 row-span-2'
  const isWide  = item.span === 'col-span-2'

  const images = item.images && item.images.length > 0 ? item.images : (item.img ? [item.img] : [])
  const displayImg = images[0]
  const hasMultiple = images.length > 1

  // Convert "col-span-2" to "sm:col-span-2" so it doesn't break mobile 1-col grid
  const responsiveSpan = item.span
    ? item.span.split(' ').map(s => `sm:${s}`).join(' ')
    : ''

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: 'easeOut' }}
      className={`group relative overflow-hidden rounded-2xl cursor-pointer
                  ${responsiveSpan}
                  ${isLarge ? 'min-h-[250px] sm:min-h-[340px]' : isWide ? 'min-h-[200px]' : 'min-h-[220px]'}`}
      onClick={() => navigate(`/gallery/${item.id}`)}
    >
      {/* Image or Placeholder */}
      <div className="absolute inset-0">
        {displayImg ? (
          <img src={displayImg} alt={item.title}
               className="w-full h-full object-cover
                          group-hover:scale-105 transition-transform duration-500 ease-out" />
        ) : (
          <div className="w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out">
            <PlaceholderPanel item={item} />
          </div>
        )}
      </div>

      {/* Multiple images indicator */}
      {hasMultiple && (
        <div className="absolute top-3 right-14 h-8 px-2.5 rounded-full bg-black/60 backdrop-blur-sm
                        flex items-center justify-center text-white text-xs font-bold shadow-md border border-white/10">
          +{images.length - 1} photos
        </div>
      )}

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Hover content */}
      <div className="absolute inset-0 flex flex-col justify-end p-4
                      translate-y-3 group-hover:translate-y-0
                      transition-transform duration-300 opacity-0 group-hover:opacity-100">
        <p className="text-white font-display font-bold text-sm leading-snug mb-1 drop-shadow">
          {item.title}
        </p>
        <p className="text-white/70 text-xs flex items-center gap-1">
          <Calendar className="w-3 h-3" /> {item.date}
        </p>
      </div>

      {/* Zoom icon on hover */}
      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm
                      flex items-center justify-center opacity-0 group-hover:opacity-100
                      scale-75 group-hover:scale-100 transition-all duration-300">
        <ZoomIn className="w-4 h-4 text-primary-600" />
      </div>

      {/* Category pill always visible */}
      <div className="absolute top-3 left-3">
        <span className={`bg-gradient-to-r ${item.gradient} text-white text-[9px]
                          font-bold px-2 py-0.5 rounded-full uppercase tracking-widest shadow`}>
          {item.category}
        </span>
      </div>
    </motion.div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN GALLERY PAGE
// ─────────────────────────────────────────────────────────────────────────────
export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(i => i.category === activeCategory)

  return (
    <>
      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="relative py-20 bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ background: 'radial-gradient(circle at 60% 40%, #38BDF8, transparent 60%)' }} />
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium
                             text-primary-300 border border-primary-700/40 bg-primary-900/30 mb-4">
              Moments & Memories
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
              Our <span className="gradient-text-light">Gallery</span>
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              A visual journey through our health camps, events, clinic milestones,
              and community outreach programmes.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {[
                { label: '20+ Events Hosted',       icon: '🎉' },
                { label: '5,000+ Lives Touched',    icon: '❤️' },
                { label: 'Free Health Camps',        icon: '🩺' },
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

      {/* ── Gallery ────────────────────────────────────────── */}
      <SectionWrapper>
        <div className="container-custom">

          {/* Category filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 mb-10"
          >
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                id={`gallery-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200
                  ${activeCategory === cat
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-600 text-white shadow-lg'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-primary-300 hover:text-primary-600'
                  }`}
              >
                {cat}
                <span className={`ml-1.5 text-[10px] rounded-full px-1.5 py-0.5 font-bold
                  ${activeCategory === cat ? 'bg-white/20' : 'bg-slate-100 text-slate-500'}`}>
                  {cat === 'All'
                    ? galleryItems.length
                    : galleryItems.filter(i => i.category === cat).length}
                </span>
              </button>
            ))}
          </motion.div>

          {/* Add images notice */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 bg-primary-50 border border-primary-100
                       rounded-2xl px-5 py-3 mb-8"
          >
            <Upload className="w-4 h-4 text-primary-500 shrink-0" />
            <p className="text-xs text-primary-700">
              <strong>Adding real photos:</strong> Replace{' '}
              <code className="bg-primary-100 px-1.5 py-0.5 rounded text-[11px]">img: null</code>{' '}
              with{' '}
              <code className="bg-primary-100 px-1.5 py-0.5 rounded text-[11px]">
                images: ['/src/assets/photo1.jpg', '/src/assets/photo2.jpg']
              </code>{' '}
              in <code className="bg-primary-100 px-1.5 py-0.5 rounded text-[11px]">Gallery.jsx</code> to add photos for each card.
            </p>
          </motion.div>

          {/* Masonry Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4
                         auto-rows-[200px] sm:auto-rows-[180px] grid-flow-dense"
            >
              {filtered.map((item, i) => (
                <GalleryCard
                  key={item.id}
                  item={item}
                  index={i}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="text-center py-20">
              <ImageOff className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <p className="text-slate-400 font-medium">No items in this category yet.</p>
            </div>
          )}
        </div>
      </SectionWrapper>

      {/* ── Submit Your Photos CTA ────────────────────────── */}
      <SectionWrapper className="bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom">
          <div className="glass-card rounded-3xl p-8 sm:p-12 text-center max-w-2xl mx-auto">
            <div className="text-5xl mb-4">📸</div>
            <h2 className="font-display text-2xl font-bold text-slate-800 mb-3">
              Were You at One of Our Events?
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Share your photos from our health camps or events with us!
              Tag us or send your photos to be featured in this gallery.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="btn-primary text-sm">
                Send Us Your Photos
              </Link>
              <a
                href="mailto:info@drkavyaendo.com"
                className="btn-outline text-sm"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ── CTA ──────────────────────────────────────────── */}
      <SectionWrapper className="bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container-custom text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
            Want to Join Our Next Event?
          </h2>
          <p className="text-primary-100 max-w-xl mx-auto mb-8">
            Stay updated on upcoming health camps, free screenings, and awareness programmes.
          </p>
          <Link to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold
                       text-primary-700 bg-white hover:bg-primary-50 shadow-xl
                       hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            Get Notified <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </SectionWrapper>

    </>
  )
}
