import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

/**
 * ServiceCard — animated card for a medical service.
 * Props: icon (JSX), title, description, delay (number)
 */
export default function ServiceCard({ icon, title, description, delay = 0, href = '/services' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
      className="service-card group"
    >
      {/* Icon */}
      <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4
                      bg-gradient-to-br from-primary-100 to-secondary-100
                      group-hover:from-primary-500 group-hover:to-secondary-600
                      transition-all duration-300 shadow-sm">
        <span className="text-primary-600 group-hover:text-white transition-colors duration-300">
          {icon}
        </span>
      </div>

      {/* Content */}
      <h3 className="text-base font-semibold text-slate-800 font-display mb-2">
        {title}
      </h3>
      <p className="text-sm text-slate-500 leading-relaxed mb-4">
        {description}
      </p>

      {/* CTA */}
      <Link
        to={href}
        className="inline-flex items-center gap-1 text-sm font-medium text-primary-600
                   hover:text-secondary-600 transition-colors duration-200 group/link"
      >
        Learn more
        <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform duration-200" />
      </Link>
    </motion.div>
  )
}
