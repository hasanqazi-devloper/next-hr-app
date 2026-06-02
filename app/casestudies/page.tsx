"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
// 🎯 FIXED: Missing icons (ArrowUpRight, ExternalLink) successfully imported here
import { ArrowUpRight, Flame, ExternalLink } from "lucide-react";

// ========================================================
// 📦 CENTRALISED PROJECTS ACQUISITION Blueprints Array
// ========================================================
export const projects = [
  // --- WEBSITE DEVELOPMENT (10 Unique Projects) ---
  {
    slug: "rmc-roofing",
    title: "RMC Roofing",
    category: "web",
    image: "/web1.jpg",
    liveUrl: "https://rmcroofingnm.com/"
  },
  {
    slug: "famme-propre",
    title: "Famme Propre",
    category: "web",
    image: "/web2.jpg",
    liveUrl: "https://www.femmepropre.co.uk/"
  },
  {
    slug: "channel1",
    title: "Channel1",
    category: "web",
    image: "/web3.jpg",
    liveUrl: "https://channel1.com.au/"
  },
  {
    slug: "doctors-of-osteo",
    title: "Doctors Of Osteo",
    category: "web",
    image: "/web4.jpg",
    liveUrl: "https://www.doctorsofosteo.com.au/"
  },
  {
    slug: "feeding-fussy-kids",
    title: "Feeding Fussy Kids",
    category: "web",
    image: "/web5.jpg",
    liveUrl: "https://feedingfussykids.com/"
  },
  {
    slug: "fund-me",
    title: "Fund Me",
    category: "web",
    image: "/web6.jpg",
    liveUrl: "https://fundme.nz/"
  },
  {
    slug: "mango-credit",
    title: "Mango Credit",
    category: "web",
    image: "/web7.jpg",
    liveUrl: "https://mangocredit.com.au/"
  },
  {
    slug: "car-recovery",
    title: "Car Recovery London",
    category: "web",
    image: "/web8.jpg",
    liveUrl: "https://carsrecoverylondon.com/"
  },
  {
    slug: "zaiqah-royal",
    title: "Zaiqah Royale",
    category: "web",
    image: "/web9.jpg",
    liveUrl: "https://zaiqahroyale.com/"
  },
  {
    slug: "rino-roofing",
    title: "Rhino Roofing Orlando",
    category: "web",
    image: "/web10.jpg",
    liveUrl: "https://rhinoroofingorlando.com/"
  },

  // --- SEO PERFORMANCE CAMPAIGNS (6 Projects) ---
  {
    slug: "rhino-orlando",
    title: "170% Leads Increased For Roofing Company",
    category: "seo",
    image: "/rino-roffers.jpg"
  },
  {
    slug: "breez-care",
    title: "+11% Total Sales Revenue Increased For Oral Care Brand",
    category: "seo",
    image: "/smile-care.jpg"
  },
  {
    slug: "west-london-cleaners",
    title: "+28% Organic Traffic Increase For Local Cleaning Company",
    category: "seo",
    image: "/cleaning.jpg"
  },
  {
    slug: "australia-restaurant-seo",
    title: "+6.69K Clicks in Just 3 Months For Local Restaurant",
    category: "seo",
    image: "/burger.jpg"
  },
  {
    slug: "aesthetic-clinic-seo",
    title: "+1.76K Leads For Aesthetic Clinic",
    category: "seo",
    image: "/clinic.jpg"
  },
  {
    slug: "holistic-doctor-clinic",
    title: "#1 Position in SERP For Holistic Doctor Clinic",
    category: "seo",
    image: "/dr.jpg"
  },

  // --- SOCIAL MEDIA MARKETING PERFORMANCE ---
  {
    slug: "australia-real-estate-social",
    title: "31% INCREASE IN QUALIFIED PROPERTY LEADS VIA HIGH-INTENT SOCIAL FUNNELS",
    category: "social",
    image: "/realestate.jpg"
  },
  {
    slug: "fitness-brand-ecommerce",
    title: "$598,541 IN SALES AT 22X ROAS FOR PRIVATE LABEL FITNESS BRAND VIA HIGH-CONVERTING FUNNELS",
    category: "social",
    image: "/gym.jpg"
  },
  {
    slug: "fashion-brand-ecommerce",
    title: "1,044 WEBSITE PURCHASES FOR FASHION BRAND IN 2 MONTHS AT 23.85X ROAS VIA DIRECT-RESPONSE FUNNELS",
    category: "social",
    image: "/brand.jpg"
  },
  {
    slug: "home-living-ecommerce",
    title: "25.10X ROAS FOR HOME & LIVING BRAND VIA HIGH-CONVERTING PAID SOCIAL FUNNELS",
    category: "social",
    image: "/roas.jpg"
  }
];

const filters = [
  { id: "all", label: "All Cases" },
  { id: "web", label: "Web Development" },
  { id: "seo", label: "SEO " },
  { id: "social", label: "Social Media Marketing" }
];

