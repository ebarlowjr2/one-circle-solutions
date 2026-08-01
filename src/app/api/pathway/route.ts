import { NextResponse } from "next/server";

// Pathway to Protection intake. Kept separate from the general contact
// intake so promo leads can be routed on their own. Every submission is
// tagged formType: "pathway-to-protection". Override the endpoint with
// PATHWAY_WEBHOOK_URL if it ever moves.
const WEBHOOK =
  process.env.PATHWAY_WEBHOOK_URL ??
  "https://n8n.onecs.net/webhook/pathway-form";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { name, email } = body;
  if (!name || !email) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 },
    );
  }

  const payload = {
    ...body,
    formType: "pathway-to-protection",
    offer: "Pathway to Protection",
    submittedAt: new Date().toISOString(),
  };

  // Hand the lead to the intake pipeline. If it fails, tell the visitor
  // rather than silently losing the submission.
  try {
    const res = await fetch(WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(10000),
    });
    if (!res.ok) throw new Error(`intake responded ${res.status}`);
  } catch (err) {
    console.error("[pathway] intake forward failed:", err);
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
