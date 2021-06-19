import React from 'react';
import Navbar from '../components/Navbar';
import FrequentlyAsked from '../components/pricing-page/FrequentlyAsked';
import HeroPricing from '../components/pricing-page/HeroPricing';
import PricingWrapper from '../components/pricing-page/PricingWrapper';

const Pricing = () => {
  return (
    <>
      <Navbar />
      <HeroPricing />
      <PricingWrapper />
      <FrequentlyAsked />
    </>
  );
};

export default Pricing;
