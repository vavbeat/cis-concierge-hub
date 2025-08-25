import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Plane, 
  Menu, 
  User, 
  Globe, 
  Phone,
  Bell
} from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-primary text-primary-foreground shadow-lg">
              <Plane className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-foreground">Affort</h1>
              <span className="text-xs text-muted-foreground">platform</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-sm font-medium text-foreground hover:text-primary transition-smooth">
              Услуги
            </a>
            <a href="#events" className="text-sm font-medium text-foreground hover:text-primary transition-smooth">
              Мероприятия
            </a>
            <a href="#reports" className="text-sm font-medium text-foreground hover:text-primary transition-smooth">
              Отчёты
            </a>
            <a href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-smooth">
              О нас
            </a>
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <Button variant="ghost" size="sm" className="hidden md:flex items-center space-x-2">
              <Globe className="h-4 w-4" />
              <span className="text-sm">RU</span>
            </Button>

            {/* Notifications */}
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="h-4 w-4" />
              <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 text-xs">
                2
              </Badge>
            </Button>

            {/* Contact */}
            <Button variant="outline" size="sm" className="hidden lg:flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+7 (495) 123-45-67</span>
            </Button>

            {/* Login/Profile */}
            <Button variant="default" size="sm" className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span className="hidden md:inline">Войти</span>
            </Button>

            {/* Mobile Menu */}
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;