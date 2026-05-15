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
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <Image
            src="/home-hero.jpg"
            alt="Mesh Grid"
            fill
            priority 
            sizes="100vw"
            className="object-cover object-top opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/40 to-[#020617]" />
        </div>

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/[0.05] blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-16 md:pt-40">
          <div className="max-w-5xl">
            <div className="flex items-center gap-2.5 mb-8 w-fit px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md">
              <Flame size={12} className="text-blue-400 animate-pulse" />
              <span className="text-[10px] font-black tracking-[4px] text-blue-300 ">Blog & Resources</span>
            </div>

            <h1 className="text-6xl sm:text-8xl md:text-[100px] font-black tracking-tighter leading-[0.8] text-white mb-8 normal-case">
              OUR {" "}
              <span className="uppercase bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text">
                Insights.
              </span>
            </h1>
            <p className="text-white-500 text-lg md:text-xl lg:text-2xl max-w-2xl leading-relaxed opacity-80 font-normal">
              Explore our architectural blueprints and technical deployments engineered to convert traffic into revenue.
            </p>
          </div>
        </div>
      </section>

      {/* 2. STRATEGY MATRIX FEED */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-32">
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
                  className="group block relative h-full bg-[#030712] border border-white/5 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:border-blue-500/20 hover:bg-zinc-950/50 shadow-xl"
                >
                  {/* --- CARD IMAGE SECTION --- */}
                  <div className="relative w-full h-52 overflow-hidden bg-zinc-900">
                    <Image 
                      src={post.image || "/placeholder-blog.jpg"} // Har post mein image hona lazmi hy
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                    />
                    {/* Image Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030712] to-transparent opacity-60" />
                  </div>

                  <div className="relative z-10 flex flex-col h-full p-6 md:p-8 pt-4">
                    <div className="mb-6">
                      <div className="flex items-center gap-2 text-zinc-500 text-[10px] font-bold tracking-[2px] uppercase mb-4 border-b border-white/5 pb-3">
                        <User size={12} className="text-blue-500/70" /> 
                        <span>{post.author}</span>
                      </div>
                      
                      <h2 className="!text-xl md:!text-2xl !font-bold !mb-3 !tracking-tight !leading-tight text-white group-hover:text-blue-400 transition-colors !m-0">
                        {post.title}
                      </h2>
                      
                      <p className="!text-zinc-500 !text-sm !leading-relaxed line-clamp-3 !font-normal !max-w-full">
                        {post.excerpt}
                      </p>
                    </div>
                    
                    <div className="mt-auto pt-6 border-t border-white/5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[2px] text-blue-400 group-hover:text-blue-300 transition-colors">
                      <span>READ CASE STUDY</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:25px_25px] pointer-events-none" />
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}