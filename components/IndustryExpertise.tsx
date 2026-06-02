"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Home, Hammer, ShoppingBag, Building2, Truck, Car,
  Stethoscope, Cpu, Plane, Utensils, Briefcase, Store
} from "lucide-react";

const INDUSTRIES = [
  { title: "Home Services", icon: Home },
  { title: "Roofing Contractor", icon: Hammer },
  { title: "Fashion & Beauty", icon: ShoppingBag },
  { title: "Real Estate & Construction", icon: Building2 },
  { title: "Moving Companies", icon: Truck },
  { title: "Automotive", icon: Car },
  { title: "Healthcare & Wellness", icon: Stethoscope },
  { title: "Tech & Startups", icon: Cpu },
  { title: "Travel & Hospitality", icon: Plane },
  { title: "Food & Beverages", icon: Utensils },
  { title: "Legal & Consulting", icon: Briefcase },
  { title: "E-commerce & Retail", icon: Store },
];

export default function IndustryExpertise() {
  const duplicatedIndustries = [...INDUSTRIES, ...INDUSTRIES, ...INDUSTRIES, ...INDUSTRIES];
  const dragSliderRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  // 🧠 Dragging limits calculate karne ke liye loop container effect
  useEffect(() => {
    if (dragSliderRef.current) {
      setWidth(dragSliderRef.current.scrollWidth - dragSliderRef.current.offsetWidth);
    }
  }, []);

  return (
    // 🛠️ Main Section Component
    <section className="   bg-gradient-to-bl from-[#0971A6] via-[#054f7a] to-[#021526]
 text-white py-8 md:py-12 relative overflow-hidden border-t border-white/5">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="container-main relative z-10">
        <div className="text-center mb-8 md:mb-10">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[2.3rem] md:text-[2.5rem] lg:text-[2.5rem] 2xl:text-[3.2rem] font-black tracking-tighter leading-[1.1] lg:leading-[1] text-white normal-case pr-4 py-1"
          >
            Industries We Work With

            <span className="mt-2 py-1 pr-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            </span>
          </motion.h3>
        </div>
      </div>

      {/* 🎯 DRAG CONTAINER LAYER: Isme mouse lane par slider pause hoga, aur left-right shadows delete kar diye hain */}
      <div 
        ref={dragSliderRef} 
        className="relative flex overflow-hidden py-4 select-none cursor-grab active:cursor-grabbing w-full px-4"
      >
        <motion.div
          className="flex flex-nowrap gap-3 md:gap-5 py-2"
          animate={{ x: ["0%", "-50%"] }}
          // 🛑 PAUSE ON HOVER: Jab container par mouse aayega infinite sliding ruk jayegi
          whileHover={{ animationPlayState: "paused" }}
          // 🖱️ DRAG SETUP: Isse user mouse click kar ke khud slider piche ya aage khinch sakta hai
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        >
          {duplicatedIndustries.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex-shrink-0 w-[140px] h-[150px] md:w-[220px] md:h-[200px] 2xl:w-[320px] 2xl:h-[280px] 
                           rounded-2xl md:rounded-[2rem] border transition-all duration-500 group/card pointer-events-auto
                           -translate-y-1  bg-gradient-to-br from-blue-900/40 to-black border-blue-500/50

                           flex flex-col items-center justify-center gap-4 hover:border-blue"
              >
                {/* 🌀 Icon Wrapper */}
                <div className="relative overflow-hidden">
                  {/* 🔄 HOVER ICON SPIN: Default simple text-white hai, mouse lane par spin karega */}
                  <Icon className="w-8 h-12 md:w-16 2xl:w-20 lg:w-20 text-white transition-transform duration-700 ease-out group-hover/card:rotate-[360deg] group-hover/card:text-[#0971A6]" />
                </div>

                {/* 🖋️ Text Description Element */}
                <p className="text-[11px] md:text-xs lg:text-[13px] 2xl:text-base font-bold tracking-[0.15em] md:tracking-[0.2em] text-white px-4 text-center leading-tight m-0 p-0 uppercase group-hover/card:text-[#0971A6] transition-colors duration-300">
                  {item.title}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}