import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Users, Settings, PlaneTakeoff, CheckCircle, TrendingUp, Shield, Clock, Award } from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      icon: Users,
      title: 'Real Estate Consultation',
      description: 'Comprehensive market analysis and expert guidance tailored for the Egyptian real estate landscape.',
      features: [
        'Market feasibility studies and analysis',
        'Investment risk assessment and mitigation',
        'Regulatory compliance and legal guidance',
        'Property valuation and appraisal services',
        'Market trend analysis and forecasting',
        'Due diligence support'
      ],
      benefits: [
        'Reduce investment risks by up to 40%',
        'Access to exclusive market data',
        'Expert knowledge of Egyptian regulations',
        'Proven track record across 15+ cities'
      ]
    },
    {
      icon: Settings,
      title: 'Operations Management',
      description: 'Streamlined operational support to optimize development processes and maximize project efficiency.',
      features: [
        'Project management and oversight',
        'Vendor coordination and management',
        'Quality control systems implementation',
        'Timeline optimization and scheduling',
        'Budget management and cost control',
        'Progress monitoring and reporting'
      ],
      benefits: [
        'Reduce project timelines by 25%',
        'Improve cost efficiency',
        'Ensure quality standards',
        'Minimize operational risks'
      ]
    },
    {
      icon: PlaneTakeoff,
      title: 'Strategic Planning',
      description: 'Transform your vision into actionable development strategies with our comprehensive planning services.',
      features: [
        'Development roadmaps and timelines',
        'Financial planning and modeling',
        'Risk mitigation strategies',
        'Market positioning and branding',
        'Exit strategy planning',
        'Portfolio optimization'
      ],
      benefits: [
        'Maximize ROI potential',
        'Strategic market positioning',
        'Long-term growth planning',
        'Competitive advantage development'
      ]
    }
  ];

  const additionalServices = [
    {
      icon: TrendingUp,
      title: 'Market Research',
      description: 'In-depth analysis of Egyptian real estate markets to identify opportunities and trends.'
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Comprehensive risk assessment and mitigation strategies for development projects.'
    },
    {
      icon: Clock,
      title: 'Project Acceleration',
      description: 'Fast-track services to expedite project timelines without compromising quality.'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Rigorous quality control processes to ensure exceptional project outcomes.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Real Estate Development Services - Landhub Egypt</title>
        <meta name="description" content="Comprehensive real estate development services in Egypt including consultation, operations management, and strategic planning. Expert guidance for small and medium developers across Egyptian cities." />
        <meta name="keywords" content="real estate services Egypt, property development consultation, operations management, strategic planning, Egyptian real estate market, development services Cairo" />
        <meta property="og:title" content="Real Estate Development Services - Landhub Egypt" />
        <meta property="og:description" content="Expert real estate development services including consultation, operations management, and strategic planning for Egyptian developers." />
        <link rel="canonical" href="https://landhub.eg/services" />
      </Helmet>

      <div className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Comprehensive Real Estate Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 max-w-4xl mx-auto">
              Empowering Egyptian developers with expert consultation, seamless operations, 
              and strategic planning services designed for sustainable growth and success.
            </p>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Core Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Specialized services designed to address the unique challenges and opportunities 
                in the Egyptian real estate development market.
              </p>
            </div>

            <div className="space-y-16">
              {mainServices.map((service, index) => (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <service.icon className="h-8 w-8 text-blue-800" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                        {service.title}
                      </h3>
                    </div>
                    
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">What We Offer:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start space-x-3">
                              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Benefits:</h4>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <img 
                      src={`https://images.pexels.com/photos/${
                        index === 0 ? '3184291' : index === 1 ? '3184298' : '3184160'
                      }/pexels-photo-${
                        index === 0 ? '3184291' : index === 1 ? '3184298' : '3184160'
                      }.jpeg?auto=compress&cs=tinysrgb&w=800`}
                      alt={service.title}
                      className="rounded-xl shadow-2xl w-full h-80 object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Additional Specialized Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Complementary services to support every aspect of your real estate development journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {additionalServices.map((service, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                    <service.icon className="h-6 w-6 text-blue-800" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Development Project?
            </h2>
            <p className="text-xl text-blue-200 mb-8">
              Let's discuss how our services can accelerate your success in the Egyptian real estate market.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project Today
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;