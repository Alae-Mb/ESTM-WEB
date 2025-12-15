import "@/styles/globale.css";
import MainLayout from "@/components/layout/MainLayout";

export const metadata = {
  title: "EST Meknès",
  description: "Site officiel ESTM (Projet Front-End)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
