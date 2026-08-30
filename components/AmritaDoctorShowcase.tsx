"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { DOCTORS, Doctor } from "@/lib/data/doctors";

export default function AmritaDoctorShowcase() {
  const [selectedDept, setSelectedDept] = useState<string>("all");

  const filteredDoctors =
    selectedDept === "all"
      ? DOCTORS
      : DOCTORS.filter((d) => d.departmentSlug === selectedDept);

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-[#e87722] rounded-full text-xs font-bold uppercase tracking-wider">
              <span>👨‍⚕️ Senior Medical Consultants</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#002d62]">
              Meet Our Senior Specialists &amp; Surgeons
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Our multidisciplinary team of experienced surgeons and physicians brings decades of clinical expertise, compassion, and surgical precision to patient care.
            </p>
          </div>

          <Link
            href="/doctors"
            className="btn-amrita-secondary text-xs sm:text-sm py-2.5 px-5 self-start md:self-auto"
          >
            View All Doctors Schedule →
          </Link>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-100">
          <button
            onClick={() => setSelectedDept("all")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              selectedDept === "all"
                ? "bg-[#00548e] text-white shadow-sm"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            All Doctors ({DOCTORS.length})
          </button>
          <button
            onClick={() => setSelectedDept("urology")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              selectedDept === "urology"
                ? "bg-[#00548e] text-white shadow-sm"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            🩺 Urology &amp; Stone
          </button>
          <button
            onClick={() => setSelectedDept("obstetrics-gynaecology")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              selectedDept === "obstetrics-gynaecology"
                ? "bg-[#00548e] text-white shadow-sm"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            🌸 Gynaecology &amp; Maternity
          </button>
          <button
            onClick={() => setSelectedDept("nephrology")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              selectedDept === "nephrology"
                ? "bg-[#00548e] text-white shadow-sm"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            🧪 Nephrology &amp; Renal
          </button>
          <button
            onClick={() => setSelectedDept("general-surgery")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              selectedDept === "general-surgery"
                ? "bg-[#00548e] text-white shadow-sm"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            🔬 Laparoscopic Surgery
          </button>
          <button
            onClick={() => setSelectedDept("medicine")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              selectedDept === "medicine"
                ? "bg-[#00548e] text-white shadow-sm"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            💊 Internal Medicine
          </button>
        </div>

        {/* Doctor Cards Grid (Amrita Profile Card Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredDoctors.map((doc: Doctor) => (
            <div
              key={doc.id}
              className="amrita-card amrita-card-hover overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Doctor Photo Frame with subtle background */}
                <div className="relative h-64 w-full bg-gradient-to-b from-slate-100 via-blue-50/40 to-slate-100 flex items-center justify-center overflow-hidden">
                  <Image
                    src={doc.photo}
                    alt={doc.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 bg-emerald-600 text-white text-[11px] font-bold rounded-lg shadow-sm">
                      ✓ Available OPD
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6 space-y-3">
                  <div>
                    <h3 className="font-serif font-bold text-xl text-[#002d62] group-hover:text-[#00548e] transition-colors">
                      {doc.name}
                    </h3>
                    <p className="text-xs font-bold text-[#e87722] mt-0.5">
                      {doc.specialization}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 font-medium">
                    {doc.qualifications}
                  </p>

                  <div className="pt-2 pb-1 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Experience:</span>
                      <span className="font-semibold text-slate-800">{doc.experience}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">OPD Days:</span>
                      <span className="font-semibold text-slate-800">{doc.days}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">OPD Timing:</span>
                      <span className="font-bold text-[#00548e]">{doc.timing}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 flex items-center gap-2">
                <Link
                  href={`/appointments?doctor=${encodeURIComponent(doc.name)}&dept=${encodeURIComponent(doc.departmentSlug)}`}
                  className="flex-1 btn-amrita-primary text-xs py-2.5"
                >
                  📅 Book OPD Slot
                </Link>
                <a
                  href="tel:+917703082561"
                  className="px-3 py-2.5 bg-slate-100 hover:bg-slate-200 text-[#002d62] rounded-xl text-xs font-bold border border-slate-200 transition-colors"
                  aria-label="Call Hospital for Doctor"
                >
                  📞
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
