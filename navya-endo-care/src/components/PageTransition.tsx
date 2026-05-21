"use client";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { ReactNode, useEffect, useRef, useState, useCallback } from "react";

/* ─── Route metadata ─────────────────────────────────── */
const routeMeta: Record<string, { label: string; tagline: string }> = {
  "/":             { label: "Home",           tagline: "Welcome Back" },
  "/about":        { label: "About",          tagline: "Our Story" },
  "/services":     { label: "Services",       tagline: "What We Offer" },
  "/before-after": { label: "Before & After", tagline: "Real Results" },
  "/gallery":      { label: "Gallery",        tagline: "Visual Tour" },
  "/contact":      { label: "Contact",        tagline: "Get In Touch" },
};

/* ─── Premium easing curves ──────────────────────────── */
const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];
const EASE_IN_EXPO: [number, number, number, number] = [0.7, 0, 0.84, 0];
const EASE_IN_OUT: [number, number, number, number] = [0.76, 0, 0.24, 1];

/* ═══════════════════════════════════════════════════════
   CINEMATIC TRANSITION OVERLAY
   Awwwards-style center-expanding reveal with branding
═══════════════════════════════════════════════════════ */
function CinematicOverlay({ label, tagline }: { label: string; tagline: string }) {
  return (
    <motion.div
      key="cinematic-overlay"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        pointerEvents: "all",
        overflow: "hidden",
      }}
    >
      {/* ── 1. Frosted glass backdrop ──────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(2,8,24,0.35)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      />

      {/* ── 2. Expanding gradient orb from center ──── */}
      <motion.div
        initial={{ scale: 0, opacity: 0.9, borderRadius: "50%" }}
        animate={{ scale: 1, opacity: 1, borderRadius: "0%" }}
        exit={{ scale: 1.15, opacity: 0, borderRadius: "0%", transition: { duration: 0.35, ease: EASE_OUT_EXPO } }}
        transition={{
          duration: 0.5,
          ease: EASE_IN_OUT,
        }}
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(145deg, #0c4a6e 0%, #0e7490 35%, #0d9488 70%, #065f46 100%)",
          transformOrigin: "center center",
          willChange: "transform, opacity, border-radius",
        }}
      />

      {/* ── 3. Animated mesh lines (decorative) ────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.12 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, delay: 0.15 }}
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          pointerEvents: "none",
        }}
      />

      {/* ── 4. Rotating outer ring ─────────────────── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
        animate={{ opacity: 0.25, scale: 1, rotate: 0 }}
        exit={{ opacity: 0, scale: 1.3, rotate: 90 }}
        transition={{ duration: 0.55, delay: 0.1, ease: EASE_OUT_EXPO }}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "220px",
          height: "220px",
          marginLeft: "-110px",
          marginTop: "-110px",
          borderRadius: "50%",
          border: "1.5px solid rgba(186,230,253,0.2)",
          willChange: "transform, opacity",
        }}
      />

      {/* ── 5. Inner rotating ring (counter) ───────── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.3, rotate: 120 }}
        animate={{ opacity: 0.35, scale: 1, rotate: 0 }}
        exit={{ opacity: 0, scale: 0.5, rotate: -120 }}
        transition={{ duration: 0.5, delay: 0.14, ease: EASE_OUT_EXPO }}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "170px",
          height: "170px",
          marginLeft: "-85px",
          marginTop: "-85px",
          borderRadius: "50%",
          border: "1px dashed rgba(45,212,191,0.25)",
          willChange: "transform, opacity",
        }}
      />

      {/* ── 6. Pulsing glow behind logo ────────────── */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 2 }}
        transition={{ duration: 0.4, delay: 0.12, ease: EASE_OUT_EXPO }}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "140px",
          height: "140px",
          marginLeft: "-70px",
          marginTop: "-70px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(56,189,248,0.2) 0%, rgba(20,184,166,0.08) 50%, transparent 70%)",
          willChange: "transform, opacity",
        }}
      />

      {/* ── 7. Center branding content ─────────────── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: -6 }}
        transition={{
          duration: 0.38,
          delay: 0.18,
          ease: EASE_OUT_EXPO,
        }}
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
          gap: "0.875rem",
        }}
      >
        {/* Logo container with glassmorphism */}
        <motion.div
          animate={{ rotate: [0, 3, -3, 0] }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{
            width: "68px",
            height: "68px",
            borderRadius: "18px",
            background: "rgba(255,255,255,0.95)",
            boxShadow:
              "0 0 0 1px rgba(255,255,255,0.2), 0 0 60px rgba(56,189,248,0.3), 0 8px 32px rgba(0,0,0,0.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            padding: "6px",
          }}
        >
          <Image
            src="/logo.png"
            alt="Dr. Navya's Endo Care"
            width={56}
            height={56}
            style={{ objectFit: "contain", width: "100%", height: "100%" }}
          />
        </motion.div>

        {/* Tagline + Route name */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "3px",
          }}
        >
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.25, ease: EASE_OUT_EXPO }}
            style={{
              fontSize: "0.5625rem",
              fontWeight: 700,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "rgba(186,230,253,0.6)",
            }}
          >
            {tagline}
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.3, duration: 0.3, ease: EASE_OUT_EXPO }}
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "1.75rem",
              fontWeight: 800,
              color: "white",
              letterSpacing: "-0.03em",
              lineHeight: 1,
              textShadow: "0 2px 16px rgba(0,0,0,0.25)",
            }}
          >
            {label}
          </motion.span>
        </div>

        {/* Animated progress bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.32, duration: 0.2 }}
          style={{
            width: "56px",
            height: "2.5px",
            borderRadius: "9999px",
            background: "rgba(255,255,255,0.15)",
            overflow: "hidden",
            marginTop: "0.25rem",
          }}
        >
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 0.45, delay: 0.32, ease: EASE_IN_OUT }}
            style={{
              height: "100%",
              background: "linear-gradient(90deg, rgba(56,189,248,0.9), rgba(45,212,191,0.9))",
              borderRadius: "9999px",
            }}
          />
        </motion.div>
      </motion.div>

      {/* ── 8. Floating particles ──────────────────── */}
      {[
        { x: "15%",  y: "25%", size: 3, delay: 0.2 },
        { x: "82%",  y: "20%", size: 4, delay: 0.25 },
        { x: "10%",  y: "72%", size: 3, delay: 0.3 },
        { x: "88%",  y: "78%", size: 3, delay: 0.22 },
        { x: "45%",  y: "15%", size: 2, delay: 0.28 },
        { x: "55%",  y: "85%", size: 2, delay: 0.32 },
      ].map((p, i) => (
        <motion.div
          key={`particle-${i}`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.5, scale: 1, y: [0, -12, 0] }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{
            opacity: { delay: p.delay, duration: 0.2 },
            scale: { delay: p.delay, duration: 0.25, ease: EASE_OUT_EXPO },
            y: { delay: p.delay + 0.1, duration: 1.2, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{
            position: "absolute",
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background: "rgba(186,230,253,0.7)",
            zIndex: 5,
          }}
        />
      ))}

      {/* ── 9. Corner accent lines ─────────────────── */}
      {/* Top-left */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 0.2 }}
        exit={{ scaleX: 0, opacity: 0 }}
        transition={{ delay: 0.2, duration: 0.3, ease: EASE_OUT_EXPO }}
        style={{
          position: "absolute", top: "15%", left: "8%",
          width: "40px", height: "1px",
          background: "rgba(186,230,253,0.5)",
          transformOrigin: "left",
          zIndex: 5,
        }}
      />
      <motion.div
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 0.2 }}
        exit={{ scaleY: 0, opacity: 0 }}
        transition={{ delay: 0.22, duration: 0.3, ease: EASE_OUT_EXPO }}
        style={{
          position: "absolute", top: "15%", left: "8%",
          width: "1px", height: "40px",
          background: "rgba(186,230,253,0.5)",
          transformOrigin: "top",
          zIndex: 5,
        }}
      />
      {/* Bottom-right */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 0.2 }}
        exit={{ scaleX: 0, opacity: 0 }}
        transition={{ delay: 0.24, duration: 0.3, ease: EASE_OUT_EXPO }}
        style={{
          position: "absolute", bottom: "15%", right: "8%",
          width: "40px", height: "1px",
          background: "rgba(186,230,253,0.5)",
          transformOrigin: "right",
          zIndex: 5,
        }}
      />
      <motion.div
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 0.2 }}
        exit={{ scaleY: 0, opacity: 0 }}
        transition={{ delay: 0.26, duration: 0.3, ease: EASE_OUT_EXPO }}
        style={{
          position: "absolute", bottom: "15%", right: "8%",
          width: "1px", height: "40px",
          background: "rgba(186,230,253,0.5)",
          transformOrigin: "bottom",
          zIndex: 5,
        }}
      />
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════
   PAGE CONTENT ANIMATION VARIANTS
