import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";

const footerLinks = {
  company: [
    { name: "About Us", path: "/about" },
    { name: "Our Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ],
  services: [
    { name: "Web Design", path: "/services" },
    { name: "Web Development", path: "/services" },
    { name: "Website Maintenance", path: "/services" },
    { name: "SEO Optimization", path: "/services" },
  ],
};

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <span className="text-lg font-bold text-primary-foreground">W</span>
              </div>
              <span className="text-xl font-bold text-foreground">WebCraft</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              We create stunning, high-performance websites that help businesses grow and succeed online.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-muted-foreground transition-colors hover:text-primary"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>hello@webcraft.com</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-3 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                <span>123 Business Ave, Suite 100<br />New York, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} WebCraft. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
