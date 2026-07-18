import { Navbar } from "@/components/layouts/navbar";
import { Footer } from "@/components/layouts/footer";
import { PageHero } from "@/components/sections/page-hero";
import { FadeIn } from "@/components/animations/fade-in";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Briefcase, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers | Arohan Tech Solution",
  description: "Join our team of digital innovators. Explore open positions at Arohan Tech Solution.",
};

const jobs = [
  { title: "Senior Frontend Architect", department: "Engineering", location: "Remote (Global)", type: "Full-time" },
  { title: "Cloud Infrastructure Engineer", department: "DevOps", location: "New York / Hybrid", type: "Full-time" },
  { title: "Performance Marketing Lead", department: "Marketing", location: "London / Hybrid", type: "Full-time" },
  { title: "Product Designer (UI/UX)", department: "Design", location: "Remote (US)", type: "Contract" },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <PageHero 
          title="Build the Future With Us"
          description="We are always looking for exceptional talent who are passionate about technology, design, and creating measurable impact."
          badge="Careers"
          breadcrumbs={[{ label: "Careers", href: "/careers" }]}
        />

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-heading font-bold mb-4">Current Openings</h2>
              <p className="text-muted-foreground text-lg">Don't see a fit? Send us a speculative application.</p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {jobs.map((job, idx) => (
                <FadeIn key={idx} delay={idx * 0.1}>
                  <div className="glass p-8 rounded-2xl border border-border/50 hover:border-primary/40 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-6 group">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full">
                          {job.department}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold font-heading mb-3 group-hover:text-primary transition-colors">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                        <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {job.location}</span>
                        <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {job.type}</span>
                        <span className="flex items-center gap-2"><Briefcase className="w-4 h-4" /> Competitive Equity</span>
                      </div>
                    </div>
                    <div className="md:text-right flex-shrink-0">
                      <Button className="rounded-full px-8 w-full md:w-auto">Apply Now</Button>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
