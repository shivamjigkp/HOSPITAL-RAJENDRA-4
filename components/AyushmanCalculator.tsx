"use client";

import { useState } from "react";
import Link from "next/link";

const PROCEDURES = [
  {
    id: "stone",
    name: "Kidney Stone Laser Removal (PCNL / URS)",
    category: "Urology",
    coverage: "100% Cashless under Ayushman Bharat PM-JAY",
    package: "Pre-op diagnostics, laser surgery, hospital stay, and medicines included.",
    docs: ["Aadhaar Card", "Ration Card or Ayushman Golden Card", "Doctor Prescription"],
  },
  {
    id: "gynae",
    name: "Laparoscopic Hysterectomy / Ovarian Surgery",
    category: "Gynaecology",
    coverage: "100% Cashless under Ayushman Bharat PM-JAY",
    package: "3D Laparoscopic procedure, OT charges, medicines, and post-op care covered.",
    docs: ["Aadhaar Card", "Ayushman PM-JAY Card", "USG / Diagnostic Reports"],
  },
  {
    id: "delivery",
    name: "Maternity Care (Normal & Caesarean LSCS)",
    category: "Obstetrics",
    coverage: "Subsidized / Cashless Govt Scheme Coverage",
    package: "Delivery, pediatric checkup, mother & newborn hospital stay covered.",
    docs: ["Mother's Aadhaar Card", "Ayushman Card / MCP Card", "Antenatal Records"],
  },
  {
    id: "surgery",
    name: "Hernia / Gallbladder / Appendix Surgery",
    category: "General Surgery",
    coverage: "100% Cashless under Ayushman Bharat PM-JAY",
    package: "Minimally invasive keyhole surgery, surgical mesh, medicines, and bed stay.",
    docs: ["Aadhaar Card", "Ration Card with Name", "Ayushman Card"],
  },
  {
    id: "dialysis",
    name: "Maintenance Hemodialysis Sessions",
    category: "Nephrology",
    coverage: "100% Cashless under National Dialysis Programme",
    package: "Dialyzer, sterile water filtration, continuous monitoring covered.",
    docs: ["Aadhaar Card", "Dialysis Registration / Nephrology Prescription"],
  },
];

export default function AyushmanCalculator() {
  const [selected, setSelected] = useState("stone");
  const current = PROCEDURES.find((p) => p.id === selected) || PROCEDURES[0];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold uppercase tracking-wider">
            <span>💳 PM-JAY Cashless Guide</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#002d62]">
            Check Cashless Scheme Coverage
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Select a procedure to check Ayushman Bharat (PM-JAY) coverage details, covered hospital package services, and documents required.
          </p>
        </div>

        {/* Procedure Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {PROCEDURES.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelected(item.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                selected === item.id
                  ? "bg-[#00548e] text-white shadow-md"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
              }`}
            >
              {item.name.split("(")[0]}
            </button>
          ))}
        </div>

        {/* Scheme Details Card */}
        <div className="amrita-card p-6 sm:p-10 border-slate-200 bg-gradient-to-br from-emerald-50/30 to-white shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-600 text-white rounded-md text-xs font-bold uppercase tracking-wider">
                {current.coverage}
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#002d62]">
                {current.name}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {current.package}
              </p>

              <div className="pt-2">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Documents Required at Hospital Desk:
                </span>
                <div className="flex flex-wrap gap-2">
                  {current.docs.map((doc, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white text-slate-800 text-xs font-semibold rounded-lg border border-slate-200 shadow-sm"
                    >
                      📄 {doc}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <span className="text-xs font-bold text-[#002d62]">
                Need Admission Assistance?
              </span>
              <p className="text-xs text-slate-500">
                Our Ayushman Mitra helpdesk assists with card verification and paperless admissions.
              </p>
              <a
                href="tel:+917703082561"
                className="btn-amrita-gold text-xs py-2.5 text-center block shadow-sm"
              >
                📞 Call Ayushman Desk
              </a>
              <Link
                href="/appointments"
                className="btn-amrita-secondary text-xs py-2.5 text-center block"
              >
                Book Consultation Slot →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
