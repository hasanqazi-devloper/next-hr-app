"use client";

import { motion } from "framer-motion";
import {
  Globe,
  ArrowRight,
  Sparkles,
  Flame,
  Target,
  Rocket,
  Users,
  Award,
  CheckCircle2
} from "lucide-react";
import Link from "next/link";
import Image from "next/image"; // Next.js Optimization ke liye

export default function AboutPage() {
  return (
    <main className="bg-[#020617] text-white overflow-hidden selection:bg-blue-600 ">

      {/* 1. HERO SECTION (Optimized) */}
      <section className="relative w-full overflow-hidden bg-[#030712]">
        <div className="container-wide">

          {/* Background Image Container with Exact Matching Premium CSS */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <Image
              src="/home-hero.jpg"
              alt="Mesh Grid"
              fill
              sizes="100vw"
              priority // 🔥 PageSpeed boost: Hero image jaldi load hogi
              className="object-cover object-top opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030712]/40 to-[#030712]" />
          </div>

          {/* Ambient Blur Dot to lock the signature aesthetic */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/[0.05] blur-[120px] pointer-events-none" />

          {/* Full Sized Padded Content Wrapper */}
<div className="relative z-10 w-full mx-auto text-center lg:text-left px-6 pt-32 pb-16 md:pt-20 md:pb-24 lg:max-w-full lg:pt-40 lg:pb-28 lg:pl-40 2xl:mx-0 2xl:max-w-[1500px] 2xl:pt-48 2xl:pb-36 2xl:pl-80 3xl:mx-0 3xl:max-w-[1800px] 3xl:pt-60 3xl:pb-44 3xl:pl-72">
  {/* Aapka Content */}
    <div className="max-w-5xl">

              {/* Glassmorphism Badge Container */}
              <div className="flex items-center gap-2.5 mb-8 w-fit px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md mx-auto md:mx-0">
                <Flame size={12} className="text-blue-400 animate-pulse" />
                <span className="text-[10px] font-black tracking-[4px] text-blue-300 uppercase">ABOUT HIGH RISE</span>
              </div>

              {/* Main Typography Block with Tight Line Height */}
              <h1 className="text-[3rem]  md:text-[3.2rem] lg:text-[3.8rem] font-black tracking-tighter leading-[0.8] text-white mb-8">
                ABOUT {" "}
                <span className="bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text">
                  US.
                </span>
              </h1>

              {/* Description Paragraph */}
              <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed max-w-xl 2xl:max-w-3xl mx-auto lg:mx-0 ">
                We create powerful digital experiences through innovative marketing, creative design, and strategic solutions that help brands grow and succeed.
              </p>
            </div>
          </div>
        </div>

      </section>

      {/* 2. OUR IDENTITY (CLS Fix) */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#020617] to-[#0b1329] relative z-10 border-t border-white/5">
        <div className="container-wide">
          <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-blue-500/[0.04] blur-[140px] pointer-events-none" />

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-blue-500/15 blur-3xl pointer-events-none rounded-[3rem] opacity-50 group-hover:opacity-80 transition-opacity duration-700" />

              <div className="relative rounded-[2.5rem] overflow-hidden aspect-square bg-slate-950/40 border border-white/10 flex items-center justify-center group transition-all duration-500 hover:border-blue-500/30">
                <div className="relative w-full h-full p-4 md:p-8">
                  <Image
                    src="/About High Rise Digital Agency.jpg"
                    alt="High Rise Digital Identity"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover rounded-[1.5rem] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-105 h-auto"
                  />
                </div>
                <div className="absolute inset-0 rounded-[2.5rem] bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
              </div>
            </motion.div>

           <motion.div
  initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="space-y-8"
>
  <div className="space-y-4">
    <span className="text-[10px] tracking-[4px] text-cyan-400 font-extrabold block">OUR IDENTITY</span>
    
    {/* 🎯 FIX: Heading optimized in 'rem' for Mobile, Laptop, and 2K screens */}
    <h2 className="text-[2.5rem] lg:text-[2.8rem] 2xl:text-[3.2rem] 3xl:text-[5.5rem] font-black tracking-tighter leading-[1] lg:leading-[0.95] text-white lg:whitespace-nowrap">
      Who we{" "}
      <span className="inline-block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
        are
      </span>
    </h2>
  </div>

  {/* Main Lead Paragraph */}
  <p className="text-white text-[16px] sm:text-sm md:text-base lg:text-[16px] 2xl:text-lg 3xl:text-xl font-semibold leading-relaxed antialiased tracking-wide opacity-90">
    High Rise Digital was founded in 2019. We are a growing <span className="text-blue-400">AI-enabled digital solutions</span> company powered by 12+ skilled professionals.
  </p>

  <div className="space-y-5 lg:space-y-6 text-white font-medium leading-relaxed w-full mt-6">

    {/* Paragraph 1 */}
    <p className="border-l-2 border-blue-500 pl-4 text-white text-[16px] text-[16px] md:text-base lg:text-[16px] 2xl:text-lg 3xl:text-xl max-w-xl lg:max-w-2xl 2xl:max-w-3xl 3xl:max-w-4xl mx-auto lg:mx-0 antialiased tracking-wide opacity-90">
      Over the years, we have successfully worked with clients from the USA, UK, Australia, UAE, and many other countries, helping businesses strengthen their online presence.
    </p>

    {/* Paragraph 2 */}
    <p className="border-l-2 border-white/20 pl-4 text-white text-[16px] text-[16px] md:text-base lg:text-[16px] 2xl:text-lg 3xl:text-xl max-w-xl lg:max-w-2xl 2xl:max-w-3xl 3xl:max-w-4xl mx-auto lg:mx-0 antialiased tracking-wide opacity-90">
      With experience across multiple industries, we have completed <span className="text-blue-400 font-black">700+ projects</span>, delivering creative designs, SEO, and effective marketing strategies.
    </p>

    {/* Paragraph 3 */}
    <p className="border-l-2 border-white/20 pl-4 text-white text-[16px] sm:text-sm md:text-base lg:text-[16px] 2xl:text-lg 3xl:text-xl max-w-xl lg:max-w-2xl 2xl:max-w-3xl 3xl:max-w-4xl mx-auto lg:mx-0 antialiased tracking-wide opacity-90">
      Our focus is simple — providing quality work, building long-term relationships, and helping brands grow with confidence.
    </p>

  </div>
</motion.div>
          </div>
        </div>
      </section>

      {/* 3. VISION & MISSION */}
      <section className="py-32 bg-[#02040a] px-6 relative border-y border-white/[0.03]">

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20 space-y-4"
          >
            <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center mx-auto text-blue-400 shadow-2xl">
              <Sparkles size={22} />
            </div>
            <span className="text-[10px] uppercase tracking-[4px] text-blue-500 font-extrabold block">OUR PURPOSE</span>
            <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-tight">Vision & Mission</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Our Vision", icon: <Globe size={26} />, desc: "To become a globally trusted digital agency that empowers businesses with innovative strategies, creativity, and long-term digital growth solutions." },
              { title: "Our Mission", icon: <Target size={26} />, desc: "To deliver high-quality digital marketing, branding, and web solutions that help businesses grow, connect, and succeed online." },
              { title: "Our Goal", icon: <Rocket size={26} />, desc: "To build lasting client relationships by providing reliable services, measurable results, and creative solutions tailored to every business need." },
            ].map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[2.5rem] bg-zinc-950/50 border border-white/5 hover:border-blue-500/30 transition-all duration-400 group"
              >
                <div className="mb-6 text-blue-400 bg-blue-500/10 w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  {val.icon}
                </div>
                <h3 className="text-[20px] font-bold mb-4">{val.title}</h3>
                <p className="text-white text-[16px] md:text-[12px] lg:text-[15px] font-medium leading-relaxed max-w-xl 2xl:max-w-2xl opacity-90 antialiased">
                  {val.desc}
                </p>            </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WORKING PROCESS */}
      <section className="py-32 px-6 bg-gradient-to-b from-[#02040a] to-[#0c142d] relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="text-[10px]  tracking-[4px] text-cyan-400 font-extrabold block mb-4">EXECUTION TRACK</span>
            <h3 className="text-4xl md:text-6xl font-black tracking-tighter  leading-none">Our Working Process.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { step: "01", title: "Understanding", desc: "Learning about your business and goals." },
              { step: "02", title: "Research", desc: "Detailed market research and planning." },
              { step: "03", title: "Creative", desc: "Engaging designs and digital solutions." },
              { step: "04", title: "Launch", desc: "Optimization and performance marketing." },
              { step: "05", title: "Growth", desc: "Monitoring and long-term support." }
            ].map((proc, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all"
              >
                <span className="text-blue-500 font-black text-xl mb-4 block opacity-50">{proc.step}</span>
                <h3 className="text-[25px] font-bold mb-2">{proc.title}</h3>
                <p className="text-white text-white text-[16px] md:text-[12px] lg:text-[15px] leading-relaxed antialiased">
                  {proc.desc}
                </p>              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 4 REASONS TO WORK WITH US */}
      <section className="py-32 bg-[#010307] px-6 relative border-t border-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-[10px] uppercase tracking-[4px] text-blue-500 font-extrabold block mb-4">WHY HIGH RISE?</span>
              <h3 className="text-4xl md:text-5xl font-black tracking-tighter  leading-tight">4 Reasons To Work With Us</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: <Users size={24} />, title: "Experienced Team", desc: "Our skilled professionals bring creativity, expertise, and industry knowledge to deliver high-quality digital solutions." },
              { icon: <Globe size={24} />, title: "Global Client Network", desc: "We have successfully worked with clients from the USA, UK, Australia, UAE, and many other countries worldwide." },
              { icon: <Award size={24} />, title: "Proven Track Record", desc: "With 700+ completed projects across multiple industries, we deliver reliable results that help businesses grow online." },
              { icon: <CheckCircle2 size={24} />, title: "Client-Focused Approach", desc: "We prioritize clear communication, personalized strategies, and long-term partnerships to ensure success." }
            ].map((reason, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 10 }}
                className="flex gap-6 p-8 rounded-[2.5rem] bg-zinc-950 border border-white/5 hover:border-blue-500/20 transition-all"
              >
                <div className="text-blue-400 shrink-0">{reason.icon}</div>
                <div>
                  <h3 className="text-[20px] font-bold mb-2">{reason.title}</h3>
                  <p className="text-white text-[16px] md:text-[12px] lg:text-[15px] font-medium leading-relaxed max-w-xl 2xl:max-w-2xl opacity-90 antialiased">
                    {reason.desc}
                  </p>            </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



    </main>
  );
}