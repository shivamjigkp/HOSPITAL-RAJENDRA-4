"use client";

import { useState } from "react";
import Link from "next/link";

export default function HeroInteractiveTabs() {
  const [activeTab, setActiveTab] = useState<"appointment" | "specialities" | "emergency" | "nabh">("appointment");

  const specialities = [
    { name: "Advanced Urology", desc: "Laser Stone Management & PCNL", slug: "urology", icon: "🫀" },
    { name: "Laparoscopic Gynaecology", desc: "Minimally Invasive Women's Surgery", slug: "obstetrics-gynaecology", icon: "🌸" },
    { name: "Nephrology & Dialysis", desc: "Modern Hemodialysis Center", slug: "nephrology", icon: "💧" },
    { name: "24/7 ICU & Critical Care", desc: "Ventilators & Multi-parameter Monitoring", slug: "icu", icon: "🏥" },
  ];

  return (
    <div className="relative rounded-3xl p-1 bg-gradient-to-b from-white/25 via-white/10 to-transparent shadow-2xl">
      <div className="relative rounded-[22px] overflow-hidden bg-slate-900/90 backdrop-blur-2xl border border-white/15 p-6 sm:p-7 flex flex-col justify-between min-h-[460px]">
        {/* Interactive Tab Switcher Navigation */}
        <div className="flex p-1 bg-slate-950/70 rounded-2xl border border-white/10 mb-6 overflow-x-auto gap-1">
          <button
            onClick={() => setActiveTab("appointment")}
            className={`flex-1 min-w-[90px] py-2 px-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === "appointment"
                ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            ⚡ Fast Booking
          </button>
          <button
            onClick={() => setActiveTab("specialities")}
            className={`flex-1 min-w-[90px] py-2 px-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === "specialities"
                ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            🔬 Specialities
          </button>
          <button
            onClick={() => setActiveTab("emergency")}
            className={`flex-1 min-w-[90px] py-2 px-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === "emergency"
                ? "bg-red-600 text-white shadow-md shadow-red-600/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            🚨 24/7 Emergency
          </button>
          <button
            onClick={() => setActiveTab("nabh")}
            className={`flex-1 min-w-[90px] py-2 px-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === "nabh"
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            🏆 NABH
          </button>
        </div>

        {/* Tab 1: Instant Appointment Quick Form */}
        {activeTab === "appointment" && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-blue-400 block mb-1">
                Direct OPD Request
              </span>
              <h3 className="text-xl font-extrabold text-white">
                Request Specialist Appointment
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Same-day consultation available. Our team will call to confirm.
              </p>
            </div>

            <div className="space-y-3 pt-1">
              <input
                type="text"
                placeholder="Patient Full Name"
                className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/15 text-white placeholder-slate-400 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                placeholder="Mobile Number (+91)"
                className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/15 text-white placeholder-slate-400 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select
                className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-white/15 text-white text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Department / Speciality</option>
                <option value="urology">Urology &amp; Stone Management</option>
                <option value="gynaecology">Obstetrics &amp; Gynaecology</option>
                <option value="dialysis">Nephrology &amp; Dialysis</option>
                <option value="surgery">General &amp; Laparoscopic Surgery</option>
                <option value="pediatrics">Pediatrics &amp; NICU</option>
                <option value="medicine">General Medicine</option>
              </select>
            </div>

            <Link
              href="/appointments"
              className="w-full btn-primary py-3 text-xs font-bold text-center block shadow-lg"
            >
              Continue to Complete Booking →
            </Link>
          </div>
        )}

        {/* Tab 2: Specialities Explorer */}
        {activeTab === "specialities" && (
          <div className="space-y-3 animate-in fade-in duration-200">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-blue-400 block mb-1">
                Clinical Excellence
              </span>
              <h3 className="text-lg font-extrabold text-white">
                Core Medical Specialities
              </h3>
            </div>
            <div className="space-y-2 pt-1">
              {specialities.map((item) => (
                <Link
                  key={item.slug}
                  href={`/departments/${item.slug}`}
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group"
                >
                  <span className="text-2xl p-1 bg-white/5 rounded-lg group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                  <div className="flex-1">
                    <p className="text-xs font-bold text-white group-hover:text-blue-400 transition-colors">
                      {item.name}
                    </p>
                    <p className="text-[11px] text-slate-400">{item.desc}</p>
                  </div>
                  <span className="text-slate-400 text-xs font-bold group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
              ))}
            </div>
            <Link
              href="/departments"
              className="block text-center text-xs font-bold text-blue-400 hover:text-blue-300 pt-2"
            >
              View All 10 Departments →
            </Link>
          </div>
        )}

        {/* Tab 3: Emergency & Critical Care */}
        {activeTab === "emergency" && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-red-400 block mb-1">
                  24/7 Rapid Response
                </span>
                <h3 className="text-lg font-extrabold text-white">
                  Emergency &amp; Trauma Hotline
                </h3>
              </div>
              <span className="p-2.5 bg-red-500/20 text-red-400 rounded-xl border border-red-500/30 text-xl">
                🚑
              </span>
            </div>

            <a
              href="tel:+917703082561"
              className="block p-4 rounded-2xl bg-gradient-to-r from-red-600 to-rose-700 text-white shadow-lg shadow-red-600/30 hover:scale-[1.02] transition-transform text-center group"
            >
              <span className="text-[11px] text-red-100 block font-medium">Click to Call (24 Hours Open)</span>
              <span className="text-2xl font-black tracking-tight block mt-0.5">
                +91 77030 82561
              </span>
            </a>

            <div className="space-y-2 text-xs text-slate-300 pt-1">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                <span>Round-the-clock intensive care &amp; ventilator support</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                <span>Immediate emergency doctor consultation on arrival</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                <span>24/7 Diagnostics, Laboratory &amp; Blood Support</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: NABH & Quality Standards */}
        {activeTab === "nabh" && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-400 block mb-1">
                National Accreditation
              </span>
              <h3 className="text-lg font-extrabold text-white">
                NABH Certified Hospital
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Recognized for patient safety, clinical quality, and modern healthcare benchmarks.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950/60 to-slate-900 border border-emerald-500/30 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold">
                <span>✓</span>
                <span>100-Beded Multi-Speciality Facility</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold">
                <span>✓</span>
                <span>Stringent Hospital Infection Control</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold">
                <span>✓</span>
                <span>Ayushman Bharat Yojana Affiliated</span>
              </div>
            </div>

            <Link
              href="/about"
              className="w-full btn-emerald py-3 text-xs font-bold text-center block"
            >
              Learn More About Our Accreditations →
            </Link>
          </div>
        )}

        {/* Hospital Address Footnote */}
        <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-slate-400 flex items-center gap-2">
          <span>📍</span>
          <span>Deoria Road, Near M.M.M. Engg. College, Gorakhpur</span>
        </div>
      </div>
    </div>
  );
}
