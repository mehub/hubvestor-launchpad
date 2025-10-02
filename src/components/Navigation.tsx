import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

const Navigation = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="For Founders">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#features">Access Investors</HoveredLink>
            <HoveredLink href="#features">Patent Support</HoveredLink>
            <HoveredLink href="#features">Banking Solutions</HoveredLink>
            <HoveredLink href="#features">Insurance Services</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="For Investors">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#features">Browse Opportunities</HoveredLink>
            <HoveredLink href="#features">Due Diligence Tools</HoveredLink>
            <HoveredLink href="#features">Portfolio Management</HoveredLink>
            <HoveredLink href="#features">Investment Analytics</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Resources">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#testimonials">Success Stories</HoveredLink>
            <HoveredLink href="#features">Platform Guide</HoveredLink>
            <HoveredLink href="/blog">Blog</HoveredLink>
            <HoveredLink href="/help">Help Center</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Navigation;
