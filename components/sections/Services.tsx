"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const SERVICES = [
  { id: "01", title: "Web Development", link: "/services/web-dev", desc: "Creating responsive, user-friendly websites designed to improve performance, engagement, and conversions.", image: "/web.webp" },
  { id: "02", title: "Search Engine Optimization", link: "/services/seo", desc: "Improving website rankings through strategic SEO techniques, keyword research, and optimization.", image: "/seo.png" },
  { id: "03", title: "Social Media Marketing", link: "/services/social-media", desc: "Growing your brand presence through engaging social media campaigns and targeted strategies.", image: "/man.webp" },
  { id: "04", title: "Branding & Identity", link: "/services/branding", desc: "Building strong brand identities that create trust, recognition, and lasting customer impressions.", image: "/branding.webp" },
  { id: "05", title: "AI Automation", link: "/services/ai-automation", desc: "Streamlining business operations with smart AI automation solutions for improved productivity.", image: "/ai.webp" },
  { id: "06", title: "eCommerce Management", link: "/services/ecommerce", desc: "Managing online stores efficiently to increase sales, customer experience, and business growth", image: "/ecommerce.webp" },
];

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative bg-[#030303] py-12 md:py-20 2xl:py-32 pt-10 overflow-hidden border-t border-white/5">
      
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cyan-400/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[110rem] mx-auto px-6 relative z-10">
        
        {/* HEADER - Centered & Slim */}
      <div className="mb-8 md:mb-12 pt-0 text-center">
<motion.h3 
  initial={{ opacity: 0, y: 10 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="mt-3 !text-[2rem] sm:!text-4xl md:!text-5xl lg:!text-[2.2rem] xl:!text-[2.5rem] 2xl:!text-[2.8rem] 3xl:!text-[6.5rem] font-black tracking-tighter leading-[1.1] lg:leading-none text-white pr-4 py-1"
>
  Our {" "}
  <span className="block sm:inline bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
    Digital Marketing Services
  </span>
</motion.h3>
</div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-12 gap-8 2xl:gap-20 items-start relative">
          
       {/* LEFT SIDE: Image Preview Area */}
<div className="hidden lg:block lg:col-span-5 h-full min-h-[450px] 2xl:min-h-[650px] relative">
  {/* 🛠️ Dynamic container: No mirror effect, clean border-glow */}
  <motion.div 
    className="absolute left-0 w-full h-[380px] 2xl:h-[550px] rounded-[2.5rem] 2xl:rounded-[4rem] overflow-hidden border border-white/5 bg-[#080808] shadow-[0_0_50px_rgba(0,0,0,0.5)]"
    animate={{ 
      // Smooth vertical tracking
      y: active * 75, // Halka sa offset taake active link ke samne rahe
    }}
    transition={{ type: "spring", stiffness: 100, damping: 25 }}
  >
    <AnimatePresence mode="wait">
      <motion.div
        key={active}
        // ✨ New Premium Animation: Slide up + Fade + Blur
        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full p-4 flex items-center justify-center"
      >
        {/* 📸 IMAGE: Size fixed and centered to avoid cutting */}
        <Image
          src={SERVICES[active].image}
          alt={SERVICES[active].title}
          fill
          priority
          className="object-contain p-6 2xl:p-12 drop-shadow-[0_20px_50px_rgba(59,130,246,0.2)]" 
        />
        
        {/* Subtle Inner Glow instead of heavy mirror gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)] pointer-events-none" />
      </motion.div>
    </AnimatePresence>
  </motion.div>

  {/* Background Decorative Element (Optional: for depth) */}
  <div className="absolute -z-10 inset-0 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
</div>
          {/* RIGHT SIDE: THE SERVICES LIST */}
          <div className="lg:col-span-7">
            {SERVICES.map((item, i) => {
              const isActive = active === i;
              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setActive(i)}
                  className="group relative border-b border-white/5 transition-all duration-500"
                >
                  <Link href={item.link} className="relative z-10 flex items-center justify-between gap-6 py-8 2xl:py-16 px-2">
                    
                    <div className="relative flex items-center gap-6">
                      {/* Shadow Numbering (Background Watermark) */}
                      <span className={`absolute -left-8 md:-left-12 top-1/2 -translate-y-1/2 
                        text-7xl md:text-[120px] 2xl:text-[200px] 3xl:text-[250px] 
                        font-black transition-all duration-700 pointer-events-none select-none 
                        ${isActive 
                          ? "text-blue-500/15 opacity-100 scale-110" 
                          : "text-white/0 opacity-0 scale-90"
                        }`}
                      >
                        {item.id}
                      </span>

                    <div className="relative z-10">
  {/* 🎯 Heading: Balanced for small laptops, fixed active/inactive colors, and global CSS bypass */}
  <h4 className={`!text-lg sm:!text-xl md:!text-xl lg:!text-2xl 2xl:!text-4xl font-black tracking-tight leading-snug transition-all duration-300 ${
    isActive ? "text-white translate-x-1.5" : "text-zinc-500 hover:text-zinc-400"
  }`}>
    {item.title}
  </h4>
  
  <motion.div
    initial={false}
    animate={{ 
      height: isActive ? "auto" : 0, 
      opacity: isActive ? 1 : 0, 
      marginTop: isActive ? 10 : 0 
    }}
    className="overflow-hidden"
  >
    {/* ⚪ Description: High readability and clear text on small/laptop screens */}
 <p className="text-white text-sm md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed max-w-xl 2xl:max-w-3xl mx-auto lg:mx-0 opacity-90">
  {item.desc}
</p>
  </motion.div>
</div>
                    </div>

                    {/* Premium Arrow Button */}
                    <div className={`w-10 h-10 2xl:w-16 2xl:h-16 rounded-full border flex items-center justify-center transition-all duration-500 ${isActive ? "bg-white text-black border-white rotate-45" : "border-white/10 text-zinc-600"}`}>
                      <ArrowUpRight size={18} className="2xl:w-8 2xl:h-8" />
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

       {/* ✅ FINAL CTA BUTTON */}
<div className="mt-8 md:mt-12 flex justify-center">
  <Link href="/services">
    <button className="group relative overflow-hidden h-[44px] md:h-[48px] 2xl:h-[56px] px-6 md:px-8 2xl:px-10 rounded-full bg-white text-black text-[10px] md:text-[11px] 2xl:text-[13px] font-black uppercase tracking-[0.2em] transition-all duration-500 active:scale-95 shadow-lg">
      
      {/* 🛠️ GRADIENT FILL LAYER (Blue to Cyan) */}
      <div className="absolute inset-0 w-0 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 ease-out group-hover:w-full" />
      
      <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-500">
        Explore All Services
        <ArrowUpRight size={14} className="md:size-[16px] 2xl:size-[20px] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </button>
  </Link>
</div>
      </div>
    </section>
  );
}