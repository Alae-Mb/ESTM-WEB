"use client";

import { motion } from "framer-motion";

export default function PageHeader({ title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
<<<<<<< HEAD
      className="text-center py-12 bg-site dark:bg-gray-900 mt-24"
=======
      className="text-center py-12 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 "
>>>>>>> 5914b3e39434db9e047c45aa1ad5e8f51ec81411
    >
      <h1 className=" mt-24 text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        {title}
      </h1>
      {description && (
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
}
