import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getDepartments } from "@/lib/payload-api";

export const metadata: Metadata = {
  title: "Clinical Departments | Rajendra Hospital Gorakhpur",
  description:
    "Explore 10+ specialized medical departments at Rajendra Hospital, including Advanced Urology, Gynaecology, Nephrology, Dialysis, General Surgery, and NICU.",
};

const deptBadges: Record<string, string[]> = {
  urology: ["Stone Management", "Laser Surgery", "PCNL / URS", "Prostate Care"],
  nephrology: ["Kidney Health", "Renal Care", "Hypertension", "Chronic Kidney Disease"],
  "obstetrics-gynaecology": ["Advanced Laparoscopy", "Maternity Care", "High-Risk Pregnancy"],
  dialysis: ["Modern Hemodialysis", "24/7 Support", "Sterile Water Plant"],
  "general-surgery": ["Minimally Invasive", "Appendix & Hernia", "Laparoscopic Surgery"],
  medicine: ["General Health", "Infectious Diseases", "Diabetes & Heart Care"],
  "pediatrics-nicu": ["Neonatal ICU", "Incubator Care", "Child Wellness"],
  radiology: ["Digital X-Ray", "Ultrasound Diagnostics", "Color Doppler"],
  pathology: ["Diagnostic Testing", "Complete Blood Count", "Biochemistry"],
  icu: ["24/7 Critical Care", "Ventilator Support", "Multi-parameter Monitors"],
};

export default async function DepartmentsPage() {
  const departments = await getDepartments();

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* ─────────────────────────────────────────────────────────────
          1. AMRITA HERO HEADER
      ────────────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-[#001e42] via-[#002d62] to-[#00548e] text-white py-16 lg:py-20 border-b-4 border-[#e87722]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <nav className="text-blue-200 text-xs font-bold uppercase tracking-wider" aria-label="Breadcrumb">
            <ol className="flex items-center justify-center gap-2">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li>/</li>
              <li className="text-white">Specialities &amp; Centres</li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#e87722] text-white rounded-md text-xs font-bold uppercase tracking-wider">
            <span>🏥 Multi-Disciplinary Healthcare</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Our Clinical Departments &amp; Centres
          </h1>

          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Comprehensive surgical and multi-speciality medical care led by experienced specialists with advanced laparoscopic, laser, and critical care infrastructure.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. DEPARTMENTS GRID
      ────────────────────────────────────────────────────────────── */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept: any) => (
            <div
              key={dept.id}
              className="amrita-card amrita-card-hover overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Department Image */}
                <div className="relative h-52 w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={`/departments/${dept.slug}.png`}
                    alt={dept.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="font-serif font-bold text-xl drop-shadow-sm">
                      {dept.name}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {dept.shortDescription || "Comprehensive diagnosis, surgical treatment, and post-care recovery."}
                  </p>

                  {/* Procedure Badges */}
                  {deptBadges[dept.slug] && (
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {deptBadges[dept.slug].map((badge) => (
                        <span
                          key={badge}
                          className="px-2.5 py-1 bg-slate-100 text-slate-700 text-[11px] font-medium rounded-md border border-slate-200/70"
                        >
                          ✓ {badge}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Card Footer Links */}
              <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between gap-3 mt-4">
                <Link
                  href={`/departments/${dept.slug}`}
                  className="text-xs font-bold text-[#00548e] hover:text-[#002d62] inline-flex items-center gap-1"
                >
                  View Details →
                </Link>
                <Link
                  href={`/appointments?dept=${encodeURIComponent(dept.slug)}`}
                  className="btn-amrita-primary text-xs py-2 px-3.5"
                >
                  Book OPD
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
