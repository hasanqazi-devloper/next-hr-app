"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [offset, setOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    const handleScroll = () => {
      if (window.innerWidth >= 1024) {
        setOffset(window.scrollY * 0.2);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // ⬇️ FIXED PADDING: 
    // Laptop (lg:pt-36) taake header se door rahe. 
    // 2K/4K (2xl:pt-40 3xl:pt-44) spacing tight kar di taake padding kafi zyada na lage.
    // pb (bottom padding) ko har screen par minimize kiya hai.
<section className="relative min-h-fit lg:min-h-[70vh] 2xl:min-h-[65vh] 3xl:min-h-[60vh] bg-[#030303] overflow-hidden pt-24 md:pt-28 lg:pt-32 2xl:pt-36 3xl:pt-40 flex items-center selection:bg-blue-600 pb-6 lg:pb-8 2xl:pb-10">
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

      {/* 🌌 AMBIENT LIGHTS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 left-[-10%] w-[300px] sm:w-[600px] 2xl:w-[1000px] h-[300px] sm:h-[600px] 2xl:h-[1000px] bg-blue-600/[0.05] blur-[120px] rounded-full" />
        {!isMobile && (
          <div className="absolute top-[20%] right-[10%] w-72 h-72 2xl:w-[500px] 2xl:h-[500px] rounded-full bg-blue-500/5 blur-[100px] animate-shape-float" />
        )}
      </div>

      <div className="relative z-10 max-w-7xl 2xl:max-w-[110rem] mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 2xl:gap-16 items-center">

          {/* 📝 LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-0 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            {/* 🖥️ Heading: Responsive & Tight */}
           {/* 🎯 Important modifier ke sath fully responsive optimized H1 */}
<h1 className="!text-[2rem] sm:!text-4xl md:!text-4xl lg:!text-[2.8rem] xl:!text-[3rem] 2xl:!text-7xl 3xl:!text-8xl font-black leading-[1.1] lg:leading-[1] tracking-tighter text-white">
  Digital
  <br />
  <span className="bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text">
    Marketing Agency
  </span>
</h1>

            {/* 🖥️ Paragraph: No extra margin, clear and professional */}
            <p className="mt-2 text-white text-sm md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed max-w-xl 2xl:max-w-3xl mx-auto lg:mx-0">
              We are a results-driven digital marketing agency providing SEO, PPC, social media, and web solutions for businesses across the USA, UK, Australia, UAE, and worldwide markets.
            </p>

           {/* Buttons Container */}
<div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 2xl:gap-5 w-full sm:w-auto pt-6 md:pt-8">
  
  {/* START PROJECT BUTTON (Compact & Sleek) */}
  <Link href="/contact" className="w-full sm:w-auto">
    <button 
      className="group relative overflow-hidden w-full sm:min-w-[160px] 2xl:min-w-[200px] h-[48px] 2xl:h-[56px] rounded-full bg-white text-black font-black text-[11px] 2xl:text-[13px]  tracking-[2px] flex items-center justify-center gap-2 transition-all duration-500 shadow-lg active:scale-95"
    >
      {/* GRADIENT FILL LAYER */}
      <div className="absolute inset-0 w-0 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 ease-out group-hover:w-full" />
      
      {/* Content */}
      <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-500">
        Start Project
        <ArrowUpRight size={14} className="2xl:w-5 2xl:h-5 group-hover:rotate-45 transition-transform duration-300" />
      </span>
    </button>
  </Link>

  {/* VIEW WORK BUTTON (Matching Height) */}
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
              <p className="text-white-500 font-bold text-[9px] 2xl:text-xs uppercase tracking-widest">
                Trusted by 150+ rapid-scale founders
              </p>
            </div>
          </motion.div>

          {/* 📸 RIGHT IMAGE BLOCK */}
          <motion.div
            style={{ y: isMobile ? 0 : offset }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ rotate: 3, scale: 1.05 }} 
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full max-w-[350px] lg:max-w-[450px] 2xl:max-w-[550px] 3xl:max-w-[650px] cursor-pointer" 
            >
              <div className="absolute inset-0 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none" />
              <Image
                src="/hero-img.webp"
                alt="Strategic Digital Marketing" 
                width={700} 
                height={700} 
                priority 
                className="relative z-10 w-full h-auto object-contain drop-shadow-2xl animate-float-slow"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        .animate-gradient { animation: gradientMove 6s linear infinite; }
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float-slow { animation: float-slow 5s ease-in-out infinite; }
        @keyframes shapeFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-shape-float { animation: shapeFloat 10s ease-in-out infinite; }
      `}</style>
    </section>
  );
}