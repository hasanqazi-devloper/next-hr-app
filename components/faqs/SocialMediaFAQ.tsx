"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function SocialMediaFAQ() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const faqs = [
    {
      q: "How fast will I see follower growth?",
      a: "Organic growth starts within 2 weeks as the algorithm picks up your content. For instant results, we recommend our targeted ad-boost strategies."
    },
    {
      q: "Do I need to provide the content?",
      a: "We can handle everything from high-end graphics to reel editing. You just need to approve the monthly content calendar we send you."
    },
    {
      q: "Which platforms do you manage?",
      a: "We specialize in Instagram, TikTok, LinkedIn, and Meta (Facebook). We tailor the strategy specifically for each platform's unique audience."
    }
  ];

  return (
<section className="relative py-24 bg-[#111827] overflow-hidden border-y border-white/5">
  {/* Background Glow */}
  <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none" />
  
  {/* 🎯 FIXED: Max-width upgraded and standardized for fluid scaling on all devices */}
  <div className="relative z-10 w-full mx-auto px-6 max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic leading-none">
            Social Media <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2ff] to-[#0070ff]">FAQ.</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className={`rounded-2xl border transition-all duration-500 ${activeIdx === idx ? "bg-blue-900/20 border-blue-500/50" : "bg-white/[0.02] border-white/5"}`}>
              <button onClick={() => setActiveIdx(activeIdx === idx ? null : idx)} className="w-full flex items-center justify-between p-6 text-left outline-none">
                <span className={`text-lg font-bold ${activeIdx === idx ? "text-[#00f2ff]" : "text-zinc-200"}`}>{faq.q}</span>
                <div className={`p-2 rounded-lg ${activeIdx === idx ? "bg-blue-500 text-white" : "bg-white/5 text-zinc-500"}`}>
                  {activeIdx === idx ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              <AnimatePresence>
                {activeIdx === idx && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                    <div className="px-6 pb-8 text-zinc-400 border-t border-white/5 pt-4">{faq.a}</div>
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