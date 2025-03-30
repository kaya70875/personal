import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "200", "300", "500", "600"]
})

export const metadata: Metadata = {
  title: "kaya",
  description: "kaya70875's website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        <div className="bg-bg flex flex-col min-h-screen default-container relative">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}