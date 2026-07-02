import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // TEMPORARY: serve the static "Coming Soon" page at the site root.
  // The real homepage still lives in app/page.tsx — remove this rewrite to restore it.
  async rewrites() {
    return {
      beforeFiles: [{ source: "/", destination: "/coming-soon.html" }],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
