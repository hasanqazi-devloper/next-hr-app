"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Scale } from "lucide-react"; // Professional Legal Icon

export default function TermsAndConditions() {
  const terms = [
    { title: "Acceptance of Terms", desc: "By using our website or services, you confirm that you have read, understood, and agreed to these Terms and Conditions. If you do not agree, you should not use our services." },
    { title: "Our Services", desc: "High Rise Digital provides digital marketing, web development, branding, SEO, and related digital services. We reserve the right to modify, suspend, or discontinue any service at any time without prior notice." },
    { title: "Client Responsibilities", desc: "Clients agree to provide accurate information, necessary materials, and timely feedback required for project completion. Delays caused by missing client input may affect delivery timelines." },
    { title: "Payment Terms", desc: "All payments must be made according to the agreed proposal or invoice. Projects may be paused or delayed if payments are not received on time. All fees are non-refundable unless stated otherwise in a written agreement." },
    { title: "Intellectual Property", desc: "All content, designs, and materials created by High Rise Digital remain our property until full payment is received. After payment, ownership rights are transferred to the client unless otherwise agreed." },
    { title: "Revisions and Changes", desc: "We offer revisions as per the project agreement. Additional changes beyond the agreed scope may incur extra charges." },
    { title: "Limitation of Liability", desc: "High Rise Digital is not responsible for any indirect, incidental, or consequential damages arising from the use of our services or website. We do not guarantee specific results such as rankings, sales, or revenue." },
    { title: "Third-Party Services", desc: "We may use or recommend third-party tools and services. We are not responsible for the performance, policies, or actions of these third-party providers." },
    { title: "Termination", desc: "We reserve the right to terminate or suspend services if a client violates these Terms and Conditions or engages in unlawful or abusive behavior." },
    { title: "Confidentiality", desc: "Both parties agree to maintain confidentiality of any sensitive business information shared during the project." },
    { title: "Changes to Terms", desc: "High Rise Digital may update these Terms and Conditions at any time. Continued use of our services indicates acceptance of the updated terms." },
  ];

  return (
    /* 🎯 Exact structural clone from Privacy/Pricing logic to maintain zero-gap navbar integration */
    <main className="min-h-screen bg-[#020617] text-white overflow-x-hidden selection:bg-blue-600 -mt-24 md:-mt-28 lg:-mt-32">
      
      {/* 1. HERO SECTION (Terms & Conditions - Privacy Framework Style) */}
      <section className="relative w-full overflow-hidden">
        
        {/* Background Image Container */}
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

        {/* Ambient Blur Dot */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/[0.05] blur-[120px] pointer-events-none" />

        {/* Full Sized Padded Content Wrapper */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-16 md:pt-40">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-5xl"
          >
            {/* Badge Container */}
            <div className="flex items-center gap-2.5 mb-8 w-fit px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md">
              <Scale size={12} className="text-blue-400 animate-pulse" />
              <span className="text-[10px] font-black tracking-[4px] text-blue-300 uppercase">Legal Framework</span>
            </div>

            {/* Main Typography Block */}
            <h1 className="text-6xl sm:text-8xl md:text-[100px] font-black tracking-tighter leading-[0.8] text-white mb-8 normal-case">
              TERMS & {" "}
              <span className="uppercase bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text">
                Conditions.
              </span>
            </h1>

            {/* Paragraph aligned with privacy style specs */}
            <p className="text-white text-sm md:text-base lg:text-[17px] 2xl:text-xl font-medium max-w-2xl leading-relaxed opacity-90">
              Welcome to High Rise Digital. These Terms and Conditions govern your relationship with our agency and the use of our digital deployments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- ARTICLE CONTENT SECTION (Exact Privacy Page Style) --- */}
      <section className="py-12 md:py-16 px-6 relative border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-10 md:space-y-14"
          >
            {/* Loop through Terms - Styled like Privacy Sections */}
            {terms.map((item, index) => (
              <div key={index} className="space-y-4">
                {/* 🎯 FIXED Heading Style: Bold, Uppercase, Bordered-bottom for high contrast */}
                <h2 className="!text-xl md:!text-2xl lg:!text-3xl font-black text-white tracking-tight uppercase border-b border-white/5 pb-2">
                  {item.title}
                </h2>
                {/* 🎯 Paragraph Style: Crisp, readable white at 90% opacity */}
                <p className="text-white text-sm md:text-base leading-relaxed font-normal opacity-90">
                  {item.desc}
                </p>
              </div>
            ))}

            {/* Final Contact Card - Privacy Style Logic */}
            <div className="mt-16 p-8 md:p-10 rounded-[2rem] bg-white/[0.02] border border-white/5">
              <h3 className="text-lg md:text-xl font-bold mb-2 text-white">Governing Law</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                These terms shall be governed by and construed in accordance with the laws of your jurisdiction. Any disputes shall be subject to the exclusive jurisdiction of the local courts.
              </p>
              
              <hr className="border-white/5 mb-8" />

              <h3 className="text-lg md:text-xl font-bold mb-2 text-white">Need Clarification?</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                If you have any questions regarding these Terms and Conditions, please reach out to our legal support team.
              </p>
              <a href="/contact" className="inline-flex items-center gap-2 text-blue-400 text-sm font-bold hover:text-white transition-colors">
                Contact Legal Support →
              </a>
            </div>

          </motion.div>
        </div>
      </section>
    </main>
  );
}