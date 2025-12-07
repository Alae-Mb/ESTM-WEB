"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/departments", label: "Départements" },
    { href: "/admissions", label: "Admissions" },
    { href: "/campus-life", label: "Vie étudiante" },
    { href: "/gallery", label: "Galerie" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm dark:bg-gray-900/80">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link href="/" className="inline-flex items-center">
            <Image
              src="/icons/mainLogo.png"
              alt="ESTM logo"
              width={240}
              height={240}
              priority={true}
            />
            <span className="sr-only">ESTM</span>
          </Link>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <Link 
                href={link.href}
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 transition"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 dark:text-gray-200"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white dark:bg-gray-900 shadow-md"
        >
          <div className="flex flex-col py-4 px-6 space-y-4">
            {navLinks.map((link, idx) => (
              <Link 
                key={idx} 
                href={link.href}
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 transition"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
