import type { CollectionConfig } from "payload";

export const ContactInquiries: CollectionConfig = {
  slug: "contact-inquiries",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "phone", "email", "subject", "status", "createdAt"],
    group: "Operations",
    description: "Inbound messages sent via the contact form.",
  },
  access: {
    create: () => true,
    read: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user && user.role === "super_admin"),
  },
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
          label: "Name",
          admin: { width: "50%" },
        },
        {
          name: "phone",
          type: "text",
          label: "Phone",
          admin: { width: "50%" },
        },
      ],
    },
    {
      type: "row",
      fields: [
        {
          name: "email",
          type: "email",
          label: "Email",
          admin: { width: "50%" },
        },
        {
          name: "subject",
          type: "text",
          label: "Subject",
          admin: { width: "50%" },
        },
      ],
    },
    {
      name: "message",
      type: "textarea",
      required: true,
      label: "Message",
    },
    {
      name: "status",
      type: "select",
      options: [
        { label: "New - Awaiting Review", value: "new" },
        { label: "In Progress - Being Handled", value: "in_progress" },
        { label: "Resolved - Completed", value: "resolved" },
        { label: "Spam", value: "spam" },
      ],
      defaultValue: "new",
      label: "Status",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "staffNotes",
      type: "textarea",
      label: "Staff Notes",
      admin: {
        position: "sidebar",
      },
    },
  ],
};
