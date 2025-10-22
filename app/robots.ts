import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/private/", "/admin/", "/_next/", "/api/", "*.json$"],
    },
    sitemap: "https://taropay.com/sitemap.xml",
  };
}
