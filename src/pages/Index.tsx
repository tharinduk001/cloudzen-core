import HeroSection from "@/components/home/HeroSection";
import BenefitsStrip from "@/components/home/BenefitsStrip";
import LearningRoadmap from "@/components/home/LearningRoadmap";
import CourseSpotlight from "@/components/home/CourseSpotlight";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import PricingTeaser from "@/components/home/PricingTeaser";
import FinalCTA from "@/components/home/FinalCTA";

const Index = () => {
  return (
    <div className="h-screen overflow-y-auto snap-y snap-mandatory">
      <HeroSection />
      <BenefitsStrip />
      <LearningRoadmap />
      <CourseSpotlight />
      <TestimonialsSection />
      <PricingTeaser />
      <FinalCTA />
    </div>
  );
};

export default Index;
