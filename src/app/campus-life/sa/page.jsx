"use client";

import PageHeader from "@/components/shared/PageHeader";
import { motion } from "framer-motion";

export default function SAPage() {
  return (
    <div>
      <PageHeader
        title="Services & Accompagnement"
        description="Un soutien complet pour votre réussite académique et personnelle"
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
              src="/images/campus-life/SA.jpg"
              alt="Services étudiants"
              className="w-full h-80 object-cover object-[50%_30%] rounded-2xl mb-10"
            />

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Un accompagnement personnalisé
            </h2>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              L'ESTM propose divers services pour accompagner les étudiants :
              sport universitaire, soutien social et sanitaire, orientation
              académique et accompagnement professionnel tout au long du
              parcours.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
