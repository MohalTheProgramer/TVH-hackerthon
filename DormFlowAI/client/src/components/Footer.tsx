import { Heart, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "How It Works", href: "#solution" },
    { name: "Benefits", href: "#benefits" },
    { name: "Contact", href: "#contact" }
  ];

  const support = [
    { name: "Help Center", href: "#help" },
    { name: "Community Guidelines", href: "#guidelines" },
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" }
  ];

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-4">Ubuntu Marketplace</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
              Empowering South African township entrepreneurs through community-driven 
              bulk purchasing and collaborative commerce. Together we grow stronger.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center text-sm text-muted-foreground">
                <Phone className="w-4 h-4 mr-2" />
                +27 11 123 4567
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Mail className="w-4 h-4 mr-2" />
                hello@ubuntumarketplace.co.za
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mr-2" />
                Johannesburg, South Africa
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                    data-testid={`footer-link-${index}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-2">
              {support.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                    data-testid={`footer-support-${index}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center">
            Made with <Heart className="w-4 h-4 mx-1 text-destructive" /> for South African communities
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            © 2024 Ubuntu Marketplace. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}