"use client";
import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
export function ServicesCTA() {
  return (
    <section className="section py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-50" />
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-sky-100 to-transparent opacity-50" />
      <div className="absolute left-0 bottom-0 w-1/2 h-full bg-gradient-to-r from-teal-50 to-transparent opacity-50" />

      <div className="container relative z-10">
        <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          className="relative max-w-4xl mx-auto rounded-[2rem] overflow-hidden p-8 sm:p-14"
          style={{
            background: "rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(14,165,233,0.15)",
            boxShadow: "0 25px 50px -12px rgba(14,165,233,0.1)",
          }}>
          {/* Decorative SVG Pattern */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 opacity-5 pointer-events-none">
            <svg width="400" height="400" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 0V100M0 50H100" stroke="#0ea5e9" strokeWidth="4" strokeLinecap="round" strokeDasharray="8 8" />
              <circle cx="50" cy="50" r="30" stroke="#14b8a6" strokeWidth="4" strokeDasharray="8 8" />
            </svg>
          </div>

          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-6 bg-sky-50 text-sky-600 border border-sky-100">
              Expert Consultation
            </span>
            <h2 className="heading h2 mb-6 text-slate-800">Not Sure Which <span className="grad-text">Service You Need?</span></h2>
            <p className="text-lg text-slate-600 mb-10">Book a consultation and Dr. Navya will personally assess your condition and recommend the right tailored treatment plan for you.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="w-full sm:w-auto">
                <motion.span whileHover={{ scale:1.04, y:-2 }} whileTap={{ scale:0.97 }} className="btn btn-primary btn-lg w-full justify-center" style={{ display:"inline-flex" }}>
                  Book Appointment <ArrowRight className="w-5 h-5 ml-1" />
                </motion.span>
              </Link>
              <a href="tel:+919876543210" className="w-full sm:w-auto">
                <motion.span whileHover={{ scale:1.04 }} whileTap={{ scale:0.97 }} className="btn btn-outline btn-lg w-full justify-center bg-white" style={{ display:"inline-flex" }}>
                  <Phone className="w-5 h-5 mr-1" /> <span>Speak with Us</span>
                </motion.span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
