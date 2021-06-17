import React from 'react';
import styled from 'styled-components';
import vr from '../images/vr-icon.png';
import camera from '../images/360-camera-icon.png';
const Embeded = () => {
  return (
    <Wrapper className='section'>
      <h3>Powerful Embed To Share 360 Anywhere</h3>
      <p>
        More than 100,000 business’s use our embed functionality on their
        websites Our embed is supported on Wordpress, Jumla, Wix, Squarespace
      </p>
      <div className='container'>
        <div className='tour'>
          <img src={vr} alt='' />
          <p>Virtual tours</p>
        </div>
        <div className='single'>
          <img src={camera} alt='' />
          <p>Single 360</p>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  text-align: center;
  margin-top: 100px;
  margin-bottom: 56px;
  p {
    max-width: 670px;
    margin: auto;
  }
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 450px;
    margin: 0 auto;
    margin-top: 55px;
    gap: 2rem 1rem;
    @media (max-width: 600px) {
      justify-content: space-around;
    }
  }
  .tour {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    cursor: pointer;
    img {
      width: 60px;
      height: 40px;
    }
  }
  .single {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 1.5rem;
    img {
      width: 50px;
      height: 46px;
    }
  }
`;
export default Embeded;
