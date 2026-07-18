"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, AlertCircle } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
    }, 2000);
  };

  if (status === "success") {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-background z-20 text-center animate-in fade-in zoom-in duration-500">
        <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center text-success mb-6">
          <CheckCircle className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold font-heading mb-2">Message Sent!</h3>
        <p className="text-muted-foreground mb-8">Thank you for reaching out. One of our experts will get back to you within 24 hours.</p>
        <Button onClick={() => setStatus("idle")} variant="outline" className="rounded-full">Send Another Message</Button>
      </div>
    );
  }

  return (
    <>
      <h3 className="text-2xl font-bold font-heading mb-6">Send a Message</h3>
      {status === "error" && (
        <div className="mb-6 p-4 rounded-xl bg-destructive/10 border border-destructive/20 flex items-center gap-3 text-destructive text-sm">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <p>Please fill out all required fields correctly.</p>
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">First Name *</label>
            <input
              type="text"
              required
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              className="w-full h-12 px-4 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary focus:outline-none transition-colors"
              placeholder="John"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Last Name</label>
            <input
              type="text"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              className="w-full h-12 px-4 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary focus:outline-none transition-colors"
              placeholder="Doe"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Corporate Email *</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full h-12 px-4 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary focus:outline-none transition-colors"
            placeholder="john@company.com"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">How can we help? *</label>
          <textarea
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full min-h-[120px] p-4 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary focus:outline-none transition-colors resize-none"
            placeholder="Tell us about your project goals..."
          />
        </div>
        <Button type="submit" disabled={status === "loading"} className="w-full h-12 rounded-xl text-base font-medium flex items-center justify-center gap-2">
          {status === "loading" ? (
            <span className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
          ) : (
            "Submit Inquiry"
          )}
        </Button>
      </form>
    </>
  );
}
