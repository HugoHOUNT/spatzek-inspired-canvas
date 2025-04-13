import React from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="bg-white dark:bg-portfolio-dark border-b border-gray-200 dark:border-gray-700 py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-black dark:text-white">
          Hountondji Hugo
        </Link>
        <div className="flex items-center gap-2">
          <Link to="/projects" className="px-3 py-1.5 text-sm font-medium rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            Projets
          </Link>
          <Link to="/experience" className="px-3 py-1.5 text-sm font-medium rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            Expérience
          </Link>
          <Link to="/contact" className="px-3 py-1.5 text-sm font-medium rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            Contact
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? <Moon className="h-[1.2rem] w-[1.2rem]" /> : <Sun className="h-[1.2rem] w-[1.2rem]" />}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
