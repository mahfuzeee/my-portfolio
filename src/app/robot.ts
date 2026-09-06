import { MetadataRoute } from "next";

const baseUrl = "https://mahfuz-rahman.com"; // Update with actual domain

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
