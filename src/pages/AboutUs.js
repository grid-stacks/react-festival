import React from 'react';
import AboutUsTop from '../components/aboutus-page/AboutUsTop';
import Hero from '../components/aboutus-page/Hero';
import History from '../components/aboutus-page/History';
import Story from '../components/aboutus-page/Story';
import Navbar from '../components/Navbar';

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUsTop />
      <History />
      <Story />
    </>
  );
};

export default AboutUs;
