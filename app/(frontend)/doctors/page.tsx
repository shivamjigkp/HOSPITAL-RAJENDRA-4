"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { DOCTORS } from "@/lib/data/doctors";

const FILTER_TABS = [
  { id: "all", label: "All Specialists" },
  { id: "urology", label: "🩺 Urology & Stone Care" },
  { id: "obstetrics-gynaecology", label: "🌸 Gynaecology & Maternity" },
  { id: "nephrology", label: "🧪 Nephrology & Dialysis" },
  { id: "general-surgery", label: "🔬 General & Laparoscopic" },
  { id: "medicine", label: "💊 Internal Medicine" },
];

export default function DoctorsPage() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredDoctors =
    activeTab === "all"
      ? DOCTORS
      : DOCTORS.filter((d) => d.departmentSlug === activeTab);

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* ─────────────────────────────────────────────────────────────
          1. AMRITA HERO HEADER
      ────────────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-[#001e42] via-[#002d62] to-[#00548e] text-white py-16 lg:py-20 relative overflow-hidden border-b-4 border-[#e87722]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <nav className="text-blue-200 text-xs font-bold uppercase tracking-wider" aria-label="Breadcrumb">
            <ol className="flex items-center justify-center gap-2">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li>/</li>
              <li className="text-white">Doctors Directory</li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#e87722] text-white rounded-md text-xs font-bold uppercase tracking-wider">
            <span>👨‍⚕️ Medical Leadership &amp; Consultants</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            Our Senior Doctors &amp; Specialists
          </h1>

          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Consult with highly qualified senior medical professionals holding postgraduate super-speciality degrees (MCh, DM, MS, MD) at Rajendra Hospital Gorakhpur.
          </p>

          {/* Specialty Filter Tabs */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-2">
            {FILTER_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-[#e87722] text-white shadow-lg scale-105"
                    : "bg-white/10 text-slate-100 hover:bg-white/20 border border-white/20"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. DOCTORS GRID (Amrita Profile Cards)
      ────────────────────────────────────────────────────────────── */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDoctors.map((doctor) => (
            <div
              key={doctor.id}
              className="amrita-card amrita-card-hover overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Doctor Portrait Frame */}
                <div className="relative h-64 w-full bg-gradient-to-b from-slate-100 to-blue-50/50 flex items-center justify-center overflow-hidden">
                  <Image
                    src={doctor.photo}
                    alt={doctor.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    priority
                  />
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 bg-emerald-600 text-white text-[11px] font-bold rounded-lg shadow-sm">
                      ✓ Available OPD
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 space-y-3">
                  <div>
                    <h3 className="font-serif font-bold text-xl text-[#002d62] group-hover:text-[#00548e] transition-colors">
                      {doctor.name}
                    </h3>
                    <p className="text-xs font-bold text-[#e87722] mt-0.5">
                      {doctor.specialization}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 font-medium">
                    {doctor.qualifications}
                  </p>

                  <div className="pt-3 pb-1 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Clinical Experience:</span>
                      <span className="font-semibold text-slate-800">{doctor.experience}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Consultation Days:</span>
                      <span className="font-semibold text-slate-800">{doctor.days}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">OPD Timings:</span>
                      <span className="font-bold text-[#00548e]">{doctor.timing}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 flex items-center gap-2">
                <Link
                  href={`/appointments?doctor=${encodeURIComponent(doctor.name)}&dept=${encodeURIComponent(doctor.departmentSlug)}`}
                  className="flex-1 btn-amrita-primary text-xs py-2.5 text-center"
                >
                  📅 Book OPD Slot
                </Link>
                <a
                  href="tel:+917703082561"
                  className="px-3 py-2.5 bg-slate-100 hover:bg-slate-200 text-[#002d62] rounded-xl text-xs font-bold border border-slate-200 transition-colors"
                  aria-label="Call Hospital"
                >
                  📞
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
