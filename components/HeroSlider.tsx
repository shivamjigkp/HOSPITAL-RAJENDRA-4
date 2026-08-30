"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const SLIDES = [
  {
    id: 1,
    tag: "NABH ACCREDITED MULTI-SPECIALITY",
    title: "World-Class Healthcare Services with Compassion & Precision",
    subtitle: "Center of Advanced URO & Gyane Laparoscopy • 100-Beded Hospital",
    desc: "Providing high-precision surgical care, Holmium laser lithotripsy, 24/7 ICU casualty, and comprehensive mother & child health under senior medical specialists in Gorakhpur.",
    isVideo: true,
    videoSrc: "/videos/hospital-hero.mp4",
    badge: "NABH Certified Quality Standards • 24/7 Casualty",
    ctaText: "Book Doctor Appointment",
    ctaLink: "/appointments",
    secondaryText: "Explore Specialties",
    secondaryLink: "/departments",
  },
  {
    id: 2,
    tag: "SURGICAL EXCELLENCE",
    title: "Advanced Laparoscopy & Holmium Laser Stone Lithotripsy",
    subtitle: "Minimally Invasive Surgeries • PCNL, URS & 3D Gynaecology",
    desc: "Equipped with state-of-the-art modular operation theatres, HD laparoscopy towers, and precision laser instrumentation for painless recovery and minimal hospital stay.",
    isVideo: false,
    image: "/departments/general-surgery.png",
    alt: "Modular Operation Theatre at Rajendra Hospital",
    badge: "Laminar Flow Modular OT • Same-Day Discharge",
    ctaText: "Consult Laparoscopy Specialist",
    ctaLink: "/departments/urology",
    secondaryText: "View All Departments",
    secondaryLink: "/departments",
  },
  {
    id: 3,
    tag: "CRITICAL & RENAL CARE",
    title: "24/7 Intensive Care Unit (ICU) & Modern Hemodialysis Suite",
    subtitle: "Advanced Ventilators, Dedicated Intensivists & Dialysis Stations",
    desc: "Round-the-clock emergency casualty, trauma management, and dedicated dialysis support for acute and chronic renal care with expert nephrologists.",
    isVideo: false,
    image: "/departments/icu.png",
    alt: "24/7 ICU & Dialysis Center",
    badge: "24x7 Emergency Line: +91 77030 82561",
    ctaText: "Emergency Call Desk",
    ctaLink: "tel:+917703082561",
    secondaryText: "Critical Care Info",
    secondaryLink: "/departments/icu",
  },
  {
    id: 4,
    tag: "GOVERNMENT SCHEMES & TPA",
    title: "Ayushman Bharat (PM-JAY) Cashless Healthcare",
    subtitle: "100% Free Treatment for Eligible Families Up to ₹5 Lakhs",
    desc: "Empanelled under Ayushman Bharat PM-JAY and major insurance TPAs. Making cutting-edge surgeries and critical hospitalizations accessible to every family.",
    isVideo: false,
    image: "/gallery/ayushman-camp.jpg",
    alt: "Ayushman Bharat Healthcare Outreach",
    badge: "PM-JAY Scheme Empanelled • Cashless Desk",
    ctaText: "Check Scheme Eligibility",
    ctaLink: "/#ayushman",
    secondaryText: "About Rajendra Hospital",
    secondaryLink: "/about",
  },
];

