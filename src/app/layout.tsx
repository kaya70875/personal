import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer";
import ThemeProvider from "@/context/ThemeContext";
import ImageModalProvider from "@/context/ImageModalContext";
import { Analytics } from "@vercel/analytics/next";

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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
              const theme = localStorage.getItem('theme');
              if (theme === 'dark') {
                document.documentElement.setAttribute('data-theme', 'dark');
              } else {
                document.documentElement.setAttribute('data-theme', 'light');
              }
            })();
          `,
          }}
        />
      </head>
      <body
        className={`${poppins.className} antialiased`}
      >
        <ThemeProvider>
          <ImageModalProvider>
            <div className="bg-bg dark:bg-dark-bg flex flex-col sections-gap min-h-screen relative">
              <Navbar />
              {children}
              <Analytics />
            </div>
            <Footer />
          </ImageModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}