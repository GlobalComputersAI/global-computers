import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://globalcomputers.net";

const routes: Array<{
  path: string;
  priority: number;
  changeFrequency:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
}> = [
  {
    path: "",
    priority: 1,
    changeFrequency: "weekly",
  },
  {
    path: "/about-us",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/it-hardware-supply",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/software-solutions",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/it-workforce-amc",
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    path: "/projects",
    priority: 0.8,
    changeFrequency: "weekly",
  },
  {
    path: "/contact-us",
    priority: 0.9,
    changeFrequency: "monthly",
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}