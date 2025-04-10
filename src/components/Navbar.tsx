
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './ThemeToggle';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Accueil', href: '#home' },
  { label: 'Projets', href: '#projects' },
  { label: 'Parcours', href: '#experience' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Centres d\'intérêt', href: '#interests' },
  { label: 'Contact', href: '#contact' }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Find active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100; // Offset for better UX

      sections.forEach(section => {
        const sectionId = section.getAttribute('id') || '';
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({
        top: (element as HTMLElement).offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={cn(
      'fixed w-full top-0 z-50 transition-all duration-300 py-4 px-6 md:px-12',
      isScrolled ? 'bg-portfolio-dark/90 dark:bg-portfolio-dark/90 backdrop-blur-lg' : 'bg-transparent'
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-indigo-400 dark:text-indigo-400">Hugo Hountondji</span>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className={cn(
                'text-sm font-medium transition-colors py-1 px-2',
                activeSection === item.href.substring(1)
                  ? 'text-indigo-400 border-b-2 border-indigo-400'
                  : 'text-portfolio-dark dark:text-portfolio-light hover:text-indigo-400'
              )}
            >
              {item.label}
            </a>
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
        'fixed inset-0 top-16 bg-portfolio-light/95 dark:bg-portfolio-dark/95 backdrop-blur-lg transition-all duration-300 flex flex-col items-center pt-10 md:hidden',
        mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      )}>
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(item.href);
            }}
            className={cn(
              'w-full text-center py-4 text-lg transition-colors',
              activeSection === item.href.substring(1)
                ? 'text-indigo-400'
                : 'text-portfolio-dark dark:text-portfolio-light'
            )}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
