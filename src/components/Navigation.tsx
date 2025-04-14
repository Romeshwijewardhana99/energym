import React, { useState } from 'react';
import { MenuIcon, X as CloseIcon, Sun as SunIcon, Moon as MoonIcon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#fefefe] dark:bg-gray-800 shadow-md sticky top-0 z-50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold">
              <span className="text-[#f04343]">ENER</span>
              <span className="text-gray-900 dark:text-white">GYM</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['home', 'about', 'gallery', 'membership', 'trainers', 'timetable', 'reviews', 'contact'].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 font-medium capitalize"
              >
                {section}
              </a>
            ))}
            {/* <a
              href="#admin"
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400"
            >
              Admin
            </a> */}

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <SunIcon size={20} /> : <MoonIcon size={20} />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <SunIcon size={20} /> : <MoonIcon size={20} />}
            </button>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 focus:outline-none"
            >
              {isMenuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#fefefe] dark:bg-gray-800 shadow-lg pb-4 transition-colors duration-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['home', 'about', 'gallery', 'membership', 'trainers', 'timetable', 'reviews', 'contact'].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 font-medium capitalize"
              >
                {section}
              </a>
            ))}
            <a
              href="#admin"
              className="block px-3 py-2 text-sm text-gray-500 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400"
            >
              Admin
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
