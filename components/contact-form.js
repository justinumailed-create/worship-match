"use client";

import { useMemo, useState } from "react";

export function ContactForm({ church, initialMessage }) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message:
      initialMessage ||
      (church ? `Hi ${church.name}, I'd love to learn more and plan a visit.` : "I'd like help finding the right church fit.")
  });
  const [status, setStatus] = useState("idle");
  const [response, setResponse] = useState(null);

  const title = useMemo(() => {
    if (!church) return "Get Connected";
    return `Contact ${church.name}`;
  }, [church]);

  const updateField = (field, value) => {
    setFormState((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("submitting");

    try {
      const result = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...formState,
          churchSlug: church?.slug || "",
          churchName: church?.name || "Concierge"
        })
      });
      const payload = await result.json();

      if (!result.ok) {
        throw new Error(payload.error || "Something went wrong");
      }

      setResponse(payload);
      setStatus("success");
    } catch (error) {
      setResponse({ error: error.message });
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="card-surface rounded-[2rem] p-8">
        <div className="inline-flex rounded-full bg-[var(--sage-50)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--sage-700)]">
          Church has been notified
        </div>
        <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight">
          Your message is on its way
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-7 text-[var(--ink-700)]">
          We created a lead for {response.lead?.churchName}. Reference <strong>{response.lead?.reference}</strong>.
          This gives the demo a real end-to-end handoff instead of a dead form.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card-surface rounded-[2rem] p-6 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--sage-700)]">
            Contact flow
          </div>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight">
            {title}
          </h2>
        </div>
        {church ? (
          <div className="rounded-[1.2rem] bg-[var(--sage-50)] px-4 py-3 text-sm text-[var(--ink-700)]">
            {church.city}, {church.state}
          </div>
        ) : null}
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-semibold text-[var(--ink-900)]">Name</span>
          <input
            required
            value={formState.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="w-full rounded-2xl border border-[rgba(21,35,33,0.12)] bg-white px-4 py-3.5 outline-none transition focus:border-[var(--sage-700)]"
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-[var(--ink-900)]">Email</span>
          <input
            required
            type="email"
            value={formState.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="w-full rounded-2xl border border-[rgba(21,35,33,0.12)] bg-white px-4 py-3.5 outline-none transition focus:border-[var(--sage-700)]"
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-[var(--ink-900)]">Phone</span>
          <input
            value={formState.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className="w-full rounded-2xl border border-[rgba(21,35,33,0.12)] bg-white px-4 py-3.5 outline-none transition focus:border-[var(--sage-700)]"
          />
        </label>
        <div className="rounded-[1.6rem] bg-[var(--sand-100)] p-4 text-sm leading-6 text-[var(--ink-700)]">
          A lead is stored in memory through the demo API so the success state is connected to a real submit action.
        </div>
      </div>

      <label className="mt-5 block space-y-2">
        <span className="text-sm font-semibold text-[var(--ink-900)]">Message</span>
        <textarea
          required
          rows={6}
          value={formState.message}
          onChange={(event) => updateField("message", event.target.value)}
          className="w-full rounded-[1.5rem] border border-[rgba(21,35,33,0.12)] bg-white px-4 py-3.5 outline-none transition focus:border-[var(--sage-700)]"
        />
      </label>

      {status === "error" ? (
        <p className="mt-4 text-sm font-medium text-red-700">{response?.error || "Please try again."}</p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 rounded-full bg-[var(--ink-900)] px-6 py-3 text-base font-semibold text-white transition hover:bg-[var(--sage-700)] disabled:opacity-70"
      >
        {status === "submitting" ? "Sending..." : "Notify Church"}
      </button>
    </form>
  );
}
