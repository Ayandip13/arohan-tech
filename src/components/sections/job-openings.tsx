"use client";

import { useState } from "react";
import { FadeIn } from "@/components/animations/fade-in";
import { Button } from "@/components/ui/button";
import { Briefcase, MapPin, Clock } from "lucide-react";
import { ApplicationModal } from "@/components/forms/application-modal";

const jobs = [
  {
    title: "Social Media Manager",
    department: "Social Media",
    location: "Kolkata / On-site",
    type: "Full-time",
    tagBg: "bg-rose-500 text-white",
    description: "Own end-to-end content calendars, community engagement, and channel growth across Instagram, Facebook, LinkedIn, and YouTube."
  },
  {
    title: "Graphics Designer",
    department: "Design",
    location: "Kolkata / On-site",
    type: "Full-time",
    tagBg: "bg-amber-400 text-slate-950",
    description: "Design scroll-stopping social creatives, brand collateral, and campaign visuals using Photoshop, Illustrator, and Figma."
  },
  {
    title: "Telecalling Executive",
    department: "Sales",
    location: "Kolkata / On-site",
    type: "Full-time",
    tagBg: "bg-purple-600 text-white",
    description: "Connect with inbound and outbound leads, qualify prospects, and book discovery calls for our client servicing team."
  },
  {
    title: "Video Editor",
    department: "Production",
    location: "Kolkata / On-site",
    type: "Full-time",
    tagBg: "bg-emerald-500 text-slate-950",
    description: "Cut punchy reels, ad films, and long-form brand videos with sharp pacing, motion graphics, and sound design."
  },
  {
    title: "Social Media Marketing Executive",
    department: "Marketing",
    location: "Kolkata / Hybrid",
    type: "Full-time",
    tagBg: "bg-sky-500 text-slate-950",
    description: "Plan and run paid social campaigns, test creatives, and scale audience reach across Meta and LinkedIn ad platforms."
  },
  {
    title: "Digital Marketing Executive",
    department: "Marketing",
    location: "Kolkata / Hybrid",
    type: "Full-time",
    tagBg: "bg-indigo-500 text-white",
    description: "Drive SEO, Google Ads, email, and analytics-led performance marketing to grow qualified traffic and conversions."
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
