import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EmergencyFloatingDock from "@/components/EmergencyFloatingDock";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rajendrahospital.co.in"),
  title: {
    default: "Rajendra Hospital | Best Multi-Speciality Hospital in Gorakhpur",
    template: "%s | Rajendra Hospital",
  },
  description:
    "Rajendra Hospital is a 100-bed NABH certified multi-speciality hospital in Gorakhpur. Center of Advanced URO & Gyane Laparoscopy, Stone Management, 24/7 ICU, Dialysis & Nephrology.",
  keywords: [
    "Rajendra Hospital",
    "Best Hospital in Gorakhpur",
    "Dr. Abhishek Yadav Urologist",
    "Laparoscopic Surgery Gorakhpur",
    "Kidney Stone Laser Removal Gorakhpur",
    "Dr. Pramila Yadav Gynecologist",
    "Dialysis Center Gorakhpur",
    "NABH Hospital Gorakhpur",
  ],
  authors: [{ name: "Rajendra Hospital" }],
  creator: "Rajendra Hospital",
  publisher: "Rajendra Hospital",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://rajendrahospital.co.in",
    siteName: "Rajendra Hospital",
    title: "Rajendra Hospital | Best Multi-Speciality Hospital in Gorakhpur",
    description:
      "100-bed NABH certified multi-speciality hospital in Gorakhpur. Advanced URO & Gyane Laparoscopy, 24/7 ICU & Dialysis.",
    images: [
      {
        url: "/images/Logo-Primary.png",
        width: 800,
        height: 600,
        alt: "Rajendra Hospital",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="flex min-h-screen flex-col bg-[#f8fafc] text-slate-900 antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <EmergencyFloatingDock />
        <Footer />
      </body>
    </html>
  );
}
