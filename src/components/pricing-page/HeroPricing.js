import React from 'react';
import styled from 'styled-components';

const HeroPricing = () => {
  return (
    <Wrapper className='section'>
      <HeroSection>
        <p className='create'>create & share</p>
        <h1>
          fastest virtual <br /> tour software
        </h1>
        <p className='trust'>
          Trusted by <span> 15 Million </span> creators and{' '}
          <span> 20,000+ </span> B usinesses
        </p>
      </HeroSection>
    </Wrapper>
  );
};
const Wrapper = styled.section``;

const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 100px;
  .create {
    margin-bottom: 5px;
    letter-spacing: 4px;
    font-weight: 400;

    text-transform: capitalize;
  }
  .trust {
    font-size: 16px;
    margin-bottom: 20px;
    span {
      color: #33b864;
      font-size: 20px;
      font-weight: 700;
      margin: 0 2px;
    }
  }

  h1 {
    margin: 0;

    word-spacing: 5px;
    line-height: 65px;
  }
`;
export default HeroPricing;
