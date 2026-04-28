import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, User, Mail, Phone, MessageSquare, ChevronDown, CheckCircle } from 'lucide-react'

const services = [
  'Diabetes Management',
  'Thyroid Disorders',
  'Hormonal Disorders',
  'Metabolic Syndrome',
  'Osteoporosis',
  'Pediatric Endocrinology',
  'General Endocrinology',
]

export default function AppointmentForm() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', service: '', message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    // Simulate async submission
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card rounded-2xl p-10 text-center"
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-500" />
        </div>
        <h3 className="text-xl font-bold text-slate-800 font-display mb-2">
          Appointment Request Sent!
        </h3>
        <p className="text-slate-500 text-sm">
          Thank you, {form.name}. Our team will contact you within 24 hours to confirm your appointment.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm({ name:'', email:'', phone:'', service:'', message:'' }) }}
          className="mt-6 btn-outline text-sm py-2 px-5"
        >
          Book Another
        </button>
      </motion.div>
    )
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      onSubmit={handleSubmit}
      className="glass-card rounded-2xl p-8 space-y-4"
    >
      <h3 className="text-xl font-bold text-slate-800 font-display mb-1">
        Book an Appointment
      </h3>
      <p className="text-sm text-slate-500 mb-4">Fill in your details and we'll confirm within 24 hrs.</p>

      {/* Name */}
      <div className="relative">
        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Full Name"
          required
          className="form-input pl-10"
          id="appt-name"
        />
      </div>

      {/* Email */}
      <div className="relative">
        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email Address"
          required
          className="form-input pl-10"
          id="appt-email"
        />
      </div>

      {/* Phone */}
      <div className="relative">
        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          required
          className="form-input pl-10"
          id="appt-phone"
        />
      </div>

      {/* Service select */}
      <div className="relative">
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          required
          className="form-input appearance-none pr-10"
          id="appt-service"
        >
          <option value="" disabled>Select a Service</option>
          {services.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      {/* Message */}
      <div className="relative">
        <MessageSquare className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Brief description of your concern (optional)"
          rows={4}
          className="form-input pl-10 resize-none"
          id="appt-message"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed"
        id="appt-submit"
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
            Sending…
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <Send className="w-4 h-4" />
            Request Appointment
          </span>
        )}
      </button>
    </motion.form>
  )
}
