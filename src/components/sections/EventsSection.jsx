"use client";

import { motion } from "framer-motion";
import AnimatedCard from "@/components/shared/AnimatedCard";

const events = [
  {
    id: 1,
    title: "Journée Portes Ouvertes",
    date: "15 Avril 2024",
    description: "Découvrez nos installations et rencontrez nos étudiants",
  },
  {
    id: 2,
    title: "Conférence Technologique",
    date: "20 Avril 2024",
    description: "Les dernières innovations en technologie",
  },
  {
    id: 3,
    title: "Forum Emploi",
    date: "25 Avril 2024",
    description: "Rencontrez les entreprises qui recrutent",
  },
];

export default function EventsSection() {
  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Événements à Venir
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Ne manquez pas nos prochains événements
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {events.map((event, idx) => (
            <AnimatedCard key={event.id} delay={idx * 0.1}>
              <div className="h-full flex flex-col">
                <span className="text-sm font-semibold text-royal dark:text-royal-light mb-2">
                  {event.date}
                </span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {event.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 flex-grow">
                  {event.description}
                </p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
