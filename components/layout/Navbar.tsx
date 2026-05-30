"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Plus, Minus, Loader2 } from "lucide-react"; 
import Image from "next/image";
import { createClient } from 'contentful';

// 🎯 Contentful Client Setup
const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || 'aprr3d93u7vz',
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || 'LXVuIdmXm-IK71j-DfjMMgSZQnAoM_aqxz-KzAlaMdA',
  environment: 'master'
});

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [isProposalOpen, setIsProposalOpen] = useState(false);
  const [dynamicLinks, setDynamicLinks] = useState<any[]>([]); // 🎯 Dynamic links state
  const pathname = usePathname();

  // 🎯 Modal submission feedback status state
  const [modalStatus, setModalStatus] = useState<{
    loading: boolean;
    success: boolean | null;
    message: string;
  }>({
    loading: false,
    success: null,
    message: "",
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 15);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setShowServices(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  // 🎯 Contentful se pages dynamically fetch karne ke liye effect
  useEffect(() => {
    async function fetchNavbarPages() {
      try {
        const response = await client.getEntries({
          content_type: 'page',
        });
        
        const formattedLinks = response.items.map((item: any) => ({
          name: item.fields.title || "Untitled Page",
          href: `/${item.fields.slug || ""}`,
        }));
        
        setDynamicLinks(formattedLinks);
      } catch (error) {
        console.error("Error fetching navigation pages from Contentful:", error);
      }
    }
    fetchNavbarPages();
  }, []);

  const [modalForm, setModalForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  // 🚀 FIXED: Ab ye mailto open nahi karega balkay direct API hit karega!
  const handleModalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setModalStatus({ loading: true, success: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: modalForm.name,
          email: modalForm.email,
          phone: "Not Provided (Modal PopUp Hook)", 
          service: modalForm.service,
          subject: `Strategy Call Request: ${modalForm.service}`,
          message: modalForm.message,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setModalStatus({
          loading: false,
          success: true,
          message: "Strategy call requested successfully! 🚀",
        });
        
        // Clear fields
        setModalForm({ name: "", email: "", service: "", message: "" });

        // 🕒 2.5 seconds ke baad automatic modal close ho jayega
        setTimeout(() => {
          setIsProposalOpen(false);
          setModalStatus({ loading: false, success: null, message: "" });
        }, 2500);

      } else {
        throw new Error(data.error || "Something went wrong inside pipeline.");
      }
    } catch (error: any) {
      setModalStatus({
        loading: false,
        success: false,
        message: error.message || "Network error. Please try again later.",
      });
    }
  };

  // Static Links aur Services dropdown ko maintain rakha hai
  const baseLinksLeft = [
    { name: "Home", href: "/" },
  ];

  const baseLinksRight = [
    { name: "Case Studies", href: "/casestudies" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const servicesDropdown = { 
    name: "Services", 
    href: "/services", 
    isDropdown: true,
    subLinks: [
      { name: "Web Development", href: "/services/web-development" },
      { name: "SEO Optimization", href: "/services/seo" },
      { name: "Social Media Marketing", href: "/services/social-media-marketing" },
      { name: "Ecommerce Management ", href: "/services/ecommerce" },
      { name: "AI Automation", href: "/services/ai-automation" },
    ]
  };

  // 🎯 COMBINED LINKS array: Jo layout order ko tabah nahi karega
  const links = [
    ...baseLinksLeft,
    ...dynamicLinks, 
    servicesDropdown,
    ...baseLinksRight
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] w-full pointer-events-none">
      <div className={`w-full transition-all duration-500 pointer-events-auto ${isScrolled ? "max-w-[1280px] mx-auto pt-1 px-4 md:px-8 lg:px-16 lg:pt-2   " : "max-w-full pt-0 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 2xl:px-80 3xl:px-52"}`}>
        <motion.nav
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`relative flex items-center justify-between transition-all duration-500 ease-in-out mx-auto ${isScrolled ? "rounded-full px-6 md:px-8 py-2 bg-[#030303]/90 backdrop-blur-xl border  border-white/10 shadow-2xl w-full max-w-[95%] lg:max-w-[1200px]" : "rounded-none px-0 py-2 md:py-3 bg-transparent border-transparent w-full"}`}
        >
          <Link href="/" className="flex items-center z-50 shrink-0">
            <Image src="/Hr Logo White.svg" alt="Logo" width={300} height={80} className={`h-auto transition-all duration-500 object-contain origin-left ${isScrolled ? "w-[120px] lg:w-[140px]" : "w-[160px] lg:w-[210px]"}`} priority />
          </Link>

          {/* 🔗 DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((link) => {
              const isActive = pathname === link.href;
              if (link.isDropdown) {
                return (
                  <div key={link.name} className="relative group" onMouseEnter={() => setShowServices(true)} onMouseLeave={() => setShowServices(false)}>
                    <Link 
                      href={link.href} 
                      className={`flex items-center gap-1 px-3 py-1.5 text-[10px] xl:text-[11px] font-bold uppercase tracking-widest transition-all ${isActive || showServices ? "text-white" : "text-white-400 hover:text-white"}`}
                    >
                      {link.name} <ChevronDown size={12} className="group-hover:rotate-180 transition-transform duration-300" />
                    </Link>
                    <AnimatePresence>
                      {showServices && (
                        <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 5 }} className="absolute top-full left-0 w-56 p-2 bg-black border border-white/10 rounded-2xl shadow-2xl mt-1">
                          {link.subLinks?.map((sub: any) => (
                            <Link key={sub.name} href={sub.href} className="block px-4 py-2.5 text-[13px] font-bold text-white-400 hover:text-white hover:bg-white/5 rounded-lg transition-all">
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
                <Link key={link.name} href={link.href} className={`relative px-3 py-1.5 text-[10px] xl:text-[11px] font-bold uppercase tracking-widest transition-all ${isActive ? "text-white" : "text-white-400 hover:text-white"}`}>
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-4 z-50 shrink-0">
            <button onClick={() => setIsProposalOpen(true)} className={`group relative overflow-hidden hidden md:block bg-white text-black rounded-full font-black uppercase tracking-widest transition-all active:scale-95 ${isScrolled ? "px-5 py-2 text-[9px] xl:text-[10px]" : "px-7 py-3 text-[10px] xl:text-[11px]"}`}>
              <div className="absolute inset-0 w-0 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 ease-out group-hover:w-full" />
              <span className="relative z-10 group-hover:text-white transition-colors duration-500">Get Proposal</span>
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="absolute top-full left-0 right-0 bg-[#070707]/95 backdrop-blur-xl border border-white/10 lg:hidden flex flex-col gap-0 p-4 mt-2 rounded-3xl pointer-events-auto shadow-2xl overflow-hidden">
                {links.map((link) => {
                  if (link.isDropdown) {
                    return (
                      <div key={link.name} className="border-b border-white/5 flex flex-col">
                        <div className="flex items-center justify-between py-3.5 px-4 active:bg-white/5 transition-colors rounded-xl">
                          <Link href={link.href} className="text-[11px] font-bold uppercase tracking-widest text-zinc-300 flex-1" onClick={() => setIsOpen(false)}>{link.name}</Link>
                          <button onClick={(e) => { e.preventDefault(); setMobileServicesOpen(!mobileServicesOpen); }} className="p-1 text-zinc-400 hover:text-white transition-colors">
                            {mobileServicesOpen ? <Minus size={14} /> : <Plus size={14} />}
                          </button>
                        </div>
                        <motion.div initial={false} animate={{ height: mobileServicesOpen ? "auto" : 0, opacity: mobileServicesOpen ? 1 : 0 }} className="overflow-hidden bg-white/[0.02] rounded-xl mx-2">
                          <div className="flex flex-col py-1 pl-4 border-l border-white/10 my-1 gap-1">
                            {link.subLinks?.map((sub: any) => (
                              <Link key={sub.name} href={sub.href} className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 hover:text-white py-2.5 px-3 rounded-lg block transition-colors" onClick={() => setIsOpen(false)}>{sub.name}</Link>
                            ))}
                          </div>
                        </motion.div>
                      </div>
                    );
                  }
                  return (
                    <Link key={link.name} href={link.href} className="text-[11px] font-bold uppercase tracking-widest text-zinc-300 py-3.5 px-4 border-b border-white/5 last:border-0" onClick={() => setIsOpen(false)}>{link.name}</Link>
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
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => !modalStatus.loading && setIsProposalOpen(false)} className="absolute inset-0 bg-black/85 backdrop-blur-md" />
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative w-full max-w-lg bg-[#070707] border border-white/10 rounded-[2.5rem] p-8 shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-blue-600" />
              <button onClick={() => setIsProposalOpen(false)} disabled={modalStatus.loading} className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors disabled:opacity-30"><X size={24} /></button>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Book A Strategy Call</h3>
                <p className="text-zinc-500 text-xs">Let's build your project together.</p>
              </div>
              
              <form className="space-y-4" onSubmit={handleModalSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    required
                    disabled={modalStatus.loading}
                    placeholder="Name" 
                    value={modalForm.name}
                    onChange={(e) => setModalForm({ ...modalForm, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white outline-none focus:border-blue-500 transition-all disabled:opacity-40" 
                  />
                  <input 
                    type="email" 
                    required
                    disabled={modalStatus.loading}
                    placeholder="Email" 
                    value={modalForm.email}
                    onChange={(e) => setModalForm({ ...modalForm, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white outline-none focus:border-blue-500 transition-all disabled:opacity-40" 
                  />
                </div>
                <select 
                  required
                  disabled={modalStatus.loading}
                  value={modalForm.service}
                  onChange={(e) => setModalForm({ ...modalForm, service: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-zinc-300 outline-none appearance-none cursor-pointer hover:bg-white/[0.08] transition-all disabled:opacity-40"
                >
                  <option value="" disabled className="bg-[#070707] text-zinc-500">Select Service</option>
                  <option value="Web Development" className="bg-[#070707] text-white">Web Development</option>
                  <option value="SEO Optimization" className="bg-[#070707] text-white">SEO Optimization</option>
                  <option value="Social Media Marketing" className="bg-[#070707] text-white">Social Media Marketing</option>
                  <option value="AI Automation" className="bg-[#070707] text-white">AI Automation</option>
                  <option value="Branding" className="bg-[#070707] text-white">Branding</option>
                  <option value="Google Ads" className="bg-[#070707] text-white">Google Ads</option>
                  <option value="E-commerce Management" className="bg-[#070707] text-white">E-commerce Management</option>
                </select>
                <textarea 
                  required
                  disabled={modalStatus.loading}
                  placeholder="Your Message" 
                  rows={3} 
                  value={modalForm.message}
                  onChange={(e) => setModalForm({ ...modalForm, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white outline-none focus:border-blue-500 resize-none transition-all disabled:opacity-40"
                ></textarea>
                
                {/* 🎯 Real-Time Feedback Alert Messages inside Modal */}
                <AnimatePresence mode="wait">
                  {modalStatus.message && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className={`p-3 rounded-xl text-center text-xs font-bold border ${
                        modalStatus.success 
                          ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400" 
                          : "bg-rose-500/10 border-rose-500/20 text-rose-400"
                      }`}
                    >
                      {modalStatus.message}
                    </motion.div>
                  )}
                </AnimatePresence>
                
                <button 
                  type="submit" 
                  disabled={modalStatus.loading}
                  className="w-full bg-blue-600 py-4 rounded-xl font-bold text-[11px] uppercase tracking-widest text-white shadow-lg shadow-blue-600/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:scale-100"
                >
                  {modalStatus.loading ? (
                    <>
                      Submitting Pipeline...
                      <Loader2 size={12} className="animate-spin" />
                    </>
                  ) : "Submit Request"}
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}