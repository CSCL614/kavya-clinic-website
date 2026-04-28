import React from 'react'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

/**
 * SectionWrapper — wraps any section with a whileInView fade-up animation.
 * @param {string}  className  Extra Tailwind classes
 * @param {number}  delay      Framer Motion delay (seconds)
 * @param {string}  id         HTML id for anchor links
 */
export default function SectionWrapper({ children, className = '', delay = 0, id }) {
  return (
    <motion.section
      id={id}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay }}
      className={`section-padding ${className}`}
    >
      {children}
    </motion.section>
  )
}
