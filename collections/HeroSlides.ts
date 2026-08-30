import type { CollectionConfig } from "payload";

export const HeroSlides: CollectionConfig = {
  slug: "hero-slides",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "tag", "order", "status"],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      label: "Slide Headline",
    },
    {
      name: "subtitle",
      type: "text",
      label: "Sub-headline / Highlight",
    },
    {
      name: "tag",
      type: "text",
      label: "Eyebrow Tag (e.g. CENTER OF EXCELLENCE)",
    },
    {
      name: "desc",
      type: "textarea",
      label: "Body Description",
    },
    {
      name: "badge",
      type: "text",
      label: "Status Badge (e.g. 100-Beded • NABH Certified)",
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      label: "Slide Image",
    },
    {
      name: "ctaText",
      type: "text",
      defaultValue: "Book Appointment",
      label: "Primary Button Text",
    },
    {
      name: "ctaLink",
      type: "text",
      defaultValue: "/appointments",
      label: "Primary Button Link",
    },
    {
      name: "secondaryText",
      type: "text",
      defaultValue: "View Departments",
      label: "Secondary Button Text",
    },
    {
      name: "secondaryLink",
      type: "text",
      defaultValue: "/departments",
      label: "Secondary Button Link",
    },
    {
      name: "order",
      type: "number",
      defaultValue: 1,
      label: "Display Order",
    },
    {
      name: "status",
      type: "select",
      options: [
        { label: "Published", value: "published" },
        { label: "Draft", value: "draft" },
      ],
      defaultValue: "published",
    },
  ],
};
