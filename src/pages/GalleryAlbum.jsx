import React, { useState, useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, Calendar, ZoomIn, X, ChevronRight, ImageOff } from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper.jsx'
import { galleryItems } from './Gallery.jsx'

export default function GalleryAlbum() {
  const { id } = useParams()
  const item = galleryItems.find(i => i.id.toString() === id)
  
  if (!item) {
    return <Navigate to="/gallery" />
  }

  const images = item.images && item.images.length > 0 ? item.images : (item.img ? [item.img] : [])
  const [lightboxIndex, setLightboxIndex] = useState(null)

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handler = (e) => {
      if (lightboxIndex === null) return
      if (e.key === 'Escape') setLightboxIndex(null)
      if (e.key === 'ArrowRight' && images.length > 1) setLightboxIndex((lightboxIndex + 1) % images.length)
      if (e.key === 'ArrowLeft' && images.length > 1) setLightboxIndex((lightboxIndex - 1 + images.length) % images.length)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightboxIndex, images.length])

  return (
    <>
      {/* ── Album Header ────────────────────────────────────────── */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary-50 to-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-200/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="container-custom relative z-10">
          <Link to="/gallery" className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-800 mb-8 transition-colors bg-white px-4 py-2 rounded-full shadow-sm border border-primary-100 hover:shadow-md">
            <ChevronLeft className="w-4 h-4" /> Back to Gallery
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <div className="flex flex-wrap gap-3 mb-6">
              <span className={`bg-gradient-to-r ${item.gradient} text-white text-[11px] font-bold px-3.5 py-1.5 rounded-full uppercase tracking-widest shadow-sm`}>
                {item.category}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-slate-500 font-medium bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-sm">
                <Calendar className="w-4 h-4 text-primary-500" /> {item.date}
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              {item.title}
            </h1>
            <p className="text-slate-600 text-lg sm:text-xl leading-relaxed max-w-3xl">
              {item.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Photo Grid ──────────────────────────────────────────── */}
      <SectionWrapper className="bg-white pt-4">
        <div className="container-custom">
          {images.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
              {images.map((imgUrl, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer bg-slate-100 shadow-sm hover:shadow-xl transition-all"
                  onClick={() => setLightboxIndex(i)}
                >
                  <img src={imgUrl} alt={`${item.title} - Photo ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center scale-50 group-hover:scale-100 transition-transform duration-300">
                      <ZoomIn className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-slate-50 rounded-3xl border border-slate-100">
              <ImageOff className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <h3 className="font-display text-xl font-bold text-slate-700 mb-2">No photos available</h3>
              <p className="text-slate-500">Photos for this event will be uploaded soon.</p>
            </div>
          )}
        </div>
      </SectionWrapper>

      {/* ── Fullscreen Lightbox ─────────────────────────────────── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close button */}
            <button 
              onClick={() => setLightboxIndex(null)} 
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 hover:scale-105 transition-all z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Main Image */}
            <motion.img 
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              src={images[lightboxIndex]} 
              alt="" 
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl" 
              onClick={e => e.stopPropagation()} 
            />

            {/* Navigation arrows (if multiple images) */}
            {images.length > 1 && (
              <>
                <button 
                  onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex - 1 + images.length) % images.length) }} 
                  className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-black/50 border border-white/10 text-white flex items-center justify-center hover:bg-primary-600 hover:scale-105 transition-all"
                >
                  <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex + 1) % images.length) }} 
                  className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-black/50 border border-white/10 text-white flex items-center justify-center hover:bg-primary-600 hover:scale-105 transition-all"
                >
                  <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
                </button>
                
                {/* Counter */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full text-white/90 text-sm font-semibold tracking-widest">
                  {lightboxIndex + 1} / {images.length}
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
