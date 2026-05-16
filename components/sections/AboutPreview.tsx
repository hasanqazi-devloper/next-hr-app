"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight } from "lucide-react";

export default function AboutPreview() {
  return (
    <section className="relative py-12 md:py-20 2xl:py-32 bg-[#030303] overflow-hidden border-b border-white/5">

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] md:w-[600px] h-[200px] bg-blue-600/[0.04] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[110rem] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* LEFT: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex items-center justify-center lg:justify-start order-2 lg:order-1"
          >
            <div className="absolute w-[50%] h-[50%] bg-blue-600/[0.05] blur-[80px] rounded-full" />
            <div className="relative z-10 w-full max-w-[320px] md:max-w-[420px] 2xl:max-w-[650px]">
              <Image
                src="/laptop.png"
                alt="High Rise Digital - Leading Global Agency"
                width={700}
                height={700}
                className="w-full h-auto object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </motion.div>

          {/* RIGHT: Text Content */}
          <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
            
            {/* 🛠️ HEADING AS P TAG: Adjusted for perfect scaling */}
            <div className="">
            {/* 🎯 Paragraphs converted to H2 with forced utility breakpoints */}
{/* 🎯 FIX: Combined into a single <h2> with inline-block and mt-2 for perfect normal spacing */}
<h2 className="!text-[1.8rem] sm:!text-3xl md:!text-4xl lg:!text-4xl 2xl:!text-6xl font-black tracking-tighter leading-[1.15] text-white">
  Leading Digital Marketing
  <br />
  <span className="inline-block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
    Company Working Globally
  </span>
</h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              {/* ⚪ Pure White Text for maximum readability */}
              <p className="text-white text-sm md:text-base 2xl:text-2xl leading-relaxed max-w-xl 2xl:max-w-5xl font-normal">
                As a leading digital marketing company working globally, we help businesses grow with smart, creative, and results-focused digital solutions.
              </p>
              <p className="text-white text-sm md:text-base 2xl:text-2xl leading-relaxed max-w-xl 2xl:max-w-5xl font-normal">
                Our experienced team works closely with clients to understand their goals and create strategies that improve online visibility, generate quality leads, and increase business growth.
              </p>
              <p className="text-white text-sm md:text-base 2xl:text-2xl leading-relaxed max-w-xl 2xl:max-w-5xl font-normal hidden md:block">
                We provide professional services including SEO, social media marketing, PPC advertising, branding, and website development for businesses of all sizes.
              </p>
              <p className="text-white text-sm md:text-base 2xl:text-2xl leading-relaxed max-w-xl 2xl:max-w-5xl font-normal">
                Serving clients across the USA, UK, Australia, UAE, and many other countries, we focus on delivering reliable support and measurable results.
              </p>
            </motion.div>

           {/* Buttons Section */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3 }}
  viewport={{ once: true }}
  className="flex flex-wrap items-center gap-6 pt-4"
>
  {/* GET QUOTE BUTTON (Gradient Fill) */}
  <Link href="/contact">
    <button className="group relative overflow-hidden px-8 2xl:px-10 h-[48px] 2xl:h-[56px] rounded-full bg-white text-black font-black text-[11px] 2xl:text-[13px] uppercase tracking-widest transition-all duration-500 flex items-center gap-2 active:scale-95 shadow-lg">
      
      {/* 🛠️ GRADIENT FILL LAYER */}
      <div className="absolute inset-0 w-0 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 ease-out group-hover:w-full" />
      
      <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-500">
        Get Quote <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </span>
    </button>
  </Link>

  {/* VIEW SERVICES (Sleek Link Style) */}
  <Link 
    href="/services" 
    className="group flex items-center gap-2 text-zinc-400 hover:text-white font-bold text-[11px] 2xl:text-[13px] uppercase tracking-[2px] transition-colors duration-300"
  >
    View Services 
    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
  </Link>
</motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}