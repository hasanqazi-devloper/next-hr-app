"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Rocket, ShieldCheck, BarChart3 } from "lucide-react";

const steps = [
  {
    id: "01",
    icon: <Search className="w-5 h-5 2xl:w-8 2xl:h-8" />,
    title: "Discovery & Research",
    desc: "We deep-dive into your business DNA to understand goals and audience.",
  },
  {
    id: "02",
    title: "Strategy Planning",
    icon: <PenTool className="w-5 h-5 2xl:w-8 2xl:h-8" />,
    desc: "A custom-built roadmap designed to outpace competitors and maximize ROI.",
  },
  {
    id: "03",
    title: "Execution Phase",
    icon: <Rocket className="w-5 h-5 2xl:w-8 2xl:h-8" />,
    desc: "Deploying high-precision campaigns across channels with surgical accuracy.",
  },
  {
    id: "04",
    title: "Optimization",
    icon: <ShieldCheck className="w-5 h-5 2xl:w-8 2xl:h-8" />,
    desc: "Real-time data monitoring to pivot and polish strategies for peak performance.",
  },
  {
    id: "05",
    title: "Scale & Growth",
    icon: <BarChart3 className="w-5 h-5 2xl:w-8 2xl:h-8" />,
    desc: "Scaling what works to ensure long-term market dominance and growth.",
  },
];

export default function Process() {
  return (
    <section className="relative py-12 md:py-16 bg-[#020617] overflow-hidden selection:bg-blue-600/30">

      {/* 🌌 Luxury Background Elements */}
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:30px_30px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl 2xl:max-w-[85rem] mx-auto px-6">

        {/* 📋 HEADER - Slimmer margin */}
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-4xl md:text-5xl 2xl:text-8xl font-black text-white tracking-tighter leading-tight">
            Our  {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
             Working Process
            </span>
          </h2>
        </div>

        {/* 🧠 TIMELINE MATRIX */}
        <div className="relative">

          {/* Central Progress Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-blue-500/30 via-white/10 to-transparent -translate-x-1/2 hidden md:block" />

          {/* Cards Container with tight gap */}
          <div className="flex flex-col gap-2 md:gap-2">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.id}
                  className={`relative flex flex-col md:flex-row items-start md:items-center justify-between w-full group ${isEven ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                >
                  {/* CARD CONTAINER - Slimmed down */}
                  <div className="w-full md:w-[46%] pl-5 md:pl-0">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5 }}
                      className="relative p-5 md:p-6 2xl:p-10 rounded-[1.5rem] 2xl:rounded-[3rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl hover:bg-white/[0.05] hover:border-blue-500/30 transition-all duration-500 group"
                    >
                      {/* Floating Step Number - Smaller */}
                      <div className="absolute -top-2 -right-2 2xl:-top-4 2xl:-right-4 w-8 h-8 2xl:w-14 2xl:h-14 rounded-full bg-[#030712] border border-white/10 flex items-center justify-center text-white font-mono text-[9px] 2xl:text-sm font-bold group-hover:border-blue-500/50 transition-colors z-10">
                        {step.id}
                      </div>

                      <div className="flex flex-col gap-2 md:gap-3">
                        {/* 🟢 Icon & Heading in ONE LINE */}
                        <div className="flex items-center gap-3">
                          <div className="shrink-0 w-10 h-10 md:w-11 md:h-11 2xl:w-16 2xl:h-16 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
                            {step.icon}
                          </div>
                          <h4 className="text-lg md:text-xl 2xl:text-4xl font-block text-white tracking-tight ">
                            {step.title}
                          </h4>
                        </div>

                        {/* ⬇️ Description Below */}
                        <p className="text-xs 4xl:text-xl text-white group-hover:text-white transition-colors leading-relaxed">
                          {step.desc}
                        </p>
                      </div>

                      {/* Bottom Accent Line */}
                      <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 group-hover:w-[30%] transition-all duration-700" />
                    </motion.div>
                  </div>

                  {/* CENTRAL NODE - Smaller bullets */}
                  <div className="absolute left-4 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="w-4 h-4 md:w-6 md:h-6 2xl:w-10 2xl:h-10 rounded-full bg-[#020617] border border-white/10 flex items-center justify-center group-hover:border-blue-500 transition-all duration-500 group-hover:scale-110">
                      <div className="w-1.5 h-1.5 2xl:w-3 2xl:h-3 bg-zinc-700 rounded-full group-hover:bg-blue-400 transition-all" />
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block md:w-[46%]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}