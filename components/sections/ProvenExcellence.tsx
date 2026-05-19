"use client";

import { motion } from "framer-motion";
import { BarChart3, Eye, Target, TrendingUp } from "lucide-react";

const FEATURES = [
  {
    title: "Measurable Results",
    desc: "Delivering measurable results through strategic and data-driven marketing campaigns.",
    icon: <BarChart3 className="text-blue-400 w-5 h-5 2xl:w-8 2xl:h-8" />,
  },
  {
    title: "Brand Visibility",
    desc: "Increasing brand visibility with innovative and creative digital solutions.",
    icon: <Eye className="text-cyan-400 w-5 h-5 2xl:w-8 2xl:h-8" />,
  },
  {
    title: "Higher Conversions",
    desc: "Improving conversions through targeted audience engagement and optimization techniques.",
    icon: <Target className="text-blue-500 w-5 h-5 2xl:w-8 2xl:h-8" />,
  },
  {
    title: "Consistent Growth",
    desc: "Ensuring consistent growth with performance-focused marketing strategies and analysis.",
    icon: <TrendingUp className="text-cyan-500 w-5 h-5 2xl:w-8 2xl:h-8" />,
  },
];

export default function ProvenExcellence() {
  return (
    <section className="relative bg-[#030303] py-16 md:py-24 2xl:py-32 px-6 overflow-hidden border-b border-white/5">
      
      {/* 🌌 Decorative Glows */}
      <div className="absolute top-1/4 -left-20 w-[400px] 2xl:w-[800px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[110rem] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 xl:gap-20 2xl:gap-24 items-center">
          
          {/* LEFT: Main Content Area */}
          <div className="space-y-6 md:space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
            {/* 🎯 MATCHED EXACT DESIGN SYSTEM FRAMEWORK */}
<h3 className="text-[2.3rem] sm:text-4xl md:text-4xl lg:text-[2.5rem] xl:text-[3.2rem] font-black tracking-tighter leading-[1.1] lg:leading-[1] text-white normal-case mb-6">
  
 Scale Your Business 
  {/* 🎯 MATCHED GRADIENT BLOCK: Corrected context, kept perfect breathing padding */}
  <span className="block mt-0 py-1 pr-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
    with Marketing Solutions
  </span>
</h3>
      {/* 🎯 SYNCED PERFORMANCE BLOCK WITH UNIFORM RESPONSIVE TYPOGRAPHY */}
<div className="space-y-4 max-w-xl 2xl:max-w-3xl">
  
  {/* Paragraph 1 */}
  <p className="text-white text-[16px] sm:text-sm md:text-base lg:text-[16px] 2xl:text-lg 3xl:text-xl font-medium leading-relaxed mx-auto lg:mx-0 opacity-90">
    We consistently deliver measurable digital growth through strategic planning, creative execution, and performance-focused campaigns. Our approach combines data insights with innovative marketing techniques to ensure every project achieves strong visibility and engagement, helping brands stay competitive and achieve sustainable success.
  </p>

  {/* Paragraph 2 */}
  <p className="text-white text-[16px] sm:text-sm md:text-base lg:text-[16px] 2xl:text-lg 3xl:text-xl font-medium leading-relaxed mx-auto lg:mx-0 opacity-90">
    Instead of relying on guesswork, we dive deep into market trends and audience behavior to build a custom roadmap tailored specifically to your business goals. From high-converting website layouts to targeted search and social campaigns, we optimize every single touchpoint of your online footprint.
  </p>

  {/* Left border block */}
    {/* Paragraph 3 inside Border Block */}
    <p className="text-white text-[16px] sm:text-sm md:text-base lg:text-[16px] 2xl:text-lg 3xl:text-xl font-medium leading-relaxed mx-auto lg:mx-0 opacity-90">
      We don’t just chase temporary vanity metrics like likes or empty clicks; we focus entirely on driving real engagement, capturing qualified leads, and building long-term customer loyalty that scales your business predictably.
    </p>
</div> </motion.div>
          </div>

          {/* RIGHT: Features Grid (Balanced Layout & Highly Readable Cards) */}
          <div className="grid sm:grid-cols-2 gap-6 xl:gap-8">
            {FEATURES.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-6 md:p-8 2xl:p-12 rounded-2xl md:rounded-3xl border border-white/10 bg-white/[0.03] hover:border-blue-500/50 hover:bg-white/[0.07] transition-all duration-500 relative overflow-hidden shadow-2xl flex flex-col justify-between"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 space-y-4 md:space-y-5">
                  
                  {/* Icon Container */}
              {/* 🟢 Icon & Heading in ONE LINE with Attractive Gradient Color */}
<div className="flex items-center gap-4">
  {/* Icon Container */}
  <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 2xl:w-16 2xl:h-16 rounded-xl bg-white/[0.05] flex items-center justify-center group-hover:bg-blue-500/20 transition-all duration-500">
    {feature.icon}
  </div>
  
  {/* Card Title - Premium Multi-Color Gradient Layout */}
 <h4 className="font-black text-[1.0rem] sm:text-[1.2rem] lg:text-[1.2rem] 2xl:text-[1.5rem] 3xl:text-[1.875rem] tracking-wider uppercase leading-tight bg-gradient-to-r from-white via-cyan-300 to-blue-400 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-500">
  {feature.title}
</h4>
</div>
                  
                  {/* Janni, Card Description ko Pure White, Bara (15px) aur Medium weight de diya hai */}
                 <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed max-w-xl 2xl:max-w-3xl mx-auto lg:mx-0 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
  {feature.desc}
</p>
                </div>

                {/* Corner Indicator */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}