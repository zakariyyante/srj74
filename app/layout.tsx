import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "MaxSportif - Meilleurs Sites de Paris Sportifs en France 2026",
  description: "Découvrez les meilleurs sites de paris sportifs en France sur MaxSportif.com. Plateformes agréées ANJ avec bonus exclusifs, retraits rapides et offres premium.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
