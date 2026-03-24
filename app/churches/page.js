"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChurchCard } from "@/components/church-card";
import {
  denominationOptions,
  sizeOptions,
  worshipStyleOptions
} from "@/lib/churches";

export default function ChurchesPage() {
  const [allChurches, setAllChurches] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const [filters, setFilters] = useState({
    search: "",
    denomination: "",
    worshipStyle: "",
    size: ""
  });

  useEffect(() => {
    async function loadChurches() {
      try {
        const res = await fetch('/api/churches');
        if (res.ok) {
          const data = await res.json();
          setAllChurches(data);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    loadChurches();
  }, []);

  const updateFilter = (field, value) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const filteredChurches = useMemo(() => {
    const term = filters.search.trim().toLowerCase();
    return allChurches.filter((church) => {
      const matchesSearch =
        !term ||
        [
          church.name,
          church.city,
          church.state,
          church.denomination,
          church.worshipStyle,
          church.description
        ]
          .join(" ")
          .toLowerCase()
          .includes(term);
      const matchesDenomination = !filters.denomination || church.denomination === filters.denomination;
      const matchesWorship = !filters.worshipStyle || church.worshipStyle === filters.worshipStyle;
      const matchesSize = !filters.size || church.size === filters.size;

      return matchesSearch && matchesDenomination && matchesWorship && matchesSize;
    });
  }, [allChurches, filters]);

  const inputClasses = "w-full rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white outline-none transition-all duration-200 focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/10";
  const labelClasses = "text-[10px] font-bold uppercase tracking-widest text-white/50 block mb-1.5";

  if (loading) {
    return (
      <div className="min-h-screen cinematic-bg flex items-center justify-center p-6">
        <div className="cinematic-overlay" />
        <div className="relative z-10 text-center">
          <div className="h-12 w-12 border-4 border-accent-gold/20 border-t-accent-gold rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-accent-gold text-xs font-bold uppercase tracking-[0.2em]">Sanctuary Registry Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1A1226] text-[#EDE7F6] pt-24 pb-32">
      <section className="relative overflow-hidden pt-12 pb-20 px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-7xl relative z-10"
        >
            <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-gold/10 text-accent-gold text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                    Approved church directory
                </div>
                <h1 className="text-display text-4xl sm:text-6xl font-bold text-[#F5F1FF] mb-6 uppercase tracking-widest leading-tight">
                    Browse <br /><span className="text-accent-gold italic">Sanctuaries.</span>
                </h1>
                <p className="text-lg text-[#D1C7E0] leading-relaxed">
                    Explore our registry of registered faith communities. Filter by tradition, style, and size to find your fit.
                </p>
            </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] shadow-2xl mb-12"
        >
          <div className="grid gap-6 md:grid-cols-4 items-end">
            <label className="md:col-span-2">
              <span className={labelClasses}>Search</span>
              <input
                value={filters.search}
                onChange={(e) => updateFilter("search", e.target.value)}
                placeholder="Name, city, or keywords"
                className={inputClasses}
              />
            </label>
            <label>
              <span className={labelClasses}>Denomination</span>
              <select
                value={filters.denomination}
                onChange={(e) => updateFilter("denomination", e.target.value)}
                className={`${inputClasses} appearance-none cursor-pointer`}
              >
                <option value="" className="text-[#2E2242]">All Traditions</option>
                {denominationOptions.map((option) => (
                  <option key={option} value={option} className="text-[#2E2242]">
                    {option}
                  </option>
                ))}
              </select>
            </label>
            <label>
              <span className={labelClasses}>Worship style</span>
              <select
                value={filters.worshipStyle}
                onChange={(e) => updateFilter("worshipStyle", e.target.value)}
                className={`${inputClasses} appearance-none cursor-pointer`}
              >
                <option value="" className="text-[#2E2242]">All Styles</option>
                {worshipStyleOptions.map((option) => (
                  <option key={option} value={option} className="text-[#2E2242]">
                    {option}
                  </option>
                ))}
              </select>
            </label>
          </div>
          
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/5 pt-6">
             <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
                Showing {filteredChurches.length} approved communities
             </p>
             <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilters({ search: "", denomination: "", worshipStyle: "", size: "" })}
                className="text-[10px] font-black text-accent-gold hover:text-accent-gold-hover transition uppercase tracking-widest"
              >
                Reset Filters
              </motion.button>
          </div>
        </motion.div>

        <motion.div 
          layout
          className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredChurches.length > 0 ? (
              filteredChurches.map((church) => (
                <motion.div
                  key={church.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChurchCard church={church} />
                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full py-32 text-center bg-white/5 border border-white/5 rounded-[2rem]"
              >
                <span className="text-6xl mb-6 block">🔍</span>
                <p className="text-[#D1C7E0] text-lg font-medium">No sanctuaries match your criteria.</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFilters({ search: "", denomination: "", worshipStyle: "", size: "" })}
                  className="mt-6 btn-gold px-8 py-3 text-xs"
                >
                  Clear all filters
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
}
