import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-[#1A1226] border-t border-white/5 py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-gold rounded-full blur-[120px]" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[2fr_1fr_1fr] lg:px-8 relative z-10">
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-gold text-[#2E2242] text-xl font-bold">
              W
            </div>
            <span className="text-display text-2xl font-bold tracking-[0.3em] text-[#F5F1FF] uppercase">
              Worship <span className="text-accent-gold">Match</span>
            </span>
          </div>
          <p className="max-w-md text-lg leading-relaxed text-[#D1C7E0]/70">
            A premium, cinematic matching platform designed to build a bridge between seekers and sanctuaries.
          </p>
          <div className="pt-4 text-xs font-bold uppercase tracking-[0.4em] text-white/20">
            © 2026 Worship Match. All rights reserved.
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="text-xs font-bold uppercase tracking-[0.3em] text-accent-gold">Explore</div>
          <nav className="flex flex-col gap-4 text-sm font-bold text-[#D1C7E0]/60">
            <Link href="/find-my-church" className="hover:text-accent-gold transition">Find Your Church</Link>
            <Link href="/churches" className="hover:text-accent-gold transition">Browse Sanctuaries</Link>
            <Link href="/list-your-church" className="hover:text-accent-gold transition">Register a Church</Link>
            <Link href="/admin" className="hover:text-[#F5F1FF] transition">Admin Access</Link>
          </nav>
        </div>

        <div className="space-y-6">
          <div className="text-xs font-bold uppercase tracking-[0.3em] text-accent-gold">Our Vision</div>
          <p className="text-sm font-medium text-[#D1C7E0]/50 leading-relaxed">
            We believe that finding a spiritual home should be a journey of peace, not a process of frustration. Our AI-powered matching helps you find where you truly belong.
          </p>
        </div>
      </div>
    </footer>
  );
}
