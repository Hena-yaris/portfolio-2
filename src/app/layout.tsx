

import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/layout/Navbar"; 
import Footer from "../components/layout/Footer";
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist", 
});

export const metadata: Metadata = {
  title: "Henok | Full-Stack Developer",
  description:
    "Modern full-stack developer portfolio focused on scalable architecture, thoughtful design, and clean digital experiences.",
  openGraph: {
    title: "Henok | Full-Stack Developer",
    description: "Full-Stack Developer Portfolio.",
    type: "website",
  },

  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geist.className} bg-background text-foreground antialiased min-h-screen flex flex-col`}
      >
        <Navbar />

        <main className="flex-grow pt-24">
          {children}
        </main>

        <Footer/>

      </body>
    </html>
  );
}