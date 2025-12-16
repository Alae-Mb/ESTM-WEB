"use client";

import PageHeader from "@/components/shared/PageHeader";
import { motion } from "framer-motion";
import AnimatedCard from "@/components/shared/AnimatedCard";

export default function TeachersPage() {
  const teachers = [
    // TCC Department
    { id: 1, name: "Prof. BENNASER Mohammed", specialty: "Departement TCC" },
    { id: 2, name: "Prof. HADDA Mohammed", specialty: "Departement TCC" },
    { id: 3, name: "Prof. LOUMMOU Brahim", specialty: "Departement TCC" },
    { id: 4, name: "Prof. LAHLOU Loubna", specialty: "Departement TCC" },
    { id: 5, name: "Prof. LAOUIDAT Mohammed", specialty: "Departement TCC" },
    { id: 6, name: "Prof. AARAB Mohammed", specialty: "Departement TCC" },
    { id: 7, name: "Prof. EL KANDOUSSI Mohamed", specialty: "Departement TCC" },
    { id: 8, name: "Prof. BEN ELAZMIA Nadia", specialty: "Departement TCC" },
    { id: 9, name: "Prof. NAIMI Rafik", specialty: "Departement TCC" },
    { id: 10, name: "Prof. MACHHOUR Fatiha", specialty: "Departement TCC" },
    { id: 11, name: "Prof. BOUIZMAN Bouchra", specialty: "Departement TCC" },
    { id: 12, name: "Prof. LAGHRISSI Salama", specialty: "Departement TCC" },
    { id: 13, name: "Prof. SERRHINI Hanane", specialty: "Departement TCC" },
    { id: 14, name: "Prof. BOUTAHRA Siham", specialty: "Departement TCC" },
    { id: 15, name: "Prof. NAAMANE Badiâ", specialty: "Departement TCC" },
    { id: 16, name: "Prof. BOULAGROUH Zoubida", specialty: "Departement TCC" },
    { id: 17, name: "Prof. LHAOUAL Mohamed", specialty: "Departement TCC" },

    // GI Department
    { id: 18, name: "Prof. Abdallah RHATTOY", specialty: "Departement GI" },
    { id: 19, name: "Prof. Mohamed LAHMER", specialty: "Departement GI" },
    { id: 20, name: "Prof. Abderrahim El Qadi", specialty: "Departement GI" },
    { id: 21, name: "Prof. Youssef GHANOU", specialty: "Departement GI" },
    { id: 22, name: "Prof. EL OUAZZANI Rajae", specialty: "Departement GI" },
    { id: 23, name: "Prof. CHANA Idriss", specialty: "Departement GI" },
    { id: 24, name: "Prof. BARRADA Mohammed", specialty: "Departement GI" },
    { id: 25, name: "Prof. BENAMAR Mariya", specialty: "Departement GI" },
    { id: 26, name: "Prof. MRANI Nabil", specialty: "Departement GI" },
    { id: 27, name: "Prof. BENAMAR Nabil", specialty: "Departement GI" },
    { id: 28, name: "Prof. NASIRI Samia", specialty: "Departement GI" },
    { id: 29, name: "Prof. MENAOUI Rachid", specialty: "Departement GI" },
    { id: 30, name: "Prof. BEN-HDECH Adil", specialty: "Departement GI" },

    // GE Department
    { id: 31, name: "Prof. RAHMOUNE Miloud", specialty: "Departement GE" },
    { id: 32, name: "Prof. BOUACHRINE Mohammed", specialty: "Departement GE" },
    { id: 33, name: "Prof. SBAI El Hassan", specialty: "Departement GE" },
    { id: 34, name: "Prof. NAKHELI Abdelrhani", specialty: "Departement GE" },
    { id: 35, name: "Prof. BEJJIT Lahcen", specialty: "Departement GE" },
    { id: 36, name: "Prof. BRI Seddik", specialty: "Departement GE" },
    { id: 37, name: "Prof. SBAI Khalid", specialty: "Departement GE" },
    { id: 38, name: "Prof. LACHHAB Abdeslam", specialty: "Departement GE" },
    { id: 39, name: "Prof. BOUAZI Aziz", specialty: "Departement GE" },
    { id: 40, name: "Prof. MARHRAOUI HSAINI Abdallah", specialty: "Departement GE" },
    { id: 41, name: "Prof. ED-DAHHAK Abdelali", specialty: "Departement GE" },
    { id: 42, name: "Prof. SAADANI Rachid", specialty: "Departement GE" },
    { id: 43, name: "Prof. AGOUNOUN Rachid", specialty: "Departement GE" },
    { id: 44, name: "Prof. OUNEJJAR Youssef", specialty: "Departement GE" },
    { id: 45, name: "Prof. TALIDI Abdellah", specialty: "Departement GE" },
    { id: 46, name: "Prof. EL MALKI Zakaria", specialty: "Departement GE" },
    { id: 47, name: "Prof. EL BENKHIRA El Hassan", specialty: "Departement GE" },
    { id: 48, name: "Prof. BENYASSI Mohamed", specialty: "Departement GE" },
    { id: 49, name: "Prof. GUERBAOUI Mohammed", specialty: "Departement GE" },
    { id: 50, name: "Prof. EL BAHI Mohammed", specialty: "Departement GE" },

    // TM Department
    { id: 51, name: "Prof. MAGHNOUJ Sellam", specialty: "Departement TM" },
    { id: 52, name: "Prof. REGRAGUI Fatiha", specialty: "Departement TM" },
    { id: 53, name: "Prof. QACH Nour-eddine", specialty: "Departement TM" },
    { id: 54, name: "Prof. EL JIM Mohamed", specialty: "Departement TM" },
    { id: 55, name: "Prof. ABOUHASSANI El Mostafa", specialty: "Departement TM" },
    { id: 56, name: "Prof. DAMOUM Hamid", specialty: "Departement TM" },
    { id: 57, name: "Prof. ABOUAHMED Khalid", specialty: "Departement TM" },
    { id: 58, name: "Prof. OUAOUICHA Hassan", specialty: "Departement TM" },
    { id: 59, name: "Prof. MARCHOUD Nouredine", specialty: "Departement TM" },
    { id: 60, name: "Prof. ZEROUAL Safia", specialty: "Departement TM" },
    { id: 61, name: "Prof. BENAZZI Latifa", specialty: "Departement TM" },
    { id: 62, name: "Prof. EL HARAMI Mohamed", specialty: "Departement TM" },
    { id: 63, name: "Prof. ICHOU Radia", specialty: "Departement TM" },
    { id: 64, name: "Prof. ALLALI Khadija", specialty: "Departement TM" },
  ];

  return (
    <div>
      <PageHeader
        title="Nos Enseignants"
        description="Une équipe d'experts dédiés à votre réussite"
      />

      <section className="py-20 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Nos professeurs sont des experts du domaine avec une expérience
              industrielle reconnue
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teachers.map((teacher, idx) => (
              <AnimatedCard key={teacher.id} delay={idx * 0.1}>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#2563EB] to-[#0A2540] rounded-full mx-auto mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-20 h-20 rounded-full mx-auto mb-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {teacher.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    {teacher.specialty}
                  </p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
