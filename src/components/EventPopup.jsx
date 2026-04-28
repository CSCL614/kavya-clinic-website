import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { X, Calendar, Clock, ArrowRight, Bell, BellOff } from 'lucide-react'

// ── Event Data ────────────────────────────────────────────────────────────────
// Set `isActive: false` to hide popup globally.
// Change `id` whenever the event changes → forces popup to show again for all users.
const EVENT = {
  id:          'diabetes-camp-apr-2026',           // change this when event changes
  isActive:    true,
  tag:         'Free Event',
  title:       'Free Diabetes Screening Camp',
  description: 'Join us for a free diabetes screening & consultation camp open to all. Early detection saves lives — get your HbA1c, fasting glucose, and BMI checked at no cost.',
  date:        'Sunday, April 30, 2026',
  time:        '9:00 AM – 2:00 PM',
  venue:       'Dr. Kavya\'s Clinic, Medical Colony, Hyderabad',
  ctaLabel:    'Book Appointment',
  ctaLink:     '/contact',
  remindLabel: 'Remind Me Later',
  autoCloseMs: 12000,                              // auto-close after 12 seconds (0 = disabled)
}

const LS_KEY = `eventPopupSeen_${EVENT.id}`

// ── Countdown bar component ──────────────────────────────────────────────────
function AutoCloseBar({ totalMs, onClose }) {
  const [width, setWidth] = useState(100)

  useEffect(() => {
    if (width <= 0) { onClose(); return }
  }, [width, onClose])

  useEffect(() => {
    const interval = 50
    const step = (interval / totalMs) * 100
    const timer = setInterval(() => {
      setWidth(prev => Math.max(0, prev - step))
    }, interval)
    return () => clearInterval(timer)
  }, [totalMs])

  return (
    <div className="w-full h-0.5 bg-slate-100 overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-primary-400 to-secondary-500
                   transition-none"
        style={{ width: `${width}%` }}
      />
    </div>
  )
}

// ── Main component ────────────────────────────────────────────────────────────
export default function EventPopup() {
  const [visible, setVisible] = useState(false)

  // Check localStorage and show after delay
  useEffect(() => {
    if (!EVENT.isActive) return
    const seen = localStorage.getItem(LS_KEY)
    if (seen) return
    const timer = setTimeout(() => setVisible(true), 1400)
    return () => clearTimeout(timer)
  }, [])

  const dismiss = (permanent = true) => {
    setVisible(false)
    if (permanent) localStorage.setItem(LS_KEY, '1')
    // "Remind me later" → don't set localStorage, just close for this session
  }

  const remindLater = () => {
    setVisible(false)
    // Will re-show on next page load since we don't persist to localStorage
  }

  if (!EVENT.isActive) return null

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* ── Backdrop ───────────────────────────────────── */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm"
            onClick={() => dismiss(false)}
            aria-hidden="true"
          />

          {/* ── Modal ──────────────────────────────────────── */}
          <motion.div
            key="popup"
            role="dialog"
            aria-modal="true"
            aria-labelledby="event-popup-title"
            initial={{ opacity: 0, scale: 0.88, y: 24 }}
            animate={{ opacity: 1, scale: 1,    y: 0  }}
            exit={{ opacity: 0,  scale: 0.88, y: 24  }}
            transition={{ duration: 0.35, ease: [0.34, 1.26, 0.64, 1] }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
            style={{ pointerEvents: 'none' }}
          >
            <div
              className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden"
              style={{ pointerEvents: 'auto' }}
              onClick={e => e.stopPropagation()}
            >
              {/* Auto-close progress bar */}
              {EVENT.autoCloseMs > 0 && (
                <AutoCloseBar totalMs={EVENT.autoCloseMs} onClose={() => dismiss(false)} />
              )}

              {/* ── Header banner ────────────────────────── */}
              <div className="relative bg-hero-gradient px-6 pt-6 pb-8 overflow-hidden">
                {/* Decorative blobs */}
                <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-primary-400/20" />
                <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-secondary-400/20" />

                {/* Close button */}
                <button
                  onClick={() => dismiss(true)}
                  id="popup-close"
                  aria-label="Close popup"
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/15 hover:bg-white/30
                             flex items-center justify-center text-white transition-colors duration-200 z-10"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Tag */}
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full
                                 bg-white/15 text-white text-[11px] font-semibold uppercase
                                 tracking-widest mb-3 relative z-10">
                  <Bell className="w-3 h-3" />
                  {EVENT.tag}
                </span>

                {/* Title */}
                <h2
                  id="event-popup-title"
                  className="font-display text-2xl font-bold text-white leading-tight relative z-10"
                >
                  {EVENT.title}
                </h2>
              </div>

              {/* Curved divider */}
              <div className="relative -mt-4 bg-white">
                <svg viewBox="0 0 400 20" preserveAspectRatio="none" className="w-full">
                  <path d="M0 20 Q200 0 400 20" fill="#0F172A" />
                  <path d="M0 20 Q200 0 400 20 L400 0 L0 0Z" fill="#0C4A6E" />
                  <path d="M0 20 Q200 2 400 20 L400 20 L0 20Z" fill="white" />
                </svg>
              </div>

              {/* ── Body ─────────────────────────────────── */}
              <div className="px-6 pb-6">
                <p className="text-slate-600 text-sm leading-relaxed mb-5">
                  {EVENT.description}
                </p>

                {/* Event details */}
                <div className="space-y-2.5 mb-6">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-primary-50">
                    <div className="w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center shrink-0">
                      <Calendar className="w-4 h-4 text-primary-600" />
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold text-primary-500 uppercase tracking-widest">Date</p>
                      <p className="text-sm font-semibold text-slate-800">{EVENT.date}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary-50">
                    <div className="w-8 h-8 rounded-lg bg-secondary-100 flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4 text-secondary-600" />
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold text-secondary-500 uppercase tracking-widest">Time</p>
                      <p className="text-sm font-semibold text-slate-800">{EVENT.time}</p>
                    </div>
                  </div>

                  {EVENT.venue && (
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50">
                      <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-base">📍</span>
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Venue</p>
                        <p className="text-sm font-semibold text-slate-800 leading-snug">{EVENT.venue}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* CTA buttons */}
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <Link
                    to={EVENT.ctaLink}
                    onClick={() => dismiss(true)}
                    id="popup-cta"
                    className="flex-1 btn-primary justify-center text-sm py-3"
                  >
                    {EVENT.ctaLabel}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <button
                    onClick={remindLater}
                    className="flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl
                               text-sm font-medium text-slate-500 hover:text-slate-700
                               hover:bg-slate-100 transition-colors duration-200"
                  >
                    <BellOff className="w-4 h-4" />
                    {EVENT.remindLabel}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
