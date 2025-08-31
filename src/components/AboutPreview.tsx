import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Eye, Award, TrendingUp, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';

const AboutPreview = () => {
  const { language, isRTL } = useLanguage();

  const stats = [
    { number: '500M+', label: 'EGP in Projects Managed', icon: TrendingUp },
    { number: '200+', label: 'Successful Projects', icon: Award },
    { number: '15+', label: 'Egyptian Cities', icon: Target },
    { number: '10+', label: 'Years Experience', icon: Eye }
  ];

  return (
    <section id="about" className={`py-20 bg-white ${isRTL ? 'font-arabic' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
              {getTranslation('aboutTitle', language)}
            </h2>
            
            <p className={`text-xl text-gray-600 mb-8 leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
              {getTranslation('aboutDescription', language)}
            </p>
            
            <div className="space-y-6 mb-8">
              <div className={`flex items-start ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Target className="h-6 w-6 text-blue-800" />
                </div>
                <div>
                  <h3 className={`text-xl font-semibold text-gray-900 mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {getTranslation('ourMission', language)}
                  </h3>
                  <p className={`text-gray-600 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {language === 'ar' 
                      ? 'إضفاء الطابع الديمقراطي على نجاح التطوير العقاري من خلال تقديم استشارات عالمية المستوى ودعم تشغيلي للمطورين الناشئين في مصر.'
                      : 'To democratize real estate development success by providing world-class consultation and operational support to emerging developers in Egypt.'
                    }
                  </p>
                </div>
              </div>
              
              <div className={`flex items-start ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
                <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                  <Eye className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h3 className={`text-xl font-semibold text-gray-900 mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {getTranslation('ourVision', language)}
                  </h3>
                  <p className={`text-gray-600 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {language === 'ar'
                      ? 'أن نكون الشريك الأكثر ثقة في مصر للتطوير العقاري، وتعزيز النمو المستدام والحلول المبتكرة عبر جميع الأسواق.'
                      : 'To be Egypt\'s most trusted partner for real estate development, fostering sustainable growth and innovative solutions across all markets.'
                    }
                  </p>
                </div>
              </div>
            </div>

            <Link 
              to="/about"
              className={`inline-flex items-center text-blue-800 hover:text-blue-900 font-semibold transition-colors duration-300 ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              {getTranslation('learnMoreAbout', language)}
              <ArrowRight className={`h-5 w-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
            </Link>
          </div>

          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/2882552/pexels-photo-2882552.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Modern Egyptian Architecture"
              className="rounded-xl shadow-2xl w-full h-96 object-cover"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent rounded-xl"></div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-800 rounded-full mx-auto mb-4 group-hover:bg-amber-500 transition-colors duration-300">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className={`text-gray-600 font-medium ${isRTL ? 'text-center' : 'text-center'}`}>
                {stat.label === 'EGP in Projects Managed' && language === 'ar' ? 'جنيه في المشاريع المدارة' :
                 stat.label === 'Successful Projects' && language === 'ar' ? 'مشروع ناجح' :
                 stat.label === 'Egyptian Cities' && language === 'ar' ? 'مدينة مصرية' :
                 stat.label === 'Years Experience' && language === 'ar' ? 'سنوات خبرة' :
                 stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;