import "@/styles/globale.css";
import MainLayout from "@/components/layout/MainLayout";


export const metadata = {
  title: "EST Meknès",
  icons: {
    icon: "/icons/icon.png",
  },
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
