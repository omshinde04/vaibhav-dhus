"use client";
import { motion } from "framer-motion";
import { Trophy, Star, Award, Crown, Medal } from "lucide-react";

const awards = [
  {
    icon: <Trophy size={36} className="text-[#FFD700]" />,
    title: "Face of Maharashtra",
    subtitle: "Finest Awards, Nashik",
  },
  {
    icon: <Star size={36} className="text-[#FFD700]" />,
    title: "तक्षज्ञ गरुडझेप पुरस्कार",
    subtitle: "तक्षज्ञ फाउंडेशन",
  },
  {
    icon: <Award size={36} className="text-[#FFD700]" />,
    title: "आवाज महाराष्ट्राचा",
    subtitle: "Presented by Sharad Pawar",
  },
  {
    icon: <Crown size={36} className="text-[#FFD700]" />,
    title: "Most Popular Voice of Maharashtra",
    subtitle: "Finest Awards, Pune",
  },
  {
    icon: <Medal size={36} className="text-[#FFD700]" />,
    title: "उद्योगरत्न पुरस्कार 2024",
    subtitle: "Business Excellence Recognition",
  },
  {
    icon: <Trophy size={36} className="text-[#FFD700]" />,
    title: "Rotary Youth Icon Award",
    subtitle: "Rotary Club, Maharashtra",
  },
  {
    icon: <Star size={36} className="text-[#FFD700]" />,
    title: "Most Popular Face of Maharashtra",
    subtitle: "Finest Awards",
  },
  {
    icon: <Award size={36} className="text-[#FFD700]" />,
    title: "रत्नदीप पुरस्कार 2024",
    subtitle: "Cultural & Social Excellence",
  },
  {
    icon: <Crown size={36} className="text-[#FFD700]" />,
    title: "Mahashreshtha Entrepreneur Award 2024",
    subtitle: "For Outstanding Leadership",
  },
];

export default function Awards() {
  return (
    <section
      id="awards"
      className="relative w-full py-24 sm:py-28 bg-[#0F0C29] overflow-hidden"
    >
      {/* Background Glow Layers */}
      <div className="absolute inset-0 bg-linear-to-b from-[#1A173B] via-[#0F0C29] to-black opacity-90" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#FFD700]/10 rounded-full blur-[180px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#F6C90E]/10 rounded-full blur-[160px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-[#FFD700] via-[#F6C90E] to-[#EBA937] drop-shadow-[0_0_30px_rgba(255,215,0,0.6)]"
        >
          Awards & Recognition
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-[#EAEAEA] text-base sm:text-lg md:text-xl max-w-2xl mx-auto"
        >
          A Journey of{" "}
          <span className="text-[#FFD700] font-semibold">Excellence, Leadership</span>, and{" "}
          <span className="text-[#FFD700] font-semibold">Public Trust</span>
        </motion.p>

        {/* Awards Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.06,
                rotate: 1,
                boxShadow: "0 0 50px rgba(255, 215, 0, 0.4)",
              }}
              className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-[0_0_25px_rgba(255,215,0,0.15)] 
                         p-10 flex flex-col items-center text-center transition-all duration-500"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="mb-5"
              >
                {award.icon}
              </motion.div>
              <h3 className="text-2xl font-bold text-[#FFD700] mb-2">
                {award.title}
              </h3>
              <p className="text-gray-200 text-sm sm:text-base">{award.subtitle}</p>

              {/* Golden Border Glow */}
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-[#FFD700]/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Animated Orbs */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-12 left-12 w-10 h-10 rounded-full bg-[#FFD700]/40 blur-2xl hidden md:block"
      ></motion.div>

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-12 right-16 w-12 h-12 rounded-full bg-[#EBA937]/40 blur-2xl hidden md:block"
      ></motion.div>
    </section>
  );
}
