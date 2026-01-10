import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Problem", href: "#problem" },
{ label: "Solution", href: "#solution" },
{ label: "Business Model", href: "#business-model" },
{ label: "Traction", href: "#traction" },
{ label: "Recognition", href: "#recognition" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth" });
  };

  const handleSectionClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);

    if (location.pathname === "/") {
      // already on home – just scroll
      scrollToSection(sectionId);
    } else {
      // go to home route, then scroll after mount
      navigate("/");
      setTimeout(() => scrollToSection(sectionId), 80);
    }
  };

  const scrollToContact = () => {
    setIsMobileMenuOpen(false);

    if (location.pathname === "/") {
      scrollToSection("contact");
    } else {
      navigate("/");
      setTimeout(() => scrollToSection("contact"), 80);
    }
  };

  const goToPilotService = () => {
    setIsMobileMenuOpen(false);
    navigate("/pilot-service");
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
    <div className="flex items-center justify-between gap-4">
    {/* Logo + Name */}
    <button
    type="button"
    onClick={() => {
      navigate("/");
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50);
    }}
    className="flex items-center gap-2"
    >
    <div className="w-9 h-9 border border-foreground flex items-center justify-center">
    <span className="text-foreground font-bold text-lg">3S</span>
    </div>
    <span className="font-bold text-lg text-foreground">
    Electric Innovative Services
    </span>
    </button>

    {/* Desktop Navigation */}
    <nav className="hidden md:flex items-center gap-6">
    {navLinks.map((link) => (
      <button
      key={link.href}
      type="button"
      onClick={() =>
        handleSectionClick(link.href.replace("#", ""))
      }
      className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
      >
      {link.label}
      </button>
    ))}
    </nav>

    {/* Desktop CTAs */}
    <div className="hidden md:flex items-center gap-2">
    <Button variant="default" size="sm" onClick={scrollToContact}>
    Talk to Us
    </Button>
    <Button variant="outline" size="sm" onClick={goToPilotService}>
    Pilot
    </Button>
    </div>

    {/* Mobile Menu Toggle */}
    <button
    className="md:hidden p-2 text-foreground"
    onClick={() => setIsMobileMenuOpen((v) => !v)}
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
      {[...navLinks, /*{ label: "Founder", href: "#founder" }*/].map(
        (link) => (
          <button
          key={link.href}
          type="button"
          onClick={() =>
            handleSectionClick(link.href.replace("#", ""))
          }
          className="block w-full text-left text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
          {link.label}
          </button>
        )
      )}

      <Button
      variant="default"
      className="w-full mt-4"
      onClick={scrollToContact}
      >
      Talk to Us
      </Button>
      <Button
      variant="outline"
      className="w-full mt-3"
      onClick={goToPilotService}
      >
      Pilot
      </Button>
      </nav>
    )}
    </div>
    </header>
  );
};

export default Header;
