"use client";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Phone, Clock, MapPin } from "lucide-react";

export function AppointmentCTA() {
  return (
    <section
      id="appointment"
      className="relative py-32 overflow-hidden"
    >
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #0a1a3e 0%, #060f2a 50%, #0a1a3e 100%)",
        }}
      />
      {/* Cyan gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, rgba(34,211,238,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Animated grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(34,211,238,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.5) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Floating particles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: 4,
            height: 4,
            left: `${10 + i * 7}%`,
            top: `${20 + Math.sin(i) * 40}%`,
            background: "#22d3ee",
            opacity: 0.3,
          }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{
            duration: 3 + i * 0.3,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Glow rings */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full"
        style={{
          border: "1px solid rgba(34,211,238,0.2)",
        }}
      />
      <motion.div
        animate={{ scale: [1.3, 1, 1.3], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{
          border: "1px solid rgba(45,212,191,0.1)",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
            style={{
              background: "rgba(34, 211, 238, 0.1)",
              border: "1px solid rgba(34, 211, 238, 0.25)",
              color: "#22d3ee",
            }}
          >
            <Calendar className="w-4 h-4" />
            Book Now — Limited Slots Available
          </div>

          <h2
            className="text-5xl lg:text-7xl font-black mb-6 leading-tight"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Your Health Journey{" "}
            <br />
            Starts{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #22d3ee, #2dd4bf, #a78bfa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Today
            </span>
          </h2>

          <p className="text-white/60 text-xl mb-12 max-w-2xl mx-auto">
            Don&apos;t let hormonal issues affect your quality of life. Book a consultation
            with Dr. Navya and start your transformation.
          </p>

          {/* Info cards */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { icon: Clock, label: "Mon–Sat", value: "9 AM – 7 PM" },
              { icon: Phone, label: "Call Us", value: "+91 98765 43210" },
              { icon: MapPin, label: "Location", value: "Banjara Hills, Hyderabad" },
            ].map((info, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 px-6 py-3 rounded-2xl"
                style={{
                  background: "rgba(6,15,42,0.6)",
                  border: "1px solid rgba(34,211,238,0.15)",
                  backdropFilter: "blur(20px)",
                }}
              >
                <info.icon className="w-5 h-5 text-cyan-400" />
                <div className="text-left">
                  <div className="text-white/40 text-xs">{info.label}</div>
                  <div className="text-white font-semibold text-sm">{info.value}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="tel:+919876543210"
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.97 }}
              className="btn-gradient flex items-center gap-3 px-10 py-5 rounded-2xl text-lg font-black"
              style={{ boxShadow: "0 30px 60px rgba(34, 211, 238, 0.35)" }}
            >
              <Phone className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Call Now</span>
            </motion.a>
            <motion.a
              href={`https://api.whatsapp.com/send?phone=919876543210&text=Hello, I would like to book an appointment with Dr. Navya.`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="btn-outline-cyan flex items-center gap-3 px-10 py-5 rounded-2xl text-lg font-bold"
            >
              Book via WhatsApp <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
