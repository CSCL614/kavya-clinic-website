"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronRight, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ThemeProvider";

const NAV_LINKS = [
  { label: "Home",           href: "/"             },
  { label: "About",          href: "/about"        },
  { label: "Services",       href: "/services"     },
  { label: "Before & After", href: "/before-after" },
  { label: "Gallery",        href: "/gallery"      },
  { label: "Contact",        href: "/contact"      },
];

export function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close drawer on route change */
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <>
      {/* ════════════════════════════════════════════
          TOP ANNOUNCEMENT STRIP
      ════════════════════════════════════════════ */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 60,
          background: "linear-gradient(90deg, #0ea5e9 0%, #0284c7 50%, #0d9488 100%)",
          height: "36px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1.5rem",
          fontSize: "0.78125rem",
          fontWeight: 600,
          color: "white",
          letterSpacing: "0.01em",
          overflow: "hidden",
        }}
      >
        {/* Shimmer overlay */}
        <motion.div
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
          style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)",
            pointerEvents: "none",
          }}
        />
        <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span style={{
            width: 7, height: 7, borderRadius: "50%",
            background: "#7dd3fc",
            animation: "pulseRing 2s infinite",
            display: "inline-block",
          }} />
          Same-day appointments available
        </span>
        <span style={{ opacity: 0.45 }}>|</span>
        <a href="tel:+919876543210" style={{
          color: "white", textDecoration: "none", display: "flex",
          alignItems: "center", gap: "0.375rem",
          transition: "opacity 0.2s",
        }}>
          <Phone style={{ width: 11, height: 11 }} />
          +91 98765 43210
        </a>
      </motion.div>

      {/* ════════════════════════════════════════════
          MAIN NAVBAR
      ════════════════════════════════════════════ */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed",
          top: "36px",          /* sits below announcement strip */
          left: 0, right: 0,
          zIndex: 50,
          transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
          background: scrolled
            ? "rgba(255,255,255,0.96)"
            : "rgba(255,255,255,0.82)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          borderBottom: scrolled
            ? "1.5px solid rgba(14,165,233,0.14)"
            : "1.5px solid rgba(14,165,233,0.07)",
          boxShadow: scrolled
            ? "0 8px 32px rgba(14,165,233,0.10), 0 2px 8px rgba(0,0,0,0.04)"
            : "none",
        }}
      >
        <div style={{
          maxWidth: "1280px",
          marginInline: "auto",
          paddingInline: "clamp(1.25rem, 4vw, 3.5rem)",
          height: "68px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1.5rem",
        }}>

          {/* ── Logo ─────────────────────────────────── */}
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.75rem", flexShrink: 0 }}>
            <motion.div
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.94 }}
              transition={{ type: "spring", stiffness: 320, damping: 18 }}
              style={{
                width: 46, height: 46,
                borderRadius: 12,
                overflow: "hidden",
                flexShrink: 0,
                background: "#ffffff",
                border: "1.5px solid rgba(14,165,233,0.18)",
                boxShadow: "0 4px 14px rgba(14,165,233,0.18)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >
              <Image
                src="/logo.png"
                alt="Dr. Navya's Endo Care Logo"
                width={42}
                height={42}
                style={{ objectFit: "contain", width: "100%", height: "100%" }}
                priority
              />
            </motion.div>

            <div>
              <div style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 900,
                fontSize: "1.0625rem",
                lineHeight: 1.1,
                background: "linear-gradient(135deg,#0ea5e9,#0d9488)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Dr. Navya&apos;s
              </div>
              <div style={{
                fontSize: "0.6rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#94a3b8",
                lineHeight: 1.2,
              }}>
                Endo Care
              </div>
            </div>
          </Link>

          {/* ── Desktop Nav ───────────────────────────── */}
          <nav style={{
            display: "none",
            alignItems: "center",
            gap: "0.25rem",
            flex: 1,
            justifyContent: "center",
          }} className="lg-nav">
            <style>{`
              @media(min-width:1024px) { .lg-nav { display: flex !important; } }
            `}</style>

            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    position: "relative",
                    padding: "0.5rem 1rem",
                    borderRadius: "0.625rem",
                    fontSize: "0.9rem",
                    fontWeight: active ? 700 : 600,
                    color: active ? "#0284c7" : "#475569",
                    textDecoration: "none",
                    transition: "color 0.2s",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={e => { if (!active) (e.currentTarget as HTMLElement).style.color = "#0ea5e9"; }}
                  onMouseLeave={e => { if (!active) (e.currentTarget as HTMLElement).style.color = "#475569"; }}
                >
                  {/* Active background pill */}
                  {active && (
                    <motion.span
                      layoutId="navActive"
                      style={{
                        position: "absolute", inset: 0,
                        borderRadius: "0.625rem",
                        background: "linear-gradient(135deg, rgba(14,165,233,0.1), rgba(20,184,166,0.08))",
                        border: "1.5px solid rgba(14,165,233,0.22)",
                      }}
                      transition={{ type: "spring", bounce: 0.15, duration: 0.48 }}
                    />
                  )}

                  {/* Hover underline */}
                  <motion.span
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: active ? 0 : 1 }}
                    style={{
                      position: "absolute",
                      bottom: "4px",
                      left: "1rem", right: "1rem",
                      height: "2px",
                      borderRadius: "9999px",
                      background: "linear-gradient(90deg,#0ea5e9,#14b8a6)",
                      transformOrigin: "left",
                      transition: "transform 0.25s ease",
                    }}
                  />

                  <span style={{ position: "relative", zIndex: 1 }}>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* ── Desktop Right ─────────────────────────── */}
          <div style={{ display: "none", alignItems: "center", gap: "0.875rem", flexShrink: 0 }} className="lg-right">
            <style>{`@media(min-width:1024px){ .lg-right { display: flex !important; } }`}</style>

            {/* Phone */}
            <motion.a
              href="tel:+919876543210"
              whileHover={{ y: -1 }}
              style={{
                display: "flex", alignItems: "center", gap: "0.425rem",
                fontSize: "0.875rem", fontWeight: 600, color: "#64748b",
                textDecoration: "none", transition: "color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#0ea5e9")}
              onMouseLeave={e => (e.currentTarget.style.color = "#64748b")}
            >
              <div style={{
                width: 28, height: 28, borderRadius: 8,
                background: "rgba(14,165,233,0.08)",
                border: "1px solid rgba(14,165,233,0.16)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <Phone style={{ width: 12, height: 12, color: "#0ea5e9" }} />
              </div>
              +91 98765 43210
            </motion.a>

            {/* Theme toggle */}
            <ThemeToggle />

            {/* CTA Button */}
            <Link href="/contact" style={{ textDecoration: "none" }}>
              <motion.div
                whileHover={{ scale: 1.05, y: -1.5 }}
                whileTap={{ scale: 0.96 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.6rem 1.25rem",
                  borderRadius: "0.75rem",
                  background: "linear-gradient(135deg, #0ea5e9 0%, #0284c7 50%, #0d9488 100%)",
                  color: "white",
                  fontSize: "0.875rem",
                  fontWeight: 700,
                  cursor: "pointer",
                  boxShadow: "0 4px 18px rgba(14,165,233,0.38), inset 0 1px 0 rgba(255,255,255,0.18)",
                  whiteSpace: "nowrap",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Shimmer */}
                <motion.div
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3, ease: "linear" }}
                  style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.22),transparent)",
                    pointerEvents: "none",
                  }}
                />
                <Calendar style={{ width: 14, height: 14 }} />
                Book Appointment
              </motion.div>
            </Link>
          </div>

          {/* ── Mobile Menu Toggle ────────────────────── */}
          <motion.button
            onClick={() => setMobileOpen(!mobileOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
            className="lg-hide"
            style={{
              padding: "0.5rem",
              borderRadius: "0.625rem",
              background: "rgba(14,165,233,0.07)",
              border: "1.5px solid rgba(14,165,233,0.16)",
              cursor: "pointer",
              color: "#475569",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <style>{`@media(min-width:1024px){ .lg-hide { display: none !important; } }`}</style>
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={mobileOpen ? "x" : "m"}
                initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
                animate={{ opacity: 1, rotate: 0,  scale: 1 }}
                exit={{ opacity: 0, rotate: 90,  scale: 0.7 }}
                transition={{ duration: 0.18 }}
                style={{ display: "flex" }}
              >
                {mobileOpen
                  ? <X     style={{ width: 20, height: 20 }} />
                  : <Menu  style={{ width: 20, height: 20 }} />
                }
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.header>

      {/* ════════════════════════════════════════════
          MOBILE DRAWER
      ════════════════════════════════════════════ */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              onClick={() => setMobileOpen(false)}
              style={{
                position: "fixed", inset: 0, zIndex: 55,
                background: "rgba(15,23,42,0.3)",
                backdropFilter: "blur(4px)",
              }}
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              initial={{ x: "100%", opacity: 0.5 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0.5 }}
              transition={{ type: "spring", damping: 26, stiffness: 220 }}
              style={{
                position: "fixed",
                top: 0, right: 0, bottom: 0,
                width: "min(320px, 88vw)",
                zIndex: 56,
                display: "flex",
                flexDirection: "column",
                background: "rgba(255,255,255,0.98)",
                backdropFilter: "blur(28px)",
                borderLeft: "1.5px solid rgba(14,165,233,0.14)",
                boxShadow: "-20px 0 60px rgba(14,165,233,0.12)",
              }}
            >
              {/* Drawer header */}
              <div style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "0 1.25rem",
                height: "68px",
                borderBottom: "1px solid rgba(14,165,233,0.1)",
                flexShrink: 0,
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                  <div style={{
                    width: 34, height: 34, borderRadius: 9,
                    overflow: "hidden",
                    background: "#ffffff",
                    border: "1.5px solid rgba(14,165,233,0.18)",
                    boxShadow: "0 3px 10px rgba(14,165,233,0.18)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <Image src="/logo.png" alt="Logo" width={32} height={32} style={{ objectFit:"contain", width:"100%", height:"100%" }} />
                  </div>
                  <span style={{
                    fontFamily: "'Outfit',sans-serif", fontWeight: 800, fontSize: "0.9375rem",
                    background: "linear-gradient(135deg,#0ea5e9,#14b8a6)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                  }}>
                    Navigation
                  </span>
                </div>

                <motion.button
                  whileTap={{ scale: 0.88 }}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    width: 34, height: 34, borderRadius: 9,
                    background: "rgba(14,165,233,0.07)",
                    border: "1px solid rgba(14,165,233,0.14)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#94a3b8", cursor: "pointer",
                  }}
                >
                  <X style={{ width: 16, height: 16 }} />
                </motion.button>
              </div>

              {/* Drawer nav links */}
              <nav style={{ flex: 1, overflowY: "auto", padding: "1rem 1rem" }}>
                {NAV_LINKS.map((link, i) => {
                  const active = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Link
                        href={link.href}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "0.875rem 1rem",
                          borderRadius: "0.875rem",
                          marginBottom: "0.25rem",
                          textDecoration: "none",
                          fontWeight: active ? 700 : 600,
                          fontSize: "0.9375rem",
                          background: active
                            ? "linear-gradient(135deg,rgba(14,165,233,0.1),rgba(20,184,166,0.07))"
                            : "transparent",
                          color: active ? "#0284c7" : "#475569",
                          border: active
                            ? "1.5px solid rgba(14,165,233,0.2)"
                            : "1.5px solid transparent",
                          transition: "all 0.2s",
                        }}
                        onMouseEnter={e => {
                          if (!active) {
                            (e.currentTarget as HTMLElement).style.background = "rgba(14,165,233,0.05)";
                            (e.currentTarget as HTMLElement).style.color = "#0ea5e9";
                          }
                        }}
                        onMouseLeave={e => {
                          if (!active) {
                            (e.currentTarget as HTMLElement).style.background = "transparent";
                            (e.currentTarget as HTMLElement).style.color = "#475569";
                          }
                        }}
                      >
                        <span>{link.label}</span>
                        <ChevronRight style={{ width: 15, height: 15, opacity: active ? 1 : 0.35 }} />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Drawer footer */}
              <div style={{
                padding: "1.25rem",
                borderTop: "1px solid rgba(14,165,233,0.1)",
                display: "flex", flexDirection: "column", gap: "0.75rem",
                flexShrink: 0,
              }}>
                <Link href="/contact" style={{ textDecoration: "none" }}>
                  <motion.div
                    whileTap={{ scale: 0.97 }}
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "center",
                      gap: "0.5rem",
                      padding: "0.875rem",
                      borderRadius: "0.875rem",
                      background: "linear-gradient(135deg,#0ea5e9,#0d9488)",
                      color: "white",
                      fontWeight: 700, fontSize: "0.9375rem",
                      boxShadow: "0 4px 16px rgba(14,165,233,0.35)",
                    }}
                  >
                    <Calendar style={{ width: 16, height: 16 }} />
                    Book Appointment
                  </motion.div>
                </Link>

                <a
                  href="tel:+919876543210"
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center",
                    gap: "0.5rem",
                    padding: "0.75rem",
                    borderRadius: "0.875rem",
                    background: "rgba(14,165,233,0.06)",
                    border: "1px solid rgba(14,165,233,0.14)",
                    color: "#0ea5e9", fontWeight: 600, fontSize: "0.875rem",
                    textDecoration: "none",
                  }}
                >
                  <Phone style={{ width: 14, height: 14 }} />
                  +91 98765 43210
                </a>

                {/* Theme toggle in mobile */}
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <ThemeToggle />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
