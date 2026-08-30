import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  upload: {
    staticDir: "public/media",
    mimeTypes: ["image/jpeg", "image/png", "image/webp", "image/avif", "image/svg+xml"],
    imageSizes: [
      {
        name: "thumbnail",
        width: 300,
        height: 200,
        position: "centre",
      },
      {
        name: "card",
        width: 600,
        height: 400,
        position: "centre",
      },
      {
        name: "hero",
        width: 1200,
        height: 600,
        position: "centre",
      },
    ],
  },
  admin: {
    group: "Content",
    description: "Images and files used across the website.",
    useAsTitle: "filename",
  },
  fields: [
    {
      name: "alt",
      type: "text",
      label: "Alt Text",
      required: true,
      admin: {
        description: "Describe the image for accessibility and SEO. Required.",
      },
    },
    {
      name: "caption",
      type: "text",
      label: "Caption",
      admin: {
        description: "Optional caption shown below the image.",
      },
    },
  ],
  access: {
    read: () => true,
    create: ({ req }) => !!req.user,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => req?.user?.role === "super_admin" || req?.user?.role === "content_admin",
  },
};
