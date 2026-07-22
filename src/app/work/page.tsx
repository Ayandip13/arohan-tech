import { Navbar } from "@/components/layouts/navbar";
import { Footer } from "@/components/layouts/footer";
import { PageHero } from "@/components/sections/page-hero";
import { FadeIn } from "@/components/animations/fade-in";
import { FinalCTA } from "@/components/sections/final-cta";
import { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Calendar, Tag, Trophy, Flame } from "lucide-react";

export const metadata: Metadata = {
  title: "Featured Case Studies & Work | Arohan Tech Solution",
  description: "Explore our portfolio of high-converting digital marketing campaigns, brand identity designs, and scalable software platforms.",
};

const projects = [
  {
    title: "Vogue E-Commerce & Campaign Rebrand",
    category: "Brand & Digital Marketing",
    industry: "Retail & D2C",
    tech: "Shopify Plus, Meta & TikTok Ads",
    metric: "+420% Sales Lift",
    timeline: "3 Months",
    desc: "Redesigned storefront UI/UX and launched high-converting social ad campaigns yielding a 4.2x ROAS.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Aura FinTech Ecosystem",
    category: "Software Engineering",
    industry: "FinTech",
    tech: "Next.js, Node.js, Postgres",
    metric: "$12M Capital Raised",
    timeline: "6 Months",
    desc: "Complete architectural overhaul of legacy financial platform, boosting security and user conversion.",
    image: "https://images.unsplash.com/photo-1616077168079-7e09a6a2609a?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Nexus Cloud AI Engine",
    category: "AI & Cloud Architecture",
    industry: "Enterprise",
    tech: "Python LLMs, AWS, React",
    metric: "2.4M Daily API Hits",
    timeline: "8 Months",
    desc: "Built custom AI workflow automation for enterprise cloud operations, cutting manual task hours by 70%.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "MediCare Mobile App",
    category: "Mobile App & UI/UX",
    industry: "Healthcare",
    tech: "React Native, Node.js",
    metric: "1.2M Downloads",
    timeline: "5 Months",
    desc: "HIPAA-compliant patient portal and telemedicine mobile application with 4.9 App Store rating.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "EcoLogistics Fleet Dashboard",
    category: "Custom Software",
    industry: "Logistics",
    tech: "React, Python, Mapbox",
    metric: "-25% Fuel Cost",
    timeline: "4 Months",
    desc: "Real-time AI fleet route optimization system for sustainable delivery vehicles.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8ed7c80a30?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Horizon Brand Identity & Launch",
    category: "Brand Strategy & Design",
    industry: "Real Estate",
    tech: "Figma, Motion Graphics",
    metric: "100% Sold Out",
    timeline: "2 Months",
    desc: "Visual identity design, 3D architectural renders, and launch campaign for luxury residential project.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000&auto=format&fit=crop",
  }
];

export default function WorkPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <PageHero 
          title="Featured Growth Case Studies"
          description="Explore how our creative marketing strategies, brand design, and custom software delivered massive ROI for ambitious brands."
          badge="Our Portfolio"
          breadcrumbs={[{ label: "Work", href: "/work" }]}
        />

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
              {projects.map((project, idx) => (
                <FadeIn key={idx} delay={0.1}>
                  <div className="group rounded-3xl p-6 bg-card border-2 border-border/80 hover:border-rose-500/50 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between h-full">
                    <div>
                      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl mb-6 bg-muted">
                        <Image 
                          src={project.image} 
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4 z-10">
                          <span className="px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-rose-500 text-white shadow-lg">
                            {project.metric}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-rose-500 mb-3">
                        <span className="flex items-center gap-1"><Tag className="w-3.5 h-3.5" /> {project.category}</span>
                        <span>•</span>
                        <span className="text-muted-foreground font-semibold">{project.industry}</span>
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-heading font-black text-foreground mb-3 group-hover:text-rose-500 transition-colors leading-tight">
                        {project.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-base leading-relaxed font-normal mb-6">
                        {project.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-border/60 flex items-center justify-between font-bold text-sm text-foreground group-hover:text-rose-500 transition-colors">
                      <span className="text-xs text-muted-foreground font-mono">Tech: {project.tech}</span>
                      <div className="w-9 h-9 rounded-full bg-rose-500/10 text-rose-500 flex items-center justify-center group-hover:bg-rose-500 group-hover:text-white transition-all">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
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
