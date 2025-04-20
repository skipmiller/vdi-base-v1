
import React from "react";
import { Button } from "@/components/ui/button";
import { NavLink } from "./NavLinks";

interface MobileMenuProps {
  isOpen: boolean;
}

const MobileMenu = ({ isOpen }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden mt-4 pb-4 space-y-4">
      <NavLink href="#services">
        <div className="block py-2">Services</div>
      </NavLink>
      <NavLink href="/projects">
        <div className="block py-2">Projects</div>
      </NavLink>
      <NavLink href="#benefits">
        <div className="block py-2">Benefits</div>
      </NavLink>
      <NavLink href="#testimonials">
        <div className="block py-2">Testimonials</div>
      </NavLink>
      <NavLink href="#contact">
        <div className="block py-2">Contact</div>
      </NavLink>
      <Button className="w-full bg-vdi-medium hover:bg-vdi-dark text-white">
        Book a Consultation
      </Button>
    </div>
  );
};

export default MobileMenu;
