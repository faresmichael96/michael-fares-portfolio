import type { MetadataRoute } from "next";

const siteUrl = "https://your-domain.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
    },
  ];
}