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

  // 🚀 universal API route data post handler
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
          name: "Audit Requested User",
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

        // 🕒 Notice message dynamic clear
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
    // 🎯 MAIN SECTION: Faltu vertical padding drops completely to make it tight & clean
    <section className="relative w-full bg-[#111827] px-6 sm:px-8 py-6 md:py-8">

      {/* 🎯 MAIN WRAPPER: Removed 'pb-12' padding so the bottom area remains compact */}
      <div className="relative z-10 max-w-7xl 2xl:max-w-[100rem] mx-auto">

        {/* ⚡ THE PREMIUM CARD CONTAINER */}
        <div className="relative z-10 rounded-[1.0rem] md:rounded-[2rem]  bg-gradient-to-bl from-[#0971A6] via-[#054f7a] to-[#021526] px-6 py-10 sm:px-10 sm:py-12 lg:px-12 2xl:px-24 2xl:py-16 -translate-y-1 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8),0_20px_50px_rgba(6,182,212,0.15)] transition-all duration-500">

          {/* Inner Framework Layout: Splits Left Content & Right Form perfectly */}
          <div className="relative z-10 flex flex-col xl:flex-row items-center justify-between gap-8 xl:gap-10 2xl:gap-16">

            {/* 📝 LEFT: HEADING */}
            <div className="text-center xl:text-left flex-initial xl:whitespace-nowrap">
              <h3 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl 2xl:text-5xl 3xl:text-[3.5rem] font-black tracking-tight text-white normal-case leading-none">
                Get a Free Website Audit{" "}
              </h3>
            </div>

            {/* 📥 RIGHT: FORM BLOCK */}
            <div className="w-full xl:max-w-[65%] 2xl:max-w-[70%] flex flex-col gap-4 flex-1">
              <form
                onSubmit={handleSubmit}
                className="w-full grid grid-cols-1 sm:grid-cols-[2fr_2fr_1.2fr] items-end gap-3 md:gap-4 2xl:gap-6"
              >
                {/* EMAIL INPUT */}
                {/* EMAIL INPUT */}
                <div className="relative w-full">
                  <label className="block text-[10px] uppercase tracking-widest text-blue-200/80 mb-1.5 font-bold pl-1">Business Email</label>
                  <input
                    type="email"
                    required
                    disabled={status.loading}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    style={{ color: "#000000" }}
                    className="w-full h-[48px] 2xl:h-[54px] rounded-[1.0rem] md:rounded-[1rem] bg-white border border-transparent pl-5 pr-5 text-xs sm:text-sm 2xl:text-base font-bold !text-black outline-none transition-all focus:ring-2 focus:ring-cyan-400/60 disabled:opacity-50 [color-scheme:light]"
                  />
                  {/* 🎯 EMAIL INPUT STYLE: Forces black text and placeholder strictly */}
                  <style>{`
    input[type="email"] { color: #000000 !important; }
    input[type="email"]::placeholder { color: #000000 !important; opacity: 1 !important; }
  `}</style>
                </div>

                {/* URL INPUT */}
                <div className="relative w-full">
                  <label className="block text-[10px] uppercase tracking-widest text-blue-200/80 mb-1.5 font-bold pl-1">Website URL</label>
                  <input
                    type="text"
                    required
                    disabled={status.loading}
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="example.com"
                    style={{ color: "#000000" }}
                    className="w-full h-[48px] 2xl:h-[54px] rounded-[1.0rem] md:rounded-[1rem] bg-white border border-transparent pl-5 pr-5 text-xs sm:text-sm 2xl:text-base font-bold !text-black outline-none transition-all focus:ring-2 focus:ring-cyan-400/60 disabled:opacity-50 [color-scheme:light]"
                  />
                  {/* 🎯 URL INPUT STYLE: Isolated style to strictly force black text on text input as well */}
                  <style>{`
    input[type="text"] { color: #000000 !important; }
    input[type="text"]::placeholder { color: #000000 !important; opacity: 1 !important; }
  `}</style>
                </div>
                {/* ⚡ ANALYZE BUTTON */}
                <div className="w-full">
                  <button
                    type="submit"
                    disabled={status.loading}
                    className="group relative h-[48px] 2xl:h-[54px] px-4 md:px-6 2xl:px-8 rounded-[1.0rem] md:rounded-[1rem] bg-white overflow-hidden transition-all duration-500 active:scale-95 shadow-xl whitespace-nowrap w-full disabled:opacity-50"
                  >
                    <div className="absolute inset-0 w-0 bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500 ease-out group-hover:w-full" />

                    <span className="relative z-10 flex items-center justify-center gap-1.5 md:gap-2 text-black font-black text-[10px] sm:text-[11px] 2xl:text-[13px] tracking-[1px] md:tracking-[1.5px] 2xl:tracking-[2px] group-hover:text-white transition-colors duration-500">
                      {status.loading ? (
                        <>
                          Analyzing...
                          <Loader2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-spin text-blue-600 group-hover:text-white shrink-0" />
                        </>
                      ) : (
                        <>
                          Check Now
                          <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 2xl:w-5 2xl:h-5 group-hover:translate-x-1.5 transition-transform duration-300 shrink-0" />
                        </>
                      )}
                    </span>
                  </button>
                </div>
              </form>

              {/* Real-Time Status Notification Alert */}
              <AnimatePresence mode="wait">
                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className={`w-full p-2.5 rounded-xl text-center text-xs font-bold border sm:text-left sm:px-4 ${status.success
                      ? "bg-emerald-500/20 border-emerald-500/30 text-emerald-300"
                      : "bg-rose-500/20 border-rose-500/30 text-rose-300"
                      }`}
                  >
                    {status.message}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>

        {/* 🌌 NEON 3D GLOW CAST */}
        <div className="absolute bottom-2 left-12 right-12 h-10 bg-cyan-500/20 blur-[35px] rounded-full pointer-events-none z-0" />
        <div className="absolute bottom-1 left-24 right-24 h-8 bg-blue-600/20 blur-[20px] rounded-full pointer-events-none z-0" />

      </div>
    </section>
  );
}