"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function CampusPreview() {
  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="aspect-video rounded-lg overflow-hidden">
              <Image
                src="/images/hero/est-meknes-campus.jpeg"
                alt="Campus ESTM Meknès"
                width={1200}
                height={675}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Découvrez Notre Campus
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-4">
              ESTM Meknès dispose d'installations modernes et de ressources de pointe pour offrir une formation d'excellence.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
              Notre campus accueille des étudiants passionnés et des professeurs expérimentés engagés dans l'innovation technologique.
            </p>
            <Link
              href="/campus-life"
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
            >
              Explore la vie sur le campus
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
