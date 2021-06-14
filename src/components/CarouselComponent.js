import React from 'react';
import { ImQuotesRight } from 'react-icons/im';
import { ImCircleRight } from 'react-icons/im';
import { ImCircleLeft } from 'react-icons/im';
import Carousel from 'react-elastic-carousel';
import styled from 'styled-components';
import man from '../images/man.jpeg';
const CarouselComponent = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <CarouselWapper>
      <Wrapper>
        <div className='container'>
          <div className='left'>
            <div className='img-container'>
              <img src={man} alt='' />
            </div>
          </div>
          <div className='right'>
            <div className='heading'>
              <span>
                <ImQuotesRight />
              </span>
              <span>
                <h5>Experts Highly</h5>
                <h4>Recomanded us</h4>
              </span>
            </div>
            <p className='review'>
              We will definitely use this app for our futere <br /> customers in
              the realstate and small business...! <br /> Excellent solutions
            </p>
            <div className='writer'>
              <h4>sandro</h4>
              <p>Seo Web Milan</p>
            </div>
          </div>
          <div className='carousel-btn'>
            <div className='left-btn'>
              <ImCircleLeft />
            </div>
            <div className='right-btn'>
              <ImCircleRight />
            </div>
          </div>
        </div>
      </Wrapper>
    </CarouselWapper>
  );
};

const CarouselWapper = styled.div`
  padding: 1rem;
`;
const Wrapper = styled.div`
  .container {
    position: relative;
    display: grid;
    background-color: #ffeac5;
    min-height: 400px;
    width: 90vw;
    max-width: 1160px;
    padding: 2rem 1.5rem;
    margin: 3.5rem auto;
    border-radius: 10px;
    @media (min-width: 900px) {
      grid-template-columns: 1fr 1fr;
    }
  }
  .left {
    position: relative;
  }
  .img-container {
    position: absolute;
    top: -30%;
    left: 25%;
    overflow: visible;
    height: 400px;
    width: 250px;
    border-radius: 99px;
    img {
      height: 100%;
      width: 100%;
      border-radius: 99px;
      object-fit: cover;
    }
  }
  .heading {
    display: flex;
    align-items: center;
    gap: 2rem;
    svg {
      font-size: 35px;
      color: #565658;
    }
    h5 {
      margin-bottom: 0.5rem;
      color: #565658;
    }
    h4 {
      font-weight: 600;
      letter-spacing: 1px;
    }
  }
  .review {
    margin-top: 2rem;
    letter-spacing: 2.5px;
    position: relative;
    ::before {
      content: '';
      height: 30px;
      width: 2px;
      position: absolute;
      top: 5px;
      left: -20px;
      background-color: #efbe84;
    }
  }
  .writer {
    margin-top: 3.5rem;
    h4 {
      font-weight: 600;
      letter-spacing: 2px;
      margin-bottom: 0.3rem;
    }
    p {
      position: relative;
      margin: 0;
      letter-spacing: 2px;
      word-spacing: 5px;
      margin-left: 3rem;
      ::before {
        content: '';
        height: 2px;
        width: 25px;
        position: absolute;
        top: 50%;
        left: -50px;
        background-color: #efbe84;
      }
    }
  }
  .carousel-btn {
    position: absolute;
    bottom: -2rem;
    display: flex;
    gap: 2rem;
    left: 50%;
    transform: translateX(-50%);
    svg {
      font-size: 40px;
      cursor: pointer;
      color: #515050;
      background-color: #e9e7ea;
      border-radius: 50%;
    }
  }
`;
export default CarouselComponent;
