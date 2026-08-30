"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const GALLERY_DATA = [
  {
    id: "1",
    title: "Advanced Operation Theatre",
    category: "Facilities",
    image: "/gallery/operation-theatre.png",
    description: "Equipped with cutting-edge laparoscopic towers and surgical instrumentation for minimally invasive procedures.",
  },
  {
    id: "2",
    title: "Hospital Building & Campus",
    category: "Infrastructure",
    image: "/gallery/hospital-facility-1.jpg",
    description: "100-bed multi-speciality hospital building located conveniently on Deoria Road, Gorakhpur.",
  },
  {
    id: "3",
    title: "Ayushman Bharat Yojana Outreach",
    category: "Camps & Community",
    image: "/gallery/ayushman-bharat.jpg",
    description: "Free medical outreach camp providing consultations and subsidized healthcare under Ayushman Bharat.",
  },
  {
    id: "4",
    title: "NABH Accreditation & Milestone",
    category: "Accreditation",
    image: "/gallery/hospital-event.jpg",
    description: "Honored with national accreditation benchmark for maintaining exemplary patient safety protocols.",
  },
  {
    id: "5",
    title: "Hospital Inpatient Floor",
    category: "Infrastructure",
    image: "/gallery/hospital-premise.jpg",
    description: "Clean, hygienic inpatient wards with round-the-clock nursing supervision and medical support.",
  },
  {
    id: "6",
    title: "Dialysis & Renal Care Unit",
    category: "Facilities",
    image: "/departments/dialysis.png",
    description: "Equipped with modern hemodialysis units and continuous nephrology monitoring.",
  },
  {
    id: "7",
    title: "24/7 Intensive Care Unit (ICU)",
    category: "Facilities",
    image: "/departments/icu.png",
    description: "State-of-the-art life support monitors, ventilators, and round-the-clock intensivist coverage.",
  },
  {
    id: "8",
    title: "Laparoscopic Surgery Suite",
    category: "Facilities",
    image: "/departments/general-surgery.png",
    description: "Specialized for minimally invasive kidney stone removal and gynaecological laparoscopy.",
  },
  {
    id: "9",
    title: "Neonatal ICU & Phototherapy",
    category: "Facilities",
    image: "/departments/pediatrics-nicu.png",
    description: "Modern incubators and infant warmers for high-dependency newborn and pediatric care.",
  },
];

const CATEGORIES = ["All", "Facilities", "Infrastructure", "Camps & Community", "Accreditation"];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems = selectedCategory === "All"
    ? GALLERY_DATA
    : GALLERY_DATA.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* ─────────────────────────────────────────────────────────────
          1. AMRITA EDITORIAL HEADER
      ────────────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-[#001e42] via-[#002d62] to-[#00548e] text-white py-16 lg:py-20 border-b-4 border-[#e87722]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <nav className="text-blue-200 text-xs font-bold uppercase tracking-wider" aria-label="Breadcrumb">
            <ol className="flex items-center justify-center gap-2">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li>/</li>
              <li className="text-white">Hospital Gallery</li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#e87722] text-white rounded-md text-xs font-bold uppercase tracking-wider">
            <span>📷 Visual Tour &amp; Facilities</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Hospital Infrastructure Gallery
          </h1>

          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Take a visual tour of our 100-bed hospital campus, laminar-flow laparoscopic operating theatres, hemodialysis unit, and community health camps in Gorakhpur.
          </p>

          {/* Filter Categories */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-[#e87722] text-white shadow-md"
                    : "bg-white/10 text-slate-100 hover:bg-white/20 border border-white/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. GALLERY GRID
      ────────────────────────────────────────────────────────────── */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="amrita-card amrita-card-hover overflow-hidden flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-60 w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-[#002d62] text-white text-[10px] font-bold uppercase rounded-md">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <h3 className="font-serif font-bold text-lg text-[#002d62] group-hover:text-[#00548e] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
