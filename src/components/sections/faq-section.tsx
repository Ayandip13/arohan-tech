"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { Reveal } from "@/components/animations/reveal";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Do you only work with large enterprises?",
    answer: "No. While we have deep experience with enterprise scale, we frequently partner with high-growth startups and mid-market companies that need robust, scalable solutions."
  },
  {
    question: "What is your typical project timeline?",
    answer: "Timelines vary by scope. A comprehensive marketing strategy might take 4 weeks to launch, while a full-scale custom software platform typically requires 3-6 months. We work in agile sprints to deliver value quickly."
  },
  {
    question: "Do you handle both design and development?",
    answer: "Yes, we are a full-service agency. Our in-house teams cover the entire lifecycle: brand strategy, UX/UI design, software engineering, and post-launch digital marketing."
  },
  {
    question: "How do you price your services?",
    answer: "We offer flexible models depending on the engagement. For discrete projects, we provide fixed-price contracts. For ongoing marketing or development, we offer retainer agreements. We prioritize transparency and ROI."
  },
  {
    question: "Can you integrate AI into our existing software?",
    answer: "Absolutely. A significant part of our practice involves retrofitting legacy systems with modern AI capabilities, from intelligent chatbots to predictive analytics and workflow automation."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Common Questions</h2>
            </Reveal>
            <FadeIn delay={0.2}>
              <p className="text-xl text-muted-foreground mb-8">
                Everything you need to know about working with Arohan Tech Solution.
              </p>
              <a href="mailto:hello@arohantech.com" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
                Still have questions? Contact us.
              </a>
            </FadeIn>
          </div>

          <div className="lg:w-2/3">
            <div className="divide-y divide-border">
              {faqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                
                return (
                  <FadeIn key={idx} delay={0.1 * idx}>
                    <div className="py-6">
                      <button 
                        onClick={() => setOpenIndex(isOpen ? null : idx)}
                        className="flex w-full items-center justify-between text-left focus:outline-none group"
                      >
                        <h3 className="text-xl font-medium font-heading group-hover:text-primary transition-colors pr-8">
                          {faq.question}
                        </h3>
                        <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors flex-shrink-0 ${isOpen ? 'bg-primary border-primary text-primary-foreground' : 'border-border text-muted-foreground group-hover:border-primary'}`}>
                          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
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
                            <p className="pt-4 pb-2 text-muted-foreground leading-relaxed">
                              {faq.answer}
                            </p>
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
      </div>
    </section>
  );
}
