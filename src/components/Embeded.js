import React, { useState } from 'react';
import styled from 'styled-components';
import vr from '../images/vr-icon.png';
import camera from '../images/360-camera-icon.png';
import VirtualSettings from './VirtualSettings';
const Embeded = () => {
  const [virtual, setVirtual] = useState(true);

  return (
    <>
      <Wrapper className='section'>
        <h3>Powerful Embed To Share 360 Anywhere</h3>
        <p>
          More than 100,000 business’s use our embed functionality on their
          websites Our embed is supported on Wordpress, Jumla, Wix, Squarespace
        </p>
        <div className='container'>
          <div
            className={virtual ? 'tour show' : 'tour'}
            onClick={() => setVirtual(true)}
          >
            <img src={vr} alt='' />
            <p>Virtual tours</p>
            {virtual && <div className='active'></div>}
          </div>

          <div
            className={!virtual ? 'single show' : 'single'}
            onClick={() => setVirtual(false)}
          >
            <img src={camera} alt='' />
            <p>Single 360</p>
            {!virtual && <div className='active'></div>}
          </div>
        </div>
      </Wrapper>
      {virtual && <VirtualSettings />}
      {!virtual && <VirtualSettings />}
    </>
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
    position: relative;
    display: flex;
    align-items: center;
    gap: 1.5rem;
    cursor: pointer;
    opacity: 0.5;
    img {
      width: 60px;
      height: 40px;
    }
  }

  .single {
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 1.5rem;
    opacity: 0.5;
    img {
      width: 50px;
      height: 46px;
    }
  }

  .show {
    opacity: 1;
    padding: 0.7rem;
    box-shadow: var(--shadow-1);
  }

  .active {
    position: absolute;
    height: 2px;
    width: 30px;
    background-color: #222;
    border-radius: 5px;
    top: 80%;
    left: 50%;
    /* p {
      border-bottom: 2px solid #222;
      padding-bottom: 15px;
      border-radius: 1px;
    } */
  }
`;
export default Embeded;
