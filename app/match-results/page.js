"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { MatchCard } from "@/components/match-card";

function MatchResultsContent() {
  const searchParams = useSearchParams();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchResults() {
      setLoading(true);
      try {
        const res = await fetch(`/api/churches?${searchParams.toString()}`);
        if (res.ok) {
          const data = await res.json();
          setResults(data);
        }
      } catch (err) {
        console.error("Failed to fetch matches", err);
      } finally {
        setLoading(false);
      }
    }
    fetchResults();
  }, [searchParams]);

  const preferences = {
    zip: searchParams.get("zip") || "",
    radius: searchParams.get("radius") || "25",
    denomination: searchParams.get("denomination") || "Any Tradition",
    worship: searchParams.get("worship") || "Any Style",
  };

  if (loading) return (
    <div className="min-h-screen cinematic-bg flex items-center justify-center relative overflow-hidden">
      <div className="cinematic-overlay" />
      <div className="relative z-10 text-center">
        <div className="h-16 w-16 border-4 border-accent-gold/20 border-t-accent-gold rounded-full animate-spin mx-auto mb-6"></div>
        <p className="text-accent-gold font-medium tracking-widest uppercase text-xs">Analyzing Sanctuary Matches...</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen cinematic-bg pt-32 pb-24 px-6 relative overflow-hidden text-[#EDE7F6]">
      <div className="cinematic-overlay" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <section className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-gold/10 text-accent-gold text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                Step 2 • Ranked results
            </div>
            <h1 className="text-display text-5xl lg:text-6xl font-bold text-white mb-6 uppercase tracking-widest">
                Your Matches
            </h1>
            <p className="text-lg text-white/60 max-w-2xl leading-relaxed">
                We've analyzed your preferences against our sanctuary registry to find the communities that best align with your heart.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="/find-my-church" className="btn-outline-white py-3 px-8 text-sm">Refine Quiz</Link>
            <Link href="/" className="btn-gold py-3 px-8 text-sm">Return Home</Link>
          </div>
        </section>

        <div className="grid gap-12 lg:grid-cols-[300px_1fr]">
          <aside className="h-fit sticky top-32">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-gold mb-6">Search Profile</h3>
              <div className="space-y-4">
                {[
                  `ZIP ${preferences.zip}`,
                  `${preferences.radius} miles`,
                  preferences.denomination,
                  preferences.worship
                ].map((chip) => (
                  <div key={chip} className="px-4 py-2 bg-white/5 rounded-xl border border-white/5 text-xs font-bold text-white/70">
                    {chip}
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <main className="space-y-8">
            {results.length > 0 ? (
              results.map((church, index) => (
                <MatchCard key={church.id} church={church} rank={index + 1} />
              ))
            ) : (
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-20 text-center">
                <span className="text-6xl mb-8 block">🔍</span>
                <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-widest">No Exact Matches</h2>
                <p className="text-white/50 max-w-md mx-auto mb-10">We couldn't find a sanctuary that matches all your criteria. Try expanding your search radius or refining your preferences.</p>
                <Link href="/find-my-church" className="btn-gold py-4 px-12">Adjust Preferences</Link>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

export default function MatchResultsPage() {
  return (
    <Suspense fallback={null}>
      <MatchResultsContent />
    </Suspense>
  );
}
