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

export default function GEDepartmentPage() {
  return (
    <div className="bg-gray-50 dark:bg-black">
      <PageHeader
        title="Génie Électrique"
        description="Formation avancée en systèmes électriques et électroniques"
      />

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid gap-8">
          {/* À propos */}
          <Card title="À propos du programme" icon={BookOpen} border="border-blue-500">
            <p>
              La filière Génie Électrique prépare les étudiants aux défis technologiques du secteur énergétique et électronique.
            </p>
          </Card>

          {/* Spécialités + Débouchés */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card title="Spécialités" icon={GraduationCap} border="border-emerald-500">
              <ul className="list-disc ml-5 space-y-1">
                <li>Électrotechnique et électromécanique</li>
                <li>Automatisme et contrôle industriel</li>
                <li>Énergie renouvelable</li>
                <li>Systèmes embarqués</li>
              </ul>
            </Card>

            <Card title="Débouchés professionnels" icon={Briefcase} border="border-purple-500">
              <p>
                Les diplômés peuvent travailler comme ingénieurs électriques, techniciens spécialisés, ou en recherche et développement dans des secteurs variés.
              </p>
            </Card>
          </div>

          {/* Diplômes */}
          <Card title="Filières & Diplômes" icon={GraduationCap} border="border-orange-500">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">DUT</h4>
                <ul className="list-disc ml-5">
                  <li>Génie Electrique</li>
                  <li>Génie Thermique et Energetique</li>
                  <li>Génie Industriel et Maintenance</li>
                  <li>Génie Civil</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Licence Professionnelle</h4>
                <ul className="list-disc ml-5">
                  <li>Energies Renouvelables et Efficacité Enerétique</li>
                  <li>Ingénierie électrique</li>
                  <li>Electronique des Systèmes Embarqués</li>
                  <li>Génie Civil - Bâtiments et Travaux Publics</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Équipe */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card title="Chef de département" icon={Users} border="border-sky-500">
              <p className="font-medium">Prof. Seddik BRI</p>
              <p className="text-sm">Responsable du département GE</p>
            </Card>

            <Card title="Équipes de recherche" icon={Users} border="border-pink-500">
              <ul className="space-y-1">
                <li>• Commande des Systèmes et Traitement de l'Information (CSTI) - El Hassan SBAI</li>
                <li>• Matériaux et Instrumentation (MIN) - Lahcen BEJJIT</li>
                <li>• Matériaux Avancés & Systèmes Energétiques (MASEN) - Khalid SBAI</li>
                <li>• Matériaux, Environnement & Modélisation (MEM) - Pr. Mohammed BOUACHRINE</li>
                <li>• Modélisation, Commande des systèmes et Télécommunications (MCST) - Abdeslam LACHHAB</li>
              </ul>
            </Card>
          </div>

          {/* Enseignants */}
          <Card title="Liste des enseignants" icon={Users} border="border-indigo-500">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[{
                name: "RAHMOUNE Miloud",
                img: "/images/teachers/image.png",
              },{
                name: "BOUACHRINE Mohammed",
                img: "/images/teachers/image.png",
              },{
                name: "SBAI El Hassan",
                img: "/images/teachers/image.png",
              },{
                name: "NAKHELI Abdelrhani",
                img: "/images/teachers/image.png",
              },{
                name: "BEJJIT Lahcen",
                img: "/images/teachers/image.png",
              },{
                name: "BRI Seddik",
                img: "/images/teachers/image.png",
              },{
                name: "SBAI Khalid",
                img: "/images/teachers/image.png",
              },{
                name: "LACHHAB Abdeslam",
                img: "/images/teachers/image.png",
              },{
                name: "BOUAZI Aziz",
                img: "/images/teachers/image.png",
              },{
                name: "MARHRAOUI HSAINI Abdallah",
                img: "/images/teachers/image.png",
              },{
                name: "ED-DAHHAK Abdelali",
                img: "/images/teachers/image.png",
              },{
                name: "SAADANI Rachid",
                img: "/images/teachers/image.png",
              },{
                name: "AGOUNOUN Rachid",
                img: "/images/teachers/image.png",
              },{
                name: "OUNEJJAR Youssef",
                img: "/images/teachers/image.png",
              },{
                name: "TALIDI Abdellah",
                img: "/images/teachers/image.png",
              },{
                name: "EL MALKI Zakaria",
                img: "/images/teachers/image.png",
              },{
                name: "EL BENKHIRA El Hassan",
                img: "/images/teachers/image.png",
              },{
                name: "BENYASSI Mohamed",
                img: "/images/teachers/image.png",
              },{
                name: "GUERBAOUI Mohammed",
                img: "/images/teachers/image.png",
              },{
                name: "EL BAHI Mohammed",
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
