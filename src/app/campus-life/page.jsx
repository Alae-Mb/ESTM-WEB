"use client";

import PageHeader from "@/components/shared/PageHeader";
import { motion } from "framer-motion";
import AnimatedCard from "@/components/shared/AnimatedCard";
import Link from "next/link";

export default function CampusLifePage() {
  const activities = [
    {
      title: "Association étudiante",
      description:
        "Contibuez aux Bureaux des Étudiants (BDE), clubs sportifs, artistiques (théâtre, musique) de l'ESTM",
      image: "/images/campus-life/Association.jpg",
      href: "/campus-life/association",
    },
    {
      title: "Événements et Activités",
      description:
        "Jetez un coup d'œil à tout ce qui concerne les semaines d'intégration, festivals, concerts, compétitions, voyages, conférences",
      image: "/images/campus-life/Events.jpg",
      href: "/campus-life/evenements",
    },
    {
      title: "Bibliothèque Moderne",
      description: "Accès à une collection complète de ressources académiques",
      image: "/images/campus-life/Biblio.jpg",
      href: "/campus-life/biblio",
    },
    {
      title: "Services et Accompagnement",
      description:
        "Accès au sport (Pass'Sport), soutien social et sanitaire, aide à l'orientation",
      image: "/images/campus-life/SA.jpg",
      href: "/campus-life/sa",
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
                  <Link href={activity.href}>
                    <div className="flex flex-col justify-between h-full">
                      <div className="w-full h-40 overflow-hidden mb-3 rounded-xl">
                        <img
                          src={activity.image}
                          alt={activity.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        {activity.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {activity.description}
                      </p>
                      <div className="mt-4 text-royal dark:text-royal-light font-semibold">
                        En savoir plus →
                      </div>
                    </div>
                  </Link>
                </AnimatedCard>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
