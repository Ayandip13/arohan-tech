"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Rocket, ArrowLeft } from "lucide-react";
import { useState } from "react";

export default function ComingSoonPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4 text-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 glass p-12 md:p-16 rounded-3xl border border-border/50 max-w-xl w-full shadow-2xl">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 text-primary">
          <Rocket className="w-10 h-10" />
        </div>
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/60">
          Something Big is Coming
        </h1>
        <p className="text-muted-foreground mb-10 text-lg">
          Our new enterprise client portal is launching soon. Be the first to know when it goes live.
        </p>
        
        {submitted ? (
          <div className="bg-success/10 text-success p-4 rounded-xl border border-success/20 mb-8 animate-in fade-in zoom-in">
            You're on the list! We'll notify you soon.
          </div>
        ) : (
          <form 
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8"
          >
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your corporate email" 
              className="flex-1 h-12 px-4 rounded-full bg-background border border-border focus:ring-2 focus:ring-primary focus:outline-none transition-colors"
            />
            <Button type="submit" className="h-12 rounded-full px-6 whitespace-nowrap">Notify Me</Button>
          </form>
        )}

        <Link href="/">
          <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mx-auto">
            <ArrowLeft className="w-4 h-4" /> Return to Homepage
          </button>
        </Link>
      </div>
    </div>
  );
}
