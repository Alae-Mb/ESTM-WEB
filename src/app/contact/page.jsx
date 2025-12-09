"use client";

import PageHeader from "@/components/shared/PageHeader";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const contactInfo = [
    {
      icon: MapPin,
      label: "Adresse",
      value: "ESTM, Meknès, Maroc",
    },
    {
      icon: Phone,
      label: "Téléphone",
      value: "+212 5XX XXX XXX",
    },
    {
      icon: Mail,
      label: "Email",
      value: "contact@estm.ac.ma",
    },
  ];

  return (
    <div>
      <PageHeader 
        title="Contact"
        description="Nous serions ravis de vous entendre"
      />

      <section className="py-20 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Informations de Contact
              </h2>

              <div className="space-y-6">
                {contactInfo.map((info, idx) => {
                  const Icon = info.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-12 h-12 bg-[#eaf2ff] dark:bg-[#072033] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-royal dark:text-royal-light" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          {info.label}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          {info.value}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                    Nom
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-royal"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-royal"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-royal"
                    placeholder="Votre message"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-royal text-white rounded-lg hover:bg-primary-dark transition font-semibold"
                >
                  Envoyer
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
