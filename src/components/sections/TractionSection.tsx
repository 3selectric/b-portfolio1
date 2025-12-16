import { Award, Building, Sparkles, FileCheck } from "lucide-react";

const milestones = [
  {
    icon: Award,
    title: "IIT Kharagpur Empresario",
    subtitle: "Semi-finalist",
  },
  {
    icon: Award,
    title: "BITS Pilani",
    subtitle: "Semi-finalist",
  },
  {
    icon: Sparkles,
    title: "SparkLab Program",
    subtitle: "Sri Sathya Sai Institute of Higher Learning",
  },
  {
    icon: FileCheck,
    title: "MSME Registration",
    subtitle: "Completed",
  },
];

const TractionSection = () => {
  return (
    <section id="traction" className="section-padding border-b border-foreground">
      <div className="container-narrow">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Traction & Journey
          </h2>
          <p className="text-lg text-muted-foreground">
            Building credibility through recognition and structured progress.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="text-center p-6 bg-background border border-foreground"
            >
              <div className="w-14 h-14 border border-foreground flex items-center justify-center mx-auto mb-4">
                <milestone.icon className="w-7 h-7 text-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">
                {milestone.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {milestone.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TractionSection;
