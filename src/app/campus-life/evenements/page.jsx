"use client";

import PageHeader from "@/components/shared/PageHeader";
import { motion } from "framer-motion";

export default function EvenementsPage() {
  return (
    <div>
      <PageHeader
        title="Événements & Activités"
        description="Vivez pleinement l'expérience étudiante à l'ESTM"
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
              src="/images/campus-life/Events.jpg"
              alt="Événements"
              className="w-full h-80 object-cover rounded-2xl mb-10"
            />

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Des moments inoubliables
            </h2>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              L'ESTM organise régulièrement des événements tels que des semaines
              d'intégration, conférences, compétitions sportives, festivals et
              sorties éducatives afin de renforcer la cohésion et l'esprit
              universitaire.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
