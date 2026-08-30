import { DEPARTMENTS as STATIC_DEPTS } from "@/lib/data/departments";
import { DOCTORS as STATIC_DOCS } from "@/lib/data/doctors";

// Instant synchronous & resilient loader - zero waiting, zero spinning!
export async function getDepartments() {
  return STATIC_DEPTS;
}

export async function getDepartmentBySlug(slug: string) {
  return STATIC_DEPTS.find((d) => d.slug === slug) || null;
}

export async function getDoctors() {
  return STATIC_DOCS;
}

export async function getHeroSlides() {
  return [];
}

export async function getTestimonials() {
  return [
    {
      id: "1",
      name: "Z Ali",
      role: "Verified Patient",
      content:
        "The care and attention I received at Rajendra Hospital was exceptional. The doctors and staff were professional, caring, and supportive throughout my treatment.",
      rating: 5,
    },
    {
      id: "2",
      name: "Vijay Singh",
      role: "Verified Patient",
      content:
        "I am very satisfied with the treatment I received. The medical team at Rajendra Hospital is highly skilled and the facilities are excellent.",
      rating: 5,
    },
    {
      id: "3",
      name: "Dr. Ajay Kumar Mishra",
      role: "Medical Practitioner",
      content:
        "Rajendra Hospital maintains high standards of medical care. The infrastructure, equipment, and the team's dedication to patient health are commendable.",
      rating: 5,
    },
  ];
}

export async function getSiteSettings() {
  return {
    hospitalName: "Rajendra Hospital",
    tagline: "Center of Advanced URO & Gyane Laparoscopy & Stone Management",
    address: "Deoria Road, Near M.M.M. Engineering College, Gorakhpur",
    phonePrimary: "+91 77030 82561",
    emailPrimary: "info@rajendrahospital.co.in",
    siteUrl: "https://rajendrahospital.co.in",
    nabhCertified: true,
  };
}
