"use client";

import React from "react";
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
  const duplicatedIndustries = [...INDUSTRIES, ...INDUSTRIES, ...INDUSTRIES];

  return (
    // 🛠️ Padding reduced to py-8/12 to make it compact
    <section className="bg-[#030303] text-white py-8 md:py-12 relative overflow-hidden border-t border-white/5">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="container-main relative z-10">
        <div className="text-center mb-8 md:mb-10">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            /* 🎯 MATCHED DESIGN SYSTEM: Identical responsive sizes, line-height, and safety padding cloned from your core heading framework */
            className="text-[2.3rem]  md:text-[2.5rem] lg:text-[2.5rem] 2xl:text-[3.2rem]  font-black tracking-tighter leading-[1.1] lg:leading-[1] text-white normal-case pr-4 py-1"
          >
            Industries We
            {" "}
            {/* 🎯 MATCHED GRADIENT BLOCK: Made 'block' with exact top-margin spacing to perfectly sync with your page aesthetic */}
            <span className=" mt-2 py-1 pr-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Work With
            </span>
          </motion.h3>
        </div>
      </div>

      <div className="relative flex overflow-hidden py-2 select-none group">
        {/* Edge Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-[#030303] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-[#030303] to-transparent z-20 pointer-events-none" />

        <motion.div
          className="flex flex-nowrap gap-3 md:gap-5"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        >
          {duplicatedIndustries.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                // 🛠️ Card size reduced for better density, hover gradient added
                className="flex-shrink-0 w-[140px] h-[150px] md:w-[220px] md:h-[200px] 2xl:w-[320px] 2xl:h-[280px] 
                           rounded-2xl md:rounded-[2rem] bg-white/[0.02] border border-white/5 
                           flex flex-col items-center justify-center gap-4 
                           transition-all duration-500 cursor-pointer group/card 
                           hover:bg-gradient-to-br hover:from-blue-900/40 hover:to-black hover:border-blue-500/50 hover:-translate-y-1"
              >
                {/* 🌀 Icon: Made bigger and clear */}
                <div className="relative">
                  <Icon className="w-8 h-12 md:w-14 2xl:w-20 text-blue-500 transition-transform duration-700 ease-in-out group-hover/card:rotate-[360deg] group-hover/card:text-white" />
                </div>

                {/* 🖋️ Text: Smaller and sleek */}
                <p className="text-[11px] md:text-xs lg:text-[13px] 2xl:text-base 3xl:text-lg font-bold  tracking-[0.15em] md:tracking-[0.2em] text-white-500 transition-colors duration-500 group-hover/card:text-white px-4 text-center leading-tight m-0 p-0">
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