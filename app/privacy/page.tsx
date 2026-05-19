"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import CTA from "@/components/sections/CTA";
export default function PrivacyPolicy() {
  return (
    /* 🎯 Exact structural clone with standard top gap framework matching pricing section */
    <main className="min-h-screen bg-[#020617] text-white overflow-x-hidden selection:bg-blue-600 -mt-24 md:-mt-28 lg:-mt-32">
      
      {/* 1. HERO SECTION (Privacy Policy - Identical Setup to Pricing Plans) */}
      <section className="relative w-full overflow-hidden">
        
        {/* Background Image Container with Exact Matching Premium CSS */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <Image
            src="/home-hero.jpg"
            alt="Mesh Grid"
            fill
            priority 
            sizes="100vw"
            className="object-cover object-top opacity-35" // Depth consistency locked
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/40 to-[#020617]" />
        </div>

        {/* Ambient Blur Dot to lock the signature aesthetic */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/[0.05] blur-[120px] pointer-events-none" />

        {/* Full Sized Padded Content Wrapper - Identical to Pricing Page */}
<div className="relative z-10 w-full mx-auto text-center lg:text-left px-6 pt-32 pb-16 md:pt-20 md:pb-24 lg:max-w-full lg:pt-60 lg:pb-28 lg:pl-40 2xl:mx-0 2xl:max-w-[1500px] 2xl:pt-48 2xl:pb-36 2xl:pl-80 3xl:mx-0 3xl:max-w-[1800px] 3xl:pt-60 3xl:pb-44 3xl:pl-72">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full"
          >
            {/* Badge Container (Privacy Framework Style) */}
            <div className="flex items-center gap-2.5 mb-8 w-fit px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md">
              <ShieldCheck size={12} className="text-blue-400 animate-pulse" />
              <span className="text-[10px] font-black tracking-[4px] text-blue-300 uppercase">Privacy Framework</span>
            </div>

            {/* Main Large Typography Block - Dynamic Controlled Laptop Sizing */}
            <h1 className="text-[3rem]  md:text-[3.2rem] lg:text-[3.8rem]  font-black tracking-tighter leading-[0.8] text-white mb-8 normal-case">
              PRIVACY {" "}
              <span className="inline-block mt-2 uppercase bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text">
                Policy.
              </span>
            </h1>

            {/* Paragraph aligned with typography standards */}
        <p className="text-white text-sm md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed max-w-xl 2xl:max-w-3xl mx-auto lg:mx-0 opacity-90">
  Your privacy is important to us. This Privacy Policy explains how we collect, use, and safeguard your information.
</p>
          </motion.div>
        </div>
      </section>

      {/* --- ARTICLE CONTENT SECTION (Optimized Width & Perfectly Balanced Layout) --- */}
      <section className="py-12 md:py-16 px-6 md:px-12 lg:px-20 relative border-t border-white/5">
        {/* 🎯 FIXED OVERRIDE: Adjusted to max-w-[85rem] and added mx-auto. 
            Yeh screens par full stretch bhi karega aur text ko extreme left par bhagne se bhi rokega */}
        <div className="max-w-[85rem] mx-auto w-full">
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-10 md:space-y-14 w-full"
          >
            {/* Introduction */}
            <p className="text-base md:text-lg lg:text-xl text-white leading-relaxed font-medium">
              Welcome to High Rise Digital. Your privacy is important to us, and we are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
            </p>

            {/* Information We Collect */}
            <div className="space-y-4 w-full">
              <h2 className="!text-xl md:!text-2xl lg:!text-3xl font-black text-white tracking-tight uppercase border-b border-white/5 pb-2">
                Information We Collect
              </h2>
              <p className="text-white text-sm md:text-base leading-relaxed font-normal opacity-90">
                We may collect personal information such as your name, email address, phone number, business details, and any information you provide through contact forms or service inquiries. We may also collect non-personal data such as browser type, device information, and website usage statistics to improve user experience.
              </p>
            </div>

            {/* How We Use Your Information */}
            <div className="space-y-4 w-full">
              <h2 className="!text-xl md:!text-2xl lg:!text-3xl font-black text-white tracking-tight uppercase border-b border-white/5 pb-2">
                How We Use Your Information
              </h2>
              <p className="text-white text-sm md:text-base leading-relaxed mb-4 font-normal opacity-90">
                High Rise Digital uses your information to:
              </p>
              <ul className="space-y-3 text-white text-sm md:text-base list-none border-l-2 border-blue-500/40 pl-5 font-normal opacity-95 w-full">
                <li>• Provide and improve our digital marketing services</li>
                <li>• Respond to inquiries and customer support requests</li>
                <li>• Send project updates, promotional content, or important notifications</li>
                <li>• Analyze website performance and enhance user experience</li>
                <li>• Maintain security and prevent unauthorized access</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div className="space-y-4 w-full">
              <h2 className="!text-xl md:!text-2xl lg:!text-3xl font-black text-white tracking-tight uppercase border-b border-white/5 pb-2">
                Information Sharing
              </h2>
              <p className="text-white text-sm md:text-base leading-relaxed font-normal opacity-90">
                We respect your privacy and do not sell, trade, or rent your personal information to third parties. Your information may only be shared with trusted partners or service providers who assist us in delivering our services while maintaining confidentiality.
              </p>
            </div>

            {/* Data Security */}
            <div className="space-y-4 w-full">
              <h2 className="!text-xl md:!text-2xl lg:!text-3xl font-black text-white tracking-tight uppercase border-b border-white/5 pb-2">
                Data Security
              </h2>
              <p className="text-white text-sm md:text-base leading-relaxed font-normal opacity-90">
                We implement appropriate security measures to protect your personal information from unauthorized access, misuse, or disclosure. While we strive to use commercially acceptable methods to secure your data, no online transmission is completely secure.
              </p>
            </div>

            {/* Cookies Policy */}
            <div className="space-y-4 w-full">
              <h2 className="!text-xl md:!text-2xl lg:!text-3xl font-black text-white tracking-tight uppercase border-b border-white/5 pb-2">
                Cookies Policy
              </h2>
              <p className="text-white text-sm md:text-base leading-relaxed font-normal opacity-90">
                Our website may use cookies to improve functionality, analyze traffic, and personalize your browsing experience. You can choose to disable cookies through your browser settings if preferred.
              </p>
            </div>

            {/* Third-Party Links */}
            <div className="space-y-4 w-full">
              <h2 className="!text-xl md:!text-2xl lg:!text-3xl font-black text-white tracking-tight uppercase border-b border-white/5 pb-2">
                Third-Party Links
              </h2>
              <p className="text-white text-sm md:text-base leading-relaxed font-normal opacity-90">
                Our website may contain links to third-party websites. High Rise Digital is not responsible for the privacy practices or content of external websites.
              </p>
            </div>

            {/* Your Rights */}
            <div className="space-y-4 w-full">
              <h2 className="!text-xl md:!text-2xl lg:!text-3xl font-black text-white tracking-tight uppercase border-b border-white/5 pb-2">
                Your Rights
              </h2>
              <p className="text-white text-sm md:text-base leading-relaxed font-normal opacity-90">
                You have the right to request access, correction, or deletion of your personal information at any time. You may also opt out of receiving marketing communications from us.
              </p>
            </div>

            {/* Updates and Contact Card */}
            <div className="mt-16 p-8 md:p-10 rounded-[2rem] bg-white/[0.02] border border-white/5 w-full">
              <h3 className="text-lg md:text-xl font-bold mb-2 text-white">Updates to This Policy</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-8">
                High Rise Digital may update this Privacy Policy periodically. Any updates will be posted on this page.
              </p>
             
            </div>

          </motion.div>
        </div>
      </section>

    </main>
  );
}