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
import IndustryExpertise from "@/components/IndustryExpertise";
import { ArrowUpRight, BarChart3 } from "lucide-react";
import { TrendingUp, Star, CheckCircle2 } from "lucide-react";
import TrustClient from "@/components/sections/ClientTrust"
import ServiceCTA from "@/components/sections/ServiceCTA"
import ContentFAQ from "@/components/faqs/ContentFAQ";


// import EcommerceFAQ from "@/components/faq/EcommerceFAQ"


const features = [
  {
    icon: <Zap className="w-5 h-5 2xl:w-8 2xl:h-8" />,
    title: "Conversion-Focused Design",
    desc: "We don't just build beautiful storefronts; we build highly functional, fast-loading shopping experiences engineered to eliminate checkout friction and maximize your sales",
  },
  {
    icon: <Star className="w-5 h-5 2xl:w-8 2xl:h-8" />,
    title: "Complete Account Relief",
    desc: "From product uploads and inventory tracking to handling daily technical updates, we take the operational headaches off your plate so you can focus entirely on scaling",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 2xl:w-8 2xl:h-8" />,
    title: "Targeted Traffic Generation",
    desc: "We bypass generic marketing tactics to focus exclusively on high-intent keywords and laser-targeted social campaigns that connect your products with ready-to-buy customers",
  },
  {
    icon: <TrendingUp className="w-5 h-5 2xl:w-8 2xl:h-8" />,
    title: "Humanized Product Copy",
    desc: "Our copywriters write natural, accessible descriptions and ad creatives that avoid stiff, robotic phrasing, making your brand feel friendly, authentic, and genuinely trustworthy.",
  },
];

import { Search, PenTool, Rocket, ShieldCheck, } from "lucide-react";

