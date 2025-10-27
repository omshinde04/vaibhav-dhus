"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen bg-[#0F0C29] text-white py-24 md:py-32 overflow-hidden font-sans"
    >
      {/* --- Background Layers --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 bg-linear-to-b from-[#1A173B]/95 via-[#0F0C29]/95 to-[#0B0823]"
      ></motion.div>

      {/* Floating gold glows */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute -top-40 -left-40 w-96 h-96 bg-[#FFD700]/10 blur-[180px] rounded-full"
      ></motion.div>
      <motion.div
        animate={{ y: [0, 40, 0], x: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#EBA937]/10 blur-[180px] rounded-full"
      ></motion.div>

      {/* --- Main Content --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 md:px-12 flex flex-col md:flex-row items-center justify-center md:justify-between gap-16 md:gap-24">
        
        {/* --- Author Image --- */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative shrink-0 flex justify-center md:justify-start"
        >
          <div className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-80 md:w-[420px] md:h-[420px] rounded-4xl overflow-hidden border border-[#FFD700]/40 shadow-[0_0_80px_rgba(255,215,0,0.25)]">
            <Image
              src="/images/about.jpeg"
              alt="Vaibhav Dhus"
              fill
              priority
              className="object-cover object-center group-hover:scale-110 transition-transform duration-1000 ease-out"
            />
          </div>

          {/* Floating Gold Signature Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="absolute -bottom-14 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/20 px-7 py-2 rounded-full text-[#FFD700] text-base font-semibold tracking-wide shadow-[0_0_25px_rgba(255,215,0,0.4)]"
          >
            वैभव ढुस
          </motion.div>
        </motion.div>

        {/* --- Text Section --- */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl text-center md:text-left leading-relaxed"
        >
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight 
            bg-linear-to-r from-[#FFD700] via-[#F6C90E] to-[#EBA937] bg-clip-text text-transparent 
            drop-shadow-[0_0_25px_rgba(255,215,0,0.6)] leading-snug"
          >
            वैभव ढुस – The Real Chanakya of Modern Business Era
          </motion.h2>

          {/* Marathi Quote */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-6 text-base sm:text-lg md:text-xl italic text-gray-200 leading-relaxed font-medium"
          >
            “कृषक कुटुंबातून उभं राहिलेला माणूस, ज्याने फक्त विचारांनी ३ लाख
            पुस्तकांची विक्री घडवली. १० वर्षांचा प्रवास, हजारो लोकांच्या
            आयुष्याला दिशा. ‘अंतः अस्ति प्रारंभः’ हे त्या प्रवासाचं सत्य आहे.”
          </motion.p>

          {/* English Story */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-8 space-y-5 text-gray-300 text-sm sm:text-base md:text-lg font-light leading-8"
          >
            <p>
              Born into a humble farming family in{" "}
              <span className="text-[#FFD700] font-semibold">Deolali Pravara</span>,{" "}
              Vaibhav Dhus transformed challenges into a story of power,
              purpose, and progress. His journey from soil to success is
              inspiring millions across Maharashtra.
            </p>

            <p>
              Since 2021, his voice has echoed across{" "}
              <span className="text-[#FFD700] font-semibold">digital platforms</span> — 
              empowering farmers, youth, and entrepreneurs to grow their dreams
              through strategy and wisdom. His teachings today shape the
              blueprint for a new generation of leaders.
            </p>

            <p>
              With impactful sessions in{" "}
              <span className="text-[#FFD700] font-semibold">100+ schools and colleges</span>{" "}
              and guidance for{" "}
              <span className="text-[#FFD700] font-semibold">500+ new business inaugurations</span>,
              Vaibhav Dhus has built more than followers — he has built a
              movement of thinkers and doers.
            </p>

            <p>
              As the founder of{" "}
              <span className="text-[#FFD700] font-semibold">Pravara Healthcare</span>,
              one of Maharashtra’s leading Ayurvedic brands, he continues to
              drive innovation rooted in tradition — proving that true success
              begins from within.
            </p>
          </motion.div>

          {/* Divider & Signature Line */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-10 w-32 h-0.5 bg-linear-to-r from-[#FFD700] to-[#EBA937] mx-auto md:mx-0 rounded-full"
          ></motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-5 text-[#FFD700]/90 font-semibold tracking-wide text-base sm:text-lg"
          >
            “Discover the Vision. Lead with Wisdom.”
          </motion.p>
        </motion.div>
      </div>

      {/* Floating Lights */}
      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute top-28 right-14 w-10 h-10 rounded-full bg-[#FFD700]/40 blur-xl hidden md:block"
      ></motion.div>
      <motion.div
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-20 left-10 w-8 h-8 rounded-full bg-[#EBA937]/40 blur-xl hidden md:block"
      ></motion.div>
    </section>
  );
}
