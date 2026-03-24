"use client";

import { useEffect, useState } from "react";
import { getDB } from "@/lib/db";
import Link from "next/link";

export default function ChurchLeads() {
  const [mounted, setMounted] = useState(false);
  const [leads, setLeads] = useState([]);
  const [church, setChurch] = useState(null);

  useEffect(() => {
    setMounted(true);
    const db = getDB();
    const currentId = localStorage.getItem("current_church_id") || "new-welcome-baptist";
    const myChurch = db.churches.find(c => c.id === currentId) || db.churches[0];
    setChurch(myChurch);
    setLeads(db.leads.filter(l => l.churchId === myChurch.id).reverse());
  }, []);

  if (!mounted) return null;
  if (!church) return null;

  return (
    <div className="mx-auto max-w-7xl px-5 pb-8 pt-10 lg:px-8">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/church-dashboard" className="text-[var(--ink-700)] hover:text-[var(--ink-900)] font-semibold flex items-center gap-2">
          ← Dashboard
        </Link>
      </div>

      <h1 className="font-[family-name:var(--font-display)] text-5xl font-semibold mb-10">
        Seeker Leads for {church.name}
      </h1>

      <div className="space-y-6">
        {leads.length > 0 ? (
          leads.map((lead) => (
            <div key={lead.id} className="card-surface rounded-[2rem] p-8 border-l-8 border-[var(--sky-500)]">
              <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold">{lead.name}</h3>
                  <p className="text-[var(--sky-500)] font-semibold">{lead.email}</p>
                </div>
                <div className="text-sm text-[var(--ink-700)] bg-[var(--sand-100)] px-3 py-1.5 rounded-full font-medium">
                  {new Date(lead.timestamp).toLocaleString()}
                </div>
              </div>
              <div className="bg-[var(--sand-50)] rounded-2xl p-6 text-[var(--ink-900)] italic leading-relaxed">
                "{lead.message || "No message provided."}"
              </div>
            </div>
          ))
        ) : (
          <div className="card-surface rounded-[2.5rem] p-20 text-center">
            <div className="text-6xl mb-6">📬</div>
            <h3 className="text-2xl font-bold mb-2">No leads yet</h3>
            <p className="text-[var(--ink-700)]">When seekers request a visit, they'll appear here.</p>
          </div>
        )}
      </div>
    </div>
  );
}
