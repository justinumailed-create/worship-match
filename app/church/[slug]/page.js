"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getDB } from "@/lib/db";
import Link from "next/link";

export default function ChurchProfilePage() {
  const params = useParams();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [church, setChurch] = useState(null);
  const [role, setRole] = useState(null);

  useEffect(() => {
    setMounted(true);
    const db = getDB();
    const slug = params.slug;
    const found = db.churches.find(c => c.slug === slug || c.id === slug);
    setChurch(found);
    setRole(localStorage.getItem("user_role"));
  }, [params.slug]);

  if (!mounted) return null;
  if (!church) return <div className="p-20 text-center">Church not found</div>;

  return (
    <div className="mx-auto max-w-7xl px-5 pb-8 pt-10 lg:px-8">
      <div className="flex items-center gap-4 mb-10">
        <button onClick={() => router.back()} className="text-[var(--ink-700)] hover:text-[var(--ink-900)] font-semibold flex items-center gap-2">
          ← Back
        </button>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
        <div className="space-y-10">
          <section>
            <div className="inline-flex rounded-full bg-[var(--sage-50)] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[var(--sage-700)] mb-6">
              {church.denomination}
            </div>
            <h1 className="font-[family-name:var(--font-display)] text-5xl font-semibold tracking-tight text-[var(--ink-900)] sm:text-7xl mb-6">
              {church.name}
            </h1>
            <p className="text-2xl text-[var(--ink-700)] leading-relaxed">
              {church.description || `A welcoming community in ${church.city}, ${church.state} dedicated to worship and service.`}
            </p>
          </section>

          <section className="card-surface rounded-[2.5rem] p-8 sm:p-10">
            <h2 className="text-2xl font-bold mb-6">Service Times</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {(church.serviceTimes || ["Sundays at 9:00 AM", "Sundays at 11:00 AM"]).map((time) => (
                <div key={time} className="bg-[var(--sand-50)] p-4 rounded-[1.4rem] font-semibold text-[var(--ink-900)]">
                  {time}
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Ministries</h2>
            <div className="flex flex-wrap gap-3">
              {(church.ministries || []).map((m) => (
                <span key={m} className="px-5 py-2.5 bg-white rounded-full border border-[rgba(21,35,33,0.12)] text-sm font-semibold text-[var(--ink-900)] shadow-sm">
                  {m}
                </span>
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-6">
          <div className="card-surface rounded-[2.5rem] p-8 bg-[var(--ink-900)] text-white">
            <h3 className="text-xl font-bold mb-6">Visit {church.name}</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="font-bold">Address</p>
                  <p className="text-white/70">{church.address || `${church.city}, ${church.state}`}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">📧</span>
                <div>
                  <p className="font-bold">Email</p>
                  <p className="text-white/70">{church.email || "office@church.org"}</p>
                </div>
              </div>
            </div>

            {role === "church" && (
              <Link 
                href="/church-dashboard/leads"
                className="block w-full text-center rounded-full bg-[var(--sky-500)] py-4 font-bold text-white hover:bg-[var(--sky-600)] transition mb-4 shadow-lg shadow-sky-500/20"
              >
                View Leads (Demo Only)
              </Link>
            )}

            <button className="w-full rounded-full bg-white py-4 font-bold text-[var(--ink-900)] hover:bg-[var(--sand-100)] transition shadow-lg">
              Visit Website
            </button>
          </div>

          <div className="card-surface rounded-[2.5rem] p-8 border-2 border-[var(--sage-700)]/10">
            <h3 className="text-xl font-bold mb-4">Accessibility</h3>
            <div className="space-y-3">
              {(church.accessibility || []).map(a => (
                <div key={a} className="flex items-center gap-3 text-[var(--ink-700)]">
                  <span className="text-green-600">✓</span>
                  <span className="font-medium">{a}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
