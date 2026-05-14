"use client";

import { motion } from "framer-motion";
import { BarChart3, Eye, Target, TrendingUp } from "lucide-react";

const FEATURES = [
  {
    title: "Measurable Results",
    desc: "Delivering measurable results through strategic and data-driven marketing campaigns.",
    icon: <BarChart3 className="text-blue-400 w-4 h-4 md:w-5 md:h-5 2xl:w-8 2xl:h-8" />,
  },
  {
    title: "Brand Visibility",
    desc: "Increasing brand visibility with innovative and creative digital solutions.",
    icon: <Eye className="text-cyan-400 w-4 h-4 md:w-5 md:h-5 2xl:w-8 2xl:h-8" />,
  },
  {
    title: "Higher Conversions",
    desc: "Improving conversions through targeted audience engagement and optimization techniques.",
    icon: <Target className="text-blue-500 w-4 h-4 md:w-5 md:h-5 2xl:w-8 2xl:h-8" />,
  },
  {
    title: "Consistent Growth",
    desc: "Ensuring consistent growth with performance-focused marketing strategies and analysis.",
    icon: <TrendingUp className="text-cyan-500 w-4 h-4 md:w-5 md:h-5 2xl:w-8 2xl:h-8" />,
  },
];

export default function ProvenExcellence() {
  return (
    // 🛠️ Ultra-slim top/bottom padding 
    <section className="relative bg-[#030303] py-8 md:py-12 2xl:py-16 px-6 overflow-hidden">
      
      {/* 🌌 Decorative Glows */}
      <div className="absolute top-1/4 -left-20 w-[400px] 2xl:w-[800px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[300px] 2xl:w-[600px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[100rem] mx-auto relative z-10">
        {/* 📐 12-Column Grid for exact optical balance */}
        <div className="grid lg:grid-cols-12 gap-8 md:gap-12 2xl:gap-20 items-center">
          
          {/* LEFT: Main Content Area (5 Columns for tighter text block) */}
          <div className="lg:col-span-5 space-y-4 md:space-y-6 2xl:space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
           
              {/* 🎯 Heading size made slightly smaller to maintain vertical balance */}
       <h2 className="text-2xl md:text-4xl 2xl:text-6xl font-light text-white leading-[1.1] tracking-tighter">
  Proven Excellence in <br />
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
    Digital Marketing
  </span>
</h2>
              
              <div className="mt-4 md:mt-6 space-y-3 md:space-y-4 2xl:space-y-8 text-slate-400 text-sm md:text-base 2xl:text-2xl leading-relaxed max-w-xl">
                <p>
                  We consistently deliver measurable digital growth through strategic planning, creative execution, and performance-focused campaigns.
                </p>
                <p>
                  Our approach combines data insights with innovative marketing techniques to ensure every project achieves strong visibility and engagement.
                </p>
                <div className="border-l-2 border-blue-500/50 pl-4">
                   <p className="text-xs md:text-sm 2xl:text-lg italic text-slate-500">
                    We help brands stay competitive and achieve sustainable success.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Features Grid (7 Columns to give cards more breathing room horizontally) */}
         <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4 2xl:gap-6">
  {FEATURES.map((feature, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      whileHover={{ y: -3 }}
      className="group p-4 md:p-5 2xl:p-8 rounded-xl md:rounded-2xl border border-white/5 bg-white/[0.02] hover:border-blue-500/30 hover:bg-white/[0.04] transition-all duration-500 relative overflow-hidden shadow-2xl"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 space-y-2.5 md:space-y-3">
        
        {/* 🟢 Icon & Label - Using p tag with heading styles */}
        <div className="flex items-center gap-2.5 md:gap-3">
          <div className="shrink-0 w-7 h-7 md:w-8 md:h-8 2xl:w-11 2xl:h-11 rounded-lg bg-white/[0.03] flex items-center justify-center group-hover:bg-blue-500/20 transition-all duration-500">
            <div className="scale-75 md:scale-90 2xl:scale-110">
              {feature.icon}
            </div>
          </div>
          
          {/* 🛠️ CHANGED: h3 replaced with p, font styles preserved for impact */}
          <p className="flex-1 text-white font-black text-[10px] md:text-[11px] 2xl:text-sm tracking-[2.5px] md:tracking-[3px] leading-tight uppercase break-words group-hover:text-blue-400 transition-colors">
            {feature.title}
          </p>
        </div>
        
        <p className="text-slate-500 text-[10px] md:text-[11px] 2xl:text-xs leading-relaxed group-hover:text-slate-300 transition-colors">
          {feature.desc}
        </p>
      </div>

      <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="w-1 h-1 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
      </div>
    </motion.div>
  ))}
</div>

        </div>
      </div>
    </section>
  );
}