
import React from "react";
import { Link } from "react-router-dom";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export const NavLink = ({ href, children }: NavLinkProps) => {
  return (
    <Link to={href} className="text-gray-700 hover:text-vdi-medium transition-colors">
      {children}
    </Link>
  );
};

const NavLinks = () => {
  return (
    <>
      <NavLink href="/projects">Projects</NavLink>
      <NavLink href="#services">Services</NavLink>
      <NavLink href="#benefits">Benefits</NavLink>
      <NavLink href="#testimonials">Testimonials</NavLink>
      <NavLink href="#contact">Contact</NavLink>
    </>
  );
};

export default NavLinks;
