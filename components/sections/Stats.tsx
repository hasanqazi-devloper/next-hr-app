"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useInView,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Users, Rocket, Globe, Zap } from "lucide-react";

type StatProps = {
  value: number;
  label: string;
  icon: React.ReactNode;
  suffix?: string;
};

const StatItem = ({ value, label, icon, suffix = "+" }: StatProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });
  const [isMounted, setIsMounted] = useState(false);

  const count = useMotionValue(0);
  const spring = useSpring(count, { stiffness: 45, damping: 18 });
  const display = useTransform(spring, (latest) => Math.round(latest));

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isInView && isMounted) {
      count.set(value);
    }
  }, [isInView, value, count, isMounted]);

  return (
    <motion.div
      ref={ref}
      whileHover="hover"
      className="group relative flex flex-col items-center justify-center py-10 md:py-12 2xl:py-20 px-4 transition-all duration-500 overflow-hidden cursor-default"
    >
      {/* 🎨 HOVER COLOR FILL: Niche se upar fill hone wala gradient */}
      <motion.div 
        variants={{
          hover: { y: 0, opacity: 1 }
        }}
        initial={{ y: "100%", opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
        className="absolute inset-0 bg-gradient-to-t from-blue-600/20 via-blue-500/5 to-transparent z-0"
      />

      <div className="relative z-10 mb-4 text-zinc-500 group-hover:text-blue-400 transition-all duration-500">
        <div className="scale-125 md:scale-110 2xl:scale-150 group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-transform">
          {icon}
        </div>
      </div>

      <h3 className="relative z-10 text-5xl md:text-5xl 2xl:text-7xl font-black tracking-tighter text-white flex items-center leading-none">
        <motion.span>{isMounted ? display : 0}</motion.span>
        <span className="text-blue-500 font-black text-2xl md:text-3xl 2xl:text-5xl ml-1">
          {suffix}
        </span>
      </h3>

      <p className="relative z-10 mt-3 text-[11px] md:text-[12px] 2xl:text-lg font-black tracking-[3px] text-zinc-500 group-hover:text-white uppercase transition-colors duration-500">
        {label}
      </p>

      {/* 🖌️ Bottom Glow Line */}
      <motion.div 
        variants={{ hover: { scaleX: 1 } }}
        initial={{ scaleX: 0 }}
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-500 shadow-[0_0_15px_#3b82f6] origin-center z-20"
      />
    </motion.div>
  );
};

export default function Stats() {
  return (
    // 🛠️ PADDING TIGHT: py-6 (mobile) aur py-10 (desktop) kar diya hai
    <section className="relative py-6 md:py-10 2xl:py-16 bg-[#030207] bg-gradient-to-r from-[#030303] via-[#050a18] to-[#030303]       border-t border-b border-white/5 overflow-hidden">
      
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:25px_25px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl 2xl:max-w-[100rem] mx-auto px-6">

        <div className="text-center mb-6 md:mb-8 2xl:mb-12">
          <p className="text-2xl md:text-3xl 2xl:text-5xl font-black text-white tracking-tighter leading-none">
            Some Facts About Us
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative bg-white/[0.01] border border-white/10 rounded-[2rem] md:rounded-[2.5rem] backdrop-blur-md overflow-hidden"
        >
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10 bg-black/20">
            <StatItem value={100} label="Active Clients" icon={<Users size={24} />} />
            <StatItem value={700} label="Projects Completed" icon={<Rocket size={24} />} />
            <StatItem value={12} label="Professional Team" icon={<Zap size={24} />} />
            <StatItem value={7} label="Years Experience" icon={<Globe size={24} />} />
          </div>
        </motion.div>

      </div>
    </section>
  );
}