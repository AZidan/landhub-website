import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Settings, PlaneTakeoff, CheckCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';

const ServicesPreview = () => {
  const { language, isRTL } = useLanguage();

  const services = [
    {
      icon: Users,
      title: getTranslation( 'realEstateConsultation', language),
      description: language === 'ar' 
        ? 'إرشادات خبيرة حول تحليل السوق واستراتيجيات الاستثمار والامتثال التنظيمي في القطاع العقاري المصري.'
        : 'Expert guidance on market analysis, investment strategies, and regulatory compliance in the Egyptian real estate sector.',
      features: [
        language === 'ar' ? 'دراسات جدوى السوق' : 'Market feasibility studies',
        language === 'ar' ? 'تقييم مخاطر الاستثمار' : 'Investment risk assessment',
        language === 'ar' ? 'إرشادات الامتثال التنظيمي' : 'Regulatory compliance guidance',
        language === 'ar' ? 'خدمات تقييم العقارات' : 'Property valuation services'
      ]
    },
    {
      icon: Settings,
      title: getTranslation('operationsManagement', language),
      description: language === 'ar'
        ? 'دعم تشغيلي مبسط لتحسين عمليات التطوير الخاصة بك وزيادة الكفاءة إلى أقصى حد.'
        : 'Streamlined operational support to optimize your development processes and maximize efficiency.',
      features: [
        language === 'ar' ? 'إشراف إدارة المشاريع' : 'Project management oversight',
        language === 'ar' ? 'تنسيق الموردين' : 'Vendor coordination',
        language === 'ar' ? 'أنظمة مراقبة الجودة' : 'Quality control systems',
        language === 'ar' ? 'تحسين الجدول الزمني' : 'Timeline optimization'
      ]
    },
    {
      icon: PlaneTakeoff,
      title: getTranslation('strategicPlanning', language),
      description: language === 'ar'
        ? 'خدمات تخطيط شاملة لتحويل رؤيتك إلى استراتيجيات تطوير قابلة للتنفيذ.'
        : 'Comprehensive planning services to transform your vision into actionable development strategies.',
      features: [
        language === 'ar' ? 'خرائط طريق التطوير' : 'Development roadmaps',
        language === 'ar' ? 'التخطيط المالي' : 'Financial planning',
        language === 'ar' ? 'استراتيجيات تخفيف المخاطر' : 'Risk mitigation strategies',
        language === 'ar' ? 'تموضع السوق' : 'Market positioning'
      ]
    }
  ];

  return (
    <section id="services" className={`py-20 bg-gray-50 ${isRTL ? 'font-arabic' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {getTranslation('servicesTitle', language)}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {getTranslation('servicesDescription', language)}
          </p>
          <Link 
            to="/services"
            className={`inline-flex items-center text-blue-800 hover:text-blue-900 font-semibold transition-colors duration-300 ${isRTL ? 'flex-row-reverse' : ''}`}
          >
            {getTranslation('viewAllServices', language)}
            <ArrowRight className={`h-5 w-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-6">
                <service.icon className="h-8 w-8 text-blue-800" />
              </div>
              
              <h3 className={`text-2xl font-bold text-gray-900 mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                {service.title}
              </h3>
              
              <p className={`text-gray-600 mb-6 leading-relaxed ${isRTL ? 'text-right font-arabic' : 'text-left'}`}>
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className={`flex items-center ${isRTL ? 'space-x-reverse space-x-3 text-right' : 'space-x-3 text-left'}`}>
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className={`text-gray-700 ${isRTL ? 'text-right font-arabic' : 'text-left'}`}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;