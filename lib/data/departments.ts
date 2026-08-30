import type { DepartmentStatic } from "@/types";

// Static department data — used as fallback before CMS is connected.
// All 10 departments verified from old Rajendra Hospital website.
// Short descriptions are general medical descriptions — no invented claims.

export const DEPARTMENTS: DepartmentStatic[] = [
  {
    id: "urology",
    name: "Urology",
    slug: "urology",
    shortDescription:
      "Specialised care for urinary tract conditions in men, women, and children, including kidney stones, prostate health, and bladder disorders.",
    icon: "🫀",
    color: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    id: "nephrology",
    name: "Nephrology",
    slug: "nephrology",
    shortDescription:
      "Comprehensive kidney care including diagnosis and management of chronic kidney disease, hypertension-related kidney conditions, and dialysis planning.",
    icon: "🩺",
    color: "bg-teal-50",
    iconColor: "text-teal-600",
  },
  {
    id: "obstetrics-gynaecology",
    name: "Obstetrics & Gynaecology",
    slug: "obstetrics-gynaecology",
    shortDescription:
      "Expert women's health services covering prenatal care, safe delivery, laparoscopic gynaecological procedures, and reproductive health.",
    icon: "👩‍⚕️",
    color: "bg-pink-50",
    iconColor: "text-pink-600",
  },
  {
    id: "dialysis",
    name: "Dialysis",
    slug: "dialysis",
    shortDescription:
      "State-of-the-art dialysis facilities providing haemodialysis services for patients with chronic or acute kidney failure.",
    icon: "💉",
    color: "bg-indigo-50",
    iconColor: "text-indigo-600",
  },
  {
    id: "general-surgery",
    name: "General Surgery",
    slug: "general-surgery",
    shortDescription:
      "A wide range of surgical procedures including laparoscopic (minimally invasive) surgery, hernia repair, appendectomy, and stone management.",
    icon: "🔬",
    color: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    id: "medicine",
    name: "Medicine",
    slug: "medicine",
    shortDescription:
      "General internal medicine services for diagnosis and management of acute and chronic medical conditions in adults.",
    icon: "💊",
    color: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    id: "pediatrics-nicu",
    name: "Pediatrics & NICU",
    slug: "pediatrics-nicu",
    shortDescription:
      "Dedicated paediatric care for children of all ages, including a Neonatal Intensive Care Unit (NICU) for newborn health needs.",
    icon: "👶",
    color: "bg-yellow-50",
    iconColor: "text-yellow-600",
  },
  {
    id: "radiology",
    name: "Radiology",
    slug: "radiology",
    shortDescription:
      "Advanced diagnostic imaging services including X-ray, ultrasound, and other imaging modalities to support accurate diagnosis.",
    icon: "🩻",
    color: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    id: "pathology",
    name: "Pathology",
    slug: "pathology",
    shortDescription:
      "Laboratory diagnostic services providing accurate testing and analysis to support clinical decision-making.",
    icon: "🧪",
    color: "bg-red-50",
    iconColor: "text-red-600",
  },
  {
    id: "icu",
    name: "ICU",
    slug: "icu",
    shortDescription:
      "Intensive Care Unit providing round-the-clock monitoring and critical care for patients requiring close medical supervision.",
    icon: "🏥",
    color: "bg-slate-50",
    iconColor: "text-slate-600",
  },
];

export function getDepartmentBySlug(slug: string): DepartmentStatic | undefined {
  return DEPARTMENTS.find((d) => d.slug === slug);
}

export const DEPARTMENT_SLUGS = DEPARTMENTS.map((d) => d.slug);
