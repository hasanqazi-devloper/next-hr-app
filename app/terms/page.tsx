"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Scale, ShieldAlert } from "lucide-react";

export default function TermsAndConditions() {
  const terms = [
    { title: "1. Acceptance of Terms", desc: "By using our website or services, you confirm that you have read, understood, and agreed to these Terms and Conditions. If you do not agree, you should not use our services." },
    { title: "2. Services", desc: "High Rise Digital provides digital marketing, web development, branding, SEO, and related digital services. We reserve the right to modify, suspend, or discontinue any service at any time without prior notice." },
    { title: "3. Client Responsibilities", desc: "Clients agree to provide accurate information, necessary materials, and timely feedback required for project completion. Delays caused by missing client input may affect delivery timelines." },
    { title: "4. Payments", desc: "All payments must be made according to the agreed proposal or invoice. Projects may be paused or delayed if payments are not received on time. All fees are non-refundable unless stated otherwise in a written agreement." },
    { title: "5. Intellectual Property", desc: "All content, designs, and materials created by High Rise Digital remain our property until full payment is received. After payment, ownership rights are transferred to the client unless otherwise agreed." },
    { title: "6. Revisions and Changes", desc: "We offer revisions as per the project agreement. Additional changes beyond the agreed scope may incur extra charges." },
    { title: "7. Limitation of Liability", desc: "High Rise Digital is not responsible for any indirect, incidental, or consequential damages arising from the use of our services or website. We do not guarantee specific results such as rankings, sales, or revenue." },
    { title: "8. Third-Party Services", desc: "We may use or recommend third-party tools and services. We are not responsible for the performance, policies, or actions of these third-party providers." },
    { title: "9. Termination", desc: "We reserve the right to terminate or suspend services if a client violates these Terms and Conditions or engages in unlawful or abusive behavior." },
    { title: "10. Confidentiality", desc: "Both parties agree to maintain confidentiality of any sensitive business information shared during the project." },
    { title: "11. Changes to Terms", desc: "High Rise Digital may update these Terms and Conditions at any time. Continued use of our services indicates acceptance of the updated terms." },
  ];

  return (
    <main className="min-h-screen bg-[#020617] text-white overflow-x-hidden pb-20 selection:bg-blue-600">
      
  {/* 1. HERO SECTION (Terms & Conditions) */}
<section className="relative w-full overflow-hidden">
  {/* Background Image Container with Exact Matching Premium CSS */}
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

  {/* Padded Content Wrapper - Same as Insights Page */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-16 md:pt-40">
    <div className="max-w-5xl">
      {/* Badge Container */}
      <div className="flex items-center gap-2.5 mb-8 w-fit px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md">
        <Scale size={12} className="text-blue-400" />
        <span className="text-[10px] font-black tracking-[4px] text-blue-300">Legal Agreement</span>
      </div>

      {/* Main Big Responsive Typography */}
      <h1 className="text-6xl sm:text-8xl md:text-[100px] font-black tracking-tighter leading-[0.8] text-white mb-8 normal-case">
        TERMS & {" "}
        <span className="uppercase bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text">
          Conditions.
        </span>
      </h1>
      <p className="text-white-500 text-lg md:text-xl lg:text-2xl max-w-2xl leading-relaxed font-normal opacity-80">
        Please read these Terms and Conditions carefully before using our services.
      </p>
    </div>
  </div>
</section>

      {/* --- CONTENT SECTION (Blog Style) --- */}
      <section className="py-20 px-6 relative 2xl:py-36">
        <div className="max-w-3xl 2xl:max-w-6xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="prose prose-invert max-w-none"
          >
            {/* Introduction */}
            <p className="text-xl md:text-2xl 2xl:text-4xl text-zinc-300 leading-relaxed mb-20 font-medium">
              Welcome to High Rise Digital. By accessing or using our website and services, you agree to be bound by these Terms and Conditions. Please read them carefully before engaging with our agency.
            </p>

            {/* Loop through terms */}
            <div className="space-y-16 2xl:space-y-24">
              {terms.map((item, index) => (
                <div key={index} className="group">
                  <h2 className="text-3xl md:text-4xl 2xl:text-6xl font-black mb-6 text-white tracking-tight group-hover:text-blue-400 transition-colors duration-300">
                    {item.title}
                  </h2>
                  <p className="text-zinc-400 text-lg md:text-xl 2xl:text-3xl leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Final Notice & Contact Box */}
            <div className="mt-24 p-10 2xl:p-20 rounded-[3rem] bg-white/[0.02] border border-dashed border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <ShieldAlert className="text-blue-500 w-8 h-8 2xl:w-12 2xl:h-12" />
                <h3 className="text-2xl 2xl:text-5xl font-bold">Important Notice</h3>
              </div>
              <p className="text-zinc-500 text-base 2xl:text-2xl mb-10 leading-relaxed">
                If you have any questions regarding these Terms and Conditions, or if you need clarification on any point mentioned above, please contact High Rise Digital through our official communication channels.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <a href="/contact" className="px-8 py-4 2xl:px-12 2xl:py-6 bg-blue-600 text-white font-black rounded-full hover:bg-white hover:text-black transition-all 2xl:text-xl">
                  Contact Support
                </a>
                <span className="text-[10px] 2xl:text-sm font-black tracking-widest text-zinc-600 uppercase">
                  Last Updated: May 2026
                </span>
              </div>
            </div>

          </motion.div>
        </div>
      </section>
    </main>
  );
}