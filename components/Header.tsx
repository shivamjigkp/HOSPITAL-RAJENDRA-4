"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [deptDropdownOpen, setDeptDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      {/* ─────────────────────────────────────────────────────────────
          1. TOP UTILITY BAR (Exact Amrita Kochi Style)
      ────────────────────────────────────────────────────────────── */}
      <div className="border-b border-slate-100 py-2.5 px-4 sm:px-8 lg:px-12 flex items-center justify-between text-xs text-slate-700">
        {/* Left: Brand Logo in Amrita Orange Box */}
        <Link href="/" className="flex items-center gap-3">
          <div className="bg-[#e87722] text-white px-3 py-1.5 rounded-sm flex flex-col items-center justify-center font-bold leading-tight shadow-sm">
            <span className="text-[11px] tracking-wider uppercase font-black">RAJENDRA</span>
            <span className="text-[9px] tracking-widest uppercase font-semibold">HOSPITAL</span>
            <span className="text-[7px] text-orange-100 font-normal tracking-tight">GORAKHPUR</span>
          </div>
          <div className="hidden sm:block">
            <span className="font-serif text-sm font-bold text-[#002d62] block leading-none">
              Rajendra Hospital
            </span>
            <span className="text-[10px] text-slate-400 font-medium">Embrace Good Health</span>
          </div>
        </Link>

        {/* Right: Location selector, Patient Login, Booking Assistance Button */}
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-1.5 font-medium text-slate-700 cursor-pointer hover:text-[#00548e]">
            <span>📍</span>
            <span className="font-semibold">Gorakhpur</span>
            <span className="text-[10px]">▼</span>
          </div>

          <span className="text-slate-300 hidden sm:inline">|</span>

          <Link
            href="/appointments"
            className="hidden sm:flex items-center gap-1.5 text-slate-700 hover:text-[#00548e] font-medium"
          >
            <span>👤</span>
            <span>Patient Portal</span>
          </Link>

          <Link
            href="/appointments"
            className="px-4 sm:px-5 py-2 rounded-full border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition-all text-xs font-bold tracking-tight shadow-sm"
          >
            Booking Assistance
          </Link>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. MAIN NAVIGATION ROW (Exact Amrita Kochi Menu)
      ────────────────────────────────────────────────────────────── */}
      <div className="px-4 sm:px-8 lg:px-12 py-3 flex items-center justify-between">
        <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold text-slate-800">
          <Link href="/" className="hover:text-[#00548e] transition-colors">
            Home
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setAboutDropdownOpen(true)}
            onMouseLeave={() => setAboutDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-[#00548e] transition-colors py-1">
              <span>About Us</span>
              <span className="text-[9px]">▼</span>
            </button>

            {aboutDropdownOpen && (
              <div className="absolute top-full left-0 w-56 bg-white border border-slate-200 rounded-lg shadow-xl p-2 z-50 animate-in fade-in duration-150">
                <Link
                  href="/about"
                  className="block px-3 py-2 text-xs text-slate-700 hover:bg-slate-50 hover:text-[#00548e] rounded-md font-medium"
                >
                  About Rajendra Hospital
                </Link>
                <Link
                  href="/gallery"
                  className="block px-3 py-2 text-xs text-slate-700 hover:bg-slate-50 hover:text-[#00548e] rounded-md font-medium"
                >
                  Hospital Infrastructure
                </Link>
                <Link
                  href="/about"
                  className="block px-3 py-2 text-xs text-slate-700 hover:bg-slate-50 hover:text-[#00548e] rounded-md font-medium"
                >
                  NABH Accreditation
                </Link>
              </div>
            )}
          </div>

          <Link href="/about" className="hover:text-[#00548e] transition-colors">
            Our Facility
          </Link>

          <Link href="/doctors" className="hover:text-[#00548e] transition-colors">
            Find a Doctor
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setDeptDropdownOpen(true)}
            onMouseLeave={() => setDeptDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-[#00548e] transition-colors py-1">
              <span>Our Departments</span>
              <span className="text-[9px]">▼</span>
            </button>

            {deptDropdownOpen && (
              <div className="absolute top-full left-0 w-72 bg-white border border-slate-200 rounded-lg shadow-xl p-3 z-50 grid grid-cols-1 gap-1 animate-in fade-in duration-150">
                {[
                  { name: "Advanced Urology & Stone Care", slug: "urology" },
                  { name: "Obstetrics & Gynaecology", slug: "obstetrics-gynaecology" },
                  { name: "Nephrology & Renal Care", slug: "nephrology" },
                  { name: "24/7 Hemodialysis Unit", slug: "dialysis" },
                  { name: "General & Laparoscopic Surgery", slug: "general-surgery" },
                  { name: "Internal & General Medicine", slug: "medicine" },
                  { name: "Pediatrics & Neonatal ICU", slug: "pediatrics-nicu" },
                  { name: "Pathology & Laboratory", slug: "pathology" },
                  { name: "Radiology & Ultrasound", slug: "radiology" },
                  { name: "24/7 ICU & Critical Care", slug: "icu" },
                ].map((dept) => (
                  <Link
                    key={dept.slug}
                    href={`/departments/${dept.slug}`}
                    className="px-2.5 py-1.5 text-[11px] text-slate-700 hover:bg-slate-50 hover:text-[#00548e] rounded-md font-medium"
                  >
                    • {dept.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/appointments" className="hover:text-[#00548e] transition-colors">
            Ayushman PM-JAY
          </Link>

          <Link href="/contact" className="hover:text-[#00548e] transition-colors">
            Contact Us
          </Link>

          <a
            href="tel:+917703082561"
            className="flex items-center gap-1 hover:text-[#00548e] transition-colors"
          >
            <span>Call Us: +91 77030 82561</span>
          </a>
        </nav>

        {/* Right Search Icon & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/appointments"
            className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:border-slate-400 transition-colors text-xs"
            aria-label="Search"
          >
            🔍
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-800"
            aria-label="Toggle navigation"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 p-4 space-y-3 text-xs font-semibold text-slate-800">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block py-2">Home</Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block py-2">About Us</Link>
          <Link href="/doctors" onClick={() => setMobileMenuOpen(false)} className="block py-2">Find a Doctor</Link>
          <Link href="/departments" onClick={() => setMobileMenuOpen(false)} className="block py-2">Our Departments</Link>
          <Link href="/gallery" onClick={() => setMobileMenuOpen(false)} className="block py-2">Hospital Gallery</Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block py-2">Contact Us</Link>
          <a href="tel:+917703082561" className="block py-2 text-[#e87722] font-bold">24/7 Helpline: +91 77030 82561</a>
        </div>
      )}
    </header>
  );
}
