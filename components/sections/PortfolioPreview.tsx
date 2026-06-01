"use client";
import Image from "next/image";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Cpu, BarChart3 } from "lucide-react";

const bentoProjects = [
  {
    id: "01",
    title: "Rhino Roofing Orlando Scale",
    image: "/rino-roffers.jpg", // 🎯 Apni SEO result screenshot ka real image path yahan dalo
    slug: "rhino-orlando",
    size: "lg:col-span-2 h-[400px] 2xl:h-[500px]",
  },
  {
    id: "02",
    title: "Breez Care",
    image: "/smile-care.jpg", // 🎯 Real image path
    slug: "breez-care",
    size: "lg:col-span-1 h-[400px] 2xl:h-[500px]",
  },
  {
    id: "03",
    title: "West London Cleaning Company",
    image: "/cleaning.jpg", // 🎯 Real image path
    slug: "west-london-cleaners",
    size: "lg:col-span-1 h-[400px] 2xl:h-[500px]",
  },
  {
    id: "04",
    title: "Local Restaurant Australia",
    image: "/burger.jpg", // 🎯 Real image path
    slug: "australia-restaurant-seo",
    size: "lg:col-span-2 h-[400px] 2xl:h-[500px]",
  }
];

export default function PortfolioBento() {
  return (
<section className="relative py-16 md:py-20 2xl:py-32 bg-gradient-to-bl from-[#0971A6] via-[#054f7a] to-[#021526] text-white overflow-hidden select-none border-t border-white/5">      {/* Background Glows */}
      <div className="absolute top-1/3 left-1/4 w-[600px] 2xl:w-[1000px] h-[600px] bg-blue-600/[0.02] blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl 2xl:max-w-[110rem] mx-auto px-6">

        {/* HEADER BLOCK */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 md:mb-10 2xl:mb-16 border-b border-white pb-4 pt-0">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-left"
          >
            <h3 className="text-[2.3rem] md:text-[2.5rem] lg:text-[2.5rem] 2xl:text-[3.2rem] font-black tracking-tighter leading-[1.1] lg:leading-none text-white">
              Our{" "}
              <span className="sm:inline bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Results
              </span>
            </h3>
            {/* <p className="mt-4 text-white text-[16px] md:text-base lg:text-[17px] 2xl:text-xl 3xl:text-2xl font-medium leading-relaxed opacity-80 w-full mx-auto lg:mx-0">
              We deliver clear, measurable growth by boosting your Google rankings, increasing organic traffic, and driving real revenue to your business.
            </p> */}
          </motion.div>

          {/* VIEW ALL LINK */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center shrink-0"
          >
            <Link
              href="/portfolio"
              className="flex items-center gap-3 md:gap-4 text-[10px] md:text-xs 2xl:text-[13px] uppercase tracking-[0.25em] font-black text-white hover:text-white transition-all duration-500 group"
            >
              <span className="relative pb-1 transition-colors duration-500 group-hover:text-white">
                View All Projects
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 group-hover:w-full" />
              </span>
              <div className="w-10 h-10 md:w-11 md:h-11 2xl:w-14 2xl:h-14 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center relative overflow-hidden group-hover:border-blue-500/50 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <ArrowUpRight size={16} className="text-white group-hover:text-white group-hover:rotate-45 group-hover:scale-110 transform transition-all duration-500 2xl:w-5 2xl:h-5" />
              </div>
            </Link>
          </motion.div>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 2xl:gap-8 relative z-10">
          {bentoProjects.map((project, i) => {
            const CardWrapper = motion.div;

            return (
              <Link href={`/portfolio/${project.slug}`} key={project.id} className={`${project.size} block`}>
                <CardWrapper
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="w-full h-full group relative rounded-[2rem] 2xl:rounded-[4rem] border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent backdrop-blur-md flex flex-col justify-between overflow-hidden hover:border-blue-500/30 transition-all duration-500 cursor-pointer"
                >
                  <div className="absolute inset-0 w-full h-full">
                    {/* Next.js Image Element - 100% Full Brightness & Crystal Clear 🎨 */}
                    <div className="absolute inset-0 w-full h-full transition-all duration-500">
                      <Image
                        src={project.image || "/placeholder.png"}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        priority={i < 2}
                      />
                    </div>

                    {/* Project ID Tag */}
                    <div className="absolute top-8 left-8 z-20">
                      <span className="px-3 py-1 rounded-full border border-white/10 bg-black/40 backdrop-blur-md text-[10px] 2xl:text-base font-bold text-gray-300 uppercase tracking-widest">
                        {project.id}
                      </span>
                    </div>

                    {/* Project Title Display */}
                    <div className="absolute bottom-8 left-8 right-8 z-20 space-y-2">
                      <span className="text-2xl 2xl:text-5xl font-black tracking-tight uppercase block text-white bg-black/30 backdrop-blur-sm px-4 py-2 rounded-xl w-fit">
                        {project.title}
                      </span>
                    </div>
                  </div>
                </CardWrapper>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}











