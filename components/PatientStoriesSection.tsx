import Image from "next/image";
import Link from "next/link";

const STORIES = [
  {
    patient: "Sunita Verma, 48 Yrs",
    procedure: "Complex Kidney Stone Laser Lithotripsy (PCNL)",
    doctor: "Dr. Abhishek Yadav (MCh Urology)",
    image: "/gallery/hospital-event.jpg",
    quote: "I was suffering from excruciating flank pain due to a 22mm renal stone. Dr. Abhishek performed laser surgery and I was completely pain-free and walking the next morning.",
    badge: "Urology & Laser Surgery",
  },
  {
    patient: "Pooja Srivastava, 34 Yrs",
    procedure: "3D Laparoscopic Hysterectomy & Cystectomy",
    doctor: "Dr. Pramila Yadav (MS Gynae)",
    image: "/departments/obstetrics-gynaecology.png",
    quote: "The laparoscopic surgery was completely keyhole with minimal pain and fast healing. The doctors and nursing staff took care of me with tremendous warmth and kindness.",
    badge: "Gynaecology & Laparoscopy",
  },
];

export default function PatientStoriesSection() {
  return (
    <section className="py-20 bg-[#f5f6f8] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Exact Amrita Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-900 tracking-tight">
            Patient Stories
          </h2>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-900 hover:text-[#00548e] transition-colors group"
          >
            <span>View all</span>
            <span className="w-7 h-7 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs group-hover:translate-x-1 transition-transform">
              ➔
            </span>
          </Link>
        </div>

        {/* 2-Column Patient Stories (Exact Amrita Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {STORIES.map((story, idx) => (
            <div
              key={idx}
              className="bg-white rounded-sm overflow-hidden border border-slate-200/80 shadow-sm flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-64 w-full bg-slate-900 overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.patient}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
                    <div className="text-white space-y-1">
                      <span className="px-3 py-1 bg-[#e87722] text-white text-[10px] font-bold rounded-full uppercase tracking-wider inline-block mb-1">
                        {story.badge}
                      </span>
                      <h3 className="font-serif font-bold text-xl text-white">
                        {story.patient}
                      </h3>
                      <p className="text-xs text-slate-300">
                        {story.procedure}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                    &quot;{story.quote}&quot;
                  </p>
                  <p className="text-xs font-bold text-[#00548e]">
                    Under Care of: {story.doctor}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href="/appointments"
                  className="text-xs font-bold text-slate-900 hover:text-[#00548e] inline-flex items-center gap-1.5"
                >
                  <span>Book Consultation</span>
                  <span>➔</span>
                </Link>
                <span className="text-[11px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded">
                  ✓ Verified Patient
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
