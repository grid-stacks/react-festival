import React from 'react';
import styled from 'styled-components';

import bg from '../images/bg.png';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <Wrapper>
      <div className='bg'>
        <div className='curve'></div>
        <Navbar />
        <HeroSection>
          <p className='create'>create & share</p>
          <h1>
            fastest virtual <br /> tour software
          </h1>
          <p className='trust'>
            Trusted by <span> 15 Million </span> creators and{' '}
            <span> 20,000+ </span> B usinesses
          </p>
          <div className='btn-container'>
            <button className='btn trial-btn'>Start Free Trial</button>
            <button className='btn demo-btn'>Request demo</button>
          </div>
        </HeroSection>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .bg {
    height: 104vh;
    background-image: url(${bg});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: right;
    position: relative;
    overflow: hidden;

    ::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        90deg,
        rgba(254, 243, 216, 1) 0%,
        rgba(254, 243, 216, 0.9164040616246498) 48%,
        rgba(254, 243, 216, 0.5) 100%
      );
      // background: linear-gradient(
      //     to right,
      //     // rgba(254, 243, 216, 1),
      //     #fef3d8,
      //     rgba(235, 204, 162, 0.5)
      // );
      z-index: 1;
    }
  }

  .curve {
    width: 100%;
    height: 65px;
    background-color: #fff;
    border-radius: 0 0 50% 50%/0 0 100% 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 3;
    transform: rotate(180deg) scaleX(1.1);
  }
`;

const HeroSection = styled.div`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  z-index: 10;
  width: 95vw;
  max-width: 600px;
  margin: 0 auto;

  margin-top: -3rem;
  position: relative;
  @media (max-width: 799px) {
    margin-top: 0rem;
  }
  .create {
    margin-bottom: 5px;
    letter-spacing: 4px;
    font-weight: 400;
    margin-left: 6.7rem;
    position: relative;
    text-transform: capitalize;
    @media (max-width: 600px) {
      font-size: 12px;
      margin-left: 6.7rem;
    }
    ::before {
      content: '';
      height: 2px;
      width: 56px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: -100px;
      background-color: #222;
    }
  }
  .trust {
    font-size: 16px;
    margin-bottom: 20px;
    @media (max-width: 600px) {
      font-size: 14px;
      margin: 0;
    }
    span {
      color: #33b864;
      font-size: 20px;
      font-weight: 700;
      margin: 0 2px;
      @media (max-width: 600px) {
        font-size: 14px;
      }
    }
  }

  h1 {
    margin: 0;
    word-spacing: 5px;
    line-height: 65px;
    @media (max-width: 600px) {
      font-size: 20px;
      line-height: 40px;
    }
  }
  .btn-container {
    margin-top: 1.5rem;
    display: flex;
    gap: 2rem;
    @media (max-width: 400px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 0.5rem;
      gap: 1rem;
    }

    .trial-btn {
      background-color: #33b864;
      width: 262px;
      height: 56px;
      @media (max-width: 600px) {
        width: 200px;
        height: 46px;
      }
    }
    .demo-btn {
      background-color: #222;
      width: 262px;
      height: 56px;
      @media (max-width: 600px) {
        width: 200px;
        height: 46px;
      }
    }
  }
`;
export default Hero;
