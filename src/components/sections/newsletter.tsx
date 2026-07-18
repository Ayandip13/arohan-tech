"use client";

import { useState } from "react";
import { FadeIn } from "@/components/animations/fade-in";
import { Button } from "@/components/ui/button";
import { Mail, CheckCircle, ArrowRight } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus("loading");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1500);
  };

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none" />
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto glass p-10 md:p-16 rounded-3xl border border-border/50 shadow-2xl flex flex-col md:flex-row items-center gap-12">
          
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Stay Ahead of the Curve</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Join 15,000+ industry leaders who receive our weekly insights on enterprise software, cloud architecture, and digital growth.
            </p>
          </div>

          <div className="md:w-1/2 w-full">
            {status === "success" ? (
              <FadeIn>
                <div className="flex flex-col items-center justify-center p-8 bg-success/10 rounded-2xl border border-success/20 text-success text-center">
                  <CheckCircle className="w-12 h-12 mb-4" />
                  <h3 className="text-xl font-bold mb-2">You're Subscribed!</h3>
                  <p className="text-sm opacity-90">Expect our next insights directly in your inbox.</p>
                </div>
              </FadeIn>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input 
                    type="email" 
                    placeholder="Enter your corporate email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full h-14 pl-12 pr-4 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={status === "loading"}
                  className="h-14 rounded-xl text-base font-bold flex items-center justify-center gap-2 group"
                >
                  {status === "loading" ? (
                    <span className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>Subscribe Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></>
                  )}
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-2">
                  We respect your privacy. No spam, ever.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
