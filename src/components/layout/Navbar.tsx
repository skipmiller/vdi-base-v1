import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-vdi-dark">
              Desk Ops
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-vdi-medium transition-colors">
              Services
            </a>
            <a href="#benefits" className="text-gray-700 hover:text-vdi-medium transition-colors">
              Benefits
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-vdi-medium transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="text-gray-700 hover:text-vdi-medium transition-colors">
              Contact
            </a>
            <Button className="bg-vdi-medium hover:bg-vdi-dark text-white">
              Book a Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-500 hover:text-vdi-medium"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <a href="#services" className="block text-gray-700 hover:text-vdi-medium transition-colors py-2">
              Services
            </a>
            <a href="#benefits" className="block text-gray-700 hover:text-vdi-medium transition-colors py-2">
              Benefits
            </a>
            <a href="#testimonials" className="block text-gray-700 hover:text-vdi-medium transition-colors py-2">
              Testimonials
            </a>
            <a href="#contact" className="block text-gray-700 hover:text-vdi-medium transition-colors py-2">
              Contact
            </a>
            <Button className="w-full bg-vdi-medium hover:bg-vdi-dark text-white">
              Book a Consultation
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
