import { CheckCircle2, ArrowDown } from "lucide-react";

const solutions = [
  "Network of multi-brand EV service centers",
  "Training & upskilling traditional mechanics for EVs",
  "Centralized service management system",
  "Faster service with lower downtime",
];

const SolutionSection = () => {
  return (
    <section id="solution" className="section-padding border-b border-foreground">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Description */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our Solution
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              3S Electric is building a unified EV service ecosystem that connects EV owners and fleet operators with trained service partners, ensuring reliable and fast maintenance across all brands.
            </p>
            
            <ul className="space-y-4 pt-2">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{solution}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Flow Diagram */}
          <div className="border border-foreground p-8 md:p-10">
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="border border-foreground p-5">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 border border-foreground flex items-center justify-center text-sm font-semibold">
                    1
                  </span>
                  <div>
                    <h4 className="font-semibold text-foreground">EV Owner / Fleet</h4>
                    <p className="text-sm text-muted-foreground">Raises service request</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <ArrowDown className="w-6 h-6 text-foreground" />
              </div>

              {/* Step 2 */}
              <div className="bg-foreground p-5">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 border border-background flex items-center justify-center text-sm font-semibold text-background">
                    2
                  </span>
                  <div>
                    <h4 className="font-semibold text-background">3S Electric Platform</h4>
                    <p className="text-sm text-background/70">Connects & coordinates</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <ArrowDown className="w-6 h-6 text-foreground" />
              </div>

              {/* Step 3 */}
              <div className="border border-foreground p-5">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 border border-foreground flex items-center justify-center text-sm font-semibold">
                    3
                  </span>
                  <div>
                    <h4 className="font-semibold text-foreground">Trained Service Partner</h4>
                    <p className="text-sm text-muted-foreground">Faster, verified service</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
