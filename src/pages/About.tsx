import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Target, Eye, Award, TrendingUp, Users, Building, Globe, Lightbulb, Shield } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '500M+', label: 'EGP in Projects Managed', icon: TrendingUp },
    { number: '200+', label: 'Successful Projects', icon: Award },
    { number: '15+', label: 'Egyptian Cities', icon: Target },
    { number: '10+', label: 'Years Experience', icon: Eye }
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering results that exceed expectations and set new industry standards.'
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We believe in building long-term partnerships with our clients, working together towards shared success and growth.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We embrace innovative solutions and cutting-edge practices to stay ahead in the evolving real estate landscape.'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We conduct business with the highest ethical standards, ensuring transparency and trust in all our relationships.'
    }
  ];

  const milestones = [
    {
      year: '2014',
      title: 'Company Founded',
      description: 'Landhub was established with a vision to transform real estate development in Egypt.'
    },
    {
      year: '2017',
      title: 'Regional Expansion',
      description: 'Extended services to cover major Egyptian cities including Alexandria, Giza, and Sharm El Sheikh.'
    },
    {
      year: '2020',
      title: '100+ Projects',
      description: 'Reached milestone of successfully managing over 100 development projects across Egypt.'
    },
    {
      year: '2023',
      title: 'Market Leadership',
      description: 'Recognized as a leading real estate development consultancy in the Egyptian market.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Landhub - Leading Real Estate Development Company in Egypt</title>
        <meta name="description" content="Learn about Landhub's 10+ years of experience in Egyptian real estate development. Discover our mission, vision, values, and track record of 200+ successful projects across 15+ Egyptian cities." />
        <meta name="keywords" content="about Landhub, real estate company Egypt, property development history, Egyptian real estate expertise, company background, real estate consultancy Egypt" />
        <meta property="og:title" content="About Landhub - Leading Real Estate Development Company in Egypt" />
        <meta property="og:description" content="Discover Landhub's journey as Egypt's trusted real estate development partner with 10+ years of experience and 200+ successful projects." />
        <link rel="canonical" href="https://landhub.eg/about" />
      </Helmet>

      <div className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  About Landhub
                </h1>
                <p className="text-xl md:text-2xl text-blue-200 leading-relaxed">
                  For over a decade, we've been Egypt's trusted partner in real estate development, 
                  transforming visions into reality for developers across the nation.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/2882552/pexels-photo-2882552.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Modern Egyptian Architecture"
                  className="rounded-xl shadow-2xl w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="bg-blue-50 rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <Target className="h-12 w-12 text-blue-800 mr-4" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To democratize real estate development success by providing world-class 
                  consultation and operational support to emerging developers in Egypt. 
                  We believe every developer, regardless of size, deserves access to 
                  professional expertise that can transform their projects and accelerate their growth.
                </p>
              </div>

              <div className="bg-amber-50 rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <Eye className="h-12 w-12 text-amber-600 mr-4" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To be Egypt's most trusted partner for real estate development, 
                  fostering sustainable growth and innovative solutions across all markets. 
                  We envision a future where every development project in Egypt benefits 
                  from professional guidance and strategic expertise.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Track Record
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Numbers that speak to our commitment and success in the Egyptian real estate market.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-800 rounded-full mx-auto mb-4 group-hover:bg-amber-500 transition-colors duration-300">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Values
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                The principles that guide our work and define our commitment to excellence in every project.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center group">
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-6 group-hover:bg-blue-800 transition-colors duration-300">
                    <value.icon className="h-8 w-8 text-blue-800 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Timeline */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Journey
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Key milestones in our growth as Egypt's leading real estate development consultancy.
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                      <div className="bg-white rounded-xl p-6 shadow-lg">
                        <div className="text-2xl font-bold text-blue-800 mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                      </div>
                    </div>
                    
                    <div className="relative flex items-center justify-center w-12 h-12 bg-blue-800 rounded-full border-4 border-white shadow-lg z-10">
                      <div className="w-4 h-4 bg-amber-400 rounded-full"></div>
                    </div>
                    
                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;