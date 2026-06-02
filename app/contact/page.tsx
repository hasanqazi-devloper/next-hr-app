"use client";

import { useState } from "react";
import Image from "next/image"; 
import { motion, AnimatePresence } from "framer-motion"; 
import {
  Mail,
  Phone,
  Send,
  ChevronDown,
  MapPin,
  Flame,
  Loader2,
  CheckCircle2
} from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<{
    loading: boolean;
    success: boolean | null;
    message: string;
  }>({
    loading: false,
    success: null,
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          loading: false,
          success: true,
          message: "Your proposal request has been transmitted successfully! 🚀",
        });
        // Clear the form fields upon success
        setForm({
          name: "",
          email: "",
          phone: "",
          service: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error(data.error || "Failed to dispatch payload.");
      }
    } catch (error: any) {
      setStatus({
        loading: false,
        success: false,
        message: error.message || "Something went wrong. Please check your network connection.",
      });
    }
  };

  return (
    <main className="min-h-screen bg-[#111827] text-white overflow-x-hidden selection:bg-blue-600 -mt-24 md:-mt-28 lg:-mt-32">

      {/* 🖼️ HERO SECTION */}
      <section className="relative w-full overflow-hidden bg-[#020617]">
        <div className="container-wide">
          
          <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <Image
              src="/home-hero.jpg"
              alt="Mesh Grid"
              fill
              priority 
              sizes="100vw"
              className="object-cover object-top opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/40 to-[#020617]" />
          </div>

          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/[0.05] blur-[120px] pointer-events-none" />

          <div className="relative z-10 w-full mx-auto text-center lg:text-left px-6 pt-32 pb-16 md:pt-20 md:pb-24 lg:max-w-full lg:pt-60 lg:pb-28 lg:pl-40 2xl:mx-0 2xl:max-w-[1500px] 2xl:pt-48 2xl:pb-36 2xl:pl-80 3xl:mx-0 3xl:max-w-[1800px] 3xl:pt-60 3xl:pb-44 3xl:pl-72">
            <div className="max-w-5xl">
              
              <div className="flex items-center gap-2.5 mb-8 w-fit px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md mx-auto md:mx-0">
                <Flame size={12} className="text-blue-400 animate-pulse" />
                <span className="text-[10px] font-black tracking-[4px] text-blue-300 uppercase">Lets Connect</span>
              </div>

              <h1 className="text-[3rem] md:text-[3.2rem] lg:text-[3.8rem] 2xl:text-[5rem] uppercase font-black tracking-tighter leading-[0.8] text-white mb-8 normal-case">
                CONTACT {" "}
                <span className="uppercase bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text">
                  US.
                </span>
              </h1>

              <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed max-w-xl 2xl:max-w-3xl mx-auto lg:mx-0 opacity-90">
                Connect with our digital experts today for innovative solutions, creative strategies, and personalized support to grow your business successfully online.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: FORM & INFO STACK */}
      <section className="relative z-10 max-w-[1400px] 2xl:max-w-[1700px] mx-auto px-6 py-12 pb-24">
        <div className="flex flex-col lg:flex-row gap-8 2xl:gap-12 items-stretch">

          {/* --- LEFT: CLIENT INTAKE FORM --- */}
          <div className="flex-[1.8] bg-gradient-to-br from-blue-600/10 to-transparent border border-white/5 rounded-[2.5rem] p-8 md:p-12 2xl:p-16 shadow-xl backdrop-blur-sm relative">
            <form onSubmit={handleSubmit} className="space-y-6 2xl:space-y-8">

              <div className="grid md:grid-cols-2 gap-6 2xl:gap-8">
                <div className="space-y-2">
                  <label className="text-[11px] 2xl:text-xs font-bold tracking-widest text-zinc-500 ml-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text" required placeholder="Enter your full name"
                    value={form.name}
                    disabled={status.loading}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl p-4 2xl:p-6 outline-none focus:border-blue-500 focus:bg-white/[0.06] transition-all disabled:opacity-50"
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] 2xl:text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email" required placeholder="email@company.com"
                    value={form.email}
                    disabled={status.loading}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl p-4 2xl:p-6 outline-none focus:border-blue-500 focus:bg-white/[0.06] transition-all disabled:opacity-50"
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 2xl:gap-8">
                <div className="space-y-2">
                  <label className="text-[11px] 2xl:text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel" required placeholder="+92 300 0000000"
                    value={form.phone}
                    disabled={status.loading}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl p-4 2xl:p-6 outline-none focus:border-blue-500 focus:bg-white/[0.06] transition-all disabled:opacity-50"
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>
                <div className="group space-y-2 relative">
                  <label className="text-[11px] 2xl:text-xs font-bold uppercase tracking-[2px] text-zinc-500 ml-1">
                    Service Required <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      required
                      disabled={status.loading}
                      className="w-full bg-zinc-900/50 border border-white/10 rounded-[1.5rem] p-4 2xl:p-6 pr-12 outline-none appearance-none text-zinc-300 cursor-pointer hover:bg-white/[0.05] transition-all disabled:opacity-50"
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      value={form.service}
                    >
                      <option value="" disabled className="bg-[#0a0a0a]">Select a service</option>
                      <option value="Website Development" className="bg-[#0a0a0a]">Website Development</option>
                      <option value="SEO" className="bg-[#0a0a0a]">SEO</option>
                      <option value="Social Media Marketing" className="bg-[#0a0a0a]">Social Media Marketing</option>
                      <option value="AI Automation" className="bg-[#0a0a0a]">AI Automation</option>
                      <option value="Ecommerce Management" className="bg-[#0a0a0a]">Ecommerce Management</option>
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500 transition-all">
                      <ChevronDown size={18} strokeWidth={2.5} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] 2xl:text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text" required placeholder="How can we help you?"
                  value={form.subject}
                  disabled={status.loading}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl p-4 2xl:p-6 outline-none focus:border-blue-500 transition-all disabled:opacity-50"
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-[11px] 2xl:text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  required placeholder="Tell us more about your project goals..."
                  value={form.message}
                  disabled={status.loading}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl p-4 2xl:p-6 outline-none focus:border-blue-500 min-h-[120px] 2xl:min-h-[200px] resize-none transition-all disabled:opacity-50"
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>

              {/* Status Notifications Panel */}
              <AnimatePresence mode="wait">
                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`p-4 rounded-xl font-medium text-sm flex items-center gap-3 border ${
                      status.success 
                        ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400" 
                        : "bg-rose-500/10 border-rose-500/20 text-rose-400"
                    }`}
                  >
                    {status.success && <CheckCircle2 size={16} />}
                    <span>{status.message}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <button 
                type="submit"
                disabled={status.loading}
                className="group relative overflow-hidden flex items-center justify-center gap-3 px-8 py-4 md:px-10 md:py-5 bg-white text-black font-black text-[10px] tracking-[3px] uppercase rounded-full active:scale-95 transition-all duration-500 w-full sm:w-auto shadow-lg shadow-black/10 disabled:opacity-50 disabled:scale-100"
              >
                <div className="absolute inset-0 w-0 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 ease-out group-hover:w-full" />
                <span className="relative z-10 group-hover:text-white transition-colors duration-500 flex items-center gap-3">
                  {status.loading ? (
                    <>
                      Processing Request
                      <Loader2 size={14} className="animate-spin text-zinc-700 group-hover:text-white" />
                    </>
                  ) : (
                    <>
                      Send Proposal Request
                      <Send 
                        size={14} 
                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500 text-zinc-700 group-hover:text-white" 
                      />
                    </>
                  )}
                </span>
              </button>
            </form>
          </div>

          {/* --- RIGHT: MODULAR INFO STACK --- */}
          <div className="flex-1 space-y-4 2xl:space-y-6 flex flex-col">
            <div className="p-8 2xl:p-12 bg-gradient-to-br from-blue-600/10 to-transparent border border-blue-500/20 rounded-[2.5rem] flex-1 shadow-xl backdrop-blur-sm">
              <div className="space-y-8">
                <div className="flex gap-4 2xl:gap-6 items-center">
                  <div className="w-12 h-12 2xl:w-16 2xl:h-16 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-[16px] 2xl:text-xs uppercase text-zinc-500 font-bold tracking-wider">Email</p>
                    <p className="text-base 2xl:text-xl font-bold text-white">info@highrisedigital.io</p>
                  </div>
                </div>
                <div className="flex gap-4 2xl:gap-6 items-center">
                  <div className="w-12 h-12 2xl:w-16 2xl:h-16 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Phone size={20} />
                  </div>
                  <div className="space-y-0.5 2xl:space-y-1">
                    <p className="text-[16px] md:text-[11px] lg:text-xs 2xl:text-xs 3xl:text-sm uppercase text-zinc-500 font-bold tracking-wider antialiased leading-none">
                      WhatsApp
                    </p>
                    <p className="text-base md:text-lg lg:text-[19px] 2xl:text-xl 3xl:text-2xl font-black text-white tracking-tight leading-normal">
                      +92 300 2777587
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-white/5">
                <p className="text-[16px] md:text-[11px] lg:text-xs 2xl:text-xs 3xl:text-sm uppercase text-zinc-500 font-bold tracking-[2px] mb-4 2xl:mb-6 antialiased leading-none">
                  Connect With Us
                </p>                
                <div className="flex gap-4 2xl:gap-6">
                  {[
                    { icon: <FaLinkedinIn size={20} />, link: "https://www.linkedin.com/company/high-rise-digital-agency/", color: "hover:text-blue-400" },
                    { icon: <FaInstagram size={20} />, link: "https://www.instagram.com/highrisedigitalagency/", color: "hover:text-pink-400" },
                    { icon: <FaFacebook size={20} />, link: "https://www.facebook.com/highrisedigital.official/", color: "hover:text-blue-500" }
                  ].map((soc, i) => (
                    <a key={i} href={soc.link} target="_blank" rel="noopener noreferrer" className={`p-4 2xl:p-6 rounded-xl bg-white/5 border border-white/10 text-zinc-400 ${soc.color} transition-all`}>
                      {soc.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-8 2xl:p-12 bg-gradient-to-br from-blue-600/10 to-transparent border border-blue-500/20 rounded-[2.5rem] flex-1 shadow-xl backdrop-blur-sm">
              <h3 className="text-sm 2xl:text-base font-bold tracking-[3px] text-blue-400 mb-8">Locations</h3>
              <div className="space-y-8">
                {[
                  { city: "Multan, Pakistan", address: "Suite # 19, Block-M, Wapda Town Phase 2, Multan." },
                  { city: "United States", address: "3564 Avalon Park East Blvd, Orlando, FL 32828" },
                  { city: "United Kingdom", address: "Suite 105, Fence House, Macclesfield, Cheshire SK10 1LT" }
                ].map((loc, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="mt-1 p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-blue-500/50 transition-colors">
                      <MapPin size={16} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-[16px] 2xl:text-xl font-bold text-white">{loc.city}</p>
                      <p className="text-white-500 text-[11px] 2xl:text-sm leading-relaxed">{loc.address}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}