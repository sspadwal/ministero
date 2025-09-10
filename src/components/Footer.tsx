import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Products", href: "/products" },
    { label: "Contact", href: "/contact" },
  ];

  const services = [
    { label: "Steel Fabrication", href: "#services" },
    { label: "Engineering Solutions", href: "#services" },
    { label: "Manufacturing", href: "#services" },
    { label: "Quality Control", href: "#services" },
    { label: "Supply Chain", href: "#services" },
    { label: "Maintenance Support", href: "#services" },
  ];

  const products = [
    {
      label: "Stainless Steel Pipes & Tubes",
      href: "products/stainless-steel-pipes",
    },
    {
      label: "Stainless Steel Flanges",
      href: "products/stainless-steel-flanges",
    },
    {
      label: "Stainless Steel Sheets & Plates",
      href: "products/stainless-steel-sheet-plates",
    },
    {
      label: "Stainless Steel Round Bars & Rods",
      href: "products/stainless-steel-round-bars",
    },
    {
      label: "Stainless Steel Butt Weld Fittings ",
      href: "products/stainless-steel-buttweld-fittings",
    },
    {
      label: "Stainless Steel Fasteners",
      href: "products/stainless-steel-fasteners",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-hero text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] repeat"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/logo.png"
                alt="Ministero Steel Engineering"
                className="h-10 w-auto"
              />
              <div>
                <h3 className="text-lg font-bold">Ministero Steel</h3>
                <p className="text-sm text-gray-300">Engineering Pvt. Ltd.</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading steel engineering company with 30+ years of excellence in
              delivering high-quality steel products and engineering solutions
              worldwide.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-primary-glow flex-shrink-0" />
                <span className="text-gray-300">
                  Industrial Area, Sector 62, Noida, UP 201309
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-primary-glow flex-shrink-0" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-primary-glow flex-shrink-0" />
                <span className="text-gray-300">info@ministerosteel.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary-glow transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-primary-glow transition-colors duration-200 text-sm"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-bold mb-6">Products</h4>
            <ul className="space-y-3">
              {products.map((product, index) => (
                <li key={index}>
                  <Link
                    to={product.href}
                    className="text-gray-300 hover:text-primary-glow transition-colors duration-200 text-sm"
                  >
                    {product.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-lg font-bold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-glow transition-colors duration-200"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-glow transition-colors duration-200"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-glow transition-colors duration-200"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-glow transition-colors duration-200"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-300 mb-4">Ready to start your project?</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-end">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-primary  hover:bg-primary hover:text-white"
                >
                  Get Quote
                </Button>
                <Button variant="steel" size="sm">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="text-center">
            <h4 className="text-lg font-bold mb-4">
              Certifications & Standards
            </h4>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="bg-white/10 px-4 py-2 rounded-full">
                <span className="text-sm font-medium">ISO 9001:2015</span>
              </div>
              <div className="bg-white/10 px-4 py-2 rounded-full">
                <span className="text-sm font-medium">ASTM Certified</span>
              </div>
              <div className="bg-white/10 px-4 py-2 rounded-full">
                <span className="text-sm font-medium">ASME Standards</span>
              </div>
              <div className="bg-white/10 px-4 py-2 rounded-full">
                <span className="text-sm font-medium">CE Marking</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-300 text-sm">
              © 2024 Ministero Steel Engineering Pvt. Ltd. All rights reserved.
            </p>
            <p className="text-gray-400 text-xs mt-1">
              Designed with excellence for steel engineering solutions
            </p>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a
              href="#"
              className="text-gray-300 hover:text-primary-glow transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-primary-glow transition-colors"
            >
              Terms of Service
            </a>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 bg-primary-glow rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-200"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
