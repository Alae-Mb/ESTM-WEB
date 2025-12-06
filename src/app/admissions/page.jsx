"use client";

import PageHeader from "@/components/shared/PageHeader";
import { motion } from "framer-motion";

export default function AdmissionsPage() {
  const requirements = [
    "Diplôme de Baccalauréat",
    "Dossier académique complet",
    "Test d'admission",
    "Entretien personnel",
  ];

  return (
    <div>
      <PageHeader 
        title="Admissions"
        description="Rejoignez ESTM et lancez votre carrière technologique"
      />

      <section className="py-20 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Conditions d'Admission
            </h2>

            <div className="space-y-4 mb-12">
              {requirements.map((req, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center p-4 bg-blue-50 dark:bg-gray-800 rounded-lg"
                >
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{req}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Procédure de Candidature
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Remplissez notre formulaire de candidature en ligne avec vos informations personnelles et académiques. Vous serez contacté pour les étapes suivantes du processus d'admission.
              </p>
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold">
                Postuler Maintenant
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
