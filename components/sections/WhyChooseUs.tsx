"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, TrendingUp, Star, CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: <Zap className="w-5 h-5 2xl:w-10 2xl:h-10" />,
    title: "Modern Tools",
    desc: "We leverage industry-leading tech to build high-converting assets.",
  },
  {
    icon: <Star className="w-5 h-5 2xl:w-10 2xl:h-10" />,
    title: "Creative Thinking",
    desc: "Strategies built from the ground up to fit your specific goals.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 2xl:w-10 2xl:h-10" />,
    title: "Proven Methods",
    desc: "Data-backed execution that ensures meaningful, measurable growth.",
  },
  {
    icon: <TrendingUp className="w-5 h-5 2xl:w-10 2xl:h-10" />,
    title: "Meaningful Results",
    desc: "Focusing on visibility, trust, and real-world brand success.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-8 md:py-12 2xl:py-20 bg-[#020617] overflow-hidden">
      
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
      
      <div className="absolute top-1/4 -right-20 w-[400px] 2xl:w-[800px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[110rem] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 2xl:gap-20 items-center">

          {/* LEFT SIDE */}
          <div className="lg:col-span-6 space-y-6 2xl:space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
            

              <h2 className="text-4xl md:text-6xl 2xl:text-9xl font-black text-white tracking-tighter leading-[0.9] mb-6 md:mb-8">
                Why Choose <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 ">High Rise Digital</span>
              </h2>

              <div className="space-y-4 2xl:space-y-10">
                <p className="text-zinc-200 text-lg 2xl:text-4xl font-medium leading-relaxed max-w-2xl">
                  Choosing High Rise Digital means working with a team that is fully committed to your success. 
                </p>
                
                <div className="space-y-4 2xl:space-y-8 border-l-2 border-white/10 pl-6 2xl:pl-12">
                  <p className="text-zinc-400 text-sm 2xl:text-2xl leading-relaxed max-w-xl">
                    Our experts use modern tools, creative thinking, and proven methods to deliver meaningful results. We value clear communication and timely delivery.
                  </p>

                  <p className="text-zinc-400 text-sm 2xl:text-2xl leading-relaxed max-w-xl">
                    Every project is handled with care and attention, ensuring your brand gets the visibility, trust, and growth it deserves.
                  </p>
                </div>
              </div>

              {/* <div className="pt-8 2xl:pt-16 flex flex-wrap gap-3 2xl:gap-6">
                 {["Transparency", "Growth", "Innovation"].map((tag) => (
                    <span key={tag} className="px-4 py-1.5 2xl:px-10 2xl:py-3 rounded-full border border-white/10 bg-white/[0.03] text-[9px] 2xl:text-xl font-bold text-zinc-500 uppercase tracking-widest hover:text-blue-400 hover:border-blue-500/50 transition-all cursor-default">
                       {tag}
                    </span>
                 ))}
              </div> */}
            </motion.div>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 2xl:gap-8 relative">
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-blue-500/20 blur-[100px] rounded-full pointer-events-none" />

              {features.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative p-5 2xl:p-10 rounded-2xl md:rounded-[2rem] 2xl:rounded-[3.5rem] border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-xl group transition-all duration-500 hover:border-blue-500/40
                    ${index % 2 !== 0 ? 'md:translate-y-8 2xl:translate-y-16' : ''}`} 
                >
                  <div className="relative z-10 space-y-3 2xl:space-y-4">
                    <div className="flex items-center gap-2.5 md:gap-3">
                      <div className="shrink-0 w-8 h-8 md:w-9 md:h-9 2xl:w-14 2xl:h-14 flex items-center justify-center rounded-lg md:rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
                        {item.icon}
                      </div>
                      <h4 className="flex-1 text-white font-black text-xs md:text-sm 2xl:text-xl tracking-tight leading-snug  break-words">
                        {item.title}
                      </h4>
                    </div>
                    
                    <p className="text-zinc-500 text-[11px] md:text-xs 2xl:text-base leading-relaxed group-hover:text-zinc-300 transition-colors">
                      {item.desc}
                    </p>
                  </div>

                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-10 transition-opacity">
                    <CheckCircle2 className="text-white w-5 h-5 2xl:w-12 2xl:h-12" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}