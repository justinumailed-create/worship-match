"use client";

import { useState } from "react";

function ToggleGrid({ label, options, selectedValues, onToggle }) {
  return (
    <div className="space-y-3">
      <div className="text-sm font-semibold text-[var(--ink-900)]">{label}</div>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const isActive = selectedValues.includes(option);

          return (
            <button
              key={option}
              type="button"
              onClick={() => onToggle(option)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                isActive
                  ? "border-[var(--sage-700)] bg-[var(--sage-700)] text-white"
                  : "border-[rgba(21,35,33,0.12)] bg-white text-[var(--ink-700)] hover:bg-[var(--sage-50)]"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function ChurchSubmissionForm({
  denominationOptions,
  worshipStyleOptions,
  preachingStyleOptions,
  sizeOptions,
  ministryOptions,
  accessibilityOptions
}) {
  const [formState, setFormState] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    phone: "",
    website: "",
    livestreamUrl: "",
    denomination: "",
    worshipStyle: "",
    preachingStyle: "",
    size: "",
    serviceTimes: "",
    description: "",
    online: true,
    ministries: [],
    accessibility: []
  });
  const [status, setStatus] = useState("idle");
  const [response, setResponse] = useState(null);

  const updateField = (field, value) => {
    setFormState((current) => ({ ...current, [field]: value }));
  };

  const toggleArrayItem = (field, option) => {
    setFormState((current) => {
      const values = current[field];

      return {
        ...current,
        [field]: values.includes(option)
          ? values.filter((item) => item !== option)
          : [...values, option]
      };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("submitting");

    try {
      const result = await fetch("/api/church-submissions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formState)
      });
      const payload = await result.json();

      if (!result.ok) {
        throw new Error(payload.error || "Unable to submit");
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
        <div className="inline-flex rounded-full bg-[var(--sand-100)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--gold-500)]">
          Pending Approval
        </div>
        <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight">
          Listing submitted successfully
        </h2>
        <p className="mt-3 max-w-3xl text-base leading-7 text-[var(--ink-700)]">
          {response.submission?.name} has been captured as a pending church listing with reference{" "}
          <strong>{response.submission?.reference}</strong>. It will stay hidden from the public directory until
          approved.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card-surface rounded-[2rem] p-6 sm:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2 md:col-span-2">
          <span className="text-sm font-semibold text-[var(--ink-900)]">Church name</span>
          <input
            required
            value={formState.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="w-full rounded-2xl border border-[rgba(21,35,33,0.12)] bg-white px-4 py-3.5 outline-none transition focus:border-[var(--sage-700)]"
          />
        </label>

        <label className="space-y-2 md:col-span-2">
          <span className="text-sm font-semibold text-[var(--ink-900)]">Street address</span>
          <input
            required
            value={formState.address}
            onChange={(event) => updateField("address", event.target.value)}
            className="w-full rounded-2xl border border-[rgba(21,35,33,0.12)] bg-white px-4 py-3.5 outline-none transition focus:border-[var(--sage-700)]"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-semibold text-[var(--ink-900)]">City</span>
          <input
            required
            value={formState.city}
            onChange={(event) => updateField("city", event.target.value)}
            className="w-full rounded-2xl border border-[rgba(21,35,33,0.12)] bg-white px-4 py-3.5 outline-none transition focus:border-[var(--sage-700)]"
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-[var(--ink-900)]">State</span>
          <input
            required
            value={formState.state}
            onChange={(event) => updateField("state", event.target.value)}
            className="w-full rounded-2xl border border-[rgba(21,35,33,0.12)] bg-white px-4 py-3.5 outline-none transition focus:border-[var(--sage-700)]"
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-[var(--ink-900)]">ZIP</span>
          <input
            required
            inputMode="numeric"
            value={formState.zip}
            onChange={(event) => updateField("zip", event.target.value)}
            className="w-full rounded-2xl border border-[rgba(21,35,33,0.12)] bg-white px-4 py-3.5 outline-none transition focus:border-[var(--sage-700)]"
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-[var(--ink-900)]">Phone</span>
          <input
            required
            value={formState.phone}
            onChange={(event) => updateField("phone", event.target.value)}
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
          <span className="text-sm font-semibold text-[var(--ink-900)]">Website</span>
          <input
            value={formState.website}
            onChange={(event) => updateField("website", event.target.value)}
            className="w-full rounded-2xl border border-[rgba(21,35,33,0.12)] bg-white px-4 py-3.5 outline-none transition focus:border-[var(--sage-700)]"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-semibold text-[var(--ink-900)]">Denomination</span>
          <select
            required
            value={formState.denomination}
            onChange={(event) => updateField("denomination", event.target.value)}
            className="w-full rounded-2xl border border-[rgba(21,35,33,0.12)] bg-white px-4 py-3.5 outline-none transition focus:border-[var(--sage-700)]"
          >
            <option value="">Select one</option>
            {denominationOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-[var(--ink-900)]">Worship style</span>
          <select
            required
            value={formState.worshipStyle}
            onChange={(event) => updateField("worshipStyle", event.target.value)}
            className="w-full rounded-2xl border border-[rgba(21,35,33,0.12)] bg-white px-4 py-3.5 outline-none transition focus:border-[var(--sage-700)]"
          >
            <option value="">Select one</option>
            {worshipStyleOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-[var(--ink-900)]">Preaching style</span>
          <select
            required
            value={formState.preachingStyle}
            onChange={(event) => updateField("preachingStyle", event.target.value)}
            className="w-full rounded-2xl border border-[rgba(21,35,33,0.12)] bg-white px-4 py-3.5 outline-none transition focus:border-[var(--sage-700)]"
          >
            <option value="">Select one</option>
            {preachingStyleOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-[var(--ink-900)]">Church size</span>
          <select
            required
            value={formState.size}
            onChange={(event) => updateField("size", event.target.value)}
            className="w-full rounded-2xl border border-[rgba(21,35,33,0.12)] bg-white px-4 py-3.5 outline-none transition focus:border-[var(--sage-700)]"
          >
            <option value="">Select one</option>
            {sizeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="space-y-2 md:col-span-2">
          <span className="text-sm font-semibold text-[var(--ink-900)]">Service times</span>
          <input
            required
            value={formState.serviceTimes}
            onChange={(event) => updateField("serviceTimes", event.target.value)}
            placeholder="Sundays 9:00 AM, Sundays 11:00 AM"
            className="w-full rounded-2xl border border-[rgba(21,35,33,0.12)] bg-white px-4 py-3.5 outline-none transition focus:border-[var(--sage-700)]"
          />
        </label>

        <label className="space-y-2 md:col-span-2">
          <span className="text-sm font-semibold text-[var(--ink-900)]">About your church</span>
          <textarea
            required
            rows={5}
            value={formState.description}
            onChange={(event) => updateField("description", event.target.value)}
            className="w-full rounded-[1.5rem] border border-[rgba(21,35,33,0.12)] bg-white px-4 py-3.5 outline-none transition focus:border-[var(--sage-700)]"
          />
        </label>

        <label className="space-y-2 md:col-span-2">
          <span className="text-sm font-semibold text-[var(--ink-900)]">Livestream URL</span>
          <input
            value={formState.livestreamUrl}
            onChange={(event) => updateField("livestreamUrl", event.target.value)}
            className="w-full rounded-2xl border border-[rgba(21,35,33,0.12)] bg-white px-4 py-3.5 outline-none transition focus:border-[var(--sage-700)]"
          />
        </label>
      </div>

      <div className="mt-8 space-y-8">
        <ToggleGrid
          label="Ministries"
          options={ministryOptions}
          selectedValues={formState.ministries}
          onToggle={(option) => toggleArrayItem("ministries", option)}
        />
        <ToggleGrid
          label="Accessibility"
          options={accessibilityOptions}
          selectedValues={formState.accessibility}
          onToggle={(option) => toggleArrayItem("accessibility", option)}
        />
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        {[
          { label: "Offers online worship", value: true },
          { label: "In-person only", value: false }
        ].map((option) => (
          <button
            key={String(option.value)}
            type="button"
            onClick={() => updateField("online", option.value)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              formState.online === option.value
                ? "border-[var(--sky-500)] bg-[var(--sky-500)] text-white"
                : "border-[rgba(21,35,33,0.12)] bg-white text-[var(--ink-700)] hover:bg-[var(--sky-100)]"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      {status === "error" ? (
        <p className="mt-4 text-sm font-medium text-red-700">{response?.error || "Please try again."}</p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-8 rounded-full bg-[var(--ink-900)] px-6 py-3 text-base font-semibold text-white transition hover:bg-[var(--sage-700)] disabled:opacity-70"
      >
        {status === "submitting" ? "Submitting..." : "Submit for Approval"}
      </button>
    </form>
  );
}
