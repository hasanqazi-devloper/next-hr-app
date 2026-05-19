"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Flame, Rocket, BarChart3, ShieldCheck, Zap } from "lucide-react";

const plans = [
  {
    name: "Starter Plan",
    price: "$149",
    billing: "/month",
    desc: "Perfect for small businesses and startups",
    icon: <Rocket size={24} className="text-emerald-400 2xl:w-8 2xl:h-8" />,
    color: "emerald",
    features: ["Basic Website SEO", "Social Media Setup", "Monthly Reporting", "Email Support"]
  },
  {
    name: "Growth Plan",
    price: "$399",
    billing: "/month",
    desc: "Ideal for growing businesses",
    icon: <BarChart3 size={24} className="text-blue-400 2xl:w-8 2xl:h-8" />,
    color: "blue",
    featured: true,
    features: ["Advanced SEO Optimization", "Social Media Management", "PPC Campaign Setup", "Content Strategy", "Weekly Reports"]
  },
  {
    name: "Professional Plan",
    price: "$699",
    billing: "/month",
    desc: "Best for established brands",
    icon: <ShieldCheck size={24} className="text-purple-400 2xl:w-8 2xl:h-8" />,
    color: "purple",
    features: ["Full SEO + Technical SEO", "Complete Digital Marketing Strategy", "Paid Ads Management (Google & Meta)", "Branding & Content Creation", "Dedicated Account Manager"]
  }
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white overflow-x-hidden pb-20 selection:bg-blue-600">
{/* 🎯 SYNCED PRICING HERO SECTION: Unified responsive layout, text centering rules, and fluid spacing framework */}
<section className="relative w-full overflow-hidden bg-[#030712]">
  <div className="container-wide">
    
    {/* Background Image Container with Exact Matching Premium CSS */}
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      <Image
        src="/home-hero.jpg"
        alt="Mesh Grid"
        fill
        priority 
        sizes="100vw"
        className="object-cover object-top opacity-35" // Standardized opacity for depth consistency
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030712]/40 to-[#030712]" />
    </div>

    {/* Ambient Blur Dot to lock the signature aesthetic */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/[0.05] blur-[120px] pointer-events-none" />

    {/* Full Sized Padded Content Wrapper - Exact global layout spacing */}
<div className="relative z-10 w-full mx-auto text-center lg:text-left px-6 pt-32 pb-16 md:pt-20 md:pb-24 lg:max-w-full lg:pt-40 lg:pb-28 lg:pl-40 2xl:mx-0 2xl:max-w-[1500px] 2xl:pt-48 2xl:pb-36 2xl:pl-80 3xl:mx-0 3xl:max-w-[1800px] 3xl:pt-60 3xl:pb-44 3xl:pl-72">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-5xl"
      >
        {/* Badge Container (Centered on mobile, left on desktop) */}
        <div className="flex items-center gap-2.5 mb-8 w-fit px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md mx-auto md:mx-0">
          <Zap size={12} className="text-blue-400 animate-pulse" />
          <span className="text-[10px] font-black tracking-[4px] text-blue-300 uppercase">Affordable Growth</span>
        </div>

        {/* Main Large Typography Block with Tight Line Height */}
        <h1 className="text-[3rem]  md:text-[3.2rem] lg:text-[3.8rem]  font-black tracking-tighter leading-[0.8] text-white mb-8 normal-case">
          OUR {" "}
          <span className="uppercase bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text">
            Pricing Plans.
          </span>
        </h1>

        {/* Paragraph aligned with the same typography standards (Centered on mobile) */}
     <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed max-w-xl 2xl:max-w-3xl mx-auto lg:mx-0 opacity-80">
  Affordable, transparent pricing plans designed to fit your business needs and help you grow with powerful digital marketing solutions.
</p>
      </motion.div>
    </div>
  </div>
</section>
      {/* --- PRICING GRID --- */}
      <section className="relative z-10 max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 -mt-12 2xl:-mt-20">
        <div className="grid lg:grid-cols-3 gap-8 2xl:gap-12">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-8 md:p-10 2xl:p-14 rounded-[3rem] border flex flex-col transition-all duration-500 group ${
                plan.featured 
                ? "bg-gradient-to-b from-blue-500/10 to-transparent border-blue-500/30 scale-105 shadow-[0_20px_50px_rgba(59,130,246,0.1)] z-20" 
                : "bg-white/[0.02] border-white/5 hover:border-white/20"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-500 text-[10px] 2xl:text-xs font-black uppercase tracking-widest rounded-full shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-8 p-4 2xl:p-6 w-fit rounded-2xl bg-white/5 border border-white/5 group-hover:scale-110 transition-transform">
                {plan.icon}
              </div>

              <h3 className="text-2xl 2xl:text-4xl font-black mb-2">{plan.name}</h3>
              <p className="text-zinc-500 text-[16px] 2xl:text-xl mb-8 leading-relaxed">{plan.desc}</p>

              <div className="flex items-baseline gap-1 mb-10">
                <span className="text-5xl 2xl:text-7xl font-black text-white">{plan.price}</span>
                <span className="text-zinc-500 text-sm 2xl:text-lg">{plan.billing}</span>
              </div>

              <div className="space-y-4 2xl:space-y-6 mb-12 flex-1">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-zinc-400">
                    <Check size={18} className="text-blue-500 mt-0.5 flex-shrink-0 2xl:w-6 2xl:h-6" />
                    <span className="text-sm 2xl:text-xl font-medium leading-tight">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 2xl:py-6 rounded-full font-black uppercase tracking-widest transition-all text-xs 2xl:text-lg ${
                plan.featured 
                ? "bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-900/20" 
                : "bg-white text-black hover:bg-blue-600 hover:text-white"
              }`}>
                Get Started
              </button>
            </motion.div>
          ))}
        </div>

        {/* --- ENTERPRISE PLAN (STANDALONE) --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 2xl:mt-20 p-8 md:p-12 2xl:p-20 rounded-[3.5rem] border border-red-500/20 bg-gradient-to-r from-red-500/5 via-transparent to-transparent flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-3">
               <div className="p-3 2xl:p-5 rounded-xl bg-red-500/10 text-red-500">
                  <Flame size={24} className="2xl:w-10 2xl:h-10" />
               </div>
               <h3 className="text-3xl 2xl:text-5xl font-black italic">Enterprise Plan</h3>
            </div>
          <p className="text-zinc-400 text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed max-w-xl 2xl:max-w-4xl opacity-90 antialiased">
  For large-scale business growth. Custom Marketing Strategy, Full Funnel Optimization, Advanced PPC + Retargeting, and 24/7 Priority Support.
</p>
          </div>

          <div className="text-center md:text-right space-y-4 min-w-[200px]">
            <div className="text-4xl 2xl:text-6xl font-black text-white">Custom Pricing</div>
            <button className="px-8 py-4 2xl:px-12 2xl:py-6 bg-white text-black font-black uppercase tracking-widest rounded-full hover:bg-red-500 hover:text-white transition-all text-xs 2xl:text-xl">
              Contact Sales
            </button>
          </div>
        </motion.div>
      </section>
    </main>
  );
}