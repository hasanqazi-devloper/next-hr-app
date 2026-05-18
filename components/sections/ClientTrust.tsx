"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const clientLogos = [
  { name: "Client 2", src: "/clients/logo2.webp" },
  { name: "Client 3", src: "/clients/logo3.png" },
  { name: "Client 4", src: "/clients/logo4.png" },
  { name: "Client 12", src: "/clients/12.png" },
  { name: "Client 15", src: "/clients/15.png" },
  { name: "Client 16", src: "/clients/16.webp" },
  { name: "Client 19", src: "/clients/19.webp" },
  { name: "Client 20", src: "/clients/20.png" },
  { name: "Client 22", src: "/clients/22.webp" },
  { name: "Client 23", src: "/clients/23.webp" },
  { name: "Client 24", src: "/clients/24.webp" },
  { name: "Client 26", src: "/clients/26.webp" },
  { name: "Client 27", src: "/clients/27.png" },
  { name: "Client 28", src: "/clients/28.png" },
];

export default function ClientTrust() {
  const duplicated = [...clientLogos, ...clientLogos];

  return (
    <section className="relative py-4 md:py-6 2xl:py-8 bg-[#020617] overflow-hidden border-y border-white/5">
      <div className="relative z-10 max-w-full mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-12">

          {/* LEFT SIDE: Heading */}
          <div className="shrink-0 text-center lg:text-left">
  <motion.h3
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    /* 🎯 MATCHED DESIGN SYSTEM: Exact consistent fluid sizing scale, tight tracking, and layout line-height */
    className="!text-[2rem] sm:!text-4xl md:!text-4xl lg:!text-[2.5rem] xl:!text-[2.8rem] 2xl:!text-7xl 3xl:!text-8xl font-black tracking-tighter leading-[1.1] lg:leading-[1] text-white normal-case"
  >
    Our{" "}
    {/* 🎯 MATCHED GRADIENT BLOCK: Set to 'block' with top margin spacing and right padding safety bounds */}
    <span className=" mt-2 py-1 pr-4 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
      Clients
    </span>
  </motion.h3>
</div>
          {/* RIGHT SIDE: Heavy Marquee Track */}
          <div className="w-full lg:flex-1 relative h-20 md:h-24 2xl:h-32 flex items-center overflow-hidden">
            <motion.div
              className="flex gap-6 md:gap-8 2xl:gap-16 w-max items-center" // 🛠️ Gap reduced for tighter slider
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 40, // Speed slightly adjusted for smoothness
                repeat: Infinity,
                ease: "linear",
              }}
              whileHover={{ transition: { duration: 80 } }}
            >
              {duplicated.map((client, index) => (
                <div
                  key={index}
                  // 🛠️ Reduced min-width to prevent over-stretching
                  className="relative flex items-center justify-center min-w-[120px] md:min-w-[150px] 2xl:min-w-[180px] group/logo select-none"
                >
                  <Image
                    src={client.src}
                    alt={client.name}
                    width={180} // Width thodi kam ki for crispness
                    height={60}
                    // 🛠️ Height adjusted: h-10 (Mobile) | h-12 (Tablet) | h-16 (4K)
                    // object-contain ensures the logo doesn't stretch or pixelate
                    className="h-10 md:h-12 2xl:h-16 w-auto object-contain transition-all duration-500 opacity-80 group-hover/logo:opacity-100 filter brightness-110"
                  />
                  
                  {/* Subtle hover indicator */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-8 h-1 bg-blue-500/0 group-hover/logo:bg-blue-500/40 blur-sm transition-all duration-500" />
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}