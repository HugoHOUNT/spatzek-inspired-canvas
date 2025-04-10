
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Toggle } from '@/components/ui/toggle';
import { useTheme } from '@/hooks/useTheme';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <Toggle
      aria-label="Toggle theme"
      className="border-none p-2"
      pressed={theme === 'dark'}
      onPressedChange={toggleTheme}
    >
      {theme === 'dark' ? (
        <Moon className="h-5 w-5 text-indigo-400" />
      ) : (
        <Sun className="h-5 w-5 text-amber-500" />
      )}
    </Toggle>
  );
};
