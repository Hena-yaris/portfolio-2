import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";



const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Henok's portfolio",
  description: "Modern full stack developer portfolio.",
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
