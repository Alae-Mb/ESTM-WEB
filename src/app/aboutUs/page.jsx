"use client";

import PageHeader from "@/components/shared/PageHeader";
import { motion } from "framer-motion";
import { BookOpen, History, User, Star, Layers, Image as ImageIcon } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

function Section({ title, icon: Icon, children, reverse = false, imageSrc }) {
  return (
    <motion.section {...fadeUp} className="py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Texte */}
        <div className={reverse ? "md:order-2" : ""}>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-xl bg-blue-100 dark:bg-gray-800">
              <Icon className="w-5 h-5 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              {title}
            </h2>
          </div>
          <div className="text-gray-600 dark:text-gray-300 text-lg space-y-4">
            {children}
          </div>
        </div>

        {/* Image */}
        <div
          className={`h-96 md:h-80 lg:h-72 overflow-hidden shadow-lg ${
            reverse ? "md:order-1" : ""
          }`}
        >
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-contain bg-gray-100 dark:bg-gray-800"
          />
        </div>
      </div>
    </motion.section>
  );
}

export default function AboutESTMPage() {
  const gallery = [
    "Campus",
    "Événements",
    "Laboratoires",
    "Étudiants",
    "Salles de classe",
    "Installations",
  ];

  return (
    <div className="bg-gray-50 dark:bg-black">
      <PageHeader
        title="École Supérieure de Technologie de Meknès"
        description="Présentation, mission et organisation de l'EST Meknès"
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Présentation */}
        <Section
          title="Présentation de l'école"
          icon={BookOpen}
          reverse
          imageSrc="/images/compus/image.png"
        >
          <p>
            L'École Supérieure de Technologie de Meknès (ESTM) est un
            établissement public relevant de l'Université Moulay Ismail. Elle a
            pour mission de former des techniciens supérieurs et des cadres
            intermédiaires répondant aux besoins du tissu socio-économique.
          </p>
          <p>
            Depuis sa création en 1993, l'ESTM n'a cessé de marquer un
            développement continu de ses missions en tant qu'établissement
            d'enseignement supérieur à accès régulé, lui conférant une place de
            prédilection au sein du réseau marocain des Écoles Supérieures de
            Technologie.
          </p>
        </Section>

        {/* Historique */}
        <Section
          title="Historique de l'école"
          icon={History}
          imageSrc="/images/compus/Screenshot 2025-12-15 201002.png"
        >
          <p>
            Créée dans le cadre de la réforme de l'enseignement supérieur au
            Maroc, l'EST Meknès s'inscrit dans une dynamique de formation
            professionnalisante basée sur l'alternance entre enseignements
            théoriques et pratiques.
          </p>
          <p>
            Depuis 1993, l'ESTM a connu un développement continu, devenant un
            pilier principal de l'Université Moulay Ismail de Meknès, avec une
            offre pédagogique riche de 4 départements et 11 filières répondant
            aux besoins du monde socioprofessionnel.
          </p>
        </Section>

        {/* Directeur */}
        <Section
          title="Direction de l'école"
          icon={User}
          reverse
          imageSrc="/images/compus/Directeur.jpg"
        >
          <p>
            L'EST Meknès est dirigée par un directeur nommé par le ministère de
            l'Enseignement Supérieur. La direction œuvre pour garantir une
            gouvernance efficace, une formation de qualité et un environnement
            académique propice à l'innovation.
          </p>
          <div className="mt-4 p-4 bg-blue-50 dark:bg-gray-800 rounded-lg">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Directeur par intérim
            </h4>
            <p className="font-medium text-lg">Pr. Abdelmjid ABOURRICHE</p>
            <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              <p>Tél : +212 5 35 46 70 85</p>
              <p>Fax : +212 5 35 46 70 83</p>
              <p>Email : vp.rscp@umi.ac.ma</p>
            </div>
          </div>
        </Section>

        {/* Mot du Directeur */}
        <motion.section {...fadeUp} className="py-16">
          <div className="rounded-2xl bg-white dark:bg-gray-900 shadow-sm border-l-4 border-green-500 p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-green-600" /> Mot du Directeur
            </h2>
            <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 space-y-4">
              <p>
                Depuis sa création en 1993 l'École Supérieure de Technologie de
                Meknès (ESTM) n'a cessé de marquer un développement continu de
                ses missions en tant qu'établissement d'enseignement supérieur à
                accès régulé.
              </p>
              <p>
                Ceci a permis de lui conférer une place de prédilection au sein
                du réseau marocain des ESTM, et de constituer un pilier
                principal de l'édifice de l'Université Moulay Ismaïl de Meknès.
              </p>
              <p>
                La richesse de l'offre pédagogique de l'ESTM, animée par ses 4
                départements et ses 11 filières, témoigne d'une diversité
                pertinente afin de répondre aux besoins du monde
                socioprofessionnel et de garantir l'employabilité de ses
                lauréats.
              </p>
              <p>
                Au niveau de la recherche scientifique et de l'innovation,
                l'ESTM est devenu un fleuron sur le plan régional. En témoigne
                la profusion des contributions scientifiques de ses enseignants
                chercheurs, et la dynamique de ses 3 laboratoires et de ses 12
                équipes de recherches multidisciplinaires.
              </p>
              <p>
                Le rôle facilitateur et stimulateur de l'Administration de
                l'ESTM est bien ancré dans une approche inclusive et
                participative, il fédère les différentes composantes de
                l'établissement et assure les synergies avec les acteurs de son
                écosystème.
              </p>
              <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
                <p className="italic text-green-800 dark:text-green-200">
                  "Sans doute l'ESTM, et par les efforts conjugués de toutes ses
                  parties prenantes intrinsèques et extrinsèques, va poursuivre
                  sur son sentier d'excellence en générant des valeurs ajoutées
                  supérieures pour les individus et les organisations, sous la
                  lumière d'une gouvernance moderne, et sous un horizon de
                  conscience d'attachement à nos valeurs nationales et à nos
                  constantes citoyennes."
                </p>
                <p className="mt-2 text-sm font-medium">
                  — Pr. Abdelmjid ABOURRICHE
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Organigramme */}
        <motion.section {...fadeUp} className="py-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="p-2 rounded-xl bg-blue-100 dark:bg-gray-800">
                <Layers className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
                Organigramme de l'école
              </h2>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-gray-100 dark:bg-gray-800">
              <img
                src="/images/compus/shema.png"
                alt="Organigramme de l'EST Meknès"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </motion.section>

        {/* Points forts */}
        <motion.section {...fadeUp} className="py-16">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Formation professionnalisante",
                desc: "4 départements et 11 filières adaptées aux besoins du marché",
                icon: "🎓",
              },
              {
                title: "Encadrement qualifié",
                desc: "Équipe enseignante expérimentée et engagée",
                icon: "👨‍🏫",
              },
              {
                title: "Infrastructure moderne",
                desc: "Équipements pédagogiques et laboratoires de pointe",
                icon: "🏢",
              },
              {
                title: "Recherche scientifique",
                desc: "3 laboratoires et 12 équipes de recherche multidisciplinaires",
                icon: "🔬",
              },
              {
                title: "Employabilité garantie",
                desc: "Formation orientée vers l'insertion professionnelle",
                icon: "💼",
              },
              {
                title: "Gouvernance moderne",
                desc: "Approche inclusive et participative",
                icon: "🎯",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white dark:bg-gray-900 p-6 shadow-sm border-l-4 border-purple-500"
              >
                <div className="text-2xl mb-3">{item.icon}</div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Services */}
        <motion.section {...fadeUp} className="py-16">
          <div className="rounded-2xl bg-white dark:bg-gray-900 p-8 shadow-sm border-l-4 border-orange-500">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Services offerts
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Services pédagogiques
                </h3>
                <ul className="list-disc ml-6 text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Bibliothèque universitaire</li>
                  <li>Plateformes numériques d'apprentissage</li>
                  <li>Stages et projets professionnels</li>
                  <li>Activités culturelles et sportives</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Services administratifs
                </h3>
                <ul className="list-disc ml-6 text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Espace étudiant en ligne</li>
                  <li>Consultation des notes et relevés</li>
                  <li>Emplois du temps et listes</li>
                  <li>Relations extérieures et partenariats</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Galerie */}
        <motion.section {...fadeUp} className="py-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
            Galerie
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="aspect-square rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 flex items-center justify-center text-white font-semibold shadow-lg"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
