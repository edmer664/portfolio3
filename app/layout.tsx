import Navbar from "../components/Navbar/Navbar";
import "./globals.css";
import { Montserrat } from "next/font/google";
import navlinks from "../config/navlinks";
import Footer from "@/components/Footer/Footer";

const montserrat = Montserrat({ subsets: ["latin-ext"] });

export const metadata = {
  title: "EDMER",
  description:
    "Edmer Pizarra - Full Stack Developer specializing in PHP, MySQL, and JavaScript with 2 years of experience in software and web development. Contact him at edmerpizarra@gmail.com.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar
          links={navlinks}
          logo={{
            alt: "EDMER",
            src: "/assets/img/expanded_logo.png",
          }}
          mobileLogo={{
            alt: "EDMER",
            src: "/assets/img/logo.svg",
          }}
        />

        {children}
        <Footer />
      </body>
    </html>
  );
}
