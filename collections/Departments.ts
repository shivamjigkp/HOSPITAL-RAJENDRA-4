import type { CollectionConfig } from "payload";

export const Departments: CollectionConfig = {
  slug: "departments",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "status", "displayOrder", "updatedAt"],
    group: "Content",
    description: "Hospital departments shown on the public website.",
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
      label: "Department Name",
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      label: "URL Slug",
      admin: {
        description: "URL-friendly name, e.g. urology, nephrology, icu",
      },
    },
    {
      name: "shortDescription",
      type: "textarea",
      label: "Short Description",
      admin: {
        description: "Brief summary shown on department listing and cards.",
      },
    },
    {
      name: "description",
      type: "textarea",
      label: "Full Description",
      admin: {
        description: "Detailed overview of clinical services, procedures, and facilities.",
      },
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      label: "Featured Image (Card)",
    },
    {
      name: "heroImage",
      type: "upload",
      relationTo: "media",
      label: "Hero Image (Detail Page)",
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
