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

export default function TCCDepartmentPage() {
  return (
    <div className="bg-gray-50 dark:bg-black">
      <PageHeader
        title="Techniques de Commercialisation et de Communication"
        description="Formation moderne en marketing, communication et stratégie commerciale"
      />

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid gap-8">
          {/* À propos */}
          <Card title="À propos du programme" icon={BookOpen} border="border-blue-500">
            <p>
              La filière Techniques de Commercialisation et de Communication (TCC)
              forme des professionnels capables de concevoir, piloter et analyser
              des stratégies marketing et de communication adaptées au marché.
            </p>
          </Card>

          {/* Spécialités + Débouchés */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card title="Spécialités" icon={GraduationCap} border="border-emerald-500">
              <ul className="list-disc ml-5 space-y-1">
                <li>Marketing et stratégie commerciale</li>
                <li>Communication d'entreprise</li>
                <li>Gestion des ventes</li>
                <li>Relations publiques</li>
              </ul>
            </Card>

            <Card title="Débouchés professionnels" icon={Briefcase} border="border-purple-500">
              <p>
                Responsable marketing, chargé(e) de communication, commercial,
                consultant en stratégie d'entreprise ou chef de projet.
              </p>
            </Card>
          </div>

          {/* Diplômes */}
          <Card title="Filières & Diplômes" icon={GraduationCap} border="border-orange-500">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">DUT</h4>
                <ul className="list-disc ml-5">
                  <li>Techniques de Commercialisation et de Communication</li>
                  <li>Commercialisation des Produits Agroalimentaires</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Licence Professionnelle</h4>
                <ul className="list-disc ml-5">
                  <li>Marketing des Services et Management des Points de Vente</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Équipe */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card title="Chef de département" icon={Users} border="border-sky-500">
              <p className="font-medium">Prof. LAHLOU Loubna</p>
              <p className="text-sm">Responsable du département TCC</p>
            </Card>

            <Card title="Équipe de recherche" icon={Users} border="border-pink-500">
              <p>Équipe : Famille, Formation et Emploi (2FE)</p>
              <p className="text-sm">Responsable : Pr. Loubna LAHLOU</p>
            </Card>
          </div>

          {/* Enseignants */}
          <Card title="Liste des enseignants" icon={Users} border="border-indigo-500">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[{
                name: "BENNASER Mohammed",
                img: "/images/teachers/image.png",
              },{
                name: "HADDA Mohammed",
                img: "/images/teachers/image.png",
              },{
                name: "LOUMMOU Brahim",
                img: "/images/teachers/image.png",
              },{
                name: "LAHLOU Loubna",
                img: "/images/teachers/image.png",
              },{
                name: "LAOUIDAT Mohammed",
                img: "/images/teachers/image.png",
              },{
                name: "AARAB Mohammed",
                img: "/images/teachers/image.png",
              },{
                name: "EL KANDOUSSI Mohamed",
                img: "/images/teachers/image.png",
              },{
                name: "BEN ELAZMIA Nadia",
                img: "/images/teachers/image.png",
              },{
                name: "NAIMI Rafik",
                img: "/images/teachers/image.png",
              },{
                name: "MACHHOUR Fatiha",
                img: "/images/teachers/image.png",
              },{
                name: "BOUIZMAN Bouchra",
                img: "/images/teachers/image.png",
              },{
                name: "LAGHRISSI Salama",
                img: "/images/teachers/image.png",
              },{
                name: "SERRHINI Hanane",
                img: "/images/teachers/image.png",
              },{
                name: "BOUTAHRA Siham",
                img: "/images/teachers/image.png",
              },{
                name: "NAAMANE Badiâ",
                img: "/images/teachers/image.png",
              },{
                name: "BOULAGROUH Zoubida",
                img: "/images/teachers/image.png",
              },{
                name: "LHAOUAL Mohamed",
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
