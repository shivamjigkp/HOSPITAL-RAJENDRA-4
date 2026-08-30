import type { Metadata } from "next";
import HeroSlider from "@/components/HeroSlider";
import AmritaWhySection from "@/components/AmritaWhySection";
import AmritaSpecialtiesGrid from "@/components/AmritaSpecialtiesGrid";
import AmritaSupportServices from "@/components/AmritaSupportServices";
import AmritaAccreditations from "@/components/AmritaAccreditations";
import HospitalNewsSection from "@/components/HospitalNewsSection";
import PatientStoriesSection from "@/components/PatientStoriesSection";

export const metadata: Metadata = {
  title: "Rajendra Hospital | Multi-Speciality Hospital in Gorakhpur",
  description:
    "Rajendra Hospital is a 100-bed NABH certified multi-speciality hospital in Gorakhpur. Center of Advanced URO & Gyane Laparoscopy, Stone Management, 24/7 ICU, Dialysis & Nephrology.",
};

export default function HomePage() {
  return (
    <div className="flex flex-col gap-0 overflow-hidden bg-white text-slate-900">
      {/* 1. EXACT AMRITA SPLIT HERO SLIDER */}
      <HeroSlider />

      {/* 2. EXACT AMRITA "WHY AMRITA / RAJENDRA HOSPITAL?" SECTION */}
      <AmritaWhySection />

      {/* 3. EXACT AMRITA "OUR DEPARTMENTS & CENTERS" TABBED GRID */}
      <AmritaSpecialtiesGrid />

      {/* 4. EXACT AMRITA "SUPPORT SERVICES" DARK SECTION */}
      <AmritaSupportServices />

      {/* 5. EXACT AMRITA "ACCREDITATIONS" SECTION */}
      <AmritaAccreditations />

      {/* 6. EXACT AMRITA "EVENTS" & "HEALTH INSIGHTS" SECTIONS */}
      <HospitalNewsSection />

      {/* 7. EXACT AMRITA "PATIENT STORIES" SECTION */}
      <PatientStoriesSection />
    </div>
  );
}
