"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Search, PenTool, Rocket, ShieldCheck } from "lucide-react";
import { Star, CheckCircle2 } from "lucide-react";

const features = [
    {
        icon: <Zap className="w-5 h-5 2xl:w-8 2xl:h-8" />,
        title: "Data-Driven Strategies",
        desc: "We analyze market trends and audience insights to build campaigns based on hard facts, ensuring every decision is optimized for performance and growth.",
    },
    {
        icon: <Star className="w-5 h-5 2xl:w-8 2xl:h-8" />,
        title: "Scroll-Stopping Creatives",
        desc: "Our designers craft high-impact, engaging visuals and video content tailored to each platform, capturing your target audience's attention instantly.",
    },
    {
        icon: <ShieldCheck className="w-5 h-5 2xl:w-8 2xl:h-8" />,
        title: "Continuous Optimization",
        desc: "We constantly test, monitor, and refine your ads to improve performance, lowering your acquisition costs while maximizing your total return on investment.",
    },
    {
        icon: <TrendingUp className="w-5 h-5 2xl:w-8 2xl:h-8" />,
        title: "Transparent Reporting",
        desc: "Stay fully informed with clear, honest performance dashboards and regular updates that show you exactly where your budget goes and what it delivers.",
    },
];
const steps = [
    {
        id: "01",
        icon: <Search className="w-5 h-5 md:w-6 md:h-6 2xl:w-8 2xl:h-8" />,
        title: "Research & Planning",
        desc: "We understand your business goals, audience, and competitors to create the right marketing strategy.",
    },
    {
        id: "02",
        title: "Strategy Development",
        icon: <PenTool className="w-5 h-5 md:w-6 md:h-6 2xl:w-8 2xl:h-8" />,
        desc: "Our team builds a custom plan focused on growth, engagement, and achieving your business objectives online.",
    },
    {
        id: "03",
        title: "Content & Campaign Setup",
        icon: <Rocket className="w-5 h-5 md:w-6 md:h-6 2xl:w-8 2xl:h-8" />,
        desc: "We create engaging content, designs, and campaigns tailored to your brand and target audience.",
    },
    {
        id: "04",
        title: "4. Launch & Optimization",
        icon: <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 2xl:w-8 2xl:h-8" />,
        desc: "Campaigns are regularly launched, monitored, and improved to enhance performance, reach, and conversions.",
    },
    {
        id: "05",
        title: "Reporting & Growth",
        icon: <BarChart3 className="w-5 h-5 md:w-6 md:h-6 2xl:w-8 2xl:h-8" />,
        desc: "We provide clear performance reports and continue optimizing strategies to help your business grow consistently.",
    },
];

import {
    Share2, TrendingUp, Flame, Users, MessageSquare, Zap,
    Activity, Target, UserPlus, Video, PieChart, ArrowRight
} from "lucide-react";
import Image from "next/image";
import {
    Sparkles, Layout, Cpu, ShoppingBag,
    Database, Layers, Code, Terminal, ChevronRight, Monitor, Building2, RefreshCw, Wrench
} from "lucide-react";
// Components Imports
import Stats from "@/components/sections/Stats";
import CTA from "@/components/sections/CTA";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Process from "@/components/sections/HowWeWork";
import Testimonials from "@/components/sections/Testimonials";
import Portfolio from "@/components/sections/PortfolioPreview";
import IndustryExpertise from "@/components/IndustryExpertise";
import TrustClients from "@/components/sections/ClientTrust"
import ServiceCTA from "@/components/sections/ServiceCTA"

import { ArrowUpRight, BarChart3 } from "lucide-react";

const socialProjects = [
    {
        id: "01",
        title: "Premium Home & Living Brand",
        image: "/roas.jpg", // 🎯 Apni social media graphics/results ka real path yahan dalo
        slug: "casestudies/home-living-ecommerce",
        size: "lg:col-span-2 h-[400px] 2xl:h-[500px]",
    },
    {
        id: "02",
        title: "E-Commerce Fashion Brand",
        image: "/brand.jpg", // 🎯 Real image path
        slug: "casestudies/fashion-brand-ecommerce",
        size: "lg:col-span-1 h-[400px] 2xl:h-[500px]",
    },
    {
        id: "03",
        title: "Premium Fitness Brand",
        image: "/gym.jpg", // 🎯 Real image path
        slug: "casestudies/fitness-brand-ecommerce",
        size: "lg:col-span-1 h-[400px] 2xl:h-[500px]",
    },
    {
        id: "04",
        title: "Victoria Property Network",
        image: "/realestate.jpg", // 🎯 Real image path
        slug: "casestudies/australia-real-estate-social",
        size: "lg:col-span-2 h-[400px] 2xl:h-[500px]",
    }
];

