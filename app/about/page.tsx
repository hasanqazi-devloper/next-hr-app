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
              <h1 className="text-[3rem]  md:text-[3.2rem] lg:text-[3.8rem] 2xl:text-[5rem] font-black tracking-tighter leading-[0.8] text-white mb-8">
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
      <section className="py-20 px-6 bg-[#1E2939] relative z-10 border-t border-white/5">
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
                <span className="text-[10px] tracking-[4px] text-blue-400 font-extrabold block">OUR IDENTITY</span>

                {/* 🎯 FIX: Heading optimized in 'rem' for Mobile, Laptop, and 2K screens */}
                <h2 className="text-[2.3rem]  md:text-[2.5rem] lg:text-[2.5rem] 2xl:text-[3.2rem]  font-black text-white tracking-tighter leading-[1.1] lg:leading-[1] mb-6">
                  Who We{" "}

                  {/* 🎯 FIXED OVERFLOW & BREAKING: Changed to 'block' with precise margins and safety right padding */}
                  <span className="  py-1 pr-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Are
                  </span>
                </h2>
              </div>

              {/* Main Lead Paragraph */}
              <p className="text-white text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-normal leading-relaxed antialiased tracking-wide opacity-90">
                <a href="/">High Rise Digital</a>  was founded in 2019. We are a growing <span className="text-blue-400">AI-enabled digital solutions</span> company powered by 12+ skilled professionals.
              </p>

              <div className="space-y-4 lg:space-y-4 text-white font-medium leading-relaxed w-full mt-6">

                {/* Paragraph 1 */}
                <p className="  pl-4 text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl max-w-xl lg:max-w-2xl 2xl:max-w-3xl 3xl:max-w-4xl mx-auto lg:mx-0 antialiased tracking-wide opacity-90">
                  Over the years, we have successfully worked with clients from the USA, UK, Australia, UAE, and many other countries, helping businesses strengthen their online presence.
                </p>

                {/* Paragraph 2 */}
                <p className="  pl-4 text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl max-w-xl lg:max-w-2xl 2xl:max-w-3xl 3xl:max-w-4xl mx-auto lg:mx-0 antialiased tracking-wide opacity-90">
                  With experience across multiple industries, we have completed <span className="text-blue-400 font-black">700+ projects</span>, delivering creative designs, SEO, and effective marketing strategies.
                </p>

                {/* Paragraph 3 */}
                <p className=" pl-4 text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl max-w-xl lg:max-w-2xl 2xl:max-w-3xl 3xl:max-w-4xl mx-auto lg:mx-0 antialiased tracking-wide opacity-90">
                  Our focus is simple — providing quality work, building long-term relationships, and helping brands grow with confidence.
                </p>

              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. VISION & MISSION */}
      <section className="py-24 bg-[#111827] px-6 relative border-y border-white/[0.03]">

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
            <span className="text-[10px]  tracking-[4px] text-blue-500 font-extrabold block">Our Purpose</span>
            <h3 className="text-[2.3rem]  md:text-[2.5rem] lg:text-[2.5rem] 2xl:text-[3.2rem] font-black tracking-tighter  leading-tight">Vision & Mission</h3>
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
      // 🎯 FIXED: Style tag lagakar background color #0971A6 ko solid completely lock kar diya hai
      style={{ backgroundColor: "#0971A6" }}
      className="p-10 rounded-[2.5rem] border border-white/10 group transition-all duration-500 hover:border-cyan-300/40 hover:shadow-[0_20px_50px_rgba(9,113,166,0.3)]"
    >
      {/* Icon aur Heading wrapper */}
      <div className="flex items-center gap-4 mb-6">
        {/* 🌀 FIXED ICON BOX: Hover se pehle subtle dark tint, hover ke baad clean white surface with 0971A6 text */}
        <div 
          style={{ '--hover-color': '#0971A6' } as React.CSSProperties}
          className="shrink-0 w-14 h-14 flex items-center justify-center rounded-2xl bg-black/20 text-cyan-300 border border-white/5 group-hover:bg-white group-hover:text-[var(--hover-color)] group-hover:border-transparent transition-all duration-500 shadow-sm"
        >
          {val.icon}
        </div>
        
        {/* Heading text (Maintained 20px font-size) */}
        <h3 className="text-[20px] font-bold text-white tracking-tight group-hover:text-cyan-200 transition-colors duration-300">
          {val.title}
        </h3>
      </div>

      {/* Description Panel (Maintained font setups) */}
      <p className="text-white text-[15px] md:text-base lg:text-[15px] 2xl:text-[15px] font-medium leading-relaxed max-w-xl 2xl:max-w-2xl opacity-90 antialiased group-hover:opacity-100 transition-opacity duration-300">
        {val.desc}
      </p>
    </motion.div>
  ))}
