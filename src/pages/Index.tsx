import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import BusinessModelSection from "@/components/sections/BusinessModelSection";
// Replace old import:
import RecognitionSection from "@/components/sections/RecognitionSection";
import TractionTimelineSection from "@/components/sections/TractionTimelineSection";

// In JSX:
// <RecognitionSection />
// <TractionTimelineSection />
import FounderSection from "@/components/sections/FounderSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <BusinessModelSection />
        <TractionTimelineSection />
        <RecognitionSection />
        <FounderSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
