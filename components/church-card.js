"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, User, ArrowRight } from "lucide-react";

export function ChurchCard({ church, compact = false }) {
  return (
    <motion.article 
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] h-full flex flex-col p-8 group hover:border-white/20 transition-colors"
    >
      {/* Top Meta */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex gap-2">
            <span className="px-3 py-1 bg-white/5 text-white/60 text-[9px] font-bold uppercase tracking-widest rounded-full border border-white/5">
                {church.denomination}
            </span>
            <span className="px-3 py-1 bg-accent-gold/10 text-accent-gold text-[9px] font-bold uppercase tracking-widest rounded-full border border-accent-gold/10">
                {church.worshipStyle}
            </span>
        </div>
      </div>

      {/* Title & Location */}
      <div className="mb-4">
        <h3 className="text-display text-2xl font-bold text-[#F5F1FF] mb-3 tracking-tight group-hover:text-accent-gold transition-colors">
          {church.name}
        </h3>
        <p className="text-sm font-medium text-[#D1C7E0] flex items-center gap-2">
            <MapPin className="w-4 h-4 text-accent-gold" />
            {church.city}, {church.state}
        </p>
      </div>

      {/* Description */}
      <p className={`text-white/50 leading-relaxed mb-8 ${compact ? "line-clamp-2 text-sm" : "text-base"}`}>
        {church.description || "A welcoming faith community dedicated to serving the local area and sharing the message of hope."}
      </p>

      {/* Pastor & Details */}
      {!compact && (
        <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xs font-bold text-accent-gold">
                    {church.pastor?.split(' ').map(n => n[0]).join('') || <User className="w-4 h-4" />}
                </div>
                <div>
                    <p className="text-xs font-bold text-white uppercase tracking-wider">{church.pastor || "Lead Pastor"}</p>
                    <p className="text-[10px] text-white/30 font-medium">{church.serviceTimes?.[0] || "Sundays 10:00 AM"}</p>
                </div>
            </div>
            
            <Link
                href={`/church/${church.slug || church.id}`}
                className="text-xs font-black text-accent-gold hover:text-white transition-colors flex items-center gap-2 uppercase tracking-widest"
            >
                View Profile <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
        </div>
      )}

      {compact && (
        <div className="mt-auto">
             <Link
                href={`/church/${church.slug || church.id}`}
                className="btn-gold w-full py-3 text-[10px] uppercase font-black tracking-widest"
            >
                View Details
            </Link>
        </div>
      )}
    </motion.article>
  );
}
