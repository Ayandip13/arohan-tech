"use client";

import { useState } from "react";
import { FadeIn } from "@/components/animations/fade-in";
import { Button } from "@/components/ui/button";
import { Briefcase, MapPin, Clock } from "lucide-react";
import { ApplicationModal } from "@/components/forms/application-modal";

const jobs = [
  { 
    title: "Growth Marketing & Ad Lead", 
    department: "Growth", 
    location: "Remote (Global)", 
    type: "Full-time", 
    tagBg: "bg-rose-500 text-white",
    description: "Scale high-converting paid ad campaigns across Meta, Google, and TikTok for high-growth DTC & B2B brands."
  },
  { 
    title: "Senior UI/UX & Motion Designer", 
    department: "Design", 
    location: "New York / Hybrid", 
    type: "Full-time", 
    tagBg: "bg-amber-400 text-slate-950",
    description: "Craft breathtaking interfaces, fluid micro-animations, and dynamic brand identity design systems."
  },
  { 
    title: "Senior Full-Stack Next.js Developer", 
    department: "Engineering", 
    location: "London / Hybrid", 
    type: "Full-time", 
    tagBg: "bg-purple-600 text-white",
    description: "Architect lightning-fast scalable web platforms and cloud-native backends using modern Next.js and React."
  },
  { 
    title: "Social Media & Performance Campaign Lead", 
    department: "Strategy", 
    location: "Remote (US)", 
    type: "Full-time", 
    tagBg: "bg-emerald-500 text-slate-950",
    description: "Drive viral storytelling, audience expansion, and omnichannel content strategies across global brand accounts."
  },
];

export function JobOpenings() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleApplyClick = (title: string) => {
    setSelectedRole(title);
    setIsModalOpen(true);
  };

  return (
    <section className="py-20 bg-background relative z-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-black mb-3 text-foreground">
            Open Opportunities
          </h2>
          <p className="text-muted-foreground text-base">
            Don't see an exact match? Pick the closest role or pitch us your dream position.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-5">
          {jobs.map((job, idx) => (
            <FadeIn key={idx} delay={idx * 0.08}>
              <div className="rounded-3xl p-6 md:p-8 bg-card border-2 border-border/80 hover:border-rose-500/50 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 group">
                <div className="space-y-2.5 flex-1">
                  <div className="flex items-center gap-2.5">
                    <span className={`px-3 py-1 text-[10px] font-black uppercase tracking-wider rounded-full shadow-sm ${job.tagBg}`}>
                      {job.department}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-black font-heading text-foreground group-hover:text-rose-500 transition-colors">
                    {job.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground line-clamp-2 leading-relaxed font-normal">
                    {job.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-bold text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-rose-500" /> 
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-amber-500" /> 
                      {job.type}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-purple-500" /> 
                      Competitive Equity + Perks
                    </span>
                  </div>
                </div>

                <div className="md:text-right flex-shrink-0">
                  <Button
                    onClick={() => handleApplyClick(job.title)}
                    variant="gradient"
                    size="lg"
                    className="rounded-full px-7 py-6 w-full md:w-auto font-extrabold text-sm shadow-lg shadow-rose-500/20 hover:scale-105 transition-transform"
                  >
                    Apply Now 🚀
                  </Button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Interactive Application Modal */}
      <ApplicationModal
        isOpen={isModalOpen}
        jobRole={selectedRole}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
