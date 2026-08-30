"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const SLIDES = [
  {
    image: "/gallery/operation-theatre.png",
    title: "Transforming Lives with Better Healthcare",
    subtitle: "Advanced Laparoscopic Surgeries, Laser Lithotripsy & 24/7 ICU in Gorakhpur",
    ctaText: "Our Departments",
    ctaLink: "/departments",
  },
  {
    image: "/departments/urology.png",
    title: "Center of Advanced URO & Stone Care",
    subtitle: "Minimally invasive Holmium Laser Lithotripsy, PCNL & URS by Dr. Abhishek Yadav",
    ctaText: "Find a Doctor",
    ctaLink: "/doctors",
  },
  {
    image: "/about/ayushman-bharat.jpg",
    title: "100% Cashless Healthcare under PM-JAY",
    subtitle: "Free hospitalization and surgeries for eligible Ayushman cardholders",
    ctaText: "Book Appointment",
    ctaLink: "/appointments",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[current];

  return (
    <section className="relative w-full overflow-hidden bg-slate-900">
      {/* ─────────────────────────────────────────────────────────────
          EXACT AMRITA SPLIT HERO BANNER
      ────────────────────────────────────────────────────────────── */}
      <div className="relative min-h-[460px] sm:min-h-[520px] lg:min-h-[580px] w-full flex flex-col lg:flex-row">
        {/* Left Side: Hospital Image / Video Frame (50% on desktop) */}
        <div className="relative w-full lg:w-1/2 h-72 sm:h-96 lg:h-auto overflow-hidden">
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover transition-all duration-1000 ease-in-out"
            priority
          />
          {/* Subtle gradient blending on right */}
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent to-[#1a2d42] opacity-80 lg:opacity-100 pointer-events-none" />
        </div>

        {/* Right Side: Deep Amrita Slate/Navy Box (50% on desktop) */}
        <div className="w-full lg:w-1/2 bg-[#1a2d42] text-white p-8 sm:p-12 lg:p-16 flex flex-col justify-center relative">
          <div className="space-y-6 max-w-xl animate-in fade-in duration-700">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight">
              {slide.title}
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
              {slide.subtitle}
            </p>

            <div className="pt-2">
              <Link
                href={slide.ctaLink}
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-white text-slate-900 rounded-full font-bold text-xs sm:text-sm hover:bg-slate-100 transition-all shadow-md group"
              >
                <span>{slide.ctaText}</span>
                <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs group-hover:translate-x-1 transition-transform">
                  ➔
                </span>
              </Link>
            </div>
          </div>

          {/* Bottom Right Pagination Dots */}
          <div className="absolute bottom-6 right-8 sm:right-12 flex items-center gap-2">
            {SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  current === idx ? "bg-white w-6" : "bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
