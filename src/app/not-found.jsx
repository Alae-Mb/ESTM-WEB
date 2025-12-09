"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-site dark:bg-gray-900 pt-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center px-6"
      >
        <div className="text-8xl font-bold text-royal dark:text-royal-light mb-4">
          404
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Page Non Trouvée
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
          Oups! La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-royal text-white rounded-lg hover:bg-primary-dark transition font-semibold"
        >
          Retour à l'Accueil
        </Link>
      </motion.div>
    </div>
  );
}
