import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://globalcomputers.net";

type ChangeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

type SitemapRoute = {
  path: string;
  priority: number;
  changeFrequency: ChangeFrequency;
};

const mainRoutes: SitemapRoute[] = [
  {
    path: "",
    priority: 1,
    changeFrequency: "weekly",
  },
  {
    path: "/about-us",
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    path: "/contact-us",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/software-solutions",
    priority: 0.95,
    changeFrequency: "monthly",
  },
  {
    path: "/it-hardware-supply",
    priority: 0.95,
    changeFrequency: "monthly",
  },
  {
    path: "/it-workforce-amc",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/projects",
    priority: 0.9,
    changeFrequency: "weekly",
  },
];

const projectRoutes: SitemapRoute[] = [
  {
    path: "/projects/restaurant",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/projects/hotel",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/projects/clinic",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/projects/coaching",
    priority: 0.78,
    changeFrequency: "monthly",
  },
  {
    path: "/projects/computer",
    priority: 0.78,
    changeFrequency: "monthly",
  },
  {
    path: "/projects/mobile",
    priority: 0.78,
    changeFrequency: "monthly",
  },
  {
    path: "/projects/showroom",
    priority: 0.78,
    changeFrequency: "monthly",
  },
  {
    path: "/projects/interior",
    priority: 0.76,
    changeFrequency: "monthly",
  },
  {
    path: "/projects/builder",
    priority: 0.76,
    changeFrequency: "monthly",
  },
  {
    path: "/projects/gym",
    priority: 0.78,
    changeFrequency: "monthly",
  },
  {
    path: "/projects/gst-inventory",
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    path: "/projects/car-Rental",
    priority: 0.76,
    changeFrequency: "monthly",
  },
  {
    path: "/projects/Retail-Supermarket",
    priority: 0.8,
    changeFrequency: "monthly",
  },
];

const routes: SitemapRoute[] = [...mainRoutes, ...projectRoutes];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}