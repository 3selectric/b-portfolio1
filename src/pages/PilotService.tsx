import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";
import { Send } from "lucide-react";

const chineseBrands = [
    "Okinawa",
"Ampere",
"Pure EV",
"Komaki",
"Benling",
"Okaya",
"Hero Electric",
"Other",
];

const modelsByBrand: Record<string, string[]> = {
    Okinawa: ["Praise Pro", "Ridge+", "iPraise+", "Okhi-90", "Lite", "Dual", "R30", "Other"],
    Ampere: ["Magnus EX", "Reo Plus", "Zeal EX", "Primus", "Nexus", "Other"],
    "Pure EV": ["EPluto 7G", "ETrance Neo", "ETron Plus", "ecuDryft", "Other"],
    Komaki: ["Venice", "XGT X-One", "SE", "DT 3000", "XGT KM", "Flora", "Cat 2.0", "Other"],
    Benling: ["Aura", "Icon", "Falcon", "Kriti", "Other"],
    Okaya: ["Faast F2B", "Freedum", "Classiq", "Evok", "Other"],
    "Hero Electric": ["Optima CX", "Photon HX", "Nyx HX", "Atria", "Other"],
    Revolt: ["RV400", "RV300", "Other"],
    Ather: ["450X", "450 Plus", "Rizta", "Other"],
    Other: ["Other"],
};

const commonIssues = [
    "Battery not charging or slow charging",
"Reduced range (less km per charge than expected)",
"Scooter not starting or sudden power loss",
"Warning lights / error codes on display",
"Strange noises from motor, controller or brakes",
"Brake problems (soft brakes or not working properly)",
"Throttle / accelerator not responding smoothly",
"Controller faults or overheating",
"Headlight, indicators or display not working",
"Tyre issues or general maintenance needed",
"Other issue (please describe below)",
];

