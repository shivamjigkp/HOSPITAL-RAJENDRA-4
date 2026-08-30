import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#12141a] text-white">
      {/* ─────────────────────────────────────────────────────────────
          1. NEWSLETTER / CONNECT STRIP (Exact Amrita Footer Style)
      ────────────────────────────────────────────────────────────── */}
      <div className="border-b border-white/10 py-10 px-4 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-serif text-xl sm:text-2xl font-normal text-white">
              Stay Connected with Rajendra Hospital
            </h3>
            <p className="text-xs text-slate-400">
              Get clinical health alerts, OPD schedules, and free camp announcements.
            </p>
          </div>

          <div className="flex w-full md:w-auto max-w-md items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-3 bg-[#1e2028] border border-white/10 rounded-full text-xs text-white placeholder-slate-400 focus:outline-none focus:border-white/30"
            />
            <button className="px-6 py-3 bg-white text-slate-900 rounded-full text-xs font-bold hover:bg-slate-200 transition-colors flex-shrink-0">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. MAIN 5-COLUMN FOOTER NAVIGATION
      ────────────────────────────────────────────────────────────── */}
      <div className="py-16 px-4 sm:px-8 lg:px-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 text-xs">
          {/* Col 1: About */}
          <div className="space-y-4">
            <div className="bg-[#e87722] text-white px-3 py-1.5 rounded-sm inline-flex flex-col font-bold">
              <span className="text-[11px] font-black uppercase">RAJENDRA</span>
              <span className="text-[8px] font-semibold tracking-widest uppercase">HOSPITAL</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              100-Bedded Multi-Speciality Hospital in Gorakhpur. Center of Advanced URO &amp; Gyane Laparoscopy, Stone Management, 24/7 ICU &amp; Dialysis.
            </p>
            <span className="inline-block px-2.5 py-1 rounded bg-emerald-950/80 text-emerald-400 font-semibold border border-emerald-800/60 text-[11px]">
              ✓ NABH Quality Certified
            </span>
          </div>

          {/* Col 2: Speciality Departments */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-white">Our Departments</h4>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="/departments/urology" className="hover:text-white transition-colors">Advanced Urology</Link></li>
              <li><Link href="/departments/obstetrics-gynaecology" className="hover:text-white transition-colors">Gynaecology &amp; Laparoscopy</Link></li>
              <li><Link href="/departments/nephrology" className="hover:text-white transition-colors">Nephrology &amp; Dialysis</Link></li>
              <li><Link href="/departments/general-surgery" className="hover:text-white transition-colors">General Surgery</Link></li>
              <li><Link href="/departments/medicine" className="hover:text-white transition-colors">Internal Medicine</Link></li>
              <li><Link href="/departments/pediatrics-nicu" className="hover:text-white transition-colors">Pediatrics &amp; NICU</Link></li>
              <li><Link href="/departments/icu" className="hover:text-white transition-colors">24/7 Critical Care (ICU)</Link></li>
            </ul>
          </div>

          {/* Col 3: For Patients */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-white">For Patients</h4>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="/doctors" className="hover:text-white transition-colors">Find a Doctor</Link></li>
              <li><Link href="/appointments" className="hover:text-white transition-colors">Book OPD Slot</Link></li>
              <li><Link href="/appointments" className="hover:text-white transition-colors">Ayushman Bharat (PM-JAY)</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors">Hospital Facilities</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Patient Feedback</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy &amp; Data Security</Link></li>
            </ul>
          </div>

          {/* Col 4: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-white">Quick Links</h4>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About Hospital</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors">Visual Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Emergency Admission</Link></li>
              <li><Link href="/appointments" className="hover:text-white transition-colors">Digital OPD Token</Link></li>
            </ul>
          </div>

          {/* Col 5: Contact & Location */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-white">Emergency Desk</h4>
            <div className="space-y-2 text-slate-400">
              <a href="tel:+917703082561" className="text-amber-400 font-bold block text-sm hover:underline">
                📞 +91 77030 82561
              </a>
              <p className="leading-relaxed">
                Deoria Road, Near MMMUT, Gorakhpur, UP 273010
              </p>
              <a
                href="https://maps.google.com/maps?q=Rajendra+Hospital+Deoria+Road+Gorakhpur"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-[11px] mt-1"
              >
                <span>📍</span>
                <span>Get Directions (Google Maps)</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          3. COPYRIGHT & LEGAL BAR
      ────────────────────────────────────────────────────────────── */}
      <div className="py-6 px-4 sm:px-8 lg:px-12 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between max-w-7xl mx-auto gap-3">
        <p>© {new Date().getFullYear()} Rajendra Hospital. All Rights Reserved.</p>
        <div className="flex items-center gap-4">
          <Link href="/privacy-policy" className="hover:text-slate-300">Privacy Policy</Link>
          <span>•</span>
          <Link href="/contact" className="hover:text-slate-300">Terms of Use</Link>
        </div>
      </div>
    </footer>
  );
}
