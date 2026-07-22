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
    answer: "We offer both seamlessly! Our heritage is high-impact digital marketing, brand identity, and growth campaigns. As clients required scalable tech, we built an elite software team to craft Next.js web apps, mobile apps, and custom AI systems."
  },
  {
    question: "What is your typical project timeline & onboarding?",
    answer: "Growth marketing & ad campaign strategies launch within 7–14 days. Custom software development projects typically take 4–12 weeks depending on scope, run in agile 2-week sprints with full Slack visibility."
  },
  {
    question: "How do you structure pricing & retainers?",
    answer: "We offer performance retainers for digital marketing & SEO, project-based contracts for branding & web builds, and dedicated squad retainers for ongoing software engineering."
  },
  {
    question: "How do we track campaign ROI and product development progress?",
    answer: "You receive a custom real-time client dashboard displaying live Google/Meta ad metrics, conversion funnels, sprint roadmaps, and direct access to your dedicated strategist."
  },
  {
    question: "Can you help integrate AI automation into our existing workflow?",
    answer: "Yes! We build custom AI agents, automated marketing workflows, and LLM integrations that automate routine tasks and boost customer retention."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-card/50 relative overflow-hidden" id="faq">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Column Callout */}
          <div className="lg:w-5/12 space-y-6">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 text-rose-500 font-extrabold text-xs uppercase tracking-widest">
                <HelpCircle className="w-4 h-4" />
                <span>Got Questions?</span>
              </div>
            </FadeIn>

            <Reveal>
              <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tight leading-tight">
                Frequently Asked <span className="gradient-text-coral-amber">Questions.</span>
              </h2>
            </Reveal>

            <FadeIn delay={0.2}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Everything you need to know about partnering with Arohan to scale your business.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="p-8 rounded-3xl bg-background border-2 border-rose-500/30 shadow-xl space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-rose-500 to-amber-500 text-white flex items-center justify-center shadow-md">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h4 className="font-heading font-extrabold text-xl text-foreground">Have a unique question?</h4>
                <p className="text-muted-foreground text-sm font-normal">
                  Our growth strategists are ready to jump on a 15-min discovery call.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 font-bold text-rose-500 hover:text-amber-500 transition-colors">
                  <span>Chat With Our Team</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Right Accordion List */}
          <div className="lg:w-7/12 space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              
              return (
                <FadeIn key={idx} delay={0.1 * idx}>
                  <div className={`rounded-3xl border-2 transition-all duration-300 overflow-hidden ${isOpen ? 'bg-background border-rose-500 shadow-xl' : 'bg-background/70 border-border/80 hover:border-rose-500/40'}`}>
                    <button 
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      className="flex w-full items-center justify-between p-6 md:p-8 text-left focus:outline-none group"
                    >
                      <h3 className="text-lg md:text-xl font-heading font-extrabold text-foreground group-hover:text-rose-500 transition-colors pr-6">
                        {faq.question}
                      </h3>
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ${isOpen ? 'bg-gradient-to-r from-rose-500 to-amber-500 text-white shadow-md' : 'bg-muted text-muted-foreground group-hover:bg-rose-500 group-hover:text-white'}`}>
                        {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                      </div>
                    </button>
                    
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 md:px-8 pb-8 text-muted-foreground text-base leading-relaxed font-normal border-t border-border/40 pt-4">
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
