import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "name",
    group: "Administration",
    description: "Admin users and roles for Rajendra Hospital CMS.",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      label: "Full Name",
    },
    {
      name: "role",
      type: "select",
      required: true,
      defaultValue: "editor",
      label: "Role",
      options: [
        { label: "Super Admin — Full access", value: "super_admin" },
        { label: "Content Admin — Pages, Departments, Doctors, Media, SEO", value: "content_admin" },
        { label: "Appointment Staff — Appointments & Inquiries only", value: "appointment_staff" },
        { label: "Editor — Content editing, publishing requires approval", value: "editor" },
      ],
      admin: {
        description: "Controls what this user can access in the admin panel.",
      },
    },
    {
      name: "isActive",
      type: "checkbox",
      defaultValue: true,
      label: "Active Account",
      admin: {
        description: "Uncheck to deactivate this user without deleting.",
      },
    },
  ],
  access: {
    // Only super_admin can manage users
    read: ({ req }) => {
      if (!req.user) return false;
      return req.user.role === "super_admin";
    },
    create: ({ req }) => req?.user?.role === "super_admin",
    update: ({ req }) => req?.user?.role === "super_admin",
    delete: ({ req }) => req?.user?.role === "super_admin",
  },
};
