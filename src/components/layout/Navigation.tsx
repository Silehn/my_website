import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <span className="text-lg font-bold text-primary-foreground">W</span>
          </div>
          <span className="text-xl font-bold text-foreground">WebCraft</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive(link.path)
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button - Desktop */}
        <div className="hidden md:block">
          <Button asChild>
            <Link to="/contact">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="border-t bg-background md:hidden">
          <nav className="container flex flex-col space-y-4 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "text-base font-medium transition-colors hover:text-primary",
                  isActive(link.path)
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="w-full">
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                Get a Quote
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
