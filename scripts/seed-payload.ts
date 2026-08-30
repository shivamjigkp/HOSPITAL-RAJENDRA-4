import { getPayload } from "payload";
import config from "../payload.config";

async function seedPayload() {
  const payload = await getPayload({ config });

  console.log("Seeding Payload CMS with Verified Medical Data...\n");

  // Departments
  const departments = [
    {
      name: "Urology",
      slug: "urology",
      shortDescription: "Advanced urological care including laser stone management, PCNL, URS, and minimally invasive procedures.",
      status: "published" as const,
    },
    {
      name: "Nephrology",
      slug: "nephrology",
      shortDescription: "Comprehensive kidney care, hypertension nephropathy, and renal disease management.",
      status: "published" as const,
    },
    {
      name: "Obstetrics & Gynaecology",
      slug: "obstetrics-gynaecology",
      shortDescription: "Complete women's healthcare, 3D laparoscopic gynaecological procedures, and maternity care.",
      status: "published" as const,
    },
    {
      name: "Dialysis",
      slug: "dialysis",
      shortDescription: "State-of-the-art hemodialysis facility with dedicated RO water plant and round-the-clock nephrology support.",
      status: "published" as const,
    },
    {
      name: "General Surgery",
      slug: "general-surgery",
      shortDescription: "Advanced laparoscopic and open surgical procedures for hernia, gallbladder, and abdominal conditions.",
      status: "published" as const,
    },
    {
      name: "Medicine",
      slug: "medicine",
      shortDescription: "Comprehensive general internal medicine for acute fevers, infections, diabetes, and hypertension.",
      status: "published" as const,
    },
    {
      name: "Pediatrics & NICU",
      slug: "pediatrics-nicu",
      shortDescription: "Specialised paediatric care with a fully equipped Neonatal Intensive Care Unit (NICU).",
      status: "published" as const,
    },
    {
      name: "Radiology",
      slug: "radiology",
      shortDescription: "Advanced diagnostic imaging including digital X-ray and ultrasound color Doppler.",
      status: "published" as const,
    },
    {
      name: "Pathology",
      slug: "pathology",
      shortDescription: "Comprehensive laboratory diagnostic pathology and biochemistry tests.",
      status: "published" as const,
    },
    {
      name: "ICU",
      slug: "icu",
      shortDescription: "24/7 Intensive Care Unit with multi-parameter ventilators and critical life-support systems.",
      status: "published" as const,
    },
  ];

  for (const dept of departments) {
    try {
      await payload.create({ collection: "departments", data: dept });
      console.log(`  + Department: ${dept.name}`);
    } catch (e: any) {
      console.log(`  * Department ${dept.name}: ${e.message}`);
    }
  }

  // Doctors
  const doctors = [
    {
      name: "Dr. Abhishek Yadav",
      slug: "dr-abhishek-yadav",
      specialization: "Managing Director & Senior Urologist",
      qualifications: "MBBS, MS, MCh (Urology) - Senior Uro & Laparoscopic Surgeon",
      bio: "Managing Director and Senior Urologist at Rajendra Hospital with extensive surgical expertise in laser lithotripsy and laparoscopy.",
      status: "published" as const,
    },
    {
      name: "Dr. Pramila Yadav",
      slug: "dr-pramila-yadav",
      specialization: "Senior Gynaecologist & Obstetrician",
      qualifications: "MBBS, MS (Obstetrics & Gynaecology) - Laparoscopy Specialist",
      bio: "Senior Consultant Gynaecologist and Laparoscopic Surgeon specializing in high-risk pregnancies and minimally invasive gynaecology.",
      status: "published" as const,
    },
    {
      name: "Dr. Vijay Pratap Singh",
      slug: "dr-vijay-pratap-singh",
      specialization: "Consultant Nephrologist & Renal Specialist",
      qualifications: "MBBS, MD, DM (Nephrology)",
      bio: "Consultant Nephrologist managing acute and chronic renal failure and the modern hemodialysis unit.",
      status: "published" as const,
    },
    {
      name: "Dr. D. P. Singh",
      slug: "dr-d-p-singh",
      specialization: "Senior General & Laparoscopic Surgeon",
      qualifications: "MBBS, MS (General Surgery)",
      bio: "Senior General and Laparoscopic Surgeon specializing in keyhole abdominal procedures.",
      status: "published" as const,
    },
    {
      name: "Dr. Mahtab Alam Ansari",
      slug: "dr-mahtab-alam-ansari",
      specialization: "Senior Consultant Physician",
      qualifications: "MBBS, MD (Medicine)",
      bio: "Senior Consultant Physician managing general medicine, infectious diseases, and diabetes care.",
      status: "published" as const,
    },
  ];

  for (const doc of doctors) {
    try {
      await payload.create({ collection: "doctors", data: doc });
      console.log(`  + Doctor: ${doc.name}`);
    } catch (e: any) {
      console.log(`  * Doctor ${doc.name}: ${e.message}`);
    }
  }

  // Site Settings
  try {
    await payload.updateGlobal({
      slug: "site-settings",
      data: {
        hospitalName: "Rajendra Hospital",
        tagline: "Center of Advanced URO & Gyane Laparoscopy & Stone Management",
        address: "Deoria Road, Near M.M.M. Engineering College, Gorakhpur",
        phonePrimary: "+91 77030 82561",
        emailPrimary: "info@rajendrahospital.co.in",
        siteUrl: "https://rajendrahospital.co.in",
        nabhCertified: true,
      },
    });
    console.log("  + Site Settings updated");
  } catch (e: any) {
    console.log(`  * Site Settings: ${e.message}`);
  }

  console.log("\nPayload seed complete with verified clean data!");
  process.exit(0);
}

seedPayload().catch((err) => {
  console.error(err);
  process.exit(1);
});
