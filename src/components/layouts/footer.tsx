"use client";

import Link from "next/link";
import { ArrowUpRight, Sparkles, ArrowUp, Send, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-card/60 border-t border-rose-500/20 overflow-hidden pt-20 pb-12">
      {/* Background ambient light */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Massive Agency Callout */}
        <div className="mb-16 pb-12 border-b border-border/80 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 text-rose-500 font-extrabold text-xs uppercase tracking-widest mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Let's Create Magic</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-black tracking-tight leading-tight">
              Ready to elevate your brand to <span className="gradient-text-coral-amber">unprecedented heights?</span>
            </h2>
          </div>
          <div className="flex-shrink-0">
            <Link href="/contact">
              <Button variant="gradient" size="lg" className="rounded-full shadow-2xl shadow-rose-500/30 px-8 font-extrabold">
                Start a Project 🚀
              </Button>
            </Link>
          </div>
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-rose-500 via-amber-400 to-purple-600 p-[2px] shadow-lg shadow-rose-500/20">
                <div className="w-full h-full bg-background rounded-[14px] flex items-center justify-center text-foreground font-heading font-black text-xl">
                  A<span className="text-primary font-serif">✦</span>
                </div>
              </div>
              <span className="font-heading font-extrabold text-2xl tracking-tight">
                Arohan<span className="text-amber-500">.</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              We are a powerhouse Creative Digital Marketing Agency blending viral marketing strategies, brand storytelling, and modern web development.
            </p>

            {/* Newsletter Input */}
            <div className="pt-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                Join our Weekly Growth Digest ⚡
              </label>
              <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2 max-w-md">
                <input
                  type="email"
                  placeholder="Enter your work email..."
                  className="w-full h-11 px-4 rounded-full bg-background border border-border/80 text-xs focus:outline-none focus:border-rose-500 transition-colors shadow-inner"
                />
                <button
                  type="submit"
                  className="h-11 w-11 rounded-full bg-gradient-to-r from-rose-500 to-amber-500 text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

            <div className="flex items-center gap-3 pt-1">
              {[
                { name: "Twitter", href: "#", icon: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" },
                { name: "GitHub", href: "#", icon: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" },
                { name: "LinkedIn", href: "#", icon: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" }
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  className="w-9 h-9 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-rose-500 hover:border-rose-500 hover:scale-110 transition-all shadow-sm"
                  aria-label={s.name}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={s.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading font-extrabold text-foreground mb-4 text-base">Services</h3>
            <ul className="flex flex-col gap-2.5 font-medium text-xs">
              <li><Link href="/services" className="text-muted-foreground hover:text-rose-500 transition-colors inline-flex items-center group">Digital Marketing <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity ml-1" /></Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-rose-500 transition-colors inline-flex items-center group">Brand Strategy <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity ml-1" /></Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-rose-500 transition-colors inline-flex items-center group">Web & Mobile Dev <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity ml-1" /></Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-rose-500 transition-colors inline-flex items-center group">Performance Marketing & SEO <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity ml-1" /></Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-rose-500 transition-colors inline-flex items-center group">UI/UX & Motion Design <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity ml-1" /></Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-extrabold text-foreground mb-4 text-base">Company</h3>
            <ul className="flex flex-col gap-2.5 font-medium text-xs">
              <li><Link href="/about" className="text-muted-foreground hover:text-rose-500 transition-colors">About Our Agency</Link></li>
              <li><Link href="/work" className="text-muted-foreground hover:text-rose-500 transition-colors">Featured Case Studies</Link></li>
              <li><Link href="/careers" className="text-muted-foreground hover:text-rose-500 transition-colors inline-flex items-center">Join Our Team <span className="ml-2 text-[9px] font-black uppercase tracking-wider bg-rose-500/10 text-rose-500 py-0.5 px-1.5 rounded-full">Hiring</span></Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-rose-500 transition-colors">Growth Blog</Link></li>
              <li><Link href="/faq" className="text-muted-foreground hover:text-rose-500 transition-colors">FAQ & Process</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-rose-500 transition-colors">Get in Touch</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-extrabold text-foreground mb-4 text-base">Client Hub</h3>
            <ul className="flex flex-col gap-2.5 font-medium text-xs">
              <li><Link href="/login" className="text-muted-foreground hover:text-rose-500 transition-colors">Client Login</Link></li>
              <li><Link href="/admin" className="text-muted-foreground hover:text-rose-500 transition-colors">Admin Portal</Link></li>
              <li><Link href="/employee" className="text-muted-foreground hover:text-rose-500 transition-colors">Team Portal</Link></li>
              <li><Link href="/coming-soon" className="text-muted-foreground hover:text-rose-500 transition-colors">Project Tracker</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-border/80 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs font-medium flex items-center gap-1">
            &copy; {currentYear} Arohan Creative Agency. Crafted with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> for growth-driven brands.
          </p>
          
          <div className="flex items-center gap-5 text-xs font-medium text-muted-foreground">
            <Link href="/privacy-policy" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link>
            <Link href="/cookie-policy" className="hover:text-foreground transition-colors hidden sm:block">Cookies</Link>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-background border border-border text-foreground hover:text-rose-500 hover:border-rose-500 transition-all hover:scale-110 shadow-sm ml-2"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