═══════════════════════════════════════════════════════ */
const pageVariants = {
  initial: {
    opacity: 0,
    y: 35,
    scale: 0.985,
    filter: "blur(6px)",
  },
  enter: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: EASE_OUT_EXPO,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.99,
    filter: "blur(4px)",
    transition: {
      duration: 0.3,
      ease: EASE_IN_EXPO,
    },
  },
};

/* ═══════════════════════════════════════════════════════
   MAIN PAGE TRANSITION COMPONENT
═══════════════════════════════════════════════════════ */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const prefersReduced = useReducedMotion();
  const [showOverlay, setShowOverlay] = useState(false);
  const [meta, setMeta] = useState({ label: "", tagline: "" });
  const prevPath = useRef(pathname);
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const dismiss = useCallback(() => {
    setShowOverlay(false);
  }, []);

  useEffect(() => {
    // Only trigger on actual navigation — not initial mount
    if (pathname === prevPath.current) return;

    const routeInfo = routeMeta[pathname] ?? { label: "Loading", tagline: "Please Wait" };
    setMeta(routeInfo);

    if (!prefersReduced) {
      setShowOverlay(true);
      clearTimeout(timerRef.current);
      // Overlay visible for 700ms — enough time for the full cinematic sequence
      timerRef.current = setTimeout(dismiss, 700);
    }

    prevPath.current = pathname;
    return () => clearTimeout(timerRef.current);
  }, [pathname, prefersReduced, dismiss]);

  /* Respect reduced motion */
  if (prefersReduced) {
    return <>{children}</>;
  }

  return (
    <>
      {/* Cinematic overlay */}
      <AnimatePresence>
        {showOverlay && (
          <CinematicOverlay label={meta.label} tagline={meta.tagline} />
        )}
      </AnimatePresence>

      {/* Page content with blur-fade enter/exit */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          variants={pageVariants}
          initial="initial"
          animate="enter"
          exit="exit"
          style={{ willChange: "opacity, transform, filter" }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
