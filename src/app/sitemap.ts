import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { industries } from "@/content/industries";
import { articles } from "@/content/articles";

// Public, indexable pages only. API routes, previews, and internal pages
// are intentionally excluded.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages = [
    { path: "", priority: 1.0 },
    { path: "/services", priority: 0.9 },
    { path: "/industries", priority: 0.8 },
    { path: "/about", priority: 0.7 },
    { path: "/about/leadership", priority: 0.6 },
    { path: "/about/certifications", priority: 0.6 },
    { path: "/trust", priority: 0.8 },
    { path: "/resources", priority: 0.8 },
    { path: "/contact", priority: 0.8 },
    { path: "/legal/privacy", priority: 0.3 },
    { path: "/legal/terms", priority: 0.3 },
  ].map(({ path, priority }) => ({
    url: `${site.url}${path}`,
    lastModified,
    priority,
  }));

  const servicePages = services.map((service) => ({
    url: `${site.url}/services/${service.slug}`,
    lastModified,
    priority: 0.9,
  }));

  const industryPages = industries.map((industry) => ({
    url: `${site.url}/industries/${industry.slug}`,
    lastModified,
    priority: 0.7,
  }));

  const articlePages = articles.map((article) => ({
    url: `${site.url}/resources/${article.slug}`,
    lastModified: new Date(article.dateModified),
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...industryPages, ...articlePages];
}
