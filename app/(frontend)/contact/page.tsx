"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.message) {
      setErrorMsg("Please fill in your name, phone number, and message.");
      return;
    }
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? "Something went wrong.");
      }
      setStatus("success");
      setForm({ name: "", phone: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* ─────────────────────────────────────────────────────────────
          1. AMRITA EDITORIAL HEADER
      ────────────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-[#001e42] via-[#002d62] to-[#00548e] text-white py-16 border-b-4 border-[#e87722]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-blue-200 text-xs font-bold uppercase tracking-wider mb-4" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li>/</li>
              <li className="text-white">Contact &amp; Emergency</li>
            </ol>
          </nav>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#e87722] text-white rounded-md text-xs font-bold uppercase tracking-wider mb-3">
            <span>📞 24/7 Patient Assistance</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">
            Contact Rajendra Hospital
          </h1>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl">
            We are here for you 24/7. Reach out for OPD appointments, emergency trauma admissions, or medical inquiries in Gorakhpur.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. CONTACT INFORMATION & FORM
      ────────────────────────────────────────────────────────────── */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Contact Info & Emergency (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Emergency Hotline Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-red-600 to-rose-800 text-white shadow-xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full">
                  🚨 24/7 Trauma Emergency
                </span>
                <span className="text-xs text-red-100">Round the Clock</span>
              </div>
              <h3 className="font-serif text-2xl font-bold tracking-tight">Emergency Helpline</h3>
              <a
                href="tel:+917703082561"
                className="font-serif text-3xl font-bold block tracking-tight hover:underline pt-1 text-white"
              >
                +91 77030 82561
              </a>
              <p className="text-xs text-red-100 leading-relaxed pt-1">
                Immediate triage, ICU ventilator admission, and ambulance coordination upon arrival.
              </p>
            </div>

            {/* Hospital Location */}
            <div className="amrita-card p-6 space-y-2">
              <div className="flex items-center gap-3 text-[#002d62]">
                <span className="text-2xl">📍</span>
                <h4 className="font-serif font-bold text-base">Hospital Campus Address</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-9">
                Deoria Road, Near M.M.M. University of Technology (MMMUT), Gorakhpur, Uttar Pradesh 273010
              </p>
            </div>

            {/* Timings */}
            <div className="amrita-card p-6 space-y-2">
              <div className="flex items-center gap-3 text-[#002d62]">
                <span className="text-2xl">⏰</span>
                <h4 className="font-serif font-bold text-base">Hospital &amp; OPD Timings</h4>
              </div>
              <div className="text-xs text-slate-600 space-y-1 pl-9">
                <p><strong>Emergency &amp; ICU:</strong> Open 24 Hours / 7 Days</p>
                <p><strong>Specialist OPD:</strong> Monday to Saturday (09:00 AM – 05:00 PM)</p>
                <p><strong>Dialysis Unit:</strong> 24/7 Operational</p>
              </div>
            </div>

            {/* Email Contact */}
            <div className="amrita-card p-6 space-y-2">
              <div className="flex items-center gap-3 text-[#002d62]">
                <span className="text-2xl">✉️</span>
                <h4 className="font-serif font-bold text-base">Email Enquiries</h4>
              </div>
              <p className="text-xs text-slate-600 pl-9">
                <a href="mailto:info@rajendrahospital.co.in" className="text-[#00548e] font-bold hover:underline">
                  info@rajendrahospital.co.in
                </a>
              </p>
            </div>
          </div>

          {/* Right: Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="amrita-card p-8 sm:p-10 shadow-xl space-y-6">
              <div>
                <span className="badge-amrita-blue">
                  Send Message
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#002d62] mt-2">
                  Patient Enquiry &amp; Feedback
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Fill out the form below and our hospital administration will respond promptly.
                </p>
              </div>

              {status === "success" && (
                <div className="p-4 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold">
                  ✓ Thank you! Your message has been sent successfully. Our team will contact you shortly.
                </div>
              )}

              {errorMsg && (
                <div className="p-4 rounded-xl bg-red-50 text-red-700 border border-red-200 text-xs font-bold">
                  ✕ {errorMsg}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-[#00548e] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="Your phone number"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-[#00548e] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your.email@example.com"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-[#00548e] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="e.g. Appointment enquiry, surgery query"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-[#00548e] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="How can we assist you?..."
                    value={form.message}
                    onChange={handleChange}
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-[#00548e] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full btn-amrita-primary py-3 text-sm font-bold shadow-md"
                >
                  {status === "loading" ? "Sending Enquiry..." : "Send Message to Hospital Desk →"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
