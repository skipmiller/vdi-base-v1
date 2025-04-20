
import React from "react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export const NavLink = ({ href, children }: NavLinkProps) => {
  return (
    <a href={href} className="text-gray-700 hover:text-vdi-medium transition-colors">
      {children}
    </a>
  );
};

const NavLinks = () => {
  return (
    <>
      <NavLink href="#services">Services</NavLink>
      <NavLink href="#benefits">Benefits</NavLink>
      <NavLink href="#testimonials">Testimonials</NavLink>
      <NavLink href="#contact">Contact</NavLink>
    </>
  );
};

export default NavLinks;
