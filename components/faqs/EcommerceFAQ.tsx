"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function EcommerceFAQ() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const faqs = [
    {
      q: "Which e-commerce platforms do you specialize in managing?",
      a: "We manage and optimize storefronts across all major platforms and marketplaces. This includes building dedicated Shopify and WooCommerce stores, as well as optimizing sales pipelines on Amazon, eBay, TikTok Shop, and Etsy."
    },
    {
      q: "Can you help us transition our physical business into an online store?",
      a: "Yes, absolutely. We handle the entire technical process, including setting up your domain, designing a secure checkout experience, organizing your digital or physical product inventory, and launching your initial marketing campaigns."
    },
    {
      q: "How do you help lower our customer acquisition costs?",
      a: "We focus on high-intent marketing. Instead of wasting your budget on broad, generic traffic, we target buyers who are already looking for your specific products. We also build automated retargeting funnels to win back abandoned carts."
    },
    {
      q: "Will you write our product descriptions and create ad imagery?",
      a: "Yes, our team handles all creative assets. We design clean, professional visuals and write clear, natural product copy. We strictly avoid stiff, robotic AI wording to ensure your brand voice feels authentic and trustworthy to shoppers."
    },
    {
      q: "Do you handle daily store operations like inventory tracking?",
      a: "Yes, we offer complete account management. We can monitor your stock levels, update product variations, organize digital delivery pipelines, and ensure your backend settings run flawlessly so you can focus entirely on big-picture business growth."
    },
    {
      q: "How do you measure the performance of our marketing campaigns?",
      a: "We focus entirely on metrics that impact your revenue. You will receive transparent, easy-to-read dashboards tracking your exact Return on Ad Spend (ROAS), average order value (AOV), website conversion rate, and overall net sales."
    },
    {
      q: "Can you help us scale our digital products marketplace shop?",
      a: "Yes. We have specialized strategies for digital products, focusing on marketplace SEO, highly optimized search tags, and creating clean, attractive mockup presentations that stand out from competitors and drive immediate downloads."
    },
    {
      q: "How long does it take to see an increase in online sales?",
      a: "While paid advertising on social media can drive immediate traffic and sales within the first week of launch, sustainable organic growth through e-commerce SEO and funnel optimization typically builds momentum over 30 to 90 days."
    }
  ];

  return (
<section className="relative py-24 bg-[#111827] overflow-hidden border-y border-white/5">
  {/* Background Glow */}
  <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none" />
  
  {/* 🎯 FIXED: Max-width upgraded and standardized for fluid scaling on all devices */}
  <div className="relative z-10 w-full mx-auto px-6 max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
        {/* Header Title Section */}
        <div className="mb-12">
      
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic leading-none">
            E-Commerce <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2ff] to-[#0070ff]">FAQ.</span>
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`rounded-2xl border transition-all duration-500 ${
                activeIdx === idx 
                  ? "bg-blue-900/20 border-blue-500/50" 
                  : "bg-white/[0.02] border-white/5"
              }`}
            >
              <button 
                onClick={() => setActiveIdx(activeIdx === idx ? null : idx)} 
                className="w-full flex items-center justify-between p-6 text-left outline-none group"
              >
                <span className={`text-lg font-bold transition-colors duration-300 ${
                  activeIdx === idx ? "text-[#00f2ff]" : "text-zinc-200 group-hover:text-white"
                }`}>
                  {faq.q}
                </span>
                
                <div className={`p-2 rounded-lg shrink-0 ml-4 transition-colors duration-300 ${
                  activeIdx === idx ? "bg-blue-500 text-white" : "bg-white/5 text-zinc-500 group-hover:text-zinc-300"
                }`}>
                  {activeIdx === idx ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>

              <AnimatePresence>
                {activeIdx === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }} 
                    animate={{ height: "auto", opacity: 1 }} 
                    exit={{ height: 0, opacity: 0 }} 
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-8 text-zinc-400 border-t border-white/5 pt-4 leading-relaxed antialiased">
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