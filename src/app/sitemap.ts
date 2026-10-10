import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
    },
    {
      url: `${siteConfig.url}/projects/reservation-platform`,
    },
  ];
}
