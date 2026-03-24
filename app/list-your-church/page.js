"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  denominationOptions, 
  worshipStyleOptions, 
  sizeOptions,
  ministryOptions,
  accessibilityOptions
} from "@/lib/churches";

const STEPS = [
  { id: 1, label: "Identity" },
  { id: 2, label: "Location" },
  { id: 3, label: "Details" },
  { id: 4, label: "Review" }
];

export default function ListYourChurchPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [direction, setDirection] = useState(0); // 1 for next, -1 for prev

  const [form, setForm] = useState({
    name: "",
    pastor: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    denomination: "",
    worshipStyle: "",
    size: "",
    ministries: [],
    accessibility: [],
    description: "",
  });

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0
    })
  };

  const updateField = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (error) setError(null);
  };

  const toggleArrayItem = (field, item) => {
    setForm(prev => ({
      ...prev,
      [field]: prev[field].includes(item)
        ? prev[field].filter(i => i !== item)
        : [...prev[field], item]
    }));
  };

  const nextStep = (e) => {
    e?.preventDefault();
    setDirection(1);
    setCurrentStep(prev => Math.min(prev + 1, STEPS.length));
  };
  
  const prevStep = () => {
    setDirection(-1);
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const payload = {
      church_name: form.name,
      pastor_name: form.pastor,
      email: form.email,
      phone: form.phone,
      address: form.address,
      city: form.city,
      state: form.state,
      zip_code: form.zip,
      denomination: form.denomination,
      worship_style: form.worshipStyle,
      church_size: form.size,
      ministries: form.ministries,
      accessibility: form.accessibility
    };

    try {
      const res = await fetch('/api/churches', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitted(true);
        fetch('/api/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            type: 'registration-confirmation',
            churchName: form.name,
            email: form.email
          })
        }).catch(err => console.error("Confirmation email failed:", err));
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Failed to connect to the server.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#2E2242] via-[#3A2A5A] to-[#1E1B2E] text-white p-6"
      >
        <div className="bg-white/10 backdrop-blur-xl p-8 md:p-16 rounded-[2.5rem] text-center max-w-xl shadow-2xl border border-white/10">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
            className="text-7xl mb-8"
          >
            ✨
          </motion.div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#F5F1FF] uppercase tracking-widest">
            Your church is now live
          </h1>
          <p className="text-[#D1C7E0] text-lg mb-10 leading-relaxed">
            People can now discover and connect with your sanctuary. We are honored to serve your community.
          </p>
          <motion.button 
              onClick={() => router.push("/")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#D4AF37] to-[#E7C868] text-[#2E2242] font-black px-12 py-4 rounded-2xl shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-300 uppercase tracking-widest text-sm"
          >
              Return Home
          </motion.button>
        </div>
      </motion.div>
    );
  }

  const inputClasses = "h-[56px] w-full rounded-xl border border-white/10 bg-white/5 px-6 text-white outline-none transition-all duration-300 focus:border-accent-gold focus:ring-4 focus:ring-accent-gold/10 placeholder:text-white/20 text-base md:text-lg";
  const selectClasses = "h-[56px] w-full rounded-xl border border-white/10 bg-white/5 px-6 text-white outline-none transition-all duration-300 focus:border-accent-gold focus:ring-4 focus:ring-accent-gold/10 text-base md:text-lg appearance-none cursor-pointer";
  const labelClasses = "text-[10px] font-bold uppercase tracking-[0.25em] text-accent-gold/70 block mb-2 ml-1";
  const pillClasses = (active) => `px-4 py-2.5 md:px-5 md:py-3 rounded-xl border text-xs md:text-sm font-bold transition-all duration-300 ${active ? "bg-gradient-to-r from-[#D4AF37] to-[#E7C868] text-[#2E2242] border-none shadow-lg" : "bg-white/5 border-white/10 text-white/60 hover:border-white/30"}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2E2242] via-[#3A2A5A] to-[#1E1B2E] text-[#EDE7F6] flex flex-col items-center justify-start md:justify-center p-4 md:p-6 overflow-x-hidden relative pt-24 md:pt-6">
      <div className="cinematic-overlay" />
      
      {/* TOP SECTION */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-4xl mb-8 md:mb-12 text-center"
      >
        <div className="flex items-center justify-center gap-3 md:gap-6 mb-8 md:mb-10">
            {STEPS.map((step) => (
                <div key={step.id} className="flex items-center gap-3 md:gap-6">
                    <div className={`h-10 w-10 md:h-12 md:w-12 rounded-2xl flex items-center justify-center text-base md:text-lg font-black transition-all duration-500 border-2 ${
                        currentStep === step.id 
                        ? "bg-white border-white text-[#2E2242] shadow-[0_0_30px_rgba(255,255,255,0.3)] scale-110" 
                        : currentStep > step.id
                        ? "bg-accent-gold border-accent-gold text-[#2E2242]"
                        : "bg-white/5 border-white/10 text-white/20"
                    }`}>
                        {step.id}
                    </div>
                    {step.id !== STEPS.length && (
                        <div className={`h-[2px] w-6 md:w-12 rounded-full transition-colors duration-500 ${currentStep > step.id ? "bg-accent-gold" : "bg-white/10"}`} />
                    )}
                </div>
            ))}
        </div>
        <h1 className="text-display text-3xl md:text-5xl font-bold text-[#F5F1FF] mb-2 md:mb-3 uppercase tracking-[0.2em] md:tracking-[0.25em]">List Your Church</h1>
        <p className="text-accent-gold text-xs md:text-sm font-medium tracking-[0.15em] opacity-60">Help people find their spiritual home</p>
      </motion.div>

      {/* ONBOARDING CARD */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-4xl bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] md:rounded-[40px] shadow-[0_40px_100px_rgba(0,0,0,0.4)] overflow-hidden"
      >
        <form onSubmit={handleSubmit} className="p-6 md:p-16">
          <div className="min-h-[450px] md:min-h-[400px] relative">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentStep}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="w-full"
              >
                {currentStep === 1 && (
                  <div className="grid gap-8 md:gap-10">
                    <div className="grid gap-6 md:gap-10 md:grid-cols-2">
                        <div>
                            <span className={labelClasses}>Church Identity</span>
                            <input required value={form.name} onChange={(e) => updateField("name", e.target.value)} className={inputClasses} placeholder="Sanctuary Name" />
                        </div>
                        <div>
                            <span className={labelClasses}>Lead Pastor</span>
                            <input required value={form.pastor} onChange={(e) => updateField("pastor", e.target.value)} className={inputClasses} placeholder="Full Name" />
                        </div>
                    </div>
                    <div className="grid gap-6 md:gap-10 md:grid-cols-2">
                        <div>
                            <span className={labelClasses}>Primary Email</span>
                            <input required type="email" value={form.email} onChange={(e) => updateField("email", e.target.value)} className={inputClasses} placeholder="office@community.com" />
                        </div>
                        <div>
                            <span className={labelClasses}>Phone Number</span>
                            <input required type="tel" value={form.phone} onChange={(e) => updateField("phone", e.target.value)} className={inputClasses} placeholder="(000) 000-0000" />
                        </div>
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="grid gap-8 md:gap-10">
                    <div>
                        <span className={labelClasses}>Street Address</span>
                        <input required value={form.address} onChange={(e) => updateField("address", e.target.value)} className={inputClasses} placeholder="123 Faith Lane" />
                    </div>
                    <div className="grid gap-6 md:gap-10 md:grid-cols-3">
                        <div className="md:col-span-1">
                            <span className={labelClasses}>City</span>
                            <input required value={form.city} onChange={(e) => updateField("city", e.target.value)} className={inputClasses} placeholder="City" />
                        </div>
                        <div>
                            <span className={labelClasses}>State</span>
                            <input required value={form.state} onChange={(e) => updateField("state", e.target.value)} className={inputClasses} placeholder="ST" maxLength={2} />
                        </div>
                        <div>
                            <span className={labelClasses}>Zip Code</span>
                            <input required value={form.zip} onChange={(e) => updateField("zip", e.target.value)} className={inputClasses} placeholder="00000" />
                        </div>
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="grid gap-8 md:gap-10">
                    <div className="grid gap-6 md:gap-10 md:grid-cols-3">
                        <div>
                            <span className={labelClasses}>Denomination</span>
                            <select required value={form.denomination} onChange={(e) => updateField("denomination", e.target.value)} className={selectClasses}>
                                <option value="">Select Tradition</option>
                                {denominationOptions.map(o => <option key={o} value={o} className="text-[#2E2242]">{o}</option>)}
                            </select>
                        </div>
                        <div>
                            <span className={labelClasses}>Worship Style</span>
                            <select required value={form.worshipStyle} onChange={(e) => updateField("worshipStyle", e.target.value)} className={selectClasses}>
                                <option value="">Select Style</option>
                                {worshipStyleOptions.map(o => <option key={o} value={o} className="text-[#2E2242]">{o}</option>)}
                            </select>
                        </div>
                        <div>
                            <span className={labelClasses}>Size</span>
                            <select required value={form.size} onChange={(e) => updateField("size", e.target.value)} className={selectClasses}>
                                <option value="">Select Size</option>
                                {sizeOptions.map(o => <option key={o} value={o} className="text-[#2E2242]">{o}</option>)}
                            </select>
                        </div>
                    </div>
                    
                    <div className="space-y-4 md:space-y-6">
                        <span className={labelClasses}>Ministries & Features</span>
                        <div className="flex flex-wrap gap-2 md:gap-3">
                            {ministryOptions.slice(0, 8).map(m => (
                                <motion.button 
                                  key={m} 
                                  type="button" 
                                  whileTap={{ scale: 0.92 }}
                                  onClick={() => toggleArrayItem("ministries", m)} 
                                  className={pillClasses(form.ministries.includes(m))}
                                >
                                    {m}
                                </motion.button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4 md:space-y-6">
                        <span className={labelClasses}>Accessibility</span>
                        <div className="flex flex-wrap gap-2 md:gap-3">
                            {accessibilityOptions.map(a => (
                                <motion.button 
                                  key={a} 
                                  type="button" 
                                  whileTap={{ scale: 0.92 }}
                                  onClick={() => toggleArrayItem("accessibility", a)} 
                                  className={pillClasses(form.accessibility.includes(a))}
                                >
                                    {a}
                                </motion.button>
                            ))}
                        </div>
                    </div>
                  </div>
                )}

                {currentStep === 4 && (
                  <div className="grid gap-8 md:gap-10">
                    <div className="grid gap-6 md:gap-10 md:grid-cols-2 bg-white/5 rounded-3xl p-6 md:p-10 border border-white/5 shadow-inner">
                        <div className="space-y-4 md:space-y-6">
                            <div>
                                <span className="text-[9px] font-bold text-accent-gold/50 uppercase tracking-widest block mb-1">Church Name</span>
                                <p className="text-xl md:text-2xl font-bold text-white leading-tight">{form.name || "—"}</p>
                            </div>
                            <div>
                                <span className="text-[9px] font-bold text-accent-gold/50 uppercase tracking-widest block mb-1">Lead Pastor</span>
                                <p className="text-lg md:text-xl font-bold text-white">{form.pastor || "—"}</p>
                            </div>
                            <div>
                                <span className="text-[9px] font-bold text-accent-gold/50 uppercase tracking-widest block mb-1">Email</span>
                                <p className="text-base md:text-lg text-white/80">{form.email || "—"}</p>
                            </div>
                        </div>
                        <div className="space-y-4 md:space-y-6 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-10">
                            <div>
                                <span className="text-[9px] font-bold text-accent-gold/50 uppercase tracking-widest block mb-1">Location</span>
                                <p className="text-lg md:text-xl font-bold text-white">{form.city || "—"}, {form.state || "—"}</p>
                            </div>
                            <div>
                                <span className="text-[9px] font-bold text-accent-gold/50 uppercase tracking-widest block mb-1">Tradition</span>
                                <p className="text-base md:text-lg text-white/80">{form.denomination || "—"}</p>
                            </div>
                            <div>
                                <span className="text-[9px] font-bold text-accent-gold/50 uppercase tracking-widest block mb-1">Style</span>
                                <p className="text-base md:text-lg text-white/80">{form.worshipStyle || "—"}</p>
                            </div>
                        </div>
                    </div>
                    {error && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-200 text-sm text-center font-medium"
                      >
                        {error}
                      </motion.div>
                    )}
                    <p className="text-center text-white/30 italic text-xs md:text-sm px-4">
                        Review your details carefully. By clicking submit, you agree to our Terms of Discovery.
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-10 md:mt-16 pt-8 md:pt-10 border-t border-white/5 flex flex-col sm:flex-row gap-4 md:gap-6">
            {currentStep > 1 && (
              <motion.button 
                type="button" 
                onClick={prevStep} 
                whileTap={{ scale: 0.96 }}
                disabled={isSubmitting} 
                className="btn-outline-white w-full sm:flex-1 py-4 md:py-5 rounded-2xl disabled:opacity-50 text-sm md:text-base font-bold uppercase tracking-widest"
              >
                Go Back
              </motion.button>
            )}
            {currentStep < STEPS.length ? (
              <motion.button 
                type="button" 
                onClick={nextStep} 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                className="bg-gradient-to-r from-[#D4AF37] to-[#E7C868] text-[#2E2242] font-black uppercase tracking-widest w-full sm:flex-1 py-4 md:py-5 rounded-2xl shadow-xl transition-all duration-300 text-sm md:text-base"
              >
                Continue
              </motion.button>
            ) : (
              <motion.button 
                type="submit" 
                disabled={isSubmitting} 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className="bg-gradient-to-r from-[#D4AF37] to-[#E7C868] text-[#2E2242] font-black uppercase tracking-widest w-full sm:flex-1 py-4 md:py-5 rounded-2xl shadow-[0_0_50px_rgba(212,175,55,0.3)] transition-all duration-300 disabled:opacity-50 text-sm md:text-base"
              >
                {isSubmitting ? "Registering..." : "Register Your Sanctuary"}
              </motion.button>
            )}
          </div>
        </form>
      </motion.div>
    </div>
  );
}