export default function PortfolioPage() {
  const [active, setActive] = useState("all");

  const filtered = active === "all" ? projects : projects.filter(p => p.category === active);

  return (
    <main className="bg-[#111827] text-zinc-100 selection:bg-blue-600 overflow-x-hidden min-h-screen antialiased pb-24">

      {/* 1. HERO SECTION */}
      <section className="relative w-full overflow-hidden bg-[#030712]">
        <div className="w-full">
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

          {/* Full Sized Content Wrapper */}
          <div className="relative z-10 w-full mx-auto text-center lg:text-left px-6 pt-32 pb-16 md:pt-20 md:pb-24 lg:max-w-full lg:pt-40 lg:pb-16 lg:pl-40 2xl:mx-0 2xl:max-w-[1500px] 2xl:pt-48 2xl:pl-80">
            <div className="max-w-5xl">
              {/* Glassmorphism Badge Container */}
              <div className="flex items-center gap-2.5 mb-8 w-fit px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md mx-auto lg:mx-0">
                <Flame size={12} className="text-blue-400 animate-pulse" />
                <span className="text-[10px] font-black tracking-[4px] text-blue-300 uppercase">ABOUT HIGH RISE</span>
              </div>

              {/* Main Typography Block */}
              <h1 className="text-[3rem] md:text-[3.2rem] lg:text-[3.8rem] 2xl:text-[5rem] font-black tracking-tighter leading-none text-white mb-8">
                CASE{" "}
                <span className="bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text">
                  STUDIES.
                </span>
              </h1>

              {/* Description Paragraph */}
              <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl font-medium leading-relaxed max-w-xl 2xl:max-w-3xl mx-auto lg:mx-0">
                Explore expert insights, digital marketing tips, and strategies to grow your business with our latest
                blogs and industry updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PREMIUM FILTER CONTROL CONTROLLER */}
      <section className="w-full px-6 mb-16 relative z-30 flex justify-center mt-6">
        <div className="flex flex-wrap gap-1.5 bg-zinc-900/60 p-1.5 rounded-xl border border-white/5 backdrop-blur-xl shadow-2xl items-center justify-center">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActive(f.id)}
              className={`px-5 py-2 rounded-lg text-[10px] font-mono uppercase tracking-wider font-bold transition-all duration-300 ${
                active === f.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/10"
                  : "text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.02]"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

  {/* 🎯 PREMIUM 3-COLUMN LUXURY BENTO GRID */}
<section className="w-full px-4 sm:px-6 md:px-16 max-w-[1400px] mx-auto relative z-20 py-12">
  <motion.div
    layout
    // 🎯 FIXED: Grid layout altered seamlessly from 2 to 3 columns on desktop views
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full"
  >
    <AnimatePresence mode="popLayout">
      {filtered.map((item) => {
        const isWeb = item.category === "web";

        const CardContent = (
          <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            // 🔄 UPGRADED HOVER EFFECTS: Dynamic lift, active glass intensity, and deep glow shadows applied below
            className="w-full flex flex-col group cursor-pointer relative rounded-3xl p-3 bg-zinc-900/30 border border-white/[0.05] hover:border-blue-500/40 hover:bg-zinc-900/60 hover:-translate-y-2 shadow-xl hover:shadow-[0_20px_40px_rgba(0,112,255,0.1)] transition-all duration-500 backdrop-blur-sm h-full justify-between"
          >
            <div>
              {/* Image wrapper with Cinematic Aspect Ratio */}
              <div className="aspect-[16/9.5] w-full rounded-2xl overflow-hidden mb-5 border border-white/[0.03] relative bg-[#070b14] shadow-xl">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06] filter brightness-[0.85] group-hover:brightness-100"
                  priority
                />

                {/* Ambient Deep Depth Vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/10 to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-500" />

                {/* 🔥 LUXURY BADGE: Smooth floating status indicator */}
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-white/10 rounded-full px-3 py-1 flex items-center gap-2 transform transition-transform duration-500 group-hover:translate-x-1">
                  <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                    item.category === "web" ? "bg-cyan-400 shadow-[0_0_8px_#22d3ee]" : item.category === "seo" ? "bg-blue-400 shadow-[0_0_8px_#60a5fa]" : "bg-purple-400 shadow-[0_0_8px_#c084fc]"
                  }`} />
                  <span className="text-[9px] uppercase tracking-widest font-black text-white/80">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Typography Content Area */}
              <div className="px-3 w-full pb-3">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-[18px] sm:text-xl font-black tracking-tight text-white group-hover:text-cyan-400 transition-colors duration-300 leading-snug">
                    {item.title}
                  </h3>

                  {/* Micro-interactive Action trigger container */}
                  <div className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-cyan-400 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/40 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 shrink-0 mt-0.5">
                    {isWeb && item.liveUrl ? <ExternalLink size={14} /> : <ArrowUpRight size={14} />}
                  </div>
                </div>
              </div>
            </div>

            {/* 🔥 PREMIUM LASER AURA UNDERLAY: Bottom glow strip animation */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out shadow-[0_0_20px_#06b6d4] z-10" />
          </motion.div>
        );

        if (isWeb && item.liveUrl) {
          return (
            <a href={item.liveUrl} key={item.slug} target="_blank" rel="noopener noreferrer" className="block h-full">
              {CardContent}
            </a>
          );
        }

        return (
          <Link href={`/casestudies/${item.slug}`} key={item.slug} className="block h-full">
            {CardContent}
          </Link>
        );
      })}
    </AnimatePresence>
  </motion.div>
</section>

    </main>
  );
}