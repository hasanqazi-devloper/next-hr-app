import { notFound } from "next/navigation";
import { ArrowLeft, ChevronRight, Bookmark, Sparkles, Flame, User, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { posts } from "@/lib/blogData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogDetail({ params }: PageProps) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  
  const post = posts.find((p) => p.slug === slug);

  if (!post) return notFound();

  const relatedPosts = posts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <main className="bg-[#020617] text-white min-h-screen selection:bg-blue-600 antialiased overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <Image 
            src="/home-hero.jpg" 
            alt="Background Grid" 
            fill
            priority
            className="object-cover object-top opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/40 to-[#020617]" />
        </div>

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/[0.05] blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-16 md:pt-40">
          <Link 
            href="/blog" 
            className="group flex items-center gap-2 text-zinc-500 hover:text-blue-400 transition-colors mb-8 text-[10px] font-bold tracking-widest uppercase"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Back to Insights
          </Link>

          <div className="max-w-5xl">
            <div className="flex items-center gap-2.5 mb-8 w-fit px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md">
              <Flame size={12} className="text-blue-400 animate-pulse" />
              <span className="text-[10px] font-black tracking-[4px] text-blue-300 uppercase">Article Insights</span>
            </div>

            {/* Title ko control mein rakha */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-[1] text-white mb-8 uppercase !text-[clamp(2.5rem,5vw,5rem)]">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-zinc-500 text-[10px] font-bold tracking-[2px] uppercase">
               <div className="flex items-center gap-2">
                 <User size={14} className="text-blue-500" />
                 <span>By {post.author}</span>
               </div>
               <div className="flex items-center gap-2">
                 <Calendar size={14} className="text-blue-500" />
                 <span>Latest Deployment</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CONTENT SECTION */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_380px] gap-12 items-start mt-8 pb-32">
        
        {/* Main Article Body */}
        <article className="bg-[#030712] border border-white/5 p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

          <div className="relative z-10 space-y-10">
            {/* Excerpt - Size standard rakha */}
           <p className="text-lg md:text-xl lg:text-[22px] 2xl:text-2xl 3xl:text-3xl text-zinc-200 font-normal italic leading-relaxed border-l-4 border-blue-500 pl-6 md:pl-8 py-2 max-w-full">
  {post.excerpt}
</p>
            <div className="text-zinc-400 text-base leading-relaxed space-y-6 font-normal">
              {/* Global H2 override */}
              <h2 className="!text-2xl !font-black text-white tracking-tight pt-4 uppercase !mb-4">
                Strategy Overview
              </h2>
<p className="text-white-300 text-[16px] md:text-lg lg:text-[19px] 2xl:text-xl 3xl:text-2xl font-normal leading-relaxed max-w-3xl 2xl:max-w-4xl mx-auto lg:mx-0 antialiased selection:bg-blue-500 selection:text-white">
  {post.content}
</p>
              {/* Callout Box */}
              <div className="p-8 bg-blue-500/5 border border-blue-500/10 rounded-[2rem] my-10">
                <h3 className="!text-[10px] !font-black tracking-widest text-blue-400 uppercase mb-6 flex items-center gap-2 !m-0">
                  <Sparkles size={14} /> Technical Directives
                </h3>
                <ul className="space-y-4 mt-6">
                  <li className="flex items-start gap-3 text-sm">
                    <ChevronRight size={14} className="text-blue-500 mt-1 shrink-0" /> 
                    <span>Implementation of high-frequency conversion mapping.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="space-y-8 lg:sticky lg:top-32">
          {/* Newsletter Box */}
          <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-blue-600 to-blue-900 border border-white/10 shadow-2xl relative overflow-hidden text-left">
            <Bookmark className="text-white/40 mb-4" size={24} />
            <h3 className="!text-xl !font-black text-white tracking-tight leading-tight mb-2 uppercase !m-0">Stay Updated</h3>
<p className="text-white/65 text-[16px] sm:text-[12px] lg:text-[13px] 2xl:text-sm leading-relaxed mb-6 font-normal tracking-wide antialiased">
  Get our latest digital frameworks directly.
</p>            <div className="space-y-3 relative z-10">
              <input type="email" placeholder="email@agency.com" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-white/40 outline-none" />
              <button className="w-full py-3.5 bg-white text-black font-black text-[10px] tracking-widest uppercase rounded-xl">
                SUBSCRIBE
              </button>
            </div>
          </div>

          {/* Related Tracks - FIXED TEXT SIZES */}
          <div className="p-8 rounded-[2.5rem] bg-[#030712] border border-white/5 shadow-xl space-y-6">
            <h3 className="!text-[10px] !font-black uppercase tracking-[3px] text-zinc-500 border-b border-white/5 pb-4 !m-0">Related Insights</h3>
            <div className="space-y-8">
              {relatedPosts.map((rp) => (
                <Link key={rp.slug} href={`/blog/${rp.slug}`} className="group block space-y-3">
                  <div className="aspect-[16/10] rounded-2xl overflow-hidden border border-white/5 bg-zinc-900">
                    <img src={rp.image} className="w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-all duration-700" alt="" />
                  </div>
                  {/* Yahan !text-sm lagaya hy taake global bara size override ho jaye */}
                  <h4 className="!font-bold !text-sm text-zinc-300 group-hover:text-blue-400 transition-colors uppercase leading-tight tracking-tight !m-0">
                    {rp.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        </aside>

      </section>
    </main>
  );
}