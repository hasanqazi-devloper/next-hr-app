"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, TrendingUp, Star, CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: <Zap className="w-5 h-5 2xl:w-8 2xl:h-8" />,
    title: "Modern Tools",
    desc: "We leverage industry-leading tech to build high-converting assets.",
  },
  {
    icon: <Star className="w-5 h-5 2xl:w-8 2xl:h-8" />,
    title: "Creative Thinking",
    desc: "Strategies built from the ground up to fit your specific goals.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 2xl:w-8 2xl:h-8" />,
    title: "Proven Methods",
    desc: "Data-backed execution that ensures meaningful, measurable growth.",
  },
  {
    icon: <TrendingUp className="w-5 h-5 2xl:w-8 2xl:h-8" />,
    title: "Meaningful Results",
    desc: "Focusing on visibility, trust, and real-world brand success.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-16 md:py-24 2xl:py-32 bg-[#020617] overflow-hidden border-b border-white/5">
      
      {/* Background Dots & Glow */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
      <div className="absolute top-1/4 -right-20 w-[400px] 2xl:w-[800px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[110rem] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 xl:gap-16 2xl:gap-24 items-center">

          {/* LEFT SIDE: Content (Balanced with Sizing Framework) */}
          <div className="lg:col-span-6 space-y-6 md:space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* 🎯 Adjusted Responsive Heading for Laptop Screen Balance */}
              <h2 className="!text-[2rem] sm:!text-4xl md:!text-4xl lg:!text-[2.8rem] xl:!text-[3rem] 2xl:!text-7xl font-black text-white tracking-tighter leading-[1.2] lg:leading-[1.1] mb-6 md:mb-8">
                Why Choose <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">High Rise Digital</span>
              </h2>

              <div className="space-y-5 text-zinc-300 text-sm md:text-base 2xl:text-lg 4xl:text-2xl font-normal leading-relaxed max-w-xl 2xl:max-w-3xl">
                <p>
                  Choosing High Rise Digital means working with a team that is fully committed to your success.
                </p>

                <div className="space-y-5 border-l-2 border-blue-500/50 pl-5 mt-6">
                  <p>
                    Our experts use modern tools, creative thinking, and proven methods to deliver meaningful results. We value clear communication and timely delivery.
                  </p>

                  <p className="text-white-400 ">
                    Every project is handled with care and attention, ensuring your brand gets the visibility, trust, and growth it deserves.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Cards (Enhanced Contrast & Highly Readable Layout) */}
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
                    
                    {/* 🟢 Icon & Heading in ONE Row Line Wrapper */}
                    <div className="flex items-center gap-4">
                      <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 2xl:w-16 2xl:h-16 flex items-center justify-center rounded-xl bg-white/[0.05] text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
                        {item.icon}
                      </div>
                      
                      {/* Premium Multi-Color Attractive Gradient for Cards Title */}
                      <h4 className="flex-1 font-black text-sm md:text-[15px] 2xl:text-xl tracking-[1px] uppercase leading-tight bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-500">
                        {item.title}
                      </h4>
                    </div>
                    
                    {/* ⚪ Card Description: Pure White, Big Font Size for Perfect Laptop Readability */}
                    <p className="text-white text-sm md:text-[14px] 2xl:text-lg 4xl:text-2xl leading-relaxed font-medium opacity-90 group-hover:opacity-100 transition-opacity duration-300">
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
  );
}