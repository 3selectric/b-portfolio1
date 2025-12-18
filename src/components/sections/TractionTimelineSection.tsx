import { ArrowRight, Calendar, CheckCircle, Zap, Lightbulb } from "lucide-react";

const timeline = [
    {
        date: "2024",
        title: "Ideation & Early Validation",
        icon: Lightbulb,
        desc:
        "Identified critical gaps in India’s EV service and maintenance ecosystem and validated the problem with EV owners, fleet operators, and technicians.",
    },
{
    date: "2024",
    title: "Program Selections & Validation",
    icon: CheckCircle,
    desc:
    "Semi-Finalist at IIT Kharagpur Empresario, Finalist at Anna University Startify 3.0, and selected participant at NITK Surathkal Inno8 2024.",
},
{
    date: "2024",
    title: "Mentorship & Ecosystem Exposure",
    icon: Calendar,
    desc:
    "Engaged with mentors from IITs, NITK, and the Wadhwani ecosystem to refine problem–solution fit and understand fleet and EV servicing challenges.",
},
{
    date: "2024",
    title: "Solution Structuring & Planning",
    icon: ArrowRight,
    desc:
    "Designed service workflows for home visits, workshop repairs, and fleet maintenance, and planned a web-based booking and coordination platform.",
},
{
    date: "2025",
    title: "Current Focus",
    icon: Zap,
    desc:
    "Building the official business portfolio and outreach website and developing the initial service request and booking system.",
},
{
    date: "Next 3–6 Months",
    title: "Upcoming Milestones",
    icon: Zap,
    desc:
    "Launch pilot EV service operations, formalize technician onboarding and training, and establish early partnerships with fleet operators and EV stakeholders.",
},
];

const TractionTimelineSection = () => {
    return (
        <section id="traction" className="section-padding border-b border-foreground">
        <div className="container-narrow">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Traction & Milestones
        </h2>
        <p className="text-lg text-muted-foreground">
        From early validation to pilots – our journey so far.
        </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute left-8 md:left-1/2 top-0 h-full w-px bg-gradient-to-b from-primary/30 to-secondary/30" />

        {timeline.map((item, index) => (
            <div
            key={index}
            className={`flex items-start mb-12 ${
                index % 2 === 0 ? "justify-end" : "justify-start"
            }`}
            >
            <div
            className={`w-11/12 md:w-5/12 px-6 ${
                index % 2 === 0 ? "ml-auto" : ""
            }`}
            >
            <div className="bg-background border border-foreground rounded-2xl p-6 hover:shadow-xl transition-all duration-300 relative">
            {/* Timeline Dot */}
            <div className="absolute -left-6 top-6 md:-left-1/2 md:-translate-x-1/2 w-4 h-4 bg-primary border-4 border-background rounded-full" />

            <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-primary/10 border-2 border-primary rounded-xl flex items-center justify-center flex-shrink-0">
            <item.icon className="w-5 h-5 text-primary" />
            </div>
            <span className="text-sm font-semibold bg-primary/10 px-2 py-1 rounded-lg text-primary font-mono">
            {item.date}
            </span>
            </div>

            <h3 className="text-xl font-bold text-foreground mb-2">
            {item.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
            {item.desc}
            </p>
            </div>
            </div>
            </div>
        ))}
        </div>
        </div>
        </section>
    );
};

export default TractionTimelineSection;
