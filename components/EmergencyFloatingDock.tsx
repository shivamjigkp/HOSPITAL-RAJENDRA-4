"use client";

import { useState } from "react";
import Link from "next/link";

export default function EmergencyFloatingDock() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Popup Sheet */}
      {open && (
        <div className="mb-3 w-80 sm:w-96 rounded-2xl bg-white border border-slate-200 p-6 shadow-2xl text-slate-800 space-y-4 animate-in slide-in-from-bottom-5 duration-200">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
              <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                24/7 Hospital Helpline
              </span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-500"
            >
              ✕
            </button>
          </div>

          <div className="space-y-1">
            <h4 className="font-serif text-lg font-bold text-[#002d62]">24/7 Patient Emergency &amp; Admission</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Casualty desk, ICU ventilators, and on-call specialist surgeons available round-the-clock at Rajendra Hospital Gorakhpur.
            </p>
          </div>

          <a
            href="tel:+917703082561"
            className="w-full p-3.5 rounded-xl btn-amrita-gold text-center block text-sm font-bold shadow-md"
          >
            🚨 Emergency Call: +91 77030 82561
          </a>

          <div className="grid grid-cols-2 gap-2 text-xs font-bold">
            <a
              href="https://maps.google.com/maps?q=Rajendra+Hospital+Deoria+Road+Gorakhpur"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-center text-slate-700 border border-slate-200 block"
            >
              📍 GPS Location
            </a>
            <Link
              href="/appointments"
              onClick={() => setOpen(false)}
              className="p-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-center text-[#00548e] border border-blue-200 block"
            >
              📅 OPD Booking
            </Link>
          </div>
        </div>
      )}

      {/* Main Calm Trigger Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-full bg-[#002d62] text-white hover:bg-[#001e42] font-bold text-xs sm:text-sm shadow-xl border border-blue-800 transition-all duration-200 active:scale-95"
        aria-label="24/7 Hospital Helpline"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
        </span>
        <span>24/7 Emergency: +91 77030 82561</span>
      </button>
    </div>
  );
}

