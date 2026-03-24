"use client";

import { useEffect, useState } from "react";
import { getDB, updateChurch } from "@/lib/db";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { denominationOptions, worshipStyleOptions, sizeOptions, ministryOptions } from "@/lib/churches";
export default function EditChurchProfile() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [church, setChurch] = useState(null);
  const [form, setForm] = useState(null);

  useEffect(() => {
    setMounted(true);
    const db = getDB();
    const currentId = localStorage.getItem("current_church_id") || "new-welcome-baptist";
    const myChurch = db.churches.find(c => c.id === currentId) || db.churches[0];
    setChurch(myChurch);
    setForm({ ...myChurch });
  }, []);

  if (!mounted) return null;
  if (!form) return null;
  const handleSubmit = (e) => {
    e.preventDefault();
    updateChurch(church.id, form);
    router.push("/church-dashboard");
  };

  const toggleMinistry = (m) => {
    const ministries = form.ministries || [];
    setForm({
      ...form,
      ministries: ministries.includes(m) ? ministries.filter(i => i !== m) : [...ministries, m]
    });
  };

  if (!form) return null;

  return (
    <div className="mx-auto max-w-4xl px-5 pb-8 pt-10 lg:px-8">
      <Link href="/church-dashboard" className="text-[var(--ink-700)] hover:text-[var(--ink-900)] font-semibold flex items-center gap-2 mb-8">
        ← Back to Dashboard
      </Link>

      <div className="card-surface rounded-[2.5rem] p-8 sm:p-12">
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold mb-8">
          Edit Church Profile
        </h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid gap-6 md:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm font-semibold">Denomination</span>
              <select 
                value={form.denomination}
                onChange={(e) => setForm({...form, denomination: e.target.value})}
                className="w-full rounded-2xl border border-[rgba(21,35,33,0.12)] bg-white px-4 py-3.5 outline-none focus:border-[var(--sage-700)]"
              >
                {denominationOptions.map(o => <option key={o} value={o}>{o}</option>)}
              </select>
            </label>

            <label className="space-y-2">
              <span className="text-sm font-semibold">Worship Style</span>
              <select 
                value={form.worshipStyle}
                onChange={(e) => setForm({...form, worshipStyle: e.target.value})}
                className="w-full rounded-2xl border border-[rgba(21,35,33,0.12)] bg-white px-4 py-3.5 outline-none focus:border-[var(--sage-700)]"
              >
                {worshipStyleOptions.map(o => <option key={o} value={o}>{o}</option>)}
              </select>
            </label>

            <label className="space-y-2">
              <span className="text-sm font-semibold">Church Size</span>
              <select 
                value={form.size}
                onChange={(e) => setForm({...form, size: e.target.value})}
                className="w-full rounded-2xl border border-[rgba(21,35,33,0.12)] bg-white px-4 py-3.5 outline-none focus:border-[var(--sage-700)]"
              >
                {sizeOptions.map(o => <option key={o} value={o}>{o}</option>)}
              </select>
            </label>

            <label className="space-y-2">
              <span className="text-sm font-semibold">Public Email</span>
              <input 
                type="email"
                value={form.email}
                onChange={(e) => setForm({...form, email: e.target.value})}
                className="w-full rounded-2xl border border-[rgba(21,35,33,0.12)] bg-white px-4 py-3.5 outline-none focus:border-[var(--sage-700)]"
              />
            </label>
          </div>

          <div className="space-y-4">
            <span className="text-sm font-semibold block">Ministries</span>
            <div className="flex flex-wrap gap-2">
              {ministryOptions.map(m => {
                const active = form.ministries?.includes(m);
                return (
                  <button
                    key={m}
                    type="button"
                    onClick={() => toggleMinistry(m)}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition ${active ? "bg-[var(--sage-700)] text-white" : "hover:bg-[var(--sand-50)]"}`}
                  >
                    {m}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="pt-6 border-t flex gap-4">
            <button 
              type="submit"
              className="flex-1 rounded-full bg-[var(--ink-900)] px-6 py-4 font-semibold text-white hover:bg-[var(--sage-700)] transition"
            >
              Save Profile
            </button>
            <Link 
              href="/church-dashboard"
              className="flex-1 text-center rounded-full border border-[rgba(21,35,33,0.12)] bg-white px-6 py-4 font-semibold text-[var(--ink-900)] hover:bg-[var(--sand-50)] transition"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
