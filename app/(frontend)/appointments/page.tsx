"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { DOCTORS } from "@/lib/data/doctors";
import DigitalTokenPass from "@/components/DigitalTokenPass";

const DEPARTMENTS = [
  { slug: "urology", name: "Advanced Urology & Stone Care" },
  { slug: "nephrology", name: "Nephrology & Dialysis" },
  { slug: "obstetrics-gynaecology", name: "Obstetrics & Gynaecology" },
  { slug: "dialysis", name: "Hemodialysis Unit" },
  { slug: "general-surgery", name: "General & Laparoscopic Surgery" },
  { slug: "medicine", name: "General Medicine" },
  { slug: "pediatrics-nicu", name: "Pediatrics & NICU" },
  { slug: "radiology", name: "Radiology & Imaging" },
  { slug: "pathology", name: "Pathology & Diagnostics" },
  { slug: "icu", name: "24/7 ICU & Critical Care" },
];

function AppointmentBookingContent() {
  const searchParams = useSearchParams();
  const initialDoctorName = searchParams.get("doctor") || "";
  const initialDept = searchParams.get("dept") || "urology";

  const matchedDoctor = DOCTORS.find((d) => d.name === initialDoctorName);

  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    age: "",
    gender: "Male",
    department: initialDept,
    doctorId: matchedDoctor ? matchedDoctor.id : "1",
    date: "",
    timeSlot: "Morning (10:00 AM - 01:00 PM)",
    scheme: "General OPD",
    symptoms: "",
  });

  useEffect(() => {
    if (initialDept) {
      setFormData((prev) => ({ ...prev, department: initialDept }));
    }
    if (matchedDoctor) {
      setFormData((prev) => ({ ...prev, doctorId: matchedDoctor.id }));
    }
  }, [initialDept, matchedDoctor]);

  const selectedDoctor = DOCTORS.find((d) => d.id === formData.doctorId) || DOCTORS[0];
  const selectedDept = DEPARTMENTS.find((d) => d.slug === formData.department) || DEPARTMENTS[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return submitted ? (
    <DigitalTokenPass
      patientName={formData.name || "Patient"}
      patientPhone={formData.phone || "+91 98765 43210"}
      departmentName={selectedDept.name}
      doctorName={selectedDoctor.name}
      preferredDate={formData.date || "Immediate OPD Slot"}
      preferredTime={formData.timeSlot}
      onReset={() => {
        setSubmitted(false);
        setStep(1);
      }}
    />
  ) : (
    <div className="amrita-card p-6 sm:p-10 border-slate-200 shadow-xl">
      {/* Step Wizard Indicator */}
      <div className="grid grid-cols-3 gap-2 mb-8 text-center text-xs font-bold">
        <div
          className={`p-2.5 rounded-xl transition-colors ${
            step >= 1 ? "bg-[#00548e] text-white" : "bg-slate-100 text-slate-400"
          }`}
        >
          1. Patient Info
        </div>
        <div
          className={`p-2.5 rounded-xl transition-colors ${
            step >= 2 ? "bg-[#00548e] text-white" : "bg-slate-100 text-slate-400"
          }`}
        >
          2. Doctor &amp; Speciality
        </div>
        <div
          className={`p-2.5 rounded-xl transition-colors ${
            step >= 3 ? "bg-[#00548e] text-white" : "bg-slate-100 text-slate-400"
          }`}
        >
          3. Date &amp; Slot
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* STEP 1: PATIENT INFORMATION */}
        {step === 1 && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <h3 className="font-serif text-xl font-bold text-[#002d62]">
              Patient Details
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-[#00548e] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Mobile Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9876543210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-[#00548e] focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Age
                </label>
                <input
                  type="number"
                  placeholder="e.g. 42"
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-[#00548e] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Gender
                </label>
                <select
                  value={formData.gender}
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-[#00548e] focus:outline-none"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Payment / Scheme
                </label>
                <select
                  value={formData.scheme}
                  onChange={(e) => setFormData({ ...formData, scheme: e.target.value })}
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-[#00548e] focus:outline-none"
                >
                  <option value="General OPD">General OPD</option>
                  <option value="Ayushman Bharat PM-JAY">Ayushman Bharat (PM-JAY)</option>
                  <option value="TPA Cashless Insurance">TPA Cashless Insurance</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Describe Symptoms / Concern
              </label>
              <textarea
                rows={3}
                placeholder="Briefly describe your symptoms (e.g. Kidney stone pain, pregnancy checkup, general fever)..."
                value={formData.symptoms}
                onChange={(e) => setFormData({ ...formData, symptoms: e.target.value })}
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-[#00548e] focus:outline-none"
              />
            </div>

            <div className="pt-4 flex justify-end">
              <button
                type="button"
                onClick={() => {
                  if (!formData.name || !formData.phone) {
                    alert("Please enter patient name and mobile number");
                    return;
                  }
                  setStep(2);
                }}
                className="btn-amrita-primary text-xs sm:text-sm py-3 px-8"
              >
                Proceed to Select Doctor →
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: DOCTOR & DEPARTMENT */}
        {step === 2 && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <h3 className="font-serif text-xl font-bold text-[#002d62]">
              Select Department &amp; Consultant
            </h3>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Department
              </label>
              <select
                value={formData.department}
                onChange={(e) => {
                  const newDept = e.target.value;
                  const firstDoc = DOCTORS.find((d) => d.departmentSlug === newDept) || DOCTORS[0];
                  setFormData({ ...formData, department: newDept, doctorId: firstDoc.id });
                }}
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-[#00548e] focus:outline-none"
              >
                {DEPARTMENTS.map((dept) => (
                  <option key={dept.slug} value={dept.slug}>
                    {dept.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
                Available Consultant Doctor
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {DOCTORS.map((doc) => (
                  <div
                    key={doc.id}
                    onClick={() => setFormData({ ...formData, doctorId: doc.id, department: doc.departmentSlug })}
                    className={`p-4 rounded-xl border cursor-pointer transition-all ${
                      formData.doctorId === doc.id
                        ? "bg-blue-50 border-[#00548e] shadow-sm"
                        : "bg-slate-50 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    <p className="font-serif font-bold text-sm text-[#002d62]">{doc.name}</p>
                    <p className="text-xs font-semibold text-[#e87722]">{doc.specialization}</p>
                    <p className="text-[11px] text-slate-500 mt-1">⏰ {doc.timing} ({doc.days})</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 flex justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="btn-amrita-secondary text-xs sm:text-sm py-2.5 px-6"
              >
                ← Back
              </button>
              <button
                type="button"
                onClick={() => setStep(3)}
                className="btn-amrita-primary text-xs sm:text-sm py-3 px-8"
              >
                Proceed to Select Slot →
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: DATE & TIME SLOT */}
        {step === 3 && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <h3 className="font-serif text-xl font-bold text-[#002d62]">
              Preferred Date &amp; Time Slot
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Preferred Date
                </label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-[#00548e] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Preferred OPD Slot
                </label>
                <select
                  value={formData.timeSlot}
                  onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-[#00548e] focus:outline-none"
                >
                  <option value="Morning (10:00 AM - 01:00 PM)">Morning (10:00 AM - 01:00 PM)</option>
                  <option value="Afternoon (01:00 PM - 03:00 PM)">Afternoon (01:00 PM - 03:00 PM)</option>
                  <option value="Evening (03:00 PM - 05:00 PM)">Evening (03:00 PM - 05:00 PM)</option>
                </select>
              </div>
            </div>

            {/* Summary Box */}
            <div className="p-4 bg-blue-50/70 rounded-xl border border-blue-100 space-y-1 text-xs text-slate-700">
              <p className="font-bold text-[#002d62] text-sm">Appointment Summary</p>
              <p><strong>Patient:</strong> {formData.name} ({formData.phone})</p>
              <p><strong>Doctor:</strong> {selectedDoctor.name} — {selectedDoctor.specialization}</p>
              <p><strong>Department:</strong> {selectedDept.name}</p>
              <p><strong>Category:</strong> {formData.scheme}</p>
            </div>

            <div className="pt-4 flex justify-between">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="btn-amrita-secondary text-xs sm:text-sm py-2.5 px-6"
              >
                ← Back
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-amrita-gold text-xs sm:text-sm py-3 px-8 shadow-md"
              >
                {isSubmitting ? "Generating Digital Pass..." : "✓ Confirm & Generate OPD Pass"}
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default function AppointmentsPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* ─────────────────────────────────────────────────────────────
          1. AMRITA EDITORIAL HEADER
      ────────────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-[#001e42] via-[#002d62] to-[#00548e] text-white py-14 border-b-4 border-[#e87722]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#e87722] text-white rounded-md text-xs font-bold uppercase tracking-wider">
            <span>📅 Online OPD Booking Portal</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Book Doctor Appointment
          </h1>
          <p className="text-slate-200 text-xs sm:text-sm max-w-xl mx-auto">
            Schedule an OPD consultation with our senior super-specialists at Rajendra Hospital Gorakhpur.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. STEP-BY-STEP BOOKING WIZARD WITH SUSPENSE
      ────────────────────────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Suspense fallback={<div className="text-center p-12 text-slate-500 font-medium">Loading Appointment Portal...</div>}>
          <AppointmentBookingContent />
        </Suspense>
      </div>
    </div>
  );
}
