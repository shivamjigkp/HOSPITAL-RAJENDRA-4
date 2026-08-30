"use client";

import { useState } from "react";
import Link from "next/link";

const DEPARTMENTS_DATA = [
  {
    slug: "urology",
    name: "Advanced Urology & Laser Surgery",
    category: "centres",
    icon: (
      <svg className="w-8 h-8 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    description: "Minimally invasive Holmium Laser Lithotripsy, PCNL, URS, and comprehensive stone management.",
  },
  {
    slug: "obstetrics-gynaecology",
    name: "Obstetrics & Advanced Laparoscopy",
    category: "centres",
    icon: (
      <svg className="w-8 h-8 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    description: "3D laparoscopic hysterectomy, ovarian cystectomy, painless deliveries, and high-risk maternity care.",
  },
  {
    slug: "nephrology",
    name: "Nephrology & Renal Medicine",
    category: "centres",
    icon: (
      <svg className="w-8 h-8 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    description: "Comprehensive management of acute & chronic kidney diseases, hypertension, and continuous renal care.",
  },
  {
    slug: "dialysis",
    name: "24/7 Hemodialysis Unit",
    category: "speciality",
    icon: (
      <svg className="w-8 h-8 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    description: "Modern hemodialysis stations powered by dual-stage RO water plant with 24/7 operational capability.",
  },
  {
    slug: "general-surgery",
    name: "General & Laparoscopic Surgery",
    category: "speciality",
    icon: (
      <svg className="w-8 h-8 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    description: "Keyhole laparoscopic surgeries for gallbladder stones, hernia, appendix, and gastrointestinal conditions.",
  },
  {
    slug: "medicine",
    name: "Internal & General Medicine",
    category: "speciality",
    icon: (
      <svg className="w-8 h-8 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    description: "Clinical management of diabetes, chronic infections, hypertension, fever, and acute multisystem diseases.",
  },
  {
    slug: "icu",
    name: "24/7 Intensive Care Unit (ICU)",
    category: "centres",
    icon: (
      <svg className="w-8 h-8 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    description: "Multi-parameter monitors, invasive ventilators, and round-the-clock intensivist coverage in Gorakhpur.",
  },
  {
    slug: "pediatrics-nicu",
    name: "Pediatrics & Neonatal ICU",
    category: "speciality",
    icon: (
      <svg className="w-8 h-8 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    description: "Level-II NICU incubator care for newborns, child vaccinations, and pediatric inpatient medical care.",
  },
];

export default function AmritaSpecialtiesGrid() {
  const [activeTab, setActiveTab] = useState<"speciality" | "centres">("speciality");

  const filteredDepts =
    activeTab === "speciality"
      ? DEPARTMENTS_DATA
      : DEPARTMENTS_DATA.filter((d) => d.category === "centres");

  return (
    <section className="py-20 bg-[#f5f6f8] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Exact Amrita Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-slate-900 tracking-tight">
              Our Departments &amp; Centers
            </h2>
          </div>
          <Link
            href="/departments"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-900 hover:text-[#00548e] transition-colors group"
          >
            <span>View all Departments</span>
            <span className="w-7 h-7 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs group-hover:translate-x-1 transition-transform">
              ➔
            </span>
          </Link>
        </div>

        {/* Amrita Tabs */}
        <div className="flex items-center gap-8 border-b border-slate-200 mb-10 text-sm font-semibold">
          <button
            onClick={() => setActiveTab("speciality")}
            className={`pb-3 transition-all relative ${
              activeTab === "speciality"
                ? "text-slate-900 border-b-2 border-slate-900 font-bold"
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            Speciality Departments
          </button>
          <button
            onClick={() => setActiveTab("centres")}
            className={`pb-3 transition-all relative ${
              activeTab === "centres"
                ? "text-slate-900 border-b-2 border-slate-900 font-bold"
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            Centres of Excellences
          </button>
        </div>

        {/* Exact Amrita Department Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDepts.map((dept) => (
            <div
              key={dept.slug}
              className="bg-white p-7 rounded-sm border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 flex items-center justify-center">
                  {dept.icon}
                </div>
                <h3 className="font-serif font-bold text-lg text-slate-900 group-hover:text-[#00548e] transition-colors leading-snug">
                  {dept.name}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {dept.description}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={`/departments/${dept.slug}`}
                  className="text-xs font-bold text-slate-900 hover:text-[#00548e] inline-flex items-center gap-1.5"
                >
                  <span>Read more</span>
                  <span>➔</span>
                </Link>
                <Link
                  href={`/appointments?dept=${encodeURIComponent(dept.slug)}`}
                  className="text-[11px] font-semibold text-[#e87722] hover:underline"
                >
                  Book Slot
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
