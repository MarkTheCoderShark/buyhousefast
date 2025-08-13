import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300","400","500","600","700","800"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BuyHouseFast — Sell Your House for Cash",
  description: "Get a fair cash offer for your home in any condition and close on your timeline.",
  metadataBase: new URL("https://www.buyhousefast.local"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${geistMono.variable} antialiased font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
