import React from "react";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { Button } from "@/components/ui/button";
import { Home, Users, TrendingUp, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = ({ className }: { className?: string }) => {
  const navItems = [
    { name: 'Home', url: '#home', icon: Home },
    { name: 'Features', url: '#features', icon: TrendingUp },
    { name: 'Investors', url: '#investors', icon: Users },
    { name: 'Help', url: '#help', icon: HelpCircle }
  ];

  return (
    <div className={cn("fixed top-0 left-0 right-0 z-50 flex items-center justify-center pt-6", className)}>
      <div className="flex items-center gap-4">
        <NavBar items={navItems} className="relative" />
        <Button variant="default" size="sm" className="rounded-full">
          Join Now
        </Button>
      </div>
    </div>
  );
};

export default Navigation;
