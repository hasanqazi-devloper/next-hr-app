"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Sparkles, ArrowUpRight, Zap, ShieldCheck, 
  BarChart3, Globe, Flame, ChevronRight 
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Components Imports

import CTA from "@/components/sections/CTA";

// 1. Service List Data (Content Exactly Same)
const serviceList = [
  { id: "01", title: "Technical SEO", slug: "seo", icon: <BarChart3 /> },
  { id: "02", title: "Web Development", slug: "web-dev", icon: <Zap /> },
  { id: "03", title: "Content Writing", slug: "content-writing", icon: <Globe /> },
  { id: "04", title: "Social Media Marketing", slug: "social-media", icon: <ShieldCheck /> },
  { id: "05", title: "Branding", slug: "branding", icon: <Sparkles /> },
  { id: "06", title: "AI Automation", slug: "ai-automation", icon: <Sparkles /> },
  { id: "07", title: "Google Ads", slug: "google-ads", icon: <Sparkles /> },
  { id: "08", title: "Ecommerce Management", slug: "ecommerce", icon: <Sparkles /> },
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

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-16 md:pt-40 text-center md:text-left">
          <div className="max-w-5xl">
            <div className="flex items-center gap-2.5 mb-8 w-fit px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md mx-auto md:mx-0">
              <Flame size={12} className="text-blue-400 animate-pulse" />
              <span className="text-[10px] font-black tracking-[4px] text-blue-300 ">Digital Marketing</span>
            </div>

            <h1 className="text-6xl sm:text-8xl md:text-[100px] font-black tracking-tighter leading-[0.8] text-white mb-8">
              Our {" "}
              <span className="bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text">
                Services.
              </span>
            </h1>
            
            <p className="text-white-500 text-lg md:text-xl lg:text-2xl max-w-2xl font-medium leading-relaxed opacity-80 mx-auto md:mx-0">
We provide SEO, social media marketing, PPC, branding, and web development services to help your business grow and succeed online.            </p>
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
                <span className="text-[10px] 2xl:text-xs uppercase tracking-[3px] text-blue-300 font-black">Our Expertise</span>
              </div>

              <h2 className="text-4xl md:text-6xl 2xl:text-8xl font-black tracking-tighter text-white leading-[0.95]">
                Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">Digital Dominance.</span>
              </h2>

              <p className="text-zinc-200 font-semibold text-lg md:text-xl 2xl:text-3xl leading-snug">
                Everything You Need to Grow, Market, and Scale Your Brand.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-whwite-500 text-sm md:text-base 2xl:text-2xl leading-relaxed opacity-90 font-medium border-l-2 border-blue-500/30 pl-6 ">
                High Rise Digital Agency has years of experience helping businesses grow worldwide through modern digital marketing strategies. 
                <br /><br />
                We use advanced AI tools and data-driven technologies to deliver better results and smarter solutions. 
                <br /><br />
                Our services include website development, SEO, content creation, lead generation, and customer retention strategies. 
                <br /><br />
                With a focus on innovation and performance, we help businesses stay ahead in the competitive digital world. 
                <br /><br />
                Our goal is simple—grow your brand, increase visibility, and drive real, measurable success online.
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-4">
                <Link href="/contact">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 2xl:px-12 2xl:py-6 rounded-2xl bg-white text-black font-black text-xs 2xl:text-lg uppercase tracking-widest transition-all hover:bg-blue-600 hover:text-white flex items-center gap-2"
                  >
                    Get Quote Now.<ChevronRight size={16} />
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SERVICE GRID */}
      <section className="py-24 2xl:py-40 px-6 max-w-7xl 2xl:max-w-[1600px] mx-auto">
        <h2 className="text-4xl 2xl:text-6xl font-black mb-16 flex items-center gap-4 uppercase italic">
          Our Complete Range of Digital Marketing Services
          <div className="h-px bg-white/10 flex-grow" />
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 2xl:gap-10">
          {serviceList.map((service) => (
            <Link href={`/services/${service.slug}`} key={service.id}>
              <motion.div
                whileHover={{ y: -10 }}
                className="p-10 2xl:p-16 border border-white/10 bg-[#070b14] rounded-[3rem] group hover:border-blue-500/50 transition-all cursor-pointer h-full flex flex-col justify-between"
              >
                <div>
                  <div className="text-blue-500 mb-8 w-12 h-12 2xl:w-16 2xl:h-16 flex items-center justify-center bg-blue-500/5 rounded-2xl border border-blue-500/10 group-hover:bg-blue-500 group-hover:text-white transition-all">
                    {service.icon}
                  </div>
                  <span className="text-zinc-600 font-black text-xs 2xl:text-base uppercase tracking-widest">{service.id} // SERVICE</span>
                  <h3 className="text-3xl 2xl:text-5xl font-black uppercase italic mt-4 group-hover:text-blue-400 transition-colors leading-tight">
                    {service.title}
                  </h3>
                </div>
                <div className="mt-12 flex justify-between items-end">
                  <p className="text-zinc-500 text-sm 2xl:text-xl max-w-[150px] 2xl:max-w-[250px]">Production-grade scale & precision.</p>
                  <ArrowUpRight className="text-zinc-700 group-hover:text-blue-500 transition-colors 2xl:w-8 2xl:h-8" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      <CTA />
    </main>
  );
}