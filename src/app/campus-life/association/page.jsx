"use client";

import PageHeader from "@/components/shared/PageHeader";
import { motion } from "framer-motion";

export default function AssociationPage() {
  return (
    <div>
      <PageHeader
        title="Association Étudiante"
        description="Engagez-vous dans la vie associative et développez vos compétences"
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
              src="/images/campus-life/Association.jpg"
              alt="Association étudiante"
              className="w-full h-80 object-cover rounded-2xl mb-10"
            />

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Une vie associative dynamique
            </h2>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Les associations étudiantes de l'ESTM jouent un rôle essentiel
              dans la vie du campus. Elles permettent aux étudiants de
              s'impliquer dans des activités sportives, culturelles et
              artistiques tout en développant l'esprit d'équipe, le leadership
              et la responsabilité.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
