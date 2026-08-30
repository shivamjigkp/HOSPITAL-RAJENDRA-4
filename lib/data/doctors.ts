export interface Doctor {
  id: string;
  name: string;
  slug: string;
  specialization: string;
  qualifications: string;
  departmentSlug: string;
  photo: string;
  timing: string;
  days: string;
  experience: string;
}

export const DOCTORS: Doctor[] = [
  {
    id: "1",
    name: "Dr. Abhishek Yadav",
    slug: "dr-abhishek-yadav",
    specialization: "Urologist & Transplant Surgeon",
    qualifications: "MBBS, MS, MCh (Urology) - Senior Urologist & Laparoscopic Surgeon",
    departmentSlug: "urology",
    photo: "/doctors/dr-abhishek-yadav.png",
    timing: "10:00 AM - 04:00 PM",
    days: "Mon - Sat",
    experience: "15+ Years Clinical Experience",
  },
  {
    id: "2",
    name: "Dr. Pramila Yadav",
    slug: "dr-pramila-yadav",
    specialization: "Obstetrician & Gynaecologist",
    qualifications: "MBBS, MS (Obstetrics & Gynaecology) - Laparoscopy Specialist",
    departmentSlug: "obstetrics-gynaecology",
    photo: "/doctors/dr-pramila-yadav.png",
    timing: "10:00 AM - 03:00 PM",
    days: "Mon - Sat",
    experience: "12+ Years Clinical Experience",
  },
  {
    id: "3",
    name: "Dr. Vijay Pratap Singh",
    slug: "dr-vijay-pratap-singh",
    specialization: "Consultant Nephrologist",
    qualifications: "MBBS, MD, DM (Nephrology) - Renal Specialist",
    departmentSlug: "nephrology",
    photo: "/doctors/dr-vijay-pratap-singh.png",
    timing: "10:00 AM - 04:00 PM",
    days: "Mon - Sat",
    experience: "10+ Years Clinical Experience",
  },
  {
    id: "4",
    name: "Dr. D. P. Singh",
    slug: "dr-d-p-singh",
    specialization: "General & Laparoscopic Surgeon",
    qualifications: "MBBS, MS (General Surgery) - Senior Surgeon",
    departmentSlug: "general-surgery",
    photo: "/doctors/dr-dp-singh.png",
    timing: "11:00 AM - 05:00 PM",
    days: "Mon - Sat",
    experience: "14+ Years Clinical Experience",
  },
  {
    id: "5",
    name: "Dr. Mahtab Alam Ansari",
    slug: "dr-mahtab-alam-ansari",
    specialization: "General Physician & Consultant",
    qualifications: "MBBS, MD (Medicine) - Senior Consultant Physician",
    departmentSlug: "medicine",
    photo: "/doctors/dr-mahtab-alam-ansari.png",
    timing: "09:00 AM - 02:00 PM",
    days: "Mon - Sat",
    experience: "10+ Years Clinical Experience",
  },
];
