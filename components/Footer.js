"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import { Facebook, Instagram, Youtube } from "lucide-react";

const navLinks = [
  { name: "मुखपृष्ठ", href: "#home" },
  { name: "आपणाबद्दल", href: "#about" },
  { name: "पुस्तक", href: "#book" },
  { name: "पुरस्कार", href: "#awards" },
  { name: "संपर्क", href: "#contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* SEO Meta for Footer Section */}
      <Head>
        <title>Vaibhav Dhus Enterprises | Official Website</title>
        <meta
          name="description"
          content="Vaibhav Dhus Enterprises — inspiring lives through knowledge, motivation, and real-life experiences. Connect via Instagram, YouTube, and Facebook."
        />
        <meta
          name="keywords"
          content="Vaibhav Dhus, Vaibhav Dhus Enterprises, Marathi Author, Motivational Speaker, Books, Inspiration, Instagram, YouTube, Facebook"
        />
        <meta property="og:title" content="Vaibhav Dhus Enterprises" />
        <meta
          property="og:description"
          content="Official website of Vaibhav Dhus — author, motivational speaker, and entrepreneur."
        />
        <meta property="og:image" content="/books/b1.jpg" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Head>

      <footer
        id="footer"
        className="relative bg-linear-to-b from-black via-[#0F0C29] to-black text-white pt-24 pb-10 overflow-hidden"
        aria-labelledby="footer-heading"
      >
        {/* Floating Lights */}
        <motion.div
          animate={{ y: [0, -40, 0], x: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 w-96 h-96 bg-[#FFD700]/15 blur-[130px] rounded-full"
          aria-hidden="true"
        />
        <motion.div
          animate={{ y: [0, 30, 0], x: [0, -40, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#EBA937]/20 blur-[160px] rounded-full"
          aria-hidden="true"
        />

        {/* Footer Grid */}
        <div
          className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 text-center md:text-left"
        >
          {/* Brand Info */}
          <div>
            <motion.h3
              id="footer-heading"
              initial={{ opacity: 0, y: -15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-3xl font-bold mb-4 bg-linear-to-r from-[#FFD700] via-[#F6C90E] to-[#EBA937] bg-clip-text text-transparent"
            >
              Vaibhav Dhus Enterprises
            </motion.h3>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              Empowering people through knowledge, motivation, and real-life experiences.  
              Spreading light through words and inspiration.
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick Links">
            <h4 className="text-xl font-semibold text-[#FFD700] mb-5 relative inline-block after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-10 after:h-0.5 after:bg-[#FFD700]">
              Quick Links
            </h4>
            <ul className="space-y-3 mt-4">
              {navLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#FFD700] transition-colors duration-300 text-sm md:text-base"
                    aria-label={`Navigate to ${link.name}`}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Social Media */}
          <div>
            <h4 className="text-xl font-semibold text-[#FFD700] mb-5 relative inline-block after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-10 after:h-0.5 after:bg-[#FFD700]">
              Connect With Me
            </h4>
            <div className="flex flex-col gap-4">
              {/* Instagram */}
              <motion.a
                whileHover={{ scale: 1.05, x: 4 }}
                href="https://www.instagram.com/vaibhavdhusofficial"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow on Instagram"
                className="flex items-center justify-between bg-white/5 px-4 py-3 rounded-lg hover:bg-[#FFD700]/10 transition-all"
              >
                <div className="flex items-center gap-3">
                  <Instagram className="text-[#FFD700]" size={22} />
                  <span className="font-medium">Instagram</span>
                </div>
                <span className="text-xs text-[#FFD700]">500K+</span>
              </motion.a>

              {/* Facebook */}
              <motion.a
                whileHover={{ scale: 1.05, x: 4 }}
                href="https://www.facebook.com/vaibhavdhus/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow on Facebook"
                className="flex items-center justify-between bg-white/5 px-4 py-3 rounded-lg hover:bg-[#FFD700]/10 transition-all"
              >
                <div className="flex items-center gap-3">
                  <Facebook className="text-[#FFD700]" size={22} />
                  <span className="font-medium">Facebook</span>
                </div>
                <span className="text-xs text-[#FFD700]">30K+</span>
              </motion.a>

              {/* YouTube */}
              <motion.a
                whileHover={{ scale: 1.05, x: 4 }}
                href="https://www.youtube.com/@Vaibhavdhus"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Subscribe on YouTube"
                className="flex items-center justify-between bg-white/5 px-4 py-3 rounded-lg hover:bg-[#FFD700]/10 transition-all"
              >
                <div className="flex items-center gap-3">
                  <Youtube className="text-[#FFD700]" size={22} />
                  <span className="font-medium">YouTube</span>
                </div>
                <span className="text-xs text-[#FFD700]">30K+</span>
              </motion.a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto mt-14 border-t border-white/10"
          aria-hidden="true"
        />

        {/* Sub Footer */}
        <div className="relative z-10 text-center mt-6 text-gray-400 text-sm">
          <p>
            © {currentYear}{" "}
            <span className="text-[#FFD700] font-medium">
              Vaibhav Dhus Enterprises
            </span>{" "}
            — All Rights Reserved.
          </p>
          <p className="mt-2 text-xs">
            Designed & Developed with ❤️ by{" "}
            <a
              href="https://omradixsolutions.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFD700] hover:underline"
            >
              Omradix Solutions
            </a>{" "}
            | Contact:{" "}
            <a
              href="mailto:omradixsolutions@gmail.com"
              className="text-[#FFD700] hover:underline"
            >
              omradixsolutions@gmail.com
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
