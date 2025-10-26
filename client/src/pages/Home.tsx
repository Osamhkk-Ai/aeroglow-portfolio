import GlassNav from "@/components/GlassNav";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import SpotlightSection from "@/components/SpotlightSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <GlassNav />
      <HeroSection />
      <FeaturesSection />
      <SpotlightSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
}