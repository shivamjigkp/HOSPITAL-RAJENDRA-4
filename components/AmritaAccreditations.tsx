import Link from "next/link";

const ACCREDITATIONS = [
  {
    badge: "Accreditations",
    title: "NABH Quality Certified",
    description: "Rajendra Hospital is accredited by the National Accreditation Board for Hospitals & Healthcare Providers for exemplary patient safety, clinical protocol, and hygiene standards.",
    icon: "🏥",
  },
  {
    badge: "Government Empanelled",
    title: "Ayushman Bharat (PM-JAY)",
    description: "Empanelled under the Government of India's flagship Pradhan Mantri Jan Arogya Yojana providing 100% cashless hospitalization and surgical care to eligible families.",
    icon: "💳",
  },
  {
    badge: "Quality Benchmark",
    title: "ISO Standard Protocols",
    description: "Strict international clinical protocols and sterile air handling in laminar operating theatres to guarantee highest surgical success rates and zero contamination.",
    icon: "⭐",
  },
];

export default function AmritaAccreditations() {
  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200">
          {ACCREDITATIONS.map((item, idx) => (
            <div key={idx} className="p-8 sm:p-10 space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="text-4xl mb-2">{item.icon}</div>
                <span className="inline-block px-3.5 py-1 rounded-full border border-slate-300 text-slate-700 text-xs font-semibold">
                  {item.badge}
                </span>
                <h3 className="font-serif text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="text-xs font-bold text-slate-900 hover:text-[#00548e] inline-flex items-center gap-1 group"
                >
                  <span>Read more</span>
                  <span className="group-hover:translate-x-1 transition-transform">&gt;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
