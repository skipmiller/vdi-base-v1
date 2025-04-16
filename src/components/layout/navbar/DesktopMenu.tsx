
import React from "react";
import { Button } from "@/components/ui/button";
import NavLinks from "./NavLinks";

const DesktopMenu = () => {
  return (
    <div className="hidden md:flex items-center space-x-8">
      <NavLinks />
      <Button className="bg-vdi-medium hover:bg-vdi-dark text-white">
        Book a Consultation
      </Button>
    </div>
  );
};

export default DesktopMenu;
