import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Yassine ELFOUGHALI — Data Scientist · AI Engineer · Software Engineer",
  description: "Portfolio officiel de Yassine ELFOUGHALI. Étudiant en Master 2 BDIA à l'Université de Bourgogne Europe (Dijon), spécialisé en Machine Learning, Data Science et Ingénierie Logicielle.",
  keywords: [
    "Yassine ELFOUGHALI",
    "Data Scientist",
    "AI Engineer",
    "Software Engineer",
    "Machine Learning",
    "Deep Learning",
    "Data Science France",
    "Dijon",
    "Université de Bourgogne Europe",
    "Stockfish Chess AI",
    "Financial Fraud Detection ML"
  ],
  authors: [{ name: "Yassine ELFOUGHALI" }],
  openGraph: {
    title: "Yassine ELFOUGHALI — Data Scientist · AI Engineer",
    description: "Portfolio de Yassine ELFOUGHALI — Spécialiste Data Science, Intelligence Artificielle & Génie Logiciel.",
    type: "website",
    locale: "fr_FR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} scroll-smooth h-full antialiased`}>
      <body className="min-h-full bg-[#05070f] text-slate-100 flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
