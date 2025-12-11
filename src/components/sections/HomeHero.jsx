"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HomeHero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "https://a.top4top.io/p_3624jc0rr1.jpeg",
    "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1200",
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1920&q=80",
    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1920&q=80",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={images[currentImageIndex]}
              alt={`Campus ESTM ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/30 to-yellow-400/30"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? "bg-white w-8"
                : "bg-white/50 w-2 hover:bg-white/75"
            }`}
            aria-label={`Image ${index + 1}`}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl"
        >
          Bienvenue à ESTM Meknès
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-50 mb-8 max-w-2xl mx-auto drop-shadow-lg"
        >
          École Supérieure de Technologie de Meknès - Excellence en formation
          technologique
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <a
            href="/admissions"
            className="px-8 py-3 bg-royal text-white rounded-lg hover:bg-primary-dark transition font-semibold"
          >
            Candidatures
          </a>
          <a
            href="/departments"
            className="px-8 py-3 bg-white/95 backdrop-blur-sm text-gray-900 rounded-lg hover:bg-white transition-all font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 duration-300"
          >
            Découvrir nos filières
          </a>
        </motion.div>
      </div>
    </section>
  );
}
