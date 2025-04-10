
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './ThemeToggle';
import { Link, useLocation } from 'react-router-dom';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Accueil', href: '/' },
  { label: 'Projets', href: '/projects' },
  { label: 'Expérience', href: '/experience' },
  { label: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      'fixed w-full top-0 z-50 transition-all duration-300 py-4 px-6 md:px-12',
      isScrolled ? 'bg-white/90 dark:bg-portfolio-dark/90 backdrop-blur-lg' : 'bg-transparent'
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link to="/" className="text-xl font-bold text-indigo-600 dark:text-indigo-400">Hugo Hountondji</Link>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                'text-sm font-medium transition-colors py-1 px-2',
                location.pathname === item.href
                  ? 'text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400'
                  : 'text-portfolio-dark dark:text-portfolio-light hover:text-indigo-600 dark:hover:text-indigo-400'
              )}
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile menu button and theme toggle */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="text-portfolio-dark dark:text-portfolio-light p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <nav className={cn(
        'fixed inset-0 top-16 bg-white/95 dark:bg-portfolio-dark/95 backdrop-blur-lg transition-all duration-300 flex flex-col items-center pt-10 md:hidden',
        mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      )}>
        {navItems.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            onClick={() => setMobileMenuOpen(false)}
            className={cn(
              'w-full text-center py-4 text-lg transition-colors',
              location.pathname === item.href
                ? 'text-indigo-600 dark:text-indigo-400'
                : 'text-portfolio-dark dark:text-portfolio-light'
            )}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
