import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.beyondsands.in";

  const routes = [
    { path: "", priority: 1.0 },
    { path: "/rooms", priority: 0.95 },
    { path: "/dining", priority: 0.95 },
    { path: "/location", priority: 0.95 },
    { path: "/reviews", priority: 0.9 },
    { path: "/gallery", priority: 0.9 },
    { path: "/booking", priority: 0.9 },
    { path: "/about", priority: 0.85 },
    { path: "/contact", priority: 0.85 },
    { path: "/events-gallery", priority: 0.85 },
    { path: "/weddings-events", priority: 0.85 },
    { path: "/house-rules", priority: 0.7 },
    { path: "/cancellation", priority: 0.7 },
    { path: "/faq", priority: 0.75 },
    { path: "/offers", priority: 0.75 },
    { path: "/experiences", priority: 0.75 },
    { path: "/terms", priority: 0.5 },
    { path: "/privacy", priority: 0.5 },
  ];

  return routes.map((r) => ({
    url: `${baseUrl}${r.path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: r.priority,
  }));
}
