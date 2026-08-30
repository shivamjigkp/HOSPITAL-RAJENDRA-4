import type { CollectionConfig } from "payload";

export const Appointments: CollectionConfig = {
  slug: "appointments",
  admin: {
    useAsTitle: "patientName",
    defaultColumns: ["patientName", "phone", "department", "doctor", "preferredDate", "status", "createdAt"],
    group: "Operations",
    description: "Inbound appointment requests submitted via the public website.",
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
          name: "patientName",
          type: "text",
          required: true,
          label: "Patient Name",
          admin: { width: "50%" },
        },
        {
          name: "phone",
          type: "text",
          required: true,
          label: "Phone Number",
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
          label: "Email Address",
          admin: { width: "50%" },
        },
        {
          name: "consentGiven",
          type: "checkbox",
          label: "Consent Given",
          admin: { width: "50%" },
        },
      ],
    },
    {
      type: "row",
      fields: [
        {
          name: "department",
          type: "relationship",
          relationTo: "departments",
          label: "Department",
          admin: { width: "50%" },
        },
        {
          name: "doctor",
          type: "relationship",
          relationTo: "doctors",
          label: "Doctor",
          admin: { width: "50%" },
        },
      ],
    },
    {
      type: "row",
      fields: [
        {
          name: "preferredDate",
          type: "date",
          label: "Preferred Date",
          admin: { width: "50%" },
        },
        {
          name: "preferredTime",
          type: "text",
          label: "Preferred Time",
          admin: { width: "50%" },
        },
      ],
    },
    {
      name: "message",
      type: "textarea",
      label: "Patient Message / Reason for Visit",
    },
    {
      name: "status",
      type: "select",
      options: [
        { label: "Pending - Awaiting Review", value: "pending" },
        { label: "Confirmed - Patient Confirmed", value: "confirmed" },
        { label: "Rescheduled - New Slot Given", value: "rescheduled" },
        { label: "Cancelled - Cancelled", value: "cancelled" },
        { label: "Completed - Visit Done", value: "completed" },
        { label: "No Show - Did Not Arrive", value: "no_show" },
      ],
      defaultValue: "pending",
      label: "Appointment Status",
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
