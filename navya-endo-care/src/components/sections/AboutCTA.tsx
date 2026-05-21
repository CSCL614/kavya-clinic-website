"use client";
import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
export function AboutCTA() {
  return (
    <section className="section relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)" }}>
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-sky-500/20 rounded-full blur-[100px]" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-teal-500/20 rounded-full blur-[100px]" />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
      </div>

      <div className="container relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center p-10 sm:p-14 rounded-3xl"
          style={{
            background: "rgba(255,255,255,0.03)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
          }}>
          <h2 className="heading h2 text-white mb-6">Ready to Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-300">Journey?</span></h2>
          <p className="text-lg text-slate-300 mb-10 max-w-xl mx-auto">Book a consultation with Dr. Navya and take the first step toward optimal hormonal health and a better quality of life.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+919876543210" className="w-full sm:w-auto">
              <motion.span whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }} className="btn btn-primary btn-lg w-full justify-center" style={{ display: "inline-flex" }}>
                <Phone className="w-5 h-5" /> <span>Call Clinic</span>
              </motion.span>
            </a>
            <Link href="/contact" className="w-full sm:w-auto">
              <motion.span whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="btn btn-lg w-full justify-center"
                style={{ display: "inline-flex", background: "rgba(255,255,255,0.1)", color: "white", border: "1.5px solid rgba(255,255,255,0.2)", backdropFilter: "blur(8px)" }}>
                Book Online <ArrowRight className="w-5 h-5" />
              </motion.span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
