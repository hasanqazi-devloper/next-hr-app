"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Scale } from "lucide-react"; // Professional Legal Icon
import CTA from "@/components/sections/CTA";
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
      
     {/* 🎯 ADJUSTED TERMS & CONDITIONS HERO SECTION: Enhanced top padding to force layout down and equalize space */}
<section className="relative w-full overflow-hidden bg-[#030712]">
  <div className="container-wide">
    
    {/* Background Image Container with Exact Matching Premium CSS */}
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      <Image
        src="/home-hero.jpg"
        alt="Mesh Grid"
        fill
        priority 
        sizes="100vw"
        className="object-cover object-top opacity-35" // Standardized opacity for depth consistency
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030712]/40 to-[#030712]" />
    </div>

    {/* Ambient Blur Dot to lock the signature aesthetic */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/[0.05] blur-[120px] pointer-events-none" />

    {/* Full Sized Padded Content Wrapper - 🎯 FIXED: Increased padding to pt-44 and md:pt-56 to balance the height */}
<div className="relative z-10 w-full mx-auto text-center lg:text-left px-6 pt-32 pb-16 md:pt-30 md:pb-24 lg:max-w-full lg:pt-80 lg:pb-28 lg:pl-40 2xl:mx-0 2xl:max-w-[1500px] 2xl:pt-48 2xl:pb-36 2xl:pl-80 3xl:mx-0 3xl:max-w-[1800px] 3xl:pt-60 3xl:pb-44 3xl:pl-72">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-5xl"
      >
        {/* Badge Container (Centered on mobile, left on desktop) */}
        <div className="flex items-center gap-2.5 mb-8 w-fit px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md mx-auto md:mx-0">
          <Scale size={12} className="text-blue-400 animate-pulse" />
          <span className="text-[10px] font-black tracking-[4px] text-blue-300 uppercase">Legal Framework</span>
        </div>

        {/* Main Large Typography Block with Tight Line Height */}
        <h1 className="text-[3rem]  md:text-[3.2rem] lg:text-[3.8rem] tracking-tighter leading-[0.8] text-white mb-8 normal-case">
          TERMS & {" "}
          <span className="inline-block mt-2 uppercase bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text">
            Conditions.
          </span>
        </h1>

        {/* Paragraph aligned with the same typography standards (Centered on mobile) */}
 <p className="text-white text-sm md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed max-w-xl 2xl:max-w-3xl mx-auto lg:mx-0 opacity-80">
  Welcome to High Rise Digital. These Terms and Conditions govern your relationship with our agency and the use of our digital deployments.
</p>
      </motion.div>
    </div>
  </div>
</section>

      {/* --- ARTICLE CONTENT SECTION (Exact Privacy Full-Width Architecture) --- */}
      <section className="py-12 md:py-16 px-6 md:px-12 lg:px-20 relative border-t border-white/5">
        {/* 🎯 FIXED OVERRIDE: Shifted from tight max-w-3xl to balanced max-w-[85rem] with auto-centering */}
        <div className="max-w-[85rem] mx-auto w-full">
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-10 md:space-y-14 w-full"
          >
            {/* Loop through Terms - Styled like Privacy Sections */}
            {terms.map((item, index) => (
              <div key={index} className="space-y-4 w-full">
                {/* Heading Style */}
                <h2 className="!text-xl md:!text-2xl lg:!text-3xl font-black text-white tracking-tight uppercase border-b border-white/5 pb-2">
                  {item.title}
                </h2>
                {/* Paragraph Style */}
                <p className="text-white text-sm md:text-base leading-relaxed font-normal opacity-90">
                  {item.desc}
                </p>
              </div>
            ))}

            {/* Final Contact Card - Synced with Pure White Systems */}
       

          </motion.div>
        </div>
      </section>

    </main>
  );
}