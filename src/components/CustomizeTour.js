import React from 'react';
import styled from 'styled-components';
import image1 from '../images/Image1.png';
const CustomizeTour = () => {
  return (
    <Wrapper className='section'>
      <div className='container'>
        <div className='content'>
          <h3>Customize Your Tour Branding</h3>
          <p className='body2'>
            Experience 360 photos. Supported on Oculus Go, Samsung Gear VR,
            Android and iOS.
          </p>
          <div className='btn-container'>
            <button className='btn player-btn'>Virtual Reality player</button>
            <button className='btn player-btn active'>
              Virtual Reality player
            </button>
            <button className='btn player-btn'>Virtual Reality player</button>
            <button className='btn player-btn'>Virtual Reality player</button>
            <button className='btn player-btn'>Virtual Reality player</button>
            <button className='btn player-btn'>Virtual Reality player</button>
          </div>
        </div>
        <div className='img-container'>
          <img src={image1} alt='' />
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  margin-bottom: 135px;
  .container {
    display: grid;
    gap: 5rem;
    align-items: center;
    overflow: hidden;
    @media (min-width: 1100px) {
      grid-template-columns: 1fr 2fr;
    }
    h3 {
      line-height: 55px;
      letter-spacing: 2px;
    }
    .body2 {
      max-width: 269px;
    }
    .player-btn {
      background-color: #e4e4eb;
      height: 46px;
      width: 286px;
      color: #262525;
      font-size: 14px;
      font-weight: 600;
      clip-path: polygon(8% 0, 95% 0, 100% 50%, 90% 100%, 0 100%);
      margin-bottom: 25px;
    }
    .active {
      background-color: #262525;
      color: #fff;
    }
  }
  .img-container {
    img {
      width: 100%;
    }
  }
`;
export default CustomizeTour;
