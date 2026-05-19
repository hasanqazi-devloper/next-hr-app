"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  Palette, 
  Fingerprint, 
  Flame, 
  Diamond, 
  Layers, 
  Component, 
  Compass, 
  Mic2, 
  PenTool, 
  Briefcase, 
  RefreshCcw 
} from "lucide-react";
import Image from "next/image";

// Section Components
import Stats from "@/components/sections/Stats";
import CTA from "@/components/sections/CTA";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Process from "@/components/sections/HowWeWork";
import Testimonials from "@/components/sections/Testimonials";
import Portfolio from "@/components/sections/PortfolioPreview";
import BrandingFAQ from "@/components/faqs/BrandingFAQ";

export default function BrandingPage() {
  return (
    <main className="bg-[#030712] text-white selection:bg-blue-600 overflow-x-hidden">
      
     {/* 🎯 SYNCED AI AUTOMATION HERO SECTION: Built exactly on top of your verified About Us master framework */}
<section className="relative w-full overflow-hidden bg-[#030712]">
  <div className="container-wide">
    
    {/* Background Image Container with Exact Matching Premium CSS */}
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      <Image
        src="/home-hero.jpg"
        alt="Mesh Grid"
        fill
        sizes="100vw"
        priority // 🔥 PageSpeed boost: Hero image jaldi load hogi
        className="object-cover object-top opacity-35"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030712]/40 to-[#030712]" />
    </div>

    {/* Ambient Blur Dot to lock the signature aesthetic */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/[0.05] blur-[120px] pointer-events-none" />

    {/* Full Sized Padded Content Wrapper - Exact global layout spacing matching About Us */}
<div className="relative z-10 w-full mx-auto text-center lg:text-left px-6 pt-32 pb-16 md:pt-20 md:pb-24 lg:max-w-full lg:pt-40 lg:pb-28 lg:pl-40 2xl:mx-0 2xl:max-w-[1500px] 2xl:pt-48 2xl:pb-36 2xl:pl-80 3xl:mx-0 3xl:max-w-[1800px] 3xl:pt-60 3xl:pb-44 3xl:pl-72">
      <div className="max-w-5xl">
        
        {/* Glassmorphism Badge Container */}
        <div className="flex items-center gap-2.5 mb-8 w-fit px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md mx-auto md:mx-0">
          <Flame size={12} className="text-blue-400 animate-pulse" />
          <span className="text-[10px] font-black tracking-[4px] text-blue-300 uppercase">AI Solutions</span>
        </div>

        {/* Main Typography Block with Tight Line Height */}
        <h1 className="text-[3rem]  md:text-[3.2rem] lg:text-[3.8rem]  font-black tracking-tighter leading-[0.8] text-white mb-8 normal-case">
          AI {" "}
          <span className="uppercase bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text">
            Automation.
          </span>
        </h1>

        {/* Description Paragraph - Aligned perfectly with global layout standards */}
      <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed max-w-xl 2xl:max-w-3xl mx-auto lg:mx-0 opacity-80">
  Scale your workflow with intelligent digital deployments, automated workflows, and smart integrations engineered to supercharge performance.
</p>
      </div>
    </div>
  </div>
</section>


      {/* 2. CORE CAPABILITIES (Identity & Emotion) */}
      <section className="relative py-24 2xl:py-40 px-6 overflow-hidden bg-[#030303]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:32px_32px]" />
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />
        </div>

        <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6 border-b border-white/5 pb-10">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-3 bg-blue-500/10 w-fit px-3 py-1 rounded-full border border-blue-500/20">
                <Palette size={12} className="text-blue-400" />
                <span className="text-[9px] 2xl:text-xs font-black uppercase tracking-[3px] text-blue-300">Identity Engineering</span>
              </div>
              <h2 className="text-5xl md:text-7xl 2xl:text-9xl font-black uppercase italic leading-[0.9] tracking-tighter text-white">
                Identity <br /> <span className="text-blue-600">& Emotion.</span>
              </h2>
            </div>
          <p className="text-zinc-500 font-bold text-[16px] md:text-xl lg:text-[22px] 2xl:text-2xl 3xl:text-3xl italic leading-snug max-w-xs md:max-w-md 2xl:max-w-lg border-r-2 md:border-r-0 md:border-l-2 border-blue-600 pr-6 md:pr-0 md:pl-6 text-right md:text-left antialiased">
  "We build visual legacies that command market authority."
</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 2xl:gap-10">
            {[
              { title: "Visual Systems", desc: "Logo design se lekar poora design language tak—ek cohesive identity jo har platform par stand out kare.", icon: <Component size={24} /> },
              { title: "Brand Strategy", desc: "Market positioning aur competitor analysis taake aapka brand sirf dikhe nahi, balki dominate kare.", icon: <Compass size={24} /> },
              { title: "Brand Voice", desc: "Aapke brand ki personality aur tone define karna jo aapki target audience ke sath emotionally connect kare.", icon: <Mic2 size={24} /> },
              { title: "UI/UX Design", desc: "Digital products jo beautiful bhi hon aur functional bhi. User experience ko priority dena hamara mission hai.", icon: <PenTool size={24} /> },
              { title: "Collateral Design", desc: "Business cards, stationary, aur social media kits jo aapki brand identity ko complete karti hain.", icon: <Briefcase size={24} /> },
              { title: "Rebranding Ops", desc: "Existing brands ko modern era ke liye transform karna baghair unki core values ko lose kiye.", icon: <RefreshCcw size={24} /> }
            ].map((s, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10 }}
                className="group relative bg-[#070707] p-10 2xl:p-16 rounded-[2.5rem] border border-white/5 hover:border-blue-500/40 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-blue-600/[0.01] opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem]" />
                <div className="relative z-10">
                  <div className="mb-6 w-12 h-12 2xl:w-20 2xl:h-20 bg-white/[0.03] rounded-xl flex items-center justify-center border border-white/10 group-hover:bg-blue-600/20 group-hover:text-blue-400 group-hover:border-blue-500/50 transition-all duration-500">
                    <div className="text-blue-400">{s.icon}</div>
                  </div>
                  <h3 className="text-2xl 2xl:text-4xl font-black uppercase italic mb-3 leading-tight group-hover:text-blue-400 transition-colors tracking-tight">
                    {s.title}
                  </h3>
               <p className="text-zinc-500 group-hover:text-zinc-300 text-[16px] md:text-base lg:text-[15px] 2xl:text-base 3xl:text-lg font-medium leading-relaxed max-w-xl 2xl:max-w-2xl opacity-90 transition-colors duration-300 antialiased">
  {s.desc}
</p>
                  <div className="mt-8 flex items-center gap-2 text-[8px] 2xl:text-xs font-black uppercase tracking-widest text-zinc-700 group-hover:text-blue-400/60 transition-colors">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse" />
                    Design Verified
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Portfolio />

      {/* 4. THE IDENTITY LOOP */}
      <section className="relative py-24 2xl:py-40 px-6 overflow-hidden bg-[#030303]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:40px_40px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-[600px] bg-blue-600/[0.03] blur-[140px] rounded-full pointer-events-none" />
        </div>

        <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="flex items-center gap-2 mb-4 bg-blue-500/10 w-fit px-4 py-1.5 rounded-full border border-blue-500/20 mx-auto">
              <Sparkles size={14} className="text-blue-400" />
              <span className="text-[10px] 2xl:text-xs font-black tracking-[4px] uppercase text-blue-300">Identity Architecture</span>
            </div>
            <h2 className="text-5xl md:text-8xl 2xl:text-[130px] font-black leading-[0.85] tracking-tighter text-white mb-6 uppercase italic">
              The Identity <br /> <span className="text-blue-600">Loop.</span>
            </h2>
         <p className="text-zinc-500 font-bold text-[16px] md:text-xl lg:text-[22px] 2xl:text-3xl 3xl:text-4xl italic leading-tight max-w-2xl 2xl:max-w-4xl mx-auto antialiased tracking-wide">
  "Designing psychological triggers that transform a business into a cult-followed brand."
</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 2xl:gap-8">
            {[
              { step: "01", title: "Brand Discovery", keywords: "Market Gap, Core Values, Persona", desc: "Hum aapke brand ka DNA dhoondte hain takay market mein aapki unique position clear ho." },
              { step: "02", title: "Visual DNA", keywords: "Visual ID, Color Theory, Typography", desc: "Ek aisa design system jo sirf dikhne mein acha na ho, balki message bhi deliver kare." },
              { step: "03", title: "Market Sync", keywords: "Brand Voice, Messaging, Tone", desc: "Aapki awaaz ko optimize karna takay har caption aur har ad aapki brand identity ko match kare." },
              { step: "04", title: "Brand Equity", keywords: "Consistency, Scalability, Guidelines", desc: "Long-term assets create karna jo waqt ke sath aapki company ki value ko barhate rahen." }
            ].map((p, i) => (
              <motion.div 
                key={i} 
                whileHover={{ scale: 1.02 }}
                className="group relative bg-[#080808] p-8 2xl:p-12 rounded-[2.5rem] border border-white/5 hover:border-blue-500/40 transition-all duration-500 flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-10">
                  <span className="text-5xl 2xl:text-7xl font-black text-white/5 group-hover:text-blue-600/20 transition-colors italic">
                    {p.step}
                  </span>
                  <div className="p-2 bg-white/5 rounded-lg border border-white/10 group-hover:bg-blue-600/10">
                    <Fingerprint size={16} className="text-zinc-600 group-hover:text-blue-400" />
                  </div>
                </div>

               <div className="bg-blue-600/[0.03] border border-blue-600/10 rounded-xl p-3 lg:p-4 2xl:p-5 group-hover:bg-blue-600/10 transition-colors duration-300">
  
  {/* Tactical DNA Label */}
  <p className="text-[16px] md:text-[10px] lg:text-[11px] 2xl:text-xs font-black text-blue-500 uppercase tracking-widest mb-1 italic antialiased leading-none">
    Tactical DNA:
  </p>
  
  {/* Project Keywords Dynamic Text */}
  <p className="text-[16px] sm:text-xs md:text-sm lg:text-[15px] 2xl:text-base 3xl:text-lg text-zinc-400 font-bold leading-relaxed antialiased">
    {p.keywords}
  </p>
  
</div>

                <div className="mt-8 h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "0%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className="h-full bg-blue-600/30"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Process />
      <Stats />
      <WhyChooseUs />
      <Testimonials />
      <BrandingFAQ />
      <CTA />
    </main>
  );
}