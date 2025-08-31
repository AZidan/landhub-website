import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';
import Hero from '../components/Hero';
import ServicesPreview from '../components/ServicesPreview';
import AboutPreview from '../components/AboutPreview';
import TeamPreview from '../components/TeamPreview';
import TestimonialsPreview from '../components/TestimonialsPreview';
import ContactPreview from '../components/ContactPreview';

const Home = () => {
  const { language } = useLanguage();

  return (
    <>
      <Helmet>
        <title>{getTranslation('siteTitle', language)}</title>
        <meta name="description" content={getTranslation('siteDescription', language)} />
        <meta name="keywords" content="real estate Egypt, property development, real estate consultation, Egyptian real estate market, property investment, development services, Cairo real estate, Alexandria property" />
        <meta property="og:title" content={getTranslation('siteTitle', language)} />
        <meta property="og:description" content={getTranslation('siteDescription', language)} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://landhub.eg" />
        <link rel="canonical" href="https://landhub.eg" />
      </Helmet>
      
      <Hero />
      <ServicesPreview />
      <AboutPreview />
      <TeamPreview />
      <TestimonialsPreview />
      <ContactPreview />
    </>
  );
};

export default Home;