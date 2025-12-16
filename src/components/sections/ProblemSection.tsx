import { AlertCircle, Clock, Users, Package } from "lucide-react";

const problems = [
  {
    icon: AlertCircle,
    title: "No Reliable Multi-Brand Service",
    description: "EV owners struggle to find service centers that can handle multiple brands under one roof.",
  },
  {
    icon: Clock,
    title: "Long Vehicle Downtime",
    description: "Fleet operators face extended wait times, impacting business operations and revenue.",
  },
  {
    icon: Users,
    title: "Shortage of Skilled Mechanics",
    description: "Traditional mechanics lack EV-specific training, creating a massive skill gap in the market.",
  },
  {
    icon: Package,
    title: "Fragmented Spare Parts",
    description: "Inconsistent spare parts availability leads to delays and unreliable service experiences.",
  },
];

const ProblemSection = () => {
  return (
    <section id="problem" className="section-padding border-b border-foreground">
      <div className="container-narrow">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            The Problem
          </h2>
          <p className="text-lg text-muted-foreground">
            India's EV revolution is being held back by a fragmented and unreliable service ecosystem.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group p-6 md:p-8 bg-background border border-foreground"
            >
              <div className="w-12 h-12 border border-foreground flex items-center justify-center mb-4">
                <problem.icon className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
