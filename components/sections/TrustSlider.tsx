"use client";

import React from "react";
import Image from "next/image";

// Sirf 6 main logos
const awardLogos = [
  { src: "/baj1.png", alt: "Clutch Recognition" },
  { src: "/baj2.png", alt: "National Excellence" },
  { src: "/baj3.png", alt: "Forbes Member" },
  { src: "/baj4.png", alt: "Top 10 Agency" },
  { src: "/baj5.png", alt: "The Manifest" },
  // { src: "/logo6.png", alt: "Top SEO Provider" },

];

export default function TrustLogos() {
  return (
    /* 🛠️ Padding Yaha Kam Ki Hai: py-10 (standard) aur 2xl:py-12 (4K ke liye) */
    <section className="border-y border-white/10 py-10 2xl:py-12 bg-[#030207]">
      <div className="container-main">

        {/* 🛠️ 6 LOGOS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-16 2xl:gap-15 items-center justify-items-center">
          {awardLogos.map((logo, index) => (
            <div
              key={index}
              className="group relative w-full flex items-center justify-center transition-all duration-500"
            >
              {/* 🖼️ Logo Sizing: Height ko bhi thora control kiya hai taake balance rahe */}
              <div className="h-14 md:h-20 2xl:h-32 w-full relative">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain transition-all duration-500 
                             brightness-125 grayscale opacity-50 
                             group-hover:grayscale-0 group-hover:opacity-100 
                             group-hover:brightness-100 group-hover:scale-110"
                  sizes="(max-width: 768px) 150px, (max-width: 1920px) 250px, 400px"
                />
              </div>

              {/* ✨ Premium Glow */}
              <div className="absolute inset-0 bg-blue-500/5 blur-[50px] 2xl:blur-[80px] opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}