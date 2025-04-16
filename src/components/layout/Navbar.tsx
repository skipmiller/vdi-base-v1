
import { useState } from "react";
import Logo from "./navbar/Logo";
import DesktopMenu from "./navbar/DesktopMenu";
import MobileMenuButton from "./navbar/MobileMenuButton";
import MobileMenu from "./navbar/MobileMenu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Logo />
          </div>

          <DesktopMenu />

          <div className="md:hidden">
            <MobileMenuButton isOpen={isMenuOpen} onClick={toggleMenu} />
          </div>
        </div>

        <MobileMenu isOpen={isMenuOpen} />
      </div>
    </nav>
  );
};

export default Navbar;
