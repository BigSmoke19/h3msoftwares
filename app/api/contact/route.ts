import nodemailer from "nodemailer";
import { serviceOptions } from "@/data/services";

export const runtime = "nodejs";

const TO = process.env.CONTACT_TO ?? "h3msoftwares@gmail.com";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!,
  );

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real users never fill this hidden field.
  if (body.company) return Response.json({ ok: true });

  const name = String(body.name ?? "").trim().slice(0, 100);
  const email = String(body.email ?? "").trim().slice(0, 200);
  const message = String(body.message ?? "").trim().slice(0, 5000);
  const services = Array.isArray(body.services)
    ? body.services.filter((s): s is string =>
        (serviceOptions as readonly string[]).includes(s as string),
      )
    : [];

  if (!name || !EMAIL_RE.test(email) || message.length < 10) {
    return Response.json(
      { error: "Please provide your name, a valid email, and a message." },
      { status: 400 },
    );
  }

  const { SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_USER || !SMTP_PASS) {
    console.error("Contact form: SMTP_USER / SMTP_PASS not configured");
    return Response.json(
      { error: "Email is not configured yet. Please email us directly." },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT ?? 465),
    secure: Number(process.env.SMTP_PORT ?? 465) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const serviceLine = services.length ? services.join(", ") : "Not specified";

  try {
    await transporter.sendMail({
      from: `"H3M Website" <${SMTP_USER}>`,
      to: TO,
      replyTo: `"${name.replace(/"/g, "")}" <${email}>`,
      subject: `New inquiry from ${name} — ${serviceLine}`,
      text: `Name: ${name}\nEmail: ${email}\nServices: ${serviceLine}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${escape(name)}<br/>
<strong>Email:</strong> ${escape(email)}<br/>
<strong>Services:</strong> ${escape(serviceLine)}</p>
<p style="white-space:pre-wrap">${escape(message)}</p>`,
    });
  } catch (err) {
    console.error("Contact form send failed", err);
    return Response.json(
      { error: "Couldn't send your message. Please try again or email us directly." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
