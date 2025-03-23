import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-sans" });
const playfairDisplay = Playfair_Display({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Davedevs | CleanKanvas",
  description: "CleanKanvas is an AI powered platform that romove backgrounds from your photos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <>
      <html lang="en">
        <body
          className={`${plusJakartaSans.variable} ${playfairDisplay.variable} font-playfairDisplay`}
        >
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
     </>
  );
}
