import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import SplashScreen from "@/components/SplashScreen";
import PageTransition from "@/components/PageTransition";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KJ Global Travel Agency | Trusted Visa & Global Travel Services",
  description: "KJ Global Travel Agency offers expert visa processing, international ticketing, and comprehensive travel support services worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.variable} ${montserrat.variable} antialiased font-poppins`}
      >
        <SplashScreen />
        <PageTransition />
        {children}
      </body>
    </html>
  );
}
