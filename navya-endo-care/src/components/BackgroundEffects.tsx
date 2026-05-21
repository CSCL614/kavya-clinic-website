"use client";
import { useEffect, useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/* ═══════════════════════════════════════════════════════════
   1. CURSOR GLOW — follows mouse with smooth spring physics
═══════════════════════════════════════════════════════════ */
export function CursorGlow() {
  const x = useMotionValue(-500);
  const y = useMotionValue(-500);
  const sx = useSpring(x, { stiffness: 60, damping: 22, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 60, damping: 22, mass: 0.5 });

  useEffect(() => {
    const move = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY); };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0, left: 0,
        x: sx, y: sy,
        translateX: "-50%",
        translateY: "-50%",
        width: 560,
        height: 560,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(14,165,233,0.07) 0%, rgba(20,184,166,0.04) 40%, transparent 70%)",
        pointerEvents: "none",
        zIndex: 0,
        willChange: "transform",
      }}
    />
  );
}

/* ═══════════════════════════════════════════════════════════
   2. NOISE OVERLAY — subtle film grain for premium depth
═══════════════════════════════════════════════════════════ */
export function NoiseOverlay() {
  return null; // Disabled for performance: full-screen SVG filter + mixBlendMode causes extreme lag
}

/* ═══════════════════════════════════════════════════════════
   3. ANIMATED MESH BACKGROUND — floating blobs for pages
═══════════════════════════════════════════════════════════ */
export function MeshBackground({ variant = "default" }: { variant?: "default" | "teal" | "violet" }) {
  const palettes: Record<string, [string, string, string]> = {
    default: ["rgba(14,165,233,0.12)", "rgba(20,184,166,0.10)", "rgba(99,102,241,0.07)"],
    teal:    ["rgba(20,184,166,0.13)", "rgba(14,165,233,0.09)", "rgba(16,185,129,0.08)"],
    violet:  ["rgba(139,92,246,0.10)", "rgba(14,165,233,0.10)", "rgba(236,72,153,0.06)"],
  };
  const [c1, c2, c3] = palettes[variant];

  return (
    <div aria-hidden="true" style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
      {/* Blob 1 — top-left */}
      <div
        className="mesh-blob mesh-blob-1"
        style={{ width: 700, height: 700, background: c1, top: "-15%", left: "-10%", opacity: 0.65 }}
      />
      {/* Blob 2 — bottom-right */}
      <div
        className="mesh-blob mesh-blob-2"
        style={{ width: 600, height: 600, background: c2, bottom: "-12%", right: "-8%", opacity: 0.55 }}
      />
      {/* Blob 3 — center */}
      <div
        className="mesh-blob mesh-blob-3"
        style={{ width: 500, height: 500, background: c3, top: "40%", left: "40%", opacity: 0.4 }}
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   4. CANVAS PARTICLE SYSTEM — lightweight WebGL-free version
═══════════════════════════════════════════════════════════ */
interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  r: number; alpha: number;
  color: string;
  pulse: number; pulseSpeed: number;
}

const COLORS = ["#38bdf8", "#2dd4bf", "#818cf8", "#7dd3fc", "#a5f3fc"];

export function CanvasParticles({ count = 55, interactive = true }: { count?: number; interactive?: boolean }) {
  // Disabled for performance to prevent requestAnimationFrame CPU drain.
  return null;
}

/* ═══════════════════════════════════════════════════════════
   5. LIGHT RAYS — cinematic moving light streaks
═══════════════════════════════════════════════════════════ */
export function LightRays({ count = 5 }: { count?: number }) {
  const rays = Array.from({ length: count }, (_, i) => ({
    left:  `${12 + i * (76 / (count - 1))}%`,
    angle: -10 + i * 4,
    delay: i * 1.4,
    dur:   8 + i * 1.8,
    opacity: 0.06 + (i % 2) * 0.03,
  }));

  return (
    <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden", zIndex: 0 }}>
      {rays.map((r, i) => (
        <motion.div
          key={i}
          animate={{ y: ["-5%", "5%", "-5%"], opacity: [r.opacity * 0.6, r.opacity, r.opacity * 0.6] }}
          transition={{ duration: r.dur, delay: r.delay, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: "-20%",
            left: r.left,
            width: "140px",
            marginLeft: "-70px",
            height: "140%",
            background: "linear-gradient(180deg, transparent 0%, rgba(14,165,233,0.15) 35%, rgba(20,184,166,0.1) 65%, transparent 100%)",
            maskImage: "linear-gradient(90deg, transparent 0%, black 50%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 50%, transparent 100%)",
            transform: `rotate(${r.angle}deg)`,
            transformOrigin: "top center",
            willChange: "opacity, transform",
          }}
        />
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   6. ANIMATED WAVE DIVIDER — between sections
═══════════════════════════════════════════════════════════ */
export function WaveDivider({ flip = false, color = "var(--bg-primary)" }: { flip?: boolean; color?: string }) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "relative",
        width: "100%",
        height: "80px",
        overflow: "hidden",
        lineHeight: 0,
        transform: flip ? "scaleY(-1)" : "none",
        marginTop: flip ? "-1px" : 0,
        marginBottom: flip ? 0 : "-1px",
      }}
    >
      <motion.svg
        animate={{ x: [0, -40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        style={{ position: "absolute", bottom: 0, width: "110%", left: "-5%", height: "100%" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
          fill={color}
          fillOpacity="1"
        />
      </motion.svg>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   7. SECTION AMBIENT GLOW — radial gradient that breathes
═══════════════════════════════════════════════════════════ */
export function SectionGlow({ color = "rgba(14,165,233,0.06)", size = "70%" }: { color?: string; size?: string }) {
  return (
    <motion.div
      aria-hidden="true"
      animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      style={{
        position: "absolute",
        inset: "-20%",
        background: `radial-gradient(ellipse ${size} 55% at 50% 50%, ${color} 0%, transparent 70%)`,
        pointerEvents: "none",
        zIndex: 0,
        willChange: "transform, opacity",
      }}
    />
  );
}

/* ═══════════════════════════════════════════════════════════
   8. FLOATING ORBS — abstract decorative blobs per section
═══════════════════════════════════════════════════════════ */
const ORB_PRESETS = [
  { w:340, h:340, top:"-8%",  left:"-6%",  color:"rgba(14,165,233,0.12)",  dur:16, delay:0   },
  { w:260, h:260, top:"60%",  right:"-5%", color:"rgba(20,184,166,0.10)",  dur:20, delay:3   },
  { w:200, h:200, top:"30%",  left:"60%",  color:"rgba(99,102,241,0.07)",   dur:24, delay:6   },
  { w:180, h:180, bottom:"5%",left:"15%",  color:"rgba(14,165,233,0.08)",   dur:18, delay:2   },
];

export function FloatingOrbs({ count = 3 }: { count?: number }) {
  const orbs = ORB_PRESETS.slice(0, count);
  return (
    <div aria-hidden="true" style={{ position:"absolute", inset:0, overflow:"hidden", pointerEvents:"none", zIndex:0 }}>
      {orbs.map((o, i) => {
        // Extract base color from rgba string to use in radial gradient
        const baseColor = o.color.replace(/[\d.]+\)$/, "1)");
        return (
          <motion.div
            key={i}
            animate={{ y: [0, -24, 0], x: [0, 12, 0], scale: [1, 1.06, 1] }}
            transition={{ duration: o.dur, delay: o.delay, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "absolute",
              width:  o.w,
              height: o.h,
              borderRadius: "50%",
              background: `radial-gradient(circle, ${o.color} 0%, transparent 70%)`,
              top:    "top"    in o ? o.top    : undefined,
              bottom: "bottom" in o ? o.bottom : undefined,
              left:   "left"   in o ? o.left   : undefined,
              right:  "right"  in o ? o.right  : undefined,
              willChange: "transform",
            }}
          />
        );
      })}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   9. ANIMATED GRID BACKGROUND — subtle dot/line grid
═══════════════════════════════════════════════════════════ */
export function AnimatedGrid() {
  return (
    <motion.div
      aria-hidden="true"
      animate={{ opacity: [0.45, 0.6, 0.45] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(14,165,233,0.06) 1px, transparent 1px),
          linear-gradient(90deg, rgba(14,165,233,0.06) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
        pointerEvents: "none",
        zIndex: 0,
        maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
        WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
      }}
    />
  );
}

/* ═══════════════════════════════════════════════════════════
   10. HERO RADIAL PULSE — expanding ring pulses (sonar)
═══════════════════════════════════════════════════════════ */
export function SonarPulse({ x = "50%", y = "50%", color = "rgba(14,165,233,0.15)" }: {
  x?: string; y?: string; color?: string;
}) {
  const rings = [0, 0.8, 1.6];
  return (
    <div aria-hidden="true" style={{ position:"absolute", inset:0, pointerEvents:"none", zIndex:0, overflow:"hidden" }}>
      {rings.map((delay, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0.3, opacity: 0.7 }}
          animate={{ scale: 2.8, opacity: 0 }}
          transition={{ duration: 4.5, delay, repeat: Infinity, ease: "easeOut" }}
          style={{
            position: "absolute",
            left: x, top: y,
            width: "320px",
            height: "320px",
            marginLeft: "-160px",
            marginTop:  "-160px",
            borderRadius: "50%",
            border: `1.5px solid ${color}`,
            willChange: "transform, opacity",
          }}
        />
      ))}
    </div>
  );
}
