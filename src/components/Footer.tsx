import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sidebar border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <span className="font-serif text-2xl font-bold tracking-tight text-foreground">
              Netra
              <span className="block text-xs font-sans tracking-widest uppercase font-normal text-primary mt-[-4px]">Furniture Mall</span>
            </span>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs pt-2">
              Transforming houses into homes with premium quality furniture crafted for comfort and elegance. Uruli Kanchan's trusted destination.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <a href="#" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-6 uppercase tracking-wide text-sm">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors text-sm">About Us</a></li>
              <li><a href="#categories" className="text-muted-foreground hover:text-primary transition-colors text-sm">Our Collections</a></li>
              <li><a href="#featured" className="text-muted-foreground hover:text-primary transition-colors text-sm">Featured Products</a></li>
              <li><a href="#gallery" className="text-muted-foreground hover:text-primary transition-colors text-sm">Showroom Gallery</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">Contact Us</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-bold text-foreground mb-6 uppercase tracking-wide text-sm">Categories</h4>
            <ul className="space-y-3">
              <li><a href="#featured" className="text-muted-foreground hover:text-primary transition-colors text-sm">Sofas & Loungers</a></li>
              <li><a href="#featured" className="text-muted-foreground hover:text-primary transition-colors text-sm">Beds & Mattresses</a></li>
              <li><a href="#featured" className="text-muted-foreground hover:text-primary transition-colors text-sm">Dining Sets</a></li>
              <li><a href="#featured" className="text-muted-foreground hover:text-primary transition-colors text-sm">Office Furniture</a></li>
              <li><a href="#featured" className="text-muted-foreground hover:text-primary transition-colors text-sm">Custom Furniture</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-foreground mb-6 uppercase tracking-wide text-sm">Contact Details</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground leading-relaxed">
                  Netra Furniture Mall,<br />Pune - Solapur Highway,<br />Uruli Kanchan, Pune 412202
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+919876543210" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:info@netrafurniture.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  info@netrafurniture.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; {currentYear} Netra Furniture Mall. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground text-center md:text-right">
            Designed for premium living in Pune.
          </p>
        </div>
      </div>
    </footer>
  );
}
