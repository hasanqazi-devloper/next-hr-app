"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from 'next/link';
import Image from "next/image";
import {
  ArrowUpRight,
  Cpu,
  BarChart3,
  PenTool,
  Rocket,
  ShieldCheck,
  Zap,
  Search,
  LayoutGrid,
  FileText,
  Globe2,
  LineChart,
  Link2,
  FileCode2,
  BarChart4,
  Flame,
  ArrowRight,
  ChevronRight
} from "lucide-react";

// Section Components
import Stats from "@/components/sections/Stats";
import CTA from "@/components/sections/CTA";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Portfolio from "@/components/sections/PortfolioPreview";
import Testimonials from "@/components/sections/Testimonials";
import AboutPreview from "@/components/sections/AboutPreview";
import Process from "@/components/sections/HowWeWork";
import SeoFAQ from "@/components/faqs/SeoFAQ";
import AuditCTA from "@/components/sections/AuditCTA";
import IndustryExpertise from "@/components/IndustryExpertise";
import ClientTrust from "@/components/sections/ClientTrust"
import { TrendingUp, Star, CheckCircle2 } from "lucide-react";

export default function SEOPage() {
  // 📊 Dynamic Working Process Data Array

  const features = [
    {
      icon: <Zap className="w-5 h-5 2xl:w-8 2xl:h-8" />,
      title: "SEO-Driven Custom Design",
      desc: "We build unique, optimized websites tailored to your specific business goals, making it easy for customers to find you on Google.",
    },
    {
      icon: <Star className="w-5 h-5 2xl:w-8 2xl:h-8" />,
      title: "Mobile-First Optimization",
      desc: "Your site will load beautifully and function flawlessly on smartphones, tablets, and desktops, which keeps both users and search engines happy.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 2xl:w-8 2xl:h-8" />,
      title: "Speed, Security & Trust",
      desc: "We prioritize clean code and fast loading times to slash bounce rates, secure your data, and climb higher in search results.",
    },
    {
      icon: <TrendingUp className="w-5 h-5 2xl:w-8 2xl:h-8" />,
      title: "Continuous Search Growth",
      desc: "We don't just launch and leave. Our team provides regular updates, technical maintenance, and ongoing support to keep your rankings strong.",
    },
  ];
  const steps = [
    {
      id: "01",
      title: "SEO Audit",
      desc: "We dive deep into your website’s backend to find and fix hidden errors, broken links, and hidden speed issues blocking your Google rankings.",
      icon: <Search className="w-5 h-5 2xl:w-7 2xl:h-7" />
    },
    {
      id: "02",
      title: "Website Structure",
      desc: "Our team organizes your pages and navigation logically so both search engine bots and human visitors can navigate your content effortlessly.",
      icon: <LayoutGrid className="w-5 h-5 2xl:w-7 2xl:h-7" />
    },
    {
      id: "03",
      title: "Content Creation",
      desc: "We write engaging, helpful blog posts and landing pages focused on commercial keywords that attract buyers and build topical authority.",
      icon: <FileText className="w-5 h-5 2xl:w-7 2xl:h-7" />
    },
    {
      id: "04",
      title: "Authority Building",
      desc: "We earn high-quality, trusted backlinks from reputable websites in your niche to boost your domain rating and outrank your top competitors.",
      icon: <Globe2 className="w-5 h-5 2xl:w-7 2xl:h-7" />
    },
    {
      id: "05",
      title: "Monitor & Analyze Results",
      desc: "We continuously track your traffic growth, keyword positions, and user behavior to refine our strategy and maximize your return on investment.",
      icon: <LineChart className="w-5 h-5 2xl:w-7 2xl:h-7" />
    }
  ];

 const seoProjects = [
  {
    id: "01",
    title: "Rhino Roofing Orlando Scale",
    image: "/rino-roffers.jpg", 
    slug: "casestudies/rhino-orlando",
    size: "lg:col-span-2 h-[400px] 2xl:h-[500px]",
  },
  {
    id: "02",
    title: "Breez Care",
    image: "/smile-care.jpg", 
    slug: "casestudies/breez-care",
    size: "lg:col-span-1 h-[400px] 2xl:h-[500px]",
  },
  {
    id: "03",
    title: "West London Cleaning Company",
    image: "/cleaning.jpg", 
    slug: "casestudies/west-london-cleaners",
    size: "lg:col-span-1 h-[400px] 2xl:h-[500px]",
  },
  {
    id: "04",
    title: "Local Restaurant Australia",
    image: "/burger.jpg", 
    slug: "casestudies/australia-restaurant-seo",
    size: "lg:col-span-2 h-[400px] 2xl:h-[500px]",
  }
];
  return (
    <main className="bg-[#030712] text-white selection:bg-blue-600 overflow-x-hidden">

    {/* 🎯 SYNCED SEO HERO SECTION: Formatted exactly on top of your verified master framework */}
<section className="relative w-full overflow-hidden bg-[#1E2939]">
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
          LEADING{" "}
          <span className="inline-block mt-2 bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text">
            AI & GEO SEO Agency.
          </span>
        </h1>

        {/* Description Paragraph - Aligned perfectly with global layout standards */}
        <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed w-full max-w-3xl mx-auto lg:mx-0 opacity-80">
          We help your business rank higher on Google, drive targeted search traffic, and turn everyday clicks into paying customers with smart SEO strategies that deliver real growth.
        </p>
      </div>
    </div>
  </div>
</section>



      <section className="relative pt-12 md:pt-20 2xl:pt-32 pb-4 bg-[#111827] overflow-hidden">

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
                  src="/seo.png"
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
                  Our {" "}
                  {/* 🎯 FIX: 'block' use kiya aur 'py-2 pr-4' add kiya taake text aur gradient boundaries safe rahein */}
                  <span className=" mt-0 mb-2 py-1  text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    Specialized SEO Services.
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
                  Getting traffic to your website is only half the battle; the real goal is turning those clicks into actual buyers. Our tailored search engine optimization focuses on attracting high-intent visitors who are actively looking for the exact services or products you offer.
                </p>

                {/* Paragraph 2 */}
                <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed max-w-xl 2xl:max-w-3xl mx-auto lg:mx-0 opacity-90">
                  By targeting commercial keywords, fixing technical site errors, and creating helpful content that builds genuine topical authority, we streamline the path from a simple Google search straight to your checkout page.
                </p>

                {/* Paragraph 3 */}
                <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed max-w-xl 2xl:max-w-3xl mx-auto lg:mx-0 opacity-90 hidden md:block">
                  We don’t just chase vanity ranking numbers that look good on paper. Instead, we optimize your entire digital presence to build user trust, capture qualified leads, and consistently grow your bottom line through sustainable, long-term organic visibility.
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
   {/* STRATEGIC FOUNDATION (Services Matrix Grid) */}
<section className="relative py-24 2xl:py-40 px-6 overflow-hidden bg-[#1E2939]">
  <div className="absolute inset-0 z-0">
    <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:32px_32px]" />
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.07)_0%,transparent_70%)]" />
  </div>

  <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto relative z-10">
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6 border-b border-white/5 pb-10">
      <div className="max-w-4xl">
        <h3 className="text-[2.3rem] md:text-[2.5rem] lg:text-[2.5rem] 2xl:text-[3.2rem] font-black leading-[1.1] md:leading-[1.05] tracking-tighter text-white">
          Our <span className="bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text">
            Specialized SEO Services.
          </span>
        </h3>
      </div>
    </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 2xl:gap-10">
  {[
    { title: "AI SEO", desc: "We leverage smart AI tools to analyze data, find hidden keyword opportunities, and speed up growth.", icon: <FileCode2 size={24} /> },
    { title: "Technical SEO", desc: "We fix backend site issues, boost page speed, and optimize code so Google can rank you.", icon: <Search size={24} /> },
    { title: "eCommerce SEO", desc: "We optimize product pages and category structures to drive targeted shoppers directly to your online store.", icon: <Link2 size={24} /> },
    { title: "Local SEO", desc: "We put your business on the map, helping nearby customers find you first on Google.", icon: <Globe2 size={24} /> },
    { title: "Link Building", desc: "We earn high-quality, trusted backlinks that boost your website’s authority and push rankings higher.", icon: <BarChart4 size={24} /> },
    { title: "Content Writing", desc: "We create engaging, helpful blog posts that rank well and turn everyday readers into buyers.", icon: <LineChart size={24} /> }
  ].map((s, i) => (
    <motion.div
      key={i}
      whileHover={{ y: -10 }}
      // 🎯 FIXED: Style tag lagakar background color #0971A6 ko solid completely lock kar diya hai
      style={{ backgroundColor: "#0971A6" }}
      className="group relative p-10 2xl:p-16 rounded-[2.5rem] border border-white/10 hover:border-cyan-300/40 hover:shadow-[0_20px_50px_rgba(9,113,166,0.3)] transition-all duration-500 text-left cursor-pointer h-full flex flex-col justify-between overflow-hidden"
    >
      {/* 🎯 EFFECTS LAYER 1: Tuned to soft white overlay to perfectly match the solid background color */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/5 via-white/[0.01] to-transparent translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out z-0 pointer-events-none" />

      {/* Foreground content wrapper inside relative z-10 */}
      <div className="relative z-10 flex flex-col h-full justify-between w-full">
        <div>
          {/* 🎯 Icon aur Title Container Row */}
          <div className="flex items-center gap-5 mb-8">
            
            {/* 🌀 FIXED ICON BOX: Hover se pehle subtle dark tint, hover ke baad clean white surface with 0971A6 text */}
            <div 
              style={{ '--hover-color': '#0971A6' } as React.CSSProperties}
              className="shrink-0 w-12 h-12 2xl:w-16 2xl:h-16 rounded-xl bg-black/20 text-cyan-300 border border-white/5 group-hover:bg-white group-hover:text-[var(--hover-color)] group-hover:border-transparent scale-100 group-hover:scale-110 transition-all duration-500 shadow-sm flex items-center justify-center"
            >
              <div className="transition-colors duration-500">
                {s.icon}
              </div>
            </div>

            {/* Card Title Header */}
            <h4 className="font-black text-[1.2rem] sm:text-[1.3rem] lg:text-[1.4rem] 2xl:text-[1.6rem] tracking-tight text-white group-hover:text-cyan-200 transition-colors leading-tight">
              {s.title}
            </h4>
          </div>

          {/* Description Paragraph synced with global fluid sizing */}
          <p className="text-white text-[15px] md:text-base lg:text-[15px] 2xl:text-[15px] font-medium leading-relaxed antialiased tracking-wide opacity-90 group-hover:opacity-100 transition-opacity duration-300 !max-w-none">
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

    {/* Portfolio Section */}
<section className="relative py-16 md:py-20 2xl:py-32 bg-[#111827] text-white overflow-hidden select-none border-t border-white/5">
  {/* Background Glows */}
  <div className="absolute top-1/3 left-1/4 w-[600px] 2xl:w-[1000px] h-[600px] bg-blue-600/[0.02] blur-[150px] pointer-events-none" />

  <div className="relative z-10 max-w-7xl 2xl:max-w-[110rem] mx-auto px-6">
    
    {/* HEADER BLOCK */}
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 md:mb-10 2xl:mb-16 border-b border-white/5 pb-4 pt-0">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-left"
      >
        <h3 className="text-[2.3rem] md:text-[2.5rem] lg:text-[2.5rem] 2xl:text-[3.2rem] font-black tracking-tighter leading-[1.1] lg:leading-none text-white">
          Our{" "}
          <span className="sm:inline bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            SEO Results
          </span>
        </h3>
        <p className="mt-4 text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed opacity-80 w-full mx-auto lg:mx-0">
          We deliver clear, measurable growth by boosting your Google rankings, increasing organic traffic, and driving real revenue to your business.
        </p>
      </motion.div>

      {/* VIEW ALL LINK */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex items-center shrink-0"
      >
        <Link 
          href="/portfolio" 
          className="flex items-center gap-3 md:gap-4 text-[10px] md:text-xs 2xl:text-[13px] uppercase tracking-[0.25em] font-black text-white-500 hover:text-white transition-all duration-500 group"
        >
          <span className="relative pb-1 transition-colors duration-500 group-hover:text-white">
            View All Projects
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 group-hover:w-full" />
          </span>
          <div className="w-10 h-10 md:w-11 md:h-11 2xl:w-14 2xl:h-14 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center relative overflow-hidden group-hover:border-blue-500/50 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <ArrowUpRight size={16} className="text-zinc-500 group-hover:text-white group-hover:rotate-45 group-hover:scale-110 transform transition-all duration-500 2xl:w-5 2xl:h-5" />
          </div>
        </Link>
      </motion.div>
    </div>

    {/* BENTO GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 2xl:gap-8 relative z-10">
      {seoProjects.map((project, i) => {
        const CardWrapper = motion.div;

        return (
          // 🎯 FIXED: Removed /portfolio/ and forced absolute root path using `/${project.slug}`
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

      <AuditCTA />

      {/* 🚀 WORKING PROCESS MATRIX SECTION */}
      <section className="relative py-16 md:py-24 bg-[#1E2939] overflow-hidden selection:bg-blue-600/30">

        {/* 🌌 Luxury Background Elements */}
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:30px_30px] pointer-events-none" />

        <div className="relative z-10 max-w-6xl 2xl:max-w-[85rem] mx-auto px-6">

          {/* 📋 HEADER */}
          <div className="mb-12 md:mb-16 pt-0 text-center">
            <h3 className="text-[2.3rem]  md:text-[2.5rem] lg:text-[2.5rem] 2xl:text-[3.2rem] font-black tracking-tighter leading-[1.1] lg:leading-[1] text-white normal-case">
              Our{" "}
              <span className=" mt-2 py-1 pr-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Strategy For Success            </span>
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
            // 🎯 FIXED: Background color #0971A6 ko solid completely lock kar diya hai
            style={{ backgroundColor: "#0971A6" }}
            className="relative p-6 md:p-8 2xl:p-12 rounded-[1.8rem] 2xl:rounded-[3rem] border border-white/10 transition-all duration-500 hover:border-cyan-300/40 hover:shadow-[0_20px_50px_rgba(9,113,166,0.3)]"
          >
            {/* 🌀 FLOATING STEP NUMBER: Hover se pehle dark transparent, hover par white pop layer */}
            <div 
              style={{ '--hover-color': '#0971A6' } as React.CSSProperties}
              className="absolute -top-3 -right-3 w-10 h-10 2xl:w-16 2xl:h-16 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-white font-mono text-[11px] 2xl:text-base font-bold group-hover:bg-white group-hover:text-[var(--hover-color)] group-hover:border-transparent transition-all duration-500 z-10 shadow-lg"
            >
              {step.id}
            </div>

            <div className="flex flex-col gap-4">
              {/* Icon & Heading */}
              <div className="flex items-center gap-4">
                {/* 🌀 FIXED ICON BOX: Subtle dark background with white-pop on hover */}
                <div 
                  style={{ '--hover-color': '#0971A6' } as React.CSSProperties}
                  className="shrink-0 w-11 h-11 md:w-12 md:h-12 2xl:w-18 2xl:h-18 rounded-xl bg-black/20 text-cyan-300 border border-white/5 group-hover:bg-white group-hover:text-[var(--hover-color)] group-hover:border-transparent transition-all duration-500 shadow-sm flex items-center justify-center"
                >
                  {step.icon}
                </div>
                
                <h4 className="font-block text-[1.0rem] sm:text-[1.2rem] lg:text-[1.2rem] 2xl:text-[1.5rem] text-white group-hover:text-cyan-200 transition-colors duration-300 tracking-tight">
                  {step.title}
                </h4>
              </div>

              {/* Description Below */}
              <p className="text-white text-[15px] md:text-base lg:text-[15px] 2xl:text-[15px] font-medium leading-relaxed max-w-xl 2xl:max-w-3xl mx-auto lg:mx-0 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                {step.desc}
              </p>
            </div>

            {/* 🎯 BOTTOM ACCENT LINE: Cyan indicator line expand effect */}
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-300 shadow-[0_0_10px_#67e8f9] group-hover:w-[35%] transition-all duration-700" />
          </motion.div>
        </div>

        {/* 🌀 CENTRAL TIMELINE NODE: Clean track node transitions matching your premium cyan layout */}
        <div className="absolute left-4 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block">
          <div className="w-5 h-5 2xl:w-10 2xl:h-10 rounded-full bg-black/40 border border-white/20 flex items-center justify-center group-hover:border-cyan-300 transition-all duration-500 group-hover:scale-110 shadow-md">
            <div className="w-2 h-2 2xl:w-4 2xl:h-4 bg-white/40 rounded-full group-hover:bg-cyan-300 group-hover:shadow-[0_0_8px_#67e8f9] transition-all" />
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

      {/* Why Chose ue */}
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
                <h3 className="text-[2.3rem]  md:text-[2.5rem] lg:text-[2.5rem] 2xl:text-[3.2rem] font-black tracking-tighter leading-[1.1] lg:leading-[1] mb-2">
                  Why Choose Our SEO
                  <br />
                  <span className="block mt-2  pr-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Company For Your Business?
                  </span>
                </h3>

                <div className="space-y-4 max-w-xl 2xl:max-w-3xl">
                  {/* Paragraph 1 */}
                  <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed mx-auto lg:mx-0 opacity-90">
                    We design high-ranking websites that don't just look great—they actively grow your business online. By blending clean design with advanced SEO strategies, we build fast, mobile-friendly sites that catch Google's attention and turn everyday search traffic into loyal customers.
                  </p>

                  {/* Border section left panel */}

                  {/* Paragraph 2 */}
                  <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed mx-auto lg:mx-0 opacity-90">
                    Our team works side-by-side with you to understand your market, target high-volume keywords, and deliver an online presence that perfectly fits your brand.
                  </p>

                  {/* Paragraph 3 */}
                  <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed mx-auto lg:mx-0 opacity-90">
                    From the first line of code to ongoing optimization, we offer complete digital solutions backed by clear communication, fair pricing, and reliable results to help your business outrank the competition.
                  </p>

                </div>
              </motion.div>
            </div>

            {/* RIGHT SIDE: Cards Grid */}
         {/* RIGHT SIDE: Cards Grid */}
<div className="lg:col-span-6">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 2xl:gap-10 relative">
    
    {/* Background subtle overlay ambient glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white/10 blur-[100px] rounded-full pointer-events-none" />

    {features.map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        // 🎯 FIXED: Style tag se background color #0971A6 ko solid completely lock kiya hai
        style={{ backgroundColor: "#0971A6" }}
        className={`relative p-6 md:p-8 2xl:p-12 rounded-3xl border border-white/10 group transition-all duration-500 hover:border-cyan-300/40 hover:shadow-[0_20px_50px_rgba(9,113,166,0.3)] flex flex-col justify-between
        ${index % 2 !== 0 ? 'sm:translate-y-8 md:translate-y-10 2xl:translate-y-16' : ''}`}
      >
        <div className="relative z-10 space-y-4 md:space-y-5">

          {/* Icon & Heading Row */}
          <div className="flex items-center gap-4">
            
            {/* 🌀 FIXED ICON BOX: Hover se pehle transparent dark layer, hover par pop-up pure white canvas */}
            <div 
              style={{ '--hover-color': '#0971A6' } as React.CSSProperties}
              className="shrink-0 w-10 h-10 md:w-12 md:h-12 2xl:w-16 2xl:h-16 flex items-center justify-center rounded-xl bg-black/20 text-cyan-300 border border-white/5 group-hover:bg-white group-hover:text-[var(--hover-color)] group-hover:border-transparent transition-all duration-500 shadow-sm"
            >
              {item.icon}
            </div>

            {/* Interactive Title (Swapped gradient to clean solid colors to avoid contrast clash on dark blue) */}
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
      <SeoFAQ />

      <ClientTrust />
    </main>
  );
}