import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/sections/Footer";
import Navbar from "@/components/sections/Navbar";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-sans" });
const inter = Inter({ subsets: ["latin"], variable: "--font-mono" });

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
          className={`${plusJakartaSans.variable} ${inter.variable} font-playfairDisplay`}
        >
          <div className="min-h-screen flex flex-col">
            <Navbar />
            {children}
            <Footer />
          </div>
        </body>
      </html>
     </>
  );
}
