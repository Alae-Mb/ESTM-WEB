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

export default function GIDepartmentPage() {
  return (
    <div className="bg-gray-50 dark:bg-black">
      <PageHeader
        title="Génie Informatique"
        description="Formation complète en développement logiciel et systèmes informatiques"
      />

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid gap-8">
          {/* À propos */}
          <Card title="À propos du programme" icon={BookOpen} border="border-blue-500">
            <p>
              La filière Génie Informatique forme des professionnels capables de concevoir et développer des solutions informatiques innovantes.
            </p>
          </Card>

          {/* Spécialités + Débouchés */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card title="Spécialités" icon={GraduationCap} border="border-emerald-500">
              <ul className="list-disc ml-5 space-y-1">
                <li>Développement web et mobile</li>
                <li>Bases de données</li>
                <li>Intelligence artificielle</li>
                <li>Cybersécurité</li>
              </ul>
            </Card>

            <Card title="Débouchés professionnels" icon={Briefcase} border="border-purple-500">
              <p>
                Les diplômés peuvent exercer en tant que développeurs, architectes logiciels, consultants IT ou créer leurs propres startups technologiques.
              </p>
            </Card>
          </div>

          {/* Diplômes */}
          <Card title="Filières & Diplômes" icon={GraduationCap} border="border-orange-500">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">DUT</h4>
                <ul className="list-disc ml-5">
                  <li>Génie Informatique</li>
                  <li>Intelligence Artificielle et Technologies Emergentes</li>
                  <li>Développement Web et Multimédia (DWM)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Licence Professionnelle</h4>
                <ul className="list-disc ml-5">
                  <li>Développement des Systèmes d'Information et des Communication</li>
                  <li>Intelligence Artificielle et Sciences de Données (IASciD)</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Équipe */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card title="Chef de département" icon={Users} border="border-sky-500">
              <p className="font-medium">Pr. Nabil MRANI</p>
              <p className="text-sm">Responsable du département GI</p>
            </Card>

            <Card title="Équipe de recherche" icon={Users} border="border-pink-500">
              <p>Équipe : Ingénierie des Systèmes d'Information & de Communication (ISIC)</p>
              <p className="text-sm">Responsable : Pr. Abdallah RHATTOY</p>
            </Card>
          </div>

          {/* Enseignants */}
          <Card title="Liste des enseignants" icon={Users} border="border-indigo-500">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[{
                name: "Abdallah RHATTOY",
                img: "/images/teachers/image.png",
              },{
                name: "Mohamed LAHMER",
                img: "/images/teachers/image.png",
              },{
                name: "Abderrahim El Qadi",
                img: "/images/teachers/image.png",
              },{
                name: "Youssef GHANOU",
                img: "/images/teachers/image.png",
              },{
                name: "EL OUAZZANI Rajae",
                img: "/images/teachers/image.png",
              },{
                name: "CHANA Idriss",
                img: "/images/teachers/image.png",
              },{
                name: "BARRADA Mohammed",
                img: "/images/teachers/image.png",
              },{
                name: "BENAMAR Mariya",
                img: "/images/teachers/image.png",
              },{
                name: "MRANI Nabil",
                img: "/images/teachers/image.png",
              },{
                name: "BENAMAR Nabil",
                img: "/images/teachers/image.png",
              },{
                name: "NASIRI Samia",
                img: "/images/teachers/image.png",
              },{
                name: "MENAOUI Rachid",
                img: "/images/teachers/image.png",
              },{
                name: "BEN-HDECH Adil",
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
