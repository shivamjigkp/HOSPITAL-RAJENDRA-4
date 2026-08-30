import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDepartments, getDepartmentBySlug } from "@/lib/payload-api";
import { DOCTORS } from "@/lib/data/doctors";

const deptClinicalData: Record<
  string,
  {
    title: string;
    procedures: string[];
    features: string[];
  }
> = {
  urology: {
    title: "Advanced Urology & Stone Management",
    procedures: [
      "Minimally Invasive Laser Lithotripsy (Kidney Stone Removal)",
      "PCNL (Percutaneous Nephrolithotomy)",
      "URS / RIRS (Retrograde Intrarenal Surgery)",
      "TURP (Transurethral Resection of the Prostate)",
      "Ureteric Stenting & Bladder Stone Treatment",
    ],
    features: [
      "Latest Holmium Laser Technology",
      "Short hospital stay with fast recovery",
      "Led by Senior Urologist Dr. Abhishek Yadav",
    ],
  },
  nephrology: {
    title: "Comprehensive Nephrology & Kidney Care",
    procedures: [
      "Management of Acute & Chronic Kidney Disease (CKD)",
      "Hypertensive Renal Care & Diabetic Nephropathy",
      "Glomerulonephritis & Proteinuria Management",
      "Hemodialysis Access & AV Fistula Guidance",
    ],
    features: [
      "Modern Hemodialysis Support Unit",
      "Regular Renal Function Monitoring",
      "Specialized Kidney Diet Consultation",
    ],
  },
  "obstetrics-gynaecology": {
    title: "Obstetrics & Advanced Laparoscopic Gynaecology",
    procedures: [
      "Laparoscopic Hysterectomy (TLH) & Myomectomy",
      "Laparoscopic Ovarian Cystectomy & Endometriosis Treatment",
      "Comprehensive Antenatal & High-Risk Pregnancy Care",
      "Normal Delivery & Caesarean Section (LSCS)",
      "Infertility Workup & Diagnostic Hysteroscopy",
    ],
    features: [
      "State-of-the-Art HD Laparoscopic Towers",
      "Specialist Gynaecologists with 24/7 Maternity Support",
      "Attached Neonatal ICU for newborn safety",
    ],
  },
  dialysis: {
    title: "24/7 Modern Hemodialysis Center",
    procedures: [
      "Maintenance Hemodialysis for Chronic Renal Patients",
      "Emergency Bedside Dialysis in ICU",
      "Central Venous Catheter Insertion & Care",
      "Continuous Monitoring During Dialysis Sessions",
    ],
    features: [
      "Advanced Dual-Stage RO Water Purification Plant",
      "Sterile, infection-controlled dialysis floor",
      "Dedicated nursing and technician support",
    ],
  },
  "general-surgery": {
    title: "General & Laparoscopic Surgery",
    procedures: [
      "Laparoscopic Appendectomy & Cholecystectomy (Gallbladder)",
      "Laparoscopic & Open Hernia Repair (Inguinal / Umbilical)",
      "Advanced Piles, Fissure & Fistula Laser Procedures",
      "Trauma & Emergency Surgical Interventions",
    ],
    features: [
      "Laminar flow modular operating theatres",
      "Experienced surgical team with high success rate",
      "Minimal postoperative pain and quick discharge",
    ],
  },
  medicine: {
    title: "Internal & General Medicine",
    procedures: [
      "Comprehensive Diagnostic Workup for Acute & Chronic Illnesses",
      "Management of Diabetes, Hypertension & Metabolic Disorders",
      "Treatment of Infectious Diseases, Dengue, Typhoid & Fevers",
      "Respiratory, Gastrointestinal & Geriatric Care",
    ],
    features: [
      "24/7 Diagnostic Pathology & Inpatient Care",
      "Multi-speciality consultation coordination",
    ],
  },
  "pediatrics-nicu": {
    title: "Pediatrics & Neonatal Intensive Care Unit (NICU)",
    procedures: [
      "Level-II NICU Care for Preterm & Low Birth Weight Newborns",
      "Neonatal Jaundice Phototherapy & Advanced Incubators",
      "Comprehensive Child Vaccination & Immunization Schedules",
      "Pediatric Inpatient & Emergency Medical Care",
    ],
    features: [
      "Experienced paediatricians and neonatal nursing staff",
      "Child-friendly examination and inpatient environment",
    ],
  },
  radiology: {
    title: "Radiology & Diagnostic Imaging",
    procedures: [
      "High-Frequency Digital X-Ray (Skeletal, Chest & Abdominal)",
      "High-Resolution Ultrasound (USG) & 4D Obstetric Scans",
      "Color Doppler Vascular Studies (Renal & Peripheral Arterial)",
      "Image-Guided Interventional Procedures & USG Guided FNAC",
    ],
    features: [
      "Low radiation digital X-ray technology",
      "Fast-track reporting for emergency and OPD patients",
    ],
  },
  pathology: {
    title: "Pathology & Automated Clinical Laboratory",
    procedures: [
      "Complete Blood Count (CBC) & Automated Hematology Panels",
      "Serum Biochemistry, Liver & Kidney Function Tests (LFT / KFT)",
      "Thyroid Function Tests, Hormone Assays & Serology Testing",
      "Urine Routine, Microscopy & Urine Culture Analysis",
    ],
    features: [
      "Automated clinical pathology analyzers",
      "Strict internal quality controls for test accuracy",
    ],
  },
  icu: {
    title: "24/7 Intensive Care Unit (ICU) & Critical Care",
    procedures: [
      "Invasive & Non-Invasive Mechanical Ventilator Support",
      "Continuous Multi-Parameter Cardiac & Hemodynamic Monitoring",
      "Arterial Blood Gas (ABG) Analysis & Emergency Resuscitation",
      "Post-Operative Critical Surgical Monitoring & Trauma Care",
    ],
    features: [
      "24/7 on-call intensivists and emergency medical officers",
      "1:1 dedicated critical care nursing for unstable patients",
    ],
  },
};

