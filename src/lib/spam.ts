// Tier-1 spam defense shared by every form intake route: a honeypot field,
// a submit-time trap, and a few lightweight content heuristics. Returns a
// short reason string when a submission looks like spam, or null when clean.
// Callers should silently accept flagged submissions (return 200 without
// forwarding) so bots don't learn they were blocked.

// Humans don't complete and submit a form in under a couple of seconds.
const MIN_ELAPSED_MS = 2500;

// Throwaway email domains commonly used by form spammers.
const DISPOSABLE_DOMAINS = new Set([
  "mailinator.com",
  "guerrillamail.com",
  "10minutemail.com",
  "yopmail.com",
  "trashmail.com",
  "sharklasers.com",
  "getnada.com",
  "temp-mail.org",
  "tempmail.com",
  "throwawaymail.com",
  "maildrop.cc",
  "dispostable.com",
  "fakeinbox.com",
  "spam4.me",
]);

const LINK_IN_NAME = /(https?:\/\/|www\.|\[url|<a\s|\bhref\b)/i;

export type SpamFields = {
  website?: unknown; // honeypot — must stay empty
  _ts?: unknown; // client-set mount timestamp (ms)
  name?: unknown;
  email?: unknown;
  message?: unknown;
  note?: unknown;
};

export function detectSpam(fields: SpamFields): string | null {
  // 1. Honeypot: a hidden field only bots fill.
  if (typeof fields.website === "string" && fields.website.trim() !== "") {
    return "honeypot";
  }

  // 2. Time-trap: reject near-instant submits. Fail open on clock skew or a
  //    missing/invalid timestamp so real users are never wrongly blocked.
  const ts = Number(fields._ts);
  if (Number.isFinite(ts) && ts > 0) {
    const elapsed = Date.now() - ts;
    if (elapsed >= 0 && elapsed < MIN_ELAPSED_MS) return "too-fast";
  }

  // 3. Content heuristics.
  const name = typeof fields.name === "string" ? fields.name : "";
  if (name.length > 120) return "name-too-long";
  if (LINK_IN_NAME.test(name)) return "link-in-name";

  const email = (
    typeof fields.email === "string" ? fields.email : ""
  ).toLowerCase();
  const domain = email.split("@")[1] ?? "";
  if (domain && DISPOSABLE_DOMAINS.has(domain)) return "disposable-email";

  const body = [fields.message, fields.note]
    .map((v) => (typeof v === "string" ? v : ""))
    .join(" ");
  if ((body.match(/https?:\/\//gi) ?? []).length >= 4) return "too-many-links";

  return null;
}

// Remove guard-only fields before forwarding a JSON body downstream.
export function stripGuardFields<T extends Record<string, unknown>>(
  body: T,
): T {
  const clean = { ...body } as Record<string, unknown>;
  delete clean.website;
  delete clean._ts;
  return clean as T;
}
