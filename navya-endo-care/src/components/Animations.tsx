"use client";
import { motion, Variants } from "framer-motion";
import { ReactNode, useState, useEffect, useRef } from "react";

/* ─────────────────────────────────────────────────────────
   FadeIn
   Properly inlines transition inside variants so whileInView
   respects delay/duration correctly.
───────────────────────────────────────────────────────── */
interface FadeInProps {
  children: ReactNode;
  delay?:     number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  once?:      boolean;
  duration?:  number;
  style?:     React.CSSProperties;
}

function makeVariants(d: string, dist = 30, duration = 0.62, delay = 0): Variants {
  return {
    hidden: {
      opacity: 0,
      y: d === "up" ? dist : d === "down" ? -dist : 0,
      x: d === "left" ? dist : d === "right" ? -dist : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };
}

export function FadeIn({
  children,
  delay     = 0,
  direction = "up",
  className = "",
  once      = true,
  duration  = 0.62,
  style,
}: FadeInProps) {
  return (
    <motion.div
      variants={makeVariants(direction, 30, duration, delay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-60px" }}
      className={className}
      style={{ willChange: "transform, opacity", ...style }}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────
   StaggerContainer
   Hidden variant must be present on the container so children
   inherit the hidden→visible cascade properly.
───────────────────────────────────────────────────────── */
export function StaggerContainer({
  children,
  className    = "",
  staggerDelay = 0.1,
  once         = true,
  style,
}: {
  children:     ReactNode;
  className?:   string;
  staggerDelay?: number;
  once?:        boolean;
  style?:       React.CSSProperties;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-60px" }}
      variants={{
        hidden:  {},                                        // ← must exist for children to start hidden
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────
   StaggerItem
   Transition inlined inside the variant — NOT as a prop.
───────────────────────────────────────────────────────── */
export function StaggerItem({
  children,
  className = "",
  style,
}: {
  children:  ReactNode;
  className?: string;
  style?:    React.CSSProperties;
}) {
  return (
    <motion.div
      variants={{
        hidden:  { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
        },
      }}
      className={className}
      style={{ willChange: "transform, opacity", ...style }}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────
   AnimatedCounter
   Fixed: ref reset on re-mount so navigating away and back
   triggers the counter again correctly.
───────────────────────────────────────────────────────── */
export function AnimatedCounter({
  target,
  suffix   = "",
  prefix   = "",
  decimals = 0,
}: {
  target:   number;
  suffix?:  string;
  prefix?:  string;
  decimals?: number;
}) {
  const [count,   setCount]   = useState(0);
  const spanRef               = useRef<HTMLSpanElement>(null);
  const startedRef            = useRef(false);
  const timerRef              = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  useEffect(() => {
    // Reset when target changes or component re-mounts
    setCount(0);
    startedRef.current = false;
    clearInterval(timerRef.current);

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true;
          const totalMs = 1600;
          const fps     = 60;
          const steps   = totalMs / (1000 / fps);
          const inc     = target / steps;
          let   val     = 0;

          timerRef.current = setInterval(() => {
            val += inc;
            if (val >= target) {
              setCount(target);
              clearInterval(timerRef.current);
            } else {
              setCount(
                decimals
                  ? parseFloat(val.toFixed(decimals))
                  : Math.floor(val)
              );
            }
          }, 1000 / fps);
        }
      },
      { threshold: 0.4 }
    );

    if (spanRef.current) obs.observe(spanRef.current);

    return () => {
      obs.disconnect();
      clearInterval(timerRef.current);
      // ← Reset so re-mount (back-navigation) replays counter
      startedRef.current = false;
    };
  }, [target, decimals]);

  return (
    <span ref={spanRef}>
      {prefix}
      {decimals ? count.toFixed(decimals) : count.toLocaleString()}
      {suffix}
    </span>
  );
}

/* ─────────────────────────────────────────────────────────
   ScrollReveal — simple single-element scroll trigger
───────────────────────────────────────────────────────── */
export function ScrollReveal({
  children,
  delay     = 0,
  className = "",
}: {
  children:  ReactNode;
  delay?:    number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.58, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}
