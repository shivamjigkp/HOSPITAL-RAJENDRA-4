import Image from "next/image";
import Link from "next/link";

const EVENTS = [
  {
    title: "Free Urology & Kidney Stone Screening Health Camp",
    date: "15 Sep 2026 . 09:00 AM",
    image: "/gallery/ayushman-bharat.jpg",
    category: "Community Camp",
    excerpt: "Free doctor consultations, blood pressure checkup, and subsidized USG scans for kidney stone diagnosis.",
  },
  {
    title: "Hands-On Clinical Workshop on 3D Laparoscopy",
    date: "28 Sep 2026 . 10:30 AM",
    image: "/gallery/operation-theatre.png",
    category: "Surgical Workshop",
    excerpt: "Advanced surgical symposium on minimally invasive pelvic and abdominal keyhole techniques.",
  },
  {
    title: "Ayushman Bharat PM-JAY Awareness Drive",
    date: "05 Oct 2026 . 11:00 AM",
    image: "/about/ayushman-bharat.jpg",
    category: "Patient Welfare",
    excerpt: "Guidance on cashless treatment card generation and free surgery packages under PM-JAY.",
  },
];

const ARTICLES = [
  {
    title: "Kidney Stone Prevention: Dietary Guidelines & Early Symptoms",
    category: "Health Care",
    image: "/departments/urology.png",
    excerpt: "Understanding the role of hydration, calcium, and modern laser lithotripsy in preventing recurrent stones.",
  },
  {
    title: "Benefits of 3D Laparoscopy in Gynaecological Surgeries",
    category: "Surgery Insights",
    image: "/departments/obstetrics-gynaecology.png",
    excerpt: "How high-definition 3D optics enable faster recovery, zero visible scars, and same-day discharge.",
  },
  {
    title: "Chronic Kidney Disease & Hemodialysis: What Patients Must Know",
    category: "Renal Care",
    image: "/departments/dialysis.png",
    excerpt: "Essential care protocols for maintaining dialysis efficacy and kidney health in hypertensive patients.",
  },
];

export default function HospitalNewsSection() {
  return (
    <>
      {/* ─────────────────────────────────────────────────────────────
          1. EXACT AMRITA "EVENTS" SECTION
      ────────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-900 tracking-tight">
              Events
            </h2>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-900 hover:text-[#00548e] transition-colors group"
            >
              <span>View All</span>
              <span className="w-7 h-7 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs group-hover:translate-x-1 transition-transform">
                ➔
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {EVENTS.map((item, idx) => (
              <div key={idx} className="bg-white rounded-sm overflow-hidden flex flex-col justify-between group">
                <div>
                  <div className="relative h-56 w-full overflow-hidden bg-slate-100 mb-4">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <span className="text-xs text-slate-500 font-medium block">
                      {item.date}
                    </span>
                    <h3 className="font-sans font-bold text-lg text-slate-900 group-hover:text-[#00548e] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.excerpt}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. EXACT AMRITA "HEALTH INSIGHTS & ARTICLES" SECTION
      ────────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#f5f6f8] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-900 tracking-tight">
              Health Insights
            </h2>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-900 hover:text-[#00548e] transition-colors group"
            >
              <span>View All</span>
              <span className="w-7 h-7 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs group-hover:translate-x-1 transition-transform">
                ➔
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ARTICLES.map((article, idx) => (
              <div
                key={idx}
                className="bg-white rounded-sm overflow-hidden flex flex-col justify-between p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100 mb-4 rounded-sm">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3">
                      <span className="px-3 py-1 bg-white/90 text-slate-800 text-[10px] font-bold rounded-full shadow-sm">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-sans font-bold text-base sm:text-lg text-slate-900 group-hover:text-[#00548e] transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-100">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 text-xs font-bold text-slate-900 hover:text-[#00548e] group"
                  >
                    <span className="w-6 h-6 rounded-full border border-slate-900 flex items-center justify-center text-[10px] group-hover:bg-slate-900 group-hover:text-white transition-colors">
                      ➔
                    </span>
                    <span>Learn more</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
