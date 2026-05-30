import { notFound } from "next/navigation";
import { ArrowLeft, ChevronRight, Bookmark, Sparkles, Flame, User, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { createClient } from 'contentful';

// Contentful Client Setup
const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || 'aprr3d93u7vz',
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || 'LXVuIdmXm-IK71j-DfjMMgSZQnAoM_aqxz-KzAlaMdA',
  environment: 'master'
});

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Static generation helper for optimized caching
export async function generateStaticParams() {
  try {
    const response = await client.getEntries({ content_type: 'blog' });
    return response.items.map((item) => ({
      slug: item.sys.id,
    }));
  } catch (error) {
    return [];
  }
}

export default async function BlogDetail({ params }: PageProps) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  let post: any = null;
  let relatedPosts: any[] = [];

  try {
    // 1. Target Single Entry by ID
    const entry = await client.getEntry(slug);
    const fields: any = entry.fields;
    
    const imageAsset = fields.featuredImage?.fields?.file?.url || fields.image?.fields?.file?.url;

    // Rich Text Content parser safely conversion
    let textContent = "";
    if (typeof fields.content === 'string') {
      textContent = fields.content;
    } else if (fields.content?.content) {
      textContent = fields.content.content
        .map((p: any) => p.content?.map((t: any) => t.value).join(""))
        .join("\n\n");
    }

    const cleanExcerpt = textContent ? textContent.substring(0, 160) + "..." : "Read our premium framework deployment details inside.";

    post = {
      slug: entry.sys.id,
      title: fields.title || "No Title",
      excerpt: cleanExcerpt,
      content: textContent || "Content layout is updating...",
      author: "High Rise Team",
      image: imageAsset ? `https:${imageAsset}` : "/placeholder-blog.jpg",
    };

    // 2. Fetch sidebar tracks (excluding active post)
    const totalEntries = await client.getEntries({ content_type: 'blog' });
    relatedPosts = totalEntries.items
      .filter((item) => item.sys.id !== slug)
      .slice(0, 3)
      .map((rp: any) => {
        const rpImage = rp.fields.featuredImage?.fields?.file?.url || rp.fields.image?.fields?.file?.url;
        return {
          slug: rp.sys.id,
          title: rp.fields.title || "Untitled",
          image: rpImage ? `https:${rpImage}` : "/placeholder-blog.jpg"
        };
      });

  } catch (error) {
    console.error("Error fetching single dynamic entry:", error);
    return notFound();
  }

  if (!post) return notFound();

  return (
    // 🛠️ FIX 1: Pure full-screen viewport structure added (w-full min-h-screen)
    <main className="relative bg-[#020617] text-white w-full min-h-screen selection:bg-blue-600 antialiased overflow-x-hidden flex flex-col items-center">

      {/* 🌌 FIX 2: Background wrapper shifted to true 100vw full screen edge width */}
      <div className="absolute top-0 left-0 right-0 w-full h-[650px] pointer-events-none z-0 opacity-40">
        <Image
          src="/home-hero.jpg"
          alt="Background Canvas Grid"
          fill
          priority
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/70 to-[#020617]" />
      </div>

      {/* 📊 MAIN CONTAINER: Perfectly width balanced constraint layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-32 md:pt-40  pb-32">
        
      {/* 🔙 BACK TO INSIGHTS (Premium Upgraded Layout) */}
<div className="mb-10 clear-both">
  <Link
    href="/blog"
    className="group inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.02] border border-white/5 hover:border-blue-500/30 hover:bg-blue-500/5 text-zinc-400 hover:text-blue-400 transition-all duration-300 text-[10px] md:text-[11px] font-black tracking-[2px] uppercase backdrop-blur-md shadow-sm active:scale-95"
  >
    <ArrowLeft 
      size={14} 
      className="text-zinc-500 group-hover:text-blue-400 group-hover:-translate-x-1.5 transition-all duration-300 ease-out" 
    />
    <span className="relative tracking-[3px]">
      Back to Insights
    </span>
  </Link>
</div>

        {/* 📑 1. TOP HEADER HERO (Headline & Metadata Only) */}
        <div className="max-w-4xl mb-12">
         

          <h1 className="text-[2.2rem] md:text-[3.2rem] lg:text-[4rem] font-black tracking-tighter leading-[1.1] text-white mb-6 uppercase">
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

        {/* 💥 2. MODERN SPLIT GRID (Content side by side with Sidebar) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* 📝 LEFT SIDE: Content Column (65% width) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* 🎯 FEATURED IMAGE */}
            <div className="relative w-full h-[280px] md:h-[460px] rounded-[2rem] overflow-hidden border border-white/5 bg-zinc-900 shadow-2xl">
              <Image 
                src={post.image} 
                alt={post.title} 
                fill 
                className="object-cover"
                priority
              />
            </div>

            {/* MAIN ARTICLE BODY CARD */}
            <article className="bg-[#030712] border border-white/5 p-6 md:p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

              <div className="relative z-10 space-y-8">
                {/* Safe Excerpt render */}
                <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl font-medium text-white   leading-relaxed border-l-4 border-blue-500 pl-6 py-1 max-w-full">
                  {post.excerpt}
                </p>
                
                <div className="text-white text-base leading-relaxed space-y-6 font-normal">
                  <h2 className="text-[2.3rem]  md:text-[2.5rem] lg:text-[2.5rem] 2xl:text-[3.2rem] font-black tracking-tight pt-2 ">
                    Strategy Overview
                  </h2>
                  
                  {/* Safe Content text parsing blocks */}
                  <div className="text-white text-[15px] md:text-base lg:text-[16px] font-normal leading-relaxed whitespace-pre-line antialiased">
                    {post.content}
                  </div>
                  
                
                </div>
              </div>
            </article>
          </div>

          {/* ⚡ RIGHT SIDE: Sticky Layout Sidebar (35% width) */}
          <div className="lg:col-span-1 space-y-8 lg:sticky lg:top-28">
            
       {/* 📬 Card 1: Newsletter / Get Quote (Dark Premium Theme) */}
<div className="relative py-6 md:py-10 rounded-[2.5rem] bg-[#030207] bg-gradient-to-r from-[#030303] via-[#050a18] to-[#030303] border border-white/5 shadow-2xl overflow-hidden text-left group">
  
  {/* 🌌 Subtle Radial Dot Grid Pattern Inside Card */}
  <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
  
  {/* Modern Ambient Corner Glow */}
  <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-500/10 blur-[40px] pointer-events-none group-hover:bg-blue-500/20 transition-all duration-700" />

  <div className="relative z-10 px-6 md:px-8">
    <div className="flex items-center justify-between mb-4">
      <Bookmark className="text-blue-500/50 group-hover:text-blue-400 transition-colors duration-300" size={22} />
      <span className="text-[9px] font-black tracking-[3px] text-blue-400/60 uppercase bg-blue-500/5 border border-blue-500/10 px-2.5 py-1 rounded-full">
        Contact
      </span>
    </div>

    <h3 className="text-lg font-black text-white tracking-tight leading-tight mb-2 uppercase">
      Start A Project
    </h3>
    
    <p className="text-zinc-400 text-xs leading-relaxed mb-6 font-normal tracking-wide antialiased">
      Ready to scale? Connect with our technical framework experts today.
    </p>
    
    <div className="w-full layout-action-wrapper">
      {/* 🛠️ Dynamic Navigation Button with Premium Hover Fill Effect */}
      <Link href="/contact" className="inline-block w-full">
        <button className="group relative overflow-hidden w-full h-[48px] md:h-[52px] rounded-xl bg-white text-black font-black text-[11px] uppercase tracking-widest transition-all duration-500 flex items-center justify-center gap-2 active:scale-[0.98] shadow-lg">
          {/* Animated Hover Gradient Background */}
          <div className="absolute inset-0 w-0 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 ease-out group-hover:w-full" />
          
          {/* Button Text & Icon */}
          <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-white transition-colors duration-500">
            Get Quote 
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </span>
        </button>
      </Link>
    </div>
  </div>
</div>
            {/* 📑 Card 2: Recent / Related Insights Grid */}
            <div className="p-8 rounded-[2.5rem] bg-[#030712] border border-white/5 shadow-xl space-y-6">
              <h3 className="text-[10px] font-black uppercase tracking-[3px] text-zinc-500 border-b border-white/5 pb-4">
                Related Insights
              </h3>
              <div className="space-y-6">
                {relatedPosts.map((rp) => (
                  <Link key={rp.slug} href={`/blog/${rp.slug}`} className="group flex gap-4 items-center">
                    {/* Thumbnail */}
                    <div className="w-20 h-16 rounded-xl overflow-hidden border border-white/5 bg-zinc-900 relative shrink-0">
                      <Image 
                        src={rp.image} 
                        fill 
                        className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
                        alt={rp.title} 
                      />
                    </div>
                    {/* Title */}
                    <div>
                      <h4 className="font-bold text-xs text-zinc-300 group-hover:text-blue-400 transition-colors uppercase line-clamp-2 leading-snug tracking-tight">
                        {rp.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}