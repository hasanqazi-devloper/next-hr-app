"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Plus, Minus } from "lucide-react"; 
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false); // 🛠️ Mobile dropdown track karne ke liye state
  const [isProposalOpen, setIsProposalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 15);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setShowServices(false);
    setMobileServicesOpen(false); // Page change hote hi collapse ho jaye
  }, [pathname]);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { 
      name: "Services", 
      href: "/services", 
      isDropdown: true,
      subLinks: [
        { name: "Web Development", href: "/services/web-dev" },
        { name: "SEO Optimization", href: "/services/seo" },
        { name: "Social Media Marketing", href: "/services/social-media" },
        { name: "Content Writing", href: "/services/content-writing" },
        { name: "Branding & Identity", href: "/services/branding" },
        { name: "Google Ads (PPC)", href: "/services/google-ads" },
        { name: "AI Automation", href: "/services/ai-automation" },
      ]
    },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] w-full pointer-events-none">
      
      <div className={`w-full max-w-[1700px] mx-auto transition-all duration-500 px-4 md:px-8 pointer-events-auto
        ${isScrolled ? "pt-1" : "pt-1 md:pt-1"}`}>
        
        <motion.nav
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`relative flex items-center justify-between transition-all duration-500 ease-in-out mx-auto
          ${isScrolled
              ? "rounded-full px-6 md:px-8 py-2 bg-[#030303]/90 backdrop-blur-xl border border-white/10 shadow-2xl w-full max-w-[95%] lg:max-w-[1200px]"
              : "rounded-full px-6 md:px-10 py-3 md:py-4 bg-transparent border-transparent w-full"
            }`}
        >
          {/* 🖼️ LOGO */}
          <Link href="/" className="flex items-center z-50 shrink-0">
            <Image
              src="/Hr Logo White.svg"
              alt="Logo"
              width={220}
              height={60}
              className={`h-auto transition-all duration-500 object-contain origin-left ${
                isScrolled 
                  ? "w-[100px] lg:w-[120px]" 
                  : "w-[130px] lg:w-[170px]"
              }`}
              priority
            />
          </Link>

          {/* 🔗 DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((link) => {
              const isActive = pathname === link.href;
              if (link.isDropdown) {
                return (
                  <div key={link.name} className="relative" onMouseEnter={() => setShowServices(true)} onMouseLeave={() => setShowServices(false)}>
                    <button className={`flex items-center gap-1 px-3 py-1.5 text-[10px] xl:text-[11px] font-bold uppercase tracking-widest transition-all ${isActive || showServices ? "text-white" : "text-zinc-400 hover:text-white"}`}>
                      {link.name} <ChevronDown size={12} className={showServices ? "rotate-180 transition-transform" : "transition-transform"} />
                    </button>
                    <AnimatePresence>
                      {showServices && (
                        <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 5 }} className="absolute top-full left-0 w-56 p-2 bg-zinc-950 border border-white/10 rounded-2xl shadow-2xl mt-1">
                          {link.subLinks?.map((sub) => (
                            <Link key={sub.name} href={sub.href} className="block px-4 py-2.5 text-[10px] font-bold text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-all">
                              {sub.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
              return (
                <Link key={link.name} href={link.href} className={`relative px-3 py-1.5 text-[10px] xl:text-[11px] font-bold uppercase tracking-widest transition-all ${isActive ? "text-white" : "text-zinc-400 hover:text-white"}`}>
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* ⚡ ACTION BUTTON */}
          <div className="flex items-center gap-4 z-50 shrink-0">
            <button 
              onClick={() => setIsProposalOpen(true)}
              className={`hidden md:block bg-white text-black rounded-full font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all active:scale-95 ${
                isScrolled 
                ? "px-5 py-2 text-[9px] xl:text-[10px]" 
                : "px-7 py-3 text-[10px] xl:text-[11px]"
              }`}
            >
              Get Proposal
            </button>

            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* MOBILE MENU */}
          <AnimatePresence>
            {isOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: -10 }} 
                className="absolute top-full left-0 right-0 bg-[#070707]/95 backdrop-blur-xl border border-white/10 lg:hidden flex flex-col gap-0 p-4 mt-2 rounded-3xl pointer-events-auto shadow-2xl overflow-hidden"
              >
                {links.map((link) => {
                  if (link.isDropdown) {
                    return (
                      <div key={link.name} className="border-b border-white/5 flex flex-col">
                        {/* 🛠️ Main row for Services + Plus/Minus Toggle */}
                        <div className="flex items-center justify-between py-3.5 px-4 active:bg-white/5 transition-colors rounded-xl">
                          <Link 
                            href={link.href} 
                            className="text-[11px] font-bold uppercase tracking-widest text-zinc-300 flex-1"
                            onClick={() => setIsOpen(false)}
                          >
                            {link.name}
                          </Link>
                          {/* Plus/Minus Button Click Trigger */}
                          <button 
                            onClick={(e) => {
                              e.preventDefault();
                              setMobileServicesOpen(!mobileServicesOpen);
                            }} 
                            className="p-1 text-zinc-400 hover:text-white transition-colors"
                          >
                            {mobileServicesOpen ? <Minus size={14} /> : <Plus size={14} />}
                          </button>
                        </div>

                        {/* Collapsible Sub-links Container using Framer Motion */}
                        <motion.div
                          initial={false}
                          animate={{ height: mobileServicesOpen ? "auto" : 0, opacity: mobileServicesOpen ? 1 : 0 }}
                          className="overflow-hidden bg-white/[0.02] rounded-xl mx-2"
                        >
                          <div className="flex flex-col py-1 pl-4 border-l border-white/10 my-1 gap-1">
                            {link.subLinks?.map((sub) => (
                              <Link
                                key={sub.name}
                                href={sub.href}
                                className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 hover:text-white py-2.5 px-3 rounded-lg block transition-colors"
                                onClick={() => setIsOpen(false)}
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      </div>
                    );
                  }

                  return (
                    <Link 
                      key={link.name} 
                      href={link.href} 
                      className="text-[11px] font-bold uppercase tracking-widest text-zinc-300 py-3.5 px-4 border-b border-white/5 last:border-0" 
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </div>

      {/* PROPOSAL MODAL */}
      <AnimatePresence>
        {isProposalOpen && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 pointer-events-auto">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsProposalOpen(false)} className="absolute inset-0 bg-black/85 backdrop-blur-md" />
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative w-full max-w-lg bg-[#070707] border border-white/10 rounded-[2.5rem] p-8 shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-blue-600" />
              <button onClick={() => setIsProposalOpen(false)} className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors"><X size={24} /></button>
              <div className="text-center mb-6">
                <h2 className="text-2xl font-black text-white uppercase tracking-tighter">Get a Proposal</h2>
                <p className="text-zinc-500 text-xs">Let's build your project together.</p>
              </div>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white outline-none focus:border-blue-500" />
                  <input type="email" placeholder="Email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white outline-none focus:border-blue-500" />
                </div>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-zinc-400 outline-none">
                  <option>Select Service</option>
                  <option>Web Development</option>
                  <option>SEO Optimization</option>
                  <option>Social Media Marketing</option>
                  <option>AI Automation</option>
                </select>
                <textarea placeholder="Your Message" rows={3} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white outline-none focus:border-blue-500 resize-none"></textarea>
                <button className="w-full bg-blue-600 py-4 rounded-xl font-bold text-[11px] uppercase tracking-widest text-white shadow-lg shadow-blue-600/20 active:scale-[0.98] transition-transform">Submit</button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}