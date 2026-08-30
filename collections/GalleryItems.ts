import type { CollectionConfig } from "payload";

export const GalleryItems: CollectionConfig = {
  slug: "gallery-items",
  admin: {
    useAsTitle: "title",
    group: "Content",
    description: "Hospital gallery photos. Verified empty on old site — add client-approved photos only.",
    defaultColumns: ["title", "isPublished", "displayOrder"],
  },
  fields: [
    {
      name: "asset",
      type: "upload",
      relationTo: "media",
      required: true,
      label: "Photo",
      admin: { description: "Use only hospital-provided or licensed photos." },
    },
    {
      name: "title",
      type: "text",
      label: "Title",
    },
    {
      name: "caption",
      type: "text",
      label: "Caption",
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
        description: "Only published items appear on the gallery page.",
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
