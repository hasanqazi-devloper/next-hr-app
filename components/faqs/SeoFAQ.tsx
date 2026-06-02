"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function SeoFAQ() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const faqs = [
    {
      q: "What is SEO and how does it work?",
      a: "SEO (Search Engine Optimization) is the process of improving your website so it shows up at the top of Google when people search for your services. We achieve this by optimizing your website content, fixing technical backend issues, and building online authority so search engines trust your business."
    },
    {
      q: "How long does it take to see results from SEO?",
      a: "Generally, you will start seeing noticeable ranking improvements and traffic growth within 3 to 6 months. SEO is a long-term strategy, but the traffic it brings is sustainable and keeps delivering leads without you paying for every click."
    },
    {
      q: "Do you guarantee the #1 spot on Google?",
      a: "No honest SEO agency guarantees a specific #1 ranking because Google changes its algorithms constantly. However, we do guarantee measurable growth in your organic search traffic, higher keyword rankings, and a much stronger online presence than your competitors."
    },
    {
      q: "What is the difference between SEO and Google Ads (PPC)?",
      a: "Google Ads are paid placements where you pay every single time someone clicks on your link; once your budget runs out, your traffic stops. SEO focuses on earning free, organic traffic through high rankings, giving you a steady stream of visitors without ongoing ad costs."
    },
    {
      q: "Do I need to keep doing SEO once my website ranks well?",
      a: "Yes. Google updates its system regularly, and your competitors are always working to outrank you. Continuous SEO maintenance ensures you protect your top spots, adapt to new search trends, and keep attracting new customers every month."
    },
    {
      q: "How do you measure the success of an SEO campaign?",
      a: "We track real business metrics that matter. Every month, we review your Google Analytics and Search Console data to show you exactly how much your organic traffic has grown, which keywords you are ranking for, and how many new leads or sales your site generated."
    }
  ];

  return (
<section className="relative py-24 bg-[#111827] overflow-hidden border-y border-white/5">
  {/* Background Glow */}
  <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none" />
  
  {/* 🎯 FIXED: Max-width upgraded and standardized for fluid scaling on all devices */}
  <div className="relative z-10 w-full mx-auto px-6 max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
        
        {/* Heading Section */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white   leading-none">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2ff] to-[#0070ff]">Questions (FAQs)</span>
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className={`rounded-2xl border transition-all duration-500 ${activeIdx === idx ? "bg-blue-900/20 border-blue-500/50" : "bg-white/[0.02] border-white/5"}`}>
              <button onClick={() => setActiveIdx(activeIdx === idx ? null : idx)} className="w-full flex items-center justify-between p-6 text-left outline-none">
                <span className={`text-lg font-bold pr-4 ${activeIdx === idx ? "text-[#00f2ff]" : "text-zinc-200"}`}>{faq.q}</span>
                <div className={`shrink-0 p-2 rounded-lg ${activeIdx === idx ? "bg-blue-500 text-white" : "bg-white/5 text-zinc-500"}`}>
                  {activeIdx === idx ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              <AnimatePresence>
                {activeIdx === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }} 
                    animate={{ height: "auto", opacity: 1 }} 
                    exit={{ height: 0, opacity: 0 }} 
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-8 text-zinc-400 border-t border-white/5 pt-4 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}