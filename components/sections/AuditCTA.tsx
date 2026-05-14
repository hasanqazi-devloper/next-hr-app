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
    // ⬇️ padding mazeed kam kar ke py-4 aur md:py-5 kar di hai taake section full smart ho jaye
    <section className="relative w-full overflow-hidden border-t border-b border-white/5 bg-gradient-to-r from-[#030303] via-[#050a18] to-[#030303] px-6 py-4 md:py-5">
      
      {/* 🌌 Animated Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl 2xl:max-w-[1600px] mx-auto flex flex-col xl:flex-row items-center justify-between gap-4">
        
        {/* 📝 LEFT: HEADING (Mazeed choti aur compact kar di hai) */}
        <div className="text-center xl:text-left">
          <h2 className="text-lg md:text-xl 2xl:text-2xl font-black tracking-tighter leading-none text-white ">
            Get a Free Website Audit
          </h2>
        </div>

        {/* 📥 RIGHT: FORM */}
        <form
          onSubmit={handleSubmit}
          className="w-full xl:w-auto flex flex-col md:flex-row items-center gap-3"
        >
          {/* EMAIL INPUT */}
          <div className="relative w-full md:w-[220px] 2xl:w-[260px]">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-300" />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Business Email"
              // 🟢 bg-white/[0.12] aur border-white/30 se input color kafi light aur clear ho gaya hai
              className="w-full h-[46px] md:h-[50px] rounded-xl bg-white/[0.12] border border-white/30 pl-11 pr-4 text-sm text-white placeholder:text-zinc-400 outline-none transition-all focus:border-blue-500 focus:bg-white/[0.18] focus:ring-4 focus:ring-blue-500/10 backdrop-blur-md"
            />
          </div>

          {/* URL INPUT */}
          <div className="relative w-full md:w-[220px] 2xl:w-[260px]">
            <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-300" />
            <input
              type="url"
              required
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Website URL"
              className="w-full h-[46px] md:h-[50px] rounded-xl bg-white/[0.12] border border-white/30 pl-11 pr-4 text-sm text-white placeholder:text-zinc-400 outline-none transition-all focus:border-blue-500 focus:bg-white/[0.18] focus:ring-4 focus:ring-blue-500/10 backdrop-blur-md"
            />
          </div>

          {/* ⚡ ANALYZE BUTTON */}
          <button
            type="submit"
            className="group h-[46px] md:h-[50px] px-8 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-[10px] uppercase tracking-widest font-black transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-blue-900/20 active:scale-95 whitespace-nowrap"
          >
            Check Now 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      </div>
    </section>
  );
}