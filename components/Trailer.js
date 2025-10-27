"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";

const videos = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dxqpqgu8s/video/upload/v1761556534/Video-45_rukhma.mp4",
    title: "नेटृत्व संवाद — प्रेरणादायी विचार",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dxqpqgu8s/video/upload/v1761556434/Video-338_wdylhe.mp4",
    title: "यशाचा प्रवास — युवा प्रेरणा",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dxqpqgu8s/video/upload/v1761556458/Video-469_soimlv.mp4",
    title: "समाजासाठी कार्य — प्रेरक संवाद",
  },
];

export default function LeadershipReels() {
  const videoRefs = useRef([]);
  const [playing, setPlaying] = useState(Array(videos.length).fill(false));

  // ✅ Auto play all videos muted (so thumbnails are visible)
  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (video) {
        video.muted = true;
        video.play().catch(() => {}); // ignore autoplay errors
      }
    });
  }, []);

  const handlePlayPause = (index) => {
    const video = videoRefs.current[index];
    if (!video) return;

    // Pause all others
    videoRefs.current.forEach((v, i) => {
      if (v && i !== index) {
        v.pause();
        v.muted = true;
      }
    });

    if (video.paused) {
      video.muted = false; // unmute selected
      video.play();
      setPlaying((prev) => prev.map((_, i) => i === index));
    } else {
      video.pause();
      video.muted = true;
      setPlaying((prev) => prev.map(() => false));
    }
  };

  return (
    <section
      id="reels"
      className="relative py-20 bg-linear-to-b from-black via-[#0F0C29] to-black text-white overflow-hidden"
    >
      {/* Floating Lights */}
      <motion.div
        animate={{ y: [0, -40, 0], x: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-80 h-80 bg-[#FFD700]/10 blur-[130px] rounded-full"
      />
      <motion.div
        animate={{ y: [0, 40, 0], x: [0, -40, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#EBA937]/20 blur-[150px] rounded-full"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold bg-linear-to-r from-[#FFD700] via-[#F6C90E] to-[#EBA937] bg-clip-text text-transparent"
        >
          नेटृत्व व समाजसंवाद
        </motion.h2>
        <p className="mt-4 text-gray-400 text-lg">
          प्रेरणादायी क्षण — वैभव धुस यांचे समाजसंवाद व नेतृत्व विचार.
        </p>

        {/* Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden shadow-xl hover:shadow-[#FFD700]/30 transition-all duration-500 group"
            >
              {/* Video */}
              <div className="relative h-[470px] sm:h-[520px] overflow-hidden rounded-t-2xl">
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={video.src}
                  className="w-full h-full object-cover"
                  playsInline
                  loop
                  preload="auto"
                  muted
                />
                <motion.button
                  onClick={() => handlePlayPause(index)}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  aria-label="Play or Pause Video"
                  className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  {playing[index] ? (
                    <Pause className="text-[#FFD700]" size={46} />
                  ) : (
                    <Play className="text-[#FFD700]" size={46} />
                  )}
                </motion.button>
              </div>

              {/* Info */}
              <div className="p-6 bg-black/70 backdrop-blur-md rounded-b-2xl">
                <h3 className="text-lg font-semibold text-[#FFD700] mb-2">
                  {video.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  प्रेरणादायी समाजसंवाद आणि नेतृत्वाची झलक.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
