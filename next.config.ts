{/*import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // !! OSTRZEŻENIE !!
    // Pozwala na ukończenie buildu nawet jeśli projekt ma błędy typu.
    // Użyj tego tylko, jeśli lokalnie `npm run build` przechodzi.
    ignoreBuildErrors: true,
  },
};

export default nextConfig;*/}

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["lightningcss"],
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;