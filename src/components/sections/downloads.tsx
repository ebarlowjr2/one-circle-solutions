import { createHash } from "node:crypto";
import { readFileSync, statSync } from "node:fs";
import path from "node:path";
import { downloads } from "@/content/downloads";
import { Icon, type IconName } from "@/components/ui/icons";
import { Container, SectionHeading } from "@/components/ui/primitives";

const categoryStyles: Record<string, string> = {
  Hardening: "bg-brand-50 text-brand-700",
  "Incident Response": "bg-amber-50 text-amber-700",
  Template: "bg-sky-50 text-sky-700",
};

const formatIcons: Record<string, IconName> = {
  PowerShell: "scan",
  Bash: "scan",
  Markdown: "layers",
};

function fileMeta(file: string) {
  const abs = path.join(process.cwd(), "public", "downloads", file);
  const bytes = statSync(abs).size;
  const sha256 = createHash("sha256").update(readFileSync(abs)).digest("hex");
  const size =
    bytes >= 1024 * 1024
      ? `${(bytes / (1024 * 1024)).toFixed(1)} MB`
      : `${Math.max(1, Math.round(bytes / 1024))} KB`;
  return { size, sha256 };
}

// Size and checksum are computed from the real files at build time, so the
// listing can never drift from what's actually served.
export function DownloadsSection() {
  return (
    <section className="border-b border-slate-200 bg-slate-50 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Scripts & tools"
          title="Free tooling from our bench"
          description="The same baselines and templates we use in engagements, free to download and use. Every file lists its SHA-256 checksum — verify before you run, exactly as you'd expect a security firm to tell you."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {downloads.map((item) => {
            const meta = fileMeta(item.file);
            return (
              <article
                key={item.file}
                className="flex flex-col rounded-xl border border-slate-200 bg-white p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex rounded-lg bg-gradient-to-br from-brand-500 to-brand-purple p-2.5">
                    <Icon
                      name={formatIcons[item.format] ?? "layers"}
                      className="h-5 w-5 text-white"
                    />
                  </span>
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${categoryStyles[item.category]}`}
                  >
                    {item.category}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>

                <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-1.5 border-t border-slate-100 pt-4 text-xs text-slate-500">
                  <div className="flex justify-between gap-2">
                    <dt>Format</dt>
                    <dd className="font-medium text-slate-700">{item.format}</dd>
                  </div>
                  <div className="flex justify-between gap-2">
                    <dt>Size</dt>
                    <dd className="font-medium text-slate-700">{meta.size}</dd>
                  </div>
                  <div className="flex justify-between gap-2">
                    <dt>Version</dt>
                    <dd className="font-medium text-slate-700">{item.version}</dd>
                  </div>
                  <div className="flex justify-between gap-2">
                    <dt>Updated</dt>
                    <dd className="font-medium text-slate-700">{item.updated}</dd>
                  </div>
                  <div className="col-span-2 flex justify-between gap-2">
                    <dt>Requires</dt>
                    <dd className="text-right font-medium text-slate-700">
                      {item.requires}
                    </dd>
                  </div>
                </dl>

                <div className="mt-3 rounded-md bg-slate-50 px-3 py-2">
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                    SHA-256
                  </p>
                  <code className="mt-0.5 block break-all font-mono text-[10px] leading-relaxed text-slate-500">
                    {meta.sha256}
                  </code>
                </div>

                <a
                  href={`/downloads/${item.file}`}
                  download
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-md bg-brand-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-brand-400"
                >
                  <Icon name="arrow-right" className="h-4 w-4 rotate-90" />
                  Download {item.file}
                </a>
              </article>
            );
          })}
        </div>
        <p className="mt-8 text-sm text-slate-500">
          These tools apply conservative defaults, but every environment is
          different — read the script, run report-only mode first, and test
          before production. Want a reviewed, managed rollout instead?{" "}
          <a href="/contact" className="font-semibold text-brand-700 hover:text-brand-500">
            Talk to us
          </a>
          .
        </p>
      </Container>
    </section>
  );
}
