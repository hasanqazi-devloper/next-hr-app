"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Cpu, BarChart3 } from "lucide-react";

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

export default function PortfolioBento() {
  return (
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
            <h2 className="!text-[2rem] sm:!text-4xl md:!text-4xl lg:!text-[2.8rem] xl:!text-[3rem] 2xl:!text-7xl 3xl:!text-8xl font-black tracking-tighter leading-[1.1] lg:leading-none text-white">
              Client’s Case Studies
            </h2>
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
                    <h3 className="text-2xl 2xl:text-5xl font-black tracking-tight uppercase">{project.title}</h3>
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
                    <h4 className="text-4xl 2xl:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">{project.metrics}</h4>
                    <p className="text-xs 2xl:text-xl text-zinc-400 font-medium leading-relaxed">System parameters benchmarked via real-time testing.</p>
                  </div>
                  <div className="space-y-1 relative z-10">
                    <span className="text-[10px] 2xl:text-base uppercase tracking-[3px] text-zinc-500 font-bold block">{project.category}</span>
                    <h3 className="text-2xl 2xl:text-5xl font-black tracking-tight uppercase">{project.title}</h3>
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
                    <h3 className="text-2xl 2xl:text-5xl font-black tracking-tight uppercase">{project.title}</h3>
                    <p className="text-[10px] 2xl:text-lg text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500">{project.metrics}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}