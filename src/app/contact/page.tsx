import { Navbar } from "@/components/layouts/navbar";
import { Footer } from "@/components/layouts/footer";
import { PageHero } from "@/components/sections/page-hero";
import { FadeIn } from "@/components/animations/fade-in";
import { Reveal } from "@/components/animations/reveal";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Arohan Tech Solution",
  description: "Get in touch with Arohan Tech Solution to discuss your next digital project.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <PageHero 
          title="Let's Start a Conversation"
          description="Whether you need a complete digital transformation, a scalable cloud architecture, or a targeted marketing campaign, our experts are ready."
          badge="Contact"
          breadcrumbs={[{ label: "Contact", href: "/contact" }]}
        />

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
              
              {/* Contact Information */}
              <div>
                <Reveal>
                  <h2 className="text-3xl font-heading font-bold mb-8">Get in Touch</h2>
                </Reveal>
                
                <div className="space-y-8 mb-12">
                  <FadeIn delay={0.1}>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1 text-lg">Global Headquarters</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          100 Innovation Drive<br />
                          Suite 400<br />
                          Tech District, NY 10001
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                  
                  <FadeIn delay={0.2}>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1 text-lg">Email Us</h3>
                        <p className="text-muted-foreground mb-1">hello@arohantech.com</p>
                        <p className="text-muted-foreground">careers@arohantech.com</p>
                      </div>
                    </div>
                  </FadeIn>
                  
                  <FadeIn delay={0.3}>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1 text-lg">Call Us</h3>
                        <p className="text-muted-foreground">+1 (555) 123-4567</p>
                        <p className="text-sm text-muted-foreground/70 mt-1">Mon-Fri, 9am - 6pm EST</p>
                      </div>
                    </div>
                  </FadeIn>
                </div>
              </div>

              {/* Contact Form Placeholder */}
              <FadeIn delay={0.4}>
                <div className="glass p-8 md:p-10 rounded-3xl border border-border/50 shadow-xl">
                  <h3 className="text-2xl font-bold font-heading mb-6">Send a Message</h3>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">First Name</label>
                        <input type="text" className="w-full h-12 px-4 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition-colors" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Last Name</label>
                        <input type="text" className="w-full h-12 px-4 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition-colors" placeholder="Doe" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Corporate Email</label>
                      <input type="email" className="w-full h-12 px-4 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition-colors" placeholder="john@company.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">How can we help?</label>
                      <textarea className="w-full min-h-[120px] p-4 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition-colors resize-none" placeholder="Tell us about your project goals..." />
                    </div>
                    <Button className="w-full h-12 rounded-xl text-base font-medium">Submit Inquiry</Button>
                  </form>
                </div>
              </FadeIn>

            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
