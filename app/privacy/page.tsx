"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    /* Janni, yahan maine pure black ya navy se mix dark theme inline fix kiya hai 
       taake top header image blend ho jaye */
    <main className="min-h-screen bg-[#060713] text-white overflow-x-hidden selection:bg-blue-600">
      
      {/* 1. HERO SECTION (Privacy Policy) */}
      <section className="relative w-full overflow-hidden">
        {/* Background Image Container with Exact Matching Premium CSS */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <Image
            src="/home-hero.jpg"
            alt="Mesh Grid"
            fill
            priority 
            sizes="100vw"
            className="object-cover object-top opacity-40"
          />
          {/* Upar transparent overlay barabar kiya taake top header space automatically merge ho jaye */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#060713]/20 via-[#060713]/60 to-[#060713]" />
        </div>

        {/* Ambient Blur Dot */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/[0.08] blur-[120px] pointer-events-none" />

        {/* Padded Content Wrapper - Same as Insights Page */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-16 md:pt-44">
          <div className="max-w-5xl">
            {/* Badge Container */}
            <div className="flex items-center gap-2.5 mb-8 w-fit px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md">
              <ShieldCheck size={12} className="text-blue-400 animate-pulse" />
              <span className="text-[10px] font-black tracking-[4px] text-blue-300">Privacy Framework</span>
            </div>

            {/* Main Big Responsive Typography */}
            <h1 className="text-6xl sm:text-8xl md:text-[100px] font-black tracking-tighter leading-[0.8] text-white mb-8 normal-case">
              PRIVACY {" "}
              <span className="uppercase bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text">
                Policy.
              </span>
            </h1>
            <p className="text-zinc-300 text-lg md:text-xl lg:text-2xl max-w-2xl leading-relaxed font-normal opacity-90">
              Your privacy is important to us. This Privacy Policy explains how we collect, use, and safeguard your information.
            </p>
          </div>
        </div>
      </section>

      {/* --- ARTICLE CONTENT SECTION (Blog Style) --- */}
      <section className="py-20 px-6 relative 2xl:py-36">
        <div className="max-w-3xl 2xl:max-w-6xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="prose prose-invert max-w-none"
          >
            {/* Introduction */}
            <p className="text-xl md:text-2xl 2xl:text-4xl text-zinc-300 leading-relaxed mb-16 font-medium">
              Welcome to High Rise Digital. Your privacy is important to us, and we are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
            </p>

            {/* Information We Collect */}
            <div className="mb-16 2xl:mb-24">
              <h2 className="text-3xl md:text-4xl 2xl:text-6xl font-black mb-6 text-white tracking-tight">Information We Collect</h2>
              <p className="text-zinc-400 text-lg md:text-xl 2xl:text-3xl leading-relaxed">
                We may collect personal information such as your name, email address, phone number, business details, and any information you provide through contact forms or service inquiries. We may also collect non-personal data such as browser type, device information, and website usage statistics to improve user experience.
              </p>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-16 2xl:mb-24">
              <h2 className="text-3xl md:text-4xl 2xl:text-6xl font-black mb-6 text-white tracking-tight">How We Use Your Information</h2>
              <p className="text-zinc-400 text-lg md:text-xl 2xl:text-3xl leading-relaxed mb-6">
                High Rise Digital uses your information to:
              </p>
              <ul className="space-y-4 text-zinc-400 text-lg md:text-xl 2xl:text-3xl list-none border-l-2 border-blue-500/30 pl-6">
                <li>• Provide and improve our digital marketing services</li>
                <li>• Respond to inquiries and customer support requests</li>
                <li>• Send project updates, promotional content, or important notifications</li>
                <li>• Analyze website performance and enhance user experience</li>
                <li>• Maintain security and prevent unauthorized access</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div className="mb-16 2xl:mb-24">
              <h2 className="text-3xl md:text-4xl 2xl:text-6xl font-black mb-6 text-white tracking-tight">Information Sharing</h2>
              <p className="text-zinc-400 text-lg md:text-xl 2xl:text-3xl leading-relaxed">
                We respect your privacy and do not sell, trade, or rent your personal information to third parties. Your information may only be shared with trusted partners or service providers who assist us in delivering our services while maintaining confidentiality.
              </p>
            </div>

            {/* Data Security */}
            <div className="mb-16 2xl:mb-24">
              <h2 className="text-3xl md:text-4xl 2xl:text-6xl font-black mb-6 text-white tracking-tight">Data Security</h2>
              <p className="text-zinc-400 text-lg md:text-xl 2xl:text-3xl leading-relaxed">
                We implement appropriate security measures to protect your personal information from unauthorized access, misuse, or disclosure. While we strive to use commercially acceptable methods to secure your data, no online transmission is completely secure.
              </p>
            </div>

            {/* Cookies Policy */}
            <div className="mb-16 2xl:mb-24">
              <h2 className="text-3xl md:text-4xl 2xl:text-6xl font-black mb-6 text-white tracking-tight">Cookies Policy</h2>
              <p className="text-zinc-400 text-lg md:text-xl 2xl:text-3xl leading-relaxed">
                Our website may use cookies to improve functionality, analyze traffic, and personalize your browsing experience. You can choose to disable cookies through your browser settings if preferred.
              </p>
            </div>

            {/* Third-Party Links */}
            <div className="mb-16 2xl:mb-24">
              <h2 className="text-3xl md:text-4xl 2xl:text-6xl font-black mb-6 text-white tracking-tight">Third-Party Links</h2>
              <p className="text-zinc-400 text-lg md:text-xl 2xl:text-3xl leading-relaxed">
                Our website may contain links to third-party websites. High Rise Digital is not responsible for the privacy practices or content of external websites.
              </p>
            </div>

            {/* Your Rights */}
            <div className="mb-16 2xl:mb-24">
              <h2 className="text-3xl md:text-4xl 2xl:text-6xl font-black mb-6 text-white tracking-tight">Your Rights</h2>
              <p className="text-zinc-400 text-lg md:text-xl 2xl:text-3xl leading-relaxed">
                You have the right to request access, correction, or deletion of your personal information at any time. You may also opt out of receiving marketing communications from us.
              </p>
            </div>

            {/* Updates and Contact */}
            <div className="mt-24 p-10 2xl:p-20 rounded-[3rem] bg-white/[0.02] border border-white/5">
              <h3 className="text-2xl 2xl:text-4xl font-bold mb-4">Updates to This Policy</h3>
              <p className="text-zinc-500 text-base 2xl:text-2xl mb-10">
                High Rise Digital may update this Privacy Policy periodically. Any updates will be posted on this page.
              </p>
              
              <hr className="border-white/5 mb-10" />

              <h3 className="text-2xl 2xl:text-4xl font-bold mb-4">Contact Us</h3>
              <p className="text-zinc-400 text-base 2xl:text-2xl mb-8">
                If you have any questions regarding this Privacy Policy, please contact our support team.
              </p>
              <a href="/contact" className="inline-flex items-center gap-2 text-blue-400 font-bold hover:text-white transition-colors 2xl:text-2xl">
                Official Communication Channels →
              </a>
            </div>

          </motion.div>
        </div>
      </section>
    </main>
  );
}