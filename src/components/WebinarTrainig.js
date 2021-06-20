import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import c21 from '../images/c21.png';
import c23 from '../images/c23.png';
import c22 from '../images/c22.png';
import daniel from '../images/daniel.png';

const WebinarTraining = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Wrapper>
      <section className='section'>
        <h3>Webinar Training</h3>

        <Slider {...settings} className='slider'>
          <div className='wrapper'>
            <img src={c23} alt='' />
            <div className='content'>
              <h5>Photography Masterclass: A Complete Guide to Photography</h5>
              <p className='body2'>Skill1, skil2, skill3, skill4</p>
            </div>
          </div>
          <div className='wrapper'>
            <img src={c22} alt='' />
            <div className='content'>
              <h5>Photography Masterclass: A Complete Guide to Photography</h5>
              <p className='body2'>Skill1, skil2, skill3, skill4</p>
            </div>
          </div>
          <div className='wrapper'>
            <img src={c21} alt='' />
            <div className='content'>
              <h5>Photography Masterclass: A Complete Guide to Photography</h5>
              <p className='body2'>Skill1, skil2, skill3, skill4</p>
            </div>
          </div>
          <div className='wrapper'>
            <img src={c22} alt='' />
            <div className='content'>
              <h5>Photography Masterclass: A Complete Guide to Photography</h5>
              <p className='body2'>Skill1, skil2, skill3, skill4</p>
            </div>
          </div>
          <div className='wrapper'>
            <img src={c21} alt='' />
            <div className='content'>
              <h5>Photography Masterclass: A Complete Guide to Photography</h5>
              <p className='body2'>Skill1, skil2, skill3, skill4</p>
            </div>
          </div>
        </Slider>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  min-height: 473px;

  .section {
    padding-left: 2rem;
    max-width: 1300px;
    margin: 0 auto;
    @media (max-width: 1000px) {
      padding-left: 0rem;
    }
    h3 {
      margin-bottom: 65px;
      text-align: center;
    }
  }

  .slider {
    .wrapper {
      background-color: #fff;
      max-width: 378px;
      border-radius: 10px;
      height: 486px;

      img {
        width: 100%;
      }

      .content {
        padding: 1.5rem;
        h5 {
          letter-spacing: 0;
          font-weight: 600;
        }
        p {
          color: #707070;
        }
      }
    }

    .footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;

      .left {
        display: flex;
        align-items: center;
        gap: 1rem;
        img {
          height: 36px;
          width: 36px;
          object-fit: cover;
        }
      }
      .right {
        .body2 {
          margin: 0;
          margin-bottom: 0.3rem;
        }
        h4 {
          color: #707070;
          margin-bottom: 0;
        }
      }
    }
  }

  .slick-arrow {
    position: absolute;
    top: -17%;
    height: 46px;
    width: 46px;
    border-radius: 50%;
    background-color: #e4e4eb;
    border: 2px solid #222;
    color: #222;
    @media (max-width: 900px) {
      top: -7%;
    }
  }
  .slick-prev {
    left: 15%;
    :before {
      font-family: FontAwesome;
      content: '\f104';
      color: #222;
      font-weight: 900;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    @media (max-width: 900px) {
      left: 30%;
    }
  }
  .slick-next {
    left: 20%;
    :before {
      font-family: FontAwesome;
      content: '\f105';
      color: #222;
      font-weight: 900;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    @media (max-width: 900px) {
      left: 50%;
    }
  }
`;
export default WebinarTraining;
