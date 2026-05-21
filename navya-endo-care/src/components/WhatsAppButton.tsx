"use client";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://api.whatsapp.com/send?phone=919876543210&text=Hello%20Dr.%20Navya%2C%20I%20would%20like%20to%20book%20an%20appointment."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="whatsapp-float"
      initial={{ scale:0, opacity:0 }}
      animate={{ scale:1, opacity:1 }}
      transition={{ delay:2.2, type:"spring", stiffness:200 }}
      whileHover={{ scale:1.1 }}
      whileTap={{ scale:0.9 }}
    >
      <motion.div
        animate={{ boxShadow:["0 4px 20px rgba(37,211,102,0.4)","0 4px 32px rgba(37,211,102,0.6)","0 4px 20px rgba(37,211,102,0.4)"] }}
        transition={{ duration:2.5, repeat:Infinity }}
        className="w-14 h-14 rounded-full flex items-center justify-center"
        style={{ background:"linear-gradient(135deg,#25D366,#128C7E)" }}
      >
        <MessageCircle className="w-7 h-7 fill-white text-white" />
      </motion.div>
    </motion.a>
  );
}
