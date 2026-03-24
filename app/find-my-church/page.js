"use client";

import { useState, useEffect } from "react";
import {
  accessibilityOptions,
  denominationOptions,
  ministryOptions,
  preachingStyleOptions,
  radiusOptions,
  sizeOptions,
  worshipStyleOptions
} from "@/lib/churches";
import { QuizForm } from "@/components/quiz-form";
import { MatchCard } from "@/components/match-card";

export default function FindMyChurchPage() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (params) => {
    setLoading(true);
    setHasSearched(true);
    try {
      const res = await fetch(`/api/churches?${params.toString()}`);
      if (res.ok) {
        const data = await res.json();
        setResults(data);
      }
    } catch (err) {
      console.error("Discovery failed", err);
    } finally {
      setLoading(false);
      // Smooth scroll to results
      window.scrollTo({ top: document.getElementById('results-section')?.offsetTop - 100, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2E2242] via-[#3A2A5A] to-[#1E1B2E] text-[#D1C7E0]">
      <section className="relative overflow-hidden pt-20 pb-24 lg:pt-28 lg:pb-32">
        <div className="cinematic-overlay" />
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-gold/10 text-accent-gold text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-gold animate-pulse" />
                    Guided Matching Experience
                </div>
                <h1 className="text-display text-5xl lg:text-6xl font-bold text-[#F5F1FF] mb-6 uppercase tracking-widest leading-tight">
                    Find your <br /> <span className="text-accent-gold italic">sanctuary.</span>
                </h1>
                <p className="text-lg text-[#D1C7E0] leading-relaxed max-w-2xl">
                    Our AI-powered matching engine analyzes deep theological alignment, worship style, and community features to find where you truly belong.
                </p>
            </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8 -mt-12 relative z-20">
        <QuizForm
          onSearch={handleSearch}
          denominationOptions={denominationOptions}
          worshipStyleOptions={worshipStyleOptions}
          preachingStyleOptions={preachingStyleOptions}
          sizeOptions={sizeOptions}
          ministryOptions={ministryOptions}
          accessibilityOptions={accessibilityOptions}
          radiusOptions={radiusOptions}
        />
      </section>

      {/* RESULTS SECTION */}
      {(hasSearched || loading) && (
        <section id="results-section" className="mx-auto max-w-7xl px-6 pb-32 lg:px-8 animate-in fade-in duration-1000">
            <div className="flex items-center gap-4 mb-12">
                <div className="h-px flex-1 bg-white/10" />
                <h2 className="text-display text-3xl font-bold text-[#F5F1FF] uppercase tracking-widest">Your Discoveries</h2>
                <div className="h-px flex-1 bg-white/10" />
            </div>

            {loading ? (
                <div className="py-20 text-center">
                    <div className="h-16 w-16 border-4 border-accent-gold/20 border-t-accent-gold rounded-full animate-spin mx-auto mb-6"></div>
                    <p className="text-accent-gold font-bold tracking-widest uppercase text-xs">Analyzing Sanctuaries...</p>
                </div>
            ) : results.length > 0 ? (
                <div className="space-y-8 max-w-5xl mx-auto">
                    {results.map((church, index) => (
                        <MatchCard key={church.id} church={church} rank={index + 1} />
                    ))}
                </div>
            ) : (
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-20 text-center max-w-3xl mx-auto">
                    <span className="text-6xl mb-8 block">🔍</span>
                    <h3 className="text-2xl font-bold text-[#F5F1FF] mb-4 uppercase tracking-widest">No Exact Matches Found</h3>
                    <p className="text-[#D1C7E0]/60 text-lg leading-relaxed">
                        We couldn't find a sanctuary matching all your specific criteria. Try expanding your radius or selecting broader preferences above.
                    </p>
                </div>
            )}
        </section>
      )}
    </div>
  );
}
