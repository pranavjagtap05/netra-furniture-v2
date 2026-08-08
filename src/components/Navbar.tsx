import { useState, useEffect } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Categories", href: "#categories" },
    { name: "Featured", href: "#featured" },
    { name: "About Us", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className={`font-serif text-2xl font-bold tracking-tight ${isScrolled ? "text-foreground" : "text-white"}`}>
              Netra
              <span className={`block text-xs font-sans tracking-widest uppercase font-normal mt-[-4px] ${isScrolled ? "text-primary/80" : "text-white/70"}`}>Furniture Mall</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`text-sm font-medium hover:text-primary transition-colors ${
                      isScrolled ? "text-muted-foreground" : "text-white/90 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-3 ml-4 border-l border-border/30 pl-6">
              <Button variant={isScrolled ? "outline" : "secondary"} size="sm" className="gap-2 rounded-full" asChild>
                <a href="https://wa.me/919552322288" target="_blank" rel="noreferrer">
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </Button>
              <Button size="sm" className="gap-2 rounded-full" asChild>
                <a href="tel:+919552322288">
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`lg:hidden p-2 -mr-2 ${isScrolled ? "text-foreground" : "text-white"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg animate-in slide-in-from-top-2">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-lg font-medium text-foreground hover:text-primary block py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <hr className="border-border my-2" />
            <div className="flex flex-col gap-3">
              <Button variant="outline" className="w-full justify-center gap-2" asChild>
                <a href="https://wa.me/919552322288" target="_blank" rel="noreferrer">
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Us</span>
                </a>
              </Button>
              <Button className="w-full justify-center gap-2" asChild>
                <a href="tel:+919552322288">
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
