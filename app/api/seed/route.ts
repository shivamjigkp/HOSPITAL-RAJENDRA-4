import { getPayload } from "payload";
import config from "@payload-config";
import { NextResponse } from "next/server";

export async function GET() {
  // Only allow in development
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json({ error: "Not allowed in production" }, { status: 403 });
  }

  const payload = await getPayload({ config });

  const results: string[] = [];

  const departments = [
    { name: "Urology", slug: "urology", shortDescription: "Advanced urological care including stone management and minimally invasive procedures.", status: "published" as const },
    { name: "Nephrology", slug: "nephrology", shortDescription: "Comprehensive kidney care and management of renal diseases.", status: "published" as const },
    { name: "Obstetrics & Gynaecology", slug: "obstetrics-gynaecology", shortDescription: "Complete women healthcare including laparoscopic gynaecological procedures.", status: "published" as const },
    { name: "Dialysis", slug: "dialysis", shortDescription: "State-of-the-art dialysis facility with experienced nephrology support.", status: "published" as const },
    { name: "General Surgery", slug: "general-surgery", shortDescription: "Advanced laparoscopic and open surgical procedures by experienced surgeons.", status: "published" as const },
    { name: "Medicine", slug: "medicine", shortDescription: "Comprehensive general medicine services for diagnosis and treatment.", status: "published" as const },
    { name: "Pediatrics & NICU", slug: "pediatrics-nicu", shortDescription: "Specialised paediatric care with a fully equipped Neonatal ICU.", status: "published" as const },
    { name: "Radiology", slug: "radiology", shortDescription: "Advanced diagnostic imaging including ultrasound, X-ray, and more.", status: "published" as const },
    { name: "Pathology", slug: "pathology", shortDescription: "Comprehensive laboratory and diagnostic pathology services.", status: "draft" as const },
    { name: "ICU", slug: "icu", shortDescription: "24/7 Intensive Care Unit with advanced monitoring and life-support systems.", status: "published" as const },
  ];

  for (const dept of departments) {
    try {
      await payload.create({ collection: "departments", data: dept });
      results.push(`✓ Department: ${dept.name}`);
    } catch (e: any) {
      results.push(`⚠ Department ${dept.name}: ${e.message}`);
    }
  }

  const doctors = [
    { name: "Dr. Abhishek Yadav", slug: "dr-abhishek-yadav", specialization: "CLIENT CONFIRMATION REQUIRED", qualifications: "CLIENT CONFIRMATION REQUIRED", status: "draft" as const },
    { name: "Dr. Pramila Yadav", slug: "dr-pramila-yadav", specialization: "CLIENT CONFIRMATION REQUIRED", qualifications: "CLIENT CONFIRMATION REQUIRED", status: "draft" as const },
    { name: "Dr. Vijay Pratap Singh", slug: "dr-vijay-pratap-singh", specialization: "CLIENT CONFIRMATION REQUIRED", qualifications: "CLIENT CONFIRMATION REQUIRED", status: "draft" as const },
    { name: "Dr. D. P. Singh", slug: "dr-dp-singh", specialization: "CLIENT CONFIRMATION REQUIRED", qualifications: "CLIENT CONFIRMATION REQUIRED", status: "draft" as const },
    { name: "Dr. Mahtab Alam Ansari", slug: "dr-mahtab-alam-ansari", specialization: "CLIENT CONFIRMATION REQUIRED", qualifications: "CLIENT CONFIRMATION REQUIRED", status: "draft" as const },
  ];

  for (const doc of doctors) {
    try {
      await payload.create({ collection: "doctors", data: doc });
      results.push(`✓ Doctor: ${doc.name} [DRAFT]`);
    } catch (e: any) {
      results.push(`⚠ Doctor ${doc.name}: ${e.message}`);
    }
  }

  try {
    await payload.updateGlobal({
      slug: "site-settings",
      data: {
        hospitalName: "Rajendra Hospital",
        tagline: "Center of Advanced URO & Gyane Laparoscopy & Stone Management",
        address: "Deoria Road, Near M.M.M. Engineering College, Gorakhpur",
        phonePrimary: "+91 77030 82561",
        emailPrimary: "info@rajendrahospital.co.in",
        nabhCertified: true,
      },
    });
    results.push("✓ Site Settings updated");
  } catch (e: any) {
    results.push(`⚠ Site Settings: ${e.message}`);
  }

  return NextResponse.json({ success: true, results });
}