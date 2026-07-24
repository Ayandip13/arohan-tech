"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, AlertCircle, Send, Sparkles } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", message: "", service: "Digital Marketing & Performance Ads" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    setTimeout(() => {
      setStatus("success");
      setFormData({ firstName: "", lastName: "", email: "", message: "", service: "Digital Marketing & Performance Ads" });
    }, 1500);
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-card rounded-3xl z-20 text-center animate-in fade-in zoom-in duration-500 border-2 border-rose-500/30">
        <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-500 mb-6">
          <CheckCircle className="w-8 h-8" />
        </div>
        <h3 className="text-3xl font-black font-heading mb-2">Inquiry Received! 🚀</h3>
        <p className="text-muted-foreground mb-8 text-base">Thank you for reaching out! One of our senior growth strategists will be in touch within 12 hours.</p>
        <Button onClick={() => setStatus("idle")} variant="gradient" className="rounded-full">Send Another Message</Button>
      </div>
    );
  }

  return (
    <>
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-500 mb-2">
        <Sparkles className="w-4 h-4" />
        <span>Direct Agency Connect</span>
      </div>
      <h3 className="text-3xl font-black font-heading mb-6 text-foreground">Start Your Growth Project</h3>
      
      {status === "error" && (
        <div className="mb-6 p-4 rounded-2xl bg-destructive/10 border border-destructive/20 flex items-center gap-3 text-destructive text-sm font-semibold">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <p>Please fill out all required fields.</p>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label className="text-xs font-extrabold uppercase tracking-wider text-foreground">First Name *</label>
            <input
              type="text"
              required
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              className="w-full h-12 px-4 rounded-2xl bg-background border-2 border-border/80 focus:border-rose-500 focus:outline-none transition-colors text-sm font-medium"
              placeholder="Alex"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-extrabold uppercase tracking-wider text-foreground">Last Name</label>
            <input
              type="text"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              className="w-full h-12 px-4 rounded-2xl bg-background border-2 border-border/80 focus:border-rose-500 focus:outline-none transition-colors text-sm font-medium"
              placeholder="Mercer"
            />
          </div>
        </div>
        
        <div className="space-y-1.5">
          <label className="text-xs font-extrabold uppercase tracking-wider text-foreground">Work Email *</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full h-12 px-4 rounded-2xl bg-background border-2 border-border/80 focus:border-rose-500 focus:outline-none transition-colors text-sm font-medium"
            placeholder="alex@brand.com"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-extrabold uppercase tracking-wider text-foreground">Primary Goal / Service</label>
          <select
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full h-12 px-4 rounded-2xl bg-background border-2 border-border/80 focus:border-rose-500 focus:outline-none transition-colors text-sm font-medium"
          >
            <option>Digital Marketing & Performance Ads</option>
            <option>Brand Strategy & Design System</option>
            <option>Full-Stack Web Development</option>
            <option>SEO & Social Media Marketing</option>
            <option>Mobile App Development</option>
          </select>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-extrabold uppercase tracking-wider text-foreground">Project Details *</label>
          <textarea
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full min-h-[120px] p-4 rounded-2xl bg-background border-2 border-border/80 focus:border-rose-500 focus:outline-none transition-colors text-sm font-medium resize-none"
            placeholder="Tell us about your brand goals, target timeline, or project scope..."
          />
        </div>

        <Button type="submit" disabled={status === "loading"} variant="gradient" size="lg" className="w-full rounded-2xl font-bold">
          {status === "loading" ? (
            <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <span className="flex items-center gap-2">
              <span>Submit Inquiry</span>
              <Send className="w-4 h-4" />
            </span>
          )}
        </Button>
      </form>
    </>
  );
}
