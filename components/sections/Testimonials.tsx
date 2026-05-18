"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    // 🛠️ Reduced padding (py-8 md:py-12 2xl:py-16) to eliminate wasted vertical footprint
    <section className="relative py-8 md:py-12 2xl:py-16 bg-[#050505] overflow-hidden border-t border-white/5">
      
      {/* 🌌 Background Atmosphere - Subtle Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] 2xl:w-[1000px] h-[200px] bg-blue-600/[0.05] blur-[80px] 2xl:blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl 2xl:max-w-[100rem] mx-auto px-4 md:px-6">
        
        {/* 📋 Header: Super Tight Margin Bottom */}
       <div className="mb-12 md:mb-16 pt-0 text-center">
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    {/* 🎯 MATCHED DESIGN SYSTEM: 100% synchronized layout scale, tight letter-tracking and consistent responsive flow */}
    <h3 className="!text-[2rem] sm:!text-4xl md:!text-4xl lg:!text-[2.5rem] xl:!text-[2.8rem] 2xl:!text-7xl 3xl:!text-8xl font-black tracking-tighter leading-[1.1] lg:leading-[1] text-white normal-case">
      Verified{" "}
      {/* 🎯 MATCHED GRADIENT BLOCK: Set to 'block' with top margin, exact drop shadow framework, and padding safety bounds */}
      <span className=" mt-2 py-1 pr-4 bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text drop-shadow-[0_0_8px_rgba(0,242,255,0.15)]">
        Reviews
      </span>
    </h3>
  </motion.div>
</div>

        {/* 🚀 WIDGET CONTAINER: Responsive Fit & Micro Border */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.99 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative w-full overflow-hidden rounded-2xl md:rounded-[2rem] 2xl:rounded-[3rem] bg-white/[0.01] border border-white/5 p-0.5 md:p-1 shadow-2xl backdrop-blur-sm"
        >
          <iframe 
            srcDoc={`
              <html>
                <head>
                  <style>
                    body { 
                      margin: 0; 
                      padding: 0;
                      background: transparent; 
                      overflow: hidden; 
                    }
                    .elfsight-app-1b210a2a-9bbd-48a8-8c8c-5fad7ea4f52b {
                      animation: fadeIn 0.5s ease-in;
                    }
                    @keyframes fadeIn {
                      from { opacity: 0; }
                      to { opacity: 1; }
                    }
                    /* Dynamic widget internal adjustment */
                    iframe { max-width: 100% !important; }
                    ::-webkit-scrollbar { display: none; }
                  </style>
                </head>
                <body>
                  <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
                  <div class="elfsight-app-1b210a2a-9bbd-48a8-8c8c-5fad7ea4f52b"></div>
                </body>
              </html>
            `}
            // 📐 EXACT RESPONSIVE HEIGHTS: Mobile (h-[500px]), Desktop (h-[420px]), 2K/4K (h-[580px])
            className="w-full h-[500px] sm:h-[450px] md:h-[420px] 2xl:h-[580px] border-none scale-[1.005] block"
            title="Google Reviews"
            scrolling="no"
          />
          
          {/* Subtle Border Overlay */}
          <div className="absolute inset-0 pointer-events-none border-[1px] border-white/5 rounded-2xl md:rounded-[2rem] 2xl:rounded-[3rem]" />
        </motion.div>
      </div>

      {/* 🛠️ Safe Global Style Injector for Clean Animation */}
      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 4s ease infinite;
        }
        /* Extra Insurance to hide widget brand links */
        a[href*="elfsight.com"] {
          display: none !important;
          opacity: 0 !important;
          height: 0 !important;
          width: 0 !important;
          position: absolute !important;
        }
      `}</style>
    </section>
  );
}