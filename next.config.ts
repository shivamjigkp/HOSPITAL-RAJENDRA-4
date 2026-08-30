import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "*.r2.cloudflarestorage.com" },
      { protocol: "https", hostname: "*.backblazeb2.com" },
      { protocol: "https", hostname: "admin.amritahospitals.org" },
    ],
  },
};

export default withPayload(nextConfig);