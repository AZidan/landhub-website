import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';

const TeamPreview = () => {
  const { language, isRTL } = useLanguage();

  const teamMembers = [
    {
      name: language === 'ar' ? 'أحمد حسن' : 'Ahmed Hassan',
      position: language === 'ar' ? 'الرئيس التنفيذي' : 'Chief Executive Officer',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: language === 'ar' 
        ? 'أكثر من 15 عاماً في التطوير العقاري المصري مع خبرة واسعة في المشاريع واسعة النطاق.'
        : '15+ years in Egyptian real estate development with extensive experience in large-scale projects.',
    },
    {
      name: language === 'ar' ? 'فاطمة الزهراء' : 'Fatma El-Zahra',
      position: language === 'ar' ? 'رئيس العمليات' : 'Head of Operations',
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: language === 'ar'
        ? 'أخصائي عمليات مع سجل حافل في تحسين سير عمل التطوير والجداول الزمنية.'
        : 'Operations specialist with a track record of optimizing development workflows and timelines.',
    },
    {
      name: language === 'ar' ? 'عمر محمود' : 'Omar Mahmoud',
      position: language === 'ar' ? 'مدير التخطيط الاستراتيجي' : 'Strategic Planning Director',
      image: 'https://images.pexels.com/photos/2182973/pexels-photo-2182973.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: language === 'ar'
        ? 'خبير التخطيط المالي المتخصص في تعظيم العائد على الاستثمار لمشاريع التطوير متوسطة الحجم.'
        : 'Financial planning expert focused on maximizing ROI for medium-scale development projects.',
    }
  ];

  return (
    <section id="team" className={`py-20 bg-gray-50 ${isRTL ? 'font-arabic' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {getTranslation('teamTitle', language)}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {getTranslation('teamDescription', language)}
          </p>
          <Link 
            to="/team"
            className={`inline-flex items-center text-blue-800 hover:text-blue-900 font-semibold transition-colors duration-300 ${isRTL ? 'flex-row-reverse' : ''}`}
          >
            {getTranslation('meetFullTeam', language)}
            <ArrowRight className={`h-5 w-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className={`text-xl font-bold text-gray-900 mb-1 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {member.name}
                </h3>
                <p className={`text-amber-600 font-semibold mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {member.position}
                </p>
                <p className={`text-gray-600 text-sm leading-relaxed mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {member.bio}
                </p>
                
                <div className={`flex ${isRTL ? 'space-x-reverse space-x-3 justify-start' : 'space-x-3'}`}>
                  <button className="flex items-center justify-center w-10 h-10 bg-blue-800 hover:bg-blue-900 text-white rounded-full transition-colors duration-300">
                    <Linkedin className="h-5 w-5" />
                  </button>
                  <button className="flex items-center justify-center w-10 h-10 bg-gray-800 hover:bg-gray-900 text-white rounded-full transition-colors duration-300">
                    <Mail className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamPreview;