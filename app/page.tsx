import Hero from "@/components/sections/Hero";
import AboutPreview from "@/components/sections/AboutPreview";
import Services from "@/components/sections/Services";
import HowWeWork from "@/components/sections/HowWeWork";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Stats from "@/components/sections/Stats";
import ClientTrust from "@/components/sections/ClientTrust";
import IndustryExpertise from "@/components/IndustryExpertise";
import HeroSlider from "@/components/sections/HeroSlider";
// import CustomCursor from "@/components/CustomCursor";
import AuditCTA from "@/components/sections/AuditCTA";
import ProvenExcellence from "@/components/sections/ProvenExcellence";
import TrustSlider from "@/components/sections/TrustSlider";

// Import layout layer
export default function Home() {
  return (
    <main>
      <Hero />
      <HeroSlider />
      <AboutPreview />
      <TrustSlider />
      <PortfolioPreview />
      <Stats />
      <Services />
      <AuditCTA />
      <ProvenExcellence />
      <HowWeWork />
      <IndustryExpertise />
      <WhyChooseUs />
      <Testimonials />
      <ClientTrust />
      <CTA />
    </main>
  );
}