import { Navbar } from "@/components/layouts/navbar";
import { Footer } from "@/components/layouts/footer";
import { PageHero } from "@/components/sections/page-hero";
import { FadeIn } from "@/components/animations/fade-in";
import { Reveal } from "@/components/animations/reveal";
import { FinalCTA } from "@/components/sections/final-cta";
import { ServicesPreview } from "@/components/sections/services-preview";
import { Metadata } from "next";
import { ArrowUpRight, Code, Megaphone, Smartphone, Cloud, PenTool, BarChart, Server, Workflow, Bot, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Services & Capabilities | Arohan Tech Solution",
  description: "Explore our high-converting digital marketing, brand design, full-stack software development, and AI solutions.",
};

const allServices = [
  { icon: <Megaphone className="w-7 h-7" />, title: "Digital Marketing & PPC", desc: "Omnichannel Meta & Google ad campaigns engineered for instant revenue lift.", tag: "+350% Avg ROI", color: "from-rose-500 to-amber-500" },
  { icon: <PenTool className="w-7 h-7" />, title: "Brand Identity & Design", desc: "Iconic visual design systems, logos, and UI/UX that captivate audiences.", tag: "Award Winning", color: "from-amber-400 to-rose-500" },
  { icon: <Code className="w-7 h-7" />, title: "Full-Stack Software Dev", desc: "Scalable Next.js web applications, mobile apps, and custom APIs.", tag: "High Scale", color: "from-purple-600 to-rose-500" },
  { icon: <Bot className="w-7 h-7" />, title: "AI & Automation Agents", desc: "Custom LLMs, automated lead flows, and intelligent operations systems.", tag: "Next-Gen AI", color: "from-emerald-400 to-sky-500" },
  { icon: <BarChart className="w-7 h-7" />, title: "SEO & Content Marketing", desc: "Programmatic SEO and high-ranking content that builds organic authority.", tag: "Organic Growth", color: "from-rose-500 to-amber-500" },
  { icon: <Smartphone className="w-7 h-7" />, title: "Mobile App Development", desc: "Native iOS & Android apps crafted with smooth 60fps micro-animations.", tag: "iOS & Android", color: "from-amber-400 to-rose-500" },
  { icon: <Server className="w-7 h-7" />, title: "Enterprise Systems", desc: "Bespoke internal tools, CRM/ERP integrations, and cloud migration.", tag: "99.99% Uptime", color: "from-purple-600 to-rose-500" },
  { icon: <Workflow className="w-7 h-7" />, title: "Conversion Rate Optimization", desc: "A/B funnel testing, heatmap auditing, and UX friction removal.", tag: "+40% Conversion", color: "from-emerald-400 to-sky-500" },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <PageHero 
          title="Digital Capabilities & Growth Solutions"
          description="We fuse high-converting marketing strategies, brand design, and modern software engineering into one seamless growth engine."
          badge="Our Capabilities"
          breadcrumbs={[{ label: "Services", href: "/services" }]}
        />

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {allServices.map((service, idx) => (
                <FadeIn key={idx} delay={idx * 0.05}>
                  <div className="group h-full rounded-3xl bg-card border-2 border-border/80 hover:border-rose-500/50 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${service.color} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                          {service.icon}
                        </div>
                        <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-rose-500/10 text-rose-500">
                          {service.tag}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-heading font-black mb-3 text-foreground group-hover:text-rose-500 transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm font-normal leading-relaxed mb-8">
                        {service.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-border/60">
                      <Link href="/contact" className="inline-flex items-center gap-1.5 text-xs font-extrabold text-foreground group-hover:text-rose-500 transition-colors">
                        <span>Get Started</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <ServicesPreview />
        <FinalCTA />
      </main>
      
      <Footer />
    </div>
  );
}
