"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles, ArrowUpRight, Zap, ShieldCheck,
  BarChart3, Globe, Flame, ChevronRight, ArrowRight
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Components Imports

import CTA from "@/components/sections/CTA";

// 1. Service List Data (Content Exactly Same)
const serviceList = [
  { id: "02", title: "Technical SEO", slug: "seo", icon: <BarChart3 /> },
  { id: "01", title: "Web Development", slug: "web-development", icon: <Zap /> },
  { id: "03", title: "Social Media Marketing", slug: "social-media-marketing", icon: <ShieldCheck /> },
  { id: "04", title: "AI Automation", slug: "ai-automation", icon: <Sparkles /> },
  { id: "05", title: "Ecommerce Management", slug: "ecommerce", icon: <Sparkles /> },
];

export default function ServicesPage() {
  return (
    <main className="bg-[#030712] text-white selection:bg-blue-500 overflow-x-hidden">
      {/* 1. HERO SECTION (Optimized) */}
      <section className="relative w-full overflow-hidden">
        <div className="container-wide">
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

          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/[0.05] blur-[120px] pointer-events-none" />

          <div className="relative z-10 w-full mx-auto text-center lg:text-left px-6 pt-32 pb-16 md:pt-20 md:pb-24 lg:max-w-full lg:pt-40 lg:pb-28 lg:pl-40 2xl:mx-0 2xl:max-w-[1500px] 2xl:pt-48 2xl:pb-36 2xl:pl-80 3xl:mx-0 3xl:max-w-[1800px] 3xl:pt-60 3xl:pb-44 3xl:pl-72">
            <div className="max-w-5xl">
              <div className="flex items-center gap-2.5 mb-8 w-fit px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md mx-auto md:mx-0">
                <Flame size={12} className="text-blue-400 animate-pulse" />
                <span className="text-[10px] font-black tracking-[4px] text-blue-300 ">Digital Marketing</span>
              </div>

              <h1 className="text-[3rem]  md:text-[3.2rem] lg:text-[3.8rem] 2xl:text-[5rem] font-black tracking-tighter leading-[0.8] text-white mb-8">
                Our {" "}
                <span className="inline-block mt-2 bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text">
                  Services.
                </span>
              </h1>

              <p className="text-white text-sm md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed max-w-xl 2xl:max-w-3xl mx-auto lg:mx-0 opacity-80">
                We provide SEO, social media marketing, PPC, branding, and web development services to help your business grow and succeed online.
              </p>            
              </div>
          </div>
        </div>
      </section>




      {/* SECTION 2: AGENCY INSIGHT */}
      <section className="relative py-24 2xl:py-40 bg-[#030303] overflow-hidden border-y border-white/5">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/[0.02] blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-600/[0.02] blur-[120px] pointer-events-none" />

        <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* LEFT: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative flex items-center justify-center group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 blur-[100px] rounded-full animate-pulse" />
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <Image
                src="/servicepng.png"
                alt="High Rise Digital Services"
                width={600}
                height={600}
                className="w-full h-auto object-contain transform-gpu group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </motion.div>

          {/* RIGHT: Content (Exactly as you provided) */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-blue-500/5 border border-blue-500/20 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-[10px] 2xl:text-xs uppercase tracking-[3px] text-blue-300 font-black">
                  Crafting Future Brands.
                </span>
              </div>

              {/* 🎯 FIX: Heading optimized in 'rem' for Mobile, Laptop, and 2K screens */}
              <h3 className="text-[2.3rem]  md:text-[2.5rem] lg:text-[2.5rem] 2xl:text-[3.2rem] font-black tracking-tighter leading-[1] lg:leading-[0.95] text-white">
                Everything You Need to{" "}
                <span className="mt-4 pt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
                  Grow, Market, and Scale Your Brand
                </span>
              </h3>
            </div>

            {/* 🎯 FIX: Paragraphs converted to match the exact spacing, font sizes, and white color of previous sections */}
            <div className="space-y-6 text-white font-medium leading-relaxed w-full ">

              {/* Paragraph 1 */}
              <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed antialiased tracking-wide opacity-90">
                High Rise Digital Agency has years of experience helping businesses grow worldwide through modern digital marketing strategies. We use advanced AI tools and data-driven technologies to deliver better results and smarter solutions.
              </p>

              {/* Paragraph 2 */}
              <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed antialiased tracking-wide opacity-90">
                Our services include website development, SEO, content creation, lead generation, and customer retention strategies. With a focus on innovation and performance, we help businesses stay ahead in the competitive digital world.
              </p>

              {/* Paragraph 3 */}
              <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed antialiased tracking-wide opacity-90">
                Our goal is simple—grow your brand, increase visibility, and drive real, measurable success online.
              </p>

            </div>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <Link href="/contact" className="group block w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative h-[46px] 2xl:h-[54px] px-8 2xl:px-12 rounded-full bg-white overflow-hidden transition-all duration-500 active:scale-95 shadow-xl whitespace-nowrap shrink-0 w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 border border-zinc-100"
                >
                  {/* GRADIENT FILL LAYER */}
                  <div className="absolute inset-0 w-0 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 ease-out group-hover:w-full" />

                  {/* Content Span */}
                  <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3 text-black font-black text-[10px] sm:text-[11px] 2xl:text-[13px] tracking-[1.5px] sm:tracking-[2px] group-hover:text-white transition-colors duration-500 uppercase">
                    Get Quote Now.
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 2xl:w-5 2xl:h-5 text-black group-hover:text-white group-hover:translate-x-1.5 transition-all duration-500" />
                  </span>
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SERVICE GRID */}
     <section className="py-24 2xl:py-40 px-6 max-w-7xl 2xl:max-w-[1600px] mx-auto">
  <h3 className="text-[2.3rem] md:text-[2.5rem] lg:text-[2.5rem] 2xl:text-[3.2rem] font-black pb-6 mb-8 flex items-center gap-4 text-white">
    Our Complete Range of {" "}
    <span className="inline-block pb-2 py-1 pr-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
      Digital Marketing Services
    </span>
    <div className="h-px bg-white/10 flex-grow animate-pulse" />
  </h3>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 2xl:gap-10">
    {serviceList.map((service) => (
      <Link href={`/services/${service.slug}`} key={service.id}>
        <motion.div
          whileHover={{ y: -10 }}
          className="p-10 2xl:p-16 border border-white/10 bg-[#070b14] rounded-[3rem] group hover:border-blue-500/50 transition-all duration-500 cursor-pointer h-full flex flex-col justify-between relative overflow-hidden"
        >
          {/* 🎯 EFFECTS LAYER 1: Slide-Up Background Gradient (Glow Fill Effect) */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-600/15 via-blue-500/[0.02] to-transparent translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out z-0 pointer-events-none" />

          {/* Foreground content inside relative z-10 for layered separation */}
          <div className="relative z-10 flex flex-col h-full justify-between w-full">
            <div>
              {/* Icon aur Title Row Layout */}
              <div className="flex items-center justify-between gap-5 mb-8 w-full">
                
                {/* Left: Icon aur Title Wrapper */}
                <div className="flex items-center gap-5">
                  {/* Icon Box with Scale and Glowing Drop Shadow */}
                  <div className="shrink-0 w-12 h-12 2xl:w-16 2xl:h-16 bg-white/[0.03] rounded-xl flex items-center justify-center border border-white/10 group-hover:bg-blue-600/20 group-hover:text-blue-400 group-hover:border-blue-500/50 scale-100 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-all duration-500">
                    <div className="text-blue-400 transition-colors duration-500">
                      {service.icon}
                    </div>
                  </div>

                  <h4 className="font-black text-[1.5rem] sm:text-[1.6rem] lg:text-[1.8rem] 2xl:text-[1.9rem] text-white group-hover:text-blue-400 transition-colors leading-tight tracking-tight">
                    {service.title}
                  </h4>
                </div>

                {/* Right: 🎯 Arrow Link Action Icon Layer */}
                <div className="shrink-0 relative z-10 p-2 overflow-hidden">
                  <ArrowUpRight 
                    size={24} 
                    className="text-zinc-600 group-hover:text-blue-400 transform transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 ease-out" 
                  />
                </div>

              </div>
            </div>
          </div>

          {/* 🎯 EFFECTS LAYER 2: Laser Bottom Edge Glow Line (Center Expand Effect) */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-500 shadow-[0_0_15px_#3b82f6] scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-500 ease-out z-20" />
        </motion.div>
      </Link>
    ))}
  </div>
</section>

    </main>
  );
}