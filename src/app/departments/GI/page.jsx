"use client";

import PageHeader from "@/components/shared/PageHeader";
import { motion } from "framer-motion";

export default function GIDepartmentPage() {
  return (
    <div>
      <PageHeader 
        title="Génie Informatique"
        description="Formation complète en développement logiciel et systèmes informatiques"
      />

      <section className="py-20 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="prose dark:prose-invert max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                À propos du programme
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-4">
                La filière Génie Informatique forme des professionnels capables de concevoir et développer des solutions informatiques innovantes.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                Spécialités
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Développement web et mobile</li>
                <li>• Bases de données</li>
                <li>• Intelligence artificielle</li>
                <li>• Cybersécurité</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                Débouchés professionnels
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Les diplômés peuvent exercer en tant que développeurs, architectes logiciels, consultants IT ou créer leurs propres startups technologiques.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
