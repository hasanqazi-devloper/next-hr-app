"use client";

import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative w-full overflow-hidden border-t border-b border-white/5 bg-gradient-to-r from-[#030303] via-[#050a18] to-[#030303] px-6 md:px-12 lg:px-20 2xl:px-32 py-10 md:py-14 2xl:py-24">
      
      {/* 🌌 Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] 2xl:w-[1200px] h-[200px] 2xl:h-[300px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl 2xl:max-w-[110rem] mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 2xl:gap-16">
        
        {/* 📝 LEFT SIDE: TEXT CONTENT */}
      <div className="text-left space-y-4 md:space-y-5 2xl:space-y-6 flex-1">
  {/* 🎯 Heading: Balanced size for small laptops, fixed with ! modifier */}
  <h2 className="!text-[2rem] sm:!text-4xl md:!text-4xl lg:!text-[2.8rem] xl:!text-[3rem] 2xl:!text-7xl font-black tracking-tighter leading-[1.2] lg:leading-[1.1] text-white">
    Ready To Grow Your <br />
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Brand Online?</span>
  </h2>
  
  {/* ⚪ Paragraph: Crisper look and easily readable font weight */}
  <p className="text-white text-sm md:text-[15px] 2xl:text-2xl font-medium max-w-xl 2xl:max-w-3xl leading-relaxed opacity-90">
    Transform your ideas into digital reality with our expert marketing and design strategies.
  </p>
</div>

        {/* ⚡ RIGHT SIDE: ACTIONS */}
        <div className="flex flex-wrap items-center justify-center lg:justify-end gap-8 md:gap-12 2xl:gap-16 flex-1 w-full lg:w-auto">
          
          {/* 🛠️ GLOBAL BUTTON STYLE: White to Gradient Fill */}
          <Link href="/contact" className="w-full sm:w-auto">
            <button
              className="group relative h-[54px] 2xl:h-[62px] px-10 2xl:px-14 rounded-full bg-white overflow-hidden transition-all duration-500 active:scale-95 shadow-xl w-full sm:min-w-[200px] 2xl:min-w-[240px]"
            >
              {/* GRADIENT FILL LAYER */}
              <div className="absolute inset-0 w-0 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 ease-out group-hover:w-full" />
              
              <span className="relative z-10 flex items-center justify-center gap-3 text-black group-hover:text-white text-[11px] 2xl:text-[13px] tracking-[2px] font-black uppercase transition-colors duration-500">
                Get A Quote 
                <ArrowRight className="w-4 h-4 2xl:w-5 2xl:h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
              </span>
            </button>
          </Link>

          {/* PHONE / CALL OPTION */}
          <Link href="tel:+923002777587" className="group flex items-center gap-4 2xl:gap-6">
            <div className="w-12 h-12 2xl:w-16 2xl:h-16 rounded-full border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-all duration-500">
              <Phone size={20} className="text-blue-400 2xl:w-6 2xl:h-6 group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] 2xl:text-xs text-zinc-500 font-bold uppercase tracking-widest leading-none mb-1.5">Talk to experts</span>
              <span className="text-base md:text-lg 2xl:text-2xl text-white font-black tracking-tight group-hover:text-blue-400 transition-colors">
                +923002777587
              </span>
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}