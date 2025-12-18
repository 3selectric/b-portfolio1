import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Linkedin, Send } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    website: "", // ← website
    phone: "",
  });
  const [formStartTime, setFormStartTime] = useState(0);

  useEffect(() => {
    setFormStartTime(Date.now());
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // 1. TIME DELAY CHECK
    if (Date.now() - formStartTime < 5000) {
      toast({
        title: "Please wait",
        description: "Fill form completely (5s min).",
            variant: "destructive"
      });
      return;
    }

    // 2. Website CHECK
    if (formData.website.trim()) {
      console.log("wrong - website");
      return;
    }

    // 3. VALIDATION
    // 3. VALIDATION
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    if (!formData.name || formData.name.length < 2) {
      toast({ title: "Name too short", variant: "destructive" });
      return;
    }

    if (!emailRegex.test(formData.email)) {
      toast({ title: "Invalid email", variant: "destructive" });
      return;
    }

    // Phone: must be exactly 10 digits
    if (!phoneRegex.test(formData.phone)) {
      toast({
        title: "Invalid phone number",
        description: "Please enter a 10‑digit mobile number.",
        variant: "destructive",
      });
      return;
    }

    if (formData.message.length < 10) {
      toast({ title: "Message too short", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("message", formData.message);
    formDataToSend.append("website", formData.website);
    formDataToSend.append("phone", formData.phone || "");

    try {
      // NEW GAS DEPLOYMENT URL
      const isLocalhost = window.location.hostname.includes('localhost') ||
      window.location.hostname === '127.0.0.1';

      await fetch(
        "https://script.google.com/macros/s/AKfycbzswhD2w9PfqIXNy-Crpx8nlvLx0rGEGxFb_dGW7nM2LfxVu8okAjenFDuO9cfg1Dr0/exec",
        {
          method: "POST",
          body: formDataToSend,
          ...(isLocalhost ? {} : { mode: "no-cors" })
        }
      );

      console.log("SUCCESS");
      toast({
        title: "Message Sent!",
        description: "Saved to records, will Reply within 24hrs.",
      });
      setFormData({ name: "", email: "", message: "", website: "", phone: "" });
      setFormStartTime(Date.now());
    } catch (error) {
      console.error("ERROR:", error);
      toast({
        title: "Failed",
        description: "Email: 3selectric2024@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="section-padding">
    <div className="container-narrow">
    <div className="max-w-2xl mx-auto">
    <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
    Let's Connect
    </h2>
    <p className="text-lg text-muted-foreground">
    Interested in discussing EV service innovation in India?
    </p>
    </div>

    <div className="bg-background border border-foreground p-8 md:p-10 rounded-2xl hover:shadow-xl transition-all duration-300">
    <form onSubmit={handleSubmit} className="space-y-6">
    {/* website */}
    <div className="h-0 w-0 overflow-hidden p-0 m-0 border-0" aria-hidden="true">
    <Input
    id="website"
    name="website"
    value={formData.website}
    onChange={handleChange}
    className="opacity-0 h-0 w-0 border-transparent bg-transparent"
    tabIndex={-1}
    aria-hidden="true"
    />
    </div>

    <div className="grid sm:grid-cols-2 gap-4">
    <div>
    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
    Name *
    </label>
    <Input
    id="name"
    name="name"
    value={formData.name}
    onChange={handleChange}
    placeholder="Your full name"
    required
    className="bg-background border-foreground"
    />
    </div>
    <div>
    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
    Email *
    </label>
    <Input
    id="email"
    name="email"
    type="email"
    value={formData.email}
    onChange={handleChange}
    placeholder="you@example.com"
    required
    className="bg-background border-foreground"
    />
    </div>
    </div>

    <div>
    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
    Phone (optional)
    </label>
    <Input
    id="phone"
    name="phone"
    type="tel"
    value={formData.phone}
    onChange={handleChange}
    placeholder="xxxxx xxxxx"
    maxLength={10}
    className="bg-background border-foreground"
    />
    </div>

    <div>
    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
    Message *
    </label>
    <Textarea
    id="message"
    name="message"
    value={formData.message}
    onChange={handleChange}
    placeholder="Tell us about your interest in 3S Electric..."
    rows={5}
    required
    className="bg-background border-foreground resize-none"
    />
    </div>

    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
    {isSubmitting ? "Sending..." : "Send Message"}
    <Send className="w-4 h-4 ml-2" />
    </Button>
    </form>

    <div className="flex items-center justify-center gap-6 mt-8 pt-8 border-t border-foreground">
    <a href="mailto:3selectric2024@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
    <Mail className="w-5 h-5" />
    <span className="text-sm">3selectric2024@gmail.com</span>
    </a>
    <a href="https://www.linkedin.com/company/3selectric-innovative-services/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
    <Linkedin className="w-5 h-5" />
    <span className="text-sm">LinkedIn</span>
    </a>
    </div>
    </div>
    </div>
    </div>
    </section>
  );
};

export default ContactSection;
