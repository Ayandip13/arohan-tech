import { Navbar } from "@/components/layouts/navbar";
import { Footer } from "@/components/layouts/footer";
import { Newsletter } from "@/components/sections/newsletter";
import { FadeIn } from "@/components/animations/fade-in";
import Image from "next/image";
import Link from "next/link";
import { ReadingProgress } from "@/components/ui/reading-progress";
import { ChevronLeft, Clock, Calendar, Link2, ChevronRight, ArrowRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Future of Cloud Computing | Arohan Tech Solution",
  description: "Exploring how distributed architectures are reshaping modern enterprises.",
};

export default function BlogDetailPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        {/* Article Hero */}
        <section className="pt-40 pb-12 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl relative z-10">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8">
              <ChevronLeft className="w-4 h-4" /> Back to Insights
            </Link>

            <FadeIn>
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full">Cloud</span>
                <span className="text-sm text-muted-foreground flex items-center gap-1"><Clock className="w-4 h-4" /> 5 min read</span>
                <span className="text-sm text-muted-foreground flex items-center gap-1"><Calendar className="w-4 h-4" /> Oct 24, 2025</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-8">
                The Future of Cloud Computing in Enterprise Software
              </h1>

              <div className="flex items-center gap-4 mb-12">
                <div className="w-12 h-12 rounded-full bg-muted overflow-hidden relative">
                  <Image src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop" fill alt="Dr. Elena Rostova" className="object-cover" />
                </div>
                <div>
                  <p className="font-bold">Dr. Elena Rostova</p>
                  <p className="text-sm text-muted-foreground">Chief Technology Officer</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Hero Image */}
        <FadeIn delay={0.2}>
          <div className="container mx-auto px-4 md:px-8 max-w-5xl mb-16">
            <div className="relative aspect-[21/9] w-full rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1600&auto=format&fit=crop"
                alt="Cloud Computing"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </FadeIn>

        {/* Reading Progress Bar */}
        <ReadingProgress />

        {/* Article Body */}
        <section className="pb-24">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl flex flex-col lg:flex-row gap-12">
            
            {/* Left Sidebar (Share & TOC) */}
            <div className="hidden lg:block w-64 shrink-0">
              <div className="sticky top-32 flex flex-col gap-10">
                
                {/* Table of Contents */}
                <div>
                  <h4 className="font-heading font-bold mb-4 text-foreground">Table of Contents</h4>
                  <nav className="flex flex-col gap-3 text-sm font-medium text-muted-foreground">
                    <a href="#serverless" className="hover:text-primary transition-colors">1. The Shift to Serverless</a>
                    <a href="#benefits" className="hover:text-primary transition-colors pl-4">Key Benefits</a>
                    <a href="#multi-cloud" className="hover:text-primary transition-colors">2. Multi-Cloud Architectures</a>
                    <a href="#conclusion" className="hover:text-primary transition-colors">3. Conclusion</a>
                  </nav>
                </div>

                {/* Share */}
                <div>
                  <h4 className="font-heading font-bold mb-4 text-foreground">Share Article</h4>
                  <div className="flex flex-wrap gap-3">
                    <button className="w-10 h-10 rounded-full glass border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
                    </button>
                    <button className="w-10 h-10 rounded-full glass border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                    </button>
                    <button className="w-10 h-10 rounded-full glass border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                    </button>
                    <button className="w-10 h-10 rounded-full glass border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"><Link2 className="w-4 h-4" /></button>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 prose prose-lg dark:prose-invert max-w-none">
              <p className="lead text-xl md:text-2xl text-muted-foreground mb-8">
                As enterprises globally seek greater agility and resilience, traditional monolithic infrastructures are giving way to advanced, highly distributed cloud models. Here's what engineering leaders need to know.
              </p>

              <h2 id="serverless">The Shift to Serverless Microservices</h2>
              <p>
                For years, companies built large, monolithic applications because they were simple to deploy. However, as scaling requirements grew, the limitations became apparent. Today, the migration towards serverless microservices allows organizations to scale individual functions independently without provisioning underlying servers.
              </p>

              <h3 id="benefits">Key Benefits of Serverless</h3>
              <ul>
                <li><strong>Auto-scaling:</strong> Services automatically scale from zero to thousands of concurrent requests.</li>
                <li><strong>Cost Efficiency:</strong> You only pay for the exact compute time used.</li>
                <li><strong>Developer Velocity:</strong> Engineers can focus purely on business logic rather than infrastructure maintenance.</li>
              </ul>

              <blockquote>
                "The organizations that win this decade will be those whose infrastructure scales frictionlessly alongside their user base."
              </blockquote>

              <h2 id="multi-cloud">Data Sovereignty and Multi-Cloud Architectures</h2>
              <p>
                Relying on a single cloud provider introduces vendor lock-in and potential points of failure. Modern architectures utilize multi-cloud strategies, balancing workloads across AWS, Azure, and GCP based on pricing, geographic latency, and regulatory compliance regarding data sovereignty.
              </p>

              <h2 id="conclusion">Conclusion</h2>
              <p>
                Transitioning to advanced cloud architectures requires significant upfront investment in DevOps and architectural redesign, but the long-term ROI in scalability, reduced downtime, and developer velocity is unparalleled.
              </p>

              <hr className="my-12 border-border" />

              {/* Previous / Next Navigation */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 not-prose">
                <Link href="/blog/optimizing-react-performance" className="w-full md:w-1/2 p-6 rounded-2xl border border-border/50 hover:border-primary/40 hover:bg-muted/10 transition-colors group flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground group-hover:text-primary transition-colors shrink-0">
                    <ChevronLeft className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Previous Article</p>
                    <p className="font-heading font-bold line-clamp-1 group-hover:text-primary transition-colors">Optimizing React Applications</p>
                  </div>
                </Link>
                
                <Link href="/blog/data-driven-marketing" className="w-full md:w-1/2 p-6 rounded-2xl border border-border/50 hover:border-primary/40 hover:bg-muted/10 transition-colors group flex items-center gap-4 text-right justify-end">
                  <div>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Next Article</p>
                    <p className="font-heading font-bold line-clamp-1 group-hover:text-primary transition-colors">Beyond the Click</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground group-hover:text-primary transition-colors shrink-0">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-24 bg-muted/30 border-t border-border/50">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl font-heading font-bold mb-12">Related Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
              
              <Link href="/blog/optimizing-react-performance" className="group flex flex-col glass rounded-3xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop" alt="React" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">Engineering</span>
                    <span className="text-xs text-muted-foreground">8 min read</span>
                  </div>
                  <h3 className="text-xl font-heading font-bold group-hover:text-primary transition-colors leading-tight">Optimizing React Applications for Peak Performance</h3>
                </div>
              </Link>

              <Link href="/blog/ui-ux-accessibility" className="group flex flex-col glass rounded-3xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1000&auto=format&fit=crop" alt="UX" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">Design</span>
                    <span className="text-xs text-muted-foreground">4 min read</span>
                  </div>
                  <h3 className="text-xl font-heading font-bold group-hover:text-primary transition-colors leading-tight">Designing for Accessibility: A Commercial Imperative</h3>
                </div>
              </Link>
              
            </div>
          </div>
        </section>

        <Newsletter />
      </main>

      <Footer />
    </div>
  );
}
