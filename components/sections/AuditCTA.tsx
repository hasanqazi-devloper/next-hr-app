"use client";
import { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AuditCTA() {
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");

  // 🎯 API Status Feedback State
  const [status, setStatus] = useState<{
    loading: boolean;
    success: boolean | null;
    message: string;
  }>({
    loading: false,
    success: null,
    message: "",
  });

  // 🚀 FIXED: Ab Next.js universal API route par data post hoga securely
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Audit Requested User", // Default identifier for audit pipeline
          email: email,
          phone: "Not Provided (Audit Strip Hook)",
          service: "Free Website Audit",
          subject: `New Free Website Audit Request for: ${url} 🔍`,
          message: `User requested a full analysis for website link: ${url}`,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          loading: false,
          success: true,
          message: "Audit request locked in successfully! 🚀",
        });

        // Inputs reset
        setEmail("");
        setUrl("");

        // 🕒 3.5 seconds ke baad notice message dynamic clear hoga
        setTimeout(() => {
          setStatus({ loading: false, success: null, message: "" });
        }, 3500);

      } else {
        throw new Error(data.error || "Failed to submit audit data payload.");
      }
    } catch (error: any) {
      setStatus({
        loading: false,
        success: false,
        message: error.message || "Network error. Please try again.",
      });
    }
  };

  return (
    // 🛠️ Premium Padding: Restored healthy vertical height so the section feels premium and spacious
    <section className="relative w-full overflow-hidden border-y border-white/5 bg-gradient-to-r from-[#030303] via-[#050a18] to-[#030303] px-6 md:px-12 lg:px-20 2xl:px-32 py-12 md:py-16 2xl:py-20">
      
      {/* 🌌 Background Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/[0.06] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[250px] bg-indigo-600/[0.04] blur-[100px] rounded-full pointer-events-none" />

      {/* 📐 Master Framework Flex Layout */}
      <div className="relative z-10 max-w-7xl 2xl:max-w-[110rem] mx-auto flex flex-col xl:flex-row xl:flex-nowrap items-center justify-between gap-8 xl:gap-12 2xl:gap-16">
        
        {/* 📝 LEFT: UPGRADED HEADING (Bigger, punchier, but strictly locked in 1 line) */}
        <div className="text-center xl:text-left flex-initial whitespace-nowrap">
          <h3 className="!text-2xl sm:!text-3xl md:!text-3xl lg:!text-4xl 2xl:!text-5xl 3xl:!text-[3.5rem] font-black tracking-tight text-white normal-case leading-none">
            Get a Free {" "}
            <span className="inline-block py-0.5 pr-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Website Audit
            </span>
          </h3>
        </div>

        {/* 📥 RIGHT: FORM (Maintained sleekness to perfectly balance with the bigger heading) */}
        <div className="w-full xl:w-auto flex flex-col gap-3 flex-1 xl:justify-end">
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col sm:flex-row sm:flex-nowrap items-center gap-3 sm:gap-4 2xl:gap-6"
          >
            {/* EMAIL INPUT */}
            <div className="relative w-full sm:w-[200px] md:w-[240px] 2xl:w-[320px] shrink-0">
              <input
                type="email"
                required
                disabled={status.loading}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Business Email"
                className="w-full h-[46px] 2xl:h-[54px] rounded-full bg-white/[0.05] border border-white/20 pl-5 pr-5 text-xs sm:text-sm 2xl:text-base text-white placeholder:text-zinc-500 outline-none transition-all focus:border-blue-500/50 focus:bg-white/[0.08] backdrop-blur-md disabled:opacity-40"
              />
            </div>

            {/* URL INPUT */}
            <div className="relative w-full sm:w-[200px] md:w-[240px] 2xl:w-[320px] shrink-0">
              <input
                type="url"
                required
                disabled={status.loading}
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Website URL"
                className="w-full h-[46px] 2xl:h-[54px] rounded-full bg-white/[0.05] border border-white/20 pl-5 pr-5 text-xs sm:text-sm 2xl:text-base text-white placeholder:text-zinc-500 outline-none transition-all focus:border-blue-500/50 focus:bg-white/[0.08] backdrop-blur-md disabled:opacity-40"
              />
            </div>

            {/* ⚡ ANALYZE BUTTON */}
            <button
              type="submit"
              disabled={status.loading}
              className="group relative h-[46px] 2xl:h-[54px] px-8 2xl:px-12 rounded-full bg-white overflow-hidden transition-all duration-500 active:scale-95 shadow-xl whitespace-nowrap shrink-0 w-full sm:w-auto disabled:opacity-50"
            >
              {/* 🛠️ GRADIENT FILL LAYER */}
              <div className="absolute inset-0 w-0 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 ease-out group-hover:w-full" />
              
              <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3 text-black font-black text-[10px] sm:text-[11px] 2xl:text-[13px] tracking-[1.5px] sm:tracking-[2px] group-hover:text-white transition-colors duration-500">
                {status.loading ? (
                  <>
                    Analyzing...
                    <Loader2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-spin text-blue-600 group-hover:text-white" />
                  </>
                ) : (
                  <>
                    Check Now 
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 2xl:w-5 2xl:h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </>
                )}
              </span>
            </button>
          </form>

          {/* 🎯 Real-Time Status Notification Alert under Row */}
          <AnimatePresence mode="wait">
            {status.message && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className={`w-full p-2 rounded-xl text-center text-xs font-bold border sm:text-left sm:px-4 ${
                  status.success 
                    ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400" 
                    : "bg-rose-500/10 border-rose-500/20 text-rose-400"
                }`}
              >
                {status.message}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}