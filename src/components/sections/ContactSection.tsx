import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Linkedin, Send } from "lucide-react";

const GOOGLE_SCRIPT_URL =
"https://script.google.com/macros/s/AKfycbylMlRmSjHCJ5V0a4uHd7z_5CqX00Lu3NMyy6VZCRObHtoZJ7hc_28nEYydc_jtdCxW/exec";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // With no-cors you can't reliably read response, so assume success
      toast({
        title: "Message sent!",
        description: "Thank you! We'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Oops!",
        description:
        "Something went wrong. Please try again or email us directly.",
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
    Interested in discussing EV service innovation in India? Get in
    touch.
    </p>
    </div>

    <div className="bg-background border border-foreground p-8 md:p-10 rounded-2xl hover:shadow-xl transition-all duration-300">
    <form onSubmit={handleSubmit} className="space-y-6">
    <div className="grid sm:grid-cols-2 gap-4">
    <div>
    <label
    htmlFor="name"
    className="block text-sm font-medium text-foreground mb-2"
    >
    Name
    </label>
    <Input
    id="name"
    name="name"
    value={formData.name}
    onChange={handleChange}
    placeholder="Your name"
    required
    className="bg-background border-foreground"
    />
    </div>
    <div>
    <label
    htmlFor="email"
    className="block text-sm font-medium text-foreground mb-2"
    >
    Email
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
    <label
    htmlFor="message"
    className="block text-sm font-medium text-foreground mb-2"
    >
    Message
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

    <Button
    type="submit"
    size="lg"
    className="w-full"
    disabled={isSubmitting}
    >
    {isSubmitting ? "Sending..." : "Send Message"}
    <Send className="w-4 h-4 ml-2" />
    </Button>
    </form>

    <div className="flex items-center justify-center gap-6 mt-8 pt-8 border-t border-foreground">
    <a
    href="mailto:3selectric2024@gmail.com"
    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
    >
    <Mail className="w-5 h-5" />
    <span className="text-sm">3selectric2024@gmail.com</span>
    </a>
    <a
    href="https://www.linkedin.com/company/3selectric-innovative-services/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
    >
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
