import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.beyondsands.in";

  const routes = [
    "",
    "/about",
    "/experiences",
    "/weddings-events",
    "/offers",
    "/blog",
    "/faq",
    "/contact",
    "/privacy",
    "/terms",
    "/cancellation",
    "/house-rules",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));
}
