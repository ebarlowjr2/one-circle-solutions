import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getJob, jobs } from "@/content/careers";
import { pageMetadata } from "@/lib/seo";
import { Container, Eyebrow } from "@/components/ui/primitives";
import { ApplyForm } from "@/components/apply-form";

export function generateStaticParams() {
  return jobs.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const job = getJob(slug);
  if (!job) return {};
  return pageMetadata({
    title: `Apply — ${job.title}`,
    description: `Apply for the ${job.title} role at One Circle Solutions. Upload your résumé and tell us why you're a fit.`,
    path: `/careers/${job.slug}/apply`,
    absoluteTitle: true,
  });
}

export default async function ApplyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = getJob(slug);
  if (!job) notFound();

  return (
    <div className="bg-white py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-2xl">
          <Eyebrow>Careers · Apply</Eyebrow>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Apply — {job.title}
          </h1>
          <p className="mt-4 leading-relaxed text-slate-600">
            Upload your résumé and tell us a bit about yourself. We read every
            application and reply to candidates we&apos;d like to talk with.
          </p>
          <div className="mt-8">
            <ApplyForm position={job.title} />
          </div>
          <p className="mt-8 text-sm">
            <Link
              href={`/careers/${job.slug}`}
              className="font-semibold text-brand-700 hover:text-brand-500"
            >
              ← Back to the role
            </Link>
          </p>
        </div>
      </Container>
    </div>
  );
}
