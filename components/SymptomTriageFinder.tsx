"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const SYMPTOMS = [
  {
    id: "medicine",
    label: "Fever, Infection & Diabetes",
    icon: "💊",
    department: "General & Internal Medicine",
    departmentSlug: "medicine",
    doctor: "Dr. Mahtab Alam Ansari",
    doctorDegree: "MBBS, MD (Medicine)",
    doctorRole: "Senior Consultant Physician",
    doctorPhoto: "/doctors/dr-mahtab-alam-ansari.png",
    procedure: "Complete Diagnostic Workup & Critical Care",
    recovery: "24/7 Inpatient Diagnostics & Pharmacy",
    description: "Accurate clinical evaluation and treatment for chronic fevers, dengue, typhoid, uncontrolled diabetes, hypertension, and infectious diseases.",
  },
  {
    id: "stone",
    label: "Kidney / Flank Stone Pain",
    icon: "🩺",
    department: "Advanced Urology & Stone Management",
    departmentSlug: "urology",
    doctor: "Dr. Abhishek Yadav",
    doctorDegree: "MBBS, MS, MCh (Urology)",
    doctorRole: "Senior Urologist & Transplant Surgeon",
    doctorPhoto: "/doctors/dr-abhishek-yadav.png",
    procedure: "Holmium Laser Lithotripsy / PCNL / URS",
    recovery: "24-Hour Laser Discharge • Zero Cuts",
    description: "Minimally invasive laser fragmentation of renal and ureteric stones with quick recovery and minimal postoperative discomfort.",
  },
  {
    id: "gynae",
    label: "Women's Health & Laparoscopy",
    icon: "🌸",
    department: "Obstetrics & Gynaecology",
    departmentSlug: "obstetrics-gynaecology",
    doctor: "Dr. Pramila Yadav",
    doctorDegree: "MBBS, MS (Obstetrics & Gynaecology)",
    doctorRole: "Senior Gynaecologist & Laparoscopy Surgeon",
    doctorPhoto: "/doctors/dr-pramila-yadav.png",
    procedure: "3D Laparoscopic Hysterectomy / Maternity Care",
    recovery: "Same-Day Mobilization • Expert Care",
    description: "Specialized in advanced gynaecological laparoscopy, ovarian cystectomy, high-risk pregnancy care, and painless maternity services.",
  },
  {
    id: "kidney",
    label: "Kidney Disease & Dialysis",
    icon: "💧",
    department: "Nephrology & Hemodialysis",
    departmentSlug: "nephrology",
    doctor: "Dr. Vijay Pratap Singh",
    doctorDegree: "MBBS, MD, DM (Nephrology)",
    doctorRole: "Consultant Nephrologist & Renal Specialist",
    doctorPhoto: "/doctors/dr-vijay-pratap-singh.png",
    procedure: "Maintenance Hemodialysis / Renal Care",
    recovery: "Modern RO Water Plant • 24/7 Dialysis",
    description: "Comprehensive management of acute & chronic kidney diseases (CKD), hypertensive nephropathy, and round-the-clock hemodialysis.",
  },
  {
    id: "surgery",
    label: "Gallbladder, Hernia & Appendix",
    icon: "🔬",
    department: "General & Laparoscopic Surgery",
    departmentSlug: "general-surgery",
    doctor: "Dr. D. P. Singh",
    doctorDegree: "MBBS, MS (General Surgery)",
    doctorRole: "Senior General & Laparoscopic Surgeon",
    doctorPhoto: "/doctors/dr-dp-singh.png",
    procedure: "Laparoscopic Cholecystectomy / Hernia Mesh Repair",
    recovery: "Minimal Pain • Fast Healing & Early Discharge",
    description: "Minimally invasive keyhole surgeries for gallbladder stones, inguinal hernia, appendix, piles, fissure, and abdominal conditions.",
  },
];

export default function SymptomTriageFinder() {
  const [selectedId, setSelectedId] = useState("stone");
  const current = SYMPTOMS.find((s) => s.id === selectedId) || SYMPTOMS[0];

  return (
    <section className="py-16 sm:py-20 bg-[#f8fafc] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-[#00548e] rounded-full text-xs font-bold uppercase tracking-wider">
            <span>⚡ Interactive Care Finder</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#002d62]">
            Find the Right Specialist by Condition
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Select your health concern below to immediately discover the designated clinical department, senior consultant doctor, and modern treatment options at Rajendra Hospital.
          </p>
        </div>

        {/* Symptom Selector Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {SYMPTOMS.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold inline-flex items-center gap-2 transition-all duration-200 ${
                selectedId === item.id
                  ? "bg-[#00548e] text-white shadow-md shadow-blue-900/10 scale-105"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        {/* Care Card (Amrita Clean Style) */}
        <div className="amrita-card p-6 sm:p-10 border-slate-200 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Doctor Photo & Badges (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center sm:flex-row lg:flex-col gap-6 text-center sm:text-left lg:text-center">
              <div className="relative h-56 w-56 sm:h-64 sm:w-64 rounded-2xl overflow-hidden shadow-md border-2 border-blue-100 bg-slate-100 flex-shrink-0">
                <Image
                  src={current.doctorPhoto}
                  alt={current.doctor}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif font-bold text-xl text-[#002d62]">
                  {current.doctor}
                </h3>
                <p className="text-xs font-bold text-[#e87722]">
                  {current.doctorRole}
                </p>
                <p className="text-xs text-slate-500 font-medium">
                  {current.doctorDegree}
                </p>
              </div>
            </div>

            {/* Treatment Details (7 cols) */}
            <div className="lg:col-span-7 space-y-5 border-t lg:border-t-0 lg:border-l border-slate-100 pt-6 lg:pt-0 lg:pl-8">
              <div>
                <span className="text-[11px] font-bold text-[#00828a] uppercase tracking-wider block mb-1">
                  Designated Speciality
                </span>
                <h4 className="font-serif font-bold text-2xl text-[#002d62]">
                  {current.department}
                </h4>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {current.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="p-3.5 bg-blue-50/70 rounded-xl border border-blue-100">
                  <span className="text-[10px] font-bold text-[#00548e] uppercase tracking-wider block">
                    Recommended Procedure
                  </span>
                  <p className="text-xs font-bold text-slate-800 mt-1">
                    {current.procedure}
                  </p>
                </div>
                <div className="p-3.5 bg-emerald-50/70 rounded-xl border border-emerald-100">
                  <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block">
                    Care Standard
                  </span>
                  <p className="text-xs font-bold text-emerald-950 mt-1">
                    {current.recovery}
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  href={`/appointments?doctor=${encodeURIComponent(current.doctor)}&dept=${encodeURIComponent(current.departmentSlug)}`}
                  className="btn-amrita-primary text-xs sm:text-sm py-2.5 px-5"
                >
                  📅 Book Doctor Appointment
                </Link>
                <Link
                  href={`/departments/${current.departmentSlug}`}
                  className="btn-amrita-secondary text-xs sm:text-sm py-2.5 px-5"
                >
                  View Department →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
