const Footer = () => {
  return (
    <footer className="py-8 px-6 md:px-8 border-t border-foreground">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 border border-foreground flex items-center justify-center">
              <span className="text-foreground font-bold">3S</span>
            </div>
            <span className="font-semibold text-foreground">Electric Innovative Services</span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2025 3S Electric Innovative Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
