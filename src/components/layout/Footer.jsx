"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Contact } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Navigation",
      links: [
        { label: "Accueil", href: "/" },
        { label: "Filières", href: "/departments" },
        { label: "Admissions", href: "/admissions" },
      ],
    },
    {
      title: "Ressources",
      links: [
        { label: "Galerie", href: "/gallery" },
        { label: "Enseignants", href: "/teachers" },
        { label: "Vie étudiante", href: "/campus-life" },
      ],
    },
    {
      title: "Contact",
      links: [
        { label: "Nous contacter", href: "/contact" },
        { label: "FAQ", href: "#" },
        { label: "Support", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://web.facebook.com/EstmOfficielle/?locale=fr_FR&_rdc=1&_rdr#",
      label: "Facebook",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/estmofficielle/",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/school/est-meknes/?originalSubdomain=ma",
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      {/* Main Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Image
                className="filter hue-rotate-180 brightness-75"
                src="/icons/mainLogo.png"
                alt="ESTM logo"
                width={240}
                height={240}
                priority={true}
              />

              <p className="text-gray-400">
                École Supérieure de Technologie de Meknès
              </p>
            </motion.div>

            {/* Links Sections */}
            {footerLinks.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-blue-400 transition"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="border-t border-gray-800 pt-8 mb-8"
          >
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/contact">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-400">
                    Rue d'Agouray, P1, Meknes 50040, Maroc
                  </span>
                </div>
              </Link>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">+212 5 35 46 70 85</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">estm@est-umi.ac.ma</span>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            {socialLinks.map((social, idx) => {
              const Icon = social.icon;
              return (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="border-t border-gray-800 py-6"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <p className="text-gray-400 text-sm">
            © {currentYear} ESTM Meknès. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-gray-400 hover:text-blue-400 text-sm transition"
            >
              Politique de Confidentialité
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-blue-400 text-sm transition"
            >
              Conditions d'Utilisation
            </Link>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
