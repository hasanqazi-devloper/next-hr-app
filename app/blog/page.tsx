"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; 
import { motion, AnimatePresence } from "framer-motion";
import { User, ArrowRight, Flame } from "lucide-react";
import { posts } from "@/lib/blogData";

const categories = ["all", "seo", "marketing", "web"];

export default function BlogPage() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? posts
      : posts.filter((p) => p.category === active);

  return (
    <main className="bg-[#020617] text-white min-h-screen selection:bg-blue-600 antialiased overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
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

        {/* Full Sized Padded Content Wrapper - Synced Geometry */}
<div className="relative z-10 w-full mx-auto text-center lg:text-left px-6 pt-32 pb-16 md:pt-20 md:pb-24 lg:max-w-full lg:pt-40 lg:pb-28 lg:pl-40 2xl:mx-0 2xl:max-w-[1500px] 2xl:pt-48 2xl:pb-36 2xl:pl-80 3xl:mx-0 3xl:max-w-[1800px] 3xl:pt-60 3xl:pb-44 3xl:pl-72">
          <div className="max-w-5xl">
            
            {/* Glassmorphism Badge Container */}
            <div className="flex items-center gap-2.5 mb-8 w-fit px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md mx-auto md:mx-0">
              <Flame size={12} className="text-blue-400 animate-pulse" />
              <span className="text-[10px] font-black tracking-[4px] text-blue-300 uppercase">Blog & Resources</span>
            </div>

            {/* Main Typography Block with Tight Line Height */}
            <h1 className="text-[3rem]  md:text-[3.2rem] lg:text-[3.8rem]  font-black tracking-tighter leading-[0.8] text-white mb-8 normal-case">
              OUR {" "}
              <span className="uppercase bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text">
                Insights.
              </span>
            </h1>

            {/* Description Paragraph */}
           <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed max-w-xl 2xl:max-w-3xl mx-auto lg:mx-0 opacity-80">
  Explore our architectural blueprints and technical deployments engineered to convert traffic into revenue.
</p>
          </div>
        </div>
      </div>
    </section>
     {/* 2. STRATEGY MATRIX FEED */}
<section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16 2xl:py-20">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
    <AnimatePresence mode="wait">
      {filtered.map((post, index) => (
        <motion.div
          key={post.slug}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          className={post.size || "col-span-1"}
        >
          <Link
            href={`/blog/${post.slug}`}
            className="group flex flex-col justify-between relative h-full bg-[#030712] border border-white/5 rounded-2xl overflow-hidden transition-all duration-500 hover:border-blue-500/20 hover:bg-zinc-950/50 shadow-xl"
          >
            <div>
              {/* --- CARD IMAGE SECTION (Slick Radius Applied) --- */}
              <div className="relative w-full h-48 md:h-52 overflow-hidden bg-zinc-900 rounded-t-2xl">
                <Image 
                  src={post.image || "/placeholder-blog.jpg"} 
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />
                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] to-transparent opacity-60" />
              </div>

              {/* --- CARD CONTENT --- */}
              <div className="relative z-10 p-5 md:p-6 pt-4">
                <div className="flex items-center gap-2 text-white/40 text-[10px] font-bold tracking-[2px] uppercase mb-4 border-b border-white/5 pb-3">
                  <User size={12} className="text-blue-500/70" /> 
                  <span>{post.author}</span>
                </div>
                
                <h3 className="text-lg md:text-xl font-bold mb-2 tracking-tight leading-snug text-white group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-white/90 text-[16px] md:text-[16px] lg:text-[14px] 2xl:text-base font-normal leading-relaxed line-clamp-3 max-w-full antialiased">
                  {post.excerpt}
                </p>
              </div>
            </div>
            
            {/* --- CARD FOOTER ACTION (Gap Checked) --- */}
            <div className="relative z-10 px-5 md:px-6 pb-6 mt-auto">
              <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[2px] text-blue-400 group-hover:text-blue-300 transition-colors">
                <span>READ CASE STUDY</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Background Tech Grid Lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:25px_25px] pointer-events-none rounded-2xl" />
          </Link>
        </motion.div>
      ))}
    </AnimatePresence>
  </div>
</section>
    </main>
  );
}