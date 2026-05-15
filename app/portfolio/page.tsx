"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Flame } from "lucide-react";

// --- Projects Data (Same as yours) ---
export const projects = [
  {
    slug: "realtime-crypto-tracker",
    title: "Real-time Telemetry Dashboard",
    category: "web",
    metric: "320ms Global Response Index",
    tagline: "Type-safe custom Next.js deployment sync built over lightning-fast API microservices.",
    image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=800"
  },
  {
    slug: "headless-shopify-platform",
    title: "Headless Commerce Deployment",
    category: "web",
    metric: "99/100 Lighthouse Performance",
    tagline: "Decoupled React layout structures paired seamlessly with secure background databases.",
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800"
  },
  {
    slug: "corporate-data-dashboard",
    title: "Enterprise Inventory Control Panel",
    category: "web",
    metric: "Zero Bottleneck Operations",
    tagline: "Custom Node.js database architectures with responsive Framer Motion UI structures.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800"
  },
  {
    slug: "ai-saas-interface",
    title: "AI Automation Interface",
    category: "web",
    metric: "Instant Logic Rendering",
    tagline: "Next-gen dashboard for neural network monitoring and automated workflow management.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800"
  },
  {
    slug: "ev-identity-rebrand",
    title: "Electric Mobility Brand Architecture",
    category: "branding",
    metric: "Unified Global Brand Assets",
    tagline: "Comprehensive typography manuals, iconography structures, and positioning guidelines.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800"
  },
  {
    slug: "luxury-skincare-visual-guide",
    title: "Premium Skincare Design Framework",
    category: "branding",
    metric: "+65% Perceived Value Score",
    tagline: "High-tactility packaging concepts anchoring deep user emotional trust paradigms.",
    image: "https://images.unsplash.com/photo-1608248597481-496100c80836?w=800"
  },
  {
    slug: "fintech-hub-organic-scale",
    title: "FinTech Hub Traffic Expansion",
    category: "seo",
    metric: "1M Monthly Organic Hits",
    tagline: "Deep technical semantic clustering and architectural Core Web Vitals optimization.",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800"
  },
  {
    slug: "saas-programmatic-seo-maps",
    title: "Enterprise SaaS Programmatic Framework",
    category: "seo",
    metric: "Ranked #1 for 400+ Keywords",
    tagline: "Automated topical hubs answering scalable multi-intent search parameters.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"
  },
  {
    slug: "ecom-apparel-roas",
    title: "E-com Apparel Store Sprint",
    category: "social",
    metric: "4.2x Attributed ROAS",
    tagline: "Full-funnel Meta and TikTok targeted performance deployment scaling revenue.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800"
  },
  {
    slug: "b2b-saas-lead-campaign",
    title: "B2B SaaS Lead Generation Matrix",
    category: "social",
    metric: "+180% Demo Bookings",
    tagline: "LinkedIn conversational ad tracks mapping high-value enterprise accounts.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800"
  }
];

const filters = [
  { id: "all", label: "All" },
  { id: "web", label: "Website Development" },
  { id: "branding", label: "Branding" },
  { id: "seo", label: "SEO" },
  { id: "social", label: "Social Media" }
];

export default function PortfolioPage() {
  const [active, setActive] = useState("all");

  const filtered = active === "all" ? projects : projects.filter(p => p.category === active);

  return (
    <main className="bg-[#030712] text-white selection:bg-blue-600 overflow-x-hidden min-h-screen">
      
      {/* 1. HERO SECTION - Scaled for 4K */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <Image
            src="/home-hero.jpg"
            alt="Mesh Grid"
            fill
            priority
            sizes="100vw"
            className="object-cover object-top opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030712]/40 to-[#030712]" />
        </div>

        <div className="relative z-10 max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 pt-32 pb-16 md:pt-40 2xl:pt-52">
          <div className="max-w-5xl 2xl:max-w-7xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2.5 mb-8 w-fit px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md"
            >
              <Flame size={12} className="text-blue-400 animate-pulse" />
              <span className="text-[10px] 2xl:text-xs font-black tracking-[4px] text-blue-300">RECENT WORKS</span>
            </motion.div>

            <h1 className="text-6xl sm:text-8xl md:text-[100px] 2xl:text-[130px] font-black tracking-tighter leading-[0.8] text-white mb-8">
              Case{" "}
              <span className="bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text">
                Studies
              </span>
            </h1>

            <p className="text-white-500 text-lg md:text-xl lg:text-2xl 2xl:text-3xl max-w-2xl 2xl:max-w-4xl font-medium leading-relaxed opacity-80">
              Showcasing our expert digital marketing work, we’ve helped brands grow globally with proven strategies and measurable success results.
            </p>
          </div>
        </div>
      </section>

      {/* 2. FILTER INTERFACE - Centered & Premium */}
      <section className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 mb-16 relative z-30 -mt-8">
        <div className="flex justify-center w-full"> 
          <div className="flex flex-wrap justify-center gap-2 bg-zinc-950/60 p-2 rounded-3xl border border-white/5 w-fit backdrop-blur-xl shadow-2xl">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActive(f.id)}
                className={`px-6 py-3 rounded-2xl text-[11px] 2xl:text-xs font-bold tracking-wider transition-all duration-300 whitespace-nowrap
                ${active === f.id 
                  ? "bg-blue-600 text-white shadow-xl shadow-blue-600/20 scale-105" 
                  : "hover:bg-white/5 text-zinc-400 hover:text-white"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CASE STUDIES GRID - Pixel Perfect Scaling */}
      <section className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 mb-40 relative z-20">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 2xl:gap-12">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <Link href={`/portfolio/${item.slug}`} key={item.slug} className="group block">
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-[2.5rem] overflow-hidden border border-white/5 bg-zinc-950/30 p-4 2xl:p-6 transition-all duration-500 hover:border-blue-500/30 hover:bg-zinc-950/60 flex flex-col h-full cursor-pointer shadow-2xl"
                >
                  <div className="aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 border border-white/5 relative bg-zinc-900">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                    <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-white/10 rounded-xl px-3 py-1.5 flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                      <span className="text-[10px] 2xl:text-xs font-mono font-bold tracking-tight text-zinc-200">{item.metric}</span>
                    </div>
                  </div>

                  <div className="px-2 flex flex-col flex-grow">
                    <div className="space-y-3">
                      <span className="text-[9px] 2xl:text-[10px] font-black uppercase tracking-[2px] text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-500/10 inline-block">
                        {item.category === 'web' ? 'Web Development' : 
                         item.category === 'branding' ? 'Branding' :
                         item.category === 'seo' ? 'SEO' : 'Social Media'}
                      </span>
                      <h3 className="text-xl 2xl:text-2xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors duration-300 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-zinc-500 text-xs 2xl:text-sm leading-relaxed font-medium line-clamp-2">
                        {item.tagline}
                      </p>
                    </div>

                    <div className="pt-6 mt-auto border-t border-white/[0.03] flex items-center justify-between">
                      <span className="text-[10px] 2xl:text-xs uppercase font-bold tracking-widest text-zinc-600 group-hover:text-blue-400 transition-colors">
                        View Execution
                      </span>
                      <div className="w-8 h-8 2xl:w-10 2xl:h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 group-hover:rotate-45">
                        <ArrowUpRight size={14} className="2xl:w-5 2xl:h-5" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </main>
  );
}