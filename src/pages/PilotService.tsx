import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const chineseBrands = [
    "Okinawa",
"Benling",
"Komaki",
"Ampere",
"PurEV",
"Other",
];

const modelsByBrand: Record<string, string[]> = {
    Okinawa: ["Praise", "Ridge", "iPraise+", "Lite", "Other"],
    Benling: ["Falcon", "Aura", "Icon", "Kriti", "Other"],
    Komaki: ["SE", "DT 3000", "Venice", "XGT KM", "Other"],
    Ampere: ["Magnus", "Reo", "Zeal", "Primus", "Other"],
    PurEV: ["Etrance Neo", "EPluto 7G", "Other"],
    Other: ["Other"],
};

const PilotServicePage = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        issue: "",
        location: "",
        consent: false,
        brandOther: "",
        modelOther: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value, type, checked } = e.target as any;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleBrandChange = (
        e: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const value = e.target.value;
        setBrand(value);
        setModel("");
    };

    const handleModelChange = (
        e: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const value = e.target.value;
        setModel(value);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // simple validation
        const phoneRegex = /^\d{10}$/;

        if (!formData.name.trim()) {
            toast({ title: "Name is required", variant: "destructive" });
            return;
        }
        if (!phoneRegex.test(formData.phone)) {
            toast({
                title: "Invalid phone / WhatsApp number",
                description: "Enter a 10‑digit mobile number.",
                variant: "destructive",
            });
            return;
        }
        if (!brand) {
            toast({ title: "Select an EV brand", variant: "destructive" });
            return;
        }
        if (!model) {
            toast({ title: "Select an EV model", variant: "destructive" });
            return;
        }
        if (!formData.issue.trim()) {
            toast({
                title: "Issue description required",
                description: "Describe the issue with your EV.",
                variant: "destructive",
            });
            return;
        }
        if (!formData.location) {
            toast({
                title: "Select your location",
                variant: "destructive",
            });
            return;
        }
        if (!formData.consent) {
            toast({
                title: "Consent required",
                description: "Please confirm you agree to be contacted.",
                variant: "destructive",
            });
            return;
        }

        setIsSubmitting(true);

        try {
            // TODO: wire this to a dedicated GAS / backend endpoint
            // for now just show a toast
            toast({
                title: "Pilot request submitted",
                description: "Our team will contact you about pilot service slots.",
            });

            setFormData({
                name: "",
                phone: "",
                email: "",
                issue: "",
                location: "",
                consent: false,
                brandOther: "",
                modelOther: "",
            });
            setBrand("");
            setModel("");
        } catch (err) {
            toast({
                title: "Submission failed",
                description: "Please try again or contact us via email.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const effectiveBrand =
    brand === "Other" && formData.brandOther
    ? formData.brandOther
    : brand;

    const effectiveModel =
    model === "Other" && formData.modelOther
    ? formData.modelOther
    : model;

    return (
        <>
        <Header />
        <main className="pt-24 pb-16 bg-background">
        <section className="section-padding border-b border-foreground">
        <div className="container-narrow">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Pilot Service Request – Chinese EV Two‑Wheelers
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mb-8">
        This form is for early pilot customers around Avadi, Ambattur,
        and Thirumullaivoyal who want support for Chinese‑origin
        electric two‑wheelers.
        </p>
        </div>
        </section>

        <section className="section-padding">
        <div className="container-narrow max-w-2xl">
        <div className="bg-background border border-foreground p-8 md:p-10 rounded-2xl hover:shadow-xl transition-all duration-300">
        <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Name */}
        <div>
        <Label
        htmlFor="name"
        className="block text-sm font-medium text-foreground mb-2"
        >
        Name of the customer *
        </Label>
        <Input
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your full name"
        className="bg-background border-foreground"
        required
        />
        </div>

        {/* Phone */}
        <div>
        <Label
        htmlFor="phone"
        className="block text-sm font-medium text-foreground mb-2"
        >
        Phone / WhatsApp number *
        </Label>
        <Input
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="10‑digit mobile number"
        maxLength={10}
        className="bg-background border-foreground"
        />
        </div>

        {/* Email optional */}
        <div>
        <Label
        htmlFor="email"
        className="block text-sm font-medium text-foreground mb-2"
        >
        Email ID (optional)
        </Label>
        <Input
        id="email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="you@example.com"
        className="bg-background border-foreground"
        />
        </div>

        {/* Brand */}
        <div>
        <Label className="block text-sm font-medium text-foreground mb-2">
        EV brand (Chinese two‑wheeler) *
        </Label>
        <select
        value={brand}
        onChange={handleBrandChange}
        className="w-full bg-background border border-foreground rounded-md px-3 py-2 text-sm"
        >
        <option value="">Select brand</option>
        {chineseBrands.map((b) => (
            <option key={b} value={b}>
            {b}
            </option>
        ))}
        </select>
        {brand === "Other" && (
            <Input
            className="mt-3 bg-background border-foreground"
            name="brandOther"
            placeholder="Enter brand name"
            value={formData.brandOther}
            onChange={handleChange}
            />
        )}
        </div>

        {/* Model */}
        <div>
        <Label className="block text-sm font-medium text-foreground mb-2">
        Model of the EV two‑wheeler *
        </Label>
        <select
        value={model}
        onChange={handleModelChange}
        className="w-full bg-background border border-foreground rounded-md px-3 py-2 text-sm"
        disabled={!brand}
        >
        <option value="">Select model</option>
        {brand &&
            (modelsByBrand[brand] || []).map((m) => (
                <option key={m} value={m}>
                {m}
                </option>
            ))}
            </select>
            {model === "Other" && (
                <Input
                className="mt-3 bg-background border-foreground"
                name="modelOther"
                placeholder="Enter model name"
                value={formData.modelOther}
                onChange={handleChange}
                />
            )}
            </div>

            {/* Issue description */}
            <div>
            <Label
            htmlFor="issue"
            className="block text-sm font-medium text-foreground mb-2"
            >
            Issue / problem with the vehicle *
            </Label>
            <Textarea
            id="issue"
            name="issue"
            value={formData.issue}
            onChange={handleChange}
            placeholder="Describe the issue, warning lights, noise, range problems, etc."
            rows={5}
            className="bg-background border-foreground resize-none"
            />
            </div>

            {/* Location */}
            <div>
            <Label className="block text-sm font-medium text-foreground mb-2">
            Location (service area) *
            </Label>
            <select
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full bg-background border border-foreground rounded-md px-3 py-2 text-sm"
            >
            <option value="">Select location</option>
            <option value="Avadi">Avadi</option>
            <option value="Ambattur">Ambattur</option>
            <option value="Thirumullaivoyal">Thirumullaivoyal</option>
            <option value="Nearby area">Nearby area</option>
            </select>
            </div>

            {/* Consent */}
            <div className="flex items-start gap-3">
            <input
            id="consent"
            name="consent"
            type="checkbox"
            checked={formData.consent}
            onChange={handleChange}
            className="mt-1 h-4 w-4 border-foreground"
            />
            <Label
            htmlFor="consent"
            className="text-sm text-muted-foreground"
            >
            I agree to be contacted by 3S Electric for pilot service
            coordination and understand this is an early‑stage pilot
            service.
            </Label>
            </div>

            {/* Hidden effective values (if you later send to backend) */}
            <input type="hidden" name="brandFinal" value={effectiveBrand} />
            <input type="hidden" name="modelFinal" value={effectiveModel} />

            <Button
            type="submit"
            size="lg"
            className="w-full"
            disabled={isSubmitting}
            >
            {isSubmitting ? "Submitting..." : "Submit Pilot Request"}
            {/* You can add an icon if needed */}
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
