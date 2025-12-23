import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Send } from "lucide-react";

const chineseBrands = [
    "Okinawa",
"Ampere",
"Benling",
"Komaki",
"Pure EV", // Added as it's commonly mentioned
"Other",
];

const modelsByBrand: Record<string, string[]> = {
    Okinawa: ["Praise", "Ridge", "iPraise+", "Lite", "Dual", "Other"],
    Ampere: ["Magnus", "Reo", "Zeal", "Primus", "Nexus", "Other"],
    Benling: ["Falcon", "Aura", "Icon", "Kriti", "Other"],
    Komaki: ["SE", "DT 3000", "Venice", "XGT KM", "XGT X-One", "Other"],
    "Pure EV": ["Etrance Neo", "EPluto 7G", "ETron Plus", "Other"],
    Other: ["Other"],
};

const commonIssues = [
    "Battery not charging properly",
"Reduced range / low mileage",
"Scooter not starting or turning on",
"Warning lights or error codes on display",
"Strange noises (motor, brakes, etc.)",
"Brake issues or poor braking",
"Throttle/accelerator not responding well",
"Controller or wiring problems",
"Tyre puncture or wear",
"General service / maintenance check",
"Other issue",
];

const PilotServicePage = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [selectedIssues, setSelectedIssues] = useState<string[]>([]);

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        location: "",
        otherIssue: "",
        brandOther: "",
        modelOther: "",
        consent: false,
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleBrandChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setBrand(value);
        setModel(""); // Reset model when brand changes
    };

    const handleModelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setModel(e.target.value);
    };

    const handleIssueToggle = (issue: string) => {
        setSelectedIssues((prev) =>
        prev.includes(issue)
        ? prev.filter((i) => i !== issue)
        : [...prev, issue]
        );
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validation
        const phoneRegex = /^\d{10}$/;
        if (!formData.name.trim()) return toast({ title: "Name is required", variant: "destructive" });
        if (!phoneRegex.test(formData.phone)) return toast({ title: "Invalid phone number", description: "Enter a 10-digit mobile/WhatsApp number.", variant: "destructive" });
        if (!brand) return toast({ title: "Please select your EV brand", variant: "destructive" });
        if (!model) return toast({ title: "Please select your EV model", variant: "destructive" });
        if (selectedIssues.length === 0 && !formData.otherIssue.trim()) return toast({ title: "Please describe the issue", variant: "destructive" });
        if (!formData.location) return toast({ title: "Please select your location", variant: "destructive" });
        if (!formData.consent) return toast({ title: "Please agree to be contacted", variant: "destructive" });

        setIsSubmitting(true);

        // TODO: Connect to backend / GAS here (same as contact form)
        try {
            toast({
                title: "Request Submitted Successfully!",
                description: "We'll call you soon to confirm pilot service availability in your area.",
            });

            // Reset form
            setFormData({ name: "", phone: "", email: "", location: "", otherIssue: "", brandOther: "", modelOther: "", consent: false });
            setBrand("");
            setModel("");
            setSelectedIssues([]);
        } catch (err) {
            toast({ title: "Submission failed", description: "Try again or WhatsApp us directly.", variant: "destructive" });
        } finally {
            setIsSubmitting(false);
        }
    };

    const effectiveBrand = brand === "Other" && formData.brandOther ? formData.brandOther : brand;
    const effectiveModel = model === "Other" && formData.modelOther ? formData.modelOther : model;
    const effectiveIssues = selectedIssues.includes("Other issue") && formData.otherIssue
    ? [...selectedIssues.filter(i => i !== "Other issue"), formData.otherIssue]
    : selectedIssues;

    return (
        <>
        <Header />
        <main className="pt-24 pb-16 bg-background">
        <section className="section-padding border-b border-foreground">
        <div className="container-narrow text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
        Request Pilot Service for Your Chinese EV Scooter
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
        We're starting limited pilot services in <strong>Avadi, Ambattur, Thirumullaivoyal</strong> and nearby areas for Chinese-origin electric scooters (Okinawa, Ampere, Benling, Komaki, Pure EV, etc.).
        <br />
        Fill this quick form — we'll call you to check if we can help with your scooter.
        </p>
        </div>
        </section>

        <section className="section-padding">
        <div className="container-narrow max-w-2xl">
        <div className="bg-background border border-foreground p-8 md:p-10 rounded-2xl shadow-lg">
        <form className="space-y-7" onSubmit={handleSubmit}>
        {/* Name & Phone */}
        <div className="grid md:grid-cols-2 gap-6">
        <div>
        <Label htmlFor="name">Your Name *</Label>
        <Input
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Full name"
        required
        />
        </div>
        <div>
        <Label htmlFor="phone">Phone / WhatsApp Number *</Label>
        <Input
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="10-digit number"
        maxLength={10}
        required
        />
        </div>
        </div>

        {/* Email (optional) */}
        <div>
        <Label htmlFor="email">Email (optional – for updates)</Label>
        <Input
        id="email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="you@example.com"
        />
        </div>

        {/* Brand */}
        <div>
        <Label htmlFor="brand">EV Brand *</Label>
        <select
        id="brand"
        value={brand}
        onChange={handleBrandChange}
        className="w-full mt-2 bg-background border border-foreground rounded-lg px-4 py-3 text-foreground"
        required
        >
        <option value="">Select your brand</option>
        {chineseBrands.map((b) => (
            <option key={b} value={b}>{b}</option>
        ))}
        </select>
        {brand === "Other" && (
            <Input
            className="mt-4"
            name="brandOther"
            placeholder="Enter your brand name"
            value={formData.brandOther}
            onChange={handleChange}
            />
        )}
        </div>

        {/* Model */}
        <div>
        <Label htmlFor="model">EV Model *</Label>
        <select
        id="model"
        value={model}
        onChange={handleModelChange}
        className="w-full mt-2 bg-background border border-foreground rounded-lg px-4 py-3 text-foreground"
        disabled={!brand}
        required
        >
        <option value="">Select your model</option>
        {brand && modelsByBrand[brand]?.map((m) => (
            <option key={m} value={m}>{m}</option>
        ))}
        </select>
        {model === "Other" && (
            <Input
            className="mt-4"
            name="modelOther"
            placeholder="Enter your model name"
            value={formData.modelOther}
            onChange={handleChange}
            />
        )}
        </div>

        {/* Common Issues – Checkboxes */}
        <div>
        <Label>What problem are you facing? * (select all that apply)</Label>
        <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
        {commonIssues.map((issue) => (
            <div key={issue} className="flex items-center space-x-3">
            <Checkbox
            id={issue}
            checked={selectedIssues.includes(issue)}
            onCheckedChange={() => handleIssueToggle(issue)}
            />
            <label htmlFor={issue} className="text-sm text-foreground cursor-pointer">
            {issue}
            </label>
            </div>
        ))}
        </div>
        {selectedIssues.includes("Other issue") && (
            <Textarea
            className="mt-4"
            name="otherIssue"
            placeholder="Describe the other issue in detail..."
            rows={4}
            value={formData.otherIssue}
            onChange={handleChange}
            />
        )}
        </div>

        {/* Location */}
        <div>
        <Label htmlFor="location">Your Location *</Label>
        <select
        id="location"
        name="location"
        value={formData.location}
        onChange={handleChange}
        className="w-full mt-2 bg-background border border-foreground rounded-lg px-4 py-3 text-foreground"
        required
        >
        <option value="">Select area</option>
        <option value="Avadi">Avadi</option>
        <option value="Ambattur">Ambattur</option>
        <option value="Thirumullaivoyal">Thirumullaivoyal</option>
        <option value="Nearby area">Nearby area (please mention in notes if needed)</option>
        </select>
        </div>

        {/* Consent */}
        <div className="flex items-start gap-4">
        <Checkbox
        id="consent"
        checked={formData.consent}
        onCheckedChange={(checked) => setFormData(prev => ({ ...prev, consent: !!checked }))}
        required
        />
        <Label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed">
        I agree to be contacted by 3S Electric via call/WhatsApp for pilot service coordination. I understand this is a limited early-stage pilot.
        </Label>
        </div>

        {/* Hidden fields for backend */}
        <input type="hidden" name="brand" value={effectiveBrand} />
        <input type="hidden" name="model" value={effectiveModel} />
        <input type="hidden" name="issues" value={effectiveIssues.join(" | ")} />

        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit Request"}
        <Send className="ml-2 h-5 w-5" />
        </Button>
        </form>
        </div>
        </div>
        </section>
        </main>
        <Footer />
        </>
    );
};

export default PilotServicePage;
