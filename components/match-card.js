"use client";

import Link from "next/link";
import { useState } from "react";

export function MatchCard({ church, rank }) {
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitRequest = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setShowRequestModal(false);
      setSubmitted(false);
      setFormState({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 sm:p-10 flex flex-col gap-8 lg:flex-row lg:items-center relative group hover:border-white/20 transition-all duration-500">
      <div className="absolute top-8 right-10 text-5xl font-black text-white/5 group-hover:text-accent-gold/10 transition-colors">
        #{rank}
      </div>
      
      <div className="flex-1">
        <div className="flex items-center gap-4 mb-6">
            <div className="px-4 py-1.5 rounded-full bg-accent-gold text-[#2E2242] text-[10px] font-black uppercase tracking-widest shadow-lg shadow-accent-gold/20">
                {church.matchPercent}% Match
            </div>
            <div className="text-[10px] font-bold text-[#D1C7E0]/60 uppercase tracking-widest">
                {church.distanceMiles ? `${Math.round(church.distanceMiles)} miles away` : 'Nearby'}
            </div>
        </div>

        <h3 className="text-display text-4xl font-bold text-[#F5F1FF] mb-3 tracking-tight">
          {church.name}
        </h3>
        
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-[#D1C7E0] mb-8 font-medium">
            <span className="flex items-center gap-2">
                <span className="text-accent-gold">📍</span> {church.city}, {church.state}
            </span>
            {church.website && (
              <>
                <span className="hidden sm:block text-white/10">|</span>
                <a 
                  href={church.website} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-accent-gold/80 hover:text-accent-gold transition-colors"
                >
                  <span className="text-accent-gold text-lg leading-none">🌐</span>
                  <span className="truncate max-w-[200px]">{church.website.replace(/^https?:\/\/(www\.)?/, '').split('/')[0]}</span>
                </a>
              </>
            )}
            <span className="hidden sm:block text-white/10">|</span>
            <span className="flex items-center gap-2">
                <span className="text-accent-gold">👤</span> {church.pastor || "Lead Pastor"}
            </span>
            <span className="hidden sm:block text-white/10">|</span>
            <span className="text-white/60 text-sm uppercase tracking-widest">{church.denomination}</span>
        </div>
        
        <div className="flex flex-wrap gap-3 mb-10">
          {church.reasons?.map((reason) => (
            <span key={reason} className="inline-flex items-center gap-2 rounded-xl bg-white/5 border border-white/5 px-4 py-2 text-xs font-bold text-white/70">
              <span className="h-1 w-1 rounded-full bg-accent-gold"></span>
              {reason}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 pt-6 border-t border-white/5">
          <Link
            href={`/church/${church.slug || church.id}`}
            className="btn-gold py-3 px-10 text-xs"
          >
            View Sanctuary
          </Link>
          <button
            onClick={() => setShowRequestModal(true)}
            className="btn-outline-white py-3 px-10 text-xs"
          >
            Plan a Visit
          </button>
        </div>
      </div>

      {showRequestModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#1A1226]/90 backdrop-blur-md p-6 overflow-y-auto">
          <div className="relative w-full max-w-xl bg-[#2E2242] border border-white/10 rounded-[2.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.6)] p-10 lg:p-16 animate-in fade-in zoom-in duration-300">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-8xl mb-8">✨</div>
                <h3 className="text-3xl font-bold text-white mb-4 uppercase tracking-widest">Inquiry Sent</h3>
                <p className="text-[#D1C7E0] text-lg">Your heart for connection has been shared with {church.name}.</p>
              </div>
            ) : (
              <>
                <div className="flex justify-between items-start mb-10">
                  <div>
                    <h3 className="text-3xl font-bold text-white uppercase tracking-widest mb-2">Connect</h3>
                    <p className="text-accent-gold/60 font-medium">Inquire about visiting {church.name}</p>
                  </div>
                  <button 
                    onClick={() => setShowRequestModal(false)}
                    className="text-white/20 hover:text-white p-2 transition-colors"
                  >
                    ✕
                  </button>
                </div>
                <form onSubmit={handleSubmitRequest} className="space-y-8">
                  <div className="grid gap-8 sm:grid-cols-2">
                    <label className="block">
                        <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-2">Your Name</span>
                        <input required value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none focus:border-accent-gold transition-all" placeholder="Jane Doe" />
                    </label>
                    <label className="block">
                        <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-2">Email Address</span>
                        <input required type="email" value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none focus:border-accent-gold transition-all" placeholder="jane@example.com" />
                    </label>
                  </div>
                  <label className="block">
                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-2">Message (Optional)</span>
                    <textarea value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })} className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none focus:border-accent-gold min-h-[120px] resize-none" placeholder="I'd love to visit this coming Sunday..." />
                  </label>
                  <div className="flex gap-4 pt-4">
                    <button type="submit" className="btn-gold flex-1 py-4 text-sm uppercase tracking-widest">
                      Send Inquiry
                    </button>
                    <button type="button" onClick={() => setShowRequestModal(false)} className="btn-outline-white flex-1 py-4 text-sm uppercase tracking-widest">
                      Cancel
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
