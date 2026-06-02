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
   <section className="relative py-16 md:py-24 bg-[#111827] overflow-hidden selection:bg-blue-600/30">

  {/* 🌌 Luxury Background Grid Elements */}
  <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:30px_30px] pointer-events-none" />

  <div className="relative z-10 max-w-6xl 2xl:max-w-[85rem] mx-auto px-6">

    {/* 📋 HEADER */}
    <div className="mb-12 md:mb-20 pt-0 text-center">
      <h3 className="text-[2.3rem] md:text-[2.5rem] lg:text-[2.5rem] 2xl:text-[3.2rem] font-black tracking-tighter leading-[1.1] lg:leading-[1] text-white normal-case">
        Our{" "}
        <span className=" mt-2 py-1 bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
          Working Process
        </span>
      </h3>
    </div>

    {/* 🧠 TIMELINE MATRIX */}
    <div className="relative">

      {/* 🎯 REFINED: Central dynamic glow line matching the new background system */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-400/50 via-cyan-500/20 to-transparent -translate-x-1/2 hidden md:block" />

      {/* Cards Container */}
      <div className="flex flex-col gap-6 md:gap-10">
        {steps.map((step, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={step.id}
              className={`relative flex flex-col md:flex-row items-start md:items-center justify-between w-full group ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* CARD CONTAINER */}
              <div className="w-full md:w-[45%] pl-8 md:pl-0">
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  // 🎯 REFINED: Dark card with specialized premium glow states and drop shadows on hover
                  className="relative p-6 md:p-8 2xl:p-12 rounded-[1.8rem] 2xl:rounded-[2.5rem] bg-[#023675] border border-white/5 backdrop-blur-3xl hover:bg-[#030303]/90 hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)] transition-all duration-500"
                >
                  {/* Floating Step Number */}
                  <div className="absolute -top-3 -right-3 w-10 h-10 2xl:w-14 2xl:h-14 rounded-full bg-[#030303] border border-white/10 flex items-center justify-center text-white font-mono text-[11px] 2xl:text-sm font-bold group-hover:border-cyan-400/50 group-hover:text-cyan-400 transition-colors z-10 shadow-xl">
                    {step.id}
                  </div>

                  <div className="flex flex-col gap-4">
                    {/* Icon & Heading Line */}
                    <div className="flex items-center gap-4">
                      <div className="shrink-0 w-11 h-11 md:w-12 md:h-12 2xl:w-14 2xl:h-14 rounded-xl bg-blue-500/10 text-cyan-400 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-cyan-400 group-hover:text-white transition-all duration-500 shadow-md">
                        {step.icon}
                      </div>
                      <h4 className="font-black text-[1.1rem] sm:text-[1.2rem] lg:text-[1.2rem] 2xl:text-[1.4rem] text-white tracking-tight group-hover:text-cyan-300 transition-colors duration-300">
                        {step.title}
                      </h4>
                    </div>

                    {/* Description Paragraph */}
                    <p className="text-white/80 text-[14px] md:text-[15px] font-medium leading-relaxed max-w-xl opacity-90 group-hover:opacity-100 transition-all duration-300">
                      {step.desc}
                    </p>
                  </div>

                  {/* 🎯 REFINED: Dynamic running cyan laser accent at the card bottom */}
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-[40%] transition-all duration-700 ease-out rounded-bl-full" />
                </motion.div>
              </div>

              {/* 🎯 REFINED: CENTRAL INTERACTIVE NODE */}
              <div className="absolute left-4 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block">
                <div className="w-6 h-6 rounded-full bg-[#030303] border border-white/10 flex items-center justify-center group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_#22d3ee] transition-all duration-500 group-hover:scale-125">
                  <div className="w-2 h-2 bg-white/40 rounded-full group-hover:bg-cyan-400 transition-all duration-300" />
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