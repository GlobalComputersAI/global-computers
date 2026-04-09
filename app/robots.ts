import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/about-us",
          "/contact-us",
          "/software-solutions",
          "/it-hardware-supply",
          "/it-workforce-amc",
          "/projects",
          "/projects/",
          "/icon.png",
          "/logo.png",
          "/logo_header.png",
          "/logo_header_svr.png",
          "/images/",
          "/brands/",
          "/tech/",
          "/projects/*.jpg",
          "/projects/*.jpeg",
          "/projects/*.png",
          "/projects/*.webp",
          "/projects/*.mp4",
        ],
        disallow: [
          "/api/",
          "/admin/",
          "/_next/",
          "/private/",
          "/tmp/",
          "/*.json$",
        ],
      },
      {
        userAgent: "Googlebot",
        allow: [
          "/",
          "/about-us",
          "/contact-us",
          "/software-solutions",
          "/it-hardware-supply",
          "/it-workforce-amc",
          "/projects",
          "/projects/",
          "/icon.png",
          "/logo.png",
          "/logo_header.png",
          "/logo_header_svr.png",
          "/images/",
          "/brands/",
          "/tech/",
        ],
        disallow: ["/api/", "/admin/", "/private/", "/tmp/"],
      },
    ],
    sitemap: `${process.env.NEXT_PUBLIC_SITE_URL || "https://globalcomputers.net"}/sitemap.xml`,
    host: process.env.NEXT_PUBLIC_SITE_URL || "https://globalcomputers.net",
  };
}