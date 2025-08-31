import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  isScrolled: boolean;
  isHomePage: boolean;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ isScrolled, isHomePage }) => {
  const { language, setLanguage, isRTL } = useLanguage();

  return (
    <div className={`flex items-center space-x-2 ${isScrolled || !isHomePage ? 'text-gray-800' : 'text-white'}`}>
      <Globe className="h-5 w-5" />
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as 'en' | 'ar')}
        className={`bg-transparent border rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 ${
          isScrolled || !isHomePage 
            ? 'border-gray-800 text-gray-800' 
            : 'border-white text-white'
        }`}
        style={{ 
          textAlign: isRTL ? 'right' : 'left',
          direction: isRTL ? 'rtl' : 'ltr'
        }}
      >
        <option value="en" className="text-gray-800">English</option>
        <option value="ar" className="text-gray-800">العربية</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;