import type { GlobalConfig } from "payload";

export const SiteSettings: GlobalConfig = {
  slug: "site-settings",
  label: "Site Settings",
  admin: {
    group: "Administration",
    description: "Global hospital contact info, branding, and site-wide settings.",
  },
  access: {
    read: () => true,
    update: ({ req }) => req?.user?.role === "super_admin",
  },
  fields: [
    // â”€â”€ Branding â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    {
      type: "collapsible",
      label: "ðŸ¥ Branding",
      fields: [
        {
          name: "hospitalName",
          type: "text",
          label: "Hospital Name",
          defaultValue: "Rajendra Hospital",
        },
        {
          name: "tagline",
          type: "text",
          label: "Tagline",
          defaultValue: "Center of Advanced URO & Gyane Laparoscopy & Stone Management",
        },
        {
          name: "logo",
          type: "upload",
          relationTo: "media",
          label: "Logo",
          admin: { description: "Upload official hospital logo." },
        },
        {
          name: "favicon",
          type: "upload",
          relationTo: "media",
          label: "Favicon",
        },
      ],
    },

    // â”€â”€ Contact â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    {
      type: "collapsible",
      label: "ðŸ“ž Contact Details â€” CLIENT CONFIRMATION REQUIRED",
      fields: [
        {
          name: "address",
          type: "textarea",
          label: "Full Address",
          defaultValue: "Gorakhpur, Deoria Road, Near M.M.M. Engineering College, Gorakhpur, Uttar Pradesh",
          admin: { description: "Shown in footer and contact page." },
        },
        {
          type: "row",
          fields: [
            {
              name: "phonePrimary",
              type: "text",
              label: "Primary Phone âš ï¸ CONFIRM",
              defaultValue: "+91 77030 82561",
            },
            {
              name: "phoneEmergency",
              type: "text",
              label: "Emergency Phone âš ï¸ CONFIRM",
              defaultValue: "+91 77030 82561",
            },
          ],
        },
        {
          name: "email",
          type: "email",
          label: "Email âš ï¸ CONFIRM",
          defaultValue: "info@rajendrahospital.co.in",
        },
      ],
    },

    // â”€â”€ Social Media â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    {
      type: "collapsible",
      label: "ðŸ“± Social Media â€” Add only verified accounts",
      fields: [
        {
          name: "facebook",
          type: "text",
          label: "Facebook URL",
          admin: { description: "Leave blank if not confirmed." },
        },
        {
          name: "instagram",
          type: "text",
          label: "Instagram URL",
        },
        {
          name: "youtube",
          type: "text",
          label: "YouTube URL",
        },
        {
          name: "twitter",
          type: "text",
          label: "Twitter / X URL",
        },
      ],
    },

    // â”€â”€ SEO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    {
      type: "collapsible",
      label: "ðŸ” Default SEO",
      fields: [
        {
          name: "seoTitle",
          type: "text",
          label: "Default SEO Title",
          defaultValue: "Rajendra Hospital - Best Hospital in Gorakhpur",
          maxLength: 70,
        },
        {
          name: "seoDescription",
          type: "textarea",
          label: "Default Meta Description",
          defaultValue: "Receive superior medical treatment at Rajendra Hospital - best hospital in Gorakhpur.",
          maxLength: 160,
        },
        {
          name: "googleMapsUrl",
          type: "text",
          label: "Google Maps Embed URL",
          admin: { description: "Paste the Google Maps embed URL for the Contact page." },
        },
      ],
    },
  ],
};
