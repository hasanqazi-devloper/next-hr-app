"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight } from "lucide-react";

export default function AboutPreview() {
  return (
    <section className="relative py-12 md:py-20 bg-[#030303] overflow-hidden border-b border-white/5">

      {/* Background Glow - Subtly adjusted */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] md:w-[600px] h-[200px] bg-blue-600/[0.04] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[110rem] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* LEFT: Image - Scaled for better alignment */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex items-center justify-center lg:justify-start order-2 lg:order-1"
          >
            <div className="absolute w-[50%] h-[50%] bg-blue-600/[0.05] blur-[80px] rounded-full" />
            <div className="relative z-10 w-full max-w-[320px] md:max-w-[420px] 2xl:max-w-[600px]">
              <Image
                src="/laptop.png"
                alt="High Rise Digital - Leading Global Agency"
                width={600}
                height={600}
                className="w-full h-auto object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </motion.div>

          {/* RIGHT: Text Content */}
          <div className="space-y-5 md:space-y-6 order-1 lg:order-2">
           
      <h2 className="text-[1.0rem] sm:text-[2rem] lg:text-[3vw] 2xl:text-[4.0rem]  text-white tracking-tighter leading-[1] mb-6 w-full max-w-5xl">
  {/* block ke sath ab nowrap ki zaroorat nahi kyunke size chota hai, ye khud hi 2 lines mein rahega */}
  <span className="">
    Leading Digital Marketing Company
  </span>
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 block">
          Working   Globally
  </span>
</h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {/* White text with high readability */}
              <p className="text-white/90 text-sm md:text-base 2xl:text-xl leading-relaxed max-w-xl 2xl:max-w-4xl font-normal">
                As a leading digital marketing company working globally, we help businesses grow with smart, creative, and results-focused digital solutions.
              </p>
              <p className="text-white/90 text-sm md:text-base 2xl:text-xl leading-relaxed max-w-xl 2xl:max-w-4xl font-normal">
                Our experienced team works closely with clients to understand their goals and create strategies that improve online visibility, generate quality leads, and increase business growth.
              </p>
              <p className="text-white/90 text-sm md:text-base 2xl:text-xl leading-relaxed max-w-xl 2xl:max-w-4xl font-normal hidden md:block">
                We provide professional services including SEO, social media marketing, PPC advertising, branding, and website development for businesses of all sizes.
              </p>
              <p className="text-white/90 text-sm md:text-base 2xl:text-xl leading-relaxed max-w-xl 2xl:max-w-4xl font-normal">
                Serving clients across the USA, UK, Australia, UAE, and many other countries, we focus on delivering reliable support and measurable results.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 pt-4"
            >
              <Link href="/contact">
                <button className="px-7 py-3 rounded-full bg-white text-black font-bold text-[11px] 2xl:text-base uppercase tracking-wider hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center gap-2">
                  Get Quote <ChevronRight size={14} />
                </button>
              </Link>

              <Link href="/services" className="group flex items-center gap-2 text-zinc-400 hover:text-white font-bold text-[11px] 2xl:text-base uppercase tracking-wider transition-colors duration-300">
                View Services <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}