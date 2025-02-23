import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BCG - Bartr Catalyst Group",
  description: "Empowering businesses and entrepreneurs across India and the world. BCG (Bartr Catalyst Group) is your trusted partner in business growth and innovation.",
  keywords: "BCG, Bartr Catalyst Group, Business Consulting, Strategic Solutions, Innovation",
  authors: [{ name: "Bartr Catalyst Group" }],
  openGraph: {
    title: "BCG - Bartr Catalyst Group",
    description: "Empowering businesses and entrepreneurs across India and the world",
    siteName: "Bartr Catalyst Group (BCG)",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
