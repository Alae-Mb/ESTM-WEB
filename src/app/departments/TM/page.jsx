"use client";

import PageHeader from "@/components/shared/PageHeader";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Users, BookOpen } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true },
};

function Card({ title, icon: Icon, border, children }) {
  return (
    <motion.div
      {...fadeUp}
      className={`relative rounded-2xl bg-white dark:bg-gray-900 shadow-sm border-l-4 ${border} p-6`}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="rounded-xl p-2 bg-gray-100 dark:bg-gray-800">
          <Icon className="w-5 h-5" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
      </div>
      <div className="text-gray-600 dark:text-gray-300 space-y-2">{children}</div>
    </motion.div>
  );
}

export default function TMDepartmentPage() {
  return (
    <div className="bg-gray-50 dark:bg-black">
      <PageHeader
        title="Techniques de management"
        description="Formation en techniques de gestion et administration d'entreprises"
      />

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid gap-8">
          {/* À propos */}
          <Card title="À propos du programme" icon={BookOpen} border="border-blue-500">
            <p>
              La filière Techniques de Management forme des professionnels capables de gérer et administrer des entreprises avec efficacité et stratégie.
            </p>
          </Card>

          {/* Spécialités + Débouchés */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card title="Spécialités" icon={GraduationCap} border="border-emerald-500">
              <ul className="list-disc ml-5 space-y-1">
                <li>Gestion d'entreprise</li>
                <li>Comptabilité et finance</li>
                <li>Ressources humaines</li>
                <li>Stratégie d'entreprise</li>
              </ul>
            </Card>

            <Card title="Débouchés professionnels" icon={Briefcase} border="border-purple-500">
              <p>
                Les diplômés peuvent travailler comme gestionnaires d'entreprises, comptables, responsables RH ou consultants en management.
              </p>
            </Card>
          </div>

          {/* Diplômes */}
          <Card title="Filières & Diplômes" icon={GraduationCap} border="border-orange-500">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">DUT</h4>
                <ul className="list-disc ml-5">
                  <li>Techniques de Management</li>
                  <li>Finance, Banque et Assurance</li>
                  <li>Gestion des ressources humaines</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Licence Professionnelle</h4>
                <ul className="list-disc ml-5">
                  <li>Management Stratégique des Organisations</li>
                  <li>Commerce : Métiers de la Finance et de la Finance Internationale</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Équipe */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card title="Chef de département" icon={Users} border="border-sky-500">
              <p className="font-medium">Prof. Abdelouahed EL QOURI</p>
              <p className="text-sm">Responsable du département TM</p>
            </Card>

            <Card title="Équipes de recherche" icon={Users} border="border-pink-500">
              <ul className="space-y-1">
                <li>• La Communication et les Petites et Moyennes Organisations (CPME) - Pr. Hamid DAMOUM</li>
                <li>• Econométrie, Finance, Développement Economique et Social (EFDES) - Pr. Mohamed EL JIM</li>
                <li>• Matériaux Avancés & Systèmes Energétiques (MASEN) - Khalid SBAI</li>
                <li>• Economie, Gestion et Société (EGS) - Pr. Fatiha REGRAGUI</li>
                <li>• Collectivités Locales, Entreprise, Environnement et Développement (CLEED) - Pr. Sellam MAGHNOUJ</li>
              </ul>
            </Card>
          </div>

          {/* Enseignants */}
          <Card title="Liste des enseignants" icon={Users} border="border-indigo-500">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[{
                name: "MAGHNOUJ Sellam",
                img: "/images/teachers/image.png",
              },{
                name: "REGRAGUI Fatiha",
                img: "/images/teachers/image.png",
              },{
                name: "QACH Nour-eddine",
                img: "/images/teachers/image.png",
              },{
                name: "EL JIM Mohamed",
                img: "/images/teachers/image.png",
              },{
                name: "ABOUHASSANI El Mostafa",
                img: "/images/teachers/image.png",
              },{
                name: "DAMOUM Hamid",
                img: "/images/teachers/image.png",
              },{
                name: "ABOUAHMED Khalid",
                img: "/images/teachers/image.png",
              },{
                name: "OUAOUICHA Hassan",
                img: "/images/teachers/image.png",
              },{
                name: "MARCHOUD Nouredine",
                img: "/images/teachers/image.png",
              },{
                name: "ZEROUAL Safia",
                img: "/images/teachers/image.png",
              },{
                name: "BENAZZI Latifa",
                img: "/images/teachers/image.png",
              },{
                name: "EL HARAMI Mohamed",
                img: "/images/teachers/image.png",
              },{
                name: "ICHOU Radia",
                img: "/images/teachers/image.png",
              },{
                name: "ALLALI Khadija",
                img: "/images/teachers/image.png",
              }].map((t) => (
                <div
                  key={t.name}
                  className="flex items-center gap-4 p-3 rounded-xl bg-gray-100 dark:bg-gray-800"
                >
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border"
                  />
                  <span className="text-sm font-medium">Prof. {t.name}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
