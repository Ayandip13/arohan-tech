import { Navbar } from "@/components/layouts/navbar";
import { Footer } from "@/components/layouts/footer";
import { PageHero } from "@/components/sections/page-hero";
import { FadeIn } from "@/components/animations/fade-in";
import { FinalCTA } from "@/components/sections/final-cta";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Briefcase, MapPin, Clock, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers & Open Roles | Arohan Tech Solution",
  description: "Join our team of creative strategists, brand designers, and software engineers at Arohan Tech Solution.",
};

const jobs = [
  { title: "Growth Marketing & Ad Lead", department: "Growth", location: "Remote (Global)", type: "Full-time", tagBg: "bg-rose-500 text-white" },
  { title: "Senior UI/UX & Motion Designer", department: "Design", location: "New York / Hybrid", type: "Full-time", tagBg: "bg-amber-400 text-slate-950" },
  { title: "Senior Full-Stack Next.js Architect", department: "Engineering", location: "London / Hybrid", type: "Full-time", tagBg: "bg-purple-600 text-white" },
  { title: "AI Systems & LLM Automation Dev", department: "AI Lab", location: "Remote (US)", type: "Contract", tagBg: "bg-emerald-500 text-slate-950" },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <PageHero 
          title="Build Bold Brands With Us"
          description="We are constantly searching for exceptional growth marketers, designers, and software engineers who hate boring work."
          badge="Join Our Squad"
          breadcrumbs={[{ label: "Careers", href: "/careers" }]}
        />

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <h2 className="text-4xl font-heading font-black mb-4">Open Opportunities</h2>
              <p className="text-muted-foreground text-lg">Don't see an exact match? Pitch us your dream role.</p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {jobs.map((job, idx) => (
                <FadeIn key={idx} delay={idx * 0.1}>
                  <div className="rounded-3xl p-8 bg-card border-2 border-border/80 hover:border-rose-500/50 shadow-xl transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 group">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`px-3.5 py-1 text-xs font-black uppercase tracking-wider rounded-full ${job.tagBg}`}>
                          {job.department}
                        </span>
                      </div>
                      <h3 className="text-2xl font-black font-heading mb-3 text-foreground group-hover:text-rose-500 transition-colors">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-6 text-xs font-bold text-muted-foreground">
                        <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-rose-500" /> {job.location}</span>
                        <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-amber-500" /> {job.type}</span>
                        <span className="flex items-center gap-1.5"><Briefcase className="w-4 h-4 text-purple-500" /> Competitive Equity + Perks</span>
                      </div>
                    </div>
                    <div className="md:text-right flex-shrink-0">
                      <Button variant="gradient" size="lg" className="rounded-full px-8 w-full md:w-auto font-bold">Apply Now 🚀</Button>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      
      <Footer />
    </div>
  );
}
