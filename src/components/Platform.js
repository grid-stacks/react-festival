import React from 'react';
import styled from 'styled-components';
import camera from '../images/camera.png';
const Platform = () => {
  return (
    <Wrapper>
      <h3>One easy platform for all type of needs</h3>
      <div className='container'>
        <div className='single'>
          <div className='content'>
            One virtual tour for life <br />
            Starting as low as $50 one time
          </div>
          <div className='button'>Solo</div>
        </div>
        <div className='single'>
          <div className='content'>
            One virtual tour for life <br />
            Starting as low as $50 one time
          </div>
          <div className='button'>Solo</div>
        </div>
        <div className='single'>
          <div className='content'>
            One virtual tour for life <br />
            Starting as low as $50 one time
          </div>
          <div className='button'>Solo</div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin-top: 1rem;
  h3 {
    text-align: center;
    padding: 2rem 0;
  }
  .container {
    width: 95vw;
    max-width: 1166px;
    margin: 2rem auto;
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 800px) {
      justify-content: space-around;
    }
  }
  .single {
    position: relative;
    height: 280px;
    width: 340px;
    background-image: url(${camera});
    border-radius: 15px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: right;
  }
  .content {
    position: absolute;
    width: 100%;
    height: 100px;
    bottom: 0;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    display: flex;
    align-items: center;
    padding: 1.5rem;
    font-weight: 600;
  }
  .button {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 2;
    bottom: 85px;
    left: 20px;
    padding: 0.2rem 1rem;
    border-radius: 10px;
    color: #fff;
    font-weight: 600;
    letter-spacing: 2px;
  }
`;
export default Platform;
