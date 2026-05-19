"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";

export default function HeroSection() {
  return (
<section 
  className="relative min-h-fit lg:min-h-[70vh] 2xl:min-h-[65vh] 3xl:min-h-[60vh] bg-[#030303] overflow-hidden flex items-center selection:bg-blue-600 pb-4 pt-36 md:pt-40 lg:pt-40 lg:pb-18 2xl:pt-56 2xl:pb-32 3xl:pt-64 3xl:pb-36"
>      
      {/* 🖼️ BACKGROUND IMAGE LAYER */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/home-hero.jpg"
          alt="High Rise Digital - Trusted Digital Marketing Agency Background"
          fill 
          priority 
          quality={90}
          className="object-cover opacity-15"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030303]/80 via-transparent to-[#030303]" />
      </div>

      {/* 🌌 AMBIENT LIGHTS (Lag-free static blur) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 left-[-10%] w-[300px] sm:w-[600px] 2xl:w-[1000px] h-[300px] sm:h-[600px] 2xl:h-[1000px] bg-blue-600/[0.05] blur-[120px] rounded-full" />
        <div className="absolute top-[20%] right-[10%] w-72 h-72 2xl:w-[500px] 2xl:h-[500px] rounded-full bg-blue-500/5 blur-[100px] hidden lg:block" />
      </div>

      <div className="relative z-10 max-w-7xl 2xl:max-w-[110rem] mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 2xl:gap-16 items-center">

          {/* 📝 LEFT CONTENT (Clean performance load) */}
       <div className="lg:col-span-7 space-y-0 text-center lg:text-left flex flex-col items-center lg:items-start">
            
  {/* 🖥️ Heading: Perfectly Responsive, Fluid & No Broken Lines */}
  <h1 className="text-[3rem]  md:text-[2.8rem] lg:text-[3.2rem] font-black leading-[1.1] lg:leading-[1.05] tracking-tighter text-white lg:whitespace-nowrap">
    Digital{" "} <br />
    <span className="inline-block bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text">
     Marketing Agency
    </span>
  </h1>

  {/* 🖥️ Paragraph: Adjusted for a clean hierarchy */}
  <p className="mt-4 text-white-500 text-[16px] sm:text-sm md:text-base lg:text-[16px] 2xl:text-lg 3xl:text-xl font-medium leading-relaxed max-w-xl 2xl:max-w-2xl mx-auto lg:mx-0">
    We are a results-driven digital marketing agency providing SEO, PPC, social media, and web solutions for businesses across the USA, UK, Australia, UAE, and worldwide markets.
  </p>

  {/* Buttons Container */}
  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 2xl:gap-5 w-full sm:w-auto pt-6 md:pt-8">
    
    {/* START PROJECT BUTTON */}
    <Link href="/contact" className="w-full sm:w-auto">
      <button 
        className="group relative overflow-hidden w-full sm:min-w-[160px] 2xl:min-w-[200px] h-[48px] 2xl:h-[56px] rounded-full bg-white text-black font-black text-[11px] 2xl:text-[13px] tracking-[2px] flex items-center justify-center gap-2 transition-all duration-500 shadow-lg active:scale-95"
      >
        <div className="absolute inset-0 w-0 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 ease-out group-hover:w-full" />
        <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-500">
          Start Project
          <ArrowUpRight size={14} className="2xl:w-5 2xl:h-5 group-hover:rotate-45 transition-transform duration-300" />
        </span>
      </button>
    </Link>

    {/* VIEW WORK BUTTON */}
    <Link 
      href="/portfolio" 
      className="inline-flex items-center justify-center w-full sm:min-w-[140px] 2xl:min-w-[180px] h-[48px] 2xl:h-[56px] rounded-full border border-white/20 text-zinc-400 text-[11px] 2xl:text-[13px] font-bold uppercase tracking-[2px] hover:border-white hover:text-white transition-all duration-300"
    >
      View Work
    </Link>
  </div>

  {/* Social Trust */}
  <div className="flex items-center gap-3 pt-6 mt-6 border-t border-white/5 w-full max-w-md 2xl:max-w-2xl mx-auto lg:mx-0">
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={10} className="fill-yellow-500 text-yellow-500 2xl:w-4 2xl:h-4" />
      ))}
    </div>
    <p className="text-white-400 font-bold text-[12px] 2xl:text-xs uppercase tracking-widest">
      Trusted by 150+ rapid-scale founders
    </p>
  </div>
</div>

          {/* 📸 RIGHT IMAGE BLOCK (Only Animates/Spins On Mouse Hover) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="absolute inset-0 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none" />
            
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ ease: "linear", duration: 15, repeat: Infinity }}
              className="relative w-full max-w-[350px] lg:max-w-[450px] 2xl:max-w-[550px] 3xl:max-w-[650px] cursor-pointer will-change-transform" 
            >
              <Image
                src="/hero-img.webp"
                alt="Strategic Digital Marketing" 
                width={700} 
                height={700} 
                priority 
                className="relative z-10 w-full h-auto object-contain drop-shadow-2xl"
              />
            </motion.div>
          </div>

        </div>
      </div>

      <style jsx global>{`
        .animate-gradient { animation: gradientMove 6s linear infinite; }
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
}