import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding Rajendra Hospital database...");

  // ── Departments ───────────────────────────────────────────────────────────
  const departmentData = [
    {
      name: "Urology",
      slug: "urology",
      shortDescription:
        "Specialised care for urinary tract conditions in men, women, and children, including kidney stones, prostate health, and bladder disorders.",
      status: "PUBLISHED" as const,
      displayOrder: 1,
    },
    {
      name: "Nephrology",
      slug: "nephrology",
      shortDescription:
        "Comprehensive kidney care including diagnosis and management of chronic kidney disease, hypertension-related kidney conditions, and dialysis planning.",
      status: "PUBLISHED" as const,
      displayOrder: 2,
    },
    {
      name: "Obstetrics & Gynaecology",
      slug: "obstetrics-gynaecology",
      shortDescription:
        "Expert women's health services covering prenatal care, safe delivery, laparoscopic gynaecological procedures, and reproductive health.",
      status: "PUBLISHED" as const,
      displayOrder: 3,
    },
    {
      name: "Dialysis",
      slug: "dialysis",
      shortDescription:
        "State-of-the-art dialysis facilities providing haemodialysis services for patients with chronic or acute kidney failure.",
      status: "PUBLISHED" as const,
      displayOrder: 4,
    },
    {
      name: "General Surgery",
      slug: "general-surgery",
      shortDescription:
        "A wide range of surgical procedures including laparoscopic (minimally invasive) surgery, hernia repair, appendectomy, and stone management.",
      status: "PUBLISHED" as const,
      displayOrder: 5,
    },
    {
      name: "Medicine",
      slug: "medicine",
      shortDescription:
        "General internal medicine services for diagnosis and management of acute and chronic medical conditions in adults.",
      status: "PUBLISHED" as const,
      displayOrder: 6,
    },
    {
      name: "Pediatrics & NICU",
      slug: "pediatrics-nicu",
      shortDescription:
        "Dedicated paediatric care for children of all ages, including a Neonatal Intensive Care Unit (NICU) for newborn health needs.",
      status: "PUBLISHED" as const,
      displayOrder: 7,
    },
    {
      name: "Radiology",
      slug: "radiology",
      shortDescription:
        "Advanced diagnostic imaging services including X-ray, ultrasound, and other imaging modalities to support accurate diagnosis.",
      status: "PUBLISHED" as const,
      displayOrder: 8,
    },
    {
      name: "Pathology",
      slug: "pathology",
      shortDescription:
        "Laboratory diagnostic services providing accurate testing and analysis to support clinical decision-making.",
      // NOTE: Old site had Anaesthesia content on this page — CLIENT DECISION REQUIRED
      status: "DRAFT" as const,  // Keep DRAFT until content mismatch resolved
      displayOrder: 9,
    },
    {
      name: "ICU",
      slug: "icu",
      shortDescription:
        "Intensive Care Unit providing round-the-clock monitoring and critical care for patients requiring close medical supervision.",
      status: "PUBLISHED" as const,
      displayOrder: 10,
    },
  ];

  for (const dept of departmentData) {
    await prisma.department.upsert({
      where: { slug: dept.slug },
      update: dept,
      create: dept,
    });
    console.log(`  ✓ Department: ${dept.name}`);
  }

  // ── Doctors ───────────────────────────────────────────────────────────────
  // Names verified from old website. All other fields are CLIENT CONFIRMATION REQUIRED.
  // DO NOT publish placeholder bios.

  const urologyDept = await prisma.department.findUnique({ where: { slug: "urology" } });
  const obgynDept   = await prisma.department.findUnique({ where: { slug: "obstetrics-gynaecology" } });
  const medicineDept = await prisma.department.findUnique({ where: { slug: "medicine" } });
  const surgerDept  = await prisma.department.findUnique({ where: { slug: "general-surgery" } });
  const nephroDept  = await prisma.department.findUnique({ where: { slug: "nephrology" } });

  const doctorData = [
    {
      name: "Dr. Abhishek Yadav",
      slug: "dr-abhishek-yadav",
      title: "Dr.",
      specialty: "Urology & Laparoscopic Surgery", // CLIENT CONFIRMATION REQUIRED
      departmentId: urologyDept?.id,
      bio: null,        // No real bio — old site had placeholder, blueprint says do not publish it
      status: "DRAFT" as const,   // DRAFT until qualifications confirmed
      displayOrder: 1,
    },
    {
      name: "Dr. Pramila Yadav",
      slug: "dr-pramila-yadav",
      title: "Dr.",
      specialty: "Obstetrics & Gynaecology", // CLIENT CONFIRMATION REQUIRED
      departmentId: obgynDept?.id,
      bio: null,
      status: "DRAFT" as const,
      displayOrder: 2,
    },
    {
      name: "Dr. Vijay Pratap Singh",
      slug: "dr-vijay-pratap-singh",
      title: "Dr.",
      specialty: "General Medicine", // CLIENT CONFIRMATION REQUIRED
      departmentId: medicineDept?.id,
      bio: null,
      status: "DRAFT" as const,
      displayOrder: 3,
    },
    {
      name: "Dr. D. P. Singh",
      slug: "dr-d-p-singh",
      title: "Dr.",
      specialty: "General Surgery", // CLIENT CONFIRMATION REQUIRED
      departmentId: surgerDept?.id,
      bio: null,
      status: "DRAFT" as const,
      displayOrder: 4,
    },
    {
      name: "Dr. Mahtab Alam Ansari",
      slug: "dr-mahtab-alam-ansari",
      title: "Dr.",
      specialty: "Nephrology & Dialysis", // CLIENT CONFIRMATION REQUIRED
      departmentId: nephroDept?.id,
      bio: null,
      status: "DRAFT" as const,
      displayOrder: 5,
    },
  ];

  for (const doctor of doctorData) {
    await prisma.doctor.upsert({
      where: { slug: doctor.slug },
      update: doctor,
      create: doctor,
    });
    console.log(`  ✓ Doctor: ${doctor.name} [DRAFT — qualifications pending]`);
  }

  // ── Site Settings ─────────────────────────────────────────────────────────
  // [CLIENT CONFIRMATION REQUIRED] — all contact details need client approval before going live

  const siteSettings = [
    { key: "hospital_name", value: "Rajendra Hospital", label: "Hospital Name", group: "branding" },
    { key: "hospital_tagline", value: "Center of Advanced URO & Gyane Laparoscopy & Stone Management", label: "Tagline", group: "branding" },
    { key: "hospital_address", value: "Gorakhpur, Deoria Road, Near M.M.M. Engineering College, Gorakhpur, Uttar Pradesh", label: "Address", group: "contact" },
    // [CLIENT CONFIRMATION REQUIRED] — phone numbers below are from old site and need approval
    { key: "phone_primary", value: "+91 77030 82561", label: "Primary Phone (CLIENT CONFIRMATION REQUIRED)", group: "contact" },
    { key: "email_primary", value: "info@rajendrahospital.co.in", label: "Primary Email (CLIENT CONFIRMATION REQUIRED)", group: "contact" },
    { key: "nabh_certified", value: "true", label: "NABH Certified", group: "accreditation" },
  ];

  for (const setting of siteSettings) {
    await prisma.siteSetting.upsert({
      where: { key: setting.key },
      update: { value: setting.value, label: setting.label, group: setting.group },
      create: setting,
    });
    console.log(`  ✓ Setting: ${setting.key}`);
  }

  console.log("\n✅ Seed complete!");
  console.log("\n⚠️  IMPORTANT: All doctors are DRAFT status.");
  console.log("   Publish them only after client confirms qualifications and titles.");
  console.log("   Pathology department is DRAFT until content mismatch is resolved.");
}

main()
  .catch((e) => {
    console.error("Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
