"use client";

import { Globe, Mail, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function AuditCTA() {
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Audit Request Sent!");
  };

  return (
    // 🛠️ Fluid Padding: Mobile se lekar 4K tak balance rakha hai
    <section className="relative w-full overflow-hidden border-y border-white/5 bg-gradient-to-r from-[#030303] via-[#050a18] to-[#030303] px-6 md:px-12 lg:px-20 2xl:px-32 py-12 md:py-16 2xl:py-24">
      
      {/* 🌌 Background Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/[0.06] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[250px] bg-indigo-600/[0.04] blur-[100px] rounded-full pointer-events-none" />

      {/* 📐 Max-width ko 2000px tak allow kiya hai taake badi screen par stretch ho */}
      <div className="relative z-10 max-w-7xl 2xl:max-w-[1800px] mx-auto flex flex-col xl:flex-row items-center justify-between gap-12">
        
        {/* 📝 LEFT: HEADING (2xl par size barha diya hai) */}
    <div className="text-center xl:text-left flex-1 w-full whitespace-nowrap">
  {/* 🎯 Completely 1 line mein lock karne ke liye optimized size framework */}
  <h2 className="!text-[1.4rem] sm:!text-[1.7rem] md:!text-2xl lg:!text-[1.8rem] xl:!text-3xl 2xl:!text-6xl font-block tracking-tighter leading-tight text-white">
    Get a Free <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Website Audit</span>
  </h2>
</div>

        {/* 📥 RIGHT: FORM (Inputs aur Button ka size badi screen par scale kiya hai) */}
     <form
  onSubmit={handleSubmit}
  className="w-full xl:w-auto flex flex-col md:flex-row items-center gap-4 2xl:gap-6"
>
  {/* EMAIL INPUT - Cleaner & Sleeker */}
 {/* EMAIL INPUT */}
<div className="relative w-full md:w-[250px] 2xl:w-[380px]">
  <input
    type="email"
    required
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    placeholder="Business Email"
    /* pl-6 lagaya hai taake text/placeholder start se shuru ho */
    className="w-full h-[54px] 2xl:h-[62px] rounded-full bg-white/[0.05] border border-white/20 pl-6 pr-6 text-sm 2xl:text-base text-white placeholder:text-zinc-500 outline-none transition-all focus:border-blue-500/50 focus:bg-white/[0.08] backdrop-blur-md"
  />
</div>

{/* URL INPUT */}
<div className="relative w-full md:w-[250px] 2xl:w-[380px]">
  <input
    type="url"
    required
    value={url}
    onChange={(e) => setUrl(e.target.value)}
    placeholder="Website URL"
    /* pl-6 lagaya hai yahan bhi */
    className="w-full h-[54px] 2xl:h-[62px] rounded-full bg-white/[0.05] border border-white/20 pl-6 pr-6 text-sm 2xl:text-base text-white placeholder:text-zinc-500 outline-none transition-all focus:border-blue-500/50 focus:bg-white/[0.08] backdrop-blur-md"
  />
</div>

  {/* ⚡ ANALYZE BUTTON - Matches Global Scheme (White to Gradient Fill) */}
  <button
    type="submit"
    className="group relative h-[54px] 2xl:h-[62px] px-10 2xl:px-14 rounded-full bg-white overflow-hidden transition-all duration-500 active:scale-95 shadow-xl whitespace-nowrap"
  >
    {/* 🛠️ GRADIENT FILL LAYER (Blue to Cyan) */}
    <div className="absolute inset-0 w-0 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 ease-out group-hover:w-full" />
    
    <span className="relative z-10 flex items-center gap-3 text-black font-black text-[11px] 2xl:text-[13px]  tracking-[2px] group-hover:text-white transition-colors duration-500">
      Check Now 
      <ArrowRight className="w-4 h-4 2xl:w-5 2xl:h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
    </span>
  </button>
</form>
      </div>
    </section>
  );
}