import { Navbar } from "@/components/layouts/navbar";
import { Footer } from "@/components/layouts/footer";
import { PageHero } from "@/components/sections/page-hero";
import { FadeIn } from "@/components/animations/fade-in";
import { TeamPreview } from "@/components/sections/team-preview";
import { FinalCTA } from "@/components/sections/final-cta";
import { Metadata } from "next";
import { Mail, Globe, Share2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Team & Leadership | Arohan Creative Marketing Agency",
  description: "Meet the creative directors, growth strategists, and web developers driving Arohan.",
};

const leadership = [
  {
    name: "Alex Mercer",
    role: "Founder & Growth Architect",
    bio: "Pioneered viral performance marketing strategies for 100+ global consumer brands.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    badge: "Growth Lead",
  },
  {
    name: "Sophia Lin",
    role: "Design Alchemist & VP Creative",
    bio: "Award-winning motion and UI/UX designer crafting immersive brand experiences.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    badge: "Creative Lead",
  },
  {
    name: "Dr. Elena Rostova",
    role: "VP of Digital Strategy & Tech",
    bio: "Growth architect leading performance marketing technology and web infrastructure.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    badge: "Strategy Lead",
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <PageHero 
          title="Meet the Minds Behind the Magic"
          description="We are a collective of rebellious creatives, growth marketers, and web developers obsessed with results."
          badge="Leadership & Team"
          breadcrumbs={[{ label: "Team", href: "/team" }]}
        />

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {leadership.map((person, idx) => (
                <FadeIn key={idx} delay={idx * 0.1}>
                  <div className="group rounded-3xl overflow-hidden bg-card border-2 border-border/80 hover:border-rose-500/50 shadow-lg transition-all duration-300">
                    <div className="relative aspect-[4/5] w-full overflow-hidden">
                      <img 
                        src={person.image} 
                        alt={person.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter grayscale group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90" />
                      
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-rose-500 text-white shadow-md">
                          {person.badge}
                        </span>
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-xl font-heading font-black mb-1">{person.name}</h3>
                        <p className="text-amber-400 font-bold text-xs mb-2">{person.role}</p>
                        <p className="text-slate-300 text-xs font-normal leading-relaxed mb-4">
                          {person.bio}
                        </p>
                        
                        <div className="flex gap-2 pt-3 border-t border-white/20">
                          <a href="#" className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-rose-500 transition-colors" aria-label="Share">
                            <Share2 className="w-3.5 h-3.5" />
                          </a>
                          <a href="#" className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-rose-500 transition-colors" aria-label="Website">
                            <Globe className="w-3.5 h-3.5" />
                          </a>
                          <a href="#" className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-rose-500 transition-colors" aria-label="Contact Email">
                            <Mail className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <TeamPreview />
        <FinalCTA />
      </main>
      
      <Footer />
    </div>
  );
}
