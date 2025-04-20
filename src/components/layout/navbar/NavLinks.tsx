
import React from "react";
import { Link } from "react-router-dom";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export const NavLink = ({ href, children }: NavLinkProps) => {
  // If href starts with '/', it's an internal route; otherwise, it's an anchor link
  const isInternalRoute = href.startsWith('/');
  
  if (isInternalRoute) {
    return (
      <Link to={href} className="text-gray-700 hover:text-vdi-medium transition-colors">
        {children}
      </Link>
    );
  }
  
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
      <NavLink href="/projects">Projects</NavLink>
      <NavLink href="#benefits">Benefits</NavLink>
      <NavLink href="#testimonials">Testimonials</NavLink>
      <NavLink href="#contact">Contact</NavLink>
    </>
  );
};

export default NavLinks;
