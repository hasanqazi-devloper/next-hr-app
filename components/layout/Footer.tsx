"use client";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, ArrowRight } from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const offices = [
    { region: "Primary Hub", city: "Pakistan", address: "Suite # 19, Block-M, Wapda Town Phase 2, Multan, Pakistan." },
    { region: "Tech Operations", city: "United States", address: "3564 AVALON PARK EAST BLVD, STE 1 PMB 2002, ORLANDO, FL 32828" },
    { region: "Development Core", city: "United Kingdom", address: "Suite 105, Fence House Fence Avenue Macclesfield Cheshire SK10 1LT United Kingdom" }
  ];

  const socials = [
    { icon: <FaInstagram size={18} />, href: "https://www.instagram.com/highrisedigitalagency/", label: "Instagram", hoverColor: "hover:text-[#E1306C] hover:border-[#E1306C]/40 hover:shadow-[0_0_20px_rgba(225,48,108,0.3)]" },
    { icon: <FaLinkedinIn size={18} />, href: "https://www.linkedin.com/company/high-rise-digital-agency/", label: "LinkedIn", hoverColor: "hover:text-[#0A66C2] hover:border-[#0A66C2]/40 hover:shadow-[0_0_20px_rgba(10,102,194,0.3)]" },
    { icon: <FaFacebook size={18} />, href: "https://www.facebook.com/highrisedigital.official/", label: "Facebook", hoverColor: "hover:text-[#1877F2] hover:border-[#1877F2]/40 hover:shadow-[0_0_20px_rgba(24,119,242,0.3)]" },
    { icon: <Mail size={18} />, href: "mailto:info@highrisedigital.io", label: "Email", hoverColor: "hover:text-blue-400 hover:border-blue-500/40 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]" },
  ];

  return (
    <footer className="relative bg-[#030303] border-t border-white/5 overflow-hidden selection:bg-blue-600/30">

      {/* 🌌 High-End Cosmic Glows */}
      <div className="absolute top-0 left-1/4 w-[600px] 2xl:w-[1000px] h-[300px] bg-blue-600/[0.04] blur-[120px] 2xl:blur-[200px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] 2xl:w-[1000px] h-[300px] bg-cyan-500/[0.03] blur-[120px] 2xl:blur-[200px] rounded-full pointer-events-none" />

      {/* Container: Max width set for 4K balance */}
      <div className="relative z-10 max-w-[1600px] 2xl:max-w-[2000px] mx-auto px-6 2xl:px-12">

        {/* 🛠️ PADDING REDUCED: py-16 ko py-8 (Mobile) aur py-24 ko py-12 (Desktop) kar diya hai */}
        <div className="py-8 md:py-10 2xl:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 2xl:gap-20">

         {/* Column 1: Brand & Strategic Vision */}
<div className="lg:col-span-3 flex flex-col justify-start">
  <div className="flex flex-col items-start"> 
    <Link href="/" className="inline-block outline-none group">
      <Image 
        src="/Hr Logo White.svg" 
        alt="High Raise Digital Logo"
        width={600} 
        height={200}
        priority
        // 🛠️ LOGO ZOOMED: h-20 (mobile) | lg:h-28 (laptop) | 2xl:h-40 (4K/Big Screens)
        // Negative margin-left (ml-[-4px]) added to align with text perfectly
        className="h-20 lg:h-28 2xl:h-40 w-auto object-contain origin-left select-none ml-[-4px]" 
      />
    </Link>

    {/* 🛠️ PADDING REDUCED: mt-1 ya mt-2 rakha hai taake text logo ke foran baad aaye */}
    <p className="text-zinc-500 text-[11px] md:text-xs 2xl:text-xl font-medium leading-tight max-w-[280px] 2xl:max-w-md mt-1 md:mt-2">
      Let’s discuss your goals and create a powerful strategy to boost your business growth online.
    </p>
  </div>

  {/* Social Icons: Margin top adjusted for the bigger logo */}
  <div className="flex items-center gap-3 mt-8 2xl:mt-14">
    {socials.map((item, i) => (
      <Link
        key={i}
        href={item.href}
        className={`w-10 h-10 2xl:w-16 2xl:h-16 rounded-xl 2xl:rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-zinc-400 transition-all duration-300 ${item.hoverColor} hover:bg-white/[0.08] hover:border-white/20`}
      >
        <div className="scale-90 2xl:scale-125 flex items-center justify-center">
          {item.icon}
        </div>
      </Link>
    ))}
  </div>
</div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-5 2xl:space-y-8">
            <h4 className="text-[10px] 2xl:text-sm font-black text-white tracking-[3px] uppercase">Quick Links</h4>
            <div className="flex flex-col space-y-2.5 2xl:space-y-4 text-[11px] 2xl:text-base font-bold">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Case Studies", href: "/portfolio" },
                { name: "Blogs", href: "/blog" },
              ].map((link, idx) => (
                <Link key={idx} href={link.href} className="text-zinc-500 hover:text-white transition-colors w-max flex items-center gap-2 group/nav">
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Our Services */}
   <div className="lg:col-span-2 space-y-6 2xl:space-y-10">
  {/* 🎯 Section Title: Shaper & More Distinct */}
  <h4 className="relative w-max text-[11px] 2xl:text-sm font-black text-white tracking-[4px]  ">
    Our Services
  </h4>

  <div className="flex flex-col space-y-3 2xl:space-y-5">
    {[
      "Social-Media",
      "SEO",
      "Content-Writing",
      "Web-Dev",
      "Branding"
    ].map((service, idx) => (
      <Link 
        key={idx} 
        href={`/services/${service.toLowerCase()}`} 
        className="group flex items-center gap-2 text-zinc-500 hover:text-white transition-all duration-300 w-max"
      >
        {/* 🛠️ Modern Hover Indicator */}
        <span className="w-0 h-[1.5px] bg-blue-500 transition-all duration-300 " />
        
        <span className="text-[11px] 2xl:text-base font-bold tracking-wide uppercase ">
          {service}
        </span>
      </Link>
    ))}
  </div>
</div>

          {/* Column 4: Compliance */}
          <div className="lg:col-span-2 space-y-5 2xl:space-y-8">
            <h4 className="text-[10px] 2xl:text-sm font-black text-white tracking-[3px] ">Compliance</h4>
            <div className="flex flex-col space-y-2.5 2xl:space-y-4 text-[11px] 2xl:text-base font-bold">
              {[
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms & Conditions", href: "/terms" },
                { name: "Global Pricing", href: "/pricing" },
                { name: "FAQs", href: "/faq" },
                { name: "Contact US", href: "/contact" }
              ].map((link, idx) => (
                <Link key={idx} href={link.href} className="text-zinc-500 hover:text-white transition-colors w-max">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 5: Inquiries - Sizing Refined */}
          <div className="lg:col-span-3 space-y-5 2xl:space-y-8">
            <h4 className="text-[10px] 2xl:text-sm font-black text-white tracking-[3px] uppercase">Inquiries</h4>
            <div className="space-y-3 2xl:space-y-5">
              <a href="mailto:info@highrisedigital.io" className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.01] border border-white/5 hover:border-blue-500/20 transition-all duration-300 group">
                <Mail size={14} className="text-blue-400 shrink-0" />
                <div className="space-y-0.5">
                  <p className="text-[8px] 2xl:text-[10px] text-zinc-600 uppercase font-black tracking-wider">Drop an email</p>
                  <p className="text-[11px] 2xl:text-base font-bold text-zinc-300 group-hover:text-white transition-colors">info@highrisedigital.io</p>
                </div>
              </a>
              <a href="tel:+923002777587" className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.01] border border-white/5 hover:border-cyan-500/20 transition-all duration-300 group">
                <Phone size={14} className="text-cyan-400 shrink-0" />
                <div className="space-y-0.5">
                  <p className="text-[8px] 2xl:text-[10px] text-zinc-600 uppercase font-black tracking-wider">Corporate Support</p>
                  <p className="text-[11px] 2xl:text-base font-bold text-zinc-300 group-hover:text-white transition-colors">+92 300 2777587</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* 🏢 OFFICES GRID: Padding adjusted */}
        <div className="pb-12 pt-2 grid grid-cols-1 sm:grid-cols-3 gap-5 border-b border-white/5">
          {offices.map((office, idx) => (
            <div key={idx} className="p-5 rounded-xl bg-white/[0.01] border border-white/5 space-y-3 hover:border-white/10 transition-all duration-300 group relative overflow-hidden">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
                <span className="text-[9px] 2xl:text-[11px] uppercase tracking-widest font-black text-zinc-600 group-hover:text-zinc-400 transition-colors">{office.region}</span>
              </div>
              <div className="space-y-1">
                <h5 className="text-[13px] 2xl:text-xl font-black text-white uppercase tracking-tight">{office.city}</h5>
                <p className="text-[10px] 2xl:text-[15px] text-zinc-500 font-medium leading-snug">{office.address}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 🔒 BOTTOM BAR: Clean & Compact */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-[10px] 2xl:text-sm text-zinc-600 font-semibold tracking-tight">
            © {currentYear} High Raise Digital LLC.
          </p>
          <p className="text-[8px] 2xl:text-[11px]  tracking-[3px] text-zinc-700 font-bold">
            Built for growth • Designed for dominance
          </p>
        </div>

      </div>
    </footer>
  );
}