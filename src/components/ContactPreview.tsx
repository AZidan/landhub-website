import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';

const ContactPreview = () => {
  const { language, isRTL } = useLanguage();

  return (
    <section id="contact" className={`py-20 bg-gray-50 ${isRTL ? 'font-arabic' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {getTranslation('contactTitle', language)}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {getTranslation('contactDescription', language)}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-800 rounded-full mx-auto mb-6">
              <MapPin className="h-8 w-8 text-white" />
            </div>
            <h3 className={`text-xl font-bold text-gray-900 mb-4 ${isRTL ? 'text-center' : 'text-center'}`}>{getTranslation('visitOffice', language)}</h3>
            <p className="text-gray-600 mb-2 text-center">{language === 'ar' ? 'منطقة القاهرة الجديدة للأعمال' : 'New Cairo Business District'}</p>
            <p className="text-gray-600 text-center">{language === 'ar' ? 'القاهرة، مصر' : 'Cairo, Egypt'}</p>
          </div>

          <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-800 rounded-full mx-auto mb-6">
              <Phone className="h-8 w-8 text-white" />
            </div>
            <h3 className={`text-xl font-bold text-gray-900 mb-4 ${isRTL ? 'text-center' : 'text-center'}`}>{getTranslation('callUs', language)}</h3>
            <p className="text-gray-600 mb-2 text-center">+20 2 1234 5678</p>
            <p className="text-gray-600 text-center">+20 10 9876 5432</p>
          </div>

          <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-800 rounded-full mx-auto mb-6">
              <Mail className="h-8 w-8 text-white" />
            </div>
            <h3 className={`text-xl font-bold text-gray-900 mb-4 ${isRTL ? 'text-center' : 'text-center'}`}>{getTranslation('emailUs', language)}</h3>
            <p className="text-gray-600 mb-2 text-center">info@landhub.eg</p>
            <p className="text-gray-600 text-center">projects@landhub.eg</p>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/contact"
            className={`inline-flex items-center bg-blue-800 hover:bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${isRTL ? 'flex-row-reverse' : ''}`}
          >
            {getTranslation('getDetailedContact', language)}
            <ArrowRight className={`h-5 w-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactPreview;