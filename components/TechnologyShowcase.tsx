"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const TECHNOLOGIES = [
  {
    id: "laser",
    name: "Holmium Laser Lithotripsy",
    category: "Urology & Stone Care",
    image: "/departments/urology.png",
    specs: ["Zero Surgical Incisions", "Pulverizes Stones to Fine Dust", "24-Hour Patient Discharge"],
    headline: "Painless Laser Kidney & Bladder Stone Fragmentation",
    description:
      "Our high-power Holmium laser allows precise endoscopic stone dusting without open surgery. Patients experience minimal blood loss, zero external scars, and swift discharge within 24 hours under the supervision of Dr. Abhishek Yadav.",
  },
  {
    id: "laparoscopy",
    name: "3D HD Laparoscopy Tower",
    category: "Gynaecology & General Surgery",
    image: "/departments/general-surgery.png",
    specs: ["High-Definition 3D Visual Depth", "Sub-Millimeter Surgical Precision", "Minimal Postoperative Pain"],
    headline: "Next-Gen Keyhole Laparoscopic Surgical Suite",
    description:
      "Utilized for advanced laparoscopic hysterectomy, ovarian cyst removal, appendix, and hernia mesh repair. Minimally invasive technique ensures less tissue trauma and speedy recovery.",
  },
  {
    id: "dialysis",
    name: "24/7 Hemodialysis & Dual RO",
    category: "Renal & Kidney Care",
    image: "/departments/dialysis.png",
    specs: ["Automated Ultrafiltration", "Ultra-Pure Sterile RO Water", "24/7 Dedicated Stations"],
    headline: "Advanced Hemodialysis for Chronic Kidney Disease (CKD)",
    description:
      "Equipped with modern hemodialysis stations and medical-grade water purification for optimal toxin clearance, continuous vital monitoring, and patient comfort.",
  },
  {
    id: "icu",
    name: "ICU Ventilators & Multi-Parameter Monitors",
    category: "Critical Care & Emergency",
    image: "/departments/icu.png",
    specs: ["Invasive & Non-Invasive Ventilation", "Continuous Hemodynamic Monitoring", "24/7 Intensivist Care"],
    headline: "Round-The-Clock Critical Life Support Infrastructure",
    description:
      "Our intensive care unit provides emergency ventilator support, defibrillators, central oxygen delivery, and on-call intensivists for acute trauma and critical medical emergencies.",
  },
];

export default function TechnologyShowcase() {
  const [activeId, setActiveId] = useState("laser");
  const tech = TECHNOLOGIES.find((t) => t.id === activeId) || TECHNOLOGIES[0];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-100 text-[#00828a] rounded-full text-xs font-bold uppercase tracking-wider">
            <span>🔬 Surgical &amp; Diagnostic Infrastructure</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#002d62]">
            High-Precision Medical Technology
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Equipped with international medical instrumentation to ensure painless procedures, patient safety, and accelerated recovery.
          </p>
        </div>

        {/* Technology Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {TECHNOLOGIES.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveId(item.id)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeId === item.id
                  ? "bg-[#00548e] text-white shadow-md shadow-blue-900/10"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Interactive Technology Card (Amrita Clean Style) */}
        <div className="amrita-card p-6 sm:p-10 border-slate-200 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Equipment Image (6 cols) */}
            <div className="lg:col-span-6 relative">
              <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-slate-50 flex items-center justify-center">
                <Image
                  src={tech.image}
                  alt={tech.name}
                  fill
                  className="object-cover object-center transition-all duration-500"
                  priority
                />
              </div>
            </div>

            {/* Content (6 cols) */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-[#00548e] rounded-md text-xs font-bold uppercase tracking-wider">
                {tech.category}
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#002d62] leading-tight">
                {tech.headline}
              </h3>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {tech.description}
              </p>

              {/* Specs Bullets */}
              <div className="space-y-2 pt-2">
                {tech.specs.map((spec, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-800 font-semibold">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs flex-shrink-0">
                      ✓
                    </span>
                    <span>{spec}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-3">
                <Link
                  href="/appointments"
                  className="btn-amrita-primary text-xs sm:text-sm py-2.5 px-5"
                >
                  📅 Consult Specialist
                </Link>
                <Link
                  href="/departments"
                  className="btn-amrita-secondary text-xs sm:text-sm py-2.5 px-5"
                >
                  Explore Departments →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
