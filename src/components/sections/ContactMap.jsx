"use client";

import { motion } from "framer-motion";

export default function ContactMap() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full h-96 bg-gray-300 dark:bg-gray-700 rounded-lg overflow-hidden"
    >
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-400 to-gray-600 dark:from-gray-600 dark:to-gray-800">
        <p className="text-white text-center font-semibold">
          Intégration Google Maps - ESTM Meknès
        </p>
      </div>
    </motion.div>
  );
}
