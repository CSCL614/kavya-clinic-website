import React, { lazy, Suspense, useLayoutEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Layout from './components/Layout.jsx'
import AnimatedBackground from './animations/AnimatedBackground.jsx'
import EventPopup from './components/EventPopup.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

// ── Lazy-loaded pages ────────────────────────────────────────────────────────
const Home         = lazy(() => import('./pages/Home.jsx'))
const About        = lazy(() => import('./pages/About.jsx'))
const Services     = lazy(() => import('./pages/Services.jsx'))
const BeforeAfter  = lazy(() => import('./pages/BeforeAfter.jsx'))
const Gallery      = lazy(() => import('./pages/Gallery.jsx'))
const Contact      = lazy(() => import('./pages/Contact.jsx'))

// ── Page transition variants ─────────────────────────────────────────────────
const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  // Exit is instant — old page disappears immediately so users never see it
  exit:    { opacity: 0, transition: { duration: 0 } },
}

// ── Suspense fallback ─────────────────────────────────────────────────────────
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 rounded-full border-4 border-primary-200 border-t-primary-500 animate-spin" />
      <p className="text-sm text-slate-500 font-medium">Loading…</p>
    </div>
  </div>
)

// ── Animated route wrapper ────────────────────────────────────────────────────
// Scroll to top here (on mount of the ENTERING page) rather than on route
// change, so the reset happens after the old page has already exited.
const AnimatedPage = ({ children }) => {
  useLayoutEffect(() => {
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [])

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  )
}

export default function App() {
  const location = useLocation()

  return (
    <>
      {/* Reset scroll position on every route change */}
      <ScrollToTop />

      {/* Global animated background — renders once, stays fixed */}
      <AnimatedBackground />

      {/* Global event popup — renders above everything, z-[100] */}
      <EventPopup />

      <Layout>
        <Suspense fallback={<PageLoader />}>
          <AnimatePresence mode="wait" initial={false}>
            <Routes location={location} key={location.pathname}>
              <Route path="/"              element={<AnimatedPage><Home /></AnimatedPage>} />
              <Route path="/about"         element={<AnimatedPage><About /></AnimatedPage>} />
              <Route path="/services"      element={<AnimatedPage><Services /></AnimatedPage>} />
              <Route path="/before-after"  element={<AnimatedPage><BeforeAfter /></AnimatedPage>} />
              <Route path="/gallery"       element={<AnimatedPage><Gallery /></AnimatedPage>} />
              <Route path="/contact"       element={<AnimatedPage><Contact /></AnimatedPage>} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </Layout>
    </>
  )
}
