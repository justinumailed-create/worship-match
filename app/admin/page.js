"use client";

import { useEffect, useState } from "react";
import { getDB, approveChurch } from "@/lib/db";
import Link from "next/link";

export default function AdminConsole() {
  const [churches, setChurches] = useState([]);

  useEffect(() => {
    const db = getDB();
    setChurches(db.churches);
  }, []);

  const handleApprove = (id) => {
    approveChurch(id);
    const db = getDB();
    setChurches(db.churches);
  };

  return (
    <div className="mx-auto max-w-7xl px-5 pb-8 pt-10 lg:px-8">
      <div className="flex justify-between items-center mb-10">
        <h1 className="font-[family-name:var(--font-display)] text-5xl font-semibold tracking-tight">
          Admin Console
        </h1>
        <Link href="/" className="rounded-full border px-6 py-2 text-sm font-semibold hover:bg-[var(--sand-50)]">
          Back to Site
        </Link>
      </div>

      <div className="card-surface rounded-[2.5rem] overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-[var(--sand-100)] border-b text-sm font-semibold uppercase tracking-wider">
            <tr>
              <th className="px-8 py-4">Church Name</th>
              <th className="px-8 py-4">Location</th>
              <th className="px-8 py-4">Status</th>
              <th className="px-8 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {churches.map((church) => (
              <tr key={church.id} className="hover:bg-white transition">
                <td className="px-8 py-5 font-bold">{church.name}</td>
                <td className="px-8 py-5 text-[var(--ink-700)]">{church.city}, {church.state}</td>
                <td className="px-8 py-5">
                  <span className={`inline-flex px-3 py-1 rounded-full text-xs font-bold uppercase ${church.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                    {church.status}
                  </span>
                </td>
                <td className="px-8 py-5 text-right">
                  {church.status === 'pending' && (
                    <button 
                      onClick={() => handleApprove(church.id)}
                      className="rounded-full bg-[var(--sage-700)] px-4 py-2 text-xs font-bold text-white hover:bg-[var(--ink-900)]"
                    >
                      Approve
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