export async function generateStaticParams() {
  const departments = await getDepartments();
  return departments.map((d: any) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const dept = await getDepartmentBySlug(slug);

  if (!dept) {
    return { title: "Department Not Found | Rajendra Hospital" };
  }

  return {
    title: `${dept.name} | Rajendra Hospital Gorakhpur`,
    description:
      dept.shortDescription ||
      `Specialized medical care and advanced surgical procedures in ${dept.name} at Rajendra Hospital, Gorakhpur.`,
  };
}

export default async function DepartmentDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const dept = await getDepartmentBySlug(slug);

  if (!dept) {
    notFound();
  }

  const clinical = deptClinicalData[slug] || {
    title: dept.name,
    procedures: ["Specialist Consultations", "Modern Diagnostic Workup", "Inpatient & Outpatient Medical Care"],
    features: ["Led by Experienced Specialists", "NABH Certified Standards", "24/7 Hospital & Emergency Support"],
  };

  const assignedDoctors = DOCTORS.filter((d) => d.departmentSlug === slug);

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* ─────────────────────────────────────────────────────────────
          1. AMRITA EDITORIAL HEADER
      ────────────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-[#001e42] via-[#002d62] to-[#00548e] text-white py-16 lg:py-20 border-b-4 border-[#e87722]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-blue-200 text-xs font-bold uppercase tracking-wider mb-4" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li>/</li>
              <li><Link href="/departments" className="hover:text-white">Specialities</Link></li>
              <li>/</li>
              <li className="text-white font-bold">{dept.name}</li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#e87722] text-white rounded-md text-xs font-bold uppercase tracking-wider mb-3">
            <span>Clinical Department</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
            {clinical.title}
          </h1>

          <p className="text-slate-200 text-base sm:text-lg max-w-3xl leading-relaxed">
            {dept.shortDescription || "Comprehensive diagnosis, advanced surgical interventions, and dedicated post-treatment care."}
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. MAIN CONTENT & CLINICAL HIGHLIGHTS
      ────────────────────────────────────────────────────────────── */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Column (8 cols) */}
          <div className="lg:col-span-8 space-y-10">
            {/* Department Hero Image */}
            <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-100">
              <Image
                src={`/departments/${dept.slug}.png`}
                alt={dept.name}
                fill
                className="object-cover object-center"
                priority
              />
            </div>

            {/* Clinical Overview & Procedures */}
            <div className="amrita-card p-6 sm:p-8 space-y-6">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#002d62]">
                Key Procedures &amp; Medical Treatments
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Our team delivers precision clinical care combining international medical protocols with personalized attention to ensure optimal health outcomes.
              </p>

              <div className="space-y-3 pt-2">
                {clinical.procedures.map((proc, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm font-semibold text-slate-800"
                  >
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-[#00548e] flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span>{proc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Department Doctors */}
            {assignedDoctors.length > 0 && (
              <div className="space-y-6">
                <h3 className="font-serif text-2xl font-bold text-[#002d62]">
                  Consultant Specialists in {dept.name}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {assignedDoctors.map((doc) => (
                    <div key={doc.id} className="amrita-card p-6 flex flex-col justify-between group">
                      <div className="flex items-start gap-4">
                        <div className="relative h-20 w-20 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0 border border-slate-200">
                          <Image src={doc.photo} alt={doc.name} fill className="object-cover object-top" />
                        </div>
                        <div className="space-y-1">
                          <h4 className="font-serif font-bold text-base text-[#002d62]">{doc.name}</h4>
                          <p className="text-xs font-bold text-[#e87722]">{doc.specialization}</p>
                          <p className="text-[11px] text-slate-500">{doc.qualifications}</p>
                        </div>
                      </div>
                      <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-[11px] font-bold text-[#00548e]">{doc.timing}</span>
                        <Link
                          href={`/appointments?doctor=${encodeURIComponent(doc.name)}&dept=${encodeURIComponent(dept.slug)}`}
                          className="btn-amrita-primary text-xs py-1.5 px-3"
                        >
                          Book Slot
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar CTA & Information (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Quick OPD Booking Card */}
            <div className="amrita-card p-6 bg-gradient-to-b from-blue-50/50 to-white border-blue-200 space-y-4">
              <span className="badge-amrita-blue">
                OPD Consultation
              </span>
              <h3 className="font-serif text-xl font-bold text-[#002d62]">
                Book an Appointment with {dept.name}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Consult with our senior specialists. Flexible scheduling with morning and evening OPD slots.
              </p>
              <Link
                href={`/appointments?dept=${encodeURIComponent(dept.slug)}`}
                className="w-full btn-amrita-primary text-xs sm:text-sm py-3 text-center block shadow-md"
              >
                📅 Book OPD Slot Now
              </Link>
              <a
                href="tel:+917703082561"
                className="w-full text-center py-2.5 text-xs font-bold text-[#00548e] bg-white rounded-xl block border border-slate-200 hover:bg-slate-50 transition-colors"
              >
                📞 Hospital Desk: +91 77030 82561
              </a>
            </div>

            {/* Ayushman Bharat Scheme Callout */}
            <div className="amrita-card p-6 space-y-3 border-emerald-200 bg-emerald-50/30">
              <span className="badge-amrita-teal">
                Cashless Healthcare
              </span>
              <h4 className="font-serif text-base font-bold text-[#002d62]">
                Ayushman Bharat (PM-JAY) Covered
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Procedures in this department are eligible for 100% cashless treatment for Ayushman cardholders.
              </p>
            </div>

            {/* Other Departments Quick Links */}
            <div className="amrita-card p-6 space-y-3">
              <h4 className="font-serif text-base font-bold text-[#002d62] border-b border-slate-100 pb-2">
                All Specialities
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-600">
                {Object.keys(deptClinicalData).map((s) => (
                  <li key={s}>
                    <Link
                      href={`/departments/${s}`}
                      className={`block py-1 px-2 rounded-md transition-colors ${
                        s === slug
                          ? "bg-[#00548e] text-white font-bold"
                          : "hover:bg-slate-100 text-slate-700"
                      }`}
                    >
                      • {deptClinicalData[s].title.split("&")[0]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
