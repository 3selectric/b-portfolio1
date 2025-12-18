import { Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const FounderSection = () => {
  return (
    <section id="founder" className="section-padding border-b border-foreground">
    <div className="container-narrow">
    <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
    Meet the Team
    </h2>

    <div className="grid md:grid-cols-2 gap-8">
    {/* FOUNDER - Sonaa */}
    <div className="bg-background border border-foreground p-8 md:p-12 rounded-2xl hover:shadow-xl transition-all">
    <div className="w-24 h-24 border border-foreground flex items-center justify-center mx-auto mb-6 rounded-full">
    <span className="text-3xl font-bold text-foreground">SM</span>
    </div>
    <h3 className="text-2xl font-bold text-foreground mb-2">Sonaa Meyyappan</h3>
    <p className="text-foreground font-medium mb-6">Founder, 3SElectric</p>
    <p className="text-muted-foreground leading-relaxed mb-8">
    EV ecosystem builder and engineering student passionate about solving real EV service problems in India. Building scalable EV service company.
    </p>
    <div className="flex justify-center gap-4">
    <Button variant="outline" size="default" className="border-foreground" asChild>
    <a href="mailto:bewithmeyyappan@gmail.com" aria-label="Email Meyyappan">
    <Mail className="w-4 h-4 mr-2" />
    Email
    </a>
    </Button>
    <Button variant="outline" size="default" className="border-foreground" asChild>
    <a href="https://linkedin.com/in/Sonaa-Meyyappan" target="_blank" rel="noopener noreferrer">
    <Linkedin className="w-4 h-4 mr-2" />
    LinkedIn
    </a>
    </Button>
    </div>
    </div>

    {/* CO-FOUNDER - ADD YOUR DETAILS HERE */}
    <div className="bg-background border border-foreground p-8 md:p-12 rounded-2xl hover:shadow-xl transition-all">
    <div className="w-24 h-24 border border-foreground flex items-center justify-center mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20">
    <span className="text-3xl font-bold text-primary">MB</span> {/* Change initials */}
    </div>
    <h3 className="text-2xl font-bold text-foreground mb-2">Mohandass Bharathiraj</h3>
    <p className="text-foreground font-medium mb-6">Co-Founder & Technology Lead</p>
    <p className="text-muted-foreground leading-relaxed mb-8">
  Handles platform development and technical execution. Actively involved in all startup programs and solution planning.
    </p>
    <div className="flex justify-center gap-4">
    <Button variant="outline" size="default" className="border-foreground" asChild>
    <a href="mailto:mohandasssai23@gmail.com" aria-label="Email Co-Founder">
    <Mail className="w-4 h-4 mr-2" />
    Email
    </a>
    </Button>
    <Button variant="outline" size="default" className="border-foreground" asChild>
    <a href="https://linkedin.com/in/Mohandass-Bharathiraj" target="_blank" rel="noopener noreferrer">
    <Linkedin className="w-4 h-4 mr-2" />
    LinkedIn
    </a>
    </Button>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
  );
};

export default FounderSection;
