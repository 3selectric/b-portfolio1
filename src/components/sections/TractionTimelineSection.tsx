import { ArrowRight, Calendar, CheckCircle, Zap, Lightbulb } from "lucide-react";

const timeline = [
    {
        date: "2024",
        title: "Ideation & Early Validation",
        icon: Lightbulb,
        desc: "Identified critical gaps in India’s EV service and maintenance ecosystem and validated the problem with EV owners, fleet operators, and technicians.",
    },
{
    date: "2024",
    title: "Program Selections & Validation",
    icon: CheckCircle,
    desc: "Semi-Finalist at IIT Kharagpur Empresario, Finalist at Anna University Startify 3.0, and selected participant at NITK Surathkal Inno8 2024.",
},
{
    date: "2024",
    title: "Mentorship & Ecosystem Exposure",
    icon: Calendar,
    desc: "Engaged with mentors from IITs, NITK, and the Wadhwani ecosystem to refine problem–solution fit and understand fleet and EV servicing challenges.",
},
{
    date: "2024",
    title: "Solution Structuring & Planning",
    icon: ArrowRight,
    desc: "Designed service workflows for home visits, workshop repairs, and fleet maintenance, and planned a web-based booking and coordination platform.",
},
{
    date: "2025",
    title: "Current Focus",
    icon: Zap,
    desc: "Building the official business portfolio and outreach website and developing the initial service request and booking system.",
},
{
    date: "Next 3–6 Months",
    title: "Upcoming Milestones",
    icon: Zap,
    desc: "Launch pilot EV service operations, formalize technician onboarding and training, and establish early partnerships with fleet operators and EV stakeholders.",
},
];

const TractionTimelineSection = () => {
    return (
        <section id="traction" className="py-12 md:py-20 border-b border-foreground">
        <div className="container-narrow">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Traction & Milestones
        </h2>
        <p className="text-lg text-muted-foreground">
        From early validation to pilots – our journey so far.
        </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
        {/* Vertical line (only visible on desktop) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-primary/40 via-primary/70 to-secondary/40" />

        {timeline.map((item, index) => {
            const Icon = item.icon;
            const isEven = index % 2 === 0;

            return (
                <div
                key={index}
                className="relative flex items-center mb-16 last:mb-0"
                >
                {/* Mobile Layout */}
                <div className="md:hidden flex items-start w-full gap-4">
                <div className="relative flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 border-4 border-background flex items-center justify-center">
                <Icon className="w-6 h-6 text-primary" />
                </div>
                {index < timeline.length - 1 && (
                    <div className="absolute top-full left-1/2 w-0.5 h-16 -translate-x-1/2 bg-primary/40" />
                )}
                </div>

                <div className="flex-1">
                <div className="bg-background border border-foreground rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                <span className="text-sm font-semibold bg-primary/10 px-3 py-1 rounded-lg text-primary font-mono">
                {item.date}
                </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
                </div>
                </div>

                {/* Desktop Layout - Alternating sides */}
                <div className="hidden md:flex items-center w-full">
                {/* Left side (even indices) */}
                {isEven ? (
                    <div className="w-1/2 pr-8 text-right">
                    <div className="bg-background border border-foreground rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow inline-block max-w-md">
                    <div className="flex items-center gap-3 mb-3 justify-end">
                    <span className="text-sm font-semibold bg-primary/10 px-3 py-1 rounded-lg text-primary font-mono">
                    {item.date}
                    </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                    </div>
                ) : (
                    <div className="w-1/2" /> // Empty spacer
                )}

                {/* Centered Icon */}
                <div className="relative z-10 flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-background border-4 border-primary flex items-center justify-center shadow-md">
                <Icon className="w-7 h-7 text-primary" />
                </div>
                </div>

                {/* Right side (odd indices) */}
                {!isEven ? (
                    <div className="w-1/2 pl-8">
                    <div className="bg-background border border-foreground rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow inline-block max-w-md">
                    <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm font-semibold bg-primary/10 px-3 py-1 rounded-lg text-primary font-mono">
                    {item.date}
                    </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                    </div>
                ) : (
                    <div className="w-1/2" /> // Empty spacer
                )}
                </div>
                </div>
            );
        })}
        </div>
        </div>
        </section>
    );
};

export default TractionTimelineSection;
