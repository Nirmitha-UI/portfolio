import { withContentCollections } from "@content-collections/next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Deployed to Cloudflare Workers via OpenNext (see wrangler.jsonc).
  // Security headers live in public/_headers.
  images: { unoptimized: true },
  // Mirrors public/_headers, which Workers only applies to static files.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

initOpenNextCloudflareForDev();

// withContentCollections must be the outermost plugin
export default withContentCollections(nextConfig);
