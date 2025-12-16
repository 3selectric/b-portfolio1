import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import BusinessModelSection from "@/components/sections/BusinessModelSection";
import TractionSection from "@/components/sections/TractionSection";
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
        <TractionSection />
        <FounderSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
