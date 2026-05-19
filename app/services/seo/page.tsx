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

  return (
    <main className="bg-[#030712] text-white selection:bg-blue-600 overflow-x-hidden">

      {/* 🎯 SYNCED SEO HERO SECTION */}
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

          {/* Spacing Wrapper */}
<div className="relative z-10 w-full mx-auto text-center lg:text-left px-6 pt-32 pb-16 md:pt-20 md:pb-24 lg:max-w-full lg:pt-40 lg:pb-28 lg:pl-40 2xl:mx-0 2xl:max-w-[1500px] 2xl:pt-48 2xl:pb-36 2xl:pl-80 3xl:mx-0 3xl:max-w-[1800px] 3xl:pt-60 3xl:pb-44 3xl:pl-72">
            <div className="max-w-5xl">
              {/* Badge Container */}
              <div className="flex items-center gap-2.5 mb-8 w-fit px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md mx-auto md:mx-0">
                <Flame size={12} className="text-blue-400 animate-pulse" />
                <span className="text-[10px] font-black tracking-[4px] text-blue-300 uppercase">Organic Growth</span>
              </div>

              {/* Main Typography Block */}
              <h1 className="text-[3rem]  md:text-[3.2rem] lg:text-[3.8rem] font-black tracking-tighter leading-[1.1] md:leading-[1.05] text-white mb-8 normal-case">
                Leading <br />
                <span className="inline-block mt-3 uppercase bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text">
                  AI & GEO SEO Agency
                </span>
              </h1>

              {/* Description Paragraph */}
              <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed max-w-xl 2xl:max-w-3xl mx-auto lg:mx-0 opacity-80">
                We help your business rank higher on Google, drive targeted search traffic, and turn everyday clicks into paying customers with smart SEO strategies that deliver real growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Column Layout (Text + PNG Image) */}
      <section className="relative w-full min-h-screen bg-[#030303] text-white overflow-hidden flex items-center justify-center py-20 lg:py-0">
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 w-full mx-auto text-center lg:text-left px-6 lg:max-w-full lg:pl-12 xl:pl-20 2xl:pl-32 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* LEFT COLUMN: Text Content */}
          <div className="lg:col-span-7 space-y-8 max-w-xl 2xl:max-w-3xl w-full mx-auto lg:mx-0">
            <h3 className="text-[2.2rem] md:text-[2.8rem] lg:text-[3rem] font-black tracking-tighter leading-[1.1] md:leading-[1.05] text-white normal-case">
              Our {" "}
              <span className=" bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text ">
                Specialized SEO Services.
              </span>
            </h3>

            <div className="space-y-5 lg:space-y-6 text-white font-medium leading-relaxed w-full">
              <p className="text-white text-[16px] sm:text-sm md:text-base lg:text-[16px] 2xl:text-lg 3xl:text-xl font-medium leading-relaxed antialiased tracking-wide opacity-90">
                Getting traffic to your website is only half the battle; the real goal is turning those clicks into actual buyers. Our tailored search engine optimization focuses on attracting high-intent visitors who are actively looking for the exact services or products you offer.
              </p>

              <p className="text-white text-[16px] sm:text-sm md:text-base lg:text-[16px] 2xl:text-lg 3xl:text-xl font-medium leading-relaxed antialiased tracking-wide opacity-90">
                By targeting commercial keywords, fixing technical site errors, and creating helpful content that builds genuine topical authority, we streamline the path from a simple Google search straight to your checkout page.
              </p>

              <div className="border-l-2 border-blue-500 pl-5 mt-6">
                <p className="text-white text-[16px] sm:text-sm md:text-base lg:text-[16px] 2xl:text-lg 3xl:text-xl font-medium leading-relaxed antialiased tracking-wide opacity-90">
                  We don’t just chase vanity ranking numbers that look good on paper. Instead, we optimize your entire digital presence to build user trust, capture qualified leads, and consistently grow your bottom line through sustainable, long-term organic visibility.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4">
              <Link href="/contact" className="group block w-full sm:w-auto">
                <button className="group relative h-[46px] 2xl:h-[54px] px-8 2xl:px-12 rounded-full bg-white overflow-hidden transition-all duration-500 active:scale-95 shadow-xl whitespace-nowrap shrink-0 w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 border border-zinc-100">
                  <div className="absolute inset-0 w-0 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 ease-out group-hover:w-full" />
                  <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3 text-black font-black text-[10px] sm:text-[11px] 2xl:text-[13px] tracking-[1.5px] sm:tracking-[2px] group-hover:text-white transition-colors duration-500 uppercase">
                    Maximize Your Traffic
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 2xl:w-5 2xl:h-5 text-black group-hover:text-white group-hover:translate-x-1.5 transition-all duration-500" />
                  </span>
                </button>
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: PNG Image Wrapper */}
          <div className="lg:col-span-5 flex items-center justify-center w-full px-4 lg:px-0">
            <div className="relative w-full max-w-[450px] lg:max-w-full aspect-square flex items-center justify-center">
              <img
                src="/seo.png"
                alt="SEO Strategy Analytics"
                className="w-full h-auto max-h-[450px] 2xl:max-h-[550px] object-contain drop-shadow-[0_0_30px_rgba(59,130,246,0.2)] animate-pulse [animation-duration:4s]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGIC FOUNDATION (Services Matrix Grid) */}
      <section className="relative py-24 2xl:py-40 px-6 overflow-hidden bg-[#030303]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:32px_32px]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.07)_0%,transparent_70%)]" />
        </div>

        <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6 border-b border-white/5 pb-10">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 mb-4 bg-blue-500/10 w-fit px-3 py-1 rounded-full border border-blue-500/20">
                <Zap size={12} className="text-blue-400" />
                <span className="text-[9px] 2xl:text-xs font-black uppercase tracking-[3px] text-blue-300">Engineered Ranking</span>
              </div>
              <h2 className="text-[2.2rem] md:text-[2.8rem] lg:text-[3.2rem] 2xl:text-[4.5rem] font-black leading-[1.1] md:leading-[1.05] tracking-tighter text-white">
                Our <span className="bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text uppercase">Specialized SEO Services.</span>
              </h2>
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
                className="group relative bg-[#070707] p-8 2xl:p-12 rounded-[2.5rem] border border-white/5 hover:border-blue-500/40 transition-all duration-500 text-left"
              >
                <div className="absolute inset-0 bg-blue-600/[0.02] opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem]" />
                <div className="relative z-10">
                  <div className="mb-6 w-12 h-12 2xl:w-16 2xl:h-16 bg-white/[0.03] rounded-xl flex items-center justify-center border border-white/10 group-hover:bg-blue-600/20 group-hover:text-blue-400 group-hover:border-blue-500/50 transition-all duration-500">
                    <div className="text-blue-400">{s.icon}</div>
                  </div>
                  <h3 className="text-xl 2xl:text-2xl font-black uppercase tracking-wider text-white-500 mb-4 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-white text-[16px] sm:text-sm md:text-base lg:text-[16px] 2xl:text-lg 3xl:text-xl font-medium leading-relaxed antialiased tracking-wide opacity-90 transition-colors">
                    {s.desc}
                  </p>
                  <div className="mt-8 flex items-center gap-2 text-[8px] 2xl:text-xs font-black uppercase tracking-widest text-zinc-600 group-hover:text-blue-400/60 transition-colors">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse" />
                    Rank Verified
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Stats />

      {/* Portfolio Section */}
      <section className="relative py-16 md:py-20 2xl:py-32 bg-[#030303] text-white overflow-hidden select-none border-t border-white/5">
        <div className="absolute top-1/3 left-1/4 w-[600px] 2xl:w-[1000px] h-[600px] bg-blue-600/[0.02] blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl 2xl:max-w-[110rem] mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 md:mb-10 2xl:mb-16 border-b border-white/5 pb-4 pt-0">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-left"
            >
              <h3 className="!text-[2rem] sm:!text-4xl md:!text-4xl lg:!text-[2.5rem] xl:!text-[3rem] font-black tracking-tighter leading-[1.1] lg:leading-none text-white">
                Our {" "}<span className="  sm:inline bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">SEO Results</span>
              </h3>
              <p className=" mt-2 text-white text-[16px] sm:text-sm md:text-base lg:text-[16px] 2xl:text-lg 3xl:text-xl font-medium leading-relaxed antialiased tracking-wide opacity-90 transition-colors">
                We deliver clear, measurable growth by boosting your Google rankings, increasing organic traffic, and driving real revenue to your business.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center shrink-0"
            >
              <Link href="/portfolio" className="flex items-center gap-3 md:gap-4 text-[10px] md:text-xs 2xl:text-[13px] uppercase tracking-[0.25em] font-black text-zinc-500 hover:text-white transition-all duration-500 group">
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

      <AuditCTA />

      {/* 🚀 WORKING PROCESS MATRIX SECTION */}
      <section className="relative py-24 2xl:py-40 px-6 overflow-hidden bg-[#030303] selection:bg-blue-600/30">
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:30px_30px] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.05)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto relative z-10">
          {/* HEADER SECTION */}
          <div className="mb-20 text-center md:text-left border-b border-white/5 pb-10">
            <div className="flex items-center gap-2 mb-4 bg-blue-500/10 w-fit px-3 py-1 rounded-full border border-blue-500/20 mx-auto md:mx-0">
              <Zap size={12} className="text-blue-400" />
              <span className="text-[9px] 2xl:text-xs font-black uppercase tracking-[3px] text-blue-300">Engineered Ranking</span>
            </div>
            <h3 className="text-[2.2rem] md:text-[2.8rem] lg:text-[3.5rem] font-black tracking-tighter leading-[1.1] md:leading-[1.05] text-white normal-case">
              Our{" "}
              <span className="inline-block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent uppercase">
                Strategy For Success
              </span>
            </h3>
          </div>

          {/* TIMELINE MATRIX */}
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-blue-500/30 via-white/10 to-transparent -translate-x-1/2 hidden md:block" />

            <div className="flex flex-col gap-6 md:gap-12">
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
                        className="relative p-6 md:p-8 2xl:p-12 rounded-[1.8rem] 2xl:rounded-[2.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl hover:bg-white/[0.04] hover:border-blue-500/30 transition-all duration-500 text-left"
                      >
                        <div className="absolute -top-3 -right-3 w-10 h-10 2xl:w-14 2xl:h-14 rounded-full bg-[#030303] border border-white/10 flex items-center justify-center text-white font-mono text-[11px] 2xl:text-base font-bold group-hover:border-blue-500/50 transition-colors z-10 shadow-lg">
                          {step.id}
                        </div>

                        <div className="flex flex-col gap-4">
                          <div className="flex items-center gap-4">
                            <div className="shrink-0 w-11 h-11 md:w-12 md:h-12 2xl:w-16 2xl:h-16 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
                              {step.icon}
                            </div>
                            <h3 className="text-xl md:text-2xl 2xl:text-3xl font-bold text-white tracking-tight uppercase">
                              {step.title}
                            </h3>
                          </div>

                          <p className="text-white text-[16px] sm:text-sm md:text-base lg:text-[16px] 2xl:text-lg 3xl:text-xl font-medium leading-relaxed antialiased tracking-wide opacity-90 group-hover:opacity-100 transition-all duration-300">
                            {step.desc}
                          </p>
                        </div>

                        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-[40%] transition-all duration-700" />
                      </motion.div>
                    </div>

                    {/* CENTRAL TIMELINE DOT */}
                    <div className="absolute left-4 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block">
                      <div className="w-5 h-5 2xl:w-8 2xl:h-8 rounded-full bg-[#030303] border border-white/10 flex items-center justify-center group-hover:border-blue-500 transition-all duration-500 group-hover:scale-110">
                        <div className="w-2 h-2 2xl:w-3 2xl:h-3 bg-zinc-700 rounded-full group-hover:bg-blue-400 transition-all" />
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

      {/* Why Chose ue */}
      <section className="relative py-16 md:py-24 2xl:py-32 bg-[#020617] overflow-hidden border-b border-white/5">

        {/* Background Dots & Glow */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{ backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
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
                <h3 className="!text-[2.3rem]  md:!text-[2.5rem] lg:!text-[3.2rem]  font-black text-white tracking-tighter leading-[1.1] lg:leading-[1] mb-6">
                  Why Choose Our SEO
                  <br />
                  <span className="block mt-2 py-1 pr-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Company For Your Business?
                  </span>
                </h3>

                <div className="space-y-8 max-w-xl 2xl:max-w-3xl">
                  {/* Paragraph 1 */}
                  <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed mx-auto lg:mx-0 opacity-90">
                    We design high-ranking websites that don't just look great—they actively grow your business online. By blending clean design with advanced SEO strategies, we build fast, mobile-friendly sites that catch Google's attention and turn everyday search traffic into loyal customers.
                  </p>

                  {/* Border section left panel */}
                  <div className="space-y-6 border-l-2 border-blue-500/50 pl-5 mt-6">
                    {/* Paragraph 2 */}
                    <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed mx-auto lg:mx-0 opacity-90">
                      Our team works side-by-side with you to understand your market, target high-volume keywords, and deliver an online presence that perfectly fits your brand.
                    </p>

                    {/* Paragraph 3 */}
                    <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed mx-auto lg:mx-0 opacity-90">
                      From the first line of code to ongoing optimization, we offer complete digital solutions backed by clear communication, fair pricing, and reliable results to help your business outrank the competition.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* RIGHT SIDE: Cards */}
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

                      {/* Icon & Heading */}
                      <div className="flex items-center gap-4">
                        <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 2xl:w-16 2xl:h-16 flex items-center justify-center rounded-xl bg-white/[0.05] text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
                          {item.icon}
                        </div>

                        <h4 className="flex-1 font-black text-sm md:text-[14px] 2xl:text-xl tracking-[1px]  leading-tight bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-500">
                          {item.title}
                        </h4>
                      </div>

                      {/* Card Description */}
                      <p className="text-white text-[16px] md:text-base lg:text-[16px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed max-w-xl 2xl:max-w-3xl mx-auto lg:mx-0 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                        {item.desc}
                      </p>
                    </div>

                    {/* Corner Check Icon */}
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
      <SeoFAQ />

      <ClientTrust />
    </main>
  );
}