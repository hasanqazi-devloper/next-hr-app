"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, TrendingUp, Star, CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: <Zap className="w-5 h-5 2xl:w-8 2xl:h-8" />,
    title: "Modern Tools",
    desc: "We leverage industry-leading tech to build high-converting assets.",
  },
  {
    icon: <Star className="w-5 h-5 2xl:w-8 2xl:h-8" />,
    title: "Creative Thinking",
    desc: "Strategies built from the ground up to fit your specific goals.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 2xl:w-8 2xl:h-8" />,
    title: "Proven Methods",
    desc: "Data-backed execution that ensures meaningful, measurable growth.",
  },
  {
    icon: <TrendingUp className="w-5 h-5 2xl:w-8 2xl:h-8" />,
    title: "Meaningful Results",
    desc: "Focusing on visibility, trust, and real-world brand success.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-16 md:py-24 2xl:py-32 bg-[#020617] overflow-hidden border-b border-white/5">

      {/* Background Dots & Glow */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
      <div className="absolute top-1/4 -right-20 w-[400px] 2xl:w-[800px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[110rem] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 xl:gap-16 2xl:gap-24 items-center">

          {/* LEFT SIDE: Content (Balanced with Sizing Framework) */}
          <div className="lg:col-span-6 space-y-6 md:space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* 🎯 MATCHED DESIGN SYSTEM: Exact consistent sizes, line-height, and tracking to match core framework */}
              <h2 className="text-[2.3rem]  md:text-[2.5rem] lg:text-[2.5rem] 2xl:text-[3.2rem]  font-black text-white tracking-tighter leading-[1.1] lg:leading-[1] mb-6">
                Why Choose
                <br />
                {/* 🎯 FIXED OVERFLOW & BREAKING: Changed to 'block' with precise margins and safety right padding */}
                <span className="block  py-1 pr-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  High Rise Digital
                </span>
              </h2>

              {/* 🎯 EXACT TEXT FONT SIZE SYSTEM: Locked 18px on small screens and 20px (xl) on large screens */}
              {/* 🎯 SYNCED PARENT CONTAINER WITH PREMIUM RESPONSIVE TYPOGRAPHY */}
              <div className="space-y-4 max-w-xl 2xl:max-w-3xl">

                {/* Paragraph 1 */}
                <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed mx-auto lg:mx-0 opacity-90">
                  At High Rise Digital, we focus on helping businesses grow with smart and effective digital marketing solutions. Our team combines creativity, strategy, and industry experience to deliver real results for every client.
                </p>

                {/* Border section left panel aligned with font metrics */}


                {/* Paragraph 2 inside Border Block */}
                <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed mx-auto lg:mx-0 opacity-90">
                  From website development and SEO to social media marketing and paid advertising, we provide complete services tailored to your business goals. We believe in honest communication, quality work, and long-term partnerships.
                </p>

                {/* Paragraph 3 inside Border Block */}
                <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed mx-auto lg:mx-0 opacity-90">
                  Every project is handled with attention to detail to ensure your brand stands out online. Whether you are a startup or an established company, we work closely with you to increase visibility, attract more customers, and improve business growth.
                </p>

                {/* Paragraph 4 inside Border Block */}
                <p className="text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed mx-auto lg:mx-0 opacity-90">
                  Your success is our priority, and we are committed to delivering reliable digital solutions that make a lasting impact.
                </p>

              </div>
            </motion.div>
          </div>
          {/* RIGHT SIDE: Cards (Enhanced Contrast & Highly Readable Layout) */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 2xl:gap-10 relative">

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-blue-500/20 blur-[100px] rounded-full pointer-events-none" />

              {features.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative p-6 md:p-8 2xl:p-12 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl group transition-all duration-500 hover:border-blue-500/50 hover:bg-white/[0.07] flex flex-col justify-between
                    ${index % 2 !== 0 ? 'sm:translate-y-8 md:translate-y-10 2xl:translate-y-16' : ''}`}
                >
                  <div className="relative z-10 space-y-4 md:space-y-5">

                    {/* 🟢 Icon & Heading in ONE Row Line Wrapper */}
                    <div className="flex items-center gap-4">
                      <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 2xl:w-16 2xl:h-16 flex items-center justify-center rounded-xl bg-white/[0.05] text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
                        {item.icon}
                      </div>

                      {/* Premium Multi-Color Attractive Gradient for Cards Title */}
                      <h4 className="flex-1 font-block text-[1.0rem] sm:text-[1.2rem] lg:text-[1.2rem] 2xl:text-[1.5rem] tracking-[1px] uppercase leading-tight bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-500">
                        {item.title}
                      </h4>
                    </div>

                    {/* ⚪ Card Description: Pure White, Big Font Size for Perfect Laptop Readability */}
                    <p className="text-white text-white text-[15px] md:text-base lg:text-[15px] 2xl:text-[15px] font-medium leading-relaxed max-w-xl 2xl:max-w-3xl mx-auto lg:mx-0 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                      {item.desc}
                    </p>
                  </div>

                  {/* Corner Check Icon */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <CheckCircle2 className="text-blue-500 w-4 h-4 2xl:w-6 2xl:h-6" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}