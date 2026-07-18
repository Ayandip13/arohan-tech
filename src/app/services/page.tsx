import { Navbar } from "@/components/layouts/navbar";
import { Footer } from "@/components/layouts/footer";
import { PageHero } from "@/components/sections/page-hero";
import { FadeIn } from "@/components/animations/fade-in";
import { Reveal } from "@/components/animations/reveal";
import { Metadata } from "next";
import { ArrowUpRight, Code, Megaphone, Smartphone, Cloud, PenTool, BarChart, Server, Workflow } from "lucide-react";

export const metadata: Metadata = {
  title: "Services | Arohan Tech Solution",
  description: "Explore our premium digital marketing, software development, and cloud solutions.",
};

const allServices = [
  { icon: <Megaphone className="w-8 h-8" />, title: "Digital Marketing", desc: "Omnichannel campaigns that drive conversions and build brand equity." },
  { icon: <Code className="w-8 h-8" />, title: "Web Application Dev", desc: "Scalable, secure, and blazing-fast web apps using Next.js and React." },
  { icon: <Cloud className="w-8 h-8" />, title: "Cloud Solutions", desc: "AWS and Azure architectures tailored for high availability and low latency." },
  { icon: <Smartphone className="w-8 h-8" />, title: "Mobile App Dev", desc: "Native and cross-platform mobile experiences for iOS and Android." },
  { icon: <PenTool className="w-8 h-8" />, title: "UI/UX Design", desc: "Human-centric interfaces that maximize user engagement and retention." },
  { icon: <BarChart className="w-8 h-8" />, title: "Performance Marketing", desc: "Data-driven media buying and ROAS optimization strategies." },
  { icon: <Server className="w-8 h-8" />, title: "Custom Software", desc: "Bespoke enterprise software solving complex operational bottlenecks." },
  { icon: <Workflow className="w-8 h-8" />, title: "Business Automation", desc: "Streamlining workflows via API integrations and custom scripting." },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <PageHero 
          title="Capabilities & Expertise"
          description="We deliver end-to-end digital solutions, from initial brand strategy to complex cloud infrastructure and enterprise software engineering."
          badge="Our Services"
          breadcrumbs={[{ label: "Services", href: "/services" }]}
        />

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allServices.map((service, idx) => (
                <FadeIn key={idx} delay={idx * 0.05} direction="up" distance={40}>
                  <div className="group h-full glass border border-border/50 p-8 rounded-3xl hover:border-primary/50 hover:bg-muted/20 transition-all duration-300">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-heading font-bold mb-4">{service.title}</h3>
                    <p className="text-muted-foreground mb-8">{service.desc}</p>
                    <div className="mt-auto flex items-center text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      Explore Service <ArrowUpRight className="ml-1 w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
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
