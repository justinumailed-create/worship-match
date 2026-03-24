"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getDB, updateChurch } from "@/lib/db";

export default function ChurchDashboard() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [church, setChurch] = useState(null);
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    setMounted(true);
    const db = getDB();
    const currentId = localStorage.getItem("current_church_id") || "new-welcome-baptist";
    const myChurch = db.churches.find(c => c.id === currentId) || db.churches[0];
    setChurch(myChurch);
    setLeads(db.leads.filter(l => l.churchId === myChurch.id));
  }, []);

  const toggleStatus = () => {
    if (!church) return;
    const newStatus = church.status === "active" ? "pending" : "active";
    updateChurch(church.id, { status: newStatus });
    setChurch({ ...church, status: newStatus });
  };

  if (!mounted) return null;
  if (!church) return <div className="p-10 text-center">Loading...</div>;

  return (
    <div className="mx-auto max-w-7xl px-5 pb-8 pt-10 lg:px-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-10">
        <div>
          <h1 className="font-[family-name:var(--font-display)] text-5xl font-semibold tracking-tight sm:text-6xl text-[var(--ink-900)]">
            Church Dashboard
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-[var(--ink-700)]">
            Manage your presence on the platform and connect with seekers.
          </p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => { localStorage.removeItem("user_role"); router.push("/"); }}
            className="rounded-full border border-[rgba(21,35,33,0.12)] bg-white px-6 py-4 text-sm font-semibold text-[var(--ink-900)] transition hover:bg-[var(--sand-50)]"
          >
            Switch Role
          </button>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="card-surface rounded-[2rem] p-8 flex flex-col justify-between">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--sage-700)] mb-4">
              Status
            </div>
            <div className="flex items-center gap-3 mb-6">
              <div className={`h-4 w-4 rounded-full ${church.status === "active" ? "bg-green-500" : "bg-yellow-500 animate-pulse"}`}></div>
              <span className="text-2xl font-bold capitalize">{church.status}</span>
            </div>
            <p className="text-[var(--ink-700)] mb-8">
              {church.status === "active" 
                ? "Your church is live and appearing in seeker matches." 
                : "Your church is hidden and will not appear in results."}
            </p>
          </div>
          <button
            onClick={toggleStatus}
            className={`w-full rounded-full py-4 font-semibold transition ${church.status === "active" ? "bg-red-50 text-red-600 hover:bg-red-100" : "bg-green-50 text-green-600 hover:bg-green-100"}`}
          >
            {church.status === "active" ? "Set to Inactive" : "Set to Active"}
          </button>
        </div>

        <div className="card-surface rounded-[2rem] p-8 flex flex-col justify-between border-2 border-[var(--sky-500)]/10">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--sky-500)] mb-4">
              Recent Leads
            </div>
            <div className="text-5xl font-bold mb-4">{leads.length}</div>
            <p className="text-[var(--ink-700)] mb-8">Seekers have requested to visit or contact your church.</p>
          </div>
          <Link
            href="/church-dashboard/leads"
            className="w-full text-center rounded-full bg-[var(--ink-900)] py-4 font-semibold text-white hover:bg-[var(--sage-700)] transition"
          >
            View All Leads
          </Link>
        </div>

        <div className="card-surface rounded-[2rem] p-8 flex flex-col justify-between">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--gold-500)] mb-4">
              Profile
            </div>
            <h3 className="text-2xl font-bold mb-2">{church.name}</h3>
            <p className="text-[var(--ink-700)] mb-8">{church.denomination} • {church.city}, {church.state}</p>
          </div>
          <Link
            href="/church-dashboard/edit"
            className="w-full text-center rounded-full border border-[rgba(21,35,33,0.12)] bg-white py-4 font-semibold text-[var(--ink-900)] hover:bg-[var(--sand-50)] transition"
          >
            Edit Profile
          </Link>
        </div>
      </div>
    </div>
  );
}
