import { Navbar } from "@/components/layouts/navbar";
import { Footer } from "@/components/layouts/footer";
import { PageHero } from "@/components/sections/page-hero";
import { FadeIn } from "@/components/animations/fade-in";
import { FinalCTA } from "@/components/sections/final-cta";
import { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Featured Case Studies & Work | Arohan Creative Marketing Agency",
  description: "Explore our portfolio of high-converting digital marketing campaigns, brand identity designs, and scalable web platforms.",
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
    category: "Web Engineering & Design",
    industry: "FinTech",
    tech: "Next.js, Node.js, Postgres",
    metric: "$12M Capital Raised",
    timeline: "6 Months",
    desc: "Complete architectural overhaul of legacy financial platform, boosting security and user conversion.",
    image: "https://images.unsplash.com/photo-1616077168079-7e09a6a2609a?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Pulse Omnichannel Growth Launch",
    category: "Performance Marketing & Ads",
    industry: "Consumer Brand",
    tech: "Meta Ads, Google PPC, Content Strategy",
    metric: "2.4M Campaign Reach",
    timeline: "4 Months",
    desc: "Multichannel viral advertising campaign driving 2.4M target audience impressions and high conversion lift.",
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
    category: "Custom Web Application",
    industry: "Logistics",
    tech: "React, Python, Mapbox",
    metric: "-25% Fuel Cost",
    timeline: "4 Months",
    desc: "Real-time logistics platform and brand redesign for sustainable delivery vehicle fleet.",
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
          description="Explore how our creative marketing strategies, brand design, and custom web platforms delivered massive ROI for ambitious brands."
          badge="Our Portfolio"
          breadcrumbs={[{ label: "Work", href: "/work" }]}
        />

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {projects.map((project, idx) => (
                <FadeIn key={idx} delay={0.08 * idx}>
                  <div className="group rounded-3xl p-5 bg-card border-2 border-border/80 hover:border-rose-500/50 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between h-full">
                    <div>
                      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl mb-5 bg-muted">
                        <Image 
                          src={project.image} 
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-3.5 left-3.5 z-10">
                          <span className="px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-rose-500 text-white shadow-md">
                            {project.metric}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-wider text-rose-500 mb-2">
                        <span className="flex items-center gap-1"><Tag className="w-3 h-3" /> {project.category}</span>
                        <span>•</span>
                        <span className="text-muted-foreground font-semibold">{project.industry}</span>
                      </div>
                      
                      <h3 className="text-xl md:text-2xl font-heading font-black text-foreground mb-2 group-hover:text-rose-500 transition-colors leading-tight">
                        {project.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-xs md:text-sm leading-relaxed font-normal mb-5">
                        {project.desc}
                      </p>
                    </div>

                    <div className="pt-3.5 border-t border-border/60 flex items-center justify-between font-bold text-xs text-foreground group-hover:text-rose-500 transition-colors">
                      <span className="text-[11px] text-muted-foreground font-mono">Tools: {project.tech}</span>
                      <div className="w-8 h-8 rounded-full bg-rose-500/10 text-rose-500 flex items-center justify-center group-hover:bg-rose-500 group-hover:text-white transition-all">
                        <ArrowUpRight className="w-4 h-4" />
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
