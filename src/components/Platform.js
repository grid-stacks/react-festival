import React from 'react';
import styled from 'styled-components';
import camera from '../images/camera.webp';
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
  text-align: center;
  h3 {
    padding: 2rem 0;
    font-weight: 600;
    letter-spacing: 2px;
  }
  .container {
    width: 95vw;
    max-width: 1166px;
    margin: 2rem auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .single {
    position: relative;
    height: 280px;
    width: 340px;
    background-image: url(${camera});
    border-radius: 15px;
    background-size: cover;
    background-position: center;
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
    padding: 1rem;
    letter-spacing: 1px;
  }
  .button {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 2;
    bottom: 80px;
    left: 20px;
    padding: 0.2rem 1rem;
    border-radius: 10px;
    color: #fff;
    font-weight: 600;
    letter-spacing: 2px;
  }
`;
export default Platform;
