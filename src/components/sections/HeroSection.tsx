import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding min-h-[80vh] flex items-center border-b border-foreground">
      <div className="container-narrow w-full">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-foreground text-foreground text-sm font-medium">
            <span className="w-2 h-2 bg-foreground"></span>
            Early-Stage Startup
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
            Building India's Multi-Brand EV Service Ecosystem
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            3SElectric Innovative Services solves service, maintenance, and reliability challenges faced by EV owners, fleet operators, and mechanics across India.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            <Button variant="hero" size="xl" onClick={scrollToContact}>
              Contact Team
              <ArrowRight className="ml-1" />
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <a href="#solution">View Solution</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
