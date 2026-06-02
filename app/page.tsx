

import { createClient } from "contentful";
import Hero from "@/components/sections/Hero";
import AboutPreview from "@/components/sections/AboutPreview";
import Services from "@/components/sections/Services";
import HowWeWork from "@/components/sections/HowWeWork";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import ClientTrust from "@/components/sections/ClientTrust";
import IndustryExpertise from "@/components/IndustryExpertise";
import HeroSlider from "@/components/sections/HeroSlider";
import AuditCTA from "@/components/sections/AuditCTA";
import ProvenExcellence from "@/components/sections/ProvenExcellence";
import Stats from "@/components/sections/Stats";

// 🎯 Contentful Client Setup
const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || 'aprr3d93u7vz',
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || 'LXVuIdmXm-IK71j-DfjMMgSZQnAoM_aqxz-KzAlaMdA',
});

export default async function Home() {
  let aboutData = null;

  try {
    // 📡 Sirf About Preview Section Ka Data Fetch Hoga
    const aboutResponse = await client.getEntries({
      content_type: "aboutPreviewSettings",
      limit: 1,
    });
    if (aboutResponse.items.length > 0) {
      aboutData = aboutResponse.items[0].fields;
    }
  } catch (error) {
    console.error("Error fetching content from Contentful:", error);
  }

  return (
    <main>
      {/* 🎯 FIXED: Yahan se content={heroData} mukammal tor par hata diya hai */}
      <Hero />

      <HeroSlider />

      {/* 🎯 About Preview Contentful se data uthaye gaa */}
      <AboutPreview />

      <PortfolioPreview />
      <Stats />
      <Services />
      <AuditCTA />
      <ProvenExcellence />
      <HowWeWork />
      <IndustryExpertise />
      <Testimonials />

      <WhyChooseUs />
      <ClientTrust />
    </main>
  );
}