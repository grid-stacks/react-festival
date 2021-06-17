import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import c1 from '../images/c1.png';
import c2 from '../images/c2.png';
import c3 from '../images/c3.png';
import daniel from '../images/daniel.png';

const LearnMoreCarousel = () => {
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
      <section className='section absolute'>
        <h3>Learn More</h3>

        <Slider {...settings} className='slider'>
          <div className='wrapper'>
            <img src={c1} alt='' />
            <div className='content'>
              <h5>Understanding TeliportMe cul..</h5>
              <p className='body2'>
                Culture is a heavy word, its not something that can be measured
                yet can be felt within the confines of an office space,
                interactions of your product and behaviour of
              </p>
              <div className='footer'>
                <div className='left'>
                  <img src={daniel} alt='' />
                  <p>Vineet Devaiah</p>
                </div>
                <div className='right'>
                  <p className='body2'>Jun 2021</p>
                  <h4>05</h4>
                </div>
              </div>
            </div>
          </div>

          <div className='wrapper'>
            <img src={c2} alt='' />
            <div className='content'>
              <h5>Structure to the Culture Prob..</h5>
              <p className='body2'>
                Culture is a heavy word, its not something that can be measured
                yet can be felt within the confines of an office space,
                interactions of your product and behaviour of
              </p>
              <div className='footer'>
                <div className='left'>
                  <img src={daniel} alt='' />
                  <p>Vineet Devaiah</p>
                </div>
                <div className='right'>
                  <p className='body2'>Jun 2021</p>
                  <h4>05</h4>
                </div>
              </div>
            </div>
          </div>

          <div className='wrapper'>
            <img src={c3} alt='' />
            <div className='content'>
              <h5>AR needs a visual API for the..</h5>
              <p className='body2'>
                Culture is a heavy word, its not something that can be measured
                yet can be felt within the confines of an office space,
                interactions of your product and behaviour of
              </p>
              <div className='footer'>
                <div className='left'>
                  <img src={daniel} alt='' />
                  <p>Vineet Devaiah</p>
                </div>
                <div className='right'>
                  <p className='body2'>Jun 2021</p>
                  <h4>05</h4>
                </div>
              </div>
            </div>
          </div>
          <div className='wrapper'>
            <img src={c2} alt='' />
            <div className='content'>
              <h5>Understanding TeliportMe cul..</h5>
              <p className='body2'>
                Culture is a heavy word, its not something that can be measured
                yet can be felt within the confines of an office space,
                interactions of your product and behaviour of
              </p>
              <div className='footer'>
                <div className='left'>
                  <img src={daniel} alt='' />
                  <p>Vineet Devaiah</p>
                </div>
                <div className='right'>
                  <p className='body2'>Jun 2021</p>
                  <h4>05</h4>
                </div>
              </div>
            </div>
          </div>

          <div className='wrapper'>
            <img src={c3} alt='' />
            <div className='content'>
              <h5>Understanding TeliportMe cul..</h5>
              <p className='body2'>
                Culture is a heavy word, its not something that can be measured
                yet can be felt within the confines of an office space,
                interactions of your product and behaviour of
              </p>
              <div className='footer'>
                <div className='left'>
                  <img src={daniel} alt='' />
                  <p>Vineet Devaiah</p>
                </div>
                <div className='right'>
                  <p className='body2'>Jun 2021</p>
                  <h4>05</h4>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  background-color: #ffe8b9;
  min-height: 473px;
  position: relative;
  margin-top: 300px;
  .section {
    max-width: 1200px;
    h3 {
      margin-bottom: 65px;
      text-align: center;
    }
  }
  .absolute {
    position: absolute;
    top: -40%;
    left: 50%;
    transform: translateX(-50%);
  }
  .slider {
    .wrapper {
      width: 95%;
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
  }
  .slick-prev {
    left: 65%;
    :before {
      font-family: FontAwesome;
      content: '\f104';
      color: #222;
      font-weight: 900;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .slick-next {
    left: 72%;
    :before {
      font-family: FontAwesome;
      content: '\f105';
      color: #222;
      font-weight: 900;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
export default LearnMoreCarousel;
