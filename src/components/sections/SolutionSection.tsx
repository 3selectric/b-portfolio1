import { CheckCircle2, ArrowDown } from "lucide-react";

const solutions = [
  "Network of multi-brand EV service centers.",
"Training and upskilling traditional mechanics for EVs.",
"Centralized service management and tracking.",
"Faster service with reduced downtime.",
];

const offerCards = [
  {
    title: "Multi-Brand EV Servicing",
    body: "Structured service support for electric two-wheelers and fleets.",
  },
{
  title: "Fleet Maintenance Support",
  body: "Reduced downtime through planned maintenance and quick issue resolution.",
},
{
  title: "Mechanic Upskilling",
  body: "Training programs to transition traditional mechanics into EV specialists.",
},
];

const SolutionSection = () => {
  return (
    <section id="solution" className="section-padding border-b border-foreground">
    <div className="container-narrow space-y-12">
    {/* Top: Solution + Flow */}
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
    {/* Left: Description */}
    <div className="space-y-6">
    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
    Our Solution
    </h2>
    <p className="text-lg text-muted-foreground leading-relaxed">
    3S Electric is building a unified EV service ecosystem that connects
    EV owners and fleet operators with trained service partners,
    ensuring reliable and fast maintenance across all brands.
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
    <div className="border border-foreground p-8 md:p-10 rounded-2xl hover:shadow-xl transition-all duration-300">
    <div className="space-y-6">
    {/* Step 1 */}
    <div className="border border-foreground p-5 rounded-2xl hover:shadow-xl transition-all duration-300">
    <div className="flex items-center gap-3">
    <span className="w-8 h-8 border border-foreground flex items-center justify-center text-sm font-semibold">
    1
    </span>
    <div>
    <h4 className="font-semibold text-foreground">
    EV Owner / Fleet
    </h4>
    <p className="text-sm text-muted-foreground">
    Raises a service request.
    </p>
    </div>
    </div>
    </div>

    <div className="flex justify-center">
    <ArrowDown className="w-6 h-6 text-foreground" />
    </div>

    {/* Step 2 */}
    <div className="bg-foreground p-5 rounded-2xl hover:shadow-xl transition-all duration-300">
    <div className="flex items-center gap-3">
    <span className="w-8 h-8 border border-background flex items-center justify-center text-sm font-semibold text-background">
    2
    </span>
    <div>
    <h4 className="font-semibold text-background">
    3S Electric Platform
    </h4>
    <p className="text-sm text-background/70">
    Connects, assigns and coordinates service.
    </p>
    </div>
    </div>
    </div>

    <div className="flex justify-center">
    <ArrowDown className="w-6 h-6 text-foreground" />
    </div>

    {/* Step 3 */}
    <div className="border border-foreground p-5 rounded-2xl hover:shadow-xl transition-all duration-300">
    <div className="flex items-center gap-3">
    <span className="w-8 h-8 border border-foreground flex items-center justify-center text-sm font-semibold">
    3
    </span>
    <div>
    <h4 className="font-semibold text-foreground">
    Trained Service Partner
    </h4>
    <p className="text-sm text-muted-foreground">
    Delivers faster, verified service.
    </p>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>

    {/* Bottom: What We Offer */}
    <div className="space-y-6">
    <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
    What We Offer...
    </h3>
    <div className="grid gap-6 md:grid-cols-3">
    {offerCards.map((card, index) => (
      <div
      key={index}
      className="border border-foreground rounded-2xl p-6 h-full flex flex-col justify-between hover:shadow-xl transition-all duration-300"
      >
      <div>
      <h4 className="text-lg font-semibold text-foreground mb-3">
      {card.title}
      </h4>
      <p className="text-sm text-muted-foreground">
      {card.body}
      </p>
      </div>
      </div>
    ))}
    </div>
    </div>
    </div>
    </section>
  );
};

export default SolutionSection
