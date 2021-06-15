import React, { useState } from 'react';
import { ImQuotesRight } from 'react-icons/im';

import { MdKeyboardArrowLeft } from 'react-icons/md';
import { MdKeyboardArrowRight } from 'react-icons/md';
import styled from 'styled-components';
import man from '../images/man.jpeg';
import man2 from '../images/man2.jpeg';

const data = [
  {
    img: `${man}`,
    heading1: 'Experts highly',
    heading2: 'Recomanded us',
    review: ` Testimonials or quotes from your customers are one of the most common forms of customer reviews. You’re most likely to find them on a company website. `,
    heading3: 'Shanto',
    heading4: 'Frontend Developer',
  },
  {
    img: `${man2}`,
    heading1: 'Experts highly',
    heading2: 'Recomanded us',
    review: ` We will definitely use this app for our futere  customers in
              the realstate and small business...!  Excellent solutions`,
    heading3: 'sandro',
    heading4: 'Seo Web Milan',
  },
];
const CarouselComponent = () => {
  const [index, setIndex] = useState(0);
  const { img, heading1, heading2, heading3, heading4, review } = data[index];

  const increase = () => {
    setIndex(index + 1);
    console.log(data.length);
    if (index >= data.length - 1) {
      setIndex(0);
    }
  };
  const decrease = () => {
    setIndex(index - 1);
    if (index <= 0) {
      setIndex(data.length - 1);
    }
  };
  return (
    <CarouselWrapper>
      <Wrapper>
        <div className='container'>
          <div className='left'>
            <div className='img-container'>
              <img src={img} alt='' />
            </div>
          </div>
          <div className='right'>
            <div className='heading'>
              <span>
                <ImQuotesRight />
              </span>
              <span>
                <p>{heading1}</p>
                <h4>{heading2}</h4>
              </span>
            </div>
            <p className='review'>{review}</p>
            <div className='writer'>
              <h4>{heading3}</h4>
              <p>{heading4}</p>
            </div>
          </div>
          <div className='carousel-btn'>
            <div className='left-btn'>
              <MdKeyboardArrowLeft onClick={decrease} />
            </div>
            <div className='right-btn'>
              <MdKeyboardArrowRight onClick={increase} />
            </div>
          </div>
        </div>
      </Wrapper>
    </CarouselWrapper>
  );
};

const CarouselWrapper = styled.div`
  padding: 1rem;
`;
const Wrapper = styled.div`
  margin-top: 2rem;
  .container {
    position: relative;
    display: grid;
    background-color: #ffe8b9;
    min-height: 482px;
    width: 90vw;
    max-width: 1140px;
    padding: 1.5rem;
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
    align-items: flex-end;
    gap: 2rem;
    margin-bottom: 3rem;
    svg {
      font-size: 35px;
      color: #565658;
    }
    p {
      margin-bottom: 0.5rem;
      font-size: 20px;
      color: #565658;
      font-weight: 400;
    }
    h4 {
      letter-spacing: 1px;
      margin-bottom: 0;
    }
  }
  .review {
    margin-top: 1rem;
    font-size: 20px;
    letter-spacing: 0px;
    position: relative;
    padding-right: 1.2rem;
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
      font-size: 24px;
    }
    p {
      font-weight: 600;
      position: relative;
      margin: 0;
      letter-spacing: 3px;
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
      border: 2px solid #222;
    }
  }
`;
export default CarouselComponent;
