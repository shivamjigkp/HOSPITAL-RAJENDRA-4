import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getDepartments } from "@/lib/payload-api";
import HeroSlider from "@/components/HeroSlider";
import SymptomTriageFinder from "@/components/SymptomTriageFinder";
import TechnologyShowcase from "@/components/TechnologyShowcase";
import AyushmanCalculator from "@/components/AyushmanCalculator";
import { DOCTORS } from "@/lib/data/doctors";

export const metadata: Metadata = {
  title: "Rajendra Hospital | Best Multi-Speciality Hospital in Gorakhpur",
  description:
    "Rajendra Hospital is a 100-bed NABH certified multi-speciality hospital in Gorakhpur. Center of Advanced URO & Gyane Laparoscopy, Stone Management, 24/7 ICU, Dialysis & Nephrology.",
};

const TESTIMONIALS = [
  {
    id: "1",
    name: "Z Ali",
    role: "Verified Patient",
    location: "Gorakhpur",
    content:
      "The surgical care and attention I received from Dr. Abhishek Yadav at Rajendra Hospital was exceptional. The laser stone procedure was painless and I was discharged the next day. The nursing staff and facilities are top-tier.",
    rating: 5,
    department: "Urology & Laser Care",
  },
  {
    id: "2",
    name: "Vijay Singh",
    role: "Verified Patient",
    location: "Deoria",
    content:
      "I am extremely satisfied with the treatment under Dr. Pramila Yadav. The laparoscopic surgery went smoothly, and the hospital environment is extremely clean, well-maintained, and peaceful. Highly recommend!",
    rating: 5,
    department: "Gynaecology & Laparoscopy",
  },
  {
    id: "3",
    name: "Dr. Ajay Kumar Mishra",
    role: "Medical Practitioner & Patient Family",
    location: "Kushinagar",
    content:
      "Rajendra Hospital maintains strict NABH benchmarks for infection control, patient safety, and clinical ethics. Their 24/7 ICU and Dialysis infrastructure is among the finest in Eastern Uttar Pradesh.",
    rating: 5,
    department: "Critical Care & Dialysis",
  },
];

const FAQS = [
  {
    q: "Is emergency & trauma care available 24/7 at Rajendra Hospital?",
    a: "Yes, our casualty department, 24/7 emergency ICU, trauma specialists, and ambulance services operate 24 hours a day, 7 days a week.",
  },
  {
    q: "How can I book an appointment with a senior consultant?",
    a: "You can book directly through our online appointment form or call our 24/7 hospital desk at +91 77030 82561 for instant slot confirmation.",
  },
  {
    q: "What advanced surgical procedures are performed at Rajendra Hospital?",
    a: "We specialize in Advanced Uro & Gyane 3D Laparoscopy, minimally invasive laser stone lithotripsy (PCNL, URS), hemodialysis, and general keyhole surgery.",
  },
  {
    q: "Is Rajendra Hospital NABH certified and Ayushman Bharat empanelled?",
    a: "Yes, Rajendra Hospital is NABH certified for clinical quality and patient safety, and is fully empanelled under the Ayushman Bharat PM-JAY scheme for 100% cashless treatment.",
  },
];

