import Image from "next/image";
import Link from "next/link";

const SERVICES = [
  {
    title: "24/7 Pharmacy & Inpatient Dispensary",
    description: "Our pharmaceutical services cater round-the-clock to the urgent medication needs of outpatients and admitted ICU patients.",
    image: "/gallery/hospital-facility-1.jpg",
    link: "/departments/icu",
  },
  {
    title: "Modern Hemodialysis Center",
    description: "Dedicated dialysis floor equipped with multi-stage RO sterile water purification plant for acute and chronic renal patients.",
    image: "/departments/dialysis.png",
    link: "/departments/dialysis",
  },
  {
    title: "Diagnostic Pathology & Automated Lab",
    description: "Advanced biochemistry, hematology, and clinical microbiology analyzers providing fast-track diagnostic workup.",
    image: "/departments/pathology.png",
    link: "/departments/pathology",
  },
  {
    title: "24/7 ICU & Critical Ventilator Care",
    description: "Equipped with invasive life support ventilators, continuous multi-parameter monitors, and round-the-clock intensivists.",
    image: "/departments/icu.png",
    link: "/departments/icu",
  },
  {
    title: "Radiology & Color Doppler Ultrasound",
    description: "High-resolution digital X-ray and color Doppler ultrasound machines for precise imaging and surgical navigation.",
    image: "/departments/radiology.png",
    link: "/departments/radiology",
  },
  {
    title: "Dietary & Inpatient Nutritional Care",
    description: "Qualified clinical dieticians ensure personalized nutrition plans for fast post-operative surgical recovery.",
    image: "/gallery/hospital-premise.jpg",
    link: "/about",
  },
];

export default function AmritaSupportServices() {
  return (
    <section className="py-20 bg-[#16181e] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Exact Amrita Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white">
            Support Services
          </h2>
          <Link
            href="/departments"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-300 hover:text-white transition-colors group"
          >
            <span>View all</span>
            <span className="w-7 h-7 rounded-full bg-white/10 text-white flex items-center justify-center text-xs group-hover:translate-x-1 transition-transform">
              ➔
            </span>
          </Link>
        </div>

        {/* 2-Column Split Cards (Exact Amrita Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#1e2028] flex flex-col sm:flex-row overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-300 group"
            >
              {/* Left Image Half */}
              <div className="relative w-full sm:w-1/2 h-52 sm:h-auto overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Right Content Half */}
              <div className="w-full sm:w-1/2 p-6 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-sans font-bold text-base sm:text-lg text-white group-hover:text-blue-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div>
                  <Link
                    href={item.link}
                    className="text-xs font-bold text-slate-300 hover:text-white inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Read more</span>
                    <span>&gt;</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
