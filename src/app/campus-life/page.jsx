"use client";

import PageHeader from "@/components/shared/PageHeader";
import { motion } from "framer-motion";
import AnimatedCard from "@/components/shared/AnimatedCard";

export default function CampusLifePage() {
  const activities = [
    {
      title: "Clubs Étudiants",
      description: "Rejoignez des nombreux clubs technologiques et culturels fait par les etudiants de l'ESTM!",
    },
    {
      title: "Événements Sportifs",
      description: "Participez aux compétitions interuniversitaires",
    },
    {
      title: "Bibliothèque Moderne",
      description: "Accès à une collection complète de ressources académiques",
    },
    {
      title: "Cafétéria",
      description: "Espaces de détente et de restauration confortables",
    },
  ];

  return (
    <div>
      <PageHeader 
        title="Vie sur le Campus"
        description="Explorez l'expérience étudiant à ESTM"
      />

      <section className="py-20 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Activités et Installations
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {activities.map((activity, idx) => (
                <AnimatedCard key={idx} delay={idx * 0.1}>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {activity.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {activity.description}
                  </p>
                </AnimatedCard>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
