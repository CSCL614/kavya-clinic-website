import React from 'react'
import { Link } from 'react-router-dom'
import { Heart, Phone, Mail, MapPin, Clock } from 'lucide-react'

// Inline SVG social icons (lucide-react doesn't export social brand icons)
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
)
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
  </svg>
)

const quickLinks = [
  { to: '/',             label: 'Home'           },
  { to: '/about',        label: 'About Us'       },
  { to: '/services',     label: 'Services'       },
  { to: '/before-after', label: 'Before & After' },
  { to: '/gallery',      label: 'Gallery'        },
  { to: '/contact',      label: 'Contact'        },
]

const services = [
  'Diabetes Management',
  'Thyroid Disorders',
  'Hormonal Imbalance',
  'Metabolic Syndrome',
  'Osteoporosis',
  'Pediatric Endocrinology',
]

export default function Footer() {
  return (
    <footer className="relative z-10 bg-dark text-slate-300 pt-16 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-slate-700/60 text-center md:text-left justify-items-center md:justify-items-start">

          {/* ── Brand ──────────────────────────────────── */}
          <div>
            <Link to="/" className="flex items-center justify-center md:justify-start gap-2.5 mb-4 group">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden
                              bg-white shadow-lg p-1">
                <img src="/logo.png" alt="Dr. Kavya Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <p className="text-sm font-bold text-white font-display">Dr. Kavya's</p>
                <p className="text-[10px] text-slate-400 -mt-0.5">Endocrinology &amp; Diabetes</p>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Providing compassionate, evidence-based endocrine care to help you
              live a healthier, more balanced life.
            </p>
            <div className="flex gap-3 justify-center md:justify-start">
              {[
                { Icon: FacebookIcon,  label: 'Facebook'  },
                { Icon: TwitterIcon,   label: 'Twitter'   },
                { Icon: InstagramIcon, label: 'Instagram' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center
                             text-slate-400 hover:bg-primary-600 hover:text-white
                             transition-colors duration-200"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* ── Quick Links ─────────────────────────────── */}
          <div>
            <h3 className="text-white font-semibold font-display mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(({ to, label }) => (
                <li key={to} className="flex justify-center md:justify-start">
                  <Link
                    to={to}
                    className="text-sm text-slate-400 hover:text-primary-400
                               transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Services ────────────────────────────────── */}
          <div>
            <h3 className="text-white font-semibold font-display mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s} className="flex justify-center md:justify-start">
                  <Link
                    to="/services"
                    className="text-sm text-slate-400 hover:text-secondary-400
                               transition-colors duration-200"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact ─────────────────────────────────── */}
          <div>
            <h3 className="text-white font-semibold font-display mb-4">Contact Info</h3>
            <ul className="space-y-3 w-full">
              <li className="flex items-start gap-2.5 justify-center md:justify-start">
                <MapPin className="w-4 h-4 text-primary-400 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-400 text-left">
                  123, Health Street, Medical Colony,<br />Hyderabad – 500001
                </span>
              </li>
              <li className="flex items-center gap-2.5 justify-center md:justify-start">
                <Phone className="w-4 h-4 text-primary-400 shrink-0" />
                <a href="tel:+919876543210" className="text-sm text-slate-400 hover:text-primary-400 transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-2.5 justify-center md:justify-start">
                <Mail className="w-4 h-4 text-primary-400 shrink-0" />
                <a href="mailto:info@drkavyaendo.com" className="text-sm text-slate-400 hover:text-primary-400 transition-colors">
                  info@drkavyaendo.com
                </a>
              </li>
              <li className="flex items-start gap-2.5 justify-center md:justify-start">
                <Clock className="w-4 h-4 text-primary-400 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-400 text-left">
                  Mon–Sat: 9:00 AM – 7:00 PM<br />Sunday: By Appointment
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ──────────────────────────────────── */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500 text-center sm:text-left">
            © {new Date().getFullYear()} Dr. Kavya's Endocrinology &amp; Diabetes Clinic. All rights reserved.
          </p>
          <p className="text-xs text-slate-500 text-center sm:text-right">
            Designed with care &amp; precision for better health
          </p>
        </div>
      </div>
    </footer>
  )
}
