import { NextResponse } from "next/server";

// Contact form intake. Forwards submissions to the BLOX intake pipeline
// (n8n webhook -> Zendesk ticket + Telegram ping). Override the endpoint with
// FORM_WEBHOOK_URL if it ever moves.
const WEBHOOK =
  process.env.FORM_WEBHOOK_URL ?? "https://n8n.onecs.net/webhook/site-form";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { name, email, message } = body;
  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 },
    );
  }

  // Hand the lead to the intake pipeline. If it fails, tell the visitor rather
  // than silently losing the submission.
  try {
    const res = await fetch(WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(10000),
    });
    if (!res.ok) throw new Error(`intake responded ${res.status}`);
  } catch (err) {
    console.error("[contact] intake forward failed:", err);
    return NextResponse.json(
      {
        error:
          "We couldn't submit your request. Please try again or email info@onecs.net.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
