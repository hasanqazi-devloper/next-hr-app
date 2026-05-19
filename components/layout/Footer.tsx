"use client";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import CTA from "../sections/CTA";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const offices = [
    { city: "Pakistan", address: "Suite # 19, Block-M, Wapda Town Phase 2, Multan, Pakistan." },
    { city: "United States", address: "3564 AVALON PARK EAST BLVD, STE 1 PMB 2002, ORLANDO, FL 32828" },
    { city: "United Kingdom", address: "Suite 105, Fence House Fence Avenue Macclesfield Cheshire SK10 1LT United Kingdom" }
  ];

  const socials = [
    { icon: <FaInstagram size={18} />, href: "https://www.instagram.com/highrisedigitalagency/", label: "Instagram", hoverColor: "hover:text-[#E1306C] hover:border-[#E1306C]/40 hover:shadow-[0_0_20px_rgba(225,48,108,0.3)]" },
    { icon: <FaLinkedinIn size={18} />, href: "https://www.linkedin.com/company/high-rise-digital-agency/", label: "LinkedIn", hoverColor: "hover:text-[#0A66C2] hover:border-[#0A66C2]/40 hover:shadow-[0_0_20px_rgba(10,102,194,0.3)]" },
    { icon: <FaFacebook size={18} />, href: "https://www.facebook.com/highrisedigital.official/", label: "Facebook", hoverColor: "hover:text-[#1877F2] hover:border-[#1877F2]/40 hover:shadow-[0_0_20px_rgba(24,119,242,0.3)]" },
    { icon: <Mail size={18} />, href: "mailto:info@highrisedigital.io", label: "Email", hoverColor: "hover:text-blue-400 hover:border-blue-500/40 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]" },
  ];

  return (
    <footer className="text-white relative bg-[#030303] border-t border-white/5 overflow-hidden selection:bg-blue-600/30">
    < CTA />

      {/* 🌌 Cosmic Glows */}
      <div className="absolute top-0 left-1/4 w-[600px] 2xl:w-[1000px] h-[300px] bg-blue-600/[0.04] blur-[120px] 2xl:blur-[200px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] 2xl:w-[1000px] h-[300px] bg-cyan-500/[0.03] blur-[120px] 2xl:blur-[200px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[1600px] 2xl:max-w-[2400px] mx-auto px-6 2xl:px-16">

        {/* --- MAIN LINKS GRID --- */}
        <div className="p-3 pt-4 pb-12 md:pt-6 md:pb-16 2xl:pt-10 2xl:pb-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 2xl:gap-24 border-b border-white/5">

          {/* Column 1: Brand & Logo Section */}
          <div className="lg:col-span-3 flex flex-col items-start justify-start">
            <Link href="/" className="inline-block outline-none p-0 m-0 leading-[0] group">
              <Image
                src="/Hr Logo White.svg"
                alt="High Raise Digital Logo"
                width={800}
                height={250}
                priority
                className="h-24 md:h-32 lg:h-40 2xl:h-60 w-auto object-contain origin-left select-none ml-[-12px] mt-[-20px] mb-[-15px] transition-transform duration-500 group-hover:scale-[1.01]"
              />
            </Link>

            <p className="text-white text-[16px] md:text-sm 2xl:text-xl font-medium leading-relaxed max-w-[300px] 2xl:max-w-xl -mt-2">
              Let’s discuss your goals and create a powerful strategy to boost your business growth online.
            </p>

            <div className="flex items-center gap-3 mt-6 2xl:mt-12">
              {socials.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className={`w-10 h-10 2xl:w-20 2xl:h-20 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-zinc-400 transition-all duration-300 ${item.hoverColor}`}
                >
                  <div className="scale-90 2xl:scale-[1.6]">{item.icon}</div>
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
<div className="lg:col-span-2 pt-6 lg:pt-10 2xl:pt-16 space-y-6">
    <span className="block text-[16px] md:text-[18px] font-bold text-white tracking-widest uppercase">
      Quick Links
    </span>
    <div className="flex flex-col space-y-3 md:space-y-4 text-[16px] md:text-[16px] font-normal">
      {[
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Case Studies", href: "/portfolio" },
        { name: "Blogs", href: "/blog" },
      ].map((link, idx) => (
        <Link key={idx} href={link.href} className="text-white-400 hover:text-white transition-colors w-max">
          {link.name}
        </Link>
      ))}
    </div>
  </div>

  {/* Column 2: Our Services (Expertise) */}
  <div className="lg:col-span-2 pt-6 lg:pt-10 2xl:pt-16 space-y-6">
    <span className="block text-[16px] md:text-[18px] font-bold text-white tracking-widest uppercase">
      Expertise
    </span>
    <div className="flex flex-col space-y-3 md:space-y-4 text-[16px] md:text-[16px] font-normal">
      {[
        { title: "Website Development", slug: "web-development" },
        { title: "Search Engine Optimization", slug: "seo" },
        { title: "Social Media Marketing", slug: "social-media-marketing" },
        { title: "AI Automation", slug: "ai-automation" },
        { title: "Ecommerce Management", slug: "ecommerce" },
      ].map((service, idx) => (
        <Link
          key={idx}
          href={`/services/${service.slug}`}
          className="text-white-400 hover:text-white transition-all duration-300 w-max"
        >
          {service.title}
        </Link>
      ))}
    </div>
  </div>

  {/* Column 3: Compliance */}
  <div className="lg:col-span-2 pt-6 lg:pt-10 2xl:pt-16 space-y-6">
    <span className="block text-[16px] md:text-[18px] font-bold text-white tracking-widest uppercase">
      Compliance
    </span>
    <div className="flex flex-col space-y-3 md:space-y-4 text-[16px] md:text-[16px] font-normal">
      {[
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms & Conditions", href: "/terms" },
        { name: "Global Pricing", href: "/pricing" },
        { name: "FAQs", href: "/faq" },
        { name: "Contact US", href: "/contact" }
      ].map((link, idx) => (
        <Link key={idx} href={link.href} className="text-white-400 hover:text-white transition-colors w-max">
          {link.name}
        </Link>
      ))}
    </div>
  </div>

  {/* Column 4: Inquiries */}
  <div className="lg:col-span-3 pt-6 lg:pt-10 2xl:pt-16 space-y-6">
    <span className="block text-[16px] md:text-[18px] font-bold text-white tracking-widest uppercase">
      Inquiries
    </span>
    <div className="space-y-4 text-[16px] md:text-[16px]">
      <a href="mailto:info@highrisedigital.io" className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all duration-300 group">
        <Mail size={18} className="text-blue-400 shrink-0 2xl:w-8 2xl:h-8" />
        <div className="space-y-1">
          <p className="text-[16px] 2xl:text-[13px] text-white-500 uppercase font-black tracking-wider">Drop an email</p>
          <p className="text-[16px] md:text-[16px] lg:text-[15px] xl:text-[17px] 2xl:text-xl font-bold text-white-300 group-hover:text-white transition-colors break-all">info@highrisedigital.io</p>
        </div>
      </a>
      <a href="tel:+923002777587" className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-all duration-300 group">
        <Phone size={18} className="text-cyan-400 shrink-0 2xl:w-8 2xl:h-8" />
        <div className="space-y-1">
          <p className="text-[16px] 2xl:text-[13px] text-white-500 uppercase font-black tracking-wider">Corporate Support</p>
          <p className="text-[16px] md:text-[16px] lg:text-[15px] xl:text-[17px] 2xl:text-xl font-bold text-white-300 group-hover:text-white transition-colors">+92 300 2777587</p>
        </div>
      </a>
    </div>
  </div>

         
        </div>

        {/* 🏢 OFFICES GRID */}
        <div className="py-12 md:py-16 grid grid-cols-1 sm:grid-cols-3 gap-6 2xl:gap-12 border-b border-white/5">
          {offices.map((office, idx) => (
            <div key={idx} className="p-6 md:p-8 rounded-2xl bg-white/[0.01] border border-white/5 space-y-4 hover:border-blue-500/20 transition-all duration-300 group">
              <div className="space-y-2">
                {/* 🎯 FIXED SIZE: Compressed from 3xl to a clean, elegant desktop scale */}
                <span className="block text-sm md:text-base 2xl:text-xl font-black text-white tracking-tight uppercase">
                  {office.city}
                </span>
                <p className="text-[16px] md:text-[14px] 2xl:text-[15px] text-white-400 font-normal leading-relaxed">
                  {office.address}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 🔒 BOTTOM BAR */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[16px] 2xl:text-lg text-white-500 font-semibold uppercase tracking-wider">
            © {currentYear} High Raise Digital LLC.
          </p>
          <p className="text-[16px] 2xl:text-base tracking-[3px] text-white-600 font-bold uppercase">
            Built for growth • Designed for dominance
          </p>
        </div>

      </div>
    </footer>
  );
}