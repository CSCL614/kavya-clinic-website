"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageHeroProps {
  badge?: string;
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
}

export function PageHero({ badge, title, subtitle, children }: PageHeroProps) {
  return (
    <section
      style={{
        position: "relative",
        paddingTop: "5rem",
        paddingBottom: "4.5rem",
        overflow: "hidden",
        background: "var(--grad-hero)",
      }}
    >
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid pointer-events-none" style={{ opacity: 0.65 }} />

      {/* Ambient blobs */}
      <div className="blob-sky  pointer-events-none" style={{ width: "480px", height: "480px", top: "-30%", left: "-8%"  }} />
      <div className="blob-teal pointer-events-none" style={{ width: "380px", height: "380px", bottom: "-20%", right: "-6%" }} />

      {/* Bottom gradient fade-out */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ height: "1px", background: "linear-gradient(90deg,transparent,rgba(14,165,233,0.2),rgba(20,184,166,0.2),transparent)" }}
      />

      <div className="container relative z-10">
        {/* Centered content block with max-width */}
        <div
          style={{
            maxWidth: "720px",
            marginInline: "auto",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.25rem",
          }}
        >
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <span className="section-label" style={{ marginBottom: 0 }}>{badge}</span>
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="heading h1"
            style={{ lineHeight: 1.07 }}
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.16 }}
              className="lead"
              style={{ textAlign: "center", marginInline: "auto" }}
            >
              {subtitle}
            </motion.p>
          )}

          {children && (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
