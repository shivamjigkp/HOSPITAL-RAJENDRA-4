import type { CollectionConfig } from "payload";

export const Doctors: CollectionConfig = {
  slug: "doctors",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "specialty", "department", "status", "updatedAt"],
    group: "Content",
    description: "Hospital medical team and specialists shown on the website.",
  },
  versions: {
    drafts: true,
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      label: "Full Name",
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      label: "URL Slug",
      admin: {
        description: "URL slug, e.g. dr-abhishek-yadav",
      },
    },
    {
      name: "title",
      type: "text",
      label: "Title / Designation",
    },
    {
      name: "specialty",
      type: "text",
      label: "Specialty / Sub-Specialty",
    },
    {
      name: "qualifications",
      type: "text",
      label: "Qualifications",
    },
    {
      name: "experience",
      type: "text",
      label: "Years of Experience",
    },
    {
      name: "department",
      type: "relationship",
      relationTo: "departments",
      label: "Department",
    },
    {
      name: "photo",
      type: "upload",
      relationTo: "media",
      label: "Doctor Photo",
    },
    {
      name: "bio",
      type: "textarea",
      label: "Biography",
    },
    {
      name: "displayOrder",
      type: "number",
      defaultValue: 0,
      label: "Display Order",
    },
    {
      name: "seoTitle",
      type: "text",
      label: "SEO Title",
    },
    {
      name: "seoDescription",
      type: "textarea",
      label: "Meta Description",
    },
    {
      name: "status",
      type: "select",
      options: [
        { label: "Published", value: "published" },
        { label: "Draft", value: "draft" },
      ],
      defaultValue: "published",
      label: "Status",
      admin: {
        position: "sidebar",
      },
    },
  ],
};
