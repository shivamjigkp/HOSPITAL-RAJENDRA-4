import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy of Rajendra Hospital, Gorakhpur.",
  robots: { index: false },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <section className="bg-gradient-to-r from-[#001e42] via-[#002d62] to-[#00548e] text-white py-14 border-b-4 border-[#e87722]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-blue-200 text-xs font-bold uppercase tracking-wider mb-4" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li>/</li>
              <li className="text-white">Privacy Policy</li>
            </ol>
          </nav>
          <h1 className="font-serif text-3xl md:text-4xl font-bold">Privacy Policy &amp; Patient Data Protection</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="amrita-card p-8 bg-white space-y-6 text-sm text-slate-700 leading-relaxed">
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-800 font-medium">
              ℹ️ <strong>Patient Privacy Commitment:</strong> Rajendra Hospital adheres to healthcare confidentiality benchmarks and Indian digital personal data protection norms.
            </div>

            <h2 className="font-serif text-xl font-bold text-[#002d62]">Information We Collect</h2>
            <p>
              When you use our appointment booking or contact forms, we collect information including your name, mobile phone number, preferred doctor, and medical symptoms solely for clinical scheduling and emergency patient triage.
            </p>

            <h2 className="font-serif text-xl font-bold text-[#002d62]">How We Use Your Medical Information</h2>
            <p>
              Information submitted is used exclusively by hospital staff and clinical coordinators to confirm OPD tokens, prepare doctor schedules, and coordinate admissions. We never sell or share patient data with unauthorized third parties.
            </p>

            <h2 className="font-serif text-xl font-bold text-[#002d62]">Data Security &amp; Confidentiality</h2>
            <p>
              We implement stringent administrative and technical safeguards to keep patient records secure. All communication over this portal is encrypted using industry-standard SSL/TLS protocols.
            </p>

            <h2 className="font-serif text-xl font-bold text-[#002d62]">Contacting Hospital Desk</h2>
            <p>
              For any privacy or medical record queries, please reach our hospital administrative office at{" "}
              <Link href="/contact" className="text-[#00548e] font-bold hover:underline">
                Contact Us
              </Link>{" "}
              or email us at <strong>info@rajendrahospital.co.in</strong>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
