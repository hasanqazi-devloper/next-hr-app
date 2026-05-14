"use client";

import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-8 md:py-10  overflow-hidden border-y border-white/5 bg-[#030207] bg-gradient-to-r from-[#030303] via-[#050a18] to-[#030303]">
      
      
      {/* Background Glow - localized to right side */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[100px] bg-blue-600/[0.07] blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-full mx-auto px-6 md:px-12 lg:px-20 2xl:px-32">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

          {/* 📝 LEFT: Super Bold Heading - Tight line height */}
          <div className="flex-shrink-0">
            <h2 className="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-black text-white tracking-tighter leading-[0.85] uppercase italic">
              Ready To Grow <br />
              <span className="text-blue-500">Your Brand?</span>
            </h2>
          </div>

          {/* 🏷️ MIDDLE: Small descriptive text - Vertical alignment fix */}
          <div className="flex-1 lg:max-w-xs">
            <p className="text-zinc-500 text-[11px] md:text-xs uppercase font-bold tracking-[2px] leading-relaxed border-l border-white/10 pl-5">
              Turn your ideas into results with our expert digital strategies and creative execution.
            </p>
          </div>

          {/* ⚡ RIGHT: Interactive Elements */}
          <div className="flex flex-wrap items-center gap-8 lg:gap-12">
            
            {/* BUTTON: Contact Now - Square cornered modern look */}
          <Link href="/contact">
  <button className="group relative px-10 py-4 bg-white/[0.03] border border-white/10 rounded-xl hover:border-blue-500/50 transition-all duration-500 overflow-hidden shadow-2xl hover:shadow-blue-500/20">
    
    {/* 🎨 Background Liquid Fill Effect */}
    <div className="absolute inset-0 w-0 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:w-full opacity-90" />
    
    {/* ✨ Corner Shine (Sleek Detail) */}
    <div className="absolute top-0 right-0 w-8 h-8 bg-white/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />

    <span className="relative z-10 flex flex-col items-start leading-none">
      <span className="text-[9px] font-black uppercase tracking-[3px] text-blue-400 group-hover:text-blue-100 transition-colors duration-300">
        Get In Touch
      </span>
      
      <span className="text-base font-black uppercase tracking-tighter text-white flex items-center gap-2 mt-1">
        CONTACT NOW 
        <div className="bg-white/10 group-hover:bg-white/20 p-1 rounded-md transition-colors">
          <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500 ease-out" />
        </div>
      </span>
    </span>

    {/* ⚡ Bottom Line Glow */}
    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-white group-hover:w-full transition-all duration-700 delay-100" />
  </button>
</Link>

            {/* PHONE COMPONENT: Clean & High Contrast */}
            <div className="flex items-center gap-4">
              {/* Circular Icon with Border Glow */}
              <div className="w-12 h-12 rounded-full border border-white/10 bg-white flex items-center justify-center group cursor-pointer hover:bg-white transition-all duration-500">
                <Phone size={20} className="text-[#14b8a6] transition-transform duration-500 group-hover:scale-110" fill="#14b8a6" fillOpacity={0.1} />
              </div>
              
              <div className="flex flex-col">
                <span className="text-[10px] text-zinc-500 font-black uppercase tracking-widest mb-1">Call experts</span>
                <Link 
                  href="tel:+971509273668" 
                  className="text-lg md:text-xl 2xl:text-2xl text-white font-black hover:text-blue-500 transition-colors tracking-tighter leading-none"
                >
                  +971 50 927 3668
                </Link>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}