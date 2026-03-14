import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://globalcomputers.net";

  const pages = [
    "",
    "/about-us",
    "/it-hardware-supply",
    "/software-solutions",
    "/it-workforce-amc",
    "/projects",
    "/contact-us",
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: page === "" ? 1 : 0.8,
  }));
}