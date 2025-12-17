import { ArrowRight, Calendar, CheckCircle, Zap, Lightbulb } from "lucide-react";

const timeline = [
    { date: "Jan 2024", title: "Idea Born", icon: Lightbulb, desc: "Identified EV service gap in India" },
{ date: "Mar 2024", title: "MSME Registered", icon: CheckCircle, desc: "Official business registration completed" },
{ date: "Jun 2024", title: "Startup Competitions", icon: Calendar, desc: "Entered IIT Kharagpur & BITS Pilani challenges" },
{ date: "Sep 2024", title: "SparkLab Accepted", icon: ArrowRight, desc: "Joined accelerator program" },
{ date: "Dec 2024", title: "Portfolio Launched", icon: Zap, desc: "3SElectric goes public online" },
{ date: "Dec 2025", title: "Scaling Phase", icon: Zap, desc: "Building nationwide service network" },
];

const TractionTimelineSection = () => {
    return (
        <section id="traction" className="section-padding border-b border-foreground">
        <div className="container-narrow">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Traction Timeline</h2>
        <p className="text-lg text-muted-foreground">From idea to execution - our journey.</p>
        </div>

        <div className="relative max-w-3xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute left-8 md:left-1/2 top-0 h-full w-px bg-gradient-to-b from-primary/30 to-secondary/30"></div>

        {timeline.map((item, index) => (
            <div key={index} className={`flex items-start mb-12 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
            <div className={`w-11/12 md:w-5/12 px-6 ${index % 2 === 0 ? 'ml-auto' : ''}`}>
            <div className="bg-background border border-foreground rounded-2xl p-6 hover:shadow-xl transition-all duration-300 relative">
            {/* Timeline Dot */}
            <div className="absolute -left-6 top-6 md:-left-1/2 md:-translate-x-1/2 w-4 h-4 bg-primary border-4 border-background rounded-full"></div>

            <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-primary/10 border-2 border-primary rounded-xl flex items-center justify-center flex-shrink-0">
            <item.icon className="w-5 h-5 text-primary" />
            </div>
            <span className="text-sm font-semibold bg-primary/10 px-2 py-1 rounded-lg text-primary font-mono">
            {item.date}
            </span>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
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
