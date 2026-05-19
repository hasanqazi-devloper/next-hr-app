"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
{/* 🎯 FIXED IMPORT ERROR: Added both missing icons safely */}
import { ChevronRight, ArrowRight } from "lucide-react";

// Sirf 5 main logos
const awardLogos = [
  { src: "/baj2.png", alt: "National Excellence" },
  { src: "/baj4.png", alt: "Top 10 Agency" },
  { src: "/baj1.png", alt: "Clutch Recognition" },
  { src: "/baj3.png", alt: "Forbes Member" },
  { src: "/baj5.png", alt: "The Manifest" },
];

export default function AboutPreview() {
  return (
    <>
      {/* 🎯 ABOUT SECTION */}
      <section className="relative pt-12 md:pt-20 2xl:pt-32 pb-0 bg-[#030303] overflow-hidden">

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
              <div className="relative z-10 w-full max-w-[320px] md:max-w-[490px] 2xl:max-w-[650px]">
                <Image
                  src="/about-preview.png"
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
              <div>
                <h2 className="!text-[1.8rem] sm:!text-3xl md:!text-4xl lg:!text-4xl 2xl:!text-6xl font-black tracking-tighter leading-[1.15] text-white">
                  Leading Digital Marketing
                  <br />
                  <span className="inline-block mt-0 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    Company Working Globally
                  </span>
                </h2>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-6 md:space-y-8"
              >
                {/* Paragraph 1 */}
                <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed max-w-xl 2xl:max-w-3xl mx-auto lg:mx-0 opacity-90">
                  As a leading digital marketing company working globally, we help businesses grow with smart, creative, and results-focused digital solutions.
                </p>

                {/* Paragraph 2 */}
                <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed max-w-xl 2xl:max-w-3xl mx-auto lg:mx-0 opacity-90">
                  Our experienced team works closely with clients to understand their goals and create strategies that improve online visibility, generate quality leads, and increase business growth.
                </p>

                {/* Paragraph 3 */}
                <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed max-w-xl 2xl:max-w-3xl mx-auto lg:mx-0 opacity-90 hidden md:block">
                  We provide professional services including SEO, social media marketing, PPC advertising, branding, and website development for businesses of all sizes.
                </p>

                {/* Paragraph 4 */}
                <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed max-w-xl 2xl:max-w-3xl mx-auto lg:mx-0 opacity-90">
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
                <Link href="/contact">
                  <button className="group relative overflow-hidden px-8 2xl:px-10 h-[48px] 2xl:h-[56px] rounded-full bg-white text-black font-black text-[11px] 2xl:text-[13px] uppercase tracking-widest transition-all duration-500 flex items-center gap-2 active:scale-95 shadow-lg">
                    <div className="absolute inset-0 w-0 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 ease-out group-hover:w-full" />
                    <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-500">
                      Get Quote <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </Link>

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

      {/* 🎯 LOGO SECTION */}
      <section className="pt-12 pb-12 md:pb-16 2xl:pb-20 bg-[#030303]">
        <div className="max-w-7xl 2xl:max-w-[110rem] mx-auto px-6 flex justify-center items-center">

          {/* LOGOS GRID (🎯 FIXED: 1 COLUMN WITH BIGGER GAPS ON MOBILE) */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 md:gap-0 2xl:gap-18 items-center justify-center justify-items-center w-full max-w-5xl">
            {awardLogos.map((logo, index) => (
              <div
                key={index}
                className="group relative w-full max-w-[180px] md:max-w-[200px] 2xl:max-w-[240px] flex items-center justify-center transition-all duration-500"
              >
                {/* Logo Wrapper Container */}
                <div className="h-28 md:h-36 2xl:h-40 w-full relative flex items-center justify-center">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105"
                    sizes="(max-width: 768px) 180px, (max-width: 1920px) 220px, 300px"
                  />
                </div>

                {/* Premium Active Hover Glow */}
                <div className="absolute inset-0 bg-blue-500/5 blur-[40px] 2xl:blur-[60px] opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}