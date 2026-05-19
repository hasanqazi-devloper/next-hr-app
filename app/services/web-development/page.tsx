"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles, Layout, Flame, Cpu, ShoppingBag,
  Database, Layers, Zap, Code, Terminal, ChevronRight, Monitor, Building2, RefreshCw, Wrench
} from "lucide-react";
import Image from "next/image";
// Components Imports
import Stats from "@/components/sections/Stats";
import CTA from "@/components/sections/CTA";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Process from "@/components/sections/HowWeWork";
import Testimonials from "@/components/sections/Testimonials";
import Portfolio from "@/components/sections/PortfolioPreview";
import WebDevFAQ from "@/components/faqs/WebDevFAQ";
import IndustryExpertise from "@/components/IndustryExpertise";
import { ArrowUpRight,  BarChart3 } from "lucide-react";
import {  TrendingUp, Star, CheckCircle2 } from "lucide-react";
import TrustClient from "@/components/sections/ClientTrust"

const features = [
  {
    icon: <Zap className="w-5 h-5 2xl:w-8 2xl:h-8" />,
    title: "Custom Design",
    desc: "We build websites that match your brand, business goals, and customer needs perfectly.",
  },
  {
    icon: <Star className="w-5 h-5 2xl:w-8 2xl:h-8" />,
    title: "Mobile-Friendly",
    desc: "Your website will work smoothly on mobiles, tablets, and desktops for better user experience.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 2xl:w-8 2xl:h-8" />,
    title: "Fast & Secure",
    desc: "We create fast-loading and secure websites that help improve performance and customer trust online.",
  },
  {
    icon: <TrendingUp className="w-5 h-5 2xl:w-8 2xl:h-8" />,
    title: "Ongoing Support",
    desc: "Our team provides reliable support, updates, and maintenance whenever you need help with your website.",
  },
];
const bentoProjects = [
  {
    id: "01",
    title: "SaaS Growth Engine",
    category: "Web Engineering",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600",
    size: "lg:col-span-2 h-[400px] 2xl:h-[600px]",
    metrics: "+180% Revenue Scale",
    tags: ["Next.js", "GraphQL", "AWS"]
  },
  {
    id: "02",
    title: "Analytics Dashboard",
    category: "Data Architecture",
    size: "lg:col-span-1 h-[400px] 2xl:h-[600px]",
    metrics: "Sub-Second Latency",
    tags: ["TypeScript", "Python", "Tailwind"],
    isTechCard: true
  },
  {
    id: "03",
    title: "Conversion Impact",
    category: "Optimization Pipeline",
    size: "lg:col-span-1 h-[400px] 2xl:h-[600px]",
    metrics: "4.2x Conversion Multiplier",
    tags: ["Technical SEO", "UI/UX"],
    isMetricCard: true
  },
  {
    id: "04",
    title: "Ecommerce Experience",
    category: "Headless Commerce",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1600",
    size: "lg:col-span-2 h-[400px] 2xl:h-[600px]",
    metrics: "Load Time < 400ms",
    tags: ["Shopify Hydrogen", "Sanity CMS"]
  }
];
import { Search, PenTool, Rocket, ShieldCheck,  } from "lucide-react";

