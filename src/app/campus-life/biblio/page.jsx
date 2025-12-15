"use client";

import PageHeader from "@/components/shared/PageHeader";
import { motion } from "framer-motion";

export default function BiblioPage() {
  return (
    <div>
      <PageHeader
        title="Bibliothèque Moderne"
        description="Un espace de travail et de ressources pour réussir"
      />

      <section className="py-20 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="/images/campus-life/Biblio.jpg"
              alt="Bibliothèque"
              className="w-full h-80 object-cover object-[50%_30%] rounded-2xl mb-10"
            />

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Un environnement propice à l'étude
            </h2>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              La bibliothèque de l'ESTM met à disposition des étudiants une
              large collection de livres, supports numériques et espaces calmes
              pour favoriser la concentration, la recherche et le travail en
              groupe.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
