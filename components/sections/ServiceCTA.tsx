"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Loader2 } from "lucide-react";

export default function ConsultationCTA() {
  // 🎯 Form Input States
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

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

  // 🚀 FIXED: Next.js API Secure Handler
  const handleCtaSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // Combining First & Last Name as the pipeline expects "name"
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email,
          phone: formData.phone || "Not Provided",
          service: "Strategy Consultation (CTA Hook)",
          subject: "New Free Strategy Consultation Request 🚀",
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          loading: false,
          success: true,
          message: "Your strategy consultation request has been sent! 🚀",
        });

        // Form Fields Clear
        setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });

        // 🕒 3.5 seconds baad status banner hide karne ke liye
        setTimeout(() => {
          setStatus({ loading: false, success: null, message: "" });
        }, 3500);

      } else {
        throw new Error(data.error || "Failed to submit consultation payload.");
      }
    } catch (error: any) {
      setStatus({
        loading: false,
        success: false,
        message: error.message || "Network error. Please try again later.",
      });
    }
  };

  return (
    <section className="w-full bg-[#020617] py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* MAIN CARD */}
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl">

          {/* Glow Effects */}
          <div className="absolute -top-32 -left-20 w-[300px] h-[300px] bg-blue-500/10 blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cyan-400/10 blur-[120px]" />

          <div className="grid lg:grid-cols-2 items-center">

            {/* LEFT SIDE */}
            <div className="relative z-10 p-6 md:p-8">

              <h3 className="mt-2 text-4xl md:text-6xl font-black leading-[0.95] tracking-tight text-white max-w-xl">
                Let’s Build Your{" "}
                <span className="inline-block mb-2 pb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                  Next Big Project
                </span>
              </h3>

              <p className="mt-6 text-slate-400 text-sm md:text-base leading-relaxed max-w-lg">
                Get a free strategy consultation for your business, website,
                branding, or marketing growth system.
              </p>

              {/* 🚀 UPGRADED: Ab Bina Reload Ke Live API Hit Hogi */}
              <form onSubmit={handleCtaSubmit} className="mt-10 space-y-4">

                {/* ROW */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    disabled={status.loading}
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="h-14 rounded-2xl bg-[#0B1220] border border-white/10 px-5 text-white placeholder:text-slate-500 outline-none focus:border-blue-500/40 transition-all disabled:opacity-40"
                  />

                  <input
                    type="text"
                    required
                    disabled={status.loading}
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="h-14 rounded-2xl bg-[#0B1220] border border-white/10 px-5 text-white placeholder:text-slate-500 outline-none focus:border-blue-500/40 transition-all disabled:opacity-40"
                  />
                </div>

                {/* ROW */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    required
                    disabled={status.loading}
                    placeholder="Business Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-14 rounded-2xl bg-[#0B1220] border border-white/10 px-5 text-white placeholder:text-slate-500 outline-none focus:border-blue-500/40 transition-all disabled:opacity-40"
                  />

                  <input
                    type="text"
                    disabled={status.loading}
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-14 rounded-2xl bg-[#0B1220] border border-white/10 px-5 text-white placeholder:text-slate-500 outline-none focus:border-blue-500/40 transition-all disabled:opacity-40"
                  />
                </div>

                {/* TEXTAREA */}
                <textarea
                  required
                  disabled={status.loading}
                  placeholder="Tell us about your project..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-[24px] bg-[#0B1220] border border-white/10 px-5 py-4 text-white placeholder:text-slate-500 outline-none resize-none focus:border-blue-500/40 transition-all disabled:opacity-40"
                />

                {/* Live Banner Feedback Alert inside CTA */}
                <AnimatePresence mode="wait">
                  {status.message && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={`p-4 rounded-2xl text-center text-xs font-bold border ${status.success
                        ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                        : "bg-rose-500/10 border-rose-500/20 text-rose-400"
                        }`}
                    >
                      {status.message}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* SUBMIT BUTTON */}
                <div className="w-full block mt-3">
                  <motion.button
                    whileTap={{ scale: status.loading ? 1 : 0.97 }}
                    whileHover={{ y: status.loading ? 0 : -2 }}
                    type="submit"
                    disabled={status.loading}
                    className="group relative overflow-hidden h-14 w-full rounded-full bg-white border border-white/5 text-black font-black uppercase tracking-[0.25em] text-xs flex items-center justify-center gap-3 transition-all duration-500 shadow-[0_10px_40px_rgba(37,99,235,0.15)] cursor-pointer disabled:opacity-50"
                  >
                    <div className="absolute top-0 left-0 bottom-0 w-0 bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-500 ease-out group-hover:w-full pointer-events-none z-0" />

                    <span className="relative z-10 flex items-center justify-center gap-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:text-white transition-colors duration-500 font-bold tracking-[0.25em]">
                      {status.loading ? (
                        <>
                          Transmitting...
                          <Loader2 size={16} className="animate-spin text-blue-600 group-hover:text-white" />
                        </>
                      ) : (
                        <>
                          Send Request
                          <ArrowUpRight
                            size={18}
                            className="text-blue-600 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500"
                          />
                        </>
                      )}
                    </span>
                  </motion.button>
                </div>
              </form>
            </div>

            {/* RIGHT SIDE IMAGE */}
            {/* RIGHT IMAGE */}
            <div className="hidden lg:flex items-end justify-center relative min-h-[600px]">

              {/* Shape */}
              <div className="absolute bottom-10 right-0 w-[80%] h-[65%] bg-[#0971A6] rounded-tl-[180px]" />

              {/* Image */}
              <img
                src="/contact-png.png"
                alt="Team"
                className="relative bottom-10 z-10 max-h-[600px] w-auto"
              />

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}