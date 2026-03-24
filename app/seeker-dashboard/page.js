"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SeekerDashboard() {
  const router = useRouter();

  return (
    <div className="mx-auto max-w-7xl px-5 pb-8 pt-10 lg:px-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h1 className="font-[family-name:var(--font-display)] text-5xl font-semibold tracking-tight sm:text-6xl">
            Find Your Church
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-[var(--ink-700)]">
            Welcome back! Start a new search to find the perfect church match for your needs.
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href="/find-my-church"
            className="rounded-full bg-[var(--ink-900)] px-6 py-4 text-base font-semibold text-white transition hover:bg-[var(--sage-700)]"
          >
            Start Matching Quiz
          </Link>
          <button
            onClick={() => { localStorage.removeItem("user_role"); router.push("/"); }}
            className="rounded-full border border-[rgba(21,35,33,0.12)] bg-white px-6 py-4 text-base font-semibold text-[var(--ink-900)] transition hover:bg-[var(--sand-50)]"
          >
            Switch Role
          </button>
        </div>
      </div>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="card-surface rounded-[2rem] p-8 flex flex-col items-center text-center">
          <div className="h-16 w-16 mb-6 rounded-full bg-[var(--sage-50)] flex items-center justify-center text-3xl">🎯</div>
          <h3 className="text-xl font-bold mb-3">Personalized Ranking</h3>
          <p className="text-[var(--ink-700)]">Our matching algorithm ranks churches based on your specific worship and preaching style.</p>
        </div>
        <div className="card-surface rounded-[2rem] p-8 flex flex-col items-center text-center">
          <div className="h-16 w-16 mb-6 rounded-full bg-[var(--sky-50)] flex items-center justify-center text-3xl">💬</div>
          <h3 className="text-xl font-bold mb-3">Direct Connection</h3>
          <p className="text-[var(--ink-700)]">Found a match? Request a visit or contact the church directly through their profile.</p>
        </div>
        <div className="card-surface rounded-[2rem] p-8 flex flex-col items-center text-center">
          <div className="h-16 w-16 mb-6 rounded-full bg-[var(--sand-100)] flex items-center justify-center text-3xl">📍</div>
          <h3 className="text-xl font-bold mb-3">Location Focused</h3>
          <p className="text-[var(--ink-700)]">Filter by distance to find a community that fits your commute and neighborhood.</p>
        </div>
      </div>
    </div>
  );
}
