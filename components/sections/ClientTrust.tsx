"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const clientLogos = [
  { name: "Client 2", src: "/clients/logo2.webp" },
  { name: "Client 3", src: "/clients/logo3.png" },
  { name: "Client 4", src: "/clients/logo4.png" },
  { name: "Client 5", src: "/clients/logo5.webp" },
  { name: "Client 6", src: "/clients/logo6.webp" },
  { name: "Client 7", src: "/clients/logo7.webp" },
  { name: "Client 9", src: "/clients/logo9.webp" },
  { name: "Client 11", src: "/clients/logo11.webp" },
  { name: "Client 12", src: "/clients/12.png" },
  { name: "Client 13", src: "/clients/13.webp" },
  { name: "Client 14", src: "/clients/14.webp" },
  { name: "Client 15", src: "/clients/15.png" },
  { name: "Client 16", src: "/clients/16.webp" },
  { name: "Client 17", src: "/clients/17.png" },
  { name: "Client 18", src: "/clients/18.webp" },
  { name: "Client 19", src: "/clients/19.webp" },
  { name: "Client 20", src: "/clients/20.png" },
  { name: "Client 21", src: "/clients/21.webp" },
  { name: "Client 22", src: "/clients/22.webp" },
  { name: "Client 23", src: "/clients/23.webp" },
  { name: "Client 24", src: "/clients/24.webp" },
  { name: "Client 25", src: "/clients/25.webp" },
  { name: "Client 26", src: "/clients/26.webp" },
  { name: "Client 27", src: "/clients/27.png" },
  { name: "Client 28", src: "/clients/28.png" },
  { name: "Client 29", src: "/clients/29.webp" },
];

export default function ClientTrust() {
  // 30+ logos ke liye 2x duplication kafi hai seamless loop ke liye
  const duplicated = [...clientLogos, ...clientLogos];

  return (
    <section className="relative py-6 md:py-10 2xl:py-14 bg-[#020617] overflow-hidden border-y border-white/5">

      {/* 🌌 Background Glow */}
      {/* <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[120px] bg-blue-600/[0.08] blur-[100px] rounded-full" />
      </div> */}

      <div className="relative z-10 max-w-full mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">

          {/* LEFT SIDE: Heading */}
          <div className="shrink-0 text-center lg:text-left">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-4xl 2xl:text-6xl font-black text-white tracking-tighter leading-none"
            >
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Clients.
              </span>
            </motion.h2>
          </div>

          {/* RIGHT SIDE: Heavy Marquee Track */}
          <div className="w-full lg:flex-1 relative h-20 md:h-28 2xl:h-44 flex items-center overflow-hidden ">
            <motion.div
              className="flex gap-8 md:gap-10 2xl:gap-20 w-max items-center"
              animate={{ x: ["0%", "-50%"] }} // Smooth half-width translation for infinite loop
              transition={{
                duration: 50, // Logos zyada hain toh speed slow rakhi hai (Adjust if needed)
                repeat: Infinity,
                ease: "linear",
              }}
              whileHover={{ transition: { duration: 100 } }} // Hover par mazeed slow ho jayega
            >
              {duplicated.map((client, index) => (
                <div
                  key={index}
                  className="relative flex items-center justify-center min-w-[140px] md:min-w-[180px] 2xl:min-w-[280px] group/logo select-none px-2"
                >
                  <Image
                    src={client.src}
                    alt={client.name}
                    width={200}
                    height={80}
                    className="h-10 md:h-14 2xl:h-24 w-auto object-contain transition-all duration-500 "
                  />
                  
                  {/* Subtle hover indicator light */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-blue-500/0 group-hover/logo:bg-blue-500/40 blur-sm transition-all duration-500" />
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}