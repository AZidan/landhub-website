import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Building2, MapPin, Phone, Mail, Linkedin, Facebook, Twitter } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';

const Footer = () => {
  const location = useLocation();
  const { language, isRTL } = useLanguage();
  
  const navigation = [
    { name: getTranslation('home', language), path: '/' },
    { name: getTranslation('services', language), path: '/services' },
    { name: getTranslation('about', language), path: '/about' },
    { name: getTranslation('team', language), path: '/team' },
    { name: getTranslation('blog', language), path: '/blog' },
    { name: getTranslation('contact', language), path: '/contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Link to="/" className={`flex items-center mb-6 ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
              <Building2 className="h-8 w-8 text-amber-400" />
              <span className="text-2xl font-bold">Landhub</span>
            </Link>
            <p className={`text-gray-300 leading-relaxed mb-6 max-w-md ${isRTL ? 'text-right' : 'text-left'}`}>
              {language === 'ar' 
                ? 'الشريك الموثوق لمصر في نجاح التطوير العقاري. نمكن المطورين الصغار والمتوسطين من خلال الاستشارات المتخصصة وإدارة العمليات وخدمات التخطيط الاستراتيجي.'
                : 'Egypt\'s trusted partner for real estate development success. We empower small and medium developers with expert consultation, operations management, and strategic planning services.'
              }
            </p>
            <div className={`flex ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
              <button className="w-10 h-10 bg-blue-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </button>
              <button className="w-10 h-10 bg-blue-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </button>
              <button className="w-10 h-10 bg-blue-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div>
            <h3 className={`text-lg font-semibold mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
              {getTranslation('quickLinks', language)}
            </h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`transition-colors duration-300 ${
                      location.pathname === item.path 
                        ? 'text-amber-400' 
                        : 'text-gray-300 hover:text-amber-400'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={`text-lg font-semibold mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
              {getTranslation('contactInfo', language)}
            </h3>
            <div className="space-y-4">
              <div className={`flex items-start ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                <MapPin className="h-5 w-5 text-amber-400 mt-1 flex-shrink-0" />
                <div className={`text-gray-300 ${isRTL ? 'text-right' : 'text-left'}`}>
                  <p>{language === 'ar' ? 'منطقة القاهرة الجديدة للأعمال' : 'New Cairo Business District'}</p>
                  <p>{language === 'ar' ? 'القاهرة، مصر' : 'Cairo, Egypt'}</p>
                </div>
              </div>
              
              <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                <Phone className="h-5 w-5 text-amber-400 flex-shrink-0" />
                <span className="text-gray-300">+20 2 1234 5678</span>
              </div>
              
              <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                <Mail className="h-5 w-5 text-amber-400 flex-shrink-0" />
                <span className="text-gray-300">info@landhub.eg</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className={`flex flex-col md:flex-row justify-between items-center ${isRTL ? 'md:flex-row-reverse' : ''}`}>
            <p className={`text-gray-400 text-sm mb-4 md:mb-0 ${isRTL ? 'text-right' : 'text-left'}`}>
              © 2025 Landhub. {getTranslation('allRightsReserved', language)}.
            </p>
            <div className={`flex text-sm text-gray-400 ${isRTL ? 'space-x-reverse space-x-6' : 'space-x-6'}`}>
              <button className="hover:text-amber-400 transition-colors duration-300">
                {language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
              </button>
              <button className="hover:text-amber-400 transition-colors duration-300">
                {language === 'ar' ? 'شروط الخدمة' : 'Terms of Service'}
              </button>
              <button className="hover:text-amber-400 transition-colors duration-300">
                {language === 'ar' ? 'سياسة ملفات تعريف الارتباط' : 'Cookie Policy'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;