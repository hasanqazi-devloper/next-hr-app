"use client";
import React, { useState } from "react";
import Image from "next/image"; // Next.js Optimization
import { motion, AnimatePresence } from "framer-motion";
import { Plus, HelpCircle } from "lucide-react";

const faqs = [
  { 
    q: "What services does your digital agency provide?", 
    a: "A digital marketing agency provides services like SEO, social media marketing, PPC advertising, web development, branding, and content marketing to grow your online presence." 
  },
  { 
    q: "How can digital marketing help my business?", 
    a: "It helps you reach the right audience, increase website traffic, generate leads, and improve sales through targeted online strategies." 
  },
  { 
    q: "How long does it take to see results from SEO?", 
    a: "SEO usually takes 3 to 6 months to show noticeable results, depending on competition, industry, and strategy." 
  },
  { 
    q: "Do you work with international clients?", 
    a: "Yes, we work with clients worldwide including the USA, UK, Australia, UAE, and many other countries." 
  },
  { 
    q: "What is PPC advertising?", 
    a: "PPC (Pay-Per-Click) is a paid marketing strategy where you pay only when someone clicks on your ad, helping drive instant traffic." 
  },
  { 
    q: "Can you help grow my social media pages?", 
    a: "Yes, we create and manage social media strategies to increase engagement, followers, and brand awareness." 
  },
  { 
    q: "How much do your services cost?", 
    a: "Pricing depends on your project requirements, goals, and selected services. We offer customized packages for every business." 
  },
  { 
    q: "Do you guarantee results?", 
    a: "We focus on proven strategies and best practices, but results may vary based on industry, competition, and market conditions." 
  },
  { 
    q: "Will I get regular updates on my project?", 
    a: "Yes, we provide regular progress reports and updates to keep you informed about your campaign performance." 
  },
  { 
    q: "How do I get started with your agency?", 
    a: "You can contact us through our website, share your requirements, and our team will guide you with the best strategy for your business." 
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#020617] text-white overflow-x-hidden selection:bg-blue-600">
      
    {/* 1. HERO SECTION (FAQ) */}
<section className="relative w-full overflow-hidden">
  {/* Background Image Container with Exact Matching Premium CSS */}
  <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
    <Image
      src="/home-hero.jpg"
      alt="Mesh Grid"
      fill
      priority 
      sizes="100vw"
      className="object-cover object-top opacity-35" // Standardized opacity for depth consistency
    />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/40 to-[#020617]" />
  </div>

  {/* Ambient Blur Dot to lock the signature aesthetic */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/[0.05] blur-[120px] pointer-events-none" />

  {/* Full Sized Padded Content Wrapper - Identical to Insights Page */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-16 md:pt-40">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-5xl"
    >
      {/* Badge Container */}
      <div className="flex items-center gap-2.5 mb-8 w-fit px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md">
        <HelpCircle size={12} className="text-blue-400 animate-pulse" />
        <span className="text-[10px] font-black tracking-[4px] text-blue-300 uppercase">Support Center</span>
      </div>

      {/* Main Large Typography Block */}
      <h1 className="text-6xl sm:text-8xl md:text-[100px] font-black tracking-tighter leading-[0.8] text-white mb-8 normal-case">
        FREQUENTLY <br />
        <span className="uppercase bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text">
          Asked Questions.
        </span>
      </h1>

      {/* Paragraph aligned with the same typography standards */}
      <p className="text-white-500 text-lg md:text-xl lg:text-2xl max-w-2xl leading-relaxed font-normal opacity-80">
        Everything you need to know about our digital marketing processes, timelines, and how we help your brand reach new heights.
      </p>
    </motion.div>
  </div>
</section>
      {/* --- FAQ ACCORDION SECTION - Better Scaling --- */}
      <section className="py-24 px-6 relative 2xl:py-36">
        <div className="max-w-4xl 2xl:max-w-6xl mx-auto">
          <div className="space-y-4 2xl:space-y-6">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`rounded-[2rem] border transition-all duration-500 overflow-hidden ${
                  openIndex === i ? "border-blue-500/50 bg-blue-500/[0.03]" : "border-white/5 bg-white/[0.01] hover:bg-white/[0.03]"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full p-8 2xl:p-12 flex justify-between items-center text-left"
                >
                  <span className={`text-xl md:text-2xl 2xl:text-3xl font-bold transition-colors ${openIndex === i ? "text-blue-400" : "text-white"}`}>
                    {faq.q}
                  </span>
                  <div className={`p-2 2xl:p-4 rounded-full border transition-all duration-500 ${
                    openIndex === i ? "bg-blue-500 border-blue-500 rotate-45 text-white" : "bg-white/5 border-white/10 text-blue-400"
                  }`}>
                    <Plus size={20} className="2xl:w-8 2xl:h-8" />
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-8 pb-8 2xl:px-12 2xl:pb-12 text-zinc-400 text-lg 2xl:text-2xl leading-relaxed border-t border-white/5 pt-6">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Need More Help? - Scaling for 4K */}
          <div className="mt-20 2xl:mt-32 text-center p-12 2xl:p-20 rounded-[3rem] border border-white/5 bg-white/[0.01]">
            <h3 className="text-2xl md:text-3xl 2xl:text-5xl font-bold mb-4">Still have questions?</h3>
            <p className="text-zinc-500 2xl:text-2xl mb-8">Can't find the answer you're looking for? Please chat with our friendly team.</p>
            <button className="px-10 py-4 2xl:px-16 2xl:py-6 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-full transition-all text-sm 2xl:text-xl shadow-[0_0_30px_rgba(37,99,235,0.2)]">
              Get in Touch
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}