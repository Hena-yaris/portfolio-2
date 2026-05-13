import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";



const geist = Geist({
  subsets: ["latin"],
});

export const metadata = {
  title: "Henok | Full Stack Developer",

  description:
    "Modern full stack developer portfolio focused on scalable frontend architecture, thoughtful design, and clean digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
