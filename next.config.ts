import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // !! OSTRZEŻENIE !!
    // Pozwala na ukończenie buildu nawet jeśli projekt ma błędy typu.
    // Użyj tego tylko, jeśli lokalnie `npm run build` przechodzi.
    ignoreBuildErrors: true,
  },
  /* config options here */
};

export default nextConfig;