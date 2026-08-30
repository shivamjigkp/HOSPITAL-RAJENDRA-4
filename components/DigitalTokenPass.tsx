"use client";

import Link from "next/link";
import Image from "next/image";

interface TokenProps {
  patientName: string;
  patientPhone: string;
  departmentName: string;
  doctorName: string;
  preferredDate: string;
  preferredTime: string;
  onReset: () => void;
}

export default function DigitalTokenPass({
  patientName,
  patientPhone,
  departmentName,
  doctorName,
  preferredDate,
  preferredTime,
  onReset,
}: TokenProps) {
  const tokenNumber = `RH-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-in zoom-in-95 duration-300">
      {/* Digital Pass Card in Amrita Clean Theme */}
      <div className="amrita-card rounded-2xl border-2 border-blue-200 p-8 sm:p-10 shadow-2xl bg-white text-slate-800 relative overflow-hidden">
        {/* Pass Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-6">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-44 flex-shrink-0">
              <Image
                src="/images/Logo-Primary.png"
                alt="Rajendra Hospital Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="text-right">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full inline-block">
              ✓ Token Confirmed
            </span>
            <span className="text-xs font-mono font-bold text-[#00548e] mt-1 block">
              {tokenNumber}
            </span>
          </div>
        </div>

        {/* Pass Body Info */}
        <div className="py-6 space-y-4">
          <div>
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
              Patient Name
            </span>
            <p className="font-serif text-2xl font-bold text-[#002d62]">{patientName}</p>
            <p className="text-xs text-slate-500 font-mono">{patientPhone}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-slate-100">
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                Consultant Doctor
              </span>
              <p className="font-serif text-base font-bold text-[#00548e]">{doctorName}</p>
              <p className="text-xs text-slate-600">{departmentName}</p>
            </div>
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                Consultation Slot
              </span>
              <p className="font-serif text-base font-bold text-emerald-700">{preferredDate}</p>
              <p className="text-xs text-slate-600">{preferredTime}</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100 text-xs text-slate-700 space-y-1">
            <p className="font-bold text-[#002d62] flex items-center gap-1.5">
              <span>📍</span>
              <span>Reporting Desk: OPD Reception, Rajendra Hospital</span>
            </p>
            <p className="text-[11px] text-slate-500">
              Deoria Road, Near MMMUT, Gorakhpur. Please arrive 15 minutes before your scheduled slot.
            </p>
          </div>
        </div>

        {/* Pass Footer Actions */}
        <div className="border-t border-slate-100 pt-6 flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={() => window.print()}
            className="btn-amrita-primary py-2.5 px-5 text-xs font-bold shadow-sm"
          >
            🖨️ Print / Save Token
          </button>
          <button
            onClick={onReset}
            className="btn-amrita-secondary py-2.5 px-5 text-xs font-bold"
          >
            + Book Another Appointment
          </button>
        </div>
      </div>
    </div>
  );
}
