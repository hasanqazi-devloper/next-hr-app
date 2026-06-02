"use client";

import Image from "next/image";

export default function JuicerReviews() {
  const reviewsList = [
    { id: 1, src: "/test10.jpg", alt: "Review 1" },
    { id: 2, src: "/test9.jpg", alt: "Review 2" },
    { id: 3, src: "/test8.jpg", alt: "Review 3" },
    { id: 4, src: "/test7.jpg", alt: "Review 4" },
    { id: 5, src: "/test6.jpg", alt: "Review 5" },
    { id: 6, src: "/test5.jpg", alt: "Review 6" },
    { id: 7, src: "/test4.jpg", alt: "Review 7" },
    { id: 8, src: "/test3.jpg", alt: "Review 8" },
    { id: 9, src: "/test2.jpg", alt: "Review 9" },
    { id: 10, src: "/test1.jpg", alt: "Review 10" },
  ];

  const doubledReviews = [...reviewsList, ...reviewsList];

  return (
    // 🎯 FIXED: Section boundaries pushed to max-w-full to prevent layout limitations
    <div className="w-full bg-[#1E2939] py-12 text-center relative z-10 overflow-hidden border-b border-white/[0.03]">

      {/* Premium Tech Mesh Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-30" />

      {/* Top Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-500/[0.04] blur-[120px] pointer-events-none rounded-full" />

      {/* Main Container - 🎯 FIXED: Replaced standard max-w constraints with fluid responsive viewports */}
      <div className="w-full relative z-10 px-4 md:px-12 max-w-full mx-auto">

        {/* ⚡ Top Section: Heading & Button in 1 Single Line (Desktop) */}
        <div className="mb-8 flex flex-col md:flex-row items-center justify-between text-left gap-6 border-b border-white/[0.03] pb-6 max-w-[1800px] mx-auto">

          {/* Left Block: Headings */}
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="text-[2.2rem] md:text-[2.6rem] lg:text-[3rem] 2xl:text-[3.5rem] font-black tracking-tight text-white bg-gradient-to-r from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent leading-none">
              What Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Clients
              </span> Say
            </h2>
          </div>

          {/* Right Block: Integrated GMB Action Button */}
          <div className="shrink-0 w-full md:w-auto">
            <div className="p-3 md:px-4 md:py-3 rounded-xl border border-white/[0.04] bg-[#09090b]/40 backdrop-blur-md flex items-center justify-between gap-6 max-w-md mx-auto md:mx-0">
              <div className="flex flex-col items-start gap-0.5">
                <div className="flex items-center gap-0.5 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-zinc-500 text-[11px] font-medium tracking-wide hidden sm:block">
                  High Rise Digital Agency
                </p>
              </div>

              {/* GMB Review Redirection Link */}
              <a
                href="https://www.google.com/search?q=high+rise+seo+agency"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-bold text-[10px] uppercase tracking-widest text-black bg-gradient-to-r from-blue-400 to-cyan-400 hover:from-blue-500 hover:to-cyan-500 shadow-[0_4px_15px_rgba(56,189,248,0.15)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 text-center whitespace-nowrap"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.24 10.285V13.4h6.887c-.275 1.565-1.88 4.604-6.887 4.604-4.33 0-7.866-3.577-7.866-8s3.536-8 7.866-8c2.46 0 4.105 1.025 5.047 1.926l2.427-2.334C17.955 2.192 15.34 1 12.24 1 6.033 1 1 6.033 1 12.24s5.033 11.24 11.24 11.24c6.478 0 10.793-4.537 10.793-10.986 0-.743-.08-1.313-.177-1.879H12.24z" />
                </svg>
                Review Us
              </a>
            </div>
          </div>

        </div>

        {/* 🔥 Infinite Marquee Slider - 🎯 FIXED: Set to absolute full bleed width */}
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] +mr-[50vw] overflow-hidden flex items-center">

  {/* 🎯 FIXED: Keyframe direction reversed from -50% to 0% so it rolls Left to Right smoothly */}
  <div
    className="flex gap-4 md:gap-6 w-max hover:[animation-play-state:paused] py-4 items-center pl-6"
    style={{ 
      animation: "marquee-reverse 65s linear infinite",
    }}
  >
    {/* 🌌 Injecting dynamic reverse marquee animation style directly */}
    <style>{`
      @keyframes marquee-reverse {
        0% { transform: translateX(-50%); }
        100% { transform: translateX(0%); }
      }
    `}</style>

    {doubledReviews.map((review, index) => (
      <div
        key={`${review.id}-${index}`}
        className="w-[90vw] sm:w-[50vw] md:w-[42vw] lg:w-[38vw] xl:w-[30vw] 2xl:w-[26vw] 3xl:w-[22vw] shrink-0 rounded-2xl border-white/[0.05] bg-[#09090b]/60 backdrop-blur-md p-0 overflow-hidden transition-all duration-500 group"
      >
        <div className="relative w-full overflow-hidden rounded-xl bg-zinc-950/20">
          <img
            src={review.src}
            alt={review.alt}
            className="w-full h-auto object-contain transition-all duration-500"
          />
        </div>
      </div>
    ))}
  </div>
</div>
      </div>
    </div>
  );
}