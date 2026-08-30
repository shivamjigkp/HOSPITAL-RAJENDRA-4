import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Rajendra Hospital Gorakhpur",
  description:
    "Learn about Rajendra Hospital — a 100-bed NABH certified multi-speciality hospital in Gorakhpur managed by Dr. Abhishek Yadav. Center of Advanced Uro & Gyane Laparoscopy.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* ─────────────────────────────────────────────────────────────
          1. AMRITA EDITORIAL HERO BANNER
      ────────────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-[#001e42] via-[#002d62] to-[#00548e] text-white py-16 lg:py-20 relative overflow-hidden border-b-4 border-[#e87722]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="text-blue-200 text-xs font-bold uppercase tracking-wider mb-4" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li>/</li>
              <li className="text-white">About Us</li>
            </ol>
          </nav>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#e87722] text-white rounded-md text-xs font-bold uppercase tracking-wider mb-3">
            <span>★ Hospital Heritage &amp; Leadership</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
            About Rajendra Hospital
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-2xl leading-relaxed">
            Center of Advanced URO &amp; Gyane Laparoscopy &amp; Stone Management — delivering exemplary clinical outcomes with state-of-the-art medical technology in Gorakhpur.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. MAIN NARRATIVE & LEADERSHIP STORY
      ────────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Story Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-[#00548e] rounded-full text-xs font-bold uppercase tracking-wider">
                <span>100-Bed Multi-Speciality Facility</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#002d62] leading-tight">
                Pioneering Laparoscopic Surgery &amp; Compassionate Patient Care
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                <strong className="text-[#002d62]">Rajendra Hospital</strong> is a 100-Bedded Multi-Speciality Hospital located at a prime location in Gorakhpur on Deoria Road, Near M.M.M. Engineering College. Under the medical leadership of <strong className="text-[#002d62]">Dr. Abhishek Yadav</strong> (Senior Urologist &amp; Laparoscopic Surgeon) and <strong className="text-[#002d62]">Dr. Pramila Yadav</strong> (Senior Obstetrician &amp; Gynaecologist), our institution has grown into a regional center of clinical and surgical excellence.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                We specialize in laser kidney stone management (PCNL, URS, Holmium Laser Lithotripsy), 3D laparoscopic gynaecological surgery, 24/7 hemodialysis, and round-the-clock intensive care (ICU).
              </p>

              {/* 6 Key Clinical Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Experienced Senior Surgeons",
                  "NABH Certified Patient Safety",
                  "24/7 ICU & Critical Life Support",
                  "Modern Hemodialysis Unit",
                  "Same-Day Specialist Consultation",
                  "100% Cashless Ayushman Bharat",
                ].map((pillar) => (
                  <div key={pillar} className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-800 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold flex-shrink-0">
                      ✓
                    </span>
                    <span>{pillar}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hospital Milestone Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-100">
                <Image
                  src="/gallery/hospital-event.jpg"
                  alt="Rajendra Hospital NABH Accreditation Milestone"
                  width={600}
                  height={500}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001e42] via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1.5">
                  <span className="px-3 py-1 bg-[#e87722] text-white text-xs font-bold rounded-md inline-block">
                    ⭐ NABH Quality Accredited
                  </span>
                  <p className="font-serif text-lg font-bold text-white">National Benchmark in Healthcare Quality</p>
                  <p className="text-xs text-slate-300">Deoria Road, Near MMMUT, Gorakhpur</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. MISSION, VISION & VALUES (Amrita 3-Column Box)
      ────────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#f0f4f8] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="amrita-card p-8 bg-white space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#00548e] flex items-center justify-center text-2xl">
                🎯
              </div>
              <h3 className="font-serif text-xl font-bold text-[#002d62]">Our Mission</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                To provide advanced surgical, urological, and multi-speciality medical care with empathy, highest clinical standards, and accessible affordability for families in Eastern UP.
              </p>
            </div>

            <div className="amrita-card p-8 bg-white space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#e87722] flex items-center justify-center text-2xl">
                👁️
              </div>
              <h3 className="font-serif text-xl font-bold text-[#002d62]">Our Vision</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                To be the most trusted center of excellence for minimally invasive laparoscopic surgeries, stone management, and critical care in the region.
              </p>
            </div>

            <div className="amrita-card p-8 bg-white space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-2xl">
                ⚖️
              </div>
              <h3 className="font-serif text-xl font-bold text-[#002d62]">Core Values</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Patient dignity, clinical integrity, transparent communication, continuous technological modernization, and round-the-clock dedication to saving lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. AYUSHMAN BHARAT SCHEME OUTREACH
      ────────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 relative">
              <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden shadow-md border border-slate-200">
                <Image
                  src="/about/ayushman-bharat.jpg"
                  alt="Ayushman Bharat Healthcare Outreach"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold uppercase tracking-wider">
                <span>Government Scheme Support</span>
              </div>
              <h3 className="font-serif text-3xl font-bold text-[#002d62]">
                Empanelled Under Ayushman Bharat (PM-JAY)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Rajendra Hospital actively participates in national public health initiatives. Eligible families can access surgical treatments, hospital stays, and post-operative medications with 100% cashless facilities under the Pradhan Mantri Jan Arogya Yojana.
              </p>
              <div className="pt-2 flex items-center gap-4">
                <Link href="/appointments" className="btn-amrita-primary text-xs sm:text-sm py-2.5 px-5">
                  Book Ayushman Consultation →
                </Link>
                <a href="tel:+917703082561" className="text-xs sm:text-sm font-bold text-[#00548e] hover:underline">
                  Helpline: +91 77030 82561
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
