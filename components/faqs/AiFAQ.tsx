"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function AutomationFAQ() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const faqs = [
    {
      q: "What exactly is AI automation, and how does it help my business?",
      a: "AI automation means connecting your favorite software tools and using smart systems to handle repetitive tasks—like data entry, lead sorting, and follow-ups. Instead of spending hours on manual backend work, these systems run automatically in the background, saving you time and preventing human error."
    },
    {
      q: "Will AI replace my existing team?",
      a: "Not at all. Our solutions are built to act as an ultimate backend assistant, taking the tedious, time-consuming tasks off your team's plate. This frees up your staff to focus on high-value work, creative problem-solving, and building real relationships with your clients."
    },
    {
      q: "How do we know which parts of our business to automate first?",
      a: "That is exactly what we figure out during our discovery phase. We audit your current workflows to find your biggest operational bottlenecks—such as manual lead tracking or fragmented client communications—and target those areas first for the fastest return on investment."
    },
    {
      q: "Can your solutions connect with our current software and website?",
      a: "Yes, seamlessly. We specialize in building custom connections that integrate smoothly with your existing tech stack, including your WordPress website, current CRM, email marketing platforms, and daily operational tools, ensuring zero disruption to your business."
    },
    {
      q: "Will the automated messaging and chatbots sound robotic?",
      a: "Absolutely not. We prioritize natural, accessible communication. We customize your automated responses and chatbot scripts to match your unique brand voice, ensuring all customer interactions feel friendly, helpful, and completely authentic."
    },
    {
      q: "How long does it take to design and launch an automation pipeline?",
      a: "Timeline depends entirely on the complexity of your workflows. A straightforward integration or custom chatbot can take anywhere from 1 to 2 weeks, while a comprehensive, company-wide operational overhaul typically takes between 4 to 6 weeks from strategy to deployment."
    },
    {
      q: "Is our business and client data secure with AI tools?",
      a: "Data security is our top priority. We build all automated pathways using secure, industry-standard API protocols and data encryption. Your sensitive information is protected, flows safely between your verified tools, and remains entirely under your control."
    },
    {
      q: "What happens if an automated workflow breaks or needs changes?",
      a: "We don't just build your systems and disappear. We provide dedicated post-launch support to monitor your active data pipelines, fix any tech updates, and refine your workflows to ensure your automation engine grows smoothly alongside your business."
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
         
          <h2 className="text-4xl md:text-5xl font-black text-white   leading-none">
            Automation <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2ff] to-[#0070ff]">FAQ.</span>
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