"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/* ─── Custom SVG social icons ───────────────────────── */
const FBIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 16, height: 16 }}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const TWIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 16, height: 16 }}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);
const IGIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16 }}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

/* ─── Data ────────────────────────────────────────────── */
const quickLinks = [
  { label: "Home",          href: "/"             },
  { label: "About Us",      href: "/about"        },
  { label: "Services",      href: "/services"     },
  { label: "Before & After",href: "/before-after" },
  { label: "Gallery",       href: "/gallery"      },
  { label: "Contact",       href: "/contact"      },
];

const serviceLinks = [
  "Diabetes Management",
  "Thyroid Disorders",
  "Hormonal Imbalance",
  "Metabolic Syndrome",
  "Osteoporosis",
  "Pediatric Endocrinology",
];

const contactInfo = [
  { icon: MapPin, text: "123, Health Street, Medical Colony,\nHyderabad – 500001" },
  { icon: Phone,  text: "+91 98765 43210", href: "tel:+919876543210" },
  { icon: Mail,   text: "info@navyaendocare.com", href: "mailto:info@navyaendocare.com" },
  { icon: Clock,  text: "Mon–Sat: 9:00 AM – 7:00 PM\nSunday: By Appointment" },
];

const socials = [
  { Icon: FBIcon, label: "Facebook",  href: "#" },
  { Icon: TWIcon, label: "Twitter/X", href: "#" },
  { Icon: IGIcon, label: "Instagram", href: "#" },
];

