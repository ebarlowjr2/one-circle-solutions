import { NextResponse } from "next/server";

// Contact form intake stub.
// TODO: wire to a delivery channel before launch (Resend, SendGrid,
// a CRM webhook, or Vercel's integrations). Until then submissions are
// logged to the server console only.
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

  console.log("[contact] submission received:", JSON.stringify(body));

  return NextResponse.json({ ok: true });
}
