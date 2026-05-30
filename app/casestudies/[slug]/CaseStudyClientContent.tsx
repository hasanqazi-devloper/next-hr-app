"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Layers, Zap, Flame, Globe, Tag, MapPin, Link2 } from "lucide-react";
import { CaseStudy } from "@/lib/caseStudiesData";

interface CaseStudyProps {
  project: CaseStudy;
}

export default function CaseStudyClientContent({ project }: CaseStudyProps) {
  const isSocial = project.isSocial || project.category === "social";

  return (
    <main className={`bg-[#030303] text-zinc-100 min-h-screen antialiased overflow-x-hidden pt-0 transition-opacity duration-1000 ${
      isSocial ? "selection:bg-pink-600" : "selection:bg-blue-600"
    }`}>

      {/* ========================================================
          🔥 1. HERO SECTION: Simple Alignment with Back Link
          ======================================================== */}
      <section className="relative w-full overflow-hidden bg-[#030712]">
        <div className="w-full">
          {/* Background Image Container */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <Image
              src="/home-hero.jpg"
              alt="Mesh Grid"
              fill
              sizes="100vw"
              priority
              className="object-cover object-top opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030712]/40 to-[#030712]" />
          </div>

          {/* Ambient Blur Dot */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/[0.05] blur-[120px] pointer-events-none" />

          {/* Full Sized Content Wrapper */}
          <div className="relative z-10 w-full mx-auto text-center lg:text-left px-6 pt-32 pb-16 md:pt-20 md:pb-24 lg:max-w-full lg:pt-40 lg:pb-16 lg:pl-40 2xl:mx-0 2xl:max-w-[1500px] 2xl:pt-48 2xl:pl-80">
            <div className="max-w-5xl animate-fadeIn space-y-2">
              
              {/* Back to Case Studies Button Styled Inline */}
              <Link 
                href="/casestudies" 
                className="group inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[3px] text-zinc-400 hover:text-white transition-all duration-300 mb-8"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform duration-300" /> 
                Back to Case Study
              </Link>

              {/* Glassmorphism Badge Container */}
              <div className={`flex items-center gap-2.5 mb-8 w-fit px-4 py-2 rounded-full border backdrop-blur-md mx-auto lg:mx-0 ${
                isSocial ? 'bg-pink-500/10 border-pink-500/20 text-pink-300' : 'bg-blue-500/10 border-blue-500/20 text-blue-300'
              }`}>
                <Flame size={12} className={`animate-pulse ${isSocial ? 'text-pink-400' : 'text-blue-400'}`} />
                <span className="text-[10px] font-black tracking-[4px] uppercase">
                  {project.category === 'seo' ? 'ABOUT HIGH RISE / SEO' : 'ABOUT HIGH RISE / PERFORMANCE'}
                </span>
              </div>

              {/* Main Typography Block */}
              <h1 className="text-[3rem] md:text-[3.2rem] lg:text-[3.8rem] 2xl:text-[5rem] font-black tracking-tighter leading-none text-white mb-8 uppercase">
                CASE{" "}
                <span className={`bg-gradient-to-r bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text ${
                  isSocial ? 'from-pink-400 via-rose-500 to-pink-400' : 'from-[#00f2ff] via-[#0070ff] to-[#00f2ff]'
                }`}>
                  STUDIES.
                </span>
              </h1>

            </div>
          </div>
        </div>
      </section>

   {/* ========================================================
    📊 2. PROJECT INTRO: Pure Black Canvas Layout (Balanced Gap)
    ======================================================== */}
<section className="w-full bg-[#030303] py-20 border-t border-white/[0.02]">
  <div className="max-w-7xl mx-auto px-6">
    {/* Grid setup with proper top items alignment */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

      {/* LEFT: Project Details Card (🛠️ Sticky implementation balances the height during scroll) */}
      <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28 transition-all duration-500 animate-slideUp">
        {/* Image wrapper with custom aspect ratio to prevent overwelming height */}
        <div className="relative aspect-[4/3] sm:aspect-square w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          <Image src={project.image} alt={project.title} fill className="object-cover" />
        </div>

        {/* Clean details card with tight spacing */}
        <div className="bg-[#0a0a0a] border border-white/[0.08] rounded-2xl p-6 relative overflow-hidden group shadow-xl">
          <div className={`absolute top-0 left-0 w-1 h-full ${isSocial ? 'bg-pink-500' : 'bg-blue-500'}`} />
          <h3 className="text-lg font-black uppercase tracking-wider text-zinc-300 mb-4">Project Details</h3>

          <div className="space-y-4">
            <DetailItem label="Category" value={project.category === 'seo' ? 'Ecommerce SEO' : 'Paid Social'} icon={<Tag size={14} />} />
            <DetailItem label="Client" value={project.title} icon={<Globe size={14} />} />
            <DetailItem label="Location" value="Australia / Global" icon={<MapPin size={14} />} />
            <DetailItem label="Website" value="Multiple Webstacks" icon={<Link2 size={14} />} />
          </div>
        </div>
      </div>

      {/* RIGHT: Main Punchy Content + Metrics (🛠️ Top started but visually expanded) */}
      <div className="lg:col-span-8 lg:pt-2 flex flex-col justify-start space-y-12 animate-fadeIn delay-100">
        
        {/* Text Block with elegant block spacing */}
        <div className="space-y-6 lg:pr-6">
          <h2 className="text-[2.3rem] md:text-[2.8rem] lg:text-[3rem] 2xl:text-[3.5rem] font-black tracking-tight leading-[1.1] text-white ">
            {project.description}
          </h2>
          <div className={`h-1 w-24 ${isSocial ? 'bg-pink-500' : 'bg-blue-500'}`} />
          <p className="text-zinc-300 text-[16px] md:text-lg lg:text-[19px] 2xl:text-xl font-medium leading-relaxed max-w-3xl">
          Transforming a fragmented digital presence into a high-yielding, conversion-focused revenue engine through data-driven technical optimization.
          </p>
        </div>

        {/* FITTED METRICS STRIP: Clean border separator to anchor the content bottom */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-10 border-t border-white/[0.06]">
          {project.metrics.map((metric, i) => (
            <div key={i} className="flex flex-col border-l border-zinc-800 pl-5 hover:border-zinc-400 transition-colors duration-300">
              <span className={`text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-none ${
                metric.highlight ? (isSocial ? 'text-pink-500' : 'text-blue-500') : 'text-white'
              }`}>
                {metric.value}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[2px] text-zinc-400 mt-3 block leading-tight">
                {metric.label}
              </span>
            </div>
          ))}
        </div>

      </div>

    </div>
  </div>
</section>

      {/* ========================================================
          🔄 3. DYNAMIC SECTIONS: Alternating Colors (Black vs #020617)
          ======================================================== */}
      <div className="w-full">
        {project.sections.map((section, idx) => {
          // Alternating backgrounds explicitly setting Black vs #020617
          const isDarkSlate = idx % 2 === 0;
          return (
            <section 
              key={section.id} 
              className={`w-full py-24 border-b border-white/[0.02] transition-all duration-700 ${
                isDarkSlate ? 'bg-[#020617]' : 'bg-[#030303]'
              }`}
            >
              <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

                {/* Left Side Header */}
                <div className="lg:col-span-4 lg:sticky lg:top-28 animate-fadeIn">
                 
                  <h3 className="text-[2.3rem]  md:text-[2.5rem] lg:text-[2.5rem] 2xl:text-[3.2rem] font-black tracking-tighter">
                    {section.title}
                  </h3>
                </div>

                {/* Right Side Content Canvas (Raw Typographic Bullet Lists) */}
                <div className="lg:col-span-8 space-y-6 animate-fadeIn">
                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed ">
                      {p}
                    </p>
                  ))}

                  {section.features && (
                    <div className="space-y-4 pt-4">
                      {section.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-3 group py-1.5 border-b border-white/[0.02] hover:border-white/[0.08] transition-colors duration-300">
                          <div className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${
                            isSocial ? 'bg-pink-500 shadow-[0_0_8px_rgba(236,72,153,0.6)]' : 'bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]'
                          }`} />
                          <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium group-hover:text-white transition-colors duration-300">
                            {feat}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

              </div>
            </section>
          );
        })}
      </div>

      {/* ========================================================
          🏆 4. RESULTS & PROOF CANVAS (Pure Black Theme Container)
          ======================================================== */}
      <section className="w-full bg-[#030303] py-24 border-b border-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 space-y-20">

         

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-slideUp">
            {project.results.cards.map((card, idx) => (
              <div key={idx} className="p-10 rounded-2xl bg-[#020617] border border-white/[0.05] flex flex-col justify-between space-y-8 transition-all duration-300 hover:border-zinc-700 hover:scale-[1.01]">
                <h4 className={`text-6xl md:text-7xl font-black tracking-tighter ${card.isEmerald ? 'text-emerald-500' : (isSocial ? 'text-pink-500' : 'text-blue-500')}`}>
                  {card.value}
                </h4>
                <div>
                  <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium tracking-[2px] mb-2">{card.label}</p>
                  <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed" dangerouslySetInnerHTML={{ __html: card.desc }} />
                </div>
              </div>
            ))}
          </div>

          {/* Verification Screenshots Block (Preserving Aspect Ratio perfectly without crop) */}
          {project.proof && (
            <div className="space-y-12 pt-8 border-t border-white/[0.06] animate-fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {project.proof.images.map((img, i) => (
                  <div key={i} className="space-y-4 group">
                    {/* Object Contain Layout ensures no cropping on image wrappers */}
                    <div className="relative w-full h-[350px] rounded-xl overflow-hidden border border-white/10 bg-[#020617] shadow-2xl transition-all duration-500 group-hover:border-zinc-700 flex items-center justify-center p-2">
                      <Image 
                        src={img.src} 
                        alt={img.alt} 
                        fill 
                        sizes="(max-w-7xl) 50vw, 100vw"
                        className="object-contain transition-transform duration-700 group-hover:scale-[1.01]" 
                      />
                    </div>
                    {/* <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium tracking-widest flex items-center gap-2">
                      <Zap size={12} className="text-emerald-500" /> {img.caption}
                    </p> */}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

    </main>
  );
}

// Sub-Component for Clean Detail List
function DetailItem({ label, value, icon }: { label: string; value: string; icon: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between border-b border-white/[0.03] pb-3">
      <div className="flex items-center gap-3 text-zinc-500">
        {icon}
        <span className="text-[11px] font-medium uppercase tracking-wider">{label}:</span>
      </div>
      <span className="text-zinc-200 text-xs font-bold">{value}</span>
    </div>
  );
}