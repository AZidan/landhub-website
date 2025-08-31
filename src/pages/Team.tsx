import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Linkedin, Mail, Award, GraduationCap, Briefcase } from 'lucide-react';

const Team = () => {
  const leadership = [
    {
      name: 'Ahmed Hassan',
      position: 'Chief Executive Officer & Founder',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Ahmed founded Landhub with a vision to democratize real estate development success in Egypt. With over 15 years of experience in large-scale development projects, he has led the company to become a trusted partner for developers across the nation.',
      education: 'MBA in Real Estate Development, American University in Cairo',
      experience: '15+ years in Egyptian real estate',
      specialties: ['Strategic Leadership', 'Market Analysis', 'Investment Planning']
    },
    {
      name: 'Fatma El-Zahra',
      position: 'Chief Operating Officer',
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Fatma brings exceptional operational expertise to Landhub, having optimized development workflows for over 100 projects. Her systematic approach to operations management has consistently delivered projects ahead of schedule and under budget.',
      education: 'MSc in Project Management, Cairo University',
      experience: '12+ years in operations management',
      specialties: ['Operations Optimization', 'Project Management', 'Quality Control']
    }
  ];

  const seniorTeam = [
    {
      name: 'Omar Mahmoud',
      position: 'Strategic Planning Director',
      image: 'https://images.pexels.com/photos/2182973/pexels-photo-2182973.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Omar specializes in financial planning and strategic development for medium-scale projects, with expertise in maximizing ROI and identifying growth opportunities.',
      experience: '10+ years in financial planning',
      specialties: ['Financial Modeling', 'ROI Optimization', 'Strategic Planning']
    },
    {
      name: 'Nadia Abdel Rahman',
      position: 'Market Research Lead',
      image: 'https://images.pexels.com/photos/3184160/pexels-photo-3184160.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Nadia leads our market research initiatives, providing data-driven insights that have guided successful investment decisions across Egyptian real estate markets.',
      experience: '8+ years in market research',
      specialties: ['Market Analysis', 'Data Analytics', 'Trend Forecasting']
    },
    {
      name: 'Khaled Mansour',
      position: 'Regional Development Manager',
      image: 'https://images.pexels.com/photos/2182977/pexels-photo-2182977.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Khaled oversees regional development initiatives and maintains relationships with key stakeholders across Egyptian governorates.',
      experience: '9+ years in regional development',
      specialties: ['Regional Planning', 'Stakeholder Relations', 'Government Liaison']
    },
    {
      name: 'Yasmin Ahmed',
      position: 'Client Relations Manager',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Yasmin ensures exceptional client experiences and manages long-term relationships with our developer partners across Egypt.',
      experience: '7+ years in client relations',
      specialties: ['Client Management', 'Relationship Building', 'Customer Success']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Expert Team - Landhub Real Estate Development Egypt</title>
        <meta name="description" content="Meet Landhub's expert team of real estate professionals with decades of combined experience in Egyptian property development, market analysis, and strategic planning." />
        <meta name="keywords" content="Landhub team, real estate experts Egypt, property development professionals, Egyptian real estate consultants, development team Cairo" />
        <meta property="og:title" content="Our Expert Team - Landhub Real Estate Development Egypt" />
        <meta property="og:description" content="Meet our seasoned professionals with decades of experience in Egyptian real estate development and market expertise." />
        <link rel="canonical" href="https://landhub.eg/team" />
      </Helmet>

      <div className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Meet Our Expert Team
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 max-w-4xl mx-auto">
              Our seasoned professionals bring decades of combined experience in 
              Egyptian real estate development, market expertise, and strategic planning.
            </p>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Leadership Team
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Visionary leaders driving innovation and excellence in Egyptian real estate development.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {leadership.map((member, index) => (
                <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img 
                        src={member.image}
                        alt={member.name}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {member.name}
                      </h3>
                      <p className="text-amber-600 font-semibold mb-4">
                        {member.position}
                      </p>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {member.bio}
                      </p>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center space-x-3">
                          <GraduationCap className="h-5 w-5 text-blue-800" />
                          <span className="text-sm text-gray-700">{member.education}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Briefcase className="h-5 w-5 text-blue-800" />
                          <span className="text-sm text-gray-700">{member.experience}</span>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Specialties:</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.specialties.map((specialty, specialtyIndex) => (
                            <span key={specialtyIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex space-x-3">
                        <button className="flex items-center justify-center w-10 h-10 bg-blue-800 hover:bg-blue-900 text-white rounded-full transition-colors duration-300">
                          <Linkedin className="h-5 w-5" />
                        </button>
                        <button className="flex items-center justify-center w-10 h-10 bg-gray-800 hover:bg-gray-900 text-white rounded-full transition-colors duration-300">
                          <Mail className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Senior Team */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Senior Team Members
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Experienced professionals who bring specialized expertise to every project.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {seniorTeam.map((member, index) => (
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
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-amber-600 font-semibold mb-4">
                      {member.position}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {member.bio}
                    </p>
                    
                    <div className="mb-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Briefcase className="h-4 w-4 text-blue-800" />
                        <span className="text-sm text-gray-700">{member.experience}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Specialties:</h4>
                      <div className="flex flex-wrap gap-1">
                        {member.specialties.map((specialty, specialtyIndex) => (
                          <span key={specialtyIndex} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex space-x-3">
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
      </div>
    </>
  );
};

export default Team;