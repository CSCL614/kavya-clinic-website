"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, Filter } from "lucide-react";
import { FadeIn } from "@/components/Animations";
import Image from "next/image";

const categories = ["All", "Clinic", "Equipment", "Team", "Patient Care"];

const items = [
  { id: 1, cat: "Clinic",       title: "Reception & Waiting Area", desc: "Premium patient-first environment",     span: true,  color: "#0ea5e9", img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80" },
  { id: 2, cat: "Equipment",    title: "Advanced CGM Lab",          desc: "Continuous glucose monitoring suite",   span: false, color: "#14b8a6", img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80" },
  { id: 3, cat: "Equipment",    title: "DEXA Bone Scanner",         desc: "Gold-standard bone density testing",    span: false, color: "#8b5cf6", img: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=800&q=80" },
  { id: 4, cat: "Clinic",       title: "Consultation Room",         desc: "Private, comfortable consultation",     span: false, color: "#0284c7", img: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=800&q=80" },
  { id: 5, cat: "Patient Care", title: "Thyroid Ultrasound Suite",  desc: "High-resolution in-house imaging",      span: true,  color: "#10b981", img: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80" },
  { id: 6, cat: "Team",         title: "Our Expert Care Team",      desc: "Experienced, compassionate team",       span: false, color: "#f43f5e", img: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?auto=format&fit=crop&w=800&q=80" },
  { id: 7, cat: "Equipment",    title: "Insulin Pump Training",     desc: "Advanced pump therapy room",            span: false, color: "#f59e0b", img: "https://images.unsplash.com/photo-1504439468489-c8920d786a2b?auto=format&fit=crop&w=800&q=80" },
  { id: 8, cat: "Clinic",       title: "Lab & Diagnostics",         desc: "Same-day in-house blood testing",       span: false, color: "#6366f1", img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80" },
  { id: 9, cat: "Patient Care", title: "Teleconsultation Studio",   desc: "Secure video consultation suite",       span: false, color: "#ec4899", img: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=800&q=80" },
];

export function GalleryGrid() {
  const [filter,   setFilter]   = useState("All");
  const [lightbox, setLightbox] = useState<typeof items[0] | null>(null);

  const filtered = filter === "All" ? items : items.filter(i => i.cat === filter);

  return (
    <section className="section bg-slate-50">
      <div className="blob-teal pointer-events-none" style={{ width: "500px", height: "500px", right: "-8%", top: "5%" }} />
      <div className="container relative z-10">

        {/* Section header */}
        <FadeIn>
          <div className="section-header">
            <span className="section-label"><Filter className="w-4 h-4" /> Browse Gallery</span>
            <h2 className="heading h2">State-of-the-Art <span className="grad-text">Facilities</span></h2>
            <p className="lead" style={{ textAlign: "center" }}>
              Designed for patient comfort, safety, and world-class clinical care.
            </p>
          </div>
        </FadeIn>

        {/* Filter tabs */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            justifyContent: "center",
            marginBottom: "3rem",
          }}
        >
          {categories.map(cat => (
            <motion.button
              key={cat} onClick={() => setFilter(cat)}
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              style={{
                padding: "0.6rem 1.5rem",
                borderRadius: "9999px",
                fontSize: "0.875rem",
                fontWeight: 700,
                transition: "all 0.2s",
                background: filter === cat ? "linear-gradient(135deg,#0ea5e9,#14b8a6)" : "white",
                color: filter === cat ? "#ffffff" : "#475569",
                border: filter === cat ? "none" : "1px solid #e2e8f0",
                cursor: "pointer",
                boxShadow: filter === cat ? "0 4px 16px rgba(14,165,233,0.28)" : "0 2px 4px rgba(0,0,0,0.02)",
              }}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Masonry-style grid */}
        <motion.div layout className="gallery-grid">
          <AnimatePresence>
            {filtered.map(item => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                onClick={() => setLightbox(item)}
                className={`group relative rounded-[2rem] overflow-hidden cursor-zoom-in ${item.span ? 'col-span-1 md:col-span-2' : 'col-span-1'}`}
                style={{
                  background: "white",
                  border: "1px solid rgba(14,165,233,0.1)",
                  boxShadow: "0 10px 30px rgba(14,165,233,0.05)",
                }}
              >
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <Image src={item.img} alt={item.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>

                {/* Glassmorphism Hover Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "linear-gradient(to top, rgba(15,23,42,0.9) 0%, rgba(15,23,42,0.3) 50%, rgba(15,23,42,0.1) 100%)", backdropFilter: "blur(2px)" }} />

                {/* Category tag */}
                <div className="absolute top-5 left-5 z-10 transition-transform duration-300 group-hover:-translate-y-1">
                  <span
                    style={{
                      fontSize: "0.75rem", fontWeight: 800,
                      padding: "0.35rem 1rem",
                      borderRadius: "9999px",
                      background: "rgba(255,255,255,0.9)",
                      backdropFilter: "blur(4px)",
                      color: item.color,
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    }}
                  >
                    {item.cat}
                  </span>
                </div>

                {/* Zoom icon */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100"
                  style={{
                    width: "48px", height: "48px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.1)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                  }}
                >
                  <ZoomIn className="w-6 h-6 text-white" />
                </div>

                {/* Bottom label */}
                <div
                  className="absolute bottom-0 left-0 right-0 translate-y-4 group-hover:translate-y-0 transition-all duration-300 opacity-0 group-hover:opacity-100"
                  style={{ padding: "1.5rem" }}
                >
                  <h3 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 700, fontSize: "1.125rem", color: "white" }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.7)", marginTop: "0.25rem" }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightbox && (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="lightbox-overlay"
              style={{ zIndex: 9999, background: "rgba(15,23,42,0.9)", backdropFilter: "blur(12px)" }}
              onClick={() => setLightbox(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 26 }}
                onClick={e => e.stopPropagation()}
                className="relative bg-white rounded-3xl overflow-hidden max-w-5xl w-[calc(100%-2rem)] mx-auto shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] border border-white/10"
              >
                {/* Preview */}
                <div className="relative w-full aspect-[16/10] sm:aspect-[21/9]">
                  <Image src={lightbox.img} alt={lightbox.title} fill className="object-cover" sizes="100vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                </div>

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <span
                    style={{
                      fontSize: "0.75rem", fontWeight: 800, padding: "0.35rem 1rem",
                      borderRadius: "9999px", color: "white",
                      background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", border: `1px solid rgba(255,255,255,0.2)`,
                    }}
                  >
                    {lightbox.cat}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white mt-4 mb-2" style={{ fontFamily: "'Outfit',sans-serif" }}>
                    {lightbox.title}
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base">{lightbox.desc}</p>
                </div>

                {/* Close */}
                <button
                  onClick={() => setLightbox(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center bg-black/20 backdrop-blur-md border border-white/20 text-white hover:bg-black/40 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
