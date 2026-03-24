"use client";

import Link from 'next/link';
import { MapPin, ClipboardList, Sparkles, CalendarCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HomePage() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col cinematic-bg min-h-screen text-[#D1C7E0]"
    >
      <div className="cinematic-overlay" />
      
      {/* 1. HERO SECTION */}
      <section className="relative z-10 pt-28 pb-20 md:pt-48 md:pb-60 px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="container mx-auto text-center max-w-5xl"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 
            variants={itemVariants}
            className="text-display text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-[#F5F1FF] mb-6 md:mb-10 uppercase tracking-widest leading-tight"
          >
            Find a Church <br /> <span className="bg-gradient-to-r from-[#D4AF37] to-[#E7C868] bg-clip-text text-transparent italic">to call home</span>
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="mx-auto max-w-2xl text-base sm:text-lg md:text-2xl font-medium text-white/70 mb-10 md:mb-16 tracking-wide"
          >
            Nationwide Church-Seeker Matching Platform <br className="hidden md:block" />
            <span className="text-accent-gold/90 text-sm sm:text-base md:text-xl block mt-4 font-normal uppercase tracking-[0.2em]">Find a sanctuary at aplaceformetoworship.com</span>
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8"
          >
            <Link href="/find-my-church" passHref legacyBehavior>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-gold px-8 md:px-12 py-4 md:py-5 text-base md:text-lg w-full sm:w-auto shadow-xl shadow-accent-gold/20 font-black uppercase tracking-widest"
              >
                Find Your Match
              </motion.button>
            </Link>
            <Link href="/list-your-church" passHref legacyBehavior>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-outline-white px-8 md:px-12 py-4 md:py-5 text-base md:text-lg w-full sm:w-auto font-black uppercase tracking-widest"
              >
                Register a Church
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. CORE FEATURES */}
      <section className="relative z-10 pb-20 md:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {[
              { icon: MapPin, title: "Nationwide Reach" },
              { icon: ClipboardList, title: "Guided Match Questions" },
              { icon: Sparkles, title: "AI-Powered Matching" },
              { icon: CalendarCheck, title: "Connect & Plan a Visit" }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                variants={itemVariants}
                className="flex flex-col items-center text-center group"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="h-16 w-16 md:h-20 md:w-20 flex items-center justify-center border-2 border-accent-gold/40 rounded-full mb-6 md:mb-8 group-hover:bg-accent-gold/10 group-hover:border-accent-gold group-hover:shadow-[0_0_30px_rgba(231,198,139,0.2)] transition-all duration-500"
                >
                  <feature.icon className="w-6 h-6 md:w-8 md:h-8 text-accent-gold" strokeWidth={1.5} />
                </motion.div>
                <h3 className="text-[#F5F1FF] text-sm md:text-base font-bold uppercase tracking-widest mb-2">{feature.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. BRIDGE STRIP */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative z-10 border-t border-white/10 bg-black/20 backdrop-blur-sm py-12 md:py-16 px-4"
      >
        <div className="mx-auto max-w-7xl text-center">
           <h2 className="text-[#F5F1FF] text-lg sm:text-xl lg:text-2xl font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] leading-relaxed">
            Build a bridge <br className="md:hidden" /> between seekers & churches
           </h2>
        </div>
      </motion.section>

      {/* 4. PREVIEW SECTION */}
      <section className="relative z-10 py-20 md:py-32 bg-white/5 px-4 sm:px-6 lg:px-8 text-center">
        <div className="mx-auto max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex px-4 py-1.5 rounded-full bg-accent-gold/10 text-accent-gold text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6 md:mb-8"
            >
                The Platform in Action
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-display text-2xl sm:text-4xl lg:text-5xl font-bold text-[#F5F1FF] mb-12 md:mb-20 leading-tight uppercase tracking-widest"
            >
                Designed to make discovery <br /> <span className="text-accent-gold italic">peaceful and personal</span>.
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex justify-center px-2"
            >
                {/* Simulated App Screen - Dark Text inside light card */}
                <div className="w-full max-w-sm bg-white rounded-[2.5rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.4)] transform scale-[0.9] sm:scale-100 md:scale-105 border border-white/20">
                    <div className="bg-[#6B4E9E] p-3 md:p-4 text-center">
                        <span className="text-white text-xs md:text-sm font-bold opacity-80 tracking-wide">aplaceformetoworship.com</span>
                    </div>
                    <div className="p-5 md:p-8 text-left space-y-5 md:space-y-6">
                        <h4 className="text-lg md:text-xl font-bold text-[#2E2242] uppercase tracking-wider">Your Matches</h4>
                        <div className="space-y-4 text-[#2E2242]">
                            <motion.div 
                              whileHover={{ x: 5 }}
                              className="border border-neutral-gray rounded-xl p-3 md:p-4 flex gap-3 md:gap-4 bg-gray-50"
                            >
                                <div className="h-10 w-10 md:h-12 md:w-12 bg-gray-200 rounded-lg shrink-0 flex items-center justify-center">
                                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-[#2E2242]/20" />
                                </div>
                                <div className="flex-1">
                                    <p className="font-bold text-xs md:text-sm">Grace Community</p>
                                    <p className="text-[10px] md:text-xs text-[#2E2242]/60 font-medium">4.2 miles away</p>
                                    <div className="mt-2">
                                        <div className="inline-flex px-2 py-0.5 bg-[#6B4E9E]/10 rounded text-[8px] md:text-[10px] text-[#6B4E9E] font-black uppercase tracking-widest">MATCHED</div>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div 
                              whileHover={{ x: 5 }}
                              className="border border-neutral-gray rounded-xl p-3 md:p-4 flex gap-3 md:gap-4"
                            >
                                <div className="h-10 w-10 md:h-12 md:w-12 bg-gray-200 rounded-lg shrink-0 flex items-center justify-center">
                                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-[#2E2242]/20" />
                                </div>
                                <div className="flex-1">
                                    <p className="font-bold text-xs md:text-sm">Harvest Ministries</p>
                                    <p className="text-[10px] md:text-xs text-gray-500 font-medium">9.2 miles away</p>
                                </div>
                            </motion.div>
                        </div>
                        <motion.button 
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full btn-gold py-3 text-[10px] md:text-xs font-black uppercase tracking-[0.2em]"
                        >
                          See My Results
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
