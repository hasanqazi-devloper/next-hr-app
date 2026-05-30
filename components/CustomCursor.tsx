"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Core coordinates for tracking
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  const ringX = useMotionValue(-100);
  const ringY = useMotionValue(-100);

  // 🕹️ RE-ENGINEERED PHYSICS: Higher stiffness & lower mass for lag-free performance
  const dotSpringConfig = { damping: 20, stiffness: 900, mass: 0.05 };
  const ringSpringConfig = { damping: 25, stiffness: 450, mass: 0.15 }; // Mass lower kiya taake heavy feel na ho

  const dotXSpring = useSpring(dotX, dotSpringConfig);
  const dotYSpring = useSpring(dotY, dotSpringConfig);

  const ringXSpring = useSpring(ringX, ringSpringConfig);
  const ringYSpring = useSpring(ringY, ringSpringConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      // Small dot stays accurate under the tip (8px size = offset 4)
      dotX.set(e.clientX - 4);
      dotY.set(e.clientY - 4);

      // Outer ring smoothly lags behind (40px size = offset 20)
      ringX.set(e.clientX - 20);
      ringY.set(e.clientY - 20);

      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.getAttribute("role") === "button"
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isVisible, dotX, dotY, ringX, ringY]);

  if (!isVisible) return null;

  return (
    <>
      {/* 🔮 1. THE MICRO ACCURATE MAIN DOT */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full pointer-events-none z-[99999] hidden lg:block shadow-[0_0_10px_rgba(37,99,235,0.8)]"
        style={{ x: dotXSpring, y: dotYSpring }}
        animate={{ scale: isHovered ? 0.5 : 0.7 }}
        transition={{ type: "spring", stiffness: 500, damping: 20 }}
      />

      {/* 🌊 2. THE LAGGING FLUID AURA RING */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-blue-500/30 bg-blue-500/[0.01] pointer-events-none z-[99998] hidden lg:flex items-center justify-center backdrop-blur-[1px]"
        style={{ x: ringXSpring, y: ringYSpring }}
        animate={{
          scale: isHovered ? 1.4 : 1,
          borderColor: isHovered ? "rgba(6, 182, 212, 0.6)" : "rgba(59, 130, 246, 0.25)",
          backgroundColor: isHovered ? "rgba(37, 99, 235, 0.05)" : "rgba(37, 99, 235, 0.01)",
          boxShadow: isHovered ? "0 0 25px rgba(6, 182, 212, 0.2), inset 0 0 10px rgba(37, 99, 235, 0.1)" : "0 0 0px rgba(0,0,0,0)"
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        {/* ⚡ Micro Typography branding */}
        {/* <motion.span
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.6
          }}
          transition={{ duration: 0.15 }}
          className="text-[7px] font-black tracking-widest text-cyan-400 uppercase select-none"
        >
          {"HRD"}
        </motion.span> */}
      </motion.div>

      {/* Modern Pointer Override Driver Injector */}
      <style jsx global>{`
        @media (min-width: 1024px) {
          body, a, button, [role="button"], input, select, textarea {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  );
}