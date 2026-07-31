import { NextResponse } from "next/server";

// Job application intake. Receives the form + résumé (multipart), validates,
// and forwards to the BLOX intake pipeline (n8n → OneDrive résumé + Zendesk
// ticket + Telegram). Override the endpoint with APPLY_WEBHOOK_URL if it moves.
const WEBHOOK =
  process.env.APPLY_WEBHOOK_URL ?? "https://n8n.onecs.net/webhook/job-application";
const MAX_BYTES = 4 * 1024 * 1024; // stay under Vercel's request body limit

export async function POST(request: Request) {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ error: "Invalid form data." }, { status: 400 });
  }

  const name = String(form.get("name") ?? "").trim();
  const email = String(form.get("email") ?? "").trim();
  const phone = String(form.get("phone") ?? "").trim();
  const linkedin = String(form.get("linkedin") ?? "").trim();
  const note = String(form.get("note") ?? "").trim();
  const position = String(form.get("position") ?? "").trim() || "General";
  const resume = form.get("resume");

  if (!name || !email || !note || !(resume instanceof File)) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }
  if (!/\.(pdf|docx?)$/i.test(resume.name)) {
    return NextResponse.json(
      { error: "Résumé must be a PDF or Word (.doc/.docx) file." },
      { status: 400 },
    );
  }
  if (resume.size === 0 || resume.size > MAX_BYTES) {
    return NextResponse.json(
      { error: "Résumé must be a file under 4 MB." },
      { status: 400 },
    );
  }

  const buf = Buffer.from(await resume.arrayBuffer());
  const ext = resume.name.match(/\.(pdf|docx?)$/i)?.[0] ?? ".pdf";
  const safeName = name.replace(/[^A-Za-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
  const filename = `${safeName}_${new Date().toISOString().slice(0, 10)}${ext}`;

  const payload = {
    name,
    email,
    phone,
    linkedin,
    note,
    position,
    resume_filename: filename,
    resume_mimetype: resume.type || "application/octet-stream",
    resume_base64: buf.toString("base64"),
  };

  try {
    const res = await fetch(WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(20000),
    });
    if (!res.ok) throw new Error(`intake responded ${res.status}`);
  } catch (err) {
    console.error("[apply] intake forward failed:", err);
    return NextResponse.json(
      {
        error:
          "We couldn't submit your application. Please try again or email us directly.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