export default async function HomePage() {
  const departments = await getDepartments();

  return (
    <div className="flex flex-col gap-0 overflow-hidden bg-white text-slate-800">
      {/* ─────────────────────────────────────────────────────────────
          1. AMRITA-STYLE HERO SLIDER WITH FLOATING UTILITY CARDS
      ────────────────────────────────────────────────────────────── */}
      <HeroSlider />

      {/* ─────────────────────────────────────────────────────────────
          2. CLINICAL MILESTONES & TRUST STRIP
      ────────────────────────────────────────────────────────────── */}
      <section className="bg-[#0e2a47] text-white py-10 border-b border-blue-900 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-blue-800/60">
            <div className="space-y-1 p-3">
              <p className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-serif-heading">100+</p>
              <p className="text-xs sm:text-sm font-bold text-slate-300 uppercase tracking-wider">Hospital Beds</p>
              <p className="text-[11px] text-slate-400">Multi-Speciality Inpatient Care</p>
            </div>
            <div className="space-y-1 p-3">
              <p className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-serif-heading">NABH</p>
              <p className="text-xs sm:text-sm font-bold text-slate-300 uppercase tracking-wider">Quality Certified</p>
              <p className="text-[11px] text-slate-400">Strict Patient Safety Benchmarks</p>
            </div>
            <div className="space-y-1 p-3">
              <p className="text-3xl sm:text-4xl font-extrabold text-sky-400 font-serif-heading">24/7</p>
              <p className="text-xs sm:text-sm font-bold text-slate-300 uppercase tracking-wider">ICU &amp; Trauma</p>
              <p className="text-[11px] text-slate-400">Ventilators &amp; Critical Intensivists</p>
            </div>
            <div className="space-y-1 p-3">
              <p className="text-3xl sm:text-4xl font-extrabold text-rose-300 font-serif-heading">10+</p>
              <p className="text-xs sm:text-sm font-bold text-slate-300 uppercase tracking-wider">Clinical Depts</p>
              <p className="text-[11px] text-slate-400">Experienced Senior Consultants</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. CENTRES OF EXCELLENCE & SPECIALTIES
      ────────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
            <span className="badge-amrita-blue">
              CENTRES OF EXCELLENCE
            </span>
            <h2 className="section-title font-serif-heading">
              Advanced Laparoscopy &amp; Multi-Speciality Care
            </h2>
            <p className="section-desc mx-auto">
              Combining world-class surgical technology, experienced senior consultants, and NABH-accredited patient safety in Gorakhpur.
            </p>
          </div>

          {/* Asymmetric Bento / Department Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Flagship 1: Urology & Laparoscopy (8 Cols) */}
            <div className="md:col-span-8 bg-gradient-to-br from-[#0e2a47] via-[#103459] to-[#0a1e33] text-white rounded-3xl p-8 sm:p-10 border border-blue-900/60 shadow-xl flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-500/20 text-blue-200 rounded-full text-xs font-bold border border-blue-400/30">
                  FLAGSHIP SPECIALITY
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-amber-300 transition-colors font-serif-heading">
                  Center of Advanced URO &amp; Gyane Laparoscopy
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-sans-body">
                  Minimally invasive laser stone lithotripsy, PCNL, URS, Holmium laser prostate surgery, and advanced 3D laparoscopic gynaecological operations for quicker recovery and minimal pain.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {["Laser Stone Lithotripsy", "PCNL & URS", "Laparoscopic Hysterectomy", "TURP Prostate Care"].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-white/10 border border-white/15 text-slate-200 text-xs font-semibold rounded-lg backdrop-blur-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs sm:text-sm font-bold text-amber-400">
                  Under Leadership of Dr. Abhishek Yadav &amp; Dr. Pramila Yadav
                </span>
                <Link href="/departments/urology" className="text-sm font-extrabold text-blue-300 hover:text-white inline-flex items-center gap-1">
                  View Speciality Details →
                </Link>
              </div>
            </div>

            {/* Flagship 2: Nephrology & Dialysis (4 Cols) */}
            <div className="md:col-span-4 bg-white rounded-3xl p-8 border border-slate-200 shadow-lg flex flex-col justify-between group hover:border-blue-400 transition-all">
              <div className="space-y-4">
                <span className="badge-amrita-blue">
                  RENAL CARE
                </span>
                <h3 className="text-xl font-bold text-[#0e2a47] group-hover:text-[#0066cc] transition-colors font-serif-heading">
                  Nephrology &amp; 24/7 Dialysis Suite
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans-body">
                  State-of-the-art hemodialysis stations equipped with modern automated ultrafiltration and medical-grade double RO water purification plant.
                </p>
                <div className="p-3 bg-blue-50 rounded-xl border border-blue-100 text-xs text-[#0066cc] font-bold">
                  ✓ Supervised by Dr. Vijay Pratap Singh (DM Nephrology)
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">24/7 Dialysis Stations</span>
                <Link href="/departments/dialysis" className="text-xs font-bold text-[#0066cc] hover:underline">
                  Dialysis Unit →
                </Link>
              </div>
            </div>

            {/* Department Grid Cards (10 Specialties) */}
            {departments.slice(0, 6).map((dept) => (
              <div
                key={dept.id}
                className="md:col-span-4 amrita-card p-6 flex flex-col justify-between group amrita-card-hover"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl p-2.5 rounded-2xl bg-blue-50 border border-blue-100 group-hover:scale-110 transition-transform">
                      {dept.icon || "🩺"}
                    </span>
                    <span className="text-slate-300 group-hover:text-[#0066cc] font-bold text-sm transition-colors">
                      →
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-[#0e2a47] group-hover:text-[#0066cc] transition-colors font-serif-heading">
                    {dept.name}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 font-sans-body">
                    {dept.shortDescription}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href={`/departments/${dept.slug}`}
                    className="text-xs font-bold text-[#0066cc] group-hover:underline inline-flex items-center gap-1"
                  >
                    Speciality Services →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/departments"
              className="btn-amrita-secondary py-3.5 px-8 text-sm font-bold shadow-sm"
            >
              View All 10 Clinical Departments →
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. FIND A DOCTOR & SPECIALIST CONSULTATION
      ────────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
            <span className="badge-amrita-blue">
              EXPERIENCED MEDICAL FACULTY
            </span>
            <h2 className="section-title font-serif-heading">
              Our Senior Doctors &amp; Super-Specialists
            </h2>
            <p className="section-desc mx-auto">
              Meet our team of board-certified consultants and senior surgeons providing compassionate, evidence-based medical care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DOCTORS.map((doc) => (
              <div
                key={doc.id}
                className="amrita-card overflow-hidden flex flex-col justify-between group amrita-card-hover"
              >
                <div>
                  {/* Doctor Photo Frame */}
                  <div className="relative h-64 w-full bg-gradient-to-t from-slate-100 to-blue-50 overflow-hidden flex items-center justify-center border-b border-slate-100">
                    <Image
                      src={doc.photo}
                      alt={doc.name}
                      fill
                      unoptimized
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3">
                      <span className="badge-amrita-blue text-[11px] shadow-sm bg-white/90 backdrop-blur-sm">
                        {doc.days}
                      </span>
                    </div>
                  </div>

                  {/* Doctor Details */}
                  <div className="p-6 space-y-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#0e2a47] font-serif-heading group-hover:text-[#0066cc] transition-colors">
                        {doc.name}
                      </h3>
                      <p className="text-xs font-bold text-[#0066cc] mt-0.5">
                        {doc.specialization}
                      </p>
                    </div>

                    <p className="text-xs text-slate-600 leading-snug">
                      {doc.qualifications}
                    </p>

                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-1">
                      <div className="flex items-center justify-between text-slate-700">
                        <span className="font-semibold">OPD Timings:</span>
                        <span className="font-bold text-[#0e2a47]">{doc.timing}</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-500">
                        <span>Experience:</span>
                        <span className="font-medium">{doc.experience}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={`/appointments?doctor=${encodeURIComponent(doc.name)}`}
                    className="w-full btn-amrita-primary py-3 text-xs font-bold block text-center shadow-md"
                  >
                    Book Appointment with {doc.name.split(" ")[1]}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/doctors"
              className="btn-amrita-secondary py-3.5 px-8 text-sm font-bold"
            >
              View Full Doctor Directory &amp; OPD Schedules →
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. SURGICAL TECHNOLOGY & INFRASTRUCTURE
      ────────────────────────────────────────────────────────────── */}
      <TechnologyShowcase />

      {/* ─────────────────────────────────────────────────────────────
          6. AYUSHMAN BHARAT PM-JAY & CASHLESS HELP DESK
      ────────────────────────────────────────────────────────────── */}
      <AyushmanCalculator />

      {/* ─────────────────────────────────────────────────────────────
          7. INTERACTIVE SYMPTOM TRIAGE TOOL
      ────────────────────────────────────────────────────────────── */}
      <SymptomTriageFinder />

      {/* ─────────────────────────────────────────────────────────────
          8. PATIENT STORIES & VERIFIED GOOGLE TESTIMONIALS
      ────────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
            <span className="badge-amrita-amber">
              PATIENT EXPERIENCES
            </span>
            <h2 className="section-title font-serif-heading">
              Stories of Healing &amp; Hope
            </h2>
            <p className="section-desc mx-auto">
              Real feedback and experiences shared by our patients and families from across Gorakhpur and Eastern Uttar Pradesh.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((item) => (
              <div
                key={item.id}
                className="amrita-card p-8 flex flex-col justify-between space-y-6 border-slate-200"
              >
                <div className="space-y-4">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <span key={i} className="text-lg">★</span>
                    ))}
                    <span className="ml-2 text-xs font-bold text-slate-600">5.0 / 5.0</span>
                  </div>

                  <p className="text-slate-700 text-sm leading-relaxed italic font-sans-body">
                    &ldquo;{item.content}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-[#0e2a47] font-serif-heading">
                      {item.name}
                    </h4>
                    <p className="text-xs text-slate-500">
                      {item.role} • {item.location}
                    </p>
                  </div>
                  <span className="badge-amrita-blue text-[11px]">
                    {item.department}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          9. FREQUENTLY ASKED QUESTIONS (FAQS)
      ────────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-2">
            <span className="badge-amrita-blue">
              PATIENT QUERIES
            </span>
            <h2 className="section-title font-serif-heading">
              Frequently Asked Questions
            </h2>
            <p className="section-desc mx-auto">
              Find quick answers to common questions regarding admissions, appointments, and emergency services.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-sm space-y-2"
              >
                <h4 className="text-base font-bold text-[#0e2a47] font-serif-heading flex items-start gap-3">
                  <span className="text-[#0066cc] font-black">Q.</span>
                  <span>{faq.q}</span>
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed pl-7 font-sans-body">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          10. FINAL APPOINTMENT & EMERGENCY CTA STRIP
      ────────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-gradient-to-r from-[#0e2a47] via-[#103459] to-[#0e2a47] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-300">
              EXPERIENCE WORLD-CLASS HEALTHCARE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif-heading">
              Prioritize Your Health with Senior Medical Specialists
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Book your OPD consultation online or contact our 24/7 casualty desk for emergency assistance.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/appointments"
              className="btn-amrita-primary py-4 px-8 text-sm font-black shadow-xl"
            >
              Book OPD Appointment Now
            </Link>
            <a
              href="tel:+917703082561"
              className="btn-amrita-danger py-4 px-8 text-sm font-black shadow-xl"
            >
              📞 24/7 Emergency: +91 77030 82561
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
