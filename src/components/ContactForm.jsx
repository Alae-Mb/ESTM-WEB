"use client";

import { useRef } from "react";
import { Mail } from "lucide-react";

export default function ContactForm() {
  const formRef = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const emailjs = (await import("@emailjs/browser")).default;
      await emailjs.sendForm(
        "service_dnj25cn",
        "template_wz54nqc",
        formRef.current,
        "50uxdnKnMd2aRALvR"
      );
      alert("Message envoyé");
      formRef.current.reset();
    } catch (error) {
      console.log(error);
      alert("Erreur");
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={sendEmail}
      className="space-y-6"
    >
      <div className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-850 p-8">
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
              name="name"
              type="text"
              className="w-full px-5 py-4 border border-gray-300 dark:border-gray-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 focus:ring-blue-100 dark:focus:ring-blue-900 transition-color"
              placeholder="Entrez votre nom"
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-3 text-sm uppercase tracking-wide">
              Adresse Email
            </label>
            <input
              name="email"
              type="email"
              className="w-full px-5 py-4 border border-gray-300 dark:border-gray-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 focus:ring-blue-100 dark:focus:ring-blue-900 transition-color"
              placeholder="votre@email.com"
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-3 text-sm uppercase tracking-wide">
              Votre Message
            </label>
            <textarea
              name="message"
              rows={6}
              className="w-full px-5 py-4 border border-gray-300 dark:border-gray-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 focus:ring-blue-100 dark:focus:ring-blue-900 transition-color resize-none"
              placeholder="Écrivez votre message ici..."
            />
          </div>

          <button
            type="submit"
            className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg transform hover:scale-[1.005] active:scale-[1.0] transition-all duration-300"
          >
            Envoyer le Message
          </button>
        </div>
      </div>
    </form>
  );
}