/* ─── Footer ─────────────────────────────────────────── */
export function Footer() {
  return (
    <footer
      style={{
        background: "#0b1120",
        color: "#cbd5e1",
        borderTop: "1px solid rgba(14,165,233,0.12)",
        position: "relative",
      }}
    >
      {/* Top gradient accent line */}
      <div style={{
        height: "3px",
        background: "linear-gradient(90deg, transparent 0%, #0ea5e9 35%, #14b8a6 65%, transparent 100%)",
      }} />

      {/* ── Animated footer background ─────────────── */}
      <div style={{ position:"absolute", inset:0, overflow:"hidden", pointerEvents:"none" }}>
        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 10, repeat: Infinity }}
          className="absolute -top-[300px] left-0 w-[600px] h-[600px] rounded-full blur-[120px]"
          style={{ background: "radial-gradient(circle, rgba(14,165,233,0.3) 0%, transparent 70%)" }} />
        <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.15, 0.05] }} transition={{ duration: 12, repeat: Infinity, delay: 2 }}
          className="absolute -bottom-[200px] right-0 w-[500px] h-[500px] rounded-full blur-[100px]"
          style={{ background: "radial-gradient(circle, rgba(20,184,166,0.2) 0%, transparent 70%)" }} />
      </div>

      {/* ── Main grid ─────────────────────────────── */}
      <div
        style={{
          maxWidth: "1280px",
          marginInline: "auto",
          paddingInline: "clamp(1.5rem, 5vw, 4rem)",
          paddingTop: "3.5rem",
          paddingBottom: "2.75rem",
        }}
      >
          {/* ── Emergency Contact Block ────────────── */}
          <div className="mb-12 p-6 sm:p-8 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(220,38,38,0.08), rgba(239,68,68,0.03))",
              border: "1px solid rgba(239,68,68,0.15)",
              backdropFilter: "blur(12px)",
            }}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl" />
            <div className="flex items-center gap-5 relative z-10 text-center sm:text-left">
              <div className="w-14 h-14 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                <Phone className="w-6 h-6 text-red-500 animate-pulse" />
              </div>
              <div>
                <h4 className="text-white font-black text-xl mb-1" style={{ fontFamily: "'Outfit',sans-serif" }}>Emergency Contact 24/7</h4>
                <p className="text-red-200/80 text-sm font-medium">For severe diabetic or endocrine emergencies</p>
              </div>
            </div>
            <a href="tel:+919876543210" className="relative z-10 px-8 py-3.5 rounded-full bg-red-500 text-white font-bold text-sm hover:bg-red-600 transition-colors shadow-[0_0_20px_rgba(239,68,68,0.3)] hover:shadow-[0_0_30px_rgba(239,68,68,0.5)] w-full sm:w-auto text-center">
              Call +91 98765 43210
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr] gap-10">

            {/* ── Column 1 — Brand ──────────────────── */}
            <div>
              {/* Logo */}
              <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.125rem", textDecoration: "none" }}>
                <div style={{
                  width: 48, height: 48,
                  borderRadius: 13,
                  overflow: "hidden",
                  background: "#ffffff",
                  border: "1.5px solid rgba(255,255,255,0.15)",
                  boxShadow: "0 4px 18px rgba(14,165,233,0.25)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <Image
                    src="/logo.png"
                    alt="Dr. Kavya's Endo Care Logo"
                    width={46}
                    height={46}
                    style={{ objectFit: "contain", width: "100%", height: "100%" }}
                  />
                </div>
                <div>
                  <div style={{
                    fontFamily: "'Outfit',sans-serif",
                    fontWeight: 900,
                    fontSize: "1.05rem",
                    background: "linear-gradient(135deg,#38bdf8,#2dd4bf)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    lineHeight: 1.15,
                  }}>
                    Dr. Kavya&apos;s
                  </div>
                  <div style={{
                    fontSize: "0.6rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#64748b",
                    lineHeight: 1.2,
                  }}>
                    Endocrinology &amp; Diabetes
                  </div>
                </div>
              </Link>

              {/* Description */}
              <p style={{
                fontSize: "0.875rem",
                color: "#94a3b8",
                lineHeight: 1.75,
                marginBottom: "1.5rem",
                maxWidth: "28ch",
              }}>
                Providing compassionate, evidence-based endocrine care to help you live a healthier, more balanced life.
              </p>

              {/* Social icons */}
              <div style={{ display: "flex", gap: "0.625rem" }}>
                {socials.map((s, i) => (
                  <motion.a
                    key={i}
                    href={s.href}
                    aria-label={s.label}
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    style={{
                      width: 34, height: 34,
                      borderRadius: 8,
                      background: "rgba(255,255,255,0.07)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#94a3b8",
                      transition: "color 0.2s, background 0.2s",
                      textDecoration: "none",
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(14,165,233,0.18)";
                      (e.currentTarget as HTMLElement).style.color = "#38bdf8";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(14,165,233,0.35)";
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)";
                      (e.currentTarget as HTMLElement).style.color = "#94a3b8";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                    }}
                  >
                    <s.Icon />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* ── Column 2 — Quick Links ────────────── */}
            <div>
              <h4 style={{
                fontFamily: "'Outfit',sans-serif",
                fontWeight: 800,
                fontSize: "1rem",
                color: "#f1f5f9",
                marginBottom: "1.25rem",
              }}>
                Quick Links
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                {quickLinks.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="group relative inline-block"
                      style={{
                        fontSize: "0.9rem",
                        color: "#94a3b8",
                        textDecoration: "none",
                      }}
                    >
                      <span className="group-hover:text-sky-400 transition-colors duration-200">{link.label}</span>
                      <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-sky-400 transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Column 3 — Services ───────────────── */}
            <div>
              <h4 style={{
                fontFamily: "'Outfit',sans-serif",
                fontWeight: 800,
                fontSize: "1rem",
                color: "#f1f5f9",
                marginBottom: "1.25rem",
              }}>
                Our Services
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                {serviceLinks.map((s, i) => (
                  <li key={i}>
                    <Link
                      href="/services"
                      className="group relative inline-block"
                      style={{
                        fontSize: "0.9rem",
                        color: "#94a3b8",
                        textDecoration: "none",
                      }}
                    >
                      <span className="group-hover:text-sky-400 transition-colors duration-200">{s}</span>
                      <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-sky-400 transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Column 4 — Contact Info ───────────── */}
            <div>
              <h4 style={{
                fontFamily: "'Outfit',sans-serif",
                fontWeight: 800,
                fontSize: "1rem",
                color: "#f1f5f9",
                marginBottom: "1.25rem",
              }}>
                Contact Info
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {contactInfo.map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                    {/* Icon pill */}
                    <div style={{
                      width: 30, height: 30,
                      borderRadius: 8,
                      background: "rgba(14,165,233,0.12)",
                      border: "1px solid rgba(14,165,233,0.2)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0,
                      marginTop: "1px",
                    }}>
                      <item.icon style={{ width: 13, height: 13, color: "#38bdf8" }} />
                    </div>

                    {/* Text */}
                    {"href" in item ? (
                      <a
                        href={item.href}
                        style={{
                          fontSize: "0.875rem",
                          color: "#94a3b8",
                          lineHeight: 1.6,
                          textDecoration: "none",
                          transition: "color 0.2s",
                          whiteSpace: "pre-line",
                        }}
                        onMouseEnter={e => (e.currentTarget.style.color = "#38bdf8")}
                        onMouseLeave={e => (e.currentTarget.style.color = "#94a3b8")}
                      >
                        {item.text}
                      </a>
                    ) : (
                      <span style={{
                        fontSize: "0.875rem",
                        color: "#94a3b8",
                        lineHeight: 1.6,
                        whiteSpace: "pre-line",
                      }}>
                        {item.text}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

        {/* ── Bottom bar ────────────────────────────── */}
        <div
          style={{
            marginTop: "2.5rem",
            paddingTop: "1.5rem",
            borderTop: "1px solid rgba(255,255,255,0.07)",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "0.75rem",
          }}
        >
          <p style={{ fontSize: "0.8125rem", color: "#475569" }}>
            © {new Date().getFullYear()} Dr. Kavya&apos;s Endocrinology &amp; Diabetes Clinic. All rights reserved.
          </p>
          <p style={{ fontSize: "0.8125rem", color: "#475569" }}>
            Designed with care &amp; precision for better health
          </p>
        </div>
      </div>
    </footer>
  );
}
