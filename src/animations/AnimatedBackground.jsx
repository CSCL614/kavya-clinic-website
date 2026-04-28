import React, { useMemo } from 'react'
import { motion } from 'framer-motion'

// ── Stable random helpers ─────────────────────────────────────────────────────
function seededRand(seed) {
  let s = seed
  return () => {
    s = (s * 1664525 + 1013904223) & 0xffffffff
    return (s >>> 0) / 0xffffffff
  }
}

// ── Particle data ─────────────────────────────────────────────────────────────
function useParticles(count = 14) {
  return useMemo(() => {
    const rand = seededRand(42)
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: rand() * 100,
      y: rand() * 100,
      size: 4 + rand() * 10,
      duration: 6 + rand() * 8,
      delay: rand() * 5,
      color: rand() > 0.5 ? '#0EA5E9' : '#0D9488',
    }))
  }, [count])
}

// ── Molecule data ─────────────────────────────────────────────────────────────
function useMolecules(count = 4) {
  return useMemo(() => {
    const rand = seededRand(99)
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      cx: 10 + rand() * 80,
      cy: 10 + rand() * 80,
      r: 22 + rand() * 18,
      orbitDur: 12 + rand() * 10,
      orbitDelay: rand() * 4,
      color: rand() > 0.5 ? '#0EA5E9' : '#0D9488',
    }))
  }, [count])
}

export default function AnimatedBackground() {
  const particles = useParticles(14)
  const molecules = useMolecules(4)

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-animated"
      style={{ isolation: 'isolate' }}
    >
      {/* ── Soft radial glows ────────────────────────────────── */}
      <div
        className="absolute rounded-full"
        style={{
          width: 600, height: 600,
          top: '-15%', left: '-10%',
          background: 'radial-gradient(circle, rgba(14,165,233,0.10) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: 500, height: 500,
          bottom: '-10%', right: '-8%',
          background: 'radial-gradient(circle, rgba(13,148,136,0.10) 0%, transparent 70%)',
        }}
      />

      {/* ── Floating particles ─────────────────────────────────── */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top:  `${p.y}%`,
            width:  p.size,
            height: p.size,
            background: p.color,
            opacity: 0.09,
          }}
          animate={{
            y:       [0, -28, -12, 0],
            x:       [0, 12,  -8,  0],
            opacity: [0.06, 0.13, 0.07, 0.06],
            scale:   [1, 1.15, 0.95, 1],
          }}
          transition={{
            duration: p.duration,
            delay:    p.delay,
            repeat:   Infinity,
            ease:     'easeInOut',
          }}
        />
      ))}

      {/* ── Molecule clusters (SVG) ─────────────────────────────── */}
      <svg
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.08 }}
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 100 100"
      >
        {molecules.map((m) => (
          <g key={m.id}>
            {/* Centre atom */}
            <circle cx={m.cx} cy={m.cy} r={2.5} fill={m.color} />
            {/* Bond line */}
            <line
              x1={m.cx} y1={m.cy}
              x2={m.cx + m.r} y2={m.cy}
              stroke={m.color}
              strokeWidth="0.5"
              strokeDasharray="2 2"
            />
            {/* Orbiting atom */}
            <motion.circle
              r={1.8}
              fill={m.color}
              style={{ originX: `${m.cx}%`, originY: `${m.cy}%` }}
              animate={{
                cx: [
                  m.cx + m.r,
                  m.cx,
                  m.cx - m.r,
                  m.cx,
                  m.cx + m.r,
                ],
                cy: [
                  m.cy,
                  m.cy - m.r * 0.6,
                  m.cy,
                  m.cy + m.r * 0.6,
                  m.cy,
                ],
              }}
              transition={{
                duration: m.orbitDur,
                delay:    m.orbitDelay,
                repeat:   Infinity,
                ease:     'linear',
              }}
            />
          </g>
        ))}
      </svg>

      {/* ── Subtle horizontal rule waves ───────────────────────── */}
      {[20, 50, 80].map((top, i) => (
        <motion.div
          key={i}
          className="absolute w-full"
          style={{
            top: `${top}%`,
            height: 1,
            background: `linear-gradient(90deg, transparent, rgba(14,165,233,0.12), rgba(13,148,136,0.12), transparent)`,
          }}
          animate={{ scaleX: [0.8, 1.05, 0.8], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 8 + i * 2, repeat: Infinity, ease: 'easeInOut', delay: i * 1.5 }}
        />
      ))}
    </div>
  )
}
