"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const DEPARTMENTS = [
  { name: "Advanced Urology", slug: "urology", desc: "Laser Stone Lithotripsy & PCNL", icon: "🩺" },
  { name: "Nephrology", slug: "nephrology", desc: "Renal Care & Kidney Health", icon: "🫀" },
  { name: "Obstetrics & Gynaecology", slug: "obstetrics-gynaecology", desc: "Maternity & 3D Laparoscopy", icon: "👩‍⚕️" },
  { name: "Hemodialysis Unit", slug: "dialysis", desc: "24/7 Dialysis Stations", icon: "💉" },
  { name: "General & Laparoscopic Surgery", slug: "general-surgery", desc: "Minimally Invasive Surgery", icon: "🔬" },
  { name: "General Medicine", slug: "medicine", desc: "Internal Medicine & OPD Care", icon: "💊" },
  { name: "Pediatrics & NICU", slug: "pediatrics-nicu", desc: "Neonatal & Child Healthcare", icon: "👶" },
  { name: "Radiology & Imaging", slug: "radiology", desc: "Digital X-Ray & USG", icon: "🩻" },
  { name: "Pathology & Lab Diagnostics", slug: "pathology", desc: "Accurate Clinical Diagnostics", icon: "🧪" },
  { name: "24/7 ICU & Critical Care", slug: "icu", desc: "Intensivists & Ventilators", icon: "🏥" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [deptOpen, setDeptOpen] = useState(false);
  const [patientServicesOpen, setPatientServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDeptOpen(false);
    setPatientServicesOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top Amrita Hospital Utility & Emergency Bar */}
      <div className="bg-[#0e2a47] text-white text-xs py-2 px-4 border-b border-blue-900/60 relative z-50">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 font-bold text-rose-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500" />
              </span>
              24x7 Emergency Casualty:
            </span>
            <a
              href="tel:+917703082561"
              className="font-extrabold text-white hover:text-amber-300 transition-colors tracking-wide text-[13px]"
            >
              +91 77030 82561
            </a>
            <span className="hidden sm:inline-block text-blue-300/40">|</span>
            <span className="hidden sm:inline-flex items-center gap-1 text-slate-300">
              📍 Deoria Road, Near MMMUT, Gorakhpur
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="inline-flex items-center gap-1 bg-emerald-500/20 text-emerald-300 px-2.5 py-0.5 rounded-full font-bold border border-emerald-400/30 text-[11px]">
              ✓ NABH Accredited
            </span>
            <span className="hidden md:inline-flex items-center gap-1 bg-amber-500/20 text-amber-300 px-2.5 py-0.5 rounded-full font-bold border border-amber-400/30 text-[11px]">
              Ayushman PMJAY Empanelled
            </span>
            <Link
              href="/appointments"
              className="hidden lg:inline-flex text-slate-200 hover:text-white font-semibold transition-colors"
            >
              OPD Timings
            </Link>
          </div>
        </div>
      </div>

      {/* Main Amrita-Style Sticky Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/98 backdrop-blur-md shadow-lg shadow-slate-900/5 py-2.5 border-b border-slate-200"
            : "bg-white py-3.5 border-b border-slate-100 shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Official Hospital Brand Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group"
              aria-label="Rajendra Hospital - Home"
            >
              <div className="relative h-14 w-52 sm:w-64 flex-shrink-0 flex items-center">
                <Image
                  src="/images/Logo-Primary.png"
                  alt="Rajendra Hospital Gorakhpur"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1">
              <Link
                href="/"
                className={`px-3.5 py-2 rounded-xl text-[13px] font-bold tracking-wide transition-colors ${
                  pathname === "/"
                    ? "text-[#0066cc] bg-blue-50/80 font-extrabold"
                    : "text-[#0e2a47] hover:text-[#0066cc] hover:bg-slate-50"
                }`}
              >
                Home
              </Link>

              <Link
                href="/about"
                className={`px-3.5 py-2 rounded-xl text-[13px] font-bold tracking-wide transition-colors ${
                  pathname === "/about"
                    ? "text-[#0066cc] bg-blue-50/80 font-extrabold"
                    : "text-[#0e2a47] hover:text-[#0066cc] hover:bg-slate-50"
                }`}
              >
                About Us
              </Link>

              {/* Centres of Excellence / Departments Mega Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setDeptOpen(true)}
                onMouseLeave={() => setDeptOpen(false)}
              >
                <button
                  className={`px-3.5 py-2 rounded-xl text-[13px] font-bold tracking-wide inline-flex items-center gap-1.5 transition-colors ${
                    pathname.startsWith("/departments")
                      ? "text-[#0066cc] bg-blue-50/80 font-extrabold"
                      : "text-[#0e2a47] hover:text-[#0066cc] hover:bg-slate-50"
                  }`}
                  aria-expanded={deptOpen}
                >
                  Specialties &amp; Depts
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      deptOpen ? "rotate-180 text-[#0066cc]" : "text-slate-500"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {deptOpen && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[660px] bg-white rounded-2xl shadow-2xl border border-slate-200 p-4 grid grid-cols-2 gap-2 z-[100] animate-in fade-in slide-in-from-top-2 duration-200">
                    {DEPARTMENTS.map((dept) => (
                      <Link
                        key={dept.slug}
                        href={`/departments/${dept.slug}`}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-blue-50/80 border border-transparent hover:border-blue-100 transition-all group"
                      >
                        <span className="text-2xl p-1.5 bg-slate-100 rounded-lg group-hover:scale-110 transition-transform flex-shrink-0">
                          {dept.icon}
                        </span>
                        <div>
                          <p className="text-xs font-bold text-[#0e2a47] group-hover:text-[#0066cc] transition-colors">
                            {dept.name}
                          </p>
                          <p className="text-[11px] text-slate-500 leading-snug">
                            {dept.desc}
                          </p>
                        </div>
                      </Link>
                    ))}
                    <div className="col-span-2 mt-2 pt-3 border-t border-slate-100 flex items-center justify-between px-2">
                      <span className="text-xs text-slate-500 font-medium">
                        10+ Specialized Clinical Centres in Gorakhpur
                      </span>
                      <Link
                        href="/departments"
                        className="text-xs font-extrabold text-[#0066cc] hover:underline inline-flex items-center gap-1"
                      >
                        All Departments →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/doctors"
                className={`px-3.5 py-2 rounded-xl text-[13px] font-bold tracking-wide transition-colors ${
                  pathname === "/doctors"
                    ? "text-[#0066cc] bg-blue-50/80 font-extrabold"
                    : "text-[#0e2a47] hover:text-[#0066cc] hover:bg-slate-50"
                }`}
              >
                Find Doctors
              </Link>

              {/* Patient Care & Schemes Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setPatientServicesOpen(true)}
                onMouseLeave={() => setPatientServicesOpen(false)}
              >
                <button
                  className="px-3.5 py-2 rounded-xl text-[13px] font-bold tracking-wide text-[#0e2a47] hover:text-[#0066cc] hover:bg-slate-50 inline-flex items-center gap-1.5 transition-colors"
                  aria-expanded={patientServicesOpen}
                >
                  Patient Care
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      patientServicesOpen ? "rotate-180 text-[#0066cc]" : "text-slate-500"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {patientServicesOpen && (
                  <div className="absolute left-0 top-full mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-slate-200 p-2 space-y-1 z-[100] animate-in fade-in slide-in-from-top-2 duration-200">
                    <Link
                      href="/appointments"
                      className="block px-3 py-2 rounded-lg text-xs font-bold text-slate-800 hover:bg-blue-50 hover:text-[#0066cc]"
                    >
                      📅 Book OPD Appointment
                    </Link>
                    <Link
                      href="/#ayushman"
                      className="block px-3 py-2 rounded-lg text-xs font-bold text-slate-800 hover:bg-blue-50 hover:text-[#0066cc]"
                    >
                      💳 Ayushman Bharat PMJAY Desk
                    </Link>
                    <Link
                      href="/#triage"
                      className="block px-3 py-2 rounded-lg text-xs font-bold text-slate-800 hover:bg-blue-50 hover:text-[#0066cc]"
                    >
                      🩺 Symptom Triage Tool
                    </Link>
                    <Link
                      href="/gallery"
                      className="block px-3 py-2 rounded-lg text-xs font-bold text-slate-800 hover:bg-blue-50 hover:text-[#0066cc]"
                    >
                      🏥 Facilities &amp; OT Gallery
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/gallery"
                className={`px-3.5 py-2 rounded-xl text-[13px] font-bold tracking-wide transition-colors ${
                  pathname === "/gallery"
                    ? "text-[#0066cc] bg-blue-50/80 font-extrabold"
                    : "text-[#0e2a47] hover:text-[#0066cc] hover:bg-slate-50"
                }`}
              >
                Gallery
              </Link>

              <Link
                href="/contact"
                className={`px-3.5 py-2 rounded-xl text-[13px] font-bold tracking-wide transition-colors ${
                  pathname === "/contact"
                    ? "text-[#0066cc] bg-blue-50/80 font-extrabold"
                    : "text-[#0e2a47] hover:text-[#0066cc] hover:bg-slate-50"
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Right Action Call & Booking Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+917703082561"
                className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#0e2a47] bg-slate-100 hover:bg-slate-200 px-3.5 py-2.5 rounded-xl transition-colors border border-slate-200"
              >
                <svg className="w-4 h-4 text-rose-600 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                Call Desk
              </a>

              <Link
                href="/appointments"
                className="btn-amrita-primary py-2.5 px-5 text-xs font-black shadow-md"
              >
                Book Appointment
              </Link>
            </div>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-800 hover:bg-slate-100 active:scale-95 transition-all border border-slate-200"
              aria-label="Toggle Menu"
            >
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-5 space-y-2 shadow-2xl animate-in slide-in-from-top duration-200">
            <Link
              href="/"
              className="block px-4 py-2.5 rounded-xl text-sm font-bold text-[#0e2a47] hover:bg-blue-50 hover:text-[#0066cc]"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-4 py-2.5 rounded-xl text-sm font-bold text-[#0e2a47] hover:bg-blue-50 hover:text-[#0066cc]"
            >
              About Us
            </Link>
            <Link
              href="/departments"
              className="block px-4 py-2.5 rounded-xl text-sm font-bold text-[#0e2a47] hover:bg-blue-50 hover:text-[#0066cc]"
            >
              Specialties &amp; Departments (10 Depts)
            </Link>
            <Link
              href="/doctors"
              className="block px-4 py-2.5 rounded-xl text-sm font-bold text-[#0e2a47] hover:bg-blue-50 hover:text-[#0066cc]"
            >
              Find Doctors
            </Link>
            <Link
              href="/gallery"
              className="block px-4 py-2.5 rounded-xl text-sm font-bold text-[#0e2a47] hover:bg-blue-50 hover:text-[#0066cc]"
            >
              Hospital Gallery &amp; Facilities
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-2.5 rounded-xl text-sm font-bold text-[#0e2a47] hover:bg-blue-50 hover:text-[#0066cc]"
            >
              Contact &amp; Emergency Location
            </Link>

            <div className="pt-3 border-t border-slate-100 space-y-2">
              <Link
                href="/appointments"
                className="w-full btn-amrita-primary py-3 text-center block text-xs font-black"
              >
                Book Appointment Online
              </Link>
              <a
                href="tel:+917703082561"
                className="w-full text-center py-2.5 text-xs font-extrabold text-rose-700 bg-rose-50 rounded-xl block border border-rose-200"
              >
                📞 Emergency Helpline: +91 77030 82561
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