const UTILITY_CARDS = [
  {
    icon: "👨‍⚕️",
    title: "Find a Doctor",
    desc: "Search experienced specialists & check OPD timings",
    link: "/doctors",
    btnText: "Search Doctors",
    color: "from-blue-600 to-blue-800",
  },
  {
    icon: "🏥",
    title: "Centres of Excellence",
    desc: "10+ advanced surgical and medical departments",
    link: "/departments",
    btnText: "Explore Depts",
    color: "from-[#0e2a47] to-slate-900",
  },
  {
    icon: "🚑",
    title: "24x7 Emergency & ICU",
    desc: "Immediate trauma casualty, ambulance & ventilators",
    link: "tel:+917703082561",
    btnText: "Call +91 77030 82561",
    color: "from-rose-600 to-red-700",
  },
  {
    icon: "💳",
    title: "Ayushman PMJAY",
    desc: "Cashless surgeries & insurance eligibility calculator",
    link: "/#ayushman",
    btnText: "Check Packages",
    color: "from-emerald-600 to-teal-700",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const slide = SLIDES[current];

  return (
    <section
      className="relative bg-gradient-to-b from-slate-50 via-white to-slate-100/70 pt-8 pb-16 lg:pt-12 lg:pb-20 overflow-hidden border-b border-slate-200"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Soft Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-100/60 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/6 w-[450px] h-[450px] bg-emerald-50/70 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Hero Slider Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Slide Narrative (7 Cols) */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            {/* Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0066cc] text-xs font-black tracking-widest uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#0066cc] animate-pulse" />
              <span>{slide.tag}</span>
            </div>

            {/* High-Contrast Bold Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0e2a47] leading-[1.18] font-serif-heading">
              {slide.title}
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base font-extrabold text-[#0066cc] tracking-wide">
              {slide.subtitle}
            </p>

            {/* Body Description */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-sans-body">
              {slide.desc}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <Link
                href={slide.ctaLink}
                className="w-full sm:w-auto btn-amrita-primary py-3.5 px-7 font-black text-sm shadow-lg shadow-blue-700/20"
              >
                {slide.ctaText}
              </Link>
              <Link
                href={slide.secondaryLink}
                className="w-full sm:w-auto btn-amrita-secondary py-3.5 px-6 font-bold text-sm"
              >
                {slide.secondaryText} →
              </Link>
            </div>

            {/* Pagination Controls */}
            <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
              {/* Pagination Dots */}
              <div className="flex items-center gap-2">
                {SLIDES.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => setCurrent(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      current === idx
                        ? "w-8 bg-[#0066cc]"
                        : "w-2 bg-slate-300 hover:bg-slate-400"
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Prev / Next Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)}
                  className="w-9 h-9 rounded-full bg-white hover:bg-slate-100 border border-slate-200 shadow-sm flex items-center justify-center text-[#0e2a47] font-bold text-sm transition-colors active:scale-95"
                  aria-label="Previous"
                >
                  ←
                </button>
                <button
                  onClick={() => setCurrent((prev) => (prev + 1) % SLIDES.length)}
                  className="w-9 h-9 rounded-full bg-white hover:bg-slate-100 border border-slate-200 shadow-sm flex items-center justify-center text-[#0e2a47] font-bold text-sm transition-colors active:scale-95"
                  aria-label="Next"
                >
                  →
                </button>
              </div>
            </div>
          </div>

          {/* Right Showcase Frame (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
              {slide.isVideo ? (
                <div className="relative w-full h-full overflow-hidden bg-slate-950">
                  <video
                    ref={videoRef}
                    src={slide.videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-white/90 text-[#0e2a47] text-[11px] font-black rounded-full shadow-md inline-flex items-center gap-1.5 backdrop-blur-md">
                      <span className="w-2 h-2 rounded-full bg-[#0066cc] animate-ping" />
                      4K HOSPITAL TOUR
                    </span>
                  </div>
                </div>
              ) : (
                <div className="relative w-full h-full overflow-hidden bg-slate-900">
                  <Image
                    src={slide.image!}
                    alt={slide.alt!}
                    fill
                    unoptimized
                    className="object-cover object-center"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                </div>
              )}

              {/* Bottom Hospital Tag */}
              <div className="absolute bottom-3 left-3 right-3 z-30 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-slate-100 shadow-lg flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-[#0066cc] block">
                    {slide.badge}
                  </span>
                  <span className="text-xs text-slate-700 font-bold">
                    Rajendra Hospital • Gorakhpur
                  </span>
                </div>
                <span className="text-xs font-bold text-slate-800 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                  {current + 1} / {SLIDES.length}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Amrita-Style Floating Utility Action Cards */}
        <div className="mt-12 pt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {UTILITY_CARDS.map((card) => (
            <Link
              key={card.title}
              href={card.link}
              className="utility-action-card group relative overflow-hidden p-5"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-3xl p-2.5 rounded-2xl bg-blue-50 border border-blue-100 group-hover:scale-110 transition-transform">
                    {card.icon}
                  </span>
                  <span className="text-slate-400 group-hover:text-[#0066cc] transition-colors font-bold text-sm">
                    →
                  </span>
                </div>
                <h3 className="text-base font-extrabold text-[#0e2a47] group-hover:text-[#0066cc] transition-colors pt-2">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-500 leading-snug">
                  {card.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-[#0066cc] group-hover:underline inline-flex items-center gap-1">
                  {card.btnText}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
