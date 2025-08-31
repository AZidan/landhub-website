import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Building2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { language, isRTL } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: getTranslation('home', language), path: '/' },
    { name: getTranslation('services', language), path: '/services' },
    { name: getTranslation('about', language), path: '/about' },
    { name: getTranslation('team', language), path: '/team' },
    { name: getTranslation('blog', language), path: '/blog' },
    { name: getTranslation('contact', language), path: '/contact' }
  ];

  const isHomePage = location.pathname === '/';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || !isHomePage ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center h-16 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <Link to="/" className="flex items-center space-x-2">
            <Building2 className={`h-8 w-8 ${isScrolled || !isHomePage ? 'text-blue-800' : 'text-white'}`} />
            <span className={`text-2xl font-bold ${isScrolled || !isHomePage ? 'text-blue-800' : 'text-white'} ${isRTL ? 'mr-2' : 'ml-2'}`}>
              Landhub
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <nav className={`flex ${isRTL ? 'space-x-reverse space-x-8' : 'space-x-8'}`}>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-medium transition-colors duration-300 hover:text-amber-500 ${
                    location.pathname === item.path 
                      ? 'text-amber-500' 
                      : isScrolled || !isHomePage ? 'text-gray-800' : 'text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <LanguageSwitcher isScrolled={isScrolled} isHomePage={isHomePage} />
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <LanguageSwitcher isScrolled={isScrolled} isHomePage={isHomePage} />
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className={`h-6 w-6 ${isScrolled || !isHomePage ? 'text-gray-800' : 'text-white'}`} />
              ) : (
                <Menu className={`h-6 w-6 ${isScrolled || !isHomePage ? 'text-gray-800' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className={`px-4 py-6 space-y-4 ${isRTL ? 'text-right' : 'text-left'}`}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full font-medium transition-colors duration-300 hover:text-amber-500 ${
                  location.pathname === item.path 
                    ? 'text-amber-500' 
                    : isScrolled || !isHomePage ? 'text-gray-800' : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;