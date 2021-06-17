import React from 'react';
import styled from 'styled-components';
import blob from '../images/blob.png';
import center from '../images/center.png';
import top1 from '../images/top1.png';
import right from '../images/right.png';
import left from '../images/left.png';
import bottom2 from '../images/bottom2.png';
const JoinTours = () => {
  return (
    <Wrapper>
      <div className='container'>
        <div className='left'>
          <div className='img1'>
            <img src={center} alt='' />
          </div>
          <div className='top1'>
            <img src={top1} alt='' />
          </div>
          <div className='top2'>
            <img src={right} alt='' />
          </div>
          <div className='bottom1'>
            <img src={left} alt='' />
          </div>
          <div className='bottom2'>
            <img src={bottom2} alt='' />
          </div>
        </div>
        <div className='right'>
          <div className='right-container'>
            <h3>
              Join Millions Of <br /> 360 Virtual Tour Creators
            </h3>
            <p>
              P360 is a strong community of over 15 million creators around the
              world in over 180 countries. Best-in-class tools combined with an
              infinte creative canvas means that we are our home to the world's
              best 360 professionals that for your immersive inspiration.
            </p>
            <button className='btn trial-btn'>Start Free Trial</button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  overflow: hidden;
  .container {
    min-height: 870px;
    display: grid;

    margin: 100px auto;
    width: 100vw;
    max-width: 1366px;

    @media (min-width: 1100px) {
      grid-template-columns: 615px 1fr;
    }
    .left {
      position: relative;

      .img1 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      .top1 {
        position: absolute;
        top: 15%;
        left: 20%;
      }
      .top2 {
        position: absolute;
        top: 20%;
        right: 10%;
      }
      .bottom1 {
        position: absolute;
        bottom: 20%;
        left: 10%;
      }
      .bottom2 {
        position: absolute;
        bottom: 10%;
        right: 10%;
      }
    }
    .right {
      background-image: url(${blob});
      background-repeat: no-repeat;
      width: 100%;

      background-position: center auto;
      display: flex;
      align-items: center;
      justify-content: center;
      @media (max-width: 1000px) {
        background-image: none;
      }
    }
    .right-container {
      max-width: 80vw;
      h3 {
        line-height: 55px;
      }
      p {
        max-width: 405px;
      }
      .trial-btn {
        height: 46px;
        width: 239px;
        background-color: #262525;
        margin-top: 50px;
        margin-left: 30px;
      }
    }
  }
`;
export default JoinTours;
