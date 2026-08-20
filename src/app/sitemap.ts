import type { MetadataRoute } from "next";
import { routes, site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: Array<{ path: string; priority: number }> = [
    { path: routes.home, priority: 1 },
    { path: routes.solution, priority: 0.8 },
    { path: routes.howItWorks, priority: 0.8 },
    { path: routes.story, priority: 0.6 },
    { path: routes.scheduleCall, priority: 0.9 },
  ];

  return pages.map(({ path, priority }) => ({
    url: new URL(path, site.url).toString(),
    changeFrequency: "monthly",
    priority,
  }));
}
