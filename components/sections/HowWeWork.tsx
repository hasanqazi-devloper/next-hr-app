"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Rocket, ShieldCheck, BarChart3 } from "lucide-react";

const steps = [
  {
    id: "01",
    icon: <Search className="w-5 h-5 md:w-6 md:h-6 2xl:w-8 2xl:h-8" />,
    title: "Discovery & Research",
    desc: "We deep-dive into your business DNA to understand goals and audience.",
  },
  {
    id: "02",
    title: "Strategy Planning",
    icon: <PenTool className="w-5 h-5 md:w-6 md:h-6 2xl:w-8 2xl:h-8" />,
    desc: "A custom-built roadmap designed to outpace competitors and maximize ROI.",
  },
  {
    id: "03",
    title: "Execution Phase",
    icon: <Rocket className="w-5 h-5 md:w-6 md:h-6 2xl:w-8 2xl:h-8" />,
    desc: "Deploying high-precision campaigns across channels with surgical accuracy.",
  },
  {
    id: "04",
    title: "Optimization",
    icon: <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 2xl:w-8 2xl:h-8" />,
    desc: "Real-time data monitoring to pivot and polish strategies for peak performance.",
  },
  {
    id: "05",
    title: "Scale & Growth",
    icon: <BarChart3 className="w-5 h-5 md:w-6 md:h-6 2xl:w-8 2xl:h-8" />,
    desc: "Scaling what works to ensure long-term market dominance and growth.",
  },
];

export default function Process() {
  return (
    <section className="relative py-16 md:py-24 bg-[#020617] overflow-hidden selection:bg-blue-600/30">

      {/* 🌌 Luxury Background Elements */}
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:30px_30px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl 2xl:max-w-[85rem] mx-auto px-6">

        {/* 📋 HEADER */}
        <div className="mb-12 md:mb-16 pt-0 text-center">
          {/* 🎯 MATCHED DESIGN SYSTEM: Applied identical fluid sizes, tracking, and leading from the reference design layout */}
          <h3 className="text-[2.3rem]  md:text-[2.5rem] lg:text-[2.5rem] 2xl:text-[3.2rem] font-black tracking-tighter leading-[1.1] lg:leading-[1] text-white normal-case">
            Our
            {" "}
            {/* 🎯 MATCHED GRADIENT BLOCK: Made 'block' with precise margins and horizontal breathing space padding to avoid letter cut-offs */}
            <span className=" mt-2 py-1 pr-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Working Process
            </span>
          </h3>
        </div>

        {/* 🧠 TIMELINE MATRIX */}
        <div className="relative">

          {/* Central Progress Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-blue-500/30 via-white/10 to-transparent -translate-x-1/2 hidden md:block" />

          {/* Cards Container with clean desktop spacing */}
          <div className="flex flex-col gap-3 md:gap-6">
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
                      className="relative p-6 md:p-8 2xl:p-12 rounded-[1.8rem] 2xl:rounded-[3rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl hover:bg-white/[0.04] hover:border-blue-500/30 transition-all duration-500"
                    >
                      {/* Floating Step Number */}
                      <div className="absolute -top-3 -right-3 w-10 h-10 2xl:w-16 2xl:h-16 rounded-full bg-[#030712] border border-white/10 flex items-center justify-center text-white font-mono text-[11px] 2xl:text-base font-bold group-hover:border-blue-500/50 transition-colors z-10 shadow-lg">
                        {step.id}
                      </div>

                      <div className="flex flex-col gap-4">
                        {/* 🟢 Icon & Heading in ONE LINE */}
                        <div className="flex items-center gap-4">
                          <div className="shrink-0 w-11 h-11 md:w-12 md:h-12 2xl:w-18 2xl:h-18 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
                            {step.icon}
                          </div>
                          <h4 className="font-block text-[1.0rem] sm:text-[1.2rem] lg:text-[1.2rem] 2xl:text-[1.5rem]  text-white tracking-tight">
                            {step.title}
                          </h4>
                        </div>

                        {/* ⬇️ Description Below - Fixed Font Sizes for Perfect Readability */}
                        <p className="text-white text-white text-[15px] md:text-base lg:text-[15px] 2xl:text-[15px]  font-medium leading-relaxed max-w-xl 2xl:max-w-3xl mx-auto lg:mx-0 opacity-90 group-hover:opacity-100 transition-all duration-300">
                          {step.desc}
                        </p>
                      </div>

                      {/* Bottom Accent Line */}
                      <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 group-hover:w-[35%] transition-all duration-700" />
                    </motion.div>
                  </div>

                  {/* CENTRAL NODE */}
                  <div className="absolute left-4 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block">
                    <div className="w-5 h-5 2xl:w-10 2xl:h-10 rounded-full bg-[#020617] border border-white/10 flex items-center justify-center group-hover:border-blue-500 transition-all duration-500 group-hover:scale-110">
                      <div className="w-2 h-2 2xl:w-4 2xl:h-4 bg-zinc-700 rounded-full group-hover:bg-blue-400 transition-all" />
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
  );
}