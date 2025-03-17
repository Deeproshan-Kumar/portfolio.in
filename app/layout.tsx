import type { Metadata } from "next";
import { Geist, Geist_Mono, Playwrite_IN } from "next/font/google";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playwriteIN = Playwrite_IN({
  variable: "--font-playright-in",
});

export const metadata: Metadata = {
  title: "Portfolio | Deeproshan",
  description:
    "A Front End Developer Portfolio. Built on the NextJS + TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playwriteIN.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
