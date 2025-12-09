"use client";

import PageHeader from "@/components/shared/PageHeader";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import OSMMap from "@/components/OSMMap.jsx";
import { div } from "framer-motion/client";

export default function ContactPage() {
  const contactInfo = [
    {
      icon: MapPin,
      label: "Adresse",
      value: "Rue d'Agouray, P1, Meknes 50040, Maroc",
    },
    {
      icon: Phone,
      label: "Téléphone",
      value: "+212 5 35 46 70 85",
    },
    {
      icon: Mail,
      label: "Email",
      value: "estm@est-umi.ac.ma",
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
          {/* Contact Info Cards - Top Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.15, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="group bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-850 p-8 border border-blue-100 dark:border-gray-700 "
                >
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-5">
                    <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400 " />
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">
                    {info.label}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-base">
                    {info.value}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Map */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-850 p-8 border border-blue-100 dark:border-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <MapPin className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  Notre Campus
                </h2>

                {/* Your OSMMap component goes here */}
                <div className="w-full h-[400px] overflow-hidden border-4 border-blue-100 dark:border-gray-700">
                  <OSMMap
                    center={[33.85748689685745, -5.580037419208394]}
                    zoom={16}
                  />
                </div>
              </div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-850 p-8 border border-blue-100 dark:border-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                  <Mail className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  Envoyez-nous un message
                </h2>

                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-3 text-sm uppercase tracking-wide">
                      Nom Complet
                    </label>
                    <input
                      type="text"
                      className="w-full px-5 py-4 border-2 border-gray-300 dark:border-gray-600  bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-900 transition-all duration-300"
                      placeholder="Entrez votre nom"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-3 text-sm uppercase tracking-wide">
                      Adresse Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-5 py-4 border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-900 transition-all duration-300"
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-3 text-sm uppercase tracking-wide">
                      Votre Message
                    </label>
                    <textarea
                      rows={6}
                      className="w-full px-5 py-4 border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-900 transition-all duration-300 resize-none"
                      placeholder="Écrivez votre message ici..."
                    />
                  </div>

                  <button
                    type="button"
                    className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-lg transform hover:scale-[1.005] active:scale-[0.5] transition-all duration-300"
                  >
                    Envoyer le Message
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
