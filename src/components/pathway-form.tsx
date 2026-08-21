"use client";

import { useState, type FormEvent } from "react";

const inputStyles =
  "w-full rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-500 focus:border-brand-500 focus:outline-none";

// Simpler intake for the Pathway to Protection offer. Clicking through from
// the promo already signals intent, so there's no service selector — just
// the essentials to scope and follow up on a quote.
export function PathwayForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/pathway", {
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
          You&apos;re on the Pathway.
        </p>
        <p className="mt-2 text-sm text-slate-600">
          Thanks — we&apos;ve got your request and will reach out with next
          steps and a quote for your systems.
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
          <input id="company" name="company" autoComplete="organization" className={inputStyles} />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-slate-700">
            Phone <span className="text-slate-500">(optional)</span>
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputStyles} />
        </div>
      </div>
      <div>
        <label htmlFor="systems" className="mb-1.5 block text-sm font-medium text-slate-700">
          How many systems? <span className="text-slate-500">(approximate is fine)</span>
        </label>
        <input
          id="systems"
          name="systems"
          type="number"
          min="1"
          inputMode="numeric"
          placeholder="e.g. 12"
          className={inputStyles}
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700">
          Anything else? <span className="text-slate-500">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="Timeline, current tools, questions about the offer…"
          className={inputStyles}
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-md bg-brand-500 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-brand-400 disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Get on the Pathway"}
      </button>
      {status === "error" ? (
        <p className="text-sm text-red-600">
          Something went wrong. Please try again or email us directly.
        </p>
      ) : null}
      <p className="text-xs leading-relaxed text-slate-500">
        We&apos;ll use what you share here only to set up your Pathway to
        Protection quote and follow up. No lists, no sequences.
      </p>
    </form>
  );
}
