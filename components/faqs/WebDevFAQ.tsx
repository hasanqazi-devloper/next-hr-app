"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function WebDevFAQ() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const faqs = [
    {
      q: "How long does it take to build a website?",
      a: "Most standard business websites take between 3 to 6 weeks from start to launch. E-commerce stores or large, custom sites can take 6 to 12 weeks, depending on the number of pages and specific features you need."
    },
    {
      q: "Will my website work on mobile phones and tablets?",
      a: "Yes, absolutely. Every website we design is fully responsive. This means your layout automatically shrinks, grows, and adjusts to look beautiful and function perfectly on iPhones, Androids, tablets, and desktop screens."
    },
    {
      q: "Can I update the website content myself after it launches?",
      a: "Yes. We build our sites on user-friendly platforms like WordPress, Shopify, and Wix. We’ll show you how to easily swap out text, upload new photos, blog, or add new products without needing to know any code."
    },
    {
      q: "Do you optimize the website for Google (SEO)?",
      a: "Yes, we build every site with SEO best practices. We handle the technical essentials, including fast page speeds, clean code structure, mobile optimization, and secure HTTPS setup, to give your site a strong foundation to rank well."
    },
    {
      q: "What platform should I choose: WordPress, Shopify, or Wix?",
      a: "It depends entirely on your business goals: WordPress is best for flexibility, blogging, and long-term SEO growth. Shopify is ideal if you want a powerful online store to sell physical products. Wix works great for simple, low-maintenance sites that need a fast launch."
    },
    {
      q: "How much does a new website design cost?",
      a: "Cost depends on the scope of your project, the number of pages, and the features required. A simple informational business site costs less than a massive e-commerce store with hundreds of products. Contact us for a quick and transparent quote tailored to your budget."
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
          <h2 className="text-4xl md:text-5xl font-black text-white  leading-none">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2ff] to-[#0070ff]">Questions (FAQs)</span>
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className={`rounded-2xl border transition-all duration-500 ${activeIdx === idx ? "bg-blue-900/20 border-blue-500/50" : "bg-white/[0.02] border-white/5"}`}>
              <button onClick={() => setActiveIdx(activeIdx === idx ? null : idx)} className="w-full flex items-center justify-between p-6 text-left outline-none">
                <span className={`text-lg font-bold pr-4 ${activeIdx === idx ? "text-[#00f2ff]" : "text-white-200"}`}>{faq.q}</span>
                <div className={`shrink-0 p-2 rounded-lg ${activeIdx === idx ? "bg-blue-500 text-white" : "bg-white/5 text-white-500"}`}>
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
                    <div className="px-6 pb-8 text-white-400 border-t border-white/5 pt-4 leading-relaxed">
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