"use client";

import { motion } from "framer-motion";
import AnimatedCard from "@/components/shared/AnimatedCard";
import Link from "next/link";

const departments = [
  {
    id: "GE",
    name: "Génie Électrique",
    description: "Formation en systèmes électriques et électroniques",
    href: "/departments/GE",
  },
  {
    id: "GI",
    name: "Génie Informatique",
    description: "Développement logiciel et systèmes informatiques",
    href: "/departments/GI",
  },
  {
    id: "TCC",
    name: "Technologie en Chimie Chimique",
    description: "Procédés chimiques et applications industrielles",
    href: "/departments/TCC",
  },
  {
    id: "TM",
    name: "Technologie Mécanique",
    description: "Mécanique appliquée et conception mécanique",
    href: "/departments/TM",
  },
];

export default function DepartmentsGrid() {
  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Nos Filières
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Explorez nos différents domaines d'études et spécialisations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {departments.map((dept, idx) => (
            <Link key={dept.id} href={dept.href}>
              <AnimatedCard delay={idx * 0.1}>
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {dept.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {dept.description}
                    </p>
                  </div>
                  <div className="mt-4 text-blue-600 dark:text-blue-400 font-semibold">
                    En savoir plus →
                  </div>
                </div>
              </AnimatedCard>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
