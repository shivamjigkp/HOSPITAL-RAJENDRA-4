import Link from "next/link";

export default function AmritaWhySection() {
  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-3">
          Why Rajendra Hospital?
        </span>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Big Serif Headline + Pill Action Buttons */}
          <div className="lg:col-span-6 space-y-8">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-900 leading-tight">
              Our team of experts provides top-notch medical treatment with empathy using the most advanced technology.
            </h2>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-slate-900 text-slate-900 font-bold text-xs sm:text-sm hover:bg-slate-900 hover:text-white transition-all shadow-sm group"
              >
                <span className="w-5 h-5 rounded-full bg-[#7c3aed] text-white flex items-center justify-center text-[10px]">
                  ▶
                </span>
                <span>Watch our Video</span>
              </Link>

              <a
                href="https://maps.google.com/maps?q=Rajendra+Hospital+Deoria+Road+Gorakhpur"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 text-slate-700 font-semibold text-xs sm:text-sm hover:bg-slate-200 transition-colors"
              >
                <span>📍</span>
                <span>Locate Us</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Editorial Paragraph */}
          <div className="lg:col-span-6 space-y-6 text-slate-600 text-sm sm:text-base leading-relaxed">
            <p>
              Your health is our priority. Rajendra Hospital ensures you and your family receive the best possible medical care and assistance. We strive to create a warm and safe healing environment for you and your family. Over the past decade, Rajendra Hospital has been unflinchingly devoted to improving healthcare, advanced urological surgery, and minimally invasive treatments in Eastern UP.
            </p>
            <p>
              As our entire team works toward your speedy recovery, we utilize highly-trained doctors, 100-bed NABH certified infrastructure, 24/7 ICU life support, modern hemodialysis units, and cutting-edge technology in the field of medical sciences.
            </p>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-bold text-slate-900 hover:text-[#00548e] text-sm group"
              >
                <span>Learn more about us</span>
                <span className="group-hover:translate-x-1 transition-transform">➔</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
