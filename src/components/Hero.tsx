import React from 'react';
import { ArrowRight, MapPin, Users, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';

const Hero = () => {
  const { language, isRTL } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      />
      
      <div className="relative z-10 w-full text-white">
        <div className="w-full h-full min-h-screen bg-black/40 backdrop-blur-sm p-8 md:p-12 flex flex-col justify-center">
          <h1 className={`text-5xl md:text-7xl font-bold leading-tight mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
            {getTranslation('heroTitle', language)}
            <span className="text-amber-400 block">{getTranslation('heroTitleHighlight', language)}</span>
          </h1>
          
          <p className={`text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
            {getTranslation('heroDescription', language)}
          </p>

          <div className={`flex flex-col sm:flex-row gap-4 mb-12 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
            <button 
              onClick={scrollToContact}
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>{getTranslation('getStarted', language)}</span>
              <ArrowRight className={`h-5 w-5 ${isRTL ? 'rotate-180' : ''}`} />
            </button>
            
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-800 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              {getTranslation('ourServices', language)}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
              <MapPin className="h-8 w-8 text-amber-400" />
              <div>
                <div className="text-2xl font-bold">15+</div>
                <div className="text-gray-300">{getTranslation('egyptianCities', language)}</div>
              </div>
            </div>
            
            <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
              <Users className="h-8 w-8 text-amber-400" />
              <div>
                <div className="text-2xl font-bold">200+</div>
                <div className="text-gray-300">{getTranslation('happyClients', language)}</div>
              </div>
            </div>
            
            <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
              <Award className="h-8 w-8 text-amber-400" />
              <div>
                <div className="text-2xl font-bold">10+</div>
                <div className="text-gray-300">{getTranslation('yearsExperience', language)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;