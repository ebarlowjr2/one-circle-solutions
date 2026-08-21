"use client";

import { useState, type FormEvent, type ReactNode } from "react";

const inputStyles =
  "w-full rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-500 focus:border-brand-500 focus:outline-none";

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-slate-700">
        {label}
      </label>
      {children}
    </div>
  );
}

export function ApplyForm({ position }: { position: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const form = e.currentTarget;
    const data = new FormData(form);
    data.set("position", position);
    try {
      const res = await fetch("/api/apply", { method: "POST", body: data });
      const json = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(json?.error || "Request failed");
      setStatus("sent");
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-8 text-center">
        <p className="text-lg font-semibold text-slate-900">
          Thanks — application received.
        </p>
        <p className="mt-2 text-sm text-slate-500">
          We read every application and reply to candidates we&apos;d like to
          talk with.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name">
          <input name="name" required autoComplete="name" className={inputStyles} />
        </Field>
        <Field label="Email">
          <input name="email" type="email" required autoComplete="email" className={inputStyles} />
        </Field>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Phone">
          <input name="phone" type="tel" required autoComplete="tel" className={inputStyles} />
        </Field>
        <Field label="LinkedIn (optional)">
          <input name="linkedin" className={inputStyles} placeholder="https://linkedin.com/in/…" />
        </Field>
      </div>
      <Field label="Why you're a fit">
        <textarea
          name="note"
          rows={5}
          required
          className={inputStyles}
          placeholder="A short note about your experience and why this role is a fit."
        />
      </Field>
      <div>
        <label htmlFor="resume" className="mb-1.5 block text-sm font-medium text-slate-700">
          Résumé <span className="text-slate-500">(PDF or Word, max 4 MB)</span>
        </label>
        <input
          id="resume"
          name="resume"
          type="file"
          required
          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          className="block w-full text-sm text-slate-600 file:mr-4 file:rounded-md file:border-0 file:bg-brand-500 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-slate-950 hover:file:bg-brand-400"
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-md bg-brand-500 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-brand-400 disabled:opacity-60"
      >
        {status === "sending" ? "Submitting…" : "Submit application"}
      </button>
      {status === "error" ? (
        <p className="text-sm text-red-600">
          {error || "Something went wrong. Please try again or email us directly."}
        </p>
      ) : null}
      <p className="text-xs leading-relaxed text-slate-500">
        We use what you share here only to evaluate your application. One Circle
        Solutions is an equal-opportunity employer.
      </p>
    </form>
  );
}
