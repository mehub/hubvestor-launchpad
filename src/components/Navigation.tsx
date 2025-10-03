import React from "react";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { Button } from "@/components/ui/button";
import { Home, Users, Briefcase, HelpCircle } from "lucide-react";

const Navigation = ({ className }: { className?: string }) => {
  const navItems = [
    { name: 'Home', url: '#home', icon: Home },
    { name: 'Features', url: '#features', icon: Briefcase },
    { name: 'Investors', url: '#investors', icon: Users },
    { name: 'Help', url: '#help', icon: HelpCircle }
  ];

  return (
    <>
      <NavBar items={navItems} className={className} />
      <div className="fixed top-0 right-8 z-50 pt-6">
        <Button variant="default" size="lg" className="rounded-full shadow-lg">
          Join Now
        </Button>
      </div>
    </>
  );
};

export default Navigation;
