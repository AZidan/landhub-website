import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';

const TestimonialsPreview = () => {
  const { language, isRTL } = useLanguage();

  const testimonials = [
    {
      name: language === 'ar' ? 'محمد علي' : 'Mohamed Ali',
      company: language === 'ar' ? 'دلتا العقارية' : 'Delta Properties',
      location: language === 'ar' ? 'القاهرة' : 'Cairo',
      content: language === 'ar'
        ? 'لقد غيرت لاند هب نهجنا في التطوير العقاري. ساعدتنا رؤاهم السوقية ودعمهم التشغيلي في إكمال مشروعنا الرئيسي الأول قبل الموعد المحدد بـ 3 أشهر.'
        : 'Landhub transformed our approach to real estate development. Their market insights and operational support helped us complete our first major project 3 months ahead of schedule.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2182972/pexels-photo-2182972.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: language === 'ar' ? 'سارة إبراهيم' : 'Sarah Ibrahim',
      company: language === 'ar' ? 'تطوير النيل' : 'Nile Developments',
      location: language === 'ar' ? 'الإسكندرية' : 'Alexandria',
      content: language === 'ar'
        ? 'كانت خدمات التخطيط الاستراتيجي التي قدمتها لاند هب مفيدة في تأمين تمويلنا والتنقل في المشهد التنظيمي المعقد في مصر.'
        : 'The strategic planning services provided by Landhub were instrumental in securing our financing and navigating the complex regulatory landscape in Egypt.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: language === 'ar' ? 'خالد منصور' : 'Khaled Mansour',
      company: language === 'ar' ? 'عقارات الهرم' : 'Pyramid Estates',
      location: language === 'ar' ? 'الجيزة' : 'Giza',
      content: language === 'ar'
        ? 'كان العمل مع لاند هب بمثابة تغيير جذري. فهمهم العميق للسوق المحلي ونهجهم المهني جعل توسعنا في مناطق جديدة سلساً.'
        : 'Working with Landhub has been a game-changer. Their deep understanding of the local market and professional approach made our expansion into new areas seamless.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2182977/pexels-photo-2182977.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <section id="testimonials" className={`py-20 bg-blue-900 ${isRTL ? 'font-arabic' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {getTranslation('testimonialsTitle', language)}
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            {getTranslation('testimonialsDescription', language)}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`flex items-center mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className={`w-16 h-16 rounded-full object-cover ${isRTL ? 'ml-4' : 'mr-4'}`}
                />
                <div>
                  <h3 className={`text-lg font-bold text-gray-900 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {testimonial.name}
                  </h3>
                  <p className={`text-amber-600 font-semibold ${isRTL ? 'text-right' : 'text-left'}`}>
                    {testimonial.company}
                  </p>
                  <p className={`text-gray-500 text-sm ${isRTL ? 'text-right' : 'text-left'}`}>
                    {testimonial.location}
                  </p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className={`relative ${isRTL ? 'text-right' : 'text-left'}`}>
                <Quote className={`h-8 w-8 text-gray-300 absolute -top-2 ${isRTL ? '-right-2' : '-left-2'}`} />
                <p className={`text-gray-700 leading-relaxed ${isRTL ? 'pr-6 text-right' : 'pl-6 text-left'}`}>
                  {testimonial.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPreview;