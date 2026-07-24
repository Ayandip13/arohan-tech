"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { Reveal } from "@/components/animations/reveal";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, MessageSquare, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "Do you focus primarily on Digital Marketing or Software Engineering?",
    answer: "We offer both seamlessly! Our heritage is high-impact digital marketing, brand identity, and growth campaigns. As clients required scalable tech, we built an elite software team to craft Next.js web apps and mobile apps."
  },
  {
    question: "What is your typical project timeline & onboarding?",
    answer: "Growth marketing & ad campaign strategies launch within 7–14 days. Custom web development projects typically take 4–8 weeks depending on scope, run in agile 2-week sprints with full Slack visibility."
  },
  {
    question: "How do you structure pricing & retainers?",
    answer: "We offer performance retainers for digital marketing & SEO, project-based contracts for branding & web builds, and dedicated squad retainers for ongoing software engineering."
  },
  {
    question: "How do we track campaign ROI and development progress?",
    answer: "You receive a custom real-time client dashboard displaying live Google/Meta ad metrics, conversion funnels, sprint roadmaps, and direct access to your dedicated strategist."
  },
  {
    question: "Can you help optimize our marketing funnels & conversion rate?",
    answer: "Yes! We audit existing traffic funnels, build high-converting landing page variants, run A/B copy tests, and fine-tune ad attribution to maximize overall campaign conversion rate."
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
                Everything you need to know about partnering with Arohan to scale your business.
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
