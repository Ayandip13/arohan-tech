import { Navbar } from "@/components/layouts/navbar";
import { Footer } from "@/components/layouts/footer";
import { PageHero } from "@/components/sections/page-hero";
import { FadeIn } from "@/components/animations/fade-in";
import { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Calendar, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Work | Arohan Tech Solution",
  description: "Explore our premium portfolio of software engineering, cloud architecture, and marketing campaigns.",
};

const projects = [
  {
    title: "Aura Fintech Ecosystem",
    category: "Software Development",
    industry: "Finance",
    tech: "Next.js, Node.js, Postgres",
    timeline: "6 Months",
    desc: "A complete overhaul of a legacy financial platform, resulting in a 40% increase in user retention.",
    image: "https://images.unsplash.com/photo-1616077168079-7e09a6a2609a?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Nexus Cloud Platform",
    category: "Cloud Migration",
    industry: "Enterprise",
    tech: "Python, AWS, React",
    timeline: "8 Months",
    desc: "Migrated a sprawling monolithic architecture to a highly scalable, microservices-based AWS environment.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Vogue E-Commerce Redesign",
    category: "Digital Marketing & Web",
    industry: "Retail",
    tech: "Shopify Plus, Meta Ads",
    timeline: "3 Months",
    desc: "Designed a premium storefront and launched a targeted ad campaign that yielded a 300% ROAS.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "MediCare Dashboard",
    category: "Enterprise Software",
    industry: "Healthcare",
    tech: "React, AWS, Docker",
    timeline: "5 Months",
    desc: "Built a HIPAA-compliant data visualization dashboard for regional hospital administrators.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "EcoLogistics App",
    category: "Mobile App",
    industry: "Logistics",
    tech: "React Native, Firebase",
    timeline: "4 Months",
    desc: "Cross-platform fleet tracking application for sustainable delivery vehicles.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8ed7c80a30?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Horizon Brand Identity",
    category: "Branding",
    industry: "Corporate",
    tech: "Figma, Adobe CC",
    timeline: "2 Months",
    desc: "End-to-end brand strategy and visual identity design for a disruptive real-estate tech startup.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000&auto=format&fit=crop",
  }
];

export default function WorkPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <PageHero 
          title="Featured Case Studies"
          description="A curated selection of our finest work across software engineering, cloud architectures, and digital marketing."
          badge="Our Portfolio"
          breadcrumbs={[{ label: "Work", href: "/work" }]}
        />

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
              {projects.map((project, idx) => (
                <FadeIn key={idx} delay={0.1} direction="up" distance={40}>
                  <div className="group block cursor-pointer">
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl mb-8 bg-muted">
                      <Image 
                        src={project.image} 
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
                    </div>
                    
                    <div className="flex flex-col gap-4 px-2">
                      <div className="flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        <span className="text-primary flex items-center gap-1"><Tag className="w-3 h-3" /> {project.category}</span>
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {project.timeline}</span>
                        <span className="px-2 py-1 bg-muted rounded-full border border-border">{project.industry}</span>
                      </div>
                      
                      <div className="flex justify-between items-start">
                        <h3 className="text-3xl font-heading font-bold text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all flex-shrink-0">
                          <ArrowUpRight className="w-5 h-5" />
                        </div>
                      </div>
                      
                      <p className="text-lg text-muted-foreground">
                        {project.desc}
                      </p>
                      <p className="text-sm font-mono text-muted-foreground/70">
                        Tech: {project.tech}
                      </p>
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
