import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";

import { Users } from "./collections/Users";
import { Departments } from "./collections/Departments";
import { Doctors } from "./collections/Doctors";
import { Appointments } from "./collections/Appointments";
import { ContactInquiries } from "./collections/ContactInquiries";
import { Media } from "./collections/Media";
import { Testimonials } from "./collections/Testimonials";
import { GalleryItems } from "./collections/GalleryItems";
import { HeroSlides } from "./collections/HeroSlides";
import { SiteSettings } from "./globals/SiteSettings";

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: "— Rajendra Hospital Admin CMS",
    },
  },
  collections: [
    Users,
    HeroSlides,
    Doctors,
    Departments,
    Appointments,
    ContactInquiries,
    Testimonials,
    GalleryItems,
    Media,
  ],
  globals: [SiteSettings],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL,
    },
    schemaName: "payload",
  }),
  typescript: {
    outputFile: "./types/payload-types.ts",
  },
  secret: process.env.PAYLOAD_SECRET || "dev-secret-rajendra-hospital-2026-local",
});
