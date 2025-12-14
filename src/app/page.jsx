"use client";

import HomeHero from "@/components/sections/HomeHero";
import DepartmentsGrid from "@/components/sections/DepartmentsGrid";
import EventsSection from "@/components/sections/EventsSection";
import CampusPreview from "@/components/sections/CampusPreview";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="w-full">
      <HomeHero />
      <div className="pt-20 px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Nos Départements
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Explorez nos différents domaines d'études et spécialisations
          </p>
        </motion.div>
        <DepartmentsGrid />
      </div>
      <EventsSection />
      <CampusPreview />
    </div>
  );
}
