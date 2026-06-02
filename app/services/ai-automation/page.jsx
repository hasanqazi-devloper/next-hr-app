"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles, Layout, Flame, Cpu, ShoppingBag,
  Database, Layers, Zap, Code, Terminal, ChevronRight, Monitor, Building2, RefreshCw, Wrench
} from "lucide-react";

{/* 🎯 FIXED IMPORT ERROR: Added both missing icons safely */ }
import { ArrowRight } from "lucide-react";


import Image from "next/image";
// Components Imports
import Stats from "@/components/sections/Stats";
import CTA from "@/components/sections/CTA";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Process from "@/components/sections/HowWeWork";
import Testimonials from "@/components/sections/Testimonials";
import Portfolio from "@/components/sections/PortfolioPreview";
import AiFAQ from "@/components/faqs/AiFAQ";
import IndustryExpertise from "@/components/IndustryExpertise";
import { ArrowUpRight, BarChart3 } from "lucide-react";
import { TrendingUp, Star, CheckCircle2 } from "lucide-react";
import TrustClient from "@/components/sections/ClientTrust"
import ServiceCTA from "@/components/sections/ServiceCTA"


const features = [
  {
    icon: <Zap className="w-5 h-5 2xl:w-8 2xl:h-8" />,
    title: "Proven ROI Focus",
    desc: "We don't deploy technology just for the sake of trends; we focus exclusively on automations that cut operational costs, capture lost leads, and directly scale your bottom line",
  },
  {
    icon: <Star className="w-5 h-5 2xl:w-8 2xl:h-8" />,
    title: "Seamless Tech Integration",
    desc: "Our team builds custom solutions designed to plug directly into your existing WordPress site, CRM, and daily tools without disrupting your current business workflows",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 2xl:w-8 2xl:h-8" />,
    title: "No Robotic Wording",
    desc: "We specialize in creating conversational AI and chatbots that interact naturally, keeping your brand voice accessible, friendly, and completely authentic to your audience",
  },
  {
    icon: <TrendingUp className="w-5 h-5 2xl:w-8 2xl:h-8" />,
    title: "Dedicated Post-Launch Support",
    desc: "Automation isn't a one-time project. We stick around after deployment to monitor data pipelines, fix bottlenecks, and optimize your systems as your business grows.",
  },
];

import { Search, PenTool, Rocket, ShieldCheck, } from "lucide-react";

