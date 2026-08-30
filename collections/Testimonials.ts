import type { CollectionConfig } from "payload";

export const Testimonials: CollectionConfig = {
  slug: "testimonials",
  admin: {
    useAsTitle: "reviewerName",
    group: "Content",
    description: "Approved patient/doctor testimonials shown on the homepage.",
    defaultColumns: ["reviewerName", "reviewerRole", "isPublished", "displayOrder"],
  },
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "reviewerName",
          type: "text",
          required: true,
          label: "Reviewer Name",
        },
        {
          name: "reviewerRole",
          type: "text",
          label: "Role",
          admin: { description: "e.g. Patient, Doctor" },
        },
      ],
    },
    {
      name: "content",
      type: "textarea",
      required: true,
      label: "Testimonial Text",
    },
    {
      name: "avatar",
      type: "upload",
      relationTo: "media",
      label: "Avatar Photo",
    },
    {
      name: "displayOrder",
      type: "number",
      defaultValue: 0,
      label: "Display Order",
      admin: { position: "sidebar" },
    },
    {
      name: "isPublished",
      type: "checkbox",
      defaultValue: false,
      label: "Published",
      admin: {
        position: "sidebar",
        description: "Only published testimonials appear on the website.",
      },
    },
  ],
  access: {
    read: () => true,
    create: ({ req }) => ["super_admin", "content_admin"].includes(req?.user?.role),
    update: ({ req }) => ["super_admin", "content_admin"].includes(req?.user?.role),
    delete: ({ req }) => req?.user?.role === "super_admin",
  },
};
