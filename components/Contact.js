"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Youtube, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 bg-linear-to-b from-black via-[#0F0C29] to-black text-white overflow-hidden"
    >
      {/* Background Lights */}
      <motion.div
        animate={{ y: [0, -40, 0], x: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute -top-40 -left-32 w-96 h-96 bg-[#FFD700]/10 blur-[150px] rounded-full"
      />
      <motion.div
        animate={{ y: [0, 40, 0], x: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute bottom-0 right-0 w-104 h-104 bg-[#EBA937]/10 blur-[150px] rounded-full"
      />

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-4 text-center bg-linear-to-r from-[#FFD700] via-[#F6C90E] to-[#EBA937] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,215,0,0.6)]"
        >
          CONTACT ME
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center text-gray-300 max-w-2xl mx-auto mb-12"
        >
          Feel free to reach out to{" "}
          <span className="text-[#FFD700] font-semibold">VAIBHAV DHUS ENTERPRISES</span>{" "}
          for business inquiries, collaborations, speaking engagements, or any other questions.
        </motion.p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-lg space-y-5"
          >
            <div>
              <label className="block text-sm text-gray-300 mb-1">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-gray-700 focus:border-[#FFD700] outline-none text-white transition-all"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-1">Mobile Number (10 digits)</label>
              <input
                type="tel"
                placeholder="Enter your mobile number"
                maxLength={10}
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-gray-700 focus:border-[#FFD700] outline-none text-white transition-all"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-1">Your Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-gray-700 focus:border-[#FFD700] outline-none text-white transition-all"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-1">Your Message</label>
              <textarea
                rows="4"
                placeholder="Type your message here..."
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-gray-700 focus:border-[#FFD700] outline-none text-white transition-all resize-none"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 bg-linear-to-r from-[#FFD700] via-[#F6C90E] to-[#EBA937] text-black font-bold rounded-lg shadow-lg shadow-[#FFD700]/30 hover:shadow-[#FFD700]/50 transition-all"
            >
              Send Message
            </motion.button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-lg space-y-6"
          >
            <h3 className="text-2xl font-semibold text-[#FFD700] mb-4">Contact Info</h3>

            <div className="flex items-center gap-3">
              <Mail className="text-[#FFD700]" size={20} />
              <p className="text-gray-300">vaibhavdhus@gmail.com</p>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="text-[#FFD700]" size={20} />
              <p className="text-gray-300">+91 9595 85 1497</p>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="text-[#FFD700]" size={20} />
              <p className="text-gray-300">
                Shrirampur, Dist A.nagar, Maharashtra
              </p>
            </div>

            <div className="mt-6">
              <h4 className="text-lg font-semibold text-[#FFD700] mb-2">
                Connect with me on social media
              </h4>
              <div className="flex gap-4">
                <motion.a
                  href="https://www.youtube.com/@Vaibhavdhus"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="p-3 bg-white/10 rounded-full hover:bg-[#FFD700]/20 transition-all"
                >
                  <Youtube className="text-[#FFD700]" size={24} />
                </motion.a>

                <motion.a
                  href="https://www.instagram.com/vaibhavdhusofficial?igsh=MXQ3cmxwc3JheHY5NQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="p-3 bg-white/10 rounded-full hover:bg-[#FFD700]/20 transition-all"
                >
                  <Instagram className="text-[#FFD700]" size={24} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Lights */}
      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute top-28 right-14 w-8 h-8 rounded-full bg-[#FFD700]/40 blur-xl hidden md:block"
      />
      <motion.div
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-20 left-10 w-7 h-7 rounded-full bg-[#EBA937]/40 blur-xl hidden md:block"
      />
    </section>
  );
}