const steps = [
  {
    id: "01",
    icon: <Search className="w-5 h-5 md:w-6 md:h-6 2xl:w-8 2xl:h-8" />,
    title: "Understanding Your Business",
    desc: "We discuss your goals, ideas, target audience, and website requirements to plan the right solution.",
  },
  {
    id: "02",
    icon: <PenTool className="w-5 h-5 md:w-6 md:h-6 2xl:w-8 2xl:h-8" />,
    title: "Planning & Design",
    desc: "Our team creates a clean, modern design layout that matches your brand and business style perfectly.",
  },
  {
    id: "03",
    icon: <Rocket className="w-5 h-5 md:w-6 md:h-6 2xl:w-8 2xl:h-8" />,
    title: "Website Development",
    desc: "We build your website with fast performance, a mobile-friendly design, and all the features you need.",
  },
  {
    id: "04",
    icon: <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 2xl:w-8 2xl:h-8" />,
    title: "Testing & Review",
    desc: "Before launch, we test everything carefully to make sure your website works smoothly on all devices.",
  },
  {
    id: "05",
    icon: <BarChart3 className="w-5 h-5 md:w-6 md:h-6 2xl:w-8 2xl:h-8" />,
    title: "Launch & Support",
    desc: "Once approved, we launch your website and provide ongoing support, updates, and maintenance when needed.",
  },
];
export default function WebDevPage() {
  return (
    <main className="bg-[#030712] text-white selection:bg-blue-600 overflow-x-hidden">

      {/* 🎯 SYNCED WEB DEVELOPMENT HERO SECTION: Formatted exactly on top of your verified About Us master framework */}
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
                <span className="text-[10px] font-black tracking-[4px] text-blue-300 uppercase">Engineering</span>
              </div>

              {/* Main Typography Block with Tight Line Height - Fixed Spelling "Development" */}
              <h1 className="text-[3rem]  md:text-[3.2rem] lg:text-[3.8rem]  font-black tracking-tighter leading-[0.8] text-white mb-8 normal-case">
                Website Development Agency
                {" "}
                <span className="uppercase bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text">
                  Agency.
                </span>
              </h1>

              {/* Description Paragraph - Aligned perfectly with global layout standards */}
              <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed max-w-xl 2xl:max-w-3xl mx-auto lg:mx-0 opacity-80">
                Professional website development agency delivering responsive, user-friendly, and high-performing websites that help businesses grow, attract customers, and increase online visibility.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* 🎯 SEAMLESS CENTERED CONTENT + LOGOS STRIP BOTTOM */}
      <section className="relative py-15 md:py-25 px-3 overflow-hidden bg-[#020617]">

        {/* Premium Ambient Glow centered right behind the layout */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-500/[0.03] blur-[150px] pointer-events-none z-0" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center">

            {/* 1. Mini Badge */}
            <div className="flex items-center gap-2 mb-6 bg-blue-500/10 w-fit px-3 py-1 rounded-full border border-blue-500/20">
              <span className="text-[10px] 2xl:text-xs font-black tracking-[3px] text-blue-300 uppercase">
                Digital Deployment
              </span>
            </div>

            {/* 2. Focused Main Heading */}
            <h3 className="text-[2.2rem]  md:text-[2.8rem] lg:text-[3.2rem] font-black leading-[1.1] tracking-tighter text-white mb-8 max-w-4xl">
              Experience  {" "}

              <span className="bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text ">
                Web Design & Development Services!
              </span>
            </h3>

            {/* 3. Perfectly Bounded Centered Paragraphs */}
            <div className="space-y-6 text-white-400 text-[16px] md:text-lg lg:text-xl font-normal leading-relaxed max-w-3xl mb-14">
              <p>
                Our web design and development services help businesses of all sizes build a commanding online presence with modern, intuitive, and easy-to-use websites. We engineer digital assets that look stunningly professional, load instantly, and perform smoothly across all device metrics.
              </p>
              <p>
                Our core team focuses heavily on understanding your strategic business goals, deploying customized structural frameworks that actively attract high-intent customers and fuel online scaling. From creative high-end designs to user-friendly UI layouts, every ecosystem is engineered to maximize visitor experience.
              </p>
              <div className="pt-2">
                <p className="text-white/90 font-semibold italic border-t border-b border-white/5 py-4 max-w-2xl mx-auto">
                  Whether you own a high-growth small business or a large-scale enterprise, we provide simple, reliable, and high-performance web solutions designed to anchor your long-term market success.
                </p>
              </div>
            </div>

            {/* 4. PICTURE BLOCK: Sitting exactly underneath the content with perfect width */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative w-full max-w-4xl py-6 px-4 md:px-8 rounded-[1rem] overflow-hidden border border-white/5 bg-[#070707]/40 backdrop-blur-sm shadow-2xl flex items-center justify-center"
            >
              {/* Soft edge fade overlays to make the graphic pop on dark theme */}
              <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#020617]/20 to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#020617]/20 to-transparent z-10 pointer-events-none" />

              <div className="relative w-full aspect-[8/1.5] md:aspect-[10/1.5]">
                <Image
                  src="/web-dev logos.jpg" // 🔥 Aapki logos strip ka image source path
                  alt="Supported Platforms Stack"
                  fill
                  priority
                  sizes="(max-w-4xl) 100vw, 100vw"
                  className="object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. CORE STACK - Updated with Exact Custom Core Services */}
      <section className="relative py-24 2xl:py-40 px-6 overflow-hidden bg-[#030303]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:32px_32px]" />
        </div>

        <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6 border-b border-white/5 pb-10">
            <div className="max-w">
              <div className="flex items-center gap-2 mb-3 bg-blue-500/10 w-fit px-3 py-1 rounded-full border border-blue-500/20">
                <Code size={12} className="text-blue-400" />
                <span className="text-[9px] 2xl:text-xs font-black tracking-[3px] text-blue-300 uppercase">Engineering Excellence</span>
              </div>
              <h3 className="text-[2.2rem] md:text-[2.8rem] lg:text-[3.2rem] font-black leading-[0.9] tracking-tighter text-white">
                All Kinds of  <span className="bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text ">Web Solutions We Offer.</span>
              </h3>
            </div>

          </div>

          {/* 🎯 Grid Wrapper mapped with the 6 requested core services */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 2xl:gap-10">
            {[
              { title: "Custom Website", desc: "Bespoke digital architecture built from scratch. High performance solutions tailored precisely to your functional scale.", icon: <Monitor size={24} /> },
              { title: "eCommerce Store", desc: "High-converting WooCommerce, Shopify, and specialized headless commerce systems built for heavy transaction volume.", icon: <ShoppingBag size={24} /> },
              { title: "Corporate Website", desc: "Enterprise-grade elite digital platforms designed to command market authority, speed, and seamless credibility.", icon: <Building2 size={24} /> },
              { title: "CMS Websites", desc: "Scalable content systems giving you complete modular control without compromising speed, layout, or structural security.", icon: <Database size={24} /> },
              { title: "Website Redesign", desc: "Transform legacy architectures into modern, ultra-fast interfaces optimized for maximum UX conversions and core web vitals.", icon: <RefreshCw size={24} /> },
              { title: "Maintenance & Support", desc: "Proactive server monitoring, dependency updates, and database tuning to keep your systems operational 24/7.", icon: <Wrench size={24} /> }
            ].map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group relative bg-[#070707] p-10 2xl:p-16 rounded-[2.5rem] border border-white/5 hover:border-blue-500/40 transition-all duration-500"
              >
                <div className="relative z-10">
                  <div className="mb-6 w-12 h-12 2xl:w-20 2xl:h-20 bg-white/[0.03] rounded-xl flex items-center justify-center border border-white/10 group-hover:bg-blue-600/20 group-hover:text-blue-400 group-hover:border-blue-500/50 transition-all duration-500">
                    {s.icon}
                  </div>
                  <h3 className="text-2xl 2xl:text-4xl font-black   mb-3 group-hover:text-blue-400 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-white-500 group-hover:text-white-300 text-[16px] md:text-base lg:text-[15px] 2xl:text-base 3xl:text-lg font-medium leading-relaxed max-w-xl 2xl:max-w-2xl opacity-90 transition-colors duration-300 antialiased">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Stats />

{/* portfolio section       */}
  <section className="relative py-16 md:py-20 2xl:py-32 bg-[#030303] text-white overflow-hidden select-none border-t border-white/5">
      
      {/* Background Glows */}
      <div className="absolute top-1/3 left-1/4 w-[600px] 2xl:w-[1000px] h-[600px] bg-blue-600/[0.02] blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl 2xl:max-w-[110rem] mx-auto px-6">

        {/* ⚡ HEADER BLOCK - Optimized with Important Modifiers */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 md:mb-10 2xl:mb-16 border-b border-white/5 pb-4 pt-0">
          
          {/* LEFT SIDE: Heading Adjusted For Small Laptops & Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-left"
          >
            <h3 className="!text-[2rem] sm:!text-4xl md:!text-4xl lg:!text-[2.5rem] xl:!text-[3rem]  font-black tracking-tighter leading-[1.1] lg:leading-none text-white">
              Featured 
                       {" "}
               <span className=" sm:inline bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Website Design Projects
                  </span>
            </h3>
              <p className=" mt-4 text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed  opacity-80">
We love helping businesses grow with websites that get results. Browse our recent projects to see how we can bring your ideas to life.              </p>
          </motion.div>

          {/* RIGHT SIDE: View All Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center shrink-0"
          >
            <Link
              href="/portfolio"
              className="flex items-center gap-3 md:gap-4 text-[10px] md:text-xs 2xl:text-[13px] uppercase tracking-[0.25em] font-black text-zinc-500 hover:text-white transition-all duration-500 group"
            >
              <span className="relative pb-1 transition-colors duration-500 group-hover:text-white">
                View All Projects
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 group-hover:w-full" />
              </span>
              
              <div className="w-10 h-10 md:w-11 md:h-11 2xl:w-14 2xl:h-14 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center relative overflow-hidden group-hover:border-blue-500/50 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <ArrowUpRight 
                  size={16} 
                  className="text-zinc-500 group-hover:text-white group-hover:rotate-45 group-hover:scale-110 transform transition-all duration-500 2xl:w-5 2xl:h-5" 
                />
              </div>
            </Link>
          </motion.div>
        </div>

        {/* 🎬 THE INTERACTIVE BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 2xl:gap-8 relative z-10">
          {bentoProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`group relative ${project.size} rounded-[2rem] 2xl:rounded-[4rem] p-8 2xl:p-14 border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent backdrop-blur-md flex flex-col justify-between overflow-hidden hover:border-blue-500/30 transition-all duration-500 cursor-pointer`}
            >
              {project.isTechCard ? (
                <>
                  <div className="w-12 h-12 2xl:w-20 2xl:h-20 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform duration-500">
                    <Cpu size={22} className="2xl:w-10 2xl:h-10" />
                  </div>
                  <div className="space-y-4 relative z-10">
                    <span className="text-[10px] 2xl:text-base uppercase tracking-[3px] text-zinc-500 font-bold block">{project.category}</span>
                    <span className="text-2xl 2xl:text-5xl font-black tracking-tight uppercase">{project.title}</span>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="px-3 2xl:px-6 py-1 2xl:py-3 rounded-full border border-white/5 bg-white/[0.02] text-[10px] 2xl:text-lg font-semibold text-zinc-400 group-hover:text-blue-400 transition-all">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              ) : project.isMetricCard ? (
                <>
                  <div className="w-12 h-12 2xl:w-20 2xl:h-20 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-500">
                    <BarChart3 size={22} className="2xl:w-10 2xl:h-10" />
                  </div>
                  <div className="space-y-2">
                    <span className="text-4xl 2xl:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">{project.metrics}</span>
                    <p className="text-xs 2xl:text-xl text-zinc-400 font-medium leading-relaxed">System parameters benchmarked via real-time testing.</p>
                  </div>
                  <div className="space-y-1 relative z-10">
                    <span className="text-[10px] 2xl:text-base uppercase tracking-[3px] text-zinc-500 font-bold block">{project.category}</span>
                    <span className="text-2xl 2xl:text-5xl font-black tracking-tight uppercase">{project.title}</span>
                  </div>
                </>
              ) : (
                <div className="absolute inset-0 w-full h-full">
                  <div className="absolute inset-0 w-full h-full opacity-40 group-hover:opacity-95 transition-all duration-500">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover filter grayscale contrast-110 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent opacity-90" />
                  </div>
                  <div className="absolute top-8 left-8 z-20">
                    <span className="px-3 py-1 rounded-full border border-white/10 bg-black/40 backdrop-blur-md text-[10px] 2xl:text-base font-bold text-gray-300 uppercase tracking-widest">
                      {project.id}
                    </span>
                  </div>
                  <div className="absolute bottom-8 left-8 right-8 z-20 space-y-2">
                    <span className="text-[10px] 2xl:text-base uppercase tracking-[3px] text-cyan-400 font-bold block">{project.category}</span>
                    <span className="text-2xl 2xl:text-5xl font-black tracking-tight uppercase">{project.title}</span>
                    <p className="text-[10px] 2xl:text-lg text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500">{project.metrics}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
<CTA />



{/* process section  */}
<section className="relative py-16 md:py-24 bg-[#020617] overflow-hidden selection:bg-blue-600/30">

      {/* 🌌 Luxury Background Elements */}
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:30px_30px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl 2xl:max-w-[85rem] mx-auto px-6">

        {/* 📋 HEADER */}
        <div className="mb-12 md:mb-16 pt-0 text-center">
          <h3 className="!text-[2.3rem] sm:!text-4xl md:!text-4xl lg:!text-[2.5rem] xl:!text-[3.2rem] font-black tracking-tighter leading-[1.1] lg:leading-[1] text-white normal-case">
            Our{" "}
            <span className=" mt-2 py-1 pr-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Website Development Process
            </span>
          </h3>
        </div>

        {/* 🧠 TIMELINE MATRIX */}
        <div className="relative">

          {/* Central Progress Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-blue-500/30 via-white/10 to-transparent -translate-x-1/2 hidden md:block" />

          {/* Cards Container */}
          <div className="flex flex-col gap-3 md:gap-6">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.id}
                  className={`relative flex flex-col md:flex-row items-start md:items-center justify-between w-full group ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* CARD CONTAINER */}
                  <div className="w-full md:w-[45%] pl-8 md:pl-0">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5 }}
                      className="relative p-6 md:p-8 2xl:p-12 rounded-[1.8rem] 2xl:rounded-[3rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl hover:bg-white/[0.04] hover:border-blue-500/30 transition-all duration-500"
                    >
                      {/* Floating Step Number */}
                      <div className="absolute -top-3 -right-3 w-10 h-10 2xl:w-16 2xl:h-16 rounded-full bg-[#030712] border border-white/10 flex items-center justify-center text-white font-mono text-[11px] 2xl:text-base font-bold group-hover:border-blue-500/50 transition-colors z-10 shadow-lg">
                        {step.id}
                      </div>

                      <div className="flex flex-col gap-4">
                        {/* Icon & Heading */}
                        <div className="flex items-center gap-4">
                          <div className="shrink-0 w-11 h-11 md:w-12 md:h-12 2xl:w-18 2xl:h-18 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
                            {step.icon}
                          </div>
                          <h4 className="text-xl md:text-2xl 2xl:text-4xl font-bold text-white tracking-tight">
                            {step.title}
                          </h4>
                        </div>

                        {/* Description Below */}
                        <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed max-w-xl 2xl:max-w-3xl mx-auto lg:mx-0 opacity-90 group-hover:opacity-100 transition-all duration-300">
                          {step.desc}
                        </p>
                      </div>

                      {/* Bottom Accent Line */}
                      <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 group-hover:w-[35%] transition-all duration-700" />
                    </motion.div>
                  </div>

                  {/* CENTRAL NODE */}
                  <div className="absolute left-4 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block">
                    <div className="w-5 h-5 2xl:w-10 2xl:h-10 rounded-full bg-[#020617] border border-white/10 flex items-center justify-center group-hover:border-blue-500 transition-all duration-500 group-hover:scale-110">
                      <div className="w-2 h-2 2xl:w-4 2xl:h-4 bg-zinc-700 rounded-full group-hover:bg-blue-400 transition-all" />
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block md:w-[45%]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
      <IndustryExpertise />
{/* Why Choose US  */}
<section className="relative py-16 md:py-24 2xl:py-32 bg-[#020617] overflow-hidden border-b border-white/5">
      
      {/* Background Dots & Glow */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none" 
        style={{ backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }} 
      />
      <div className="absolute top-1/4 -right-20 w-[400px] 2xl:w-[800px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[110rem] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 xl:gap-16 2xl:gap-24 items-center">

          {/* LEFT SIDE: Content */}
          <div className="lg:col-span-6 space-y-6 md:space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Heading synced with global font framework */}
              <h3 className="!text-[2.3rem]  md:!text-[2.8rem] lg:!text-[3.2rem]  font-black text-white tracking-tighter leading-[1.1] lg:leading-[1] mb-6">
                Why Hire Us For
                
                <span className="block mt-2 py-1 pr-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Your Next Website Project?
                </span>
              </h3>

              {/* Description Panel */}
              <div className="space-y-8 max-w-xl 2xl:max-w-3xl">
                {/* Paragraph 1 */}
                <p className="text-white text-sm md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed mx-auto lg:mx-0 opacity-90">
                  We create websites that not only look great but also help your business grow online. Our team focuses on clean design, fast performance, mobile responsiveness, and user-friendly experiences.
                </p>

                {/* Border Block Panels */}
                <div className="space-y-6 border-l-2 border-blue-500/50 pl-5 mt-6">
                  {/* Paragraph 2 */}
                  <p className="text-white text-sm md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed mx-auto lg:mx-0 opacity-90">
                    We work closely with every client to understand their goals and deliver websites that match their brand perfectly.
                  </p>

                  {/* Paragraph 3 */}
                  <p className="text-white text-sm md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed mx-auto lg:mx-0 opacity-90">
                    From planning and development to launch and support, we provide complete website solutions with honest communication, affordable pricing, and reliable service to ensure your project is completed smoothly and successfully.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Cards Grid */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 2xl:gap-10 relative">
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-blue-500/20 blur-[100px] rounded-full pointer-events-none" />

              {features.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative p-6 md:p-8 2xl:p-12 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl group transition-all duration-500 hover:border-blue-500/50 hover:bg-white/[0.07] flex flex-col justify-between
                    ${index % 2 !== 0 ? 'sm:translate-y-8 md:translate-y-10 2xl:translate-y-16' : ''}`} 
                >
                  <div className="relative z-10 space-y-4 md:space-y-5">
                    
                    {/* Icon & Heading Row */}
                    <div className="flex items-center gap-4">
                      <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 2xl:w-16 2xl:h-16 flex items-center justify-center rounded-xl bg-white/[0.05] text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
                        {item.icon}
                      </div>
                      
                      {/* Interactive Title Gradient */}
                      <h4 className="flex-1 font-black text-sm md:text-[15px] 2xl:text-xl tracking-[1px] uppercase leading-tight bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-500">
                        {item.title}
                      </h4>
                    </div>
                    
                    {/* Card Description */}
                    <p className="text-white text-sm md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed max-w-xl 2xl:max-w-3xl mx-auto lg:mx-0 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                      {item.desc}
                    </p>
                  </div>

                  {/* Hover Check Icon */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <CheckCircle2 className="text-blue-500 w-4 h-4 2xl:w-6 2xl:h-6" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>

      <Testimonials />
{/* Core experties  */}
    <section className="relative py-24 2xl:py-40 px-6 overflow-hidden bg-[#030303]">
      <div className="absolute inset-0 z-0 opacity-[0.02] bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:40px_40px]" />

      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center gap-2 mb-4 bg-blue-500/10 w-fit px-4 py-1.5 rounded-full border border-blue-500/20 mx-auto">
            <Terminal size={14} className="text-blue-400" />
            <span className="text-[10px] 2xl:text-xs font-black tracking-[4px]  text-blue-300">Strategic Content Engineering</span>
          </div>
          <h3 className="text-[2.2rem] md:text-[2.8rem] lg:text-[3.2rem] font-black leading-[0.85] tracking-tighter text-white mb-8">
            Our Expertise  In <span className="text-blue-600">Website Design.</span>
          </h3>
          <p className="text-white-400 font-normal text-xl md:text-2xl lg:text-[19px] 2xl:text-3xl 3xl:text-4xl  leading-tight max-w-3xl 2xl:max-w-5xl mx-auto antialiased tracking-wide">
            "We build websites that look great and actually work for your business. Our team focuses on clean layouts, easy navigation, and designs that match your brand to help you connect with customers."
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 2xl:gap-8">
          {[
            { 
              step: "01", 
              title: "WordPress Website", 
              keywords: "Speed Optimized, SEO Ready, Dynamic CMS", 
              desc: "We build easy-to-manage WordPress sites that load fast and rank well on Google, helping customers find your business online." 
            },
            { 
              step: "02", 
              title: "Shopify Website", 
              keywords: "E-Commerce Ops, High CRO, Secure Checkout", 
              desc: "We design high-converting Shopify stores that look great, simplify checkout, and turn everyday website visitors into paying customers." 
            },
            { 
              step: "03", 
              title: "Custom Website", 
              keywords: "Next.js / React, Custom Code, Clean Architecture", 
              desc: "We code unique websites from scratch, giving you tailored features, faster speeds, and complete freedom from standard templates." 
            },
            { 
              step: "04", 
              title: "Wix Website", 
              keywords: "Drag-and-Drop, Fast Launch, Mobile Responsive", 
              desc: "We create beautiful, fast-to-launch Wix sites with clean layouts, mobile-friendly designs, and simple tools you can update yourself." 
            }
          ].map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="group relative bg-[#080808] p-8 2xl:p-12 rounded-[3rem] border border-white/5 hover:border-blue-500/40 transition-all duration-500 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-10">
                <span className="text-5xl 2xl:text-7xl font-black text-white/5 group-hover:text-blue-600/20 italic">
                  {p.step}
                </span>
                <ChevronRight size={16} className="text-zinc-600 group-hover:text-blue-400" />
              </div>

              <div className="space-y-4 flex-grow">
                <h3 className="text-[16px] 2xl:text-4xl font-black uppercase italic text-white group-hover:text-blue-500 transition-colors">
                  {p.title}
                </h3>

                <div className="bg-blue-600/5 border border-blue-600/10 rounded-xl p-3 lg:p-4 2xl:p-5">
                  {/* Tech Specs Label */}
                  <p className="text-[16px] md:text-[11px] lg:text-xs 2xl:text-sm font-black text-blue-400 uppercase tracking-widest mb-1 italic antialiased leading-none">
                    Tech Stack Focus:
                  </p>

                  {/* Dynamic Keywords / Tech Specs Text */}
                  <p className="text-[16px] sm:text-xs md:text-sm lg:text-[15px] 2xl:text-base 3xl:text-lg text-zinc-400 font-medium leading-relaxed antialiased">
                    {p.keywords}
                  </p>
                </div>

                <p className="text-white-500 text-[16px] md:text-base lg:text-[15px] 2xl:text-base 3xl:text-lg font-medium leading-relaxed pt-2 max-w-xl 2xl:max-w-2xl antialiased">
                  {p.desc}
                </p>
              </div>

              <div className="mt-8 h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1.5, delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="h-full bg-blue-600/40"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

      <WebDevFAQ />
     <TrustClient />

    </main>
  );
}