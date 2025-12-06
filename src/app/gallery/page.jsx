"use client";

import PageHeader from "@/components/shared/PageHeader";
import { motion } from "framer-motion";

export default function GalleryPage() {
  const images = [
    { id: 1, category: "Campus" },
    { id: 2, category: "Événements" },
    { id: 3, category: "Laboratoires" },
    { id: 4, category: "Étudiants" },
    { id: 5, category: "Salles de classe" },
    { id: 6, category: "Installations" },
  ];

  return (
    <div>
      <PageHeader 
        title="Galerie"
        description="Découvrez les moments clés de la vie à ESTM"
      />

      <section className="py-20 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((image, idx) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="aspect-square bg-gradient-to-br from-blue-300 to-blue-500 dark:from-gray-700 dark:to-gray-600 rounded-lg flex items-center justify-center cursor-pointer hover:shadow-lg transition-shadow"
                >
                  <p className="text-white font-semibold text-lg">
                    {image.category}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
