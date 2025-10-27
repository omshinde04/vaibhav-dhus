"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#0F0C29]">
      {/* --- Backgrounds --- */}
      <div className="absolute inset-0">
        {/* Desktop Background */}
        <div className="hidden md:block absolute inset-0">
          <Image
            src="/images/desk.jpg"
            alt="Vaibhav Dhus Desktop Hero"
            fill
            priority
            className="object-cover object-center scale-105 transition-transform duration-6000 ease-in-out"
          />
        </div>

        {/* Mobile Background */}
        <div className="block md:hidden absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="Vaibhav Dhus Mobile Hero"
            fill
            priority
            className="object-cover object-center scale-110 transition-transform duration-6000 ease-in-out"
          />
        </div>

        {/* Gradient Overlay for readability */}
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-[#0F0C29]/80 to-[#1A173B]/90 backdrop-blur-[2px]"></div>
      </div>

      {/* --- Content --- */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center h-screen px-6 md:px-12">
        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold 
          text-transparent bg-clip-text bg-linear-to-r from-[#FFD700] via-[#F6C90E] to-[#EBA937] 
          drop-shadow-[0_0_25px_rgba(255,215,0,0.6)] font-serif tracking-wide"
        >
          अंतः अस्ति प्रारंभः
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="mt-6 text-lg md:text-2xl text-white font-medium tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] max-w-3xl leading-relaxed"
        >
          वैभव ढुस – The Real Chanakya of Modern Business Era
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.5 }}
          className="mt-10 flex flex-col md:flex-row items-center gap-6"
        >
          {/* Buy Now Button */}
          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            href="https://vaibhavdhus.com/order/index.php?sku=marathi-part-1"
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-10 py-3 rounded-full text-lg font-semibold text-[#0F0C29]
            bg-linear-to-r from-[#FFD700] via-[#F6C90E] to-[#EBA937]
            shadow-[0_0_25px_rgba(255,215,0,0.6)] hover:shadow-[0_0_40px_rgba(255,215,0,0.9)]
            transition-all duration-300"
          >
            Buy Now
          </motion.a>

          {/* Watch Trailer Button */}
          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            href="#trailer"
            className="relative border-2 border-[#EBA937] text-[#EBA937] px-10 py-3 rounded-full font-semibold text-lg 
            hover:text-[#0F0C29] hover:bg-[#EBA937] transition-all duration-300 shadow-[0_0_15px_rgba(235,169,55,0.4)]"
          >
            Watch Trailer
          </motion.a>
        </motion.div>

        {/* Floating Glass Tag */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.6, delay: 0.8 }}
          className="absolute bottom-14 md:bottom-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 md:px-8 md:py-4 shadow-2xl"
        >
          <p className="text-[#FFD700] text-sm md:text-base font-semibold tracking-wider">
            Discover the Vision. Lead with Wisdom.
          </p>
        </motion.div>
      </div>

      {/* --- Floating Lights --- */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-16 right-10 hidden md:block"
      >
        <div className="w-8 h-8 rounded-full bg-[#FFD700]/70 blur-xl animate-pulse"></div>
      </motion.div>

      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-24 left-14 hidden md:block"
      >
        <div className="w-10 h-10 rounded-full bg-[#EBA937]/50 blur-xl"></div>
      </motion.div>
    </section>
  );
}
