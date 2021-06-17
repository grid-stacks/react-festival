import React from 'react';
import CarouselComponent from '../components/CarouselComponent';
import Company from '../components/Company';
import Hero from '../components/Hero';
import Platform from '../components/Platform';
import Embeded from '../components/Embeded';
import VirtualSettings from '../components/VirtualSettings';
import CreatorFeatures from '../components/CreatorFeatures';
import CustomizeTour from '../components/CustomizeTour';
import LearnMoreCarousel from '../components/LearnMoreCarousel';
import JoinTours from '../components/JoinTours';
import WebinarTraining from '../components/WebinarTrainig';
const Home = () => {
  return (
    <div className='App'>
      <Hero />
      <Company />
      <CarouselComponent />
      <Platform />
      <Embeded />
      <VirtualSettings />
      <CreatorFeatures />
      <CustomizeTour />
      <LearnMoreCarousel />
      <JoinTours />
      <WebinarTraining />
    </div>
  );
};

export default Home;
