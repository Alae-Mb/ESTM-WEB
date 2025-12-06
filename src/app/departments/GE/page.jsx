"use client";

import PageHeader from "@/components/shared/PageHeader";
import { motion } from "framer-motion";

export default function GEDepartmentPage() {
  return (
    <div>
      <PageHeader 
        title="Génie Électrique"
        description="Formation avancée en systèmes électriques et électroniques"
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
                La filière Génie Électrique prépare les étudiants aux défis technologiques du secteur énergétique et électronique.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                Spécialités
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Électrotechnique et électromécanique</li>
                <li>• Automatisme et contrôle industriel</li>
                <li>• Énergie renouvelable</li>
                <li>• Systèmes embarqués</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                Débouchés professionnels
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Les diplômés peuvent travailler comme ingénieurs électriques, techniciens spécialisés, ou en recherche et développement dans des secteurs variés.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
