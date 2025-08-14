import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.sellhousefast.local";
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/california`, lastModified: new Date() },
    { url: `${base}/washington`, lastModified: new Date() },
    { url: `${base}/privacy`, lastModified: new Date() },
    { url: `${base}/terms`, lastModified: new Date() },
  ];
} 