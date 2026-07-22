import Link from "next/link";
import type { Article } from "@/content/articles";
import { articleTypeStyles } from "@/content/resources";
import { Icon } from "@/components/ui/icons";

// Shared card grid used by the Guides / Checklists / Blog listing pages.
export function ArticleGrid({ items }: { items: Article[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Link
          key={item.slug}
          href={`/resources/${item.slug}`}
          className="group flex flex-col rounded-xl border border-slate-200 p-7 transition-colors hover:border-brand-500"
        >
          <div className="flex items-center justify-between">
            <span
              className={`rounded-full px-2.5 py-1 text-xs font-semibold ${articleTypeStyles[item.category]}`}
            >
              {item.category}
            </span>
            <span className="text-xs text-slate-400">{item.readTime}</span>
          </div>
          <h2 className="mt-4 text-lg font-semibold leading-snug text-slate-900">
            {item.title}
          </h2>
          <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-600">
            {item.description}
          </p>
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
            Read article
            <Icon
              name="arrow-right"
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
            />
          </span>
        </Link>
      ))}
    </div>
  );
}
