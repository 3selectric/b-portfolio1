import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Problem", href: "#problem" },
{ label: "Solution", href: "#solution" },
{ label: "Business Model", href: "#business-model" },
{ label: "Traction", href: "#traction" },
{ label: "Recognition", href: "#recognition" },
{ label: "Founder", href: "#founder" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
    className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-foreground ${
      isScrolled
      ? "bg-background/95 backdrop-blur-md py-3"
      : "bg-background py-5"
    }`}
    >
    <div className="container-narrow px-6 md:px-8">
    <div className="flex items-center justify-between">
    {/* Logo */}
    <a href="#" className="flex items-center gap-2">
    <div className="w-9 h-9 border border-foreground flex items-center justify-center">
    <span className="text-foreground font-bold text-lg">3S</span>
    </div>
    <span className="font-bold text-lg text-foreground">
    Electric Innovative Services
    </span>
    </a>

    {/* Desktop Navigation */}
    <nav className="hidden md:flex items-center gap-8">
    {navLinks.map((link) => (
      <a
      key={link.href}
      href={link.href}
      className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
      >
      {link.label}
      </a>
    ))}
    </nav>

    {/* CTA Button */}
    <div className="hidden md:block">
    <Button variant="default" onClick={scrollToContact}>
    Talk to Us
    </Button>
    </div>

    {/* Mobile Menu Toggle */}
    <button
    className="md:hidden p-2 text-foreground"
    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    aria-label="Toggle menu"
    >
    {isMobileMenuOpen ? (
      <X className="w-6 h-6" />
    ) : (
      <Menu className="w-6 h-6" />
    )}
    </button>
    </div>

    {/* Mobile Menu */}
    {isMobileMenuOpen && (
      <nav className="md:hidden pt-6 pb-4 space-y-4">
      {navLinks.map((link) => (
        <a
        key={link.href}
        href={link.href}
        className="block text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
        onClick={() => setIsMobileMenuOpen(false)}
        >
        {link.label}
        </a>
      ))}
      <Button
      variant="default"
      className="w-full mt-4"
      onClick={scrollToContact}
      >
      Talk to Us
      </Button>
      </nav>
    )}
    </div>
    </header>
  );
};

export default Header;
