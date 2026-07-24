import { Navbar } from "@/components/layouts/navbar";
import { Footer } from "@/components/layouts/footer";
import { PageHero } from "@/components/sections/page-hero";
import { FadeIn } from "@/components/animations/fade-in";
import { FinalCTA } from "@/components/sections/final-cta";
import { ServicesPreview } from "@/components/sections/services-preview";
import { Metadata } from "next";
import { ArrowUpRight, Code, Megaphone, Smartphone, PenTool, BarChart, Server, Workflow, Share2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services & Capabilities | Arohan Creative Marketing Agency",
  description: "Explore our high-converting digital marketing, brand design, performance advertising, and full-stack web development.",
};

const allServices = [
  { icon: <Megaphone className="w-6 h-6" />, title: "Digital Marketing & PPC", desc: "Omnichannel Meta & Google ad campaigns engineered for instant revenue lift.", tag: "+350% Avg ROI", color: "from-rose-500 to-amber-500" },
  { icon: <PenTool className="w-6 h-6" />, title: "Brand Identity & Design", desc: "Iconic visual design systems, logos, and UI/UX that captivate audiences.", tag: "Award Winning", color: "from-amber-400 to-rose-500" },
  { icon: <Code className="w-6 h-6" />, title: "Full-Stack Web Development", desc: "Scalable Next.js web applications, mobile apps, and custom APIs.", tag: "High Scale", color: "from-purple-600 to-rose-500" },
  { icon: <Share2 className="w-6 h-6" />, title: "Social Media & Content", desc: "Viral social campaigns, video content creation, and influencer strategy.", tag: "Viral Reach", color: "from-emerald-400 to-sky-500" },
  { icon: <BarChart className="w-6 h-6" />, title: "SEO & Organic Growth", desc: "Programmatic SEO and high-ranking content that builds organic authority.", tag: "Organic Growth", color: "from-rose-500 to-amber-500" },
  { icon: <Smartphone className="w-6 h-6" />, title: "Mobile App Development", desc: "Native iOS & Android apps crafted with smooth 60fps micro-animations.", tag: "iOS & Android", color: "from-amber-400 to-rose-500" },
  { icon: <Server className="w-6 h-6" />, title: "Enterprise Web Systems", desc: "Bespoke internal tools, CRM integrations, and cloud infrastructure.", tag: "99.99% Uptime", color: "from-purple-600 to-rose-500" },
  { icon: <Workflow className="w-6 h-6" />, title: "Conversion Rate Optimization", desc: "A/B funnel testing, heatmap auditing, and UX friction removal.", tag: "+40% Conversion", color: "from-emerald-400 to-sky-500" },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <PageHero 
          title="Digital Capabilities & Growth Solutions"
          description="We fuse high-converting marketing strategies, brand design, and modern web development into one seamless growth engine."
          badge="Our Capabilities"
          breadcrumbs={[{ label: "Services", href: "/services" }]}
        />

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {allServices.map((service, idx) => (
                <FadeIn key={idx} delay={idx * 0.05}>
                  <div className="group h-full rounded-3xl bg-card border-2 border-border/80 hover:border-rose-500/50 p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${service.color} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                          {service.icon}
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-rose-500/10 text-rose-500">
                          {service.tag}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-heading font-black mb-2 text-foreground group-hover:text-rose-500 transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-xs md:text-sm font-normal leading-relaxed mb-6">
                        {service.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-border/60">
                      <Link href="/contact" className="inline-flex items-center gap-1.5 text-xs font-extrabold text-foreground group-hover:text-rose-500 transition-colors">
                        <span>Get Started</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
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