const steps = [
  {
    id: "01",
    icon: <Search className="w-5 h-5 md:w-6 md:h-6 2xl:w-8 2xl:h-8" />,
    title: "Discovery & Analysis",
    desc: "We dive deep into your current workflows to identify time-draining manual tasks, operational bottlenecks, and hidden revenue leaks that are slowing down your business growth",
  },
  {
    id: "02",
    icon: <PenTool className="w-5 h-5 md:w-6 md:h-6 2xl:w-8 2xl:h-8" />,
    title: "Strategic Blueprinting",
    desc: "Our team designs a tailored automation roadmap, mapping out exactly how smart systems, data pipelines, and intelligent tools will integrate into your existing tech stack",
  },
  {
    id: "03",
    icon: <Rocket className="w-5 h-5 md:w-6 md:h-6 2xl:w-8 2xl:h-8" />,
    title: "Custom Development",
    desc: "We build and configure your automated workflows, connecting your systems, setting up smart triggers, and engineering conversational tools to handle your heavy lifting",
  },
  {
    id: "04",
    icon: <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 2xl:w-8 2xl:h-8" />,
    title: "Testing & Deployment",
    desc: "Before going live, we rigorously test every pathway to ensure data flows flawlessly. Once perfected, we launch the systems smoothly with zero disruption to your daily operations",
  },
  {
    id: "05",
    icon: <BarChart3 className="w-5 h-5 md:w-6 md:h-6 2xl:w-8 2xl:h-8" />,
    title: "Optimization & Growth",
    desc: "We continuously monitor performance, analyze real-world data, and refine your automations, ensuring your pipelines remain highly efficient, secure, and ready to scale alongside your business",
  },
];
export default function WebDevPage() {
  return (
  <main className="bg-[#030712] text-white selection:bg-blue-600 overflow-x-hidden">

  {/* 🎯 SYNCED WEB DEVELOPMENT HERO SECTION */}
  <section className="relative w-full overflow-hidden bg-[#030712]">
    <div className="container-wide">

      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <Image
          src="/home-hero.jpg"
          alt="Mesh Grid"
          fill
          sizes="100vw"
          priority 
          className="object-cover object-top opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030712]/40 to-[#030712]" />
      </div>

      {/* Ambient Blur Dot */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/[0.05] blur-[120px] pointer-events-none" />

      {/* Content Wrapper */}
                <div className="relative z-10 w-full mx-auto text-center lg:text-left px-6 pt-32 pb-16 md:pt-20 md:pb-24 lg:max-w-full lg:pt-40 lg:pb-28 lg:pl-40 2xl:mx-0 2xl:max-w-[1500px] 2xl:pt-48 2xl:pb-36 2xl:pl-80 3xl:mx-0 3xl:max-w-[1800px] 3xl:pt-60 3xl:pb-44 3xl:pl-72">

        <div className="max-w-5xl">
          <h1 className="text-[3rem] md:text-[3.2rem] lg:text-[3.8rem] 2xl:text-[5rem] font-black uppercase tracking-tighter leading-[1.1] lg:leading-[1.0] text-white mb-8">
            AI Automation{" "}
            <span className="inline-block mt-2 bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text">
              Agency.
            </span>
          </h1>

          <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed w-full max-w-3xl mx-auto lg:mx-0 opacity-80">
            Streamline your workflows and maximize efficiency with our custom AI automation services. We integrate intelligent systems into your business operations to eliminate manual tasks and accelerate predictable growth.
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* 🎯 ABOUT SECTION */}
  <section className="relative pt-12 md:pt-20 2xl:pt-32 pb-4 bg-[#1E2939] overflow-hidden">
    <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] md:w-[600px] h-[200px] bg-blue-600/[0.04] blur-[120px] pointer-events-none" />

    <div className="max-w-7xl 2xl:max-w-[110rem] mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

        {/* LEFT: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex items-center justify-center lg:justify-start order-2 lg:order-1"
        >
          <div className="absolute w-[50%] h-[50%] bg-blue-600/[0.05] blur-[80px] rounded-full" />
          <div className="relative z-10 w-full max-w-[320px] md:max-w-[490px] 2xl:max-w-[650px]">
            <Image
              src="/ai.webp"
              alt="High Rise Digital - Leading Global Agency"
              width={700}
              height={700}
              className="w-full h-auto object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </motion.div>

        {/* RIGHT: Text Content */}
        <div className="space-y-6 md:space-y-6 order-1 lg:order-2">
          <div>
            <h2 className="text-[2.3rem] md:text-[2.5rem] lg:text-[2.5rem] 2xl:text-[3.2rem] font-black tracking-tighter leading-[1] text-white">
              AI-Powered Solutions{" "}
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                To Scale Revenue
              </span>
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl font-medium leading-relaxed max-w-xl 2xl:max-w-3xl mx-auto lg:mx-0 opacity-90">
              Let’s be honest: scaling a business manually is exhausting. There are only so many hours in a day, and your team shouldn't spend them drowning in repetitive tasks.
            </p>

            <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl font-medium leading-relaxed max-w-xl 2xl:max-w-3xl mx-auto lg:mx-0 opacity-90">
              That is where intelligent AI automation steps in. By plugging smart systems into your daily workflows, you can automatically capture leads, nurture customer relationships, and close sales around the clock.
            </p>

            <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl font-medium leading-relaxed max-w-xl 2xl:max-w-3xl mx-auto lg:mx-0 opacity-90 hidden md:block">
              Think of AI as your ultimate backend engine. It analyzes buying patterns to predict what your customers want next, optimizes your marketing campaigns instantly, and ensures no valuable lead ever slips through the cracks.
            </p>
          </motion.div>

          {/* Buttons Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center gap-6 pt-4"
          >
            <Link href="/contact">
              <button className="group relative overflow-hidden px-8 2xl:px-10 h-[48px] 2xl:h-[56px] rounded-full bg-white text-black font-black text-[11px] 2xl:text-[13px] uppercase tracking-widest transition-all duration-500 flex items-center gap-2 active:scale-95 shadow-lg">
                <div className="absolute inset-0 w-0 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 ease-out group-hover:w-full" />
                <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-500">
                  Get Quote <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </Link>

            <Link
              href="/services"
              className="group flex items-center gap-2 text-zinc-400 hover:text-white font-bold text-[11px] 2xl:text-[13px] uppercase tracking-[2px] transition-colors duration-300"
            >
              View Services
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  </section>

  {/* 🎯 CORE STACK - AI Services Section */}
  <section className="relative py-24 2xl:py-40 px-6 overflow-hidden bg-[#111827]">
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:32px_32px]" />
    </div>

    <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto relative z-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6 border-b border-white/5 pb-10">
        <div>
          <h3 className="text-[2.3rem] md:text-[2.5rem] lg:text-[2.5rem] 2xl:text-[3.2rem] font-black leading-[1.2] tracking-tighter text-white">
            Our{" "}
            <span className="inline-block pb-1 pr-4 bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text">
              AI Automation Services
            </span>
          </h3>
        </div>
      </div>

      {/* Grid Wrapper */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 2xl:gap-10">
        {[
          { title: "AI Workflow Automation", desc: "Eliminate repetitive manual tasks and streamline operations with intelligent, automated systems built for scale.", icon: <Monitor size={24} /> },
          { title: "AI Marketing Automation", desc: "Nurture leads and optimize campaigns around the clock using data-driven, automated marketing funnels.", icon: <ShoppingBag size={24} /> },
          { title: "AI-Powered CRM Integration", desc: "Keep client data accurate and sync relationships seamlessly with smart, automated pipeline management.", icon: <Building2 size={24} /> },
          { title: "Business Growth Automation", desc: "Scale your operations and maximize revenue hands-free by automating critical backend business pipelines.", icon: <Database size={24} /> },
          { title: "Chatbot Automation", desc: "Engage visitors and capture hot leads instantly with smart, conversational artificial intelligence assistants.", icon: <RefreshCw size={24} /> },
          { title: "AI Consulting", desc: "Get tailored strategies and expert guidance to seamlessly integrate smart automation into your business.", icon: <Wrench size={24} /> }
        ].map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }} 
            style={{ backgroundColor: "#0971A6" }}
            className="group relative p-8 2xl:p-8 rounded-[3rem] border border-white/10 hover:border-cyan-300/40 hover:shadow-[0_20px_50px_rgba(9,113,166,0.3)] transition-all duration-500 flex flex-col h-full overflow-hidden cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-white/5 via-white/[0.01] to-transparent translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out z-0 pointer-events-none" />
          
            {/* Header Container Row */}
            <div className="relative w-full mb-2 min-h-[70px] flex items-start justify-between z-10">
              {/* 🌀 FIXED WATERMARK: Tied safely with loop index value */}
              <span className="absolute left-0 -top-6 text-6xl 2xl:text-8xl font-black text-black/15 group-hover:text-black/30 select-none pointer-events-none z-0 transition-colors duration-500">
                0{i + 1}
              </span>
          
              {/* Title Header */}
              <div className="space-y-2 flex-grow relative z-10 pt-6">
                <h3 className="font-block text-[1.0rem] sm:text-[1.2rem] lg:text-[1.3rem] 2xl:text-[1.5rem] text-white group-hover:text-cyan-200 transition-colors leading-tight">
                  {s.title}
                </h3>
              </div>
          
              {/* Chevron Right Icon */}
              <div className="relative z-10 pt-5 pl-4 shrink-0">
                <ChevronRight size={16} className="text-white/60 group-hover:text-cyan-200 transition-colors transform group-hover:translate-x-1 duration-300" />
              </div>
            </div>
          
            {/* Content Body Block */}
            <div className="space-y-2 flex-grow relative z-10">
              <p className="text-white text-[15px] md:text-base lg:text-[15px] 2xl:text-[15px] font-medium leading-relaxed max-w-xl 2xl:max-w-2xl antialiased opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                {s.desc}
              </p>
            </div>
          
            {/* PROGRESS BAR LOADER */}
            <div className="mt-4 h-1 w-full bg-black/20 rounded-full overflow-hidden subpixel-antialiased relative z-10">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1.5, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="h-full bg-cyan-300 shadow-[0_0_8px_#67e8f9]"
              />
            </div>
          
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-cyan-300 shadow-[0_0_15px_#67e8f9] scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-500 ease-out z-20" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>

  <Stats />
  <ServiceCTA />

  {/* 🎯 WORKING PROCESS TIMELINE SECTION */}
  <section className="relative py-16 md:py-24 bg-[#1E2939] overflow-hidden selection:bg-blue-600/30">
    <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:30px_30px] pointer-events-none" />

    <div className="relative z-10 max-w-6xl 2xl:max-w-[85rem] mx-auto px-6">
      <div className="mb-12 md:mb-16 pt-0 text-center">
        <h3 className="text-[2.3rem] md:text-[2.5rem] lg:text-[2.5rem] 2xl:text-[3.2rem] font-black tracking-tighter leading-[1.1] lg:leading-[1] text-white normal-case">
          Our{" "}
          <span className="mt-2 py-1 pr-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Working Process
          </span>
        </h3>
      </div>

      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-blue-500/30 via-white/10 to-transparent -translate-x-1/2 hidden md:block" />

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
                    style={{ backgroundColor: "#0971A6" }}
                    className="relative p-6 md:p-8 2xl:p-12 rounded-[1.8rem] 2xl:rounded-[3rem] border border-white/10 group transition-all duration-500 hover:border-cyan-300/40 hover:shadow-[0_20px_50px_rgba(9,113,166,0.3)]"
                  >
                    <div className="absolute -top-3 -right-3 w-10 h-10 2xl:w-16 2xl:h-16 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-white font-mono text-[11px] 2xl:text-base font-bold group-hover:bg-white group-hover:text-[#0971A6] group-hover:border-transparent transition-all duration-500 z-10 shadow-lg">
                      {step.id}
                    </div>
                
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-4">
                        <div className="shrink-0 w-11 h-11 md:w-12 md:h-12 2xl:w-18 2xl:h-18 rounded-xl bg-black/20 text-cyan-300 border border-white/5 group-hover:bg-white group-hover:text-[#0971A6] group-hover:border-transparent transition-all duration-500 shadow-sm flex items-center justify-center">
                          {step.icon}
                        </div>
                        <h4 className="font-block text-[1.0rem] sm:text-[1.2rem] lg:text-[1.2rem] 2xl:text-[1.5rem] text-white group-hover:text-cyan-200 transition-colors duration-300 tracking-tight">
                          {step.title}
                        </h4>
                      </div>
                
                      <p className="text-white text-[15px] md:text-base lg:text-[15px] 2xl:text-[15px] font-medium leading-relaxed max-w-xl 2xl:max-w-3xl mx-auto lg:mx-0 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                        {step.desc}
                      </p>
                    </div>
                
                    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-300 shadow-[0_0_10px_#67e8f9] group-hover:w-[35%] transition-all duration-700" />
                  </motion.div>
                </div>

                {/* CENTRAL NODE */}
                <div className="absolute left-4 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block">
                  <div className="w-5 h-5 2xl:w-10 2xl:h-10 rounded-full bg-[#020617] border border-white/10 flex items-center justify-center group-hover:border-cyan-400 transition-all duration-500 group-hover:scale-110">
                    <div className="w-2 h-2 2xl:w-4 2xl:h-4 bg-zinc-700 rounded-full group-hover:bg-cyan-300 transition-all" />
                  </div>
                </div>

                <div className="hidden md:block md:w-[45%]" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>

  <IndustryExpertise />

  {/* 🎯 WHY CHOOSE US SECTION */}
  <section className="relative py-16 md:py-24 2xl:py-32 bg-[#111827] overflow-hidden border-b border-white/5">
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
            <h3 className="text-[2.3rem] md:text-[2.5rem] lg:text-[2.5rem] 2xl:text-[3.2rem] font-black text-white tracking-tighter leading-[1.1] lg:leading-[1] mb-6">
              Why Choose Our{" "}
              <span className="block mt-2 py-1 pr-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                AI Automation Agency?
              </span>
            </h3>

            <div className="space-y-4 max-w-xl 2xl:max-w-3xl">
              <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl font-medium leading-relaxed mx-auto lg:mx-0 opacity-90">
                We don’t believe in generic, cookie-cutter tech solutions that just complicate your daily operations.
              </p>
              <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl font-medium leading-relaxed mx-auto lg:mx-0 opacity-90">
                Our agency focuses on building practical, human-centered AI systems that plug smoothly into your current setup to deliver real, measurable business results.
              </p>
              <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl font-medium leading-relaxed mx-auto lg:mx-0 opacity-90">
                We take the time to deeply understand your unique bottlenecks, engineering custom automated workflows that save your team hours of manual work and plug hidden revenue leaks.
              </p>
              <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl font-medium leading-relaxed mx-auto lg:mx-0 opacity-90">
                Partner with us to cut out the operational noise, optimize your budget, and turn smart automation into your ultimate growth engine.
              </p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT SIDE: Cards Grid - 🎯 STRUCTURALLY LOCKED INSIDE THE GRID */}
        <div className="lg:col-span-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 2xl:gap-10 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ backgroundColor: "#0971A6" }}
                className={`relative p-6 md:p-8 2xl:p-12 rounded-3xl border border-white/10 group transition-all duration-500 hover:border-cyan-300/40 hover:shadow-[0_20px_50px_rgba(9,113,166,0.3)] flex flex-col justify-between
                ${index % 2 !== 0 ? 'sm:translate-y-8 md:translate-y-10 2xl:translate-y-16' : ''}`}
              >
                <div className="relative z-10 space-y-4 md:space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 2xl:w-16 2xl:h-16 flex items-center justify-center rounded-xl bg-black/20 text-cyan-300 border border-white/5 group-hover:bg-white group-hover:text-[#0971A6] group-hover:border-transparent transition-all duration-500 shadow-sm">
                      {item.icon}
                    </div>
                    <h4 className="flex-1 font-block text-[1.0rem] sm:text-[1.2rem] lg:text-[1.2rem] 2xl:text-[1.5rem] leading-tight text-white group-hover:text-cyan-200 transition-colors duration-500">
                      {item.title}
                    </h4>
                  </div>

                  <p className="text-white text-[15px] md:text-base lg:text-[15px] 2xl:text-[15px] font-medium leading-relaxed max-w-xl 2xl:max-w-3xl mx-auto lg:mx-0 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                    {item.desc}
                  </p>
                </div>

                <div className="absolute top-4 right-4 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                  <CheckCircle2 className="text-cyan-300 w-4 h-4 2xl:w-6 2xl:h-6" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  </section>

  <Testimonials />
  <AiFAQ />
  <TrustClient />

</main>
  );
}