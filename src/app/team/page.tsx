import { Navbar } from "@/components/layouts/navbar";
import { Footer } from "@/components/layouts/footer";
import { PageHero } from "@/components/sections/page-hero";
import { FadeIn } from "@/components/animations/fade-in";
import { Metadata } from "next";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Team | Arohan Tech Solution",
  description: "Meet the elite engineers, designers, and marketers behind Arohan Tech Solution.",
};

const leadership = [
  {
    name: "Alex Mercer",
    role: "Chief Executive Officer",
    bio: "Former enterprise architect with 15+ years experience leading global tech initiatives.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Sophia Lin",
    role: "Chief Design Officer",
    bio: "Award-winning creative director specializing in human-computer interaction and brand systems.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Dr. Elena Rostova",
    role: "Chief Technology Officer",
    bio: "Ph.D in Distributed Systems. Leads our cloud architecture and complex software engineering teams.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop"
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <PageHero 
          title="Meet the Innovators"
          description="Our greatest asset is our talent. We are a tightly-knit team of industry veterans dedicated to pushing the boundaries of digital excellence."
          badge="Leadership & Team"
          breadcrumbs={[{ label: "Team", href: "/team" }]}
        />

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-8">
            
            <div className="mb-16">
              <h2 className="text-3xl font-heading font-bold mb-4 text-center">Executive Leadership</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {leadership.map((person, idx) => (
                <FadeIn key={idx} delay={idx * 0.1}>
                  <div className="group glass rounded-3xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300">
                    <div className="relative aspect-[4/5] w-full overflow-hidden bg-muted">
                      {/* Using subtle grayscale filter on images that reveals on hover */}
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                        style={{ backgroundImage: `url(${person.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80" />
                      
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <h3 className="text-2xl font-heading font-bold text-foreground mb-1">{person.name}</h3>
                        <p className="text-primary font-medium mb-4">{person.role}</p>
                        
                        <div className="h-0 overflow-hidden opacity-0 group-hover:h-auto group-hover:opacity-100 group-hover:mt-4 transition-all duration-300">
                          <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                            {person.bio}
                          </p>
                          <div className="flex gap-4 pt-4 border-t border-border/50">
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Mail className="w-5 h-5" /></a>
                          </div>
                        </div>
                      </div>
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
