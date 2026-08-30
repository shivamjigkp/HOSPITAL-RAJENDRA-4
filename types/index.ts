// Rajendra Hospital — Shared TypeScript Types

export type DepartmentStatus = "PUBLISHED" | "DRAFT";
export type DoctorStatus = "PUBLISHED" | "DRAFT" | "UNPUBLISHED";
export type AppointmentStatus =
  | "PENDING"
  | "CONFIRMED"
  | "RESCHEDULED"
  | "CANCELLED"
  | "COMPLETED"
  | "NO_SHOW";
export type InquiryStatus = "NEW" | "IN_PROGRESS" | "RESOLVED" | "SPAM";

// ─── Department ───────────────────────────────────────────────────────────────

export interface Department {
  id: string;
  name: string;
  slug: string;
  shortDescription?: string;
  description?: string;
  featuredImageUrl?: string;
  heroImageUrl?: string;
  status: DepartmentStatus;
  displayOrder: number;
  seoTitle?: string;
  seoDescription?: string;
  createdAt: string;
  updatedAt: string;
}

// Static data shape used before CMS is wired up
export interface DepartmentStatic {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  icon: string;          // emoji or SVG path name
  color: string;         // Tailwind bg class e.g. "bg-blue-50"
  iconColor: string;     // Tailwind text class e.g. "text-blue-600"
}

// ─── Doctor ───────────────────────────────────────────────────────────────────

export interface Doctor {
  id: string;
  name: string;
  slug: string;
  title?: string;                    // CLIENT CONFIRMATION REQUIRED
  qualifications?: string;           // CLIENT CONFIRMATION REQUIRED
  specialty?: string;
  departmentId?: string;
  departmentName?: string;
  bio?: string;                      // Real bio — NOT old placeholder
  photoUrl?: string;
  experience?: string;
  status: DoctorStatus;
  displayOrder: number;
}

// Static data shape
export interface DoctorStatic {
  id: string;
  name: string;
  title: string;                     // e.g. "Dr." only — qualifications pending client confirmation
  specialty: string;
  departmentSlug?: string;
  photoPlaceholder: boolean;         // true = no real photo, use initials avatar
}

// ─── Appointment ──────────────────────────────────────────────────────────────

export interface AppointmentFormData {
  patientName: string;
  patientPhone: string;
  patientEmail?: string;
  departmentId?: string;
  doctorId?: string;
  preferredDate?: string;
  preferredTime?: string;
  message?: string;
  consentGiven: boolean;
}

export interface Appointment extends AppointmentFormData {
  id: string;
  status: AppointmentStatus;
  createdAt: string;
  updatedAt: string;
}

// ─── Contact Inquiry ──────────────────────────────────────────────────────────

export interface ContactFormData {
  name: string;
  phone?: string;
  email?: string;
  subject?: string;
  message: string;
}

export interface ContactInquiry extends ContactFormData {
  id: string;
  status: InquiryStatus;
  createdAt: string;
}

// ─── Testimonial ──────────────────────────────────────────────────────────────

export interface Testimonial {
  id: string;
  reviewerName: string;
  reviewerRole?: string;
  content: string;
  avatarUrl?: string;
}

// ─── API Response Wrapper ─────────────────────────────────────────────────────

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}