export default function SocialMediaPage() {
    return (
        <main className="bg-[#030712] text-white selection:bg-blue-600 overflow-x-hidden">

            {/* 🎯 SYNCED SOCIAL MEDIA MARKETING HERO SECTION: Formatted exactly on top of your verified About Us master framework */}
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

                    {/* Full Sized Padded Content Wrapper - 🎯 FIXED: Aligned perfectly with your AI Automation global structure */}
          <div className="relative z-10 w-full mx-auto text-center lg:text-left px-6 pt-32 pb-16 md:pt-20 md:pb-24 lg:max-w-full lg:pt-40 lg:pb-28 lg:pl-40 2xl:mx-0 2xl:max-w-[1500px] 2xl:pt-48 2xl:pb-36 2xl:pl-80 3xl:mx-0 3xl:max-w-[1800px] 3xl:pt-60 3xl:pb-44 3xl:pl-72">
                        <div className="max-w-5xl">

                            {/* Glassmorphism Badge Container */}
                            {/* (If you have a badge code, paste it here) */}

                            {/* Main Typography Block - 🎯 FIXED: Replicated the exact smooth response scaling and line-height */}
                            <h1 className="text-[3rem] md:text-[3.2rem] lg:text-[3.8rem] 2xl:text-[5rem] font-black uppercase tracking-tighter leading-[1.1] lg:leading-[1.0] text-white mb-8">
                                Social Media{" "}
                                <span className="inline-block mt-2 bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text">
                                    Marketing.
                                </span>
                            </h1>

                            {/* Description Paragraph - Aligned perfectly with global layout standards */}
                            <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed w-full max-w-3xl mx-auto lg:mx-0 opacity-80">
                                We build social media strategies that stop the scroll. Our team creates engaging content and targeted ad campaigns to grow your community, boost brand loyalty, and drive real business sales.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

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
                                    src="/mobile.webp"
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
                                    Social Media Advertising  {" "}
                                    {/* 🎯 FIX: 'block' use kiya aur 'py-2 pr-4' add kiya taake text aur gradient boundaries safe rahein */}
                                    <span className=" mt-0 mb-2 py-1  text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                                        For Business Growth.

                                    </span>
                                </h2>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                viewport={{ once: true }}
                                className="space-y-2 md:space-y-2"
                            >
                                {/* Paragraph 1 */}
                                <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed max-w-xl 2xl:max-w-3xl mx-auto lg:mx-0 opacity-90">
                                    Social media advertising helps your business reach the right audience, increase brand awareness, and generate more sales online.                   </p>

                                {/* Paragraph 2 */}
                                <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed max-w-xl 2xl:max-w-3xl mx-auto lg:mx-0 opacity-90">
                                    We create effective advertising campaigns on platforms like Facebook, Instagram, LinkedIn, and TikTok to connect your business with potential customers.                   </p>

                                {/* Paragraph 3 */}
                                <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed max-w-xl 2xl:max-w-3xl mx-auto lg:mx-0 opacity-90 hidden md:block">
                                    Our team focuses on engaging content, targeted audience strategies, and performance-driven ads that deliver real results. Whether you want more website traffic, leads, product sales, or customer engagement, we tailor every campaign to match your business goals.                   </p>
                                <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed max-w-xl 2xl:max-w-3xl mx-auto lg:mx-0 opacity-90 hidden md:block">
                                    With the right social media marketing strategy, your business can build stronger customer relationships, improve online visibility, and grow faster in today’s competitive digital market while staying ahead of your competitors.
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




            {/* 2. CORE STACK - Web Solutions (Synced perfectly with SEO & Digital Marketing Hover Architecture) */}
            <section className="relative py-24 2xl:py-40 px-6 overflow-hidden bg-[#111827]">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:32px_32px]" />
                </div>

                <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto relative z-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6 border-b border-white/5 pb-10">
                        <div>
                            <h3 className="text-[2.3rem] !case-normal md:text-[2.5rem] lg:text-[2.5rem] 2xl:text-[3.2rem] font-black leading-[1.2] tracking-tighter text-white">
                                Our Social {" "}
                                <span className="inline-block pb-1 pr-4 bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text">
                                    Media Services
                                </span>
                            </h3>
                        </div>
                    </div>

                    {/* 🎯 Grid Wrapper mapped with the 6 requested core services */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 2xl:gap-10">
                        {[
                            { title: "Social Media Management", desc: "We manage your social platforms daily to improve engagement, visibility, audience growth, and brand awareness online.", icon: <Monitor size={24} /> },
                            { title: "Paid Social Advertising", desc: "Targeted social media ads designed to generate quality leads, website traffic, and higher business conversions effectively.", icon: <ShoppingBag size={24} /> },
                            { title: "Community Management", desc: "We engage with your audience, respond to messages, and build strong customer relationships across social platforms.", icon: <Building2 size={24} /> },
                            { title: "Influencer Marketing", desc: "Collaborate with trusted influencers to promote your brand, increase reach, and attract potential customers naturally.", icon: <Database size={24} /> },
                            { title: "Content Production", desc: "Creative content creation, including graphics, videos, captions, and posts tailored for your business and audience.", icon: <RefreshCw size={24} /> },
                            { title: "Analytics & Reporting", desc: "Detailed reports and insights help you track campaign performance, audience engagement, and overall marketing results clearly.", icon: <Wrench size={24} /> }
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
          style={{ '--hover-color': '#0971A6' } as React.CSSProperties}
          className="shrink-0 w-12 h-12 2xl:w-16 2xl:h-16 rounded-xl bg-black/20 text-cyan-300 border border-white/5 group-hover:bg-white group-hover:text-[var(--hover-color)] group-hover:border-transparent transition-all duration-500 shadow-sm flex items-center justify-center"
        >
          <div className="transition-colors duration-500">
            {s.icon}
          </div>
        </div>

        {/* Title Text (Kept original sizes, added text-white and hover states) */}
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
            {/* portfolio section */}
            <section className="relative py-16 md:py-20 2xl:py-32 bg-[#1E2939] text-white overflow-hidden select-none border-t border-white/5">
                {/* Background Glows */}
                <div className="absolute top-1/3 left-1/4 w-[600px] 2xl:w-[1000px] h-[600px] bg-blue-600/[0.02] blur-[150px] pointer-events-none" />

                <div className="relative z-10 max-w-7xl 2xl:max-w-[110rem] mx-auto px-6">

                    {/* ⚡ HEADER BLOCK */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 md:mb-10 2xl:mb-16 border-b border-white/5 pb-4 pt-0">
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-left"
                        >

                            <h1 className="text-[3rem] uppercase md:text-[3.2rem] 2xl:text-[5rem] lg:text-[3.8rem] uppercase  font-black tracking-tighter leading-[0.8] text-white mb-8">
                                Just some of our{" "}
                                <span className="inline-block mt-2 uppercase bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text">
                                    Social Results
                                </span>
                            </h1>
                            <p className="mt-4 text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed opacity-80">
                                See how our social media strategies helped businesses increase engagement, reach new audiences, generate leads, and grow online successfully.
                            </p>
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
                                href="/casestudies"
                                className="flex items-center gap-3 md:gap-4 text-[10px] md:text-xs 2xl:text-[13px] uppercase tracking-[0.25em] font-black text-white-500 hover:text-white transition-all duration-500 group"
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
                        {socialProjects.map((project, i) => {
                            const CardWrapper = motion.div;

                            return (
                                // 🎯 FIXED: Portfolio prefix hata kar directly static path force kiya hai `/${project.slug}` se
                                <Link href={`/${project.slug}`} key={project.id} className={`${project.size} block`}>
                                    <CardWrapper
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                        viewport={{ once: true }}
                                        className="w-full h-full group relative rounded-[2rem] 2xl:rounded-[4rem] border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent backdrop-blur-md flex flex-col justify-between overflow-hidden hover:border-blue-500/30 transition-all duration-500 cursor-pointer"
                                    >
                                        <div className="absolute inset-0 w-full h-full">
                                            {/* Next.js Image Element */}
                                            <div className="absolute inset-0 w-full h-full transition-all duration-500">
                                                <Image
                                                    src={project.image || "/placeholder.png"}
                                                    alt={project.title}
                                                    fill
                                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                                    priority={i < 2}
                                                />
                                            </div>

                                            {/* Project ID Tag */}
                                            <div className="absolute top-8 left-8 z-20">
                                                <span className="px-3 py-1 rounded-full border border-white/10 bg-black/40 backdrop-blur-md text-[10px] 2xl:text-base font-bold text-gray-300 uppercase tracking-widest">
                                                    {project.id}
                                                </span>
                                            </div>

                                            {/* Project Title Display */}
                                            {/* <div className="absolute bottom-8 left-8 right-8 z-20 space-y-2">
                                                <span className="text-2xl 2xl:text-5xl font-black tracking-tight uppercase block text-white bg-black/30 backdrop-blur-sm px-4 py-2 rounded-xl w-fit">
                                                    {project.title}
                                                </span>
                                            </div> */}
                                        </div>
                                    </CardWrapper>
                                </Link>
                            );
                        })}
                    </div>



                </div>

            </section>
            {/* CTA   */}
            <ServiceCTA />

            {/* process section  */}
            <section className="relative py-16 md:py-24 bg-[#111827] overflow-hidden selection:bg-blue-600/30">

                {/* 🌌 Luxury Background Elements */}
                <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:30px_30px] pointer-events-none" />

                <div className="relative z-10 max-w-6xl 2xl:max-w-[85rem] mx-auto px-6">

                    {/* 📋 HEADER */}
                    <div className="mb-12 md:mb-16 pt-0 text-center">
                        <h3 className="text-[2.3rem]  md:text-[2.5rem] lg:text-[2.5rem] 2xl:text-[3.2rem] font-black tracking-tighter leading-[1.1] lg:leading-[1] text-white normal-case">
                            Our{" "}
                            <span className=" mt-2 py-1 pr-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                Social Media Strategy For Success                        </span>
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
    // 🎯 FIXED: Style tag lagakar background color #0971A6 ko solid completely lock kar diya hai
    style={{ backgroundColor: "#0971A6" }}
    className="relative p-6 md:p-8 2xl:p-12 rounded-[1.8rem] 2xl:rounded-[3rem] border border-white/10 group transition-all duration-500 hover:border-cyan-300/40 hover:shadow-[0_20px_50px_rgba(9,113,166,0.3)]"
  >
    {/* 🌀 FLOATING STEP NUMBER BADGE: Hover se pehle dark, hover ke baad clean white surface with 0971A6 text */}
    <div 
      style={{ '--hover-color': '#0971A6' } as React.CSSProperties}
      className="absolute -top-3 -right-3 w-10 h-10 2xl:w-16 2xl:h-16 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-white font-mono text-[11px] 2xl:text-base font-bold group-hover:bg-white group-hover:text-[var(--hover-color)] group-hover:border-transparent transition-all duration-500 z-10 shadow-lg"
    >
      {step.id}
    </div>

    <div className="flex flex-col gap-4">
      {/* Icon & Heading */}
      <div className="flex items-center gap-4">
        {/* 🌀 FIXED ICON BOX: Hover se pehle subtle dark tint, hover ke baad clean white surface with 0971A6 text */}
        <div 
          style={{ '--hover-color': '#0971A6' } as React.CSSProperties}
          className="shrink-0 w-11 h-11 md:w-12 md:h-12 2xl:w-18 2xl:h-18 rounded-xl bg-black/20 text-cyan-300 border border-white/5 group-hover:bg-white group-hover:text-[var(--hover-color)] group-hover:border-transparent transition-all duration-500 shadow-sm flex items-center justify-center"
        >
          {step.icon}
        </div>
        
        {/* Heading text (Maintained original sizes) */}
        <h4 className="font-block text-[1.0rem] sm:text-[1.2rem] lg:text-[1.2rem] 2xl:text-[1.5rem] text-white group-hover:text-cyan-200 transition-colors duration-300 tracking-tight">
          {step.title}
        </h4>
      </div>

      {/* Description Below */}
      <p className="text-white text-[15px] md:text-base lg:text-[15px] 2xl:text-[15px] font-medium leading-relaxed max-w-xl 2xl:max-w-3xl mx-auto lg:mx-0 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
        {step.desc}
      </p>
    </div>

    {/* 🎯 BOTTOM ACCENT LINE: Cyan matching expand line */}
    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-300 shadow-[0_0_10px_#67e8f9] group-hover:w-[35%] transition-all duration-700" />
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

            {/* our core experties */}
            <section className="relative py-24 2xl:py-40 px-6 overflow-hidden bg-[#1E2939]">
                <div className="absolute inset-0 z-0 opacity-[0.02] bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none" />

                <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto relative z-10">
                    <div className="text-center mb-20">
                        <h3 className="text-[2.3rem] !case-normal md:text-[2.5rem] lg:text-[2.5rem] 2xl:text-[3.2rem] font-black leading-[1.2] tracking-tighter text-white">
                            Our Social Media Ads Services{" "}
                            <span className="inline-block pb-1 pr-4 bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text">
                                By Platforms
                            </span>
                        </h3>

                        <p className="mt-4 text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-tight max-w-3xl 2xl:max-w-5xl mx-auto antialiased tracking-wide">
                            Maximize your ROI with targeted ad campaigns across Facebook, Instagram, LinkedIn, and TikTok. We design high-converting, platform-specific ad strategies that capture attention, engage your audience, and drive real business growth.
                        </p>
                    </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 2xl:gap-8">
  {[
    {
      step: "01",
      title: "Meta Ads",
      keywords: "Lookalike Audiences, CBO/ABO Tuning, Pixel Tracking",
      desc: "Scale your brand on Facebook and Instagram with high-converting, laser-targeted visual ad campaigns."
    },
    {
      step: "02",
      title: "LinkedIn Advertising",
      keywords: "B2B Matched Audiences, Account Targeting, Lead Gen",
      desc: "Connect directly with B2B decision-makers, generate premium leads, and drive professional business growth."
    },
    {
      step: "03",
      title: "YouTube Advertising",
      keywords: "In-Stream Formats, Retargeting Funnels, Custom Intent",
      desc: "Capture attention and boost conversions using high-impact video ads on the world’s largest video platform."
    },
    {
      step: "04",
      title: "TikTok Advertising",
      keywords: "Spark Ads, UGC Optimization, Viral Trend Hacking",
      desc: "Engage viral audiences and drive massive impulse sales with trendy, native video content strategies."
    }
  ].map((p, i) => (
    <div
      key={i}
      // 🎯 FIXED: Style tag lagakar background color #0971A6 ko solid completely lock kar diya hai
      style={{ backgroundColor: "#0971A6" }}
      className="group relative p-8 2xl:p-8 rounded-[3rem] border border-white/10 hover:border-cyan-300/40 hover:shadow-[0_20px_50px_rgba(9,113,166,0.3)] transition-all duration-500 flex flex-col h-full overflow-hidden cursor-pointer hover:-translate-y-2 transform will-change-transform z-10"
    >
      {/* 🎯 EFFECTS LAYER 1: Tuned to soft white overlay to perfectly match the solid background color */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/5 via-white/[0.01] to-transparent translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out z-0 pointer-events-none" />

      {/* Header row area layout */}
      <div className="relative w-full mb-2 min-h-[70px] flex items-start justify-between z-10 pointer-events-none">
        
        {/* 🌀 FIXED STEP NUMBER WATERMARK: Made more readable on the blue surface, turns into glowing tint on hover */}
        <span className="absolute left-0 -top-6 text-6xl 2xl:text-8xl font-black text-black/15 group-hover:text-black/30 select-none pointer-events-none z-0 transition-colors duration-500">
          {p.step}
        </span>

        {/* Title text floating over step layer */}
        <div className="space-y-2 flex-grow relative z-10 pt-6">
          <h3 className="font-block text-[1.0rem] sm:text-[1.2rem] lg:text-[1.3rem] 2xl:text-[1.5rem] text-white group-hover:text-cyan-200 transition-colors duration-300 leading-tight">
            {p.title}
          </h3>
        </div>

        {/* Icon Alignment */}
        <div className="relative z-10 pt-5 pl-4 shrink-0">
          <ChevronRight size={16} className="text-white/60 group-hover:text-cyan-200 transition-colors duration-300 transform group-hover:translate-x-1" />
        </div>
      </div>

      {/* Content block content wraps safely */}
      <div className="space-y-2 flex-grow relative z-10 pointer-events-none">
        <p className="text-white text-[15px] md:text-base lg:text-[15px] 2xl:text-[15px] font-medium leading-relaxed pt-2 max-w-xl 2xl:max-w-2xl antialiased opacity-90 group-hover:opacity-100 transition-opacity duration-300">
          {p.desc}
        </p>
      </div>

      {/* 🌀 PROGRESS BAR AREA: Switched to track background opacity and a glowing cyan loader fill */}
      <div className="mt-4 h-1 w-full bg-black/20 rounded-full overflow-hidden subpixel-antialiased relative z-10 pointer-events-none">
        <div className="h-full bg-cyan-300 shadow-[0_0_8px_#67e8f9] w-full transition-all duration-1000" />
      </div>

      {/* 🎯 EFFECTS LAYER 2: Cyan matching line indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-cyan-300 shadow-[0_0_15px_#67e8f9] scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-500 ease-out z-20 pointer-events-none" />
    </div>
  ))}
</div>
                </div>
            </section>




            {/* Why Choose US  */}
            <section className="relative py-16 md:py-24 2xl:py-32 bg-[#111827] overflow-hidden border-b border-white/5">

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
                                <h3 className="text-[2.3rem]  md:text-[2.5rem] lg:text-[2.5rem] 2xl:text-[3.2rem] font-black  font-black text-white tracking-tighter leading-[1.1] lg:leading-[1] mb-6">
                                    Why Choose Our{" "}

                                    <span className="block mt-2 py-1 pr-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                        Social Media Marketing Company?


                                    </span>
                                </h3>

                                {/* Description Panel */}
                                <div className="space-y-4 max-w-xl 2xl:max-w-3xl">
                                    {/* Paragraph 1 */}
                                    <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed mx-auto lg:mx-0 opacity-90">
                                        We don’t just chase vanity metrics; we build strategic, platform-specific campaigns engineered to drive measurable business growth.                     </p>

                                    {/* Border Block Panels */}

                                    {/* Paragraph 2 */}
                                    <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed mx-auto lg:mx-0 opacity-90">
                                        As a results-driven agency, we combine data-backed audience insights with scroll-stopping ad creative to capture attention and maximize your ROI.                     </p>

                                    {/* Paragraph 3 */}
                                    <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed mx-auto lg:mx-0 opacity-90">
                                        Our team of specialists continuously tests, refines, and optimizes every campaign—across Meta, LinkedIn, YouTube, and TikTok—ensuring your budget works harder to generate high-quality leads and steady conversions.</p>
                                    <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed mx-auto lg:mx-0 opacity-90">
                                        Partner with us to streamline your marketing efforts, outpace your competition, and transform your active social media channels into powerful, predictable revenue engines tailored specifically to your brand’s goals.</p>                                </div>
                            </motion.div>
                        </div>

                   {/* RIGHT SIDE: Cards Grid */}
<div className="lg:col-span-6">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 2xl:gap-10 relative">

    {/* Background soft glow setup */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

    {features.map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        // 🎯 FIXED: Background color #0971A6 ko style tag se solid completely lock kiya hai
        style={{ backgroundColor: "#0971A6" }}
        className={`relative p-6 md:p-8 2xl:p-12 rounded-3xl border border-white/10 group transition-all duration-500 hover:border-cyan-300/40 hover:shadow-[0_20px_50px_rgba(9,113,166,0.3)] flex flex-col justify-between
        ${index % 2 !== 0 ? 'sm:translate-y-8 md:translate-y-10 2xl:translate-y-16' : ''}`}
      >
        <div className="relative z-10 space-y-4 md:space-y-5">

          {/* Icon & Heading Row */}
          <div className="flex items-center gap-4">
            
            {/* 🌀 FIXED ICON BOX: Hover se pehle dark tint, hover par white background aur custom blue text icon */}
            <div 
              style={{ '--hover-color': '#0971A6' } as React.CSSProperties}
              className="shrink-0 w-10 h-10 md:w-12 md:h-12 2xl:w-16 2xl:h-16 flex items-center justify-center rounded-xl bg-black/20 text-cyan-300 border border-white/5 group-hover:bg-white group-hover:text-[var(--hover-color)] group-hover:border-transparent transition-all duration-500 shadow-sm"
            >
              {item.icon}
            </div>

            {/* Title Text (Solid crisp white, text-gradient removed for better contrast on blue background) */}
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
            <TrustClients />

        </main>
    );
}