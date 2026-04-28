import React, { useState, useEffect, useRef } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, ChevronRight, Activity } from 'lucide-react'

const navLinks = [
  { to: '/',             label: 'Home',           emoji: '🏠' },
  { to: '/about',        label: 'About',          emoji: '👩‍⚕️' },
  { to: '/services',     label: 'Services',       emoji: '🩺' },
  { to: '/before-after', label: 'Before & After', emoji: '✨' },
  { to: '/gallery',      label: 'Gallery',        emoji: '🖼️' },
  { to: '/contact',      label: 'Contact',        emoji: '📞' },
]

export default function Navbar() {
  const [isOpen,   setIsOpen]   = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeRect, setActiveRect] = useState(null)
  const navRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on resize past md breakpoint
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setIsOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const close = () => setIsOpen(false)

  /* ── Stagger variants for mobile menu items ── */
  const mobileMenuVariants = {
    open:   { opacity: 1, height: 'auto', transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
    closed: { opacity: 0, height: 0,     transition: { staggerChildren: 0.04, staggerDirection: -1 } },
  }

  const mobileLinkVariants = {
    open:   { opacity: 1, x: 0,   transition: { type: 'spring', stiffness: 300, damping: 24 } },
    closed: { opacity: 0, x: -16, transition: { duration: 0.2 } },
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'navbar-glass-premium shadow-nav'
          : 'bg-transparent'
      }`}
    >
      {/* ── Top accent line ── */}
      <div className="h-0.5 w-full bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-400" />

      <nav
        ref={navRef}
        className="container-custom px-4 sm:px-6 flex items-center justify-between h-[68px]"
      >

        {/* ── Logo ── */}
        <Link to="/" onClick={close} className="flex items-center gap-3 group shrink-0">
          <div className="relative">
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary-400 to-secondary-500
                             opacity-0 group-hover:opacity-40 scale-100 group-hover:scale-125
                             transition-all duration-500 blur-sm" />
            <div className="relative w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden
                            bg-white
                            shadow-lg shadow-primary-200 group-hover:shadow-primary-300
                            group-hover:scale-105 transition-all duration-300">
              <img src="/logo.png" alt="Dr. Kavya Logo" className="w-full h-full object-contain p-1" />
            </div>
          </div>
          <div className="leading-tight">
            <p className="text-[15px] font-bold text-slate-800 font-display tracking-tight
                          group-hover:text-primary-700 transition-colors duration-200">
              Dr. Kavya's
            </p>
            <p className="text-[11px] text-slate-400 font-medium -mt-0.5 tracking-wide">
              Endocrinology &amp; Diabetes
            </p>
          </div>
        </Link>

        {/* ── Desktop Nav ── */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink to={to} end={to === '/'}>
                {({ isActive }) => (
                  <motion.span
                    className={`relative inline-flex items-center px-3.5 py-2 rounded-xl text-sm font-medium
                                cursor-pointer select-none transition-colors duration-200 ${
                      isActive
                        ? 'text-primary-700'
                        : 'text-slate-600 hover:text-primary-600'
                    }`}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  >
                    {/* Active pill background */}
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-50 to-secondary-50
                                   border border-primary-200/60"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                    {/* Hover bg (non-active) */}
                    {!isActive && (
                      <span className="absolute inset-0 rounded-xl bg-slate-100/0 hover:bg-slate-100/70
                                       transition-colors duration-200" />
                    )}
                    <span className="relative z-10 flex items-center gap-1.5">
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500
                                         shadow-sm shadow-primary-300" />
                      )}
                      {label}
                    </span>
                  </motion.span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ── CTA + Hamburger ── */}
        <div className="flex items-center gap-2.5">
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-white
                       px-4 py-2.5 rounded-xl btn-primary-nav
                       transition-all duration-300"
          >
            <Phone className="w-3.5 h-3.5" />
            Book Appointment
          </Link>

          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center
                       text-slate-600 hover:text-primary-600
                       bg-white/60 hover:bg-primary-50
                       border border-slate-200/70 hover:border-primary-200
                       transition-all duration-200 shadow-sm"
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen
                ? <motion.span key="x"
                    initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <X className="w-5 h-5" />
                  </motion.span>
                : <motion.span key="menu"
                    initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <Menu className="w-5 h-5" />
                  </motion.span>
              }
            </AnimatePresence>
          </motion.button>
        </div>
      </nav>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden overflow-hidden"
          >
            <div className="navbar-glass-premium border-t border-primary-100/60 px-4 pb-5 pt-3">

              {/* Links */}
              <motion.ul className="flex flex-col gap-1 mb-4">
                {navLinks.map(({ to, label, emoji }) => (
                  <motion.li key={to} variants={mobileLinkVariants}>
                    <NavLink
                      to={to}
                      onClick={close}
                      end={to === '/'}
                      className={({ isActive }) =>
                        `flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium
                         transition-colors duration-200 ${
                          isActive
                            ? 'bg-gradient-to-r from-primary-50 to-secondary-50 text-primary-700 border border-primary-200/50'
                            : 'text-slate-600 hover:bg-slate-50 hover:text-primary-600'
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <span className="flex items-center gap-3">
                            <span className="text-base">{emoji}</span>
                            {label}
                          </span>
                          {isActive
                            ? <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500" />
                            : <ChevronRight className="w-4 h-4 text-slate-300" />
                          }
                        </>
                      )}
                    </NavLink>
                  </motion.li>
                ))}
              </motion.ul>

              {/* CTA */}
              <motion.div variants={mobileLinkVariants}>
                <Link
                  to="/contact"
                  onClick={close}
                  className="btn-primary flex items-center justify-center gap-2 w-full py-3 text-sm rounded-xl"
                >
                  <Phone className="w-4 h-4" />
                  Book an Appointment
                </Link>
              </motion.div>

              {/* Sub-info */}
              <motion.p
                variants={mobileLinkVariants}
                className="text-center text-xs text-slate-400 mt-3"
              >
                Mon – Sat &nbsp;·&nbsp; 9 AM – 6 PM
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
