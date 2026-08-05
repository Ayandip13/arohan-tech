"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  CheckCircle, 
  AlertCircle, 
  Loader2, 
  Lock, 
  UploadCloud, 
  FileText, 
  Sparkles, 
  Briefcase 
} from "lucide-react";
import { Button } from "@/components/ui/button";

export interface JobApplicationPayload {
  fullName: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  currentCompany?: string;
  portfolio?: string;
  linkedin?: string;
  resumeFileName?: string;
  coverLetter: string;
}

/**
 * Future-ready backend submission abstraction.
 * Currently simulates network delay for UI confirmation.
 * Replace the setTimeout below with your real API endpoint in the future:
 * e.g., await fetch("/api/apply", { method: "POST", body: JSON.stringify(payload) })
 */
async function submitApplicationToBackend(payload: JobApplicationPayload): Promise<{ success: boolean; error?: string }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("[Application Submitted Payload]:", payload);
      resolve({ success: true });
    }, 1500);
  });
}

interface ApplicationModalProps {
  isOpen: boolean;
  jobRole: string | null;
  onClose: () => void;
}

export function ApplicationModal({ isOpen, jobRole, onClose }: ApplicationModalProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    currentCompany: "",
    portfolio: "",
    linkedin: "",
    coverLetter: "",
  });

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && status !== "loading") {
        handleClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, status]);

  // Prevent scrolling on background when modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleClose = () => {
    if (status === "loading") return;
    onClose();
    // Delay resetting form state slightly for animation smoothness
    setTimeout(() => {
      setStatus("idle");
      setErrorMessage("");
      setResumeFile(null);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        experience: "",
        currentCompany: "",
        portfolio: "",
        linkedin: "",
        coverLetter: "",
      });
    }, 200);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.phone || !formData.experience || !formData.coverLetter) {
      setStatus("error");
      setErrorMessage("Please complete all required fields (*).");
      return;
    }

    if (!jobRole) return;

    setStatus("loading");
    setErrorMessage("");

    const payload: JobApplicationPayload = {
      ...formData,
      position: jobRole,
      resumeFileName: resumeFile ? resumeFile.name : undefined,
    };

    try {
      const response = await submitApplicationToBackend(payload);
      if (response.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(response.error || "Failed to submit application. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("An unexpected network error occurred. Please try again.");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6 overflow-y-auto">
          {/* Background overlay with blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-slate-950/75 backdrop-blur-md"
          />

          {/* Modal Content Drawer / Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl bg-card border-2 border-border/80 rounded-3xl shadow-2xl relative z-10 overflow-hidden my-auto max-h-[85vh] flex flex-col shadow-rose-500/10"
          >
            {/* Modal Header */}
            <div className="px-6 py-5 border-b border-border/80 bg-muted/20 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-rose-500 to-amber-500 text-white flex items-center justify-center shadow-md shadow-rose-500/20">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-heading font-black text-base md:text-lg text-foreground leading-tight">
                    Apply for Position
                  </h3>
                  <p className="text-xs font-semibold text-muted-foreground truncate max-w-[240px] sm:max-w-sm">
                    {jobRole || "Selected Role"}
                  </p>
                </div>
              </div>
              <button
                onClick={handleClose}
                disabled={status === "loading"}
                className="w-9 h-9 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-rose-500 transition-colors shadow-sm disabled:opacity-50"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body - Scrollable */}
            <div className="overflow-y-auto p-6 md:p-8 flex-1 custom-scrollbar">
              {status === "success" ? (
                /* Frontend Success Confirmation UI */
                <div className="py-10 text-center flex flex-col items-center justify-center animate-in fade-in zoom-in duration-300">
                  <div className="w-16 h-16 bg-emerald-500/15 border-2 border-emerald-500/30 rounded-full flex items-center justify-center text-emerald-500 mb-5 shadow-lg shadow-emerald-500/10">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 font-bold text-xs mb-3">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Application Received</span>
                  </div>
                  <h4 className="text-2xl md:text-3xl font-heading font-black text-foreground mb-2">
                    You're On Our Radar! 🚀
                  </h4>
                  <p className="text-muted-foreground text-sm max-w-md mb-8 leading-relaxed">
                    Thank you for submitting your application for <strong className="text-foreground font-bold">{jobRole}</strong>. Our recruiting squad will review your background and reach out soon if there is a strong mutual fit.
                  </p>
                  <Button
                    onClick={handleClose}
                    variant="gradient"
                    size="lg"
                    className="rounded-full px-8 font-bold shadow-xl shadow-rose-500/20"
                  >
                    Done / Return to Careers
                  </Button>
                </div>
              ) : (
                /* Application Form */
                <form id="application-form" onSubmit={handleSubmit} className="space-y-5">
                  {status === "error" && (
                    <div className="p-4 rounded-2xl bg-destructive/10 border border-destructive/20 flex items-center gap-3 text-destructive text-sm font-semibold animate-in fade-in">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <p>{errorMessage}</p>
                    </div>
                  )}

                  {/* Auto-Filled Read-Only Role Field */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-extrabold uppercase tracking-wider text-foreground">
                        Position Applying For
                      </label>
                      <span className="text-[10px] font-bold text-rose-500 bg-rose-500/10 px-2 py-0.5 rounded-full uppercase tracking-wide">
                        Auto-Filled
                      </span>
                    </div>
                    <div className="w-full h-12 px-4 rounded-2xl bg-muted/50 border-2 border-dashed border-border/80 text-foreground font-bold text-sm flex items-center justify-between cursor-not-allowed select-none shadow-inner">
                      <span>{jobRole}</span>
                      <Lock className="w-4 h-4 text-muted-foreground opacity-60" />
                    </div>
                  </div>

                  {/* Name and Email Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-extrabold uppercase tracking-wider text-foreground">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        disabled={status === "loading"}
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g., Alex Mercer"
                        className="w-full h-12 px-4 rounded-2xl bg-background border-2 border-border/80 focus:border-rose-500 focus:outline-none transition-colors text-sm font-medium disabled:opacity-50"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-extrabold uppercase tracking-wider text-foreground">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        disabled={status === "loading"}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g., alex@example.com"
                        className="w-full h-12 px-4 rounded-2xl bg-background border-2 border-border/80 focus:border-rose-500 focus:outline-none transition-colors text-sm font-medium disabled:opacity-50"
                      />
                    </div>
                  </div>

                  {/* Phone and Experience Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-extrabold uppercase tracking-wider text-foreground">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        disabled={status === "loading"}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full h-12 px-4 rounded-2xl bg-background border-2 border-border/80 focus:border-rose-500 focus:outline-none transition-colors text-sm font-medium disabled:opacity-50"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-extrabold uppercase tracking-wider text-foreground">
                        Years of Experience *
                      </label>
                      <select
                        required
                        disabled={status === "loading"}
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                        className="w-full h-12 px-4 rounded-2xl bg-background border-2 border-border/80 focus:border-rose-500 focus:outline-none transition-colors text-sm font-medium disabled:opacity-50 text-foreground"
                      >
                        <option value="" disabled>Select experience level</option>
                        <option value="0-1 Years (Entry Level)">0 - 1 Years (Entry Level)</option>
                        <option value="1-3 Years (Junior)">1 - 3 Years (Junior)</option>
                        <option value="3-5 Years (Mid-Level)">3 - 5 Years (Mid-Level)</option>
                        <option value="5-8 Years (Senior)">5 - 8 Years (Senior)</option>
                        <option value="8+ Years (Lead / Principal)">8+ Years (Lead / Principal)</option>
                      </select>
                    </div>
                  </div>

                  {/* Optional Links Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-extrabold uppercase tracking-wider text-muted-foreground">
                        Current Company (Opt.)
                      </label>
                      <input
                        type="text"
                        disabled={status === "loading"}
                        value={formData.currentCompany}
                        onChange={(e) => setFormData({ ...formData, currentCompany: e.target.value })}
                        placeholder="e.g., Acme Tech"
                        className="w-full h-12 px-4 rounded-2xl bg-background border-2 border-border/80 focus:border-rose-500 focus:outline-none transition-colors text-sm font-medium disabled:opacity-50"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-extrabold uppercase tracking-wider text-muted-foreground">
                        Portfolio / Website (Opt.)
                      </label>
                      <input
                        type="url"
                        disabled={status === "loading"}
                        value={formData.portfolio}
                        onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                        placeholder="https://portfolio.me"
                        className="w-full h-12 px-4 rounded-2xl bg-background border-2 border-border/80 focus:border-rose-500 focus:outline-none transition-colors text-sm font-medium disabled:opacity-50"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-extrabold uppercase tracking-wider text-muted-foreground">
                        LinkedIn Profile (Opt.)
                      </label>
                      <input
                        type="url"
                        disabled={status === "loading"}
                        value={formData.linkedin}
                        onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                        placeholder="https://linkedin.com/in/..."
                        className="w-full h-12 px-4 rounded-2xl bg-background border-2 border-border/80 focus:border-rose-500 focus:outline-none transition-colors text-sm font-medium disabled:opacity-50"
                      />
                    </div>
                  </div>

                  {/* Resume Upload Placeholder */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold uppercase tracking-wider text-foreground">
                      Resume Upload (Optional Placeholder)
                    </label>
                    <label className="border-2 border-dashed border-border/80 hover:border-rose-500/50 rounded-2xl p-5 flex flex-col items-center justify-center gap-2 text-center bg-background/50 hover:bg-rose-500/5 transition-all cursor-pointer group">
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        disabled={status === "loading"}
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      {resumeFile ? (
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 font-bold text-xs shadow-sm">
                          <FileText className="w-4 h-4 shrink-0" />
                          <span className="truncate max-w-[240px]">{resumeFile.name}</span>
                          <span className="text-[10px] opacity-80">({(resumeFile.size / 1024 / 1024).toFixed(2)} MB)</span>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              setResumeFile(null);
                            }}
                            className="hover:text-destructive transition-colors ml-1"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ) : (
                        <>
                          <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                            <UploadCloud className="w-5 h-5 text-rose-500" />
                          </div>
                          <p className="text-xs font-bold text-foreground">
                            Click to browse or drag & drop resume file
                          </p>
                          <span className="text-[10px] font-semibold text-muted-foreground">
                            Supports PDF, DOC, or DOCX (Max 10MB)
                          </span>
                        </>
                      )}
                    </label>
                  </div>

                  {/* Cover Letter */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold uppercase tracking-wider text-foreground">
                      Cover Letter / Why Join Us? *
                    </label>
                    <textarea
                      required
                      rows={4}
                      disabled={status === "loading"}
                      value={formData.coverLetter}
                      onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                      placeholder="Tell us what drives you, projects you're proud of, and why Aarohan is your next big move..."
                      className="w-full p-4 rounded-2xl bg-background border-2 border-border/80 focus:border-rose-500 focus:outline-none transition-colors text-sm font-medium resize-none disabled:opacity-50"
                    />
                  </div>
                </form>
              )}
            </div>

            {/* Modal Footer */}
            {status !== "success" && (
              <div className="px-6 py-4 border-t border-border/80 bg-muted/20 flex flex-wrap-reverse items-center justify-end gap-3 shrink-0">
                <Button
                  type="button"
                  onClick={handleClose}
                  disabled={status === "loading"}
                  variant="outline"
                  className="rounded-full px-6 font-bold"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  form="application-form"
                  disabled={status === "loading"}
                  variant="gradient"
                  className="rounded-full px-7 font-bold shadow-lg shadow-rose-500/20 flex items-center gap-2"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Application 🚀</span>
                    </>
                  )}
                </Button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
