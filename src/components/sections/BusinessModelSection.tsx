import { Wrench, GraduationCap, Package, Building2 } from "lucide-react";

const models = [
  {
    icon: Wrench,
    title: "Service Commissions",
    description: "Revenue from each service transaction processed through our network.",
  },
  {
    icon: GraduationCap,
    title: "Training Programs",
    description: "Paid certification courses for mechanics to become EV-skilled technicians.",
  },
  {
    icon: Package,
    title: "Spare Parts Margins",
    description: "Sourcing and supplying quality spare parts with competitive margins.",
  },
  {
    icon: Building2,
    title: "B2B & B2C Focus",
    description: "Serving both individual EV owners and commercial fleet operators.",
  },
];

const BusinessModelSection = () => {
  return (
    <section id="business-model" className="section-padding border-b border-foreground">
      <div className="container-narrow">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Business Model
          </h2>
          <p className="text-lg text-muted-foreground">
            A sustainable revenue model built around the EV service value chain.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {models.map((model, index) => (
            <div
            key={index}
            className="flex gap-4 p-6 bg-background border border-foreground rounded-2xl hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 border border-foreground flex items-center justify-center flex-shrink-0">
                <model.icon className="w-6 h-6 text-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {model.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {model.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessModelSection;
