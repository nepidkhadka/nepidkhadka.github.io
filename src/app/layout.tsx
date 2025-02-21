import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import ProgressBar from "@/components/progressbar";
import Navigation from "@/components/navbar/Navigation";
import ThemeProvider from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800",],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nepidkhadka.github.io"),
  title: "Dipen Khadka - Full-Stack Developer | React, Next.js, Express.js",
  description: "Hi, I'm Dipen Khadka, a Full-Stack Developer based in Nepal. I specialize in building interactive web experiences, designing web applications, and bringing ideas to life with code",
  keywords:
    "HTML, CSS, JavaScript, Tailwind CSS, React.js, Next.js, Express.js, Node.js, Web Design, Web Development, Full-Stack Development, Frontend Development, Backend Development, Responsive Web Design",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  verification: {
    google: "kb29QRZhS3UF1JlZgnt3kRd5h1ZstTq9EkHvfd"
  },
  openGraph: {
    images: ["https://nepidkhadka.github.io/hero/hero.png"],
  },
  twitter: {
    images: ["https://nepidkhadka.github.io/hero/hero.png"],
  },
}
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} antialiased`}>
        <ThemeProvider>
          <Suspense>
            <ProgressBar />
          </Suspense>
          <Suspense>
            <Navigation />
          </Suspense>
          {children}
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