const steps = [
  {
    id: "01",
    icon: <Search className="w-5 h-5 md:w-6 md:h-6 2xl:w-8 2xl:h-8" />,
    title: "Store Audit & Optimization",
    desc: "We analyze your website's user experience, loading speed, and checkout process to eliminate friction, ensuring casual browsers can navigate and buy effortlessly",
  },
  {
    id: "02",
    icon: <PenTool className="w-5 h-5 md:w-6 md:h-6 2xl:w-8 2xl:h-8" />,
    title: "Search & Visibility Blueprint",
    desc: "Our team maps out an e-commerce SEO strategy, optimizing your product pages and targeting high-intent keywords so buyers find your store first on Google.",
  },
  {
    id: "03",
    icon: <Rocket className="w-5 h-5 md:w-6 md:h-6 2xl:w-8 2xl:h-8" />,
    title: "High-ROI Campaign Launch",
    desc: "We deploy targeted social media ad campaigns across key platforms, using scroll-stopping creatives and precise audience data to drive immediate, profitable traffic",
  },
  {
    id: "04",
    icon: <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 2xl:w-8 2xl:h-8" />,
    title: " Retargeting & Retention Funnels",
    desc: "We set up smart automated email and SMS workflows to capture abandoned carts, re-engage past buyers, and maximize your customer lifetime value hands-free",
  },
  {
    id: "05",
    icon: <BarChart3 className="w-5 h-5 md:w-6 md:h-6 2xl:w-8 2xl:h-8" />,
    title: "Data Scaling & Optimization",
    desc: "We track conversion data, refine your ad spend, and continuously test your funnels to lower acquisition costs while predictably scaling your monthly revenue",
  },
];
export default function WebDevPage() {
  return (
    <main className="bg-[#030712] text-white selection:bg-blue-600 overflow-x-hidden">

      {/* 🎯 SYNCED ECOMMERCE HERO SECTION: Formatted exactly on top of your verified master framework */}
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

          {/* Full Sized Padded Content Wrapper - 🎯 FIXED: Aligned perfectly with your global framework layout */}
          <div className="relative z-10 w-full mx-auto text-center lg:text-left px-6 pt-32 pb-16 md:pt-20 md:pb-24 lg:max-w-full lg:pt-40 lg:pb-28 lg:pl-40 2xl:mx-0 2xl:max-w-[1500px] 2xl:pt-48 2xl:pb-36 2xl:pl-80 3xl:mx-0 3xl:max-w-[1800px] 3xl:pt-60 3xl:pb-44 3xl:pl-72">
            <div className="max-w-5xl">

              {/* Glassmorphism Badge Container */}
              {/* (If you have a badge code, paste it here) */}

              {/* Main Typography Block - 🎯 FIXED: Replicated the exact smooth response scaling and line-height */}
              <h1 className="text-[3rem] md:text-[3.2rem] lg:text-[3.8rem] 2xl:text-[5rem] font-black uppercase tracking-tighter leading-[1.1] lg:leading-[1.0] text-white mb-8">
                AI-Powered{" "}
                <span className="inline-block mt-2 bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text">
                  eCommerce Agency.
                </span>
              </h1>

              {/* Description Paragraph - Aligned perfectly with global layout standards */}
              <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed w-full max-w-3xl mx-auto lg:mx-0 opacity-80">
                Scale your online storefront with our data-driven e-commerce solutions. We build high-converting shopping experiences, optimize your product pipelines, and launch targeted marketing strategies that maximize your digital sales.
              </p>
            </div>
          </div>
        </div>
      </section>

      <>
        {/* 🎯 ABOUT SECTION */}
        <section className="relative pt-12 md:pt-20 2xl:pt-32 pb-4 bg-[#1E2939] overflow-hidden">

          {/* Background Glow */}
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
                    src="/ecommerce.webp"
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
                  <h2 className="text-[2.3rem]  md:text-[2.5rem] lg:text-[2.5rem] 2xl:text-[3.2rem] font-black tracking-tighter leading-[1] text-white">
                    We Help You Sell{" "}
                    {/* 🎯 FIX: 'block' use kiya aur 'py-2 pr-4' add kiya taake text aur gradient boundaries safe rahein */}
                    <span className=" mt-0 mb-2 py-1  text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                      Smarter With Our eCommerce Marketing
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
                  {/* Paragraph 1 */}
                  <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed max-w-xl 2xl:max-w-3xl mx-auto lg:mx-0 opacity-90">
                    Want to grow your online store without wasting money on empty clicks? Driving traffic to your website is great, but the real magic happens when those casual visitors actually hit the "buy" button. That is exactly where our data-driven e-commerce marketing comes in.
                  </p>

                  {/* Paragraph 2 */}
                  <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed max-w-xl 2xl:max-w-3xl mx-auto lg:mx-0 opacity-90">
                    We look closely at what your buyers want, helping you show up right when they are ready to shop. From setting up clear product pages to launching targeted social media ads, we make buying from your store completely effortless.
                  </p>

                  {/* Paragraph 3 */}
                  <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed max-w-xl 2xl:max-w-3xl mx-auto lg:mx-0 opacity-90 hidden md:block">
                    We optimize your entire sales funnel to increase your average order value while lowering your ad costs. Stop guessing with your marketing budget—let’s build a predictable sales engine that helps your brand grow month after month.
                  </p>

                  {/* Paragraph 4 */}

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


      </>

      {/* 2. CORE STACK - Web Solutions (Synced perfectly with SEO & Digital Marketing Hover Architecture) */}
      <section className="relative py-24 2xl:py-40 px-6 overflow-hidden bg-[#111827]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:32px_32px]" />
        </div>

        <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6 border-b border-white/5 pb-10">
            <div>
              <h3 className="text-[2.3rem] !case-normal md:text-[2.5rem] lg:text-[2.5rem] 2xl:text-[3.2rem] font-black leading-[1.2] tracking-tighter text-white">
                Our{" "}
                <span className="inline-block pb-1 pr-4 bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text">
                  eCommerce Management Services
                </span>
              </h3>
            </div>
          </div>

          {/* 🎯 Grid Wrapper mapped with the 6 requested core services */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 2xl:gap-10">
            {[
              { title: "eCommerce Development", desc: "We build fast, secure, and high-converting online storefronts optimized for a seamless customer shopping experience.", icon: <Monitor size={24} /> },
              { title: "eCommerce SEO", desc: "Rank higher on Google, drive free organic traffic, and connect with buyers searching for your products.", icon: <ShoppingBag size={24} /> },
              { title: "Social Media Ads", desc: "Launch high-ROI ad campaigns that capture immediate attention and scale your digital sales predictably", icon: <Building2 size={24} /> },
              { title: "Store Management", desc: "We handle daily operations, product uploads, and backend optimization to keep your storefront running flawlessly", icon: <Database size={24} /> },
              { title: "Inventory Management", desc: "Track stock levels accurately, streamline product pipelines, and prevent costly overstocking or missed sales.", icon: <RefreshCw size={24} /> },
              { title: "Customer Support", desc: "Keep buyers happy and loyal with responsive, friendly assistance that resolves inquiries and boosts reviews", icon: <Wrench size={24} /> }
            ].map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                // 🎯 FIXED: Style tag lagakar background color #0971A6 ko solid completely lock kar diya hai
                style={{ backgroundColor: "#0971A6" }}
                className="group relative p-10 2xl:p-16 rounded-[2.5rem] border border-white/10 hover:border-cyan-300/40 hover:shadow-[0_20px_50px_rgba(9,113,166,0.3)] transition-all duration-500 cursor-pointer h-full flex flex-col justify-between overflow-hidden"
              >
                {/* 🎯 EFFECTS LAYER 1: Tuned to soft white overlay to perfectly match the solid background color */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/5 via-white/[0.01] to-transparent translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out z-0 pointer-events-none" />

                {/* Foreground content inside relative z-10 for perfect layering */}
                <div className="relative z-10 flex flex-col h-full justify-between w-full">
                  <div>
                    {/* Icon aur Title Row Layout */}
                    <div className="flex items-center gap-5 mb-8">

                      {/* 🌀 FIXED ICON BOX: Hover se pehle subtle dark tint, hover ke baad clean white surface with 0971A6 text */}
                      <div
                        style={{ '--hover-color': '#0971A6' }}
                        className="shrink-0 w-12 h-12 2xl:w-16 2xl:h-16 rounded-xl bg-black/20 text-cyan-300 border border-white/5 group-hover:bg-white group-hover:text-[var(--hover-color)] group-hover:border-transparent scale-100 group-hover:scale-110 transition-all duration-500 shadow-sm flex items-center justify-center"
                      >
                        <div className="transition-colors duration-500">
                          {s.icon}
                        </div>
                      </div>

                      {/* Card Title text */}
                      <h4 className="font-black text-[1.0rem] sm:text-[1.2rem] lg:text-[1.2rem] 2xl:text-[1.5rem] text-white group-hover:text-cyan-200 transition-colors leading-tight tracking-tight">
                        {s.title}
                      </h4>
                    </div>

                    {/* Description Paragraph synced with global text sizing */}
                    <p className="text-white text-[15px] md:text-base lg:text-[15px] 2xl:text-[15px] font-medium leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300 antialiased !max-w-none">
                      {s.desc}
                    </p>
                  </div>
                </div>

                {/* 🎯 EFFECTS LAYER 2: Cyan matching line indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-cyan-300 shadow-[0_0_15px_#67e8f9] scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-500 ease-out z-20" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Stats />


      {/* CTA   */}
      <ServiceCTA />



      {/* process section  */}
      <section className="relative py-16 md:py-24 bg-[#1E2939] overflow-hidden selection:bg-blue-600/30">

        {/* 🌌 Luxury Background Elements */}
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:30px_30px] pointer-events-none" />

        <div className="relative z-10 max-w-6xl 2xl:max-w-[85rem] mx-auto px-6">

          {/* 📋 HEADER */}
          <div className="mb-12 md:mb-16 pt-0 text-center">
            <h3 className="text-[2.3rem]  md:text-[2.5rem] lg:text-[2.5rem] 2xl:text-[3.2rem] font-black tracking-tighter leading-[1.1] lg:leading-[1] text-white normal-case">
              Our{" "}
              <span className=" mt-2 py-1 pr-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                eCommerce Strategy For Success

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
                    className={`relative flex flex-col md:flex-row items-start md:items-center justify-between w-full group ${isEven ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                  >
                  {/* CARD CONTAINER */}
<div className="w-full md:w-[45%] pl-8 md:pl-0">
  <motion.div
    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5 }}
    // 🎯 FIXED: Solid background flavor lagaya hai jo dynamic layout ke sath clear dikhega
    style={{ backgroundColor: "#0971A6" }}
    className="relative p-6 md:p-8 2xl:p-12 rounded-[1.8rem] 2xl:rounded-[3rem] border border-white/10 group transition-all duration-500 hover:border-cyan-300/40 hover:shadow-[0_20px_50px_rgba(9,113,166,0.3)]"
  >
    {/* 🌀 FLOATING STEP NUMBER BADGE: Safe cross-platform custom variable line styling */}
    <div 
style={{ '--hover-color': '#0971A6' }}
      className="absolute -top-3 -right-3 w-10 h-10 2xl:w-16 2xl:h-16 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-white font-mono text-[11px] 2xl:text-base font-bold group-hover:bg-white group-hover:text-[var(--hover-color)] group-hover:border-transparent transition-all duration-500 z-10 shadow-lg"
    >
      {step.id}
    </div>

    <div className="flex flex-col gap-4">
      {/* Icon & Heading */}
      <div className="flex items-center gap-4">
        {/* 🌀 FIXED ICON BOX: Safe style property for type verification */}
        <div 
style={{ '--hover-color': '#0971A6' }}
          className="shrink-0 w-11 h-11 md:w-12 md:h-12 2xl:w-18 2xl:h-18 rounded-xl bg-black/20 text-cyan-300 border border-white/5 group-hover:bg-white group-hover:text-[var(--hover-color)] group-hover:border-transparent transition-all duration-500 shadow-sm flex items-center justify-center"
        >
          {step.icon}
        </div>
        
        <h4 className="font-block text-[1.0rem] sm:text-[1.2rem] lg:text-[1.2rem] 2xl:text-[1.5rem] text-white tracking-tight">
          {step.title}
        </h4>
      </div>

      {/* Description Below */}
      <p className="text-white text-[15px] md:text-base lg:text-[15px] 2xl:text-[15px] font-medium leading-relaxed max-w-xl 2xl:max-w-3xl mx-auto lg:mx-0 opacity-90 group-hover:opacity-100 transition-all duration-300">
        {step.desc}
      </p>
    </div>

    {/* Bottom Accent Line */}
    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-300 group-hover:w-[35%] transition-all duration-700" />
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



      {/* Core expertise - Website Design Services (Perfect Hover Sync) */}
      <section className="relative py-24 2xl:py-40 px-6 overflow-hidden bg-[#111827]">
        <div className="absolute inset-0 z-0 opacity-[0.02] bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:40px_40px]" />

        <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto relative z-10">
          <div className="text-center mb-20">
            <h3 className="text-[2.3rem] !case-normal md:text-[2.5rem] lg:text-[2.5rem] 2xl:text-[3.2rem] font-black leading-[1.2] tracking-tighter text-white">
              We Offer  {" "}
              <span className="inline-block pb-1 pr-4 bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text">
                Multiple eCommerce Account Managment Services
              </span>
            </h3>

            {/* <p className="mt-4 text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-tight max-w-3xl 2xl:max-w-5xl mx-auto antialiased tracking-wide">
              We build websites that look great and actually work for your business. Our team focuses on clean layouts, easy navigation, and designs that match your brand to help you connect with customers.
            </p> */}
          </div>

         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 2xl:gap-8">
  {[
    {
      step: "01",
      title: "Amazon",
      keywords: "Speed Optimized, SEO Ready, Dynamic CMS",
      desc: "Dominating the world's largest marketplace with expert product listing optimization and high-converting PPC ad campaigns"
    },
    {
      step: "02",
      title: "eBay",
      keywords: "E-Commerce Ops, High CRO, Secure Checkout",
      desc: "Maximizing your sales through strategic multi-channel product listings, store branding, and daily marketplace management"
    },
    {
      step: "03",
      title: "Shopify",
      keywords: "Next.js / React, Custom Code, Clean Architecture",
      desc: "Building and scaling a beautiful, dedicated storefront optimized for seamless customer checkouts and high conversions"
    },
    {
      step: "04",
      title: "TikTok Shop",
      keywords: "Drag-and-Drop, Fast Launch, Mobile Responsive",
      desc: "Driving massive impulse purchases directly through trending, native video content and seamless in-app shopping experiences"
    }
  ].map((p, i) => (
    <motion.div
      key={i}
      whileHover={{ y: -10 }} // 🎯 Signature elevation lift
      // 🎯 FIXED: Solid background #0971A6 completely locked 
      style={{ backgroundColor: "#0971A6" }}
      className="group relative p-8 2xl:p-8 rounded-[3rem] border border-white/10 hover:border-cyan-300/40 hover:shadow-[0_20px_50px_rgba(9,113,166,0.3)] transition-all duration-500 flex flex-col h-full overflow-hidden cursor-pointer"
    >
      {/* 🎯 EFFECTS LAYER 1: Tuned to soft white overlay to match the solid background color */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/5 via-white/[0.01] to-transparent translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out z-0 pointer-events-none" />

      {/* 🎯 Header Container Row */}
      <div className="relative w-full mb-2 min-h-[70px] flex items-start justify-between z-10">

        {/* Step Number Background Effect */}
        <span className="absolute left-0 -top-6 text-6xl 2xl:text-8xl font-black text-black/10 group-hover:text-cyan-300/15 select-none pointer-events-none z-0 transition-colors duration-500">
          {p.step}
        </span>

        {/* Title Header */}
        <div className="space-y-2 flex-grow relative z-10 pt-6">
          <h3 className="font-block text-[1.0rem] sm:text-[1.2rem] lg:text-[1.3rem] 2xl:text-[1.5rem] text-white group-hover:text-cyan-200 transition-colors leading-tight">
            {p.title}
          </h3>
        </div>

        {/* Chevron Right Icon */}
        <div className="relative z-10 pt-5 pl-4 shrink-0">
          <ChevronRight size={16} className="text-white/40 group-hover:text-cyan-300 transition-colors" />
        </div>
      </div>

      {/* Content Body Block */}
      <div className="space-y-2 flex-grow relative z-10">
        {/* Description Paragraph */}
        <p className="text-white text-[15px] md:text-base lg:text-[15px] 2xl:text-[15px] font-medium leading-relaxed max-w-xl 2xl:max-w-2xl antialiased opacity-90 group-hover:opacity-100 transition-opacity duration-300">
          {p.desc}
        </p>
      </div>

      {/* Progress Bar Loader */}
      <div className="mt-4 h-1 w-full bg-black/20 rounded-full overflow-hidden subpixel-antialiased relative z-10">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1.5, delay: i * 0.2 }}
          viewport={{ once: true }}
          className="h-full bg-cyan-300/60"
        />
      </div>

      {/* 🎯 EFFECTS LAYER 2: Laser Bottom Edge Glow Line (Center Expand Effect) */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-cyan-300 shadow-[0_0_15px_#67e8f9] scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-500 ease-out z-20" />
    </motion.div>
  ))}
</div>
        </div>
      </section>


    {/* Why Choose US */}
<section className="relative py-16 md:py-24 2xl:py-32 bg-[#1E2939] overflow-hidden border-b border-white/5">

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
          <h3 className="text-[2.3rem] md:text-[2.5rem] lg:text-[2.5rem] 2xl:text-[3.2rem] font-black text-white tracking-tighter leading-[1.1] lg:leading-[1] mb-6">
            Why Choose{" "}
            <span className="block mt-2 py-1 pr-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              eCommerce Marketing Agency?
            </span>
          </h3>

          {/* Description Panel */}
          <div className="space-y-4 max-w-xl 2xl:max-w-3xl">
            {/* Paragraph 1 */}
            <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl font-medium leading-relaxed mx-auto lg:mx-0 opacity-90">
              We know that running a successful online storefront requires much more than just a beautiful website. Our agency focuses entirely on the metrics that actually impact your bottom line: lowering your customer acquisition costs, recovering abandoned carts, and increasing your average order value.
            </p>

            {/* Paragraph 2 */}
            <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl font-medium leading-relaxed mx-auto lg:mx-0 opacity-90">
              Instead of relying on generic marketing tricks, we build custom sales funnels that align perfectly with how your specific audience prefers to shop.
            </p>

            {/* Paragraph 3 */}
            <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl font-medium leading-relaxed mx-auto lg:mx-0 opacity-90">
              From technical product page optimization to laser-targeted advertising, we handle the day-to-day data analysis and optimization.
            </p>
            <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl font-medium leading-relaxed mx-auto lg:mx-0 opacity-90">
              Partner with us to take the guesswork out of your digital growth and build a scalable retail brand.
            </p>
          </div>
        </motion.div>
      </div>

      {/* RIGHT SIDE: Cards Grid */}
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

                {/* Icon & Heading Row */}
                <div className="flex items-center gap-4">

                  {/* 🌀 FIXED ICON BOX: Saare custom variables aur TypeScript assertions completely clean kar diye hain */}
                  <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 2xl:w-16 2xl:h-16 flex items-center justify-center rounded-xl bg-black/20 text-cyan-300 border border-white/5 group-hover:bg-white group-hover:text-[#0971A6] group-hover:border-transparent transition-all duration-500 shadow-sm">
                    {item.icon}
                  </div>

                  {/* Title Text */}
                  <h4 className="flex-1 font-block text-[1.0rem] sm:text-[1.2rem] lg:text-[1.2rem] 2xl:text-[1.5rem] leading-tight text-white group-hover:text-cyan-200 transition-colors duration-500">
                    {item.title}
                  </h4>
                </div>

                {/* Card Description */}
                <p className="text-white text-[15px] md:text-base lg:text-[15px] 2xl:text-[15px] font-medium leading-relaxed max-w-xl 2xl:max-w-3xl mx-auto lg:mx-0 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                  {item.desc}
                </p>
              </div>

              {/* Hover Check Icon */}
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
      {/* Core experties  */}
      {/* <EcommerceFAQ /> */}
      <ContentFAQ />
      <TrustClient />

    </main>
  );
}