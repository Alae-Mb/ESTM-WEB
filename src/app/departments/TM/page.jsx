"use client";

import PageHeader from "@/components/shared/PageHeader";
import { motion } from "framer-motion";

export default function TMDepartmentPage() {
  return (
    <div>
      <PageHeader 
        title="Technologie Mécanique"
        description="Formation en mécanique appliquée et conception mécanique"
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
                La filière Technologie Mécanique forme des professionnels polyvalents capables de concevoir et d'optimiser des systèmes mécaniques.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                Spécialités
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Conception mécanique</li>
                <li>• Mécanique des fluides</li>
                <li>• Fabrication et production</li>
                <li>• Maintenance industrielle</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                Débouchés professionnels
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Les diplômés peuvent travailler comme techniciens en mécanique, ingénieurs de fabrication ou consultants en optimisation des processus.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