</div>
        </div>
      </section>

      {/* 4. WORKING PROCESS */}
      <section className="py-24 px-6 bg-[#1E2939] relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="text-[10px]  tracking-[4px] text-blue-400 font-extrabold block mb-4">EXECUTION TRACK</span>
            <h3 className="text-[2.3rem]  md:text-[2.5rem] lg:text-[2.5rem] 2xl:text-[3.2rem] font-black tracking-tighter  leading-none">Our {" "}

              <span className=" mt-0 py-1 pr-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Working Process.
              </span>
            </h3>
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
      // 🎯 FIXED: Style tag lagakar background color #0971A6 ko solid completely lock kar diya hai
      style={{ backgroundColor: "#0971A6" }}
      className="p-8 rounded-[2rem] border border-white/10 group transition-all duration-500 hover:border-cyan-300/40 hover:shadow-[0_20px_50px_rgba(9,113,166,0.3)] flex flex-col justify-between"
    >
      <div>
        {/* 🌀 FIXED STEP NUMBER BADGE: Hover se pehle subtle dark tint, hover ke baad clean white surface with 0971A6 text */}
        <span 
          style={{ '--hover-color': '#0971A6' } as React.CSSProperties}
          className="w-10 h-10 flex items-center justify-center rounded-xl bg-black/20 text-cyan-300 border border-white/5 font-black text-sm mb-4 group-hover:bg-white group-hover:text-blue/500 group-hover:border-transparent transition-all duration-500 shadow-sm"
        >
          {proc.step}
        </span>
        
        {/* Title Text (Kept original sizes, added text-white) */}
        <h3 className="mb-2 font-block text-[1.0rem] sm:text-[1.2rem] lg:text-[1.2rem] 2xl:text-[1.5rem] tracking-[1px] text-white group-hover:text-cyan-200 transition-colors duration-300">
          {proc.title}
        </h3>
        
        {/* Description Paragraph (Kept original sizes & configuration) */}
        <p className="mb-2 text-white text-[15px] md:text-base lg:text-[15px] 2xl:text-[15px] font-medium leading-relaxed antialiased opacity-90 group-hover:opacity-100 transition-opacity duration-300">
          {proc.desc}
        </p>
      </div>
    </motion.div>
  ))}
</div>
        </div>
      </section>

      {/* 5. 4 REASONS TO WORK WITH US */}
      <section className="py-24 bg-[#111827] px-6 relative border-t border-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h3 className="text-[2.3rem]  md:text-[2.5rem] lg:text-[2.5rem] 2xl:text-[3.2rem] font-black tracking-tighter  leading-tight">4 Reasons {" "}
                <span className=" mt-0 py-1 pr-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  To Work With Us.
                </span>

              </h3>
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
      // 🎯 FIXED: Style tag lagakar background color #0971A6 ko solid completely lock kar diya hai
      style={{ backgroundColor: "#0971A6" }}
      className="flex gap-6 p-8 rounded-[2.5rem] border border-white/10 group transition-all duration-500 hover:border-cyan-300/40 hover:shadow-[0_20px_50px_rgba(9,113,166,0.3)]"
    >
      {/* 🌀 FIXED ICON BOX: Hover se pehle subtle dark tint, hover ke baad clean white surface with 0971A6 text */}
      <div 
        style={{ '--hover-color': '#0971A6' } as React.CSSProperties}
        className="shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-black/20 text-cyan-300 border border-white/5 group-hover:bg-white group-hover:text-[var(--hover-color)] group-hover:border-transparent transition-all duration-500 shadow-sm"
      >
        {reason.icon}
      </div>

      <div>
        {/* Title Text (Kept original sizes, added text-white) */}
        <h4 className="font-block text-[1.0rem] sm:text-[1.2rem] lg:text-[1.2rem] 2xl:text-[1.5rem] text-white group-hover:text-cyan-200 transition-colors duration-300">
          {reason.title}
        </h4>
        
        {/* Description Paragraph (Kept original sizes & padding) */}
        <p className="mb-2 mt-2 text-white text-[15px] md:text-base lg:text-[15px] 2xl:text-[15px] font-medium leading-relaxed max-w-xl 2xl:max-w-2xl opacity-90 antialiased group-hover:opacity-100 transition-opacity duration-300">
          {reason.desc}
        </p>
      </div>
    </motion.div>
  ))}
</div>
        </div>
      </section>



    </main>
  );
}