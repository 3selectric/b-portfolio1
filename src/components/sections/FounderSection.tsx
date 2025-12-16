import { Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const FounderSection = () => {
  return (
    <section id="founder" className="section-padding border-b border-foreground">
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Meet the Founder
          </h2>

          <div className="bg-background border border-foreground p-8 md:p-12">
            {/* Avatar placeholder */}
            <div className="w-24 h-24 border border-foreground flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl font-bold text-foreground">SM</span>
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-2">
              Sairam Meiyappan
            </h3>
            <p className="text-foreground font-medium mb-6">Founder, 3S Electric</p>

            <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto mb-8">
              An engineering student and EV ecosystem builder, Sairam is passionate about solving real EV service problems in India. He is actively working towards building a scalable EV service company that bridges the gap between EV adoption and reliable after-sales support.
            </p>

            <div className="flex justify-center gap-4">
              <Button variant="outline" size="default" className="border-foreground" asChild>
                <a href="mailto:founder@3selectric.in" aria-label="Email Sairam">
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </a>
              </Button>
              <Button variant="outline" size="default" className="border-foreground" asChild>
                <a 
                  href="https://linkedin.com/in/sairam-meiyappan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
