"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";
import { ShoppingBag } from "lucide-react";

const books = [
  {
    id: 1,
    img: "/books/b1.jpg",
    slogan: "Transform Your Thinking, Empower Your Future.",
  },
  {
    id: 2,
    img: "/books/b2.jpg",
    slogan: "Every Page Sparks a New Vision.",
  },
  {
    id: 3,
    img: "/books/b3.jpg",
    slogan: "The Art of Business Wisdom, Redefined.",
  },
  {
    id: 4,
    img: "/books/b4.jpg",
    slogan: "Where Knowledge Meets Real-World Success.",
  },
  {
    id: 5,
    img: "/books/b5.jpeg",
    slogan: "Stories of Growth, Grit, and Greatness.",
  },
  {
    id: 6,
    img: "/books/b6.jpeg",
    slogan: "Think Different. Lead Different. Live Different.",
  },
];

export default function Books() {
  const orderLink =
    "https://vaibhavdhus.com/order/index.php?sku=marathi-part-1";

  return (
    <>
      {/* --- SEO Metadata --- */}
      <Head>
        <title>Books by Vaibhav Dhus | Marathi Author & Motivational Speaker</title>
        <meta
          name="description"
          content="Explore inspiring Marathi books by Vaibhav Dhus — The Real Chanakya of Modern Business Era. Transform your thinking, empower your future, and lead with wisdom."
        />
        <meta
          name="keywords"
          content="Vaibhav Dhus books, Marathi author, motivational speaker, Antah Aasti Prarambh, business books, leadership, success, Marathi literature"
        />
        <meta property="og:title" content="Books by Vaibhav Dhus" />
        <meta
          property="og:description"
          content="Read the bestselling Marathi books by Vaibhav Dhus — transforming lives with leadership, wisdom, and motivation."
        />
        <meta property="og:image" content="/books/b1.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vaibhavdhus.com/#book" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Books by Vaibhav Dhus" />
        <meta
          name="twitter:description"
          content="Explore Marathi motivational books by Vaibhav Dhus and discover modern Chanakya wisdom for success."
        />
        <meta name="twitter:image" content="/books/b1.jpg" />
      </Head>

      {/* --- Structured Data (JSON-LD for Books) --- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Books by Vaibhav Dhus",
            author: {
              "@type": "Person",
              name: "Vaibhav Dhus",
            },
            itemListElement: books.map((book, i) => ({
              "@type": "Book",
              position: i + 1,
              name: book.slogan,
              author: "Vaibhav Dhus",
              image: `https://vaibhavdhus.com${book.img}`,
              offers: {
                "@type": "Offer",
                url: orderLink,
                priceCurrency: "INR",
                availability: "https://schema.org/InStock",
              },
            })),
          }),
        }}
      />

      {/* --- Books Section --- */}
      <section
        id="book"
        className="relative w-full py-16 md:py-24 bg-[#0F0C29] text-white overflow-hidden"
      >
        {/* Background Gradient */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-linear-to-b from-[#1A173B]/95 via-[#0F0C29]/95 to-[#0B0823]"
        />

        {/* Floating Glows */}
        <motion.div
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -top-40 -left-40 w-72 h-72 bg-[#FFD700]/10 blur-[150px] rounded-full"
        />
        <motion.div
          animate={{ y: [0, 40, 0], x: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-0 right-0 w-80 h-80 bg-[#EBA937]/10 blur-[150px] rounded-full"
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <header>
            <motion.h2
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-extrabold mb-6 bg-linear-to-r from-[#FFD700] via-[#F6C90E] to-[#EBA937] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,215,0,0.6)]"
            >
              Books by Vaibhav Dhus
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-gray-300 mb-10 text-lg"
            >
              Explore motivational and business-focused Marathi books authored
              by <span className="text-[#FFD700] font-semibold">Vaibhav Dhus</span> — 
              crafted to ignite leadership and wisdom.
            </motion.p>
          </header>

          {/* Books Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {books.map((book, index) => (
              <motion.article
                key={book.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-lg overflow-hidden transition-transform duration-500 hover:scale-[1.05] hover:border-[#FFD700]/40"
              >
                {/* Book Image */}
                <figure className="relative w-full h-80">
                  <Image
                    src={book.img}
                    alt={`Book by Vaibhav Dhus – ${book.slogan}`}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0F0C29]/70 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                </figure>

                {/* Book Info */}
                <div className="p-4 flex flex-col items-center text-center space-y-3">
                  <p className="text-base italic text-gray-200 leading-relaxed">
                    “{book.slogan}”
                  </p>

                  <motion.a
                    href={orderLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 bg-linear-to-r from-[#FFD700] via-[#F6C90E] to-[#EBA937] text-black font-bold px-5 py-2 rounded-full shadow-lg shadow-[#FFD700]/30 hover:shadow-[#FFD700]/50 transition-all duration-300"
                  >
                    <ShoppingBag size={18} />
                    Order Now
                  </motion.a>
                </div>
              </motion.article>
            ))}
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
    </>
  );
}
