"use client";

import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative w-full overflow-hidden border-t border-b border-white/5 
   bg-gradient-to-bl from-[#0971A6] via-[#054f7a] to-[#021526]
     px-4 sm:px-6 md:px-8 lg:px-16 2xl:px-24 py-10 md:py-14 2xl:py-20">
      
      {/* 🌌 Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] 2xl:w-[1200px] h-[200px] 2xl:h-[300px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl 2xl:max-w-[110rem] mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12 2xl:gap-16">
        
        {/* 📝 LEFT SIDE: TEXT CONTENT */}
      <div className="text-left space-y-4 flex-[1.4] w-full">
          
  {/* 🎯 ULTRA-PREMIUM 1-LINE HEADING FRAMEWORK */}
  <h3 className="!text-[1.8rem] sm:!text-4xl md:!text-4xl lg:!text-[2.6rem] xl:!text-[3rem]  font-black tracking-tighter leading-[1.1] lg:leading-none text-white normal-case whitespace-normal lg:whitespace-nowrap">
    Ready To Scale?{" "}
    <span className="inline-block  italic py-0.5 pr-1 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
      Let's Chat.
    </span>
  </h3>
  
  {/* 🎯 GLOBAL TEXT SIZE SYSTEM (Locked to 1-Line on Desktop) */}
  <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed max-w-none lg:whitespace-nowrap  antialiased tracking-wide">
    Transform your ideas into digital reality with our expert marketing and design strategies.
  </p>
</div>

        {/* ⚡ RIGHT SIDE: ACTIONS (Shifted to left & optimized for responsive breathing) */}
        <div className="flex flex-nowrap items-center justify-start lg:justify-start gap-3 sm:gap-6 md:gap-8 2xl:gap-12 flex-1 w-full lg:w-auto shrink-0">
          
          {/* 🛠️ GLOBAL BUTTON STYLE */}
          <Link href="/contact" className="shrink-0">
            <button
              className="group relative h-[48px] sm:h-[54px] 2xl:h-[62px] px-5 sm:px-10 2xl:px-14 rounded-full bg-white overflow-hidden transition-all duration-500 active:scale-95 shadow-xl min-w-[135px] sm:min-w-[200px] 2xl:min-w-[240px]"
            >
              {/* GRADIENT FILL LAYER */}
              <div className="absolute inset-0 w-0 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 ease-out group-hover:w-full" />
              
              <span className="relative z-10 flex items-center justify-center gap-1.5 sm:gap-3 text-black group-hover:text-white text-[10px] sm:text-[11px] 2xl:text-[13px] tracking-[1px] sm:tracking-[2px] font-black uppercase transition-colors duration-500">
                Get A Quote 
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 2xl:w-5 2xl:h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
              </span>
            </button>
          </Link>

          {/* PHONE / CALL OPTION */}
          <Link href="tel:+923002777587" className="group flex items-center gap-2 sm:gap-4 2xl:gap-6 shrink-0">
            <div className="w-9 h-9 sm:w-12 sm:h-12 2xl:w-16 2xl:h-16 rounded-full border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-all duration-500">
              <Phone className="w-3.5 h-3.5 text-blue-400 sm:w-5 sm:h-5 2xl:w-6 2xl:h-6 group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex flex-col">
              <span className="text-[8px] sm:text-[10px] 2xl:text-xs text-white font-bold uppercase tracking-widest leading-none mb-1 2xl:mb-1.5">Talk to experts</span>
              <span className="text-xs sm:text-base md:text-lg 2xl:text-2xl text-white font-black tracking-tight group-hover:text-blue-400 transition-colors">
                +923002777587
              </span>
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}