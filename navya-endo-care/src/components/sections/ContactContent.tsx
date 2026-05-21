"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageCircle } from "lucide-react";
import { FadeIn } from "@/components/Animations";

function InfoCard({ icon:Icon, label, value, href, color, bg }: { icon:React.ElementType; label:string; value:string; href?:string; color:string; bg:string }) {
  return (
    <motion.div whileHover={{ y:-3 }} className="card p-5 flex items-start gap-4 transition-colors">
      <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background:`${color}15` }}>
        <Icon className="w-5 h-5" style={{ color }} />
      </div>
      <div>
        <div className="text-xs font-semibold mb-0.5" style={{ color:"var(--text-muted)" }}>{label}</div>
        {href ? (
          <a href={href} className="font-semibold text-sm transition-colors" style={{ color:"var(--text-primary)" }}
            onMouseEnter={e=>(e.currentTarget.style.color="#0ea5e9")}
            onMouseLeave={e=>(e.currentTarget.style.color="var(--text-primary)")}>
            {value}
          </a>
        ) : (
          <div className="font-semibold text-sm" style={{ color:"var(--text-primary)" }}>{value}</div>
        )}
      </div>
    </motion.div>
  );
}

export function ContactContent() {
  const [form, setForm]       = useState({ name:"", email:"", phone:"", condition:"", message:"" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section className="section bg-sky" style={{ position: "relative", overflow: "hidden" }}>
      <div className="blob-sky  w-[500px] h-[500px] -left-20 top-10  opacity-60 pointer-events-none absolute" />
      <div className="blob-teal w-[400px] h-[400px] -right-20 bottom-10 opacity-40 pointer-events-none absolute" />
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-[1.35fr_1fr] gap-12 items-start">

          {/* Left — Form */}
          <FadeIn direction="left">
            <div className="relative rounded-3xl overflow-hidden p-8 sm:p-10" style={{ background: "rgba(255,255,255,0.7)", backdropFilter: "blur(24px)", border: "1px solid rgba(255,255,255,0.9)", boxShadow: "0 25px 50px rgba(14,165,233,0.15)" }}>
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/20 opacity-50 pointer-events-none" />
              <div className="relative z-10">
              {submitted ? (
                <motion.div initial={{ opacity:0, scale:0.92 }} animate={{ opacity:1, scale:1 }} className="text-center py-8">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ background:"rgba(14,165,233,0.1)" }}>
                    <CheckCircle className="w-8 h-8" style={{ color:"#0ea5e9" }} />
                  </div>
                  <h3 className="heading h4 mb-2" style={{ color:"var(--text-primary)" }}>Message Received!</h3>
                  <p className="lead" style={{ color:"var(--text-secondary)" }}>Dr. Navya&apos;s team will contact you within 2 business hours.</p>
                  <button onClick={() => setSubmitted(false)}
                    className="btn btn-outline btn-sm mt-6">
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <>
                  <h3 className="heading h4 mb-1" style={{ color:"var(--text-primary)" }}>Book an Appointment</h3>
                  <p className="text-sm mb-7" style={{ color:"var(--text-muted)" }}>Fill out the form and we&apos;ll get back to you promptly.</p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="input-label" style={{ color:"var(--text-secondary)" }}>Full Name *</label>
                        <input required type="text" placeholder="Your name"
                          value={form.name} onChange={e => setForm({ ...form, name:e.target.value })}
                          className="input-field" />
                      </div>
                      <div>
                        <label className="input-label" style={{ color:"var(--text-secondary)" }}>Phone Number *</label>
                        <input required type="tel" placeholder="+91 XXXXX XXXXX"
                          value={form.phone} onChange={e => setForm({ ...form, phone:e.target.value })}
                          className="input-field" />
                      </div>
                    </div>

                    <div>
                      <label className="input-label" style={{ color:"var(--text-secondary)" }}>Email Address</label>
                      <input type="email" placeholder="your@email.com"
                        value={form.email} onChange={e => setForm({ ...form, email:e.target.value })}
                        className="input-field" />
                    </div>

                    <div>
                      <label className="input-label" style={{ color:"var(--text-secondary)" }}>Medical Condition *</label>
                      <select required value={form.condition} onChange={e => setForm({ ...form, condition:e.target.value })}
                        className="input-field" style={{ appearance:"none", cursor:"pointer", background:"var(--bg-secondary)", color:"var(--text-primary)" }}>
                        <option value="">Select a condition</option>
                        {["Diabetes","Thyroid Disorder","PCOD / PCOS","Obesity & Weight Management","Adrenal Disorder","Osteoporosis","Pituitary Disorder","Hormone Therapy","Other"].map(o => (
                          <option key={o} value={o}>{o}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="input-label" style={{ color:"var(--text-secondary)" }}>Message / Symptoms</label>
                      <textarea rows={4} placeholder="Describe your symptoms, current medications, or specific concerns..."
                        value={form.message} onChange={e => setForm({ ...form, message:e.target.value })}
                        className="input-field resize-none" />
                    </div>

                    <motion.button type="submit" disabled={loading}
                      whileHover={{ scale:loading ? 1 : 1.02, y:loading ? 0 : -2 }}
                      whileTap={{ scale:0.97 }}
                      className="btn btn-primary w-full justify-center">
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.35)" strokeWidth="3" />
                            <path d="M12 2a10 10 0 0 1 10 10" stroke="white" strokeWidth="3" strokeLinecap="round" />
                          </svg>
                          <span>Sending...</span>
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="w-4 h-4" /><span>Send Message</span>
                        </span>
                      )}
                    </motion.button>
                  </form>
                </>
              )}
              </div>
            </div>
          </FadeIn>

          {/* Right — Info */}
          <FadeIn direction="right" delay={0.1}>
            <span className="section-label"><Phone className="w-4 h-4" /> Contact Info</span>
            <h2 className="heading h3 mb-3">Let&apos;s Connect</h2>
            <p className="lead mb-8">Our team is available Mon–Sat 9AM–7PM. Same-day appointments and teleconsultations available.</p>

            <div className="space-y-3 mb-8">
              <InfoCard icon={Phone}  label="Phone / WhatsApp" value="+91 98765 43210"        href="tel:+919876543210"             color="#0ea5e9" bg="#e0f2fe" />
              <InfoCard icon={Mail}   label="Email"            value="info@navyaendocare.com" href="mailto:info@navyaendocare.com" color="#14b8a6" bg="#ccfbf1" />
              <InfoCard icon={MapPin} label="Clinic Address"   value="Plot 42, Road No. 10, Banjara Hills, Hyderabad – 500 034" color="#8b5cf6" bg="#ede9fe" />
              <InfoCard icon={Clock}  label="Working Hours"    value="Mon–Sat: 9AM–7PM | Sun: 10AM–2PM" color="#f59e0b" bg="#fef3c7" />
            </div>

            {/* Quick action buttons */}
            <div className="flex flex-col gap-3 mb-8">
              <a href="tel:+919876543210">
                <motion.span whileHover={{ scale:1.02, y:-2 }} whileTap={{ scale:0.97 }}
                  className="btn btn-primary w-full justify-center" style={{ display:"flex" }}>
                  <Phone className="w-4 h-4" /> <span>Call Now</span>
                </motion.span>
              </a>
              <a href="https://api.whatsapp.com/send?phone=919876543210&text=Hello%20Dr.%20Navya%2C%20I%20would%20like%20to%20book%20an%20appointment." target="_blank" rel="noopener noreferrer">
                <motion.span whileHover={{ scale:1.02 }} whileTap={{ scale:0.97 }}
                  className="btn btn-outline w-full justify-center" style={{ display:"flex" }}>
                  <MessageCircle className="w-4 h-4" /> <span>WhatsApp Us</span>
                </motion.span>
              </a>
            </div>

            {/* Map iframe */}
            <div className="rounded-2xl overflow-hidden shadow-sm" style={{ height:"200px", border: "1.5px solid rgba(14,165,233,0.15)" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121825.26383670982!2d78.36625801932463!3d17.4128038753874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sBanjara%20Hills%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1714493301037!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </FadeIn>

        </div>
      </div>

      {/* Floating WhatsApp */}
      <a href="https://api.whatsapp.com/send?phone=919876543210" target="_blank" rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-[60px] h-[60px] bg-green-500 rounded-full flex items-center justify-center text-white shadow-[0_10px_25px_rgba(34,197,94,0.4)] hover:scale-110 hover:bg-green-600 transition-all duration-300">
        <MessageCircle className="w-8 h-8" />
      </a>
    </section>
  );
}
