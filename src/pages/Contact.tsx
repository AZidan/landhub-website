import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Calendar, Users } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      projectType: '',
      budget: '',
      timeline: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Head Office',
      details: ['New Cairo Business District', 'Fifth Settlement, Cairo, Egypt', 'Building 7, Floor 3, Office 301']
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['+20 2 1234 5678 (Main)', '+20 10 9876 5432 (Mobile)', '+20 2 8765 4321 (Fax)']
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: ['info@landhub.eg (General)', 'projects@landhub.eg (Projects)', 'support@landhub.eg (Support)']
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Sunday - Thursday: 9:00 AM - 6:00 PM', 'Friday: 9:00 AM - 2:00 PM', 'Saturday: Closed']
    }
  ];

  const officeLocations = [
    {
      city: 'Cairo',
      address: 'New Cairo Business District, Fifth Settlement',
      phone: '+20 2 1234 5678',
      manager: 'Ahmed Hassan'
    },
    {
      city: 'Alexandria',
      address: 'Smouha District, Alexandria',
      phone: '+20 3 9876 5432',
      manager: 'Fatma El-Zahra'
    },
    {
      city: 'Giza',
      address: 'Sheikh Zayed City, Giza',
      phone: '+20 2 5555 1234',
      manager: 'Omar Mahmoud'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Landhub - Real Estate Development Consultation Egypt</title>
        <meta name="description" content="Contact Landhub for expert real estate development services in Egypt. Get consultation, operations management, and strategic planning support. Offices in Cairo, Alexandria, and Giza." />
        <meta name="keywords" content="contact Landhub, real estate consultation Egypt, property development contact, Egyptian real estate services, Cairo real estate consultancy" />
        <meta property="og:title" content="Contact Landhub - Real Estate Development Consultation Egypt" />
        <meta property="og:description" content="Get in touch with Egypt's leading real estate development consultancy. Expert services across Cairo, Alexandria, and Giza." />
        <link rel="canonical" href="https://landhub.eg/contact" />
      </Helmet>

      <div className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 max-w-4xl mx-auto">
              Ready to accelerate your real estate development? Let's discuss how 
              we can help you achieve your goals in the Egyptian market.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-8">
                  <MessageCircle className="h-8 w-8 text-blue-800 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Send Us a Message</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your company name"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="+20 xxx xxx xxxx"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Service Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select a service</option>
                        <option value="consultation">Real Estate Consultation</option>
                        <option value="operations">Operations Management</option>
                        <option value="planning">Strategic Planning</option>
                        <option value="market-research">Market Research</option>
                        <option value="all">All Services</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select project type</option>
                        <option value="residential">Residential Development</option>
                        <option value="commercial">Commercial Development</option>
                        <option value="mixed-use">Mixed-Use Development</option>
                        <option value="industrial">Industrial Development</option>
                        <option value="hospitality">Hospitality Development</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                        Project Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-10m">Under 10M EGP</option>
                        <option value="10m-50m">10M - 50M EGP</option>
                        <option value="50m-100m">50M - 100M EGP</option>
                        <option value="100m-500m">100M - 500M EGP</option>
                        <option value="over-500m">Over 500M EGP</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                        Project Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select timeline</option>
                        <option value="immediate">Immediate (Within 1 month)</option>
                        <option value="short-term">Short-term (1-6 months)</option>
                        <option value="medium-term">Medium-term (6-12 months)</option>
                        <option value="long-term">Long-term (1+ years)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Tell us about your project, location, goals, and how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-800 hover:bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <span>Send Message</span>
                    <Send className="h-5 w-5" />
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h2>
                  
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-800 rounded-lg flex items-center justify-center">
                          <info.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {info.title}
                          </h3>
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-gray-600">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-800 rounded-xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">Why Choose Landhub?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Local market expertise with international standards</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Proven track record across 15+ Egyptian cities</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>End-to-end project support and guidance</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Flexible solutions tailored to your specific needs</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>24/7 support during critical project phases</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Office Locations */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Office Locations
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Strategically located across Egypt's major cities to serve you better.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {officeLocations.map((office, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-6">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{office.city} Office</h3>
                  <p className="text-gray-600 mb-4">{office.address}</p>
                  <p className="text-blue-800 font-semibold mb-2">{office.phone}</p>
                  <p className="text-sm text-gray-500">Manager: {office.manager}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Common questions about our services and how we can help your development project.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: 'What types of real estate projects do you work with?',
                  answer: 'We work with all types of real estate development projects including residential, commercial, mixed-use, industrial, and hospitality developments across Egypt.'
                },
                {
                  question: 'How long does a typical consultation process take?',
                  answer: 'Our consultation timeline varies based on project complexity, typically ranging from 2-8 weeks for comprehensive market analysis and strategic planning.'
                },
                {
                  question: 'Do you provide services outside of Cairo?',
                  answer: 'Yes, we provide services across 15+ Egyptian cities including Alexandria, Giza, Sharm El Sheikh, Hurghada, and other major urban centers.'
                },
                {
                  question: 'What is your fee structure?',
                  answer: 'Our fees are project-based and depend on scope, timeline, and complexity. We offer flexible payment structures including milestone-based payments.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;