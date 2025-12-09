"use client";

import PageHeader from "@/components/shared/PageHeader";
import { motion } from "framer-motion";
import AnimatedCard from "@/components/shared/AnimatedCard";

export default function TeachersPage() {
  const teachers = [
    {
      id: 1,
      name: "Dr. Mohamed Ali",
      specialty: "Génie Électrique",
    },
    {
      id: 2,
      name: "Prof. Fatima Zahra",
      specialty: "Génie Informatique",
    },
    {
      id: 3,
      name: "Dr. Hassan Belkadi",
      specialty: "Chimie Appliquée",
    },
    {
      id: 4,
      name: "Prof. Laila Bennani",
      specialty: "Mécanique",
    },
  ];

  return (
    <div>
      <PageHeader 
        title="Nos Enseignants"
        description="Une équipe d'experts dédiés à votre réussite"
      />

      <section className="py-20 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Nos professeurs sont des experts du domaine avec une expérience industrielle reconnue
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teachers.map((teacher, idx) => (
              <AnimatedCard key={teacher.id} delay={idx * 0.1}>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#2563EB] to-[#0A2540] rounded-full mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {teacher.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    {teacher.specialty}
                  </p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
