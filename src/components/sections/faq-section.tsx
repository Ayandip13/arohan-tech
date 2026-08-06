"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { Reveal } from "@/components/animations/reveal";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, MessageSquare, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "Why should I choose Aarohan Tech Solutions?",
    answer: "At Aarohan Tech Solutions we believe in building partnerships not just delivering services. We combine creativity, strategy, technology and data to create solutions that drive real business growth. From the first idea to long term scaling, we work alongside you to help your brand stand out and succeed."
  },
  {
    question: "What services does Aarohan Tech Solutions offer?",
    answer: "We offer branding, website design and development, SEO, social media marketing, performance marketing, Google Ads, Meta Ads, content creation, UI and UX design, graphic design, video editing, analytics and complete digital marketing solutions tailored to your business goals."
  },
  {
    question: "What makes Aarohan Tech Solutions different?",
    answer: "We are not a typical marketing agency. We take the time to understand your business, your audience and your vision before creating a strategy. Our focus is on measurable growth, creative storytelling and building brands that leave a lasting impression."
  },
  {
    question: "Do you work only with startups?",
    answer: "No. We work with startups, small businesses, growing companies, and established brands across different industries. Whether you are launching your first product or expanding an existing business we create solutions that fit your stage of growth."
  },
  {
    question: "Do you offer customized marketing strategies?",
    answer: "Yes. Every business is unique so we never rely on generic marketing plans. We develop customized strategies based on your industry target audience, competitors and business objectives to help you achieve sustainable growth."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-card/50 relative overflow-hidden" id="faq">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-rose-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Left Column Callout */}
          <div className="lg:w-5/12 space-y-5">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 text-rose-500 font-extrabold text-xs uppercase tracking-widest">
                <HelpCircle className="w-4 h-4" />
                <span>Got Questions?</span>
              </div>
            </FadeIn>

            <Reveal>
              <h2 className="text-3xl md:text-5xl font-heading font-black tracking-tight leading-tight">
                Frequently Asked <span className="gradient-text-coral-amber">Questions.</span>
              </h2>
            </Reveal>

            <FadeIn delay={0.2}>
              <p className="text-base text-muted-foreground leading-relaxed">
                Everything you need to know about partnering with Aarohan to scale your business.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="p-6 rounded-3xl bg-background border-2 border-rose-500/30 shadow-lg space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-rose-500 to-amber-500 text-white flex items-center justify-center shadow-md">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-extrabold text-lg text-foreground">Have a unique question?</h4>
                <p className="text-muted-foreground text-xs font-normal">
                  Our growth strategists are ready to jump on a 15-min discovery call.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-1.5 font-bold text-xs text-rose-500 hover:text-amber-500 transition-colors">
                  <span>Chat With Our Team</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Right Accordion List - Compact padding */}
          <div className="lg:w-7/12 space-y-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <FadeIn key={idx} delay={0.05 * idx}>
                  <div className={`rounded-3xl border-2 transition-all duration-300 overflow-hidden ${isOpen ? 'bg-background border-rose-500 shadow-lg' : 'bg-background/70 border-border/80 hover:border-rose-500/40'}`}>
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      className="flex w-full items-center justify-between p-5 md:p-6 text-left focus:outline-none group"
                    >
                      <h3 className="text-base md:text-lg font-heading font-black text-foreground group-hover:text-rose-500 transition-colors pr-4">
                        {faq.question}
                      </h3>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ${isOpen ? 'bg-gradient-to-r from-rose-500 to-amber-500 text-white shadow-md' : 'bg-muted text-muted-foreground group-hover:bg-rose-500 group-hover:text-white'}`}>
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 md:px-6 pb-6 text-muted-foreground text-sm leading-relaxed font-normal border-t border-border/40 pt-3">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </FadeIn>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
