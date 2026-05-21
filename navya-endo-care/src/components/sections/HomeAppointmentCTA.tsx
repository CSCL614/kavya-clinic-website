"use client";
import { motion } from "framer-motion";
import { Phone, Calendar, ArrowRight, Clock, MapPin, MessageCircle } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/Animations";

export function HomeAppointmentCTA() {
  return (
    <section className="section relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)" }}>

      {/* Floating background orbs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-[100px]"
          style={{ background: "#0ea5e9" }}
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full blur-[120px]"
          style={{ background: "#14b8a6" }}
        />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT: Premium Glass Card */}
          <FadeIn direction="right">
            <div className="relative rounded-3xl overflow-hidden p-8 sm:p-10"
              style={{
                background: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
              }}>
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50" />
              
              <div className="relative z-10">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide mb-8"
                  style={{ background: "rgba(14,165,233,0.2)", border: "1px solid rgba(14,165,233,0.3)", color: "#bae6fd" }}>
                  <Calendar className="w-4 h-4" /> Limited Slots Available
                </span>

                <h3 className="text-2xl sm:text-3xl font-black text-white mb-8" style={{ fontFamily: "'Outfit',sans-serif" }}>
                  Clinic Information
                </h3>

                <div className="space-y-5">
                  {[
                    { icon: Clock,  label: "Working Hours", value: "Mon–Sat: 9AM – 7PM" },
                    { icon: Phone,  label: "Emergency & Appts", value: "+91 98765 43210" },
                    { icon: MapPin, label: "Location", value: "Banjara Hills, Hyderabad" },
                  ].map((info, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 rounded-2xl"
                      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.05)" }}>
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: "rgba(14,165,233,0.2)" }}>
                        <info.icon className="w-5 h-5 text-sky-400" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-400 mb-1">{info.label}</div>
                        <div className="text-sm font-bold text-white">{info.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* RIGHT: Typography & CTA */}
          <FadeIn direction="left" delay={0.1}>
            <h2 className="heading h2 text-white mb-6">
              Your Health Journey<br />Starts <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-300">Today</span>
            </h2>
            
            <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-lg">
              Don&apos;t let hormonal issues affect your quality of life. Book a consultation with Dr. Navya
              and start your transformation journey with expert care.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/contact" className="w-full sm:w-auto">
                <motion.span whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}
                  className="btn btn-primary btn-lg w-full justify-center" style={{ display: "inline-flex" }}>
                  <span>Book Appointment</span> <ArrowRight className="w-5 h-5" />
                </motion.span>
              </Link>
              <a href="tel:+919876543210" className="w-full sm:w-auto">
                <motion.span whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  className="btn btn-lg w-full justify-center"
                  style={{ display: "inline-flex", background: "rgba(255,255,255,0.1)", color: "white", border: "1.5px solid rgba(255,255,255,0.2)", backdropFilter: "blur(8px)" }}>
                  <Phone className="w-5 h-5" /> <span>Call Clinic</span>
                </motion.span>
              </a>
            </div>

            <a href="https://api.whatsapp.com/send?phone=919876543210" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-teal-400 hover:text-teal-300 transition-colors">
              <MessageCircle className="w-5 h-5" /> Chat with us on WhatsApp
            </a>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
