"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function PillGroup({ label, options, selectedValues, onToggle }) {
  return (
    <div className="space-y-4">
      <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/70">{label}</div>
      <div className="flex flex-wrap gap-2 md:gap-3">
        {options.map((option) => {
          const isActive = selectedValues.includes(option);

          return (
            <motion.button
              key={option}
              type="button"
              onClick={() => onToggle(option)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className={`rounded-xl px-4 py-2.5 md:px-5 md:py-3 text-xs md:text-sm font-bold transition-all duration-200 ${
                isActive
                  ? "bg-gradient-to-r from-[#D4AF37] to-[#E7C868] text-[#2E2242] shadow-lg shadow-[#D4AF37]/30 border-none"
                  : "border border-white/20 text-white/70 bg-white/5 hover:border-white/40 hover:bg-white/10"
              }`}
            >
              {option}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

export function QuizForm({
  onSearch,
  denominationOptions,
  worshipStyleOptions,
  preachingStyleOptions,
  sizeOptions,
  ministryOptions,
  accessibilityOptions,
  radiusOptions
}) {
  const router = useRouter();
  const [formState, setFormState] = useState({
    zip: "",
    radius: "25",
    denomination: "",
    worshipStyle: "",
    preachingStyle: "",
    size: "",
    ministries: [],
    accessibility: [],
    onlinePreference: "no-preference"
  });

  const updateField = (field, value) => {
    setFormState((current) => ({ ...current, [field]: value }));
  };

  const toggleArrayItem = (field, option) => {
    setFormState((current) => {
      const values = current[field];

      return {
        ...current,
        [field]: values.includes(option)
          ? values.filter((item) => item !== option)
          : [...values, option]
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const params = new URLSearchParams();
    params.set("zip", formState.zip);
    params.set("radius", formState.radius);

    if (formState.denomination) params.set("denomination", formState.denomination);
    if (formState.worshipStyle) params.set("worship", formState.worshipStyle);
    if (formState.preachingStyle) params.set("preaching", formState.preachingStyle);
    if (formState.size) params.set("size", formState.size);
    params.set("online", formState.onlinePreference);

    formState.ministries.forEach((item) => params.append("ministries", item));
    formState.accessibility.forEach((item) => params.append("accessibility", item));

    if (onSearch) {
      onSearch(params);
    } else {
      router.push(`/match-results?${params.toString()}`);
    }
  };

  const inputClasses = "w-full h-14 rounded-xl border border-white/10 bg-white/5 px-5 text-base text-white outline-none transition-all duration-200 focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/10 placeholder:text-white/20";
  const labelClasses = "text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/70 block mb-2 ml-1";

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="grid gap-8 md:gap-12 lg:grid-cols-[1fr_350px]"
    >
      <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-12 rounded-[1.5rem] md:rounded-[2rem]">
        <div className="grid gap-6 md:gap-8 md:grid-cols-2">
          <label className="block">
            <span className={labelClasses}>ZIP code</span>
            <input
              required
              inputMode="numeric"
              maxLength={5}
              value={formState.zip}
              onChange={(event) => updateField("zip", event.target.value)}
              placeholder="e.g. 30303"
              className={inputClasses}
            />
          </label>

          <label className="block">
            <span className={labelClasses}>Search Radius</span>
            <select
              value={formState.radius}
              onChange={(event) => updateField("radius", event.target.value)}
              className={`${inputClasses} appearance-none cursor-pointer`}
            >
              {radiusOptions.map((radius) => (
                <option key={radius} value={radius} className="text-[#2E2242]">
                  {radius} miles
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className={labelClasses}>Denomination</span>
            <select
              value={formState.denomination}
              onChange={(event) => updateField("denomination", event.target.value)}
              className={`${inputClasses} appearance-none cursor-pointer`}
            >
              <option value="" className="text-[#2E2242]">Any Tradition</option>
              {denominationOptions.map((option) => (
                <option key={option} value={option} className="text-[#2E2242]">
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className={labelClasses}>Worship style</span>
            <select
              value={formState.worshipStyle}
              onChange={(event) => updateField("worshipStyle", event.target.value)}
              className={`${inputClasses} appearance-none cursor-pointer`}
            >
              <option value="" className="text-[#2E2242]">Any Worship Style</option>
              {worshipStyleOptions.map((option) => (
                <option key={option} value={option} className="text-[#2E2242]">
                  {option}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="mt-10 md:mt-12 space-y-10 md:space-y-12">
          <PillGroup
            label="Ministries & Communities"
            options={ministryOptions}
            selectedValues={formState.ministries}
            onToggle={(option) => toggleArrayItem("ministries", option)}
          />

          <PillGroup
            label="Accessibility Requirements"
            options={accessibilityOptions}
            selectedValues={formState.accessibility}
            onToggle={(option) => toggleArrayItem("accessibility", option)}
          />

          <div className="space-y-4">
            <div className={labelClasses}>Livestream Access</div>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {[
                { value: "no-preference", label: "No preference" },
                { value: "yes", label: "Include livestream" },
                { value: "no", label: "In-person only" }
              ].map((option) => {
                const isActive = formState.onlinePreference === option.value;

                return (
                  <motion.button
                    key={option.value}
                    type="button"
                    onClick={() => updateField("onlinePreference", option.value)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`rounded-xl px-4 py-2.5 md:px-6 md:py-3 text-xs md:text-sm font-bold transition-all duration-200 ${
                      isActive
                        ? "bg-gradient-to-r from-[#D4AF37] to-[#E7C868] text-[#2E2242] shadow-lg shadow-[#D4AF37]/30 border-none"
                        : "border border-white/20 text-white/70 bg-white/5 hover:border-white/40 hover:bg-white/10"
                    }`}
                  >
                    {option.label}
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-12 pt-8 md:pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs md:text-sm font-medium text-white/50 text-center sm:text-left max-w-sm">
             We’ll analyze deep theological alignment to find the 10 best matches for your soul-fit.
          </p>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="btn-gold w-full sm:w-auto px-10 py-4 text-base md:text-lg shadow-lg shadow-accent-gold/20"
          >
            Find My Matches
          </motion.button>
        </div>
      </form>

      <aside className="space-y-6 md:space-y-8">
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 20 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] shadow-xl"
        >
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-gold mb-4">
            How it works
          </div>
          <ul className="space-y-4 text-xs md:text-sm leading-relaxed text-[#D1C7E0]">
            <li className="flex gap-3">
                <span className="text-accent-gold font-bold">01.</span>
                <span>Precise geolocation matching.</span>
            </li>
            <li className="flex gap-3">
                <span className="text-accent-gold font-bold">02.</span>
                <span>Deep alignment on theology and values.</span>
            </li>
            <li className="flex gap-3">
                <span className="text-accent-gold font-bold">03.</span>
                <span>Ranked results prioritized by your heart.</span>
            </li>
          </ul>
        </motion.div>
        
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 20 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem]"
        >
            <h4 className="text-display text-lg md:text-xl font-bold text-[#F5F1FF] mb-3 uppercase tracking-widest">Privacy First</h4>
            <p className="text-xs md:text-sm text-[#D1C7E0] leading-relaxed">Your preferences are private. We only share anonymized data with sanctuaries.</p>
        </motion.div>
      </aside>
    </motion.div>
  );
}
