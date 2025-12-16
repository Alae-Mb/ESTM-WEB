"use client";

import PageHeader from "@/components/shared/PageHeader";
import { motion } from "framer-motion";
import { BookOpen, History, User, Star, Layers, Image as ImageIcon, X } from "lucide-react";
import { useState } from "react";

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
        {/* style nta3 molana text */}
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

        {/* sizes nta3 lala tswira */}
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

    {/* hado les images nta3 l gallery */}

export default function AboutESTMPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const gallery = [
    {
      src: "/images/events/Screenshot 2025-12-16 222653.png",
      alt: "Événements ESTM"
    },
    {
      src: "/images/events/WhatsApp Image 2025-12-16 at 9.30.57 PM.jpeg",
      alt: "Activités étudiantes"
    },
    {
      src: "/images/events/WhatsApp Image 2025-12-16 at 9.32.24 PM.jpeg",
      alt: "Laboratoires ESTM"
    },
    {
      src: "/images/events/WhatsApp Image 2025-12-16 at 9.34.55 PM.jpeg",
      alt: "Installations modernes"
    }
  ];

  return (
    <div className="bg-gray-50 dark:bg-black">
      <PageHeader
        title="École Supérieure de Technologie de Meknès"
        description="Présentation, mission et organisation de l'EST Meknès"
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* dekhla */}
        <motion.section {...fadeUp} className="py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div className="md:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-blue-100 dark:bg-gray-800">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Présentation de l'école</h2>
              </div>
              <div className="text-gray-600 dark:text-gray-300 text-lg space-y-4">
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
              </div>
            </div>

            {/* Vid nta3 est yt*/}
            <div className="md:order-1">
              <div className="rounded-2xl overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-800">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/UOSonBrLkxs"
                  title="Présentation de l'EST Meknès"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full aspect-video"
                ></iframe>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Tarikh */}
        <Section
          title="Historique de l'école"
          icon={History}
          imageSrc="images/campus-life/compus/image.png"
        >
          <p>
            Crée dans le cadre de la réforme de l'enseignement supérieur au
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

        {/* Lmodir */}
        <Section
          title="Direction de l'école"
          icon={User}
          reverse
          imageSrc="/images/campus-life/compus/Directeur.jpg"
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

        {/* klima mn 3ndo */}
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

        {/* dik organism dyalhom */}
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
                src="/images/campus-life/compus/shema.png"
                alt="Organigramme de l'EST Meknès"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </motion.section>

        {/* dakchi nadi fl EST (mati9ch) */}
        <motion.section {...fadeUp} className="py-16">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Formation professionnalisante",
                desc: "4 départements et 11 filières adaptées aux besoins du marché",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="blue" className="size-6">
                  <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                  <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                  <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
                </svg>,
              },
              {
                title: "Encadrement qualifié",
                desc: "Équipe enseignante expérimentée et engagée",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="blue" className="size-6">
                    <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clipRule="evenodd" />
                    <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
                  </svg>,
              },
              {
                title: "Infrastructure moderne",
                desc: "Équipements pédagogiques et laboratoires de pointe",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="blue" className="size-6">
                    <path fillRule="evenodd" d="M4.5 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5h-.75V3.75a.75.75 0 0 0 0-1.5h-15ZM9 6a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm-.75 3.75A.75.75 0 0 1 9 9h1.5a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM9 12a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm3.75-5.25A.75.75 0 0 1 13.5 6H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM13.5 9a.75.75 0 0 0 0 1.5H15A.75.75 0 0 0 15 9h-1.5Zm-.75 3.75a.75.75 0 0 1 .75-.75H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM9 19.5v-2.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 9 19.5Z" clipRule="evenodd" />
                  </svg>,
              },
              {
                title: "Recherche scientifique",
                desc: "3 laboratoires et 12 équipes de recherche multidisciplinaires",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="blue" className="size-6">
                  <path d="M8.25 10.875a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0Z" />
                  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.125 4.5a4.125 4.125 0 1 0 2.338 7.524l2.007 2.006a.75.75 0 1 0 1.06-1.06l-2.006-2.007a4.125 4.125 0 0 0-3.399-6.463Z" clipRule="evenodd" />
                </svg>,
              },
              {
                title: "Employabilité garantie",
                desc: "Formation orientée vers l'insertion professionnelle",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="blue" className="size-6">
                  <path fillRule="evenodd" d="M2.25 6a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V6Zm3.97.97a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 0 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Zm4.28 4.28a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" clipRule="evenodd" />
                </svg>,
              },
              {
                title: "Gouvernance moderne",
                desc: "Approche inclusive et participative",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="blue" className="size-6">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                </svg>,
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

        {/* lkhadamat (wakha ma3mri chefthom) */}
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

        {/* tsawr ziinin */}
        <motion.section {...fadeUp} className="py-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
            Galerie
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((item, i) => (
              <motion.div
                key={item.alt}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="aspect-square rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                  onClick={() => setSelectedImage(item)}
                />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* clicker 3la tswira bach t aficha kamla */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
