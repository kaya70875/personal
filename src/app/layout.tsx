import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer";
import ImageModalProvider from "@/context/ImageModalContext";
import { Analytics } from "@vercel/analytics/next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "200", "300", "500", "600"],
});

export const metadata: Metadata = {
  title: "ahmetky.dev",
  description: "ahmetky's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <ImageModalProvider>
          <div className="bg-dark-bg flex flex-col sections-gap min-h-screen relative">
            <Navbar />
            {children}
            <Analytics />
          </div>
          <Footer />
        </ImageModalProvider>
      </body>
    </html>
  );
}
