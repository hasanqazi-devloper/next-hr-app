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
      
      {/* --- HERO SECTION - Optimized for High Res --- */}
      <section className="relative w-full pt-40 pb-24 px-6 border-b border-white/5 2xl:pt-56 2xl:pb-36">
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <Image
            src="/home-hero.jpg"
            alt="Mesh Grid"
            fill
            priority
            sizes="100vw"
            className="object-cover object-top opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/60 to-[#020617]" />
        </div>

        <div className="relative z-10 max-w-7xl 2xl:max-w-[1600px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl 2xl:max-w-6xl"
          >
            <div className="flex items-center gap-2.5 mb-8 w-fit px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md">
              <Zap size={14} className="text-blue-400 animate-pulse" />
              <span className="text-[10px] 2xl:text-xs font-black tracking-[4px] text-blue-300 uppercase">Affordable Growth</span>
            </div>

            <h1 className="text-6xl md:text-8xl 2xl:text-[130px] font-black tracking-tighter leading-none mb-8">
              Our  {" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
               Pricing Plans.
              </span>
            </h1>

            <p className="text-white-400 text-lg md:text-xl 2xl:text-3xl font-medium leading-relaxed max-w-2xl 2xl:max-w-4xl">
              Affordable, transparent pricing plans designed to fit your business needs and help you grow with powerful digital marketing solutions.
            </p>
          </motion.div>
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
              <p className="text-zinc-500 text-sm 2xl:text-xl mb-8 leading-relaxed">{plan.desc}</p>

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
            <p className="text-zinc-400 max-w-xl 2xl:max-w-4xl 2xl:text-2xl">
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