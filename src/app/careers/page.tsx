import { Navbar } from "@/components/layouts/navbar";
import { Footer } from "@/components/layouts/footer";
import { PageHero } from "@/components/sections/page-hero";
import { FadeIn } from "@/components/animations/fade-in";
import { FinalCTA } from "@/components/sections/final-cta";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Briefcase, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers & Open Roles | Arohan Creative Marketing Agency",
  description: "Join our team of creative strategists, brand designers, and web developers at Arohan.",
};

const jobs = [
  { title: "Growth Marketing & Ad Lead", department: "Growth", location: "Remote (Global)", type: "Full-time", tagBg: "bg-rose-500 text-white" },
  { title: "Senior UI/UX & Motion Designer", department: "Design", location: "New York / Hybrid", type: "Full-time", tagBg: "bg-amber-400 text-slate-950" },
  { title: "Senior Full-Stack Next.js Developer", department: "Engineering", location: "London / Hybrid", type: "Full-time", tagBg: "bg-purple-600 text-white" },
  { title: "Social Media & Performance Campaign Lead", department: "Strategy", location: "Remote (US)", type: "Full-time", tagBg: "bg-emerald-500 text-slate-950" },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <PageHero 
          title="Build Bold Brands With Us"
          description="We are constantly searching for exceptional growth marketers, designers, and web developers who hate boring work."
          badge="Join Our Squad"
          breadcrumbs={[{ label: "Careers", href: "/careers" }]}
        />

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-12 max-w-2xl mx-auto">
              <h2 className="text-3xl font-heading font-black mb-3">Open Opportunities</h2>
              <p className="text-muted-foreground text-base">Don't see an exact match? Pitch us your dream role.</p>
            </div>

            <div className="max-w-4xl mx-auto space-y-5">
              {jobs.map((job, idx) => (
                <FadeIn key={idx} delay={idx * 0.08}>
                  <div className="rounded-3xl p-6 bg-card border-2 border-border/80 hover:border-rose-500/50 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-5 group">
                    <div>
                      <div className="flex items-center gap-2.5 mb-2">
                        <span className={`px-3 py-0.5 text-[11px] font-black uppercase tracking-wider rounded-full ${job.tagBg}`}>
                          {job.department}
                        </span>
                      </div>
                      <h3 className="text-xl font-black font-heading mb-2 text-foreground group-hover:text-rose-500 transition-colors">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-5 text-xs font-bold text-muted-foreground">
                        <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-rose-500" /> {job.location}</span>
                        <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-amber-500" /> {job.type}</span>
                        <span className="flex items-center gap-1.5"><Briefcase className="w-3.5 h-3.5 text-purple-500" /> Competitive Equity + Perks</span>
                      </div>
                    </div>
                    <div className="md:text-right flex-shrink-0">
                      <Button variant="gradient" size="default" className="rounded-full px-6 w-full md:w-auto font-bold">Apply Now 🚀</Button>
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
