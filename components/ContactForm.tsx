"use client";

import { useState, type FormEvent } from "react";
import { Check, Send } from "lucide-react";
import { serviceOptions } from "@/data/services";

type Status =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "sent" }
  | { kind: "error"; message: string };

const inputClass =
  "focus-ring w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-brand-bright/60 focus:outline-none";

export function ContactForm() {
  const [services, setServices] = useState<string[]>([]);
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  const toggle = (s: string) =>
    setServices((cur) =>
      cur.includes(s) ? cur.filter((x) => x !== s) : [...cur, s],
    );

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus({ kind: "sending" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          company: data.get("company"),
          services,
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error ?? "Something went wrong.");
      form.reset();
      setServices([]);
      setStatus({ kind: "sent" });
    } catch (err) {
      setStatus({
        kind: "error",
        message: err instanceof Error ? err.message : "Something went wrong.",
      });
    }
  }

  if (status.kind === "sent") {
    return (
      <div className="flex flex-col items-start gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-bright/15">
          <Check className="h-5 w-5 text-brand-bright" />
        </div>
        <h2 className="text-lg font-semibold">Message sent.</h2>
        <p className="text-sm text-white/60">
          Thanks — we'll get back to you at the email you provided.
        </p>
        <button
          type="button"
          onClick={() => setStatus({ kind: "idle" })}
          className="focus-ring mt-2 text-sm text-brand-bright hover:text-white"
        >
          Send another message
        </button>
      </div>
    );
  }

  const sending = status.kind === "sending";

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6">
      <h2 className="text-lg font-semibold">Send us a message</h2>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-xs text-white/50">Name</span>
          <input
            name="name"
            required
            maxLength={100}
            autoComplete="name"
            placeholder="Your name"
            className={inputClass}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-xs text-white/50">Your email</span>
          <input
            name="email"
            type="email"
            required
            maxLength={200}
            autoComplete="email"
            placeholder="you@example.com"
            className={inputClass}
          />
        </label>
      </div>

      <fieldset>
        <legend className="text-xs text-white/50">
          Which services are you interested in?
        </legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {serviceOptions.map((s) => {
            const active = services.includes(s);
            return (
              <button
                key={s}
                type="button"
                onClick={() => toggle(s)}
                aria-pressed={active}
                className={`focus-ring rounded-full border px-3.5 py-1.5 text-xs transition-colors ${
                  active
                    ? "border-brand-bright/70 bg-brand-bright/15 text-white"
                    : "border-white/10 text-white/60 hover:border-white/25 hover:text-white"
                }`}
              >
                {s}
              </button>
            );
          })}
        </div>
      </fieldset>

      <label className="flex flex-col gap-2">
        <span className="text-xs text-white/50">Message</span>
        <textarea
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={6}
          placeholder="Tell us about the business, the problem, and any constraints."
          className={`${inputClass} resize-y`}
        />
      </label>

      {/* Honeypot for bots */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      {status.kind === "error" && (
        <p role="alert" className="text-sm text-red-400">
          {status.message}
        </p>
      )}

      <button
        type="submit"
        disabled={sending}
        className="focus-ring inline-flex items-center justify-center gap-2 self-start rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {sending ? "Sending…" : "Send message"}
        <Send className="h-4 w-4" />
      </button>
    </form>
  );
}
