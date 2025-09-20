import { Button } from "@/components/ui/button";
import { Search, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">IP</span>
          </div>
          <span className="text-xl font-bold text-foreground">IPMarket</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            Marketplace
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            Browse Ideas
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            How it Works
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            Pro Features
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <Button variant="outline" className="hidden md:inline-flex">
            Sign In
          </Button>
          <Button size="sm" className="hidden md:inline-flex">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;