import React, { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  logo?: string;
  navItems?: Array<{ label: string; href: string }>;
}

const Header = ({
  logo = "BP",
  navItems = [
    { label: "Home", href: "#top" },
    { label: "About", href: "#about-section" },
    { label: "Services", href: "#services-section" },
    { label: "Projects", href: "#projects-section" },
    { label: "Contact", href: "#contact-section" },
  ],
}: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm py-4 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          {(typeof logo === "string" && logo.endsWith(".svg")) ||
          logo.endsWith(".png") ||
          logo.endsWith(".jpg") ? (
            <img src={logo} alt="Logo" className="h-10" />
          ) : (
            <div className="text-2xl font-bold text-orange-500">{logo}</div>
          )}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
            className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6"
            onClick={() => (window.location.href = "tel:+918522817622")}
          >
            Make a Call
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-6">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button
              className="bg-orange-500 hover:bg-orange-600 text-white rounded-full w-full mt-4"
              onClick={() => (window.location.href = "tel:+918522817622")}
            >
              Make a Call
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
