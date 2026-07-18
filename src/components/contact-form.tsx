"use client";

import { useState, type FormEvent } from "react";

const interests = [
  "Managed Detection & Response",
  "Managed SIEM",
  "Vulnerability Management",
  "Cloud Security",
  "Incident Response & Readiness",
  "vCISO & Compliance",
  "Not sure yet",
];

const inputStyles =
  "w-full rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="py-10 text-center">
        <p className="text-lg font-semibold text-slate-900">
          Thanks — we&apos;ve got it.
        </p>
        <p className="mt-2 text-sm text-slate-500">
          A practitioner will reply within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700">
            Name
          </label>
          <input id="name" name="name" required autoComplete="name" className={inputStyles} />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700">
            Work email
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={inputStyles} />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-slate-700">
            Company
          </label>
          <input id="company" name="company" required autoComplete="organization" className={inputStyles} />
        </div>
        <div>
          <label htmlFor="interest" className="mb-1.5 block text-sm font-medium text-slate-700">
            What&apos;s on your mind?
          </label>
          <select id="interest" name="interest" className={inputStyles} defaultValue="Not sure yet">
            {interests.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700">
          Tell us about your situation
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Current tooling, team size, compliance obligations, or whatever prompted the search…"
          className={inputStyles}
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-md bg-brand-500 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-brand-400 disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Request a consultation"}
      </button>
      {status === "error" ? (
        <p className="text-sm text-red-600">
          Something went wrong. Please try again or email us directly.
        </p>
      ) : null}
      <p className="text-xs leading-relaxed text-slate-400">
        We use what you share here only to respond to your inquiry. No lists,
        no sequences.
      </p>
    </form>
  );
}
