"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Target, Megaphone, Flame, PenTool, Search, Crown,
  FileText, BookOpen, Zap, Feather, ShoppingBag, ChevronRight
} from "lucide-react";
import Image from "next/image";

// Section Components
import Stats from "@/components/sections/Stats";
import CTA from "@/components/sections/CTA";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Process from "@/components/sections/HowWeWork";
import Testimonials from "@/components/sections/Testimonials";
import Portfolio from "@/components/sections/PortfolioPreview";
// import ContentFAQ from "@/components/faqs/ContentFAQ";

export default function ContentWritingPage() {
  return (
    <main className="bg-[#030712] text-white selection:bg-blue-600 overflow-x-hidden">

      {/* 🎯 SYNCED CONTENT WRITING HERO SECTION: Formatted exactly on top of your verified About Us master framework */}
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
                <span className="text-6xl lg:text-[5.5rem] md:text-[5rem] text-blue-300 uppercase">Content Strategy</span>
              </div>

              {/* Main Typography Block with Tight Line Height - Fixed Spelling "Content" */}
              <h1 className="text-[3rem]  md:text-[3.2rem] lg:text-[3.8rem]  font-black tracking-tighter leading-[0.8] text-white mb-8 normal-case">
                CONTENT {" "}
                <span className="uppercase bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text">
                  Writing.
                </span>
              </h1>

              {/* Description Paragraph - Aligned perfectly with global layout standards */}
              <p className="text-white text-sm md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed max-w-xl 2xl:max-w-3xl mx-auto lg:mx-0 opacity-80">
                Engaging your audience with high-impact storytelling, data-driven copy, and conversion-focused content built to elevate your brand authority.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* 2. CORE CAPABILITIES (Zero Content Changes) */}
      <section className="relative py-24 2xl:py-40 px-6 overflow-hidden bg-[#030303]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:32px_32px]" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/[0.04] blur-[120px] rounded-full pointer-events-none" />
        </div>

        <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6 border-b border-white/5 pb-10">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-3 bg-blue-500/10 w-fit px-3 py-1 rounded-full border border-blue-500/20">
                <PenTool size={12} className="text-blue-400" />
                <span className="text-[9px] 2xl:text-xs font-black uppercase tracking-[3px] text-blue-300">Narrative Engineering</span>
              </div>
              <h2 className="text-5xl md:text-7xl 2xl:text-9xl font-black uppercase italic leading-[0.9] tracking-tighter text-white">
                The Power of <br /> <span className="text-blue-600">Narrative.</span>
              </h2>
            </div>
            <p className="text-zinc-500 font-bold text-lg md:text-xl 2xl:text-3xl italic max-w-xs 2xl:max-w-md leading-snug border-r-2 border-blue-600 pr-6 text-right md:text-left">
              "Words that don't just fill space, but dominate the user's attention."
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 2xl:gap-10">
            {[
              { title: "SEO Copywriting", desc: "Conversion-optimized copy jo Google rankings aur sales dono ko trigger karti hai.", icon: <Search size={24} /> },
              { title: "Thought Leadership", desc: "Ghostwriting for CEOs aur founders taake aap industry mein aik authority ban saken.", icon: <Crown size={24} /> },
              { title: "Technical Writing", desc: "Complex technical products ko asaan aur engaging documentation mein convert karna.", icon: <FileText size={24} /> },
              { title: "Brand Storytelling", desc: "Aapke brand ki history aur mission ko aik emotional narrative mein pirona.", icon: <BookOpen size={24} /> },
              { title: "Ad Copywriting", desc: "High-CTR scripts aur copies jo Meta aur Google Ads ka ROAS skyrocket kar den.", icon: <Zap size={24} /> },
              { title: "Product Descriptions", desc: "Persuasive writing jo features ko benefits mein badal kar customers ko 'Buy' par click karwaye.", icon: <ShoppingBag size={24} /> }
            ].map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group relative bg-[#070707] p-10 2xl:p-16 rounded-[2.5rem] border border-white/5 hover:border-blue-500/40 transition-all duration-500"
              >
                <div className="relative z-10">
                  <div className="mb-6 w-12 h-12 2xl:w-20 2xl:h-20 bg-white/[0.03] rounded-xl flex items-center justify-center border border-white/10 group-hover:bg-blue-600/20 group-hover:text-blue-400 transition-all duration-500">
                    <div className="text-blue-400">{s.icon}</div>
                  </div>
                  <h3 className="text-2xl 2xl:text-4xl font-black uppercase italic mb-3 leading-tight group-hover:text-blue-400 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-zinc-500 group-hover:text-zinc-300 text-sm 2xl:text-xl font-medium leading-relaxed">
                    {s.desc}
                  </p>
                  <div className="mt-8 flex items-center gap-2 text-[8px] 2xl:text-xs font-black uppercase tracking-widest text-zinc-700 group-hover:text-blue-400/60 transition-colors">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse" />
                    Content Verified
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Portfolio />

      {/* 4. THE EDITORIAL LINE (Zero Content Changes) */}
      <section className="relative py-24 2xl:py-40 px-6 overflow-hidden bg-[#030303]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:40px_40px]" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/[0.03] blur-[140px] rounded-full pointer-events-none" />
        </div>

        <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="flex items-center gap-2 mb-4 bg-blue-500/10 w-fit px-4 py-1.5 rounded-full border border-blue-500/20 mx-auto">
              <Feather size={14} className="text-blue-400" />
              <span className="text-[10px] 2xl:text-xs font-black tracking-[4px] text-blue-300 uppercase">Semantic Content Loop</span>
            </div>
            <h2 className="text-5xl md:text-8xl 2xl:text-[130px] font-black leading-[0.85] tracking-tighter text-white mb-6 uppercase italic">
              The Writing <br /> <span className="text-blue-600">Pipeline.</span>
            </h2>
            <p className="text-zinc-500 font-bold text-lg md:text-xl 2xl:text-4xl italic max-w-2xl mx-auto">
              "Converting complex ideas into structured, high-authority content that search engines reward."
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 2xl:gap-8">
            {[
              { step: "01", title: "Topic Mapping", keywords: "LSI Graph, Cluster Hubs, User Intent", desc: "Hum topics ko map karte hain taake aapki domain authority ka graph hamesha upar jaye." },
              { step: "02", title: "Narrative Flow", keywords: "UX Writing, Hook Strategy, Readability", desc: "Lafzon ko is tarah pirona ke user bounce na kare aur poora article parhay." },
              { step: "03", title: "SEO Infusion", keywords: "NLP Tags, Entity SEO, Semantic Core", desc: "Natural Language Processing ke mutabiq content ko optimize karna taake AI isay trust kare." },
              { step: "04", title: "Conversion Layer", keywords: "Micro-Copy, CTA Engine, ROI Focused", desc: "Har sentence ka aik maqsad hota hai: user ko action lene par majboor karna." }
            ].map((p, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="group relative bg-[#080808] p-8 2xl:p-12 rounded-[2.5rem] border border-white/5 hover:border-blue-500/40 transition-all duration-500 h-full flex flex-col"
              >
                <div className="flex justify-between items-center mb-8">
                  <span className="text-4xl 2xl:text-6xl font-black text-white/5 group-hover:text-blue-600/20 italic">
                    {p.step}
                  </span>
                  <ChevronRight size={16} className="text-zinc-600 group-hover:text-blue-400" />
                </div>

                <div className="space-y-4 flex-grow">
                  <h3 className="text-2xl 2xl:text-4xl font-black uppercase italic text-white group-hover:text-blue-500 transition-colors">
                    {p.title}
                  </h3>

                  <div className="bg-blue-600/[0.03] border border-blue-600/10 rounded-xl p-3 2xl:p-5 group-hover:bg-blue-600/10 transition-colors">
                    <p className="text-[9px] 2xl:text-xs font-black text-blue-500 uppercase tracking-widest mb-1 italic">Core Architecture:</p>
                    <p className="text-[11px] 2xl:text-lg text-zinc-400 font-bold leading-relaxed">
                      {p.keywords}
                    </p>
                  </div>

                  <p className="text-zinc-500 2xl:text-xl text-sm font-medium leading-relaxed">
                    {p.desc}
                  </p>
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
      {/* <ContentFAQ /> */}
      <CTA />

    </main>
  );
}