"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navLinks = [
    { name: "मुखपृष्ठ", href: "#home" },
    { name: "आपणाबद्दल", href: "#about" },
    { name: "पुस्तक", href: "#book" },
    { name: "पुरस्कार", href: "#awards" },
    { name: "संपर्क", href: "#contact" },
  ];

  // Hide navbar on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full bg-[#FFF8EE]/80 backdrop-blur-lg border-b border-[#EBA937]/20 z-1000 shadow-md"
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* --- Marathi Logo Title --- */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col leading-tight select-none"
        >
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#EBA937] tracking-widest font-serif drop-shadow-sm">
            अंतः अस्ति प्रारंभः
          </h1>
          <p className="text-[12px] md:text-sm text-[#2D2A6E] -mt-1 font-medium tracking-wide">
            The End is the Beginning
          </p>
        </motion.div>

        {/* --- Desktop Menu --- */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative text-[#2D2A6E] font-medium text-lg hover:text-[#EBA937] transition-colors duration-300"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#EBA937] transition-all duration-300 hover:w-full"></span>
            </motion.a>
          ))}

          {/* --- Buy Now Button --- */}
          <motion.a
            href="https://vaibhavdhus.com/order/index.php?sku=marathi-part-1"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="bg-linear-to-r from-[#EBA937] to-[#2D2A6E] text-white px-5 py-2 rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300"
          >
            आता खरेदी करा
          </motion.a>
        </div>

        {/* --- Mobile Hamburger --- */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#2D2A6E] focus:outline-none transition-transform z-1100"
        >
          <motion.div
            initial={false}
            animate={{ rotate: menuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.div>
        </button>
      </div>

      {/* --- Mobile Fullscreen Menu --- */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 left-0 w-full h-screen bg-[#FFF8EE]/95 backdrop-blur-md flex flex-col items-center justify-center space-y-8 z-1050"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="text-2xl font-semibold text-[#2D2A6E] hover:text-[#EBA937] transition-all duration-300"
              >
                {link.name}
              </motion.a>
            ))}

            {/* --- Mobile Buy Now Button --- */}
            <motion.a
              href="https://vaibhavdhus.com/order/index.php?sku=marathi-part-1"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="bg-linear-to-r from-[#EBA937] to-[#2D2A6E] text-white text-lg px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-xl transition-all duration-300"
            >
              आता खरेदी करा
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
