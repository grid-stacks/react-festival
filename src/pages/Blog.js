import React from 'react';
import HeroBlog from '../components/blog/HeroBlog';
import StartTrial from '../components/blog/StartTrial';
import Middle1 from '../components/blog/Middle1';
import Middle2 from '../components/blog/Middle2';
import Navbar from '../components/Navbar';
import MiddleImg from '../components/blog/MiddleImg';
import CarouselComponent from '../components/CarouselComponent';
import LearnMoreCarousel from '../components/LearnMoreCarousel';
import styled from 'styled-components';

const Blog = () => {
  return (
    <>
      <Navbar />
      <HeroBlog />
      <StartTrial />
      <Middle1 />
      <Middle2 />
      <MiddleImg />
      <CarouselComponent />
      <LearnMoreCarousel />
      <MarginBottom></MarginBottom>
    </>
  );
};
const MarginBottom = styled.div`
  margin-top: 100px;
`;
export default Blog;