const PilotServicePage = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formStartTime, setFormStartTime] = useState(0);

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
        website: "", // Honeypot
        consent: false,
    });

    useEffect(() => {
        setFormStartTime(Date.now());
    }, []);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value, type } = e.target;
        if (type === "checkbox") {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData((prev) => ({ ...prev, [name]: checked }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleBrandChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setBrand(e.target.value);
        setModel("");
    };

    const handleModelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setModel(e.target.value);
    };

    const handleIssueToggle = (issue: string) => {
        setSelectedIssues((prev) =>
        prev.includes(issue) ? prev.filter((i) => i !== issue) : [...prev, issue]
        );
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // 1. Time delay (anti-bot)
        if (Date.now() - formStartTime < 5000) {
            toast({
                title: "Please wait",
                description: "Fill the form completely before submitting.",
                variant: "destructive",
            });
            return;
        }

        // 2. Honeypot
        if (formData.website.trim()) {
            // bot: silently exit
            return;
        }

        // 3. Validation
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
        if (selectedIssues.length === 0) {
            toast({
                title: "Select at least one issue",
                variant: "destructive",
            });
            return;
        }
        if (
            selectedIssues.includes("Other issue (please describe below)") &&
            !formData.otherIssue.trim()
        ) {
            toast({
                title: "Describe the other issue",
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
                description: "Please agree to be contacted for the pilot.",
                variant: "destructive",
            });
            return;
        }

        setIsSubmitting(true);

        const formDataToSend = new FormData();
        formDataToSend.append("name", formData.name.trim());
        formDataToSend.append("phone", formData.phone.trim());
        formDataToSend.append("email", formData.email.trim() || "N/A");
        formDataToSend.append(
            "brand",
            brand === "Other" ? formData.brandOther.trim() || "Other" : brand
        );
        formDataToSend.append(
            "model",
            model === "Other" ? formData.modelOther.trim() || "Other" : model
        );
        formDataToSend.append("issues", selectedIssues.join(" | "));
        formDataToSend.append(
            "otherIssue",
            formData.otherIssue.trim() || "N/A"
        );
        formDataToSend.append("location", formData.location);
        formDataToSend.append("website", formData.website); // Honeypot

        try {
            const isLocalhost =
            window.location.hostname.includes("localhost") ||
            window.location.hostname === "127.0.0.1";

            await fetch(
                "https://script.google.com/macros/s/AKfycbxQ_pOo5MrWsSJyxkekDiaJh12CQSTnbH-319W7o_534PLFY1pxDsT9KzSgIC078SSV/exec",
                {
                    method: "POST",
                    body: formDataToSend,
                    mode: isLocalhost ? "cors" : "no-cors",
                    redirect: "follow",
                }
            );

            toast({
                title: "Request Submitted Successfully!",
                description: "Thank you! We'll contact you soon via call/WhatsApp.",
            });

            // Reset form
            setFormData({
                name: "",
                phone: "",
                email: "",
                location: "",
                otherIssue: "",
                brandOther: "",
                modelOther: "",
                website: "",
                consent: false,
            });
            setBrand("");
            setModel("");
            setSelectedIssues([]);
            setFormStartTime(Date.now());
        } catch (err) {
            toast({
                title: "Submission failed",
                description: "Try again or contact via WhatsApp.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
        <Header />
        <main className="pt-24 pb-16 bg-background">
        <section className="section-padding border-b border-foreground">
        <div className="container-narrow text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
        Pilot Service Request for Your Electric Scooter
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
        We're offering limited pilot repair & maintenance services in{" "}
        <strong>Avadi, Ambattur, Thirumullaivoyal</strong> and nearby
        areas.
        <br />
        Specializing in popular brands like Okinawa, Ampere, Pure EV,
        Komaki, Benling, Okaya, Hero Electric, and more.
        </p>
        </div>
        </section>

        <section className="section-padding">
        <div className="container-narrow max-w-2xl">
        <div className="bg-background border border-foreground p-8 md:p-10 rounded-2xl shadow-lg">
        <form className="space-y-7" onSubmit={handleSubmit}>
        {/* Honeypot - hidden from users */}
        <div className="hidden">
        <Input
        name="website"
        value={formData.website}
        onChange={handleChange}
        tabIndex={-1}
        />
        </div>

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

        {/* Email */}
        <div>
        <Label htmlFor="email">Email (optional)</Label>
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
        <Label>EV Brand *</Label>
        <select
        className="w-full mt-2 bg-background border border-foreground rounded-lg px-4 py-3"
        value={brand}
        onChange={handleBrandChange}
        required
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
            className="mt-4"
            name="brandOther"
            placeholder="Enter brand name"
            value={formData.brandOther}
            onChange={handleChange}
            required
            />
        )}
        </div>

        {/* Model */}
        <div>
        <Label>EV Model *</Label>
        <select
        className="w-full mt-2 bg-background border border-foreground rounded-lg px-4 py-3"
        value={model}
        onChange={handleModelChange}
        disabled={!brand}
        required
        >
        <option value="">Select model</option>
        {brand &&
            modelsByBrand[brand]?.map((m) => (
                <option key={m} value={m}>
                {m}
                </option>
            ))}
            </select>
            {model === "Other" && (
                <Input
                className="mt-4"
                name="modelOther"
                placeholder="Enter model name"
                value={formData.modelOther}
                onChange={handleChange}
                required
                />
            )}
            </div>

            {/* Issues */}
            <div>
            <Label>
            What issues are you facing? * (select all that apply)
            </Label>
            <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
            {commonIssues.map((issue) => (
                <div
                key={issue}
                className="flex items-center space-x-3"
                >
                <Checkbox
                checked={selectedIssues.includes(issue)}
                onCheckedChange={() => handleIssueToggle(issue)}
                />
                <label className="text-sm text-foreground cursor-pointer">
                {issue}
                </label>
                </div>
            ))}
            </div>
            {selectedIssues.includes(
                "Other issue (please describe below)"
            ) && (
                <Textarea
                className="mt-4"
                name="otherIssue"
                placeholder="Describe the other issue in detail..."
                rows={4}
                value={formData.otherIssue}
                onChange={handleChange}
                required
                />
            )}
            </div>

            {/* Location */}
            <div>
            <Label>Your Location *</Label>
            <select
            name="location"
            className="w-full mt-2 bg-background border border-foreground rounded-lg px-4 py-3"
            value={formData.location}
            onChange={handleChange}
            required
            >
            <option value="">Select area</option>
            <option value="Avadi">Avadi</option>
            <option value="Ambattur">Ambattur</option>
            <option value="Thirumullaivoyal">Thirumullaivoyal</option>
            <option value="Nearby area">Nearby area</option>
            </select>
            </div>

            {/* Consent */}
            <div className="flex items-start gap-4">
            <Checkbox
            id="consent"
            checked={formData.consent}
            onCheckedChange={(c) =>
                setFormData((prev) => ({ ...prev, consent: !!c }))
            }
            required
            />
            <Label
            htmlFor="consent"
            className="text-sm text-muted-foreground leading-relaxed"
            >
            I agree to be contacted via call/WhatsApp for pilot service
            coordination. I understand this is a limited early-stage
            pilot.
            </Label>
            </div>

            <Button
            type="submit"
            size="lg"
            className="w-full"
            disabled={isSubmitting}
            >
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